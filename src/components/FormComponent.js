'use client'
import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Form } from 'formik';

function FormComponent() {
  const [formData, setFormData] = useState({
    agencyName: '',
    agencyType: '',
    city: '',
    state: '',
    year: '',
    month: '',
    incident: '',
    crimeType: '',
    victimSex: '',
    victimRace: '',
    victimEthnicity: '',
    perpetratorSex: '',
    perpetratorAge: '',
    perpetratorRace: '',
    perpetratorEthnicity: '',
    relationship: '',
    weapon: '',
    victimCount: '',
    perpetratorCount: '',
    recordSource: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic here
  };

  // Sample options
  const options = {
    agencyName:['Anchorage' ,'Juneau' ,'Nome', 'Sp: Hundred', 'Sheridan County','Sublette County'],
    agencyType: ['Municipal Police', 'County Police', 'State Police', 'Sheriff', 'Special Police', 'Regional Police', 'Tribal Police'],
    year: ['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
    state: ['Alaska', 'Alabama', 'Arkansas', 'Arizona', 'California', 'Colorado', 'Connecticut', 'District of Columbia', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Iowa', 'Idaho', 'Illinois', 'Indiana', 'Kansas', 'Kentucky', 'Louisiana', 'Massachusetts', 'Maryland', 'Maine', 'Michigan', 'Minnesota', 'Missouri', 'Mississippi', 'Montana', 'Nebraska', 'North Carolina', 'North Dakota', 'New Hampshire', 'New Jersey', 'New Mexico', 'Nevada', 'New York', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhodes Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Virginia', 'Vermont', 'Washington', 'Wisconsin', 'West Virginia', 'Wyoming'],
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    victimSex: ['Male' ,'Female', 'Unknown'],
    perpetratorSex: ['Male' ,'Female', 'Unknown'],
    recordSource: ['FBI' ,'FOIA'],
    crimeType: ['Murder or Manslaughter', 'Manslaughter by Negligence'],
  };

  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h6" gutterBottom>
        Detective AI
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {Object.keys(formData).map((key) => (
            <Grid item xs={12} sm={6} key={key}>
              {options[key] ? (
                <FormControl fullWidth>
                  <InputLabel>{key}</InputLabel>
                  <Select
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    label={key}
                  >
                    {options[key].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <TextField
                  fullWidth
                  label={key}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  variant="outlined"
                />
              )}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default FormComponent;
