import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  DataGrid,
  GridColDef,
  GridRowModes,
  GridRowModesModel,
  GridSlots,
  GridToolbarContainer,
  GridColumnGroupingModel,
} from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTrainingDetails } from 'src/api/auth';
import useAuthStatus from 'src/hooks/useAuth';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { EditToolbarProps, Rows } from 'src/interfaces/Interfaces';

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = Math.random().toString(36).substr(2, 9);
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        name: '',
        weight1: '',
        reps1: '',
        weight2: '',
        reps2: '',
        weight3: '',
        reps3: '',
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };
  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Exercise
      </Button>
    </GridToolbarContainer>
  );
}

//PUT MUTATION TO SAVE DATA ON API

export default function Table() {
  const [rows, setRows] = useState<Rows[]>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const { token } = useAuthStatus();
  const location = useLocation();

  const trainingId = location.pathname.split('/').pop();
  if (!trainingId) throw new Error('trainingId doesnt exist');

  const { data, isSuccess } = useQuery({
    queryKey: ['exercises', trainingId],
    queryFn: () => getTrainingDetails(token, trainingId),
  });

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
      console.log(transformedRows);
    }
  }, [isSuccess]);

  // const mutateRow = PUT MUTATION FUNCTION ();

  // const processRowUpdate = React.useCallback(
  //   async (newRow: GridRowModel) => {
  //     // Make the HTTP request to save in the backend
  //     const response = await mutateRow(newRow);
  //     return response;
  //   },
  //   [mutateRow],
  // );

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
        slots={{
          toolbar: EditToolbar as GridSlots['toolbar'],
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        columnGroupingModel={ColumnGroupingModel}
        // processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
      />
    </Box>
  );
}
