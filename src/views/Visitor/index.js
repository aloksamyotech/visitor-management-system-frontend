/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Box, Card, Breadcrumbs, Divider, TextField } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import { Link } from 'react-router-dom';
// import Iconify from '../../ui-component/iconify';
import TableStyle from '../../ui-component/TableStyle';
import AddVisitor from './AddVisitor.js';
import { Link } from '@mui/material';
import { IconButton } from '@mui/material';

//icons
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';



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
      flex: 1
    }
  ];

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   console.info('You clicked a breadcrumb.');
  // } =>testing purpose only

  const breadcrumbs = [
    <Typography key="1" color="secondary" sx={{ paddingX: "7px" }}>
      <Link href="/dashboard/default" color={"secondary"}
      // onClick={handleClick}
      >
        <HomeIcon sx={{ fontSize: "18px" }} />
      </Link>
    </Typography>
    ,
    <Typography key="2" color="inherit" sx={{ paddingX: "7px" }}>
      <Link href="/dashboard/visitors/" sx={{ textDecoration: "none", color: "black", fontWeight: "500" }}
      // onClick={handleClick}
      >
        Visitor
      </Link>
    </Typography>,
    <Typography key="3" sx={{ color: 'text.primary', cursor: 'pointer', paddingX: "7px" }}>
      Users
    </Typography>
  ];

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  return (
    <>
      <AddVisitor open={openAdd} handleClose={handleCloseAdd} />
      <Container >
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'} sx={{ paddingX: "15px", paddingY: "18px", background: "white", borderRadius: "10px", marginBottom: "20px" }}>
          <Typography variant="h4" sx={{ fontWeight: "600" }}>Visitor Management </Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              New Visitor
            </Button> */}
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px' }}>
              <Stack sx={{ padding: "10px", marginRight: "10px" }} direction={'row'} justifyContent={'flex-end'}>
                <Stack sx={{ marginRight: "-7%", marginTop: "10px", flexDirection: "row" }}>
                  <TextField variant="outlined" size='small' placeholder="Search Name" sx={{ marginBottom: '10px', marginRight: "-20%" }} />
                  <Button color="inherit" variant="text" sx={{ marginLeft: '', marginBottom: '10px', '&:hover': { backgroundColor: 'initial', boxShadow: 'none' }, }}><SearchIcon fontSize="small" /></Button>
                </Stack>
                <IconButton color='secondary'>
                  <AddIcon onClick={handleOpenAdd} />
                </IconButton>
              </Stack>
              <Divider />
              <DataGrid
                rows={leadData}
                columns={columns}
                checkboxSelection
                getRowId={(row) => row.id}
              // slots={{ toolbar: GridToolbar }}
              // slotProps={{ toolbar: { showQuickFilter: true } }}
              />
            </Card>
          </Box>
        </TableStyle>
      </Container>
    </>
  );
};

export default Visitor;
