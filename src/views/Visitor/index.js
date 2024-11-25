/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Box, Card } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import Iconify from '../../ui-component/iconify';
import TableStyle from '../../ui-component/TableStyle';
import AddVisitor from './AddVisitor.js';

// ----------------------------------------------------------------------

const leadData = [
  {
    id: 1,
    firstName: 'petter',
    lastName: 'jhon',
    gender: 'male',
    phoneNumber: '9981923587',
    // emailAddress: 'ap@samyotech.com',
    // id_type: 'Aadhar Card',
    // id_number: 123123123,
    status: 'pending',
    // visitor_type: 'visitor',
    date: '11/12/2024',
    // entry_time: '10am',
    // exit_time: '1pm',
    // address:'Indore',
    more: 'View'
  }
];

const Visitor = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const columns = [
    {
      field: 'firstName',
      headerName: 'First Name',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize'
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      flex: 1,
      cellClassName: 'name-column--cell--capitalize'
    },
    {
      field: 'gender',
      headerName: 'Gender',
      flex: 1
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 1
    },
    // {
    //   field: 'emailAddress',
    //   headerName: 'Email Address',
    //   flex: 1
    // },
    // {
    //   field: 'id_type',
    //   headerName: 'ID-Type',
    //   flex: 1
    // },
    // {
    //   field: 'id_number',
    //   headerName: 'ID-Number',
    //   flex: 1
    // },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1
    },
    // {
    //   field: 'visitor_type',
    //   headerName: 'Visitor-Type',
    //   flex: 1
    // },
    {
      field: 'date',
      headerName: 'Date'

    },
    // {
    //   field: 'entry_time',
    //   headerName: 'Entry-Time'
    // },
    // {
    //   field: 'exit_time',
    //   headerName: 'Exit-Time'
    // },
    // {
    //   field:'address',
    //   headerName:'Address'
    // },
    {
      field: 'more',
      headerName: 'More',
      flex: 1,
    }
  ];

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  return (
    <>
      <AddVisitor open={openAdd} handleClose={handleCloseAdd} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Visitor Management </Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              New Visitor
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <DataGrid
                rows={leadData}
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

export default Visitor;
