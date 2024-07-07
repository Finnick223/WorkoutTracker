import { Box, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridColDef, GridRowModes, GridRowModesModel, GridRowsProp, GridSlots, GridToolbarContainer } from "@mui/x-data-grid";
import { useState } from "react";




const initialRows = [
  {
    id: Math.random().toString(36).substr(2, 9),
    name: 'ława',
    set1: '12',
    set2: '10'
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: 'siady',
    set1: '10',
    set2: '8'
  },
];

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
}
function EditToolbar(props: EditToolbarProps) {
  const {setRows, setRowModesModel} = props;

  const handleClick = () => {
    const id = Math.random().toString(36).substr(2, 9);
    setRows((oldRows) => [...oldRows, { id, name: '', set1: '', set2: ''}]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };
  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default function Table() {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});

  const columns: GridColDef[] = [
    {field: 'name', headerName: 'Exercise', width: 180, editable: true},
    {
      field: 'set1',
      headerName: 'set1',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'set2',
      headerName: 'set2',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
  ]
  return (
    <Box
      sx={{
        height: 500,
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
      />

    </Box>
  );
}
