import { Box } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridRowModes,
  GridRowModesModel,
  GridSlots,
  GridColumnGroupingModel,
  GridRowModel,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowId,
  GridActionsCellItem,
} from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from 'react';
import useAuthStatus from 'src/hooks/useAuth';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Rows } from 'src/interfaces/Interfaces';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import EditToolbar from '@utils/EditToolbar';
import {
  useDeleteExercise,
  useGetTrainingDetails,
  useUpdateExercise,
} from 'src/api/exerciseGridQueryHooks';

export default function ExerciseGrid() {
  const [rows, setRows] = useState<Rows[]>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const { token } = useAuthStatus();
  const location = useLocation();

  const trainingId = location.pathname.split('/').pop();
  if (!trainingId) throw new Error('trainingId doesnt exist');

  const { data, isSuccess } = useGetTrainingDetails(token, trainingId);
  const MutationDelete = useDeleteExercise();
  const MutationUpdate = useUpdateExercise();

  useEffect(() => {
    if (isSuccess && data.exercises) {
      const transformedRows = data.exercises.map((exercise) => {
        const flattenedSets = exercise.sets?.reduce((acc: any, set, index) => {
          acc[`weight${index + 1}`] = set.weight;
          acc[`reps${index + 1}`] = set.reps;
          return acc;
        }, {});
        return { ...exercise, ...flattenedSets };
      });
      setRows(transformedRows);
    }
  }, [isSuccess, data]);

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (
    params,
    event,
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    const exerciseId = id as string;
    setRows(rows.filter((row) => row.id !== id));
    MutationDelete.mutate({ token, exerciseId });
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const processRowUpdate = (
    newRow: GridRowModel,
    oldRow: GridRowModel,
  ): any => {
    const exerciseCreate = {
      name: newRow.name,
      trainingId: trainingId,
      sets: [
        { reps: newRow?.reps1, weight: newRow?.weight1 },
        { reps: newRow?.reps2, weight: newRow?.weight2 },
        { reps: newRow?.reps3, weight: newRow?.weight3 },
      ],
    };
    const exerciseId = newRow.id;
    MutationUpdate.mutate(
      { token, exerciseCreate, exerciseId },
      {
        onSuccess: () => {
          setRows((prevRows) =>
            prevRows.map((row) =>
              row.id === exerciseId ? { ...row, ...newRow } : row,
            ),
          );
        },
      },
    );
    return { ...newRow, id: exerciseId };
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleProcessRowUpdateError = useCallback((error: Error) => {
    toast.error(error.message);
  }, []);

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'name', width: 180, editable: true },
    {
      field: 'weight1',
      headerName: 'weight',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'reps1',
      headerName: 'reps',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'weight2',
      headerName: 'weight',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'reps2',
      headerName: 'reps',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'weight3',
      headerName: 'weight',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'reps3',
      headerName: 'reps',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
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
    },
  ];

  const ColumnGroupingModel: GridColumnGroupingModel = [
    {
      groupId: 'exercise',
      headerName: 'Exercise',
      children: [{ field: 'name' }],
    },
    {
      groupId: 'set1',
      headerName: 'set1',
      children: [{ field: 'weight1' }, { field: 'reps1' }],
    },
    {
      groupId: 'set2',
      headerName: 'set2',
      children: [{ field: 'weight2' }, { field: 'reps2' }],
    },
    {
      groupId: 'set3',
      headerName: 'set3',
      children: [{ field: 'weight3' }, { field: 'reps3' }],
    },
  ];

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
        getRowId={(row) => row.id as string}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        columnGroupingModel={ColumnGroupingModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        slots={{
          toolbar: EditToolbar as GridSlots['toolbar'],
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel, trainingId },
        }}
      />
    </Box>
  );
}
