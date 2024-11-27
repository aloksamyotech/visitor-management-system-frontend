/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Divider, FormControl, FormHelperText, FormLabel, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
// import { useState, useEffect } from 'react';
// import { apiget, apipost } from '../../service/api';

const AddPasses = (props) => {
  const { open, handleClose } = props;
  //   const [leadData, setLeadData] = useState([]);
  //   const [contactData, setContactData] = useState([]);
  //   const userRole = localStorage.getItem('userRole');

  //   const userid = localStorage.getItem('user_id');

  // -----------  validationSchema
  const validationSchema = yup.object({
    visitorName: yup.string().required('Select Name'),
    passCode: yup.string().required('Passcode is required'),
    validityFrom: yup.number().required('validity is required'),
    validityTo: yup.number().required('validity is required'),
    accessLevel: yup.string().required('Access is Required'),
    note: yup.string().required('Note is required')
  });

  // -----------   initialValues
  const initialValues = {
    visitorName: '',
    passCode: '',
    validityFrom: '',
    validityTo: '',
    accessLevel: '',
    note: ''
    // createdBy: userid,
    // lead_id: _id,
    // contact_id: _id
  };

  // add call api
  //   const addCall = async (values) => {
  //     const data = values;
  //     const result = await apipost('call/add', data);
  //     setUserAction(result);

  //     if (result && result.status === 201) {
  //       formik.resetForm();
  //       handleClose();
  //       toast.success(result.data.message);
  //     }
  //   };

  // lead api
  //   const fetchLeadData = async () => {
  //     const result = await apiget(userRole === 'admin' ? `lead/list` : `lead/list/?createdBy=${userid}`);
  //     if (result && result.status === 200) {
  //       setLeadData(result?.data?.result);
  //     }
  //   };

  // contact api
  //   const fetchContactData = async () => {
  //     const result = await apiget(userRole === 'admin' ? `contact/list` : `contact/list/?createdBy=${userid}`);
  //     if (result && result.status === 200) {
  //       setContactData(result?.data?.result);
  //     }
  //   };

  // formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      //   addCall(values);
      console.log('PassValues', values);
      handleClose();
      toast.success('Pass Add successfully');
      resetForm();
    }
  });

  //   useEffect(() => {
  //     fetchLeadData();
  //     fetchContactData();
  //   }, []);

  return (
    <div>
      <Dialog open={open} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
        <DialogTitle
          id="scroll-dialog-title"
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="h6">Create Pass</Typography>
          <Typography>
            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
          </Typography>
        </DialogTitle>

        <DialogContent dividers>
          <form>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <Grid container sx={{ marginTop: 2 }}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel>Select Name</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="visitorName"
                      name="visitorName"
                      size="small"
                      value={formik.values.visitorName}
                      onChange={formik.handleChange}
                      error={formik.touched.visitorName && Boolean(formik.errors.visitorName)}
                    >
                      <MenuItem value="user_1">User 1</MenuItem>
                      <MenuItem value="user_2">User 2</MenuItem>
                      <MenuItem value="user_3">User 3</MenuItem>
                    </Select>
                    <FormHelperText error={formik.touched.visitorName && Boolean(formik.errors.visitorName)}>{formik.touched.visitorName && formik.errors.visitorName}</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: 2 }}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel>Set Passcode</FormLabel>
                    <TextField
                      id="passCode"
                      name="passCode"
                      size="small"
                      fullWidth
                      value={formik.values.passCode}
                      onChange={formik.handleChange}
                      error={formik.touched.passCode && Boolean(formik.errors.passCode)}
                      helperText={formik.touched.passCode && formik.errors.passCode}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={6}>
                  <FormControl>
                    <FormLabel>Validity From</FormLabel>
                    <TextField
                      id="validityFrom"
                      name="validityFrom"
                      size="small"
                      type=""
                      label=""
                      fullWidth
                      value={formik.values.validityFrom}
                      onChange={formik.handleChange}
                      error={formik.touched.validityFrom && Boolean(formik.errors.validityFrom)}
                      helperText={formik.touched.validityFrom && formik.errors.validityFrom}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <FormLabel>Validity To</FormLabel>
                    <TextField
                      id="validityTo"
                      name="validityTo"
                      size="small"
                      type=""
                      label=""
                      fullWidth
                      value={formik.values.validityTo}
                      onChange={formik.handleChange}
                      error={formik.touched.validityTo && Boolean(formik.errors.validityTo)}
                      helperText={formik.touched.validityTo && formik.errors.validityTo}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <FormLabel>Set Access</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="accessLevel"
                      name="accessLevel"
                      size="small"
                      value={formik.values.accessLevel}
                      onChange={formik.handleChange}
                      error={formik.touched.accessLevel && Boolean(formik.errors.accessLevel)}
                    >
                      <MenuItem value="1st floor">1st Floor</MenuItem>
                      <MenuItem value="2nd floor">2nd Floor</MenuItem>
                      <MenuItem value="Full">Full Access</MenuItem>
                      <MenuItem value="Restricted">Restricted</MenuItem>
                    </Select>
                    <FormHelperText error={formik.touched.accessLevel && Boolean(formik.errors.accessLevel)}>{formik.touched.accessLevel && formik.errors.accessLevel}</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel>Note</FormLabel>
                    <TextField
                      id="note"
                      name="note"
                      size="small"
                      fullWidth
                      rows={4}
                      multiline
                      placeholder='Add Comments Here...'
                      value={formik.values.note}
                      onChange={formik.handleChange}
                      error={formik.touched.note && Boolean(formik.errors.note)}
                      helperText={formik.touched.note && formik.errors.note}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              {/* {formik.values.relatedTo === 'Lead' && (
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Lead</FormLabel>
                    <Autocomplete
                      id="lead-autocomplete"
                      options={leadData}
                      getOptionLabel={(lead) => `${lead.firstName} ${lead.lastName}`}
                      value={leadData.find((lead) => lead._id === formik.values.lead_id) || null}
                      onChange={(event, newValue) => {
                        formik.setFieldValue('lead_id', newValue ? newValue._id : '');
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          error={formik.touched.lead_id && Boolean(formik.errors.lead_id)}
                          helperText={formik.touched.lead_id && formik.errors.lead_id}
                        />
                      )}
                    />
                  </Grid>
                )} */}
              {/* {formik.values.relatedTo === 'Contact' && (
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Contact</FormLabel>
                    <Autocomplete
                      id="contact-autocomplete"
                      options={contactData}
                      getOptionLabel={(contact) => `${contact.firstName} ${contact.lastName}`}
                      value={contactData.find((contact) => contact._id === formik.values.contact_id) || null}
                      onChange={(event, newValue) => {
                        formik.setFieldValue('contact_id', newValue ? newValue._id : '');
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          error={formik.touched.contact_id && Boolean(formik.errors.contact_id)}
                          helperText={formik.touched.contact_id && formik.errors.contact_id}
                        />
                      )}
                    />
                  </Grid>
                )} */}
            </DialogContentText>
          </form>
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" onClick={formik.handleSubmit} style={{ textTransform: 'capitalize' }} color="secondary">
            Save
          </Button>
          <Button
            type="reset"
            variant="outlined"
            style={{ textTransform: 'capitalize' }}
            onClick={() => {
              formik.resetForm();
              handleClose();
            }}
            color="error"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
};

export default AddPasses;
