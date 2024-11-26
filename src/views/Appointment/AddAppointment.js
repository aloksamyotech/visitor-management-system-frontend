/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import ClearIcon from '@mui/icons-material/Clear';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import { toast } from 'react-toastify';
// import { apipost } from '../../service/api';
// import { FiSave } from "react-icons/fi";
// import { GiCancel } from "react-icons/gi";
import Palette from '../../ui-component/ThemePalette';

const AddAppointment = (props) => {
  const { open, handleClose } = props;
  // const userid = localStorage.getItem('user_id');

  // -----------  validationSchema
  const validationSchema = yup.object({
    // firstName: yup.string().required('First Name is required'),
    // lastName: yup.string().required('Last Name is required'),
    // dateOfBirth: yup.date().required('Date of Birth is required'),
    name: yup.string().required('Name is required'),
    date: yup.string().required('date is required'),

    // gender: yup.string().required('Gender is required'),
    // phoneNumber: yup
    //   .string()
    //   .matches(/^[0-9]{10}$/, 'Phone number is invalid')
    //   .required('Phone number is required'),
    // emailAddress: yup.string().email('Invalid email').required('Email is required'),
    // address: yup.string().required(),
    // alternatePhoneNumber: yup.string().matches(/^[0-9]{10}$/, 'Phone number is invalid'),
    // additionalEmailAddress: yup.string().email('Invalid email'),
    timeSlot: yup.string().required('Select Time-Slot is required'),
    // exitTime: yup.string().required('Exit Time is required'),
    purpose: yup.string().required('Purpose is required'),
  });

  // -----------   initialValues
  const initialValues = {
    name: '',
    // lastName: '',
    // dateOfBirth: '',
    // gender: '',
    // phoneNumber: '',
    // emailAddress: '',
    // address: '',
    // alternatePhoneNumber: '',
    // additionalEmailAddress: '',
    // instagramProfile: '',
    // twitterProfile: '',
    // preferredContactMethod: '',
    // referralSource: '',
    // referralContactName: '',
    // relationshipToReferrer: '',
    // preferencesForMarketingCommunications: '',
    // preferredLanguage: ''
    // createdBy: userid,
    date: '',
    timeSlot: '',
    purpose: ''
  };

  // add contact api
  // const addContact = async (values) => {
  //   const data = values;
  //   const result = await apipost('contact/add', data)
  //   setUserAction(result)

  //   if (result && result.status === 201) {
  //     formik.resetForm();
  //     handleClose();
  //     toast.success(result.data.message)
  //   }
  // }

  // formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      // addContact(values)
      console.log('Appointment Values', values);
      handleClose();
      toast.success('Appointment Add successfully');
    }
  });

  return (
    <div>
      <Dialog open={open} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
        <DialogTitle
          id="scroll-dialog-title"
          style={{
            display: 'flex',
            justifyContent: 'space-between'
            // backgroundColor: "#2b4054",
            // color: "white",
          }}
        >
          <Typography variant="h6">Add New </Typography>
          <Typography>
            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
          </Typography>
        </DialogTitle>

        <DialogContent dividers>
          <form>
            <Typography style={{ marginBottom: '15px' }} variant="h6">
              Schedule Appointment
            </Typography>
            <Grid container direction="row" rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
              <Grid item xs={12} sm={6} md={5}>
                <FormControl fullWidth>
                  <FormLabel>Select Name</FormLabel>
                  <Select
                    id="name"
                    name="name"
                    size="small"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                  >
                    <MenuItem value="Neeraj Chouhan">Neeraj Chouhan</MenuItem>
                    <MenuItem value="Ashwin Sharma">Ashwin Sharma</MenuItem>
                    <MenuItem value="Shubham Pal">Shubham Pal</MenuItem>
                    <MenuItem value="Shreya Kushwah">Shreya Kushwah</MenuItem>
                    <MenuItem value="Jay Jain">Jay Jain</MenuItem>
                  </Select>
                  <FormHelperText error={formik.touched.name && Boolean(formik.errors.name)}>
                    {formik.touched.name && formik.errors.name}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid md={5}>
                {/* empty grid for allignment */}
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <FormLabel>Date</FormLabel>
                <TextField
                  name="date"
                  type="date"
                  size="small"
                  fullWidth
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  error={formik.touched.date && Boolean(formik.errors.date)}
                  helperText={formik.touched.date && formik.errors.date}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <FormControl fullWidth>
                  <FormLabel>Select Time-Slot</FormLabel>
                  <Select
                    id="timeSlot"
                    name="timeSlot"
                    size="small"
                    value={formik.values.timeSlot}
                    onChange={formik.handleChange}
                    error={formik.touched.timeSlot && Boolean(formik.errors.timeSlot)}
                  >
                    <MenuItem value="10AM-12:30PM">10AM-12:30PM</MenuItem>
                    <MenuItem value="02PM-03PM">02PM-03PM</MenuItem>
                    <MenuItem value="03PM-03:30PM">03PM-03:30PM</MenuItem>
                    <MenuItem value="05PM-07PM">05PM-07PM</MenuItem>
                  </Select>
                  <FormHelperText error={formik.touched.timeSlot && Boolean(formik.errors.timeSlot)}>
                    {formik.touched.timeSlot && formik.errors.timeSlot}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={10}>
                <FormLabel>Purpose to Visit</FormLabel>
                <TextField
                  id="purpose"
                  name="purpose"
                  size="small"
                  multiline
                  fullWidth
                  rows={4}
                  value={formik.values.purpose}
                  onChange={formik.handleChange}
                  error={formik.touched.purpose && Boolean(formik.errors.purpose)}
                  helperText={formik.touched.purpose && formik.errors.purpose}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            onClick={formik.handleSubmit}
            style={{ textTransform: 'capitalize' }}
          // startIcon={<FiSave />}
          >
            Save
          </Button>
          <Button
            type="reset"
            variant="outlined"
            style={{ textTransform: 'capitalize' }}
            color="error"
            onClick={() => {
              formik.resetForm();
              handleClose();
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddAppointment;
