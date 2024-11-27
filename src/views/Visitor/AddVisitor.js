/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  // InputAdornment,
  MenuItem,
  // OutlinedInput,
  Radio,
  RadioGroup,
  // Rating,
  Select,
  TextField
} from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
// import { useState,useEffect } from 'react';
// import { apiget, apipost } from '../../service/api';
import Palette from '../../ui-component/ThemePalette';

const AddLead = (props) => {
  const { open, handleClose } = props;
  // const [user, setUser] = useState([]);

  // const userid = localStorage.getItem('user_id');
  // const userdata = JSON.parse(localStorage.getItem('user'));

  // -----------  validationSchema
  const validationSchema = yup.object({
    title: yup.string().required('required'),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    date: yup.date().required('Date is required'),
    gender: yup.string().required('Gender is required'),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, 'Phone number is invalid')
      .required('Phone number is required'),
    emailAddress: yup.string().email('Invalid email').required('Email is required'),
    address: yup.string().required('Address is required'),
    idType: yup.string().required('ID is required'),
    idNumber: yup.string().required('ID Number is required')
  });

  // -----------   initialValues
  const initialValues = {
    title: '',
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    idType: '',
    idNumber: '',
    visitorType: '',
    date: '',
    entryTime: '',
    exitTime: '',
    // createdBy: userid,
    // contact_id: _id
  };

  // add Lead api
  // const addLead = async (values) => {
  //   const data = values;

  //   const result = await apipost('lead/add', data);
  //   setUserAction(result);

  //   if (result && result.status === 201) {
  //     formik.resetForm();
  //     handleClose();
  //     toast.success(result.data.message);
  //   }
  // };

  // formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log('leadValues', values);
      handleClose();
      toast.success('lead Add successfully');
      // addLead(values);
    }
  });
  // user api
  // const fetchUserData = async () => {
  //   const result = await apiget('user/list');
  //   if (result && result.status === 200) {
  //     setUser(result?.data?.result);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      // TransitionComponent={Transition}
      >
        <DialogTitle
          id="scroll-dialog-title"
          style={{
            display: 'flex',
            justifyContent: 'space-between'
            // backgroundColor: "#2b4054",
            // color: "white",
          }}
        >
          <Typography variant="h6">Add New</Typography>
          <Typography>
            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <form>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <Typography sx={{ marginBottom: '15px' }} variant="h6">
                Basic Information
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 5, md: 4 }}>
                <Grid item xs={4} sm={3} md={2}>
                  <FormControl fullWidth>
                    <FormLabel>Title</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="title"
                      name="title"
                      label=""
                      size="small"
                      fullWidth
                      value={formik.values.title || null}
                      onChange={formik.handleChange}
                      error={formik.touched.title && Boolean(formik.errors.title)}
                      helperText={formik.touched.title && formik.errors.title}
                    >
                      <MenuItem value="Mr.">Mr.</MenuItem>
                      <MenuItem value="Mrs.">Mrs. </MenuItem>
                      <MenuItem value="Miss.">Miss. </MenuItem>
                      <MenuItem value="Ms.">Ms. </MenuItem>
                      <MenuItem value="Dr.">Dr. </MenuItem>
                    </Select>
                    <FormHelperText sx={{ color: Palette.error.main }}>{formik.touched.title && formik.errors.title}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                  <FormControl fullWidth>
                    <FormLabel>First name</FormLabel>
                    <TextField
                      id="fristName"
                      name="firstName"
                      label=""
                      size="small"
                      maxRows={10}
                      fullWidth
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                      helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                  <FormControl fullWidth>
                    <FormLabel>Last name</FormLabel>
                    <TextField
                      id="lastName"
                      name="lastName"
                      label=""
                      size="small"
                      fullWidth
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                      helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Phone number</FormLabel>
                    <TextField
                      id="phoneNumber"
                      name="phoneNumber"
                      type="number"
                      size="small"
                      fullWidth
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                      helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Email</FormLabel>
                    <TextField
                      id="emailAddress"
                      name="emailAddress"
                      label=""
                      size="small"
                      fullWidth
                      value={formik.values.emailAddress}
                      onChange={formik.handleChange}
                      error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
                      helperText={formik.touched.emailAddress && formik.errors.emailAddress}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup row name="gender" onChange={formik.handleChange} value={formik.values.gender}>
                      <FormControlLabel value="Male" control={<Radio />} label="Male" />
                      <FormControlLabel value="Female" control={<Radio />} label="Female" />
                      <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    <FormHelperText sx={{ color: Palette.error.main }}>{formik.touched.gender && formik.errors.gender}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={7} md={3}>
                  <FormControl fullWidth>
                    <FormLabel>Visitor Type</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="visitorType"
                      name="visitorType"
                      size="small"
                      fullWidth
                      value={formik.values.visitorType}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value="visitor">visitor</MenuItem>
                      <MenuItem value="vip">vip</MenuItem>
                      <MenuItem value="guest">guest</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={7} md={3}>
                  <FormControl fullWidth>
                    <FormLabel>ID Type</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="idType"
                      name="idType"
                      size="small"
                      fullWidth
                      value={formik.values.idType}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value="aadharCard">Aadhar Card</MenuItem>
                      <MenuItem value="drivingLicence">Driving License</MenuItem>
                      <MenuItem value="panCard">Pan Card</MenuItem>
                      <MenuItem value="voterId">Voter ID</MenuItem>
                    </Select>
                    <FormHelperText sx={{ color: Palette.error.main }}>{formik.touched.idType && formik.errors.idType}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={7} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>ID Number</FormLabel>
                    <TextField
                      id="idNumber"
                      name="idNumber"
                      size="small"
                      fullWidth
                      value={formik.values.idNumber}
                      onChange={formik.handleChange}
                    />
                    <FormHelperText sx={{ color: Palette.error.main }}>{formik.touched.idNumber && formik.errors.idNumber}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={7} md={4}>
                  <FormControl fullWidth>
                    <FormLabel>Date</FormLabel>
                    <TextField
                      id="date"
                      name="date"
                      type="date"
                      size="small"
                      fullWidth
                      value={formik.values.date}
                      onChange={formik.handleChange}
                    />
                    <FormHelperText sx={{ color: Palette.error.main }}>{formik.touched.date && formik.errors.date}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <FormControl fullWidth>
                    <FormLabel>Address</FormLabel>
                    <TextField
                      id="address"
                      name="address"
                      label=""
                      size="small"
                      multiline
                      rows={5}
                      fullWidth
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      error={formik.touched.address && Boolean(formik.errors.address)}
                      helperText={formik.touched.address && formik.errors.address}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Typography sx={{ marginBottom: '15px', marginTop: '35px' }} variant="h6">
                Additional Details
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <FormLabel>Entry Time</FormLabel>
                    <TextField
                      id="entryTime"
                      name="entryTime"
                      type="number"
                      size="small"
                      fullWidth
                      value={formik.values.entryTime}
                      onChange={formik.handleChange}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <FormLabel>Exit Time</FormLabel>
                    <TextField
                      id="exitTime"
                      name="exitTime"
                      type="number"
                      size="small"
                      fullWidth
                      value={formik.values.exitTime}
                      onChange={formik.handleChange}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} sx={{ marginBlockEnd: '10px' }}>
                  <FormControl fullWidth>
                    <FormLabel>Add Comment (optional)</FormLabel>
                    <TextField
                      id="comment"
                      name="comment"
                      size="small"
                      rows={3}
                      multiline
                      fullWidth
                      value={formik.values.comment}
                      onChange={formik.handleChange}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </DialogContentText>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={formik.handleSubmit} variant="contained" color="primary" type="submit">
            Save
          </Button>
          <Button
            onClick={() => {
              formik.resetForm();
              handleClose();
            }}
            variant="outlined"
            color="error"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddLead;
