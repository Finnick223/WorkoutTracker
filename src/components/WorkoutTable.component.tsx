import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  DataGrid,
  GridColDef,
  GridRowModes,
  GridRowModesModel,
  GridRowsProp,
  GridSlots,
  GridToolbarContainer,
  GridColumnGroupingModel,
} from '@mui/x-data-grid';
import { useState } from 'react';

const initialRows = [
  {
    id: Math.random().toString(36).substr(2, 9),
    name: 'ława',
    weight1: '60',
    reps1: '10',
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: 'siady',
    weight1: '100',
    reps1: '8',
  },
];

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
}

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

export default function Table() {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});

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
      />
    </Box>
  );
}
