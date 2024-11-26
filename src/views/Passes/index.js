/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box } from '@mui/material';
import TableStyle from '../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import Iconify from '../../ui-component/iconify';
import AddPasses from './AddPasses';
// ----------------------------------------------------------------------

const callData = [
  {
    id: 1,
    Name: 'Neeraj Chouhan',
    passCode: 'neer0604',
    validityTo: '08/01/2024',
    accessLevel: '30 min',
    more:'edit'
  }
];
const Passes = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const columns = [
    {
      field: 'Name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize'
    },

    {
      field: 'passCode',
      headerName: 'Pass Code',
      flex: 1
    },

    {
      field: 'validityTo',
      headerName: 'Validity To',
      flex: 1
    },
    {
      field: 'accessLevel',
      headerName: 'Access Level',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'more',
      headerName: 'More',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    }
  ];
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  return (
    <>
      <AddPasses open={openAdd} handleClose={handleCloseAdd} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Passes Management</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              New Pass
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={callData}
                columns={columns}
                checkboxSelection
                getRowId={(row) => row.id}
                slots={{ toolbar: GridToolbar }}
                slotProps={{ toolbar: { showQuickFilter: true } }}
              />
            </Card>
          </Box>
        </TableStyle>
      </Container>
    </>
  );
};

export default Passes;
