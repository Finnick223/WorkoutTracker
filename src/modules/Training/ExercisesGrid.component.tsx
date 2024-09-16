import { Box } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridRowModes,
  GridRowModesModel,
  GridSlots,
  GridRowModel,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowId,
  GridActionsCellItem,
  GridEditInputCell,
} from '@mui/x-data-grid';
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import useAuthStatus from 'src/hooks/useAuth';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Rows } from 'src/interfaces/exercises.interfaces';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import EditToolbar from '@utils/EditToolbar';
import {
  useDeleteExercise,
  useGetTrainingDetails,
  usePatchExercise,
} from 'src/hooks/useExerciseGridQueryHooks';
import {
  columnGroupingModel,
  exerciseNames,
} from 'src/constants/exerciseGrid.constants';
import { createExerciseUpdate } from '@utils/createExerciseUpdate';

export default function ExerciseGrid() {
  const [rows, setRows] = useState<Rows[]>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [numSets, setNumSets] = useState<number>(3);
  const { token } = useAuthStatus();
  const location = useLocation();

  const trainingId = location.pathname.split('/').pop();
  if (!trainingId) throw new Error('trainingId doesnt exist');

  const { data, isSuccess } = useGetTrainingDetails(token, trainingId);
  const MutationDelete = useDeleteExercise();
  const MutationUpdate = usePatchExercise();

  useEffect(() => {
    if (isSuccess && data.exercises) {
      const transformedRows: Rows[] = data.exercises.map((exercise) => {
        const flattenedSets = exercise.sets?.reduce(
          (acc, set, index) => {
            acc[`weight${index + 1}`] = set.weight;
            acc[`reps${index + 1}`] = set.reps;
            return acc;
          },
          {} as Record<string, number | undefined>,
        );
        return { ...exercise, ...flattenedSets };
      });
      setRows(transformedRows);

      const maxSets = data.exercises.reduce((max, exercise) => {
        return Math.max(max, exercise.sets?.length || 0);
      }, 0);
      setNumSets(maxSets > 0 ? maxSets : 3);
    }
  }, [isSuccess, data?.exercises]);

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (
    params,
    event,
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = useCallback(
    (id: GridRowId) => () => {
      setRowModesModel((prevModel) => ({
        ...prevModel,
        [id]: { mode: GridRowModes.Edit },
      }));
    },
    [],
  );

  const handleSaveClick = useCallback(
    (id: GridRowId) => () => {
      setRowModesModel((prev) => ({
        ...prev,
        [id]: { mode: GridRowModes.View },
      }));
    },
    [],
  );

  const handleDeleteClick = useCallback(
    (id: GridRowId) => () => {
      const exerciseId = id as string;
      MutationDelete.mutate(
        { token, trainingId, exerciseId },
        {
          onSuccess: () => {
            setRows(rows.filter((row) => row.id !== id));
          },
          onError: (error) => {
            toast.error(`Deletion failed: ${error.message}`);
          },
        },
      );
    },
    [MutationDelete, rows, token, trainingId],
  );

  const handleCancelClick = useCallback(
    (id: GridRowId) => () => {
      setRowModesModel((prev) => ({
        ...prev,
        [id]: { mode: GridRowModes.View, ignoreModifications: true },
      }));
    },
    [],
  );

  const processRowUpdate = (newRow: GridRowModel) => {
    const valid = Object.keys(newRow).every((key) => {
      if (key.startsWith('weight') || key.startsWith('reps')) {
        return newRow[key] >= 0 || newRow[key] === undefined;
      }
      return true;
    });

    if (!valid) {
      throw new Error('Weight and Reps must be positive numbers');
    }

    const exerciseUpdate = createExerciseUpdate(newRow);

    MutationUpdate.mutate(
      { token, exerciseUpdate: [exerciseUpdate], trainingId },
      {
        onSuccess: () => {
          setRows((prevRows) =>
            prevRows.map((row) =>
              row.id === newRow.id ? { ...row, ...newRow } : row,
            ),
          );
        },
        onError: (error) => {
          toast.error(`Update failed: ${error.message}`);
        },
      },
    );
    return { ...newRow, id: newRow.id };
  };
  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleProcessRowUpdateError = useCallback((error: Error) => {
    toast.error(error.message);
  }, []);

  const generateColumns = (
    numSets: number,
    rowModesModel: GridRowModesModel,
    handleSaveClick: (id: GridRowId) => MouseEventHandler<HTMLButtonElement>,
    handleCancelClick: (id: GridRowId) => MouseEventHandler<HTMLButtonElement>,
    handleEditClick: (id: GridRowId) => MouseEventHandler<HTMLButtonElement>,
    handleDeleteClick: (id: GridRowId) => MouseEventHandler<HTMLButtonElement>,
  ): GridColDef[] => {
    const columns: GridColDef[] = [
      {
        field: 'name',
        headerName: 'Name',
        width: 190,
        editable: true,
        type: 'singleSelect',
        valueOptions: exerciseNames,
      },
    ];

    for (let i = 1; i <= numSets; i++) {
      columns.push(
        {
          field: `weight${i}`,
          headerName: 'Weight',
          type: 'number',
          width: 120,
          align: 'left',
          headerAlign: 'left',
          editable: true,
          renderEditCell: (params) => (
            <GridEditInputCell
              {...params}
              inputProps={{
                min: 0,
              }}
            />
          ),
        },
        {
          field: `reps${i}`,
          headerName: 'Reps',
          type: 'number',
          width: 110,
          align: 'left',
          headerAlign: 'left',
          editable: true,
          renderEditCell: (params) => (
            <GridEditInputCell
              {...params}
              inputProps={{
                min: 0,
              }}
            />
          ),
        },
      );
    }

    columns.push({
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    });

    return columns;
  };

  const columns = useMemo(
    () =>
      generateColumns(
        numSets,
        rowModesModel,
        handleSaveClick,
        handleCancelClick,
        handleEditClick,
        handleDeleteClick,
      ),
    [
      numSets,
      rowModesModel,
      handleSaveClick,
      handleCancelClick,
      handleEditClick,
      handleDeleteClick,
    ],
  );

  return (
    <Box
      sx={{
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        getRowId={(row) => row.id}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        columnGroupingModel={columnGroupingModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        slots={{
          toolbar: EditToolbar as GridSlots['toolbar'],
        }}
        slotProps={{
          toolbar: {
            setRows,
            setRowModesModel,
            trainingId,
            numSets,
            setNumSets,
          },
        }}
      />
    </Box>
  );
}
