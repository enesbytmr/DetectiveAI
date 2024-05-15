'use client'
import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Form } from 'formik';
import axios from 'axios';

function FormComponent() {
  const [formData, setFormData] = useState({
    agencyName: '',
    agencyType: '',
    city: '',
    state: '',
    year: '',
    month: '',
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
  const [responseMessage, setResponseMessage] = useState("");
  const [showForm, setShowForm] = useState(true);  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post('https://5546-193-140-24-128.ngrok-free.app/predict', formData, {
      timeout: 30000
    })
      .then(response => {
        console.log('Server response:', response.data);
        const story = response.data.data.chatgpt_response;
        setResponseMessage(story);
        setShowForm(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setResponseMessage(`Error: ${error.message || "Unknown error"}`);
      });
  };

  const handleRetry = () => {
    setResponseMessage("");
    setShowForm(true);
  };

  const fillRandomData = () => {
    const newFormData = {};
    Object.keys(formData).forEach(key => {
      if (options[key]) {
        const randomIndex = Math.floor(Math.random() * options[key].length);
        newFormData[key] = options[key][randomIndex];
      }
    });
    setFormData(newFormData);
  };

 
  const options = {
    agencyName:['Anchorage', 'Juneau', 'Nome', 'Bethel', 'North Slope Borough', 'Kenai', 'Alaska State Police', 'Jefferson', 'Bessemer', 'Birmingham', 'Fairfield', 'Gardendale', 'Leeds', 'Homewood', 'Brighton', 'Hueytown', 'Warrior', 'Mobile', 'Prichard', 'Saraland', 'Satsuma', 'Montgomery', 'Autauga', 'Baldwin', 'Robertsdale', 'Daphne', 'Barbour', 'Blount', 'Bullock', 'Butler', 'Greenville', 'Calhoun', 'Anniston', 'Oxford', 'Chambers', 'Lafayette', 'Chilton', 'Choctaw', 'Clarke', 'Thomasville', 'Enterprise', 'Colbert', 'Conecuh', 'Coosa', 'Rockford', 'Andalusia', 'Crenshaw', 'Cullman', 'Dale', 'Ozark', 'Dallas', 'Selma', 'Collinsville', 'Elmore', 'Tallassee', 'Atmore', 'Brewton', 'Attalla', 'Gadsden', 'Fayette', 'Franklin', 'Red Bay', 'Geneva', 'Greene', 'Houston', 'Dothan', 'Jackson', 'Scottsboro', 'Lamar', 'Lauderdale', 'Florence', 'Lawrence', 'Lee', 'Auburn', 'Opelika', 'Limestone', 'Athens', 'Lowndes', 'Tuskegee', 'Huntsville', 'New Hope', 'Owens Crossroads', 'Marengo', 'Hackleburg', 'Marshall', 'Albertville', 'Morgan', 'Decatur', 'Hartselle', 'Marion', 'Pickens', 'Troy', 'Russell', 'Phenix City', 'St. Clair', 'Springville', 'Shelby', 'Alabaster', 'Sumter', 'Livingston'],

    agencyType: ['Municipal Police', 'County Police', 'State Police', 'Sheriff', 'Special Police', 'Regional Police', 'Tribal Police'],
    city: ['Anchorage', 'Juneau', 'Nome', 'Bethel', 'North Slope', 'Kenai Peninsula', 'Jefferson', 'Mobile', 'Montgomery', 'Autauga', 'Baldwin', 'Barbour', 'Blount', 'Bullock', 'Butler', 'Calhoun', 'Chambers', 'Chilton', 'Choctaw', 'Clarke', 'Coffee', 'Colbert', 'Conecuh', 'Coosa', 'Covington', 'Crenshaw', 'Cullman', 'Dale', 'Dallas', 'De Kalb', 'Elmore', 'Escambia', 'Etowah', 'Fayette', 'Franklin', 'Geneva', 'Greene', 'Houston', 'Jackson', 'Lamar', 'Lauderdale', 'Lawrence', 'Lee', 'Limestone', 'Lowndes', 'Macon', 'Madison', 'Marengo', 'Marion', 'Marshall', 'Morgan', 'Perry', 'Pickens', 'Pike', 'Russell', 'St. Clair', 'Shelby', 'Sumter', 'Talladega', 'Tallapoosa', 'Tuscaloosa', 'Walker', 'Washington', 'Wilcox', 'Winston', 'Ashley', 'Benton', 'Bradley', 'Chicot', 'Clark', 'Clay', 'Columbia', 'Conway', 'Craighead', 'Crawford', 'Crittenden', 'Drew', 'Faulkner', 'Garland', 'Grant', 'Hempstead', 'Hot Spring', 'Lafayette', 'Lincoln', 'Little River', 'Lonoke', 'Miller', 'Mississippi', 'Newton', 'Ouachita', 'Phillips', 'Poinsett', 'Prairie', 'Pulaski', 'St. Francis', 'Saline', 'Sebastian', 'Sevier', 'Union', 'Van Buren'],
    state: ['Alaska', 'Alabama', 'Arkansas', 'Arizona', 'California', 'Colorado', 'Connecticut', 'District of Columbia', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Iowa', 'Idaho', 'Illinois', 'Indiana', 'Kansas', 'Kentucky', 'Louisiana', 'Massachusetts', 'Maryland', 'Maine', 'Michigan', 'Minnesota', 'Missouri', 'Mississippi', 'Montana', 'Nebraska', 'North Carolina', 'North Dakota', 'New Hampshire', 'New Jersey', 'New Mexico', 'Nevada', 'New York', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhodes Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Virginia', 'Vermont', 'Washington', 'Wisconsin', 'West Virginia', 'Wyoming'],
    year: ['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
    
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    crimeType: ['Murder or Manslaughter', 'Manslaughter by Negligence'],

    victimSex: ['Male' ,'Female'],

    victimAge: [14, 43, 30, 42, 38, 20, 36, 31, 16, 33, 27, 21, 60, 40, 18, 46, 23, 45, 26, 25, 58, 17, 24, 41, 68, 13, 35, 44, 54, 37, 22, 51, 50, 52, 61, 63, 19, 28, 70, 72, 53, 32, 57, 34, 66, 55, 67, 47, 48, 49, 29, 62, 56, 65, 15, 71, 64, 69, 39, 59, 10, 11, 12],
    victimRace: ['Native American/Alaska Native', 'White', 'Black', 'Unknown', 'Asian/Pacific Islander'],
    
    victimEthnicity: ['Unknown' ,'Not Hispanic' ,'Hispanic'],

    perpetratorSex: ['Male' ,'Female'],

    perpetratorAge:[14, 43, 30, 42, 38, 20, 36, 31, 16, 33, 27, 21, 60, 40, 18, 46, 23, 45, 26, 25, 58, 17, 24, 41, 68, 13, 35, 44, 54, 37, 22, 51, 50, 52, 61, 63, 19, 28, 70, 72, 53, 32, 57, 34, 66, 55, 67, 47, 48, 49, 29, 62, 56, 65, 15, 71, 64, 69, 39, 59, 10, 11, 12],

    perpetratorRace:['Native American/Alaska Native', 'White', 'Black', 'Unknown', 'Asian/Pacific Islander'],

    perpetratorEthnicity: ['Unknown' ,'Not Hispanic' ,'Hispanic'],

    relationship: ['Acquaintance', 'Wife', 'Unknown', 'Stranger', 'Girlfriend', 'Ex-Husband', 'Brother', 'Stepdaughter', 'Husband', 'Friend', 'Family', 'Neighbor', 'Father', 'In-Law', 'Son', 'Ex-Wife', 'Boyfriend', 'Mother', 'Sister', 'Common-Law Husband', 'Common-Law Wife', 'Stepfather', 'Stepson', 'Stepmother', 'Daughter', 'Boyfriend/Girlfriend', 'Employer', 'Employee'],

    weapon:['Blunt Object', 'Strangulation', 'Rifle', 'Knife', 'Firearm', 'Shotgun', 'Fall', 'Handgun', 'Drowning', 'Unknown', 'Fire', 'Suffocation', 'Drugs', 'Explosives', 'Gun', 'Poison'],

    victimCount: [0, 2, 1, 3, 6, 5, 4, 7, 8, 9, 10],

    perpetratorCount: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

    recordSource: ['FBI' ,'FOIA'],
    
  };


  return (
    <Paper style={{ padding: 20, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h6" gutterBottom align="center">
        Detective AI
      </Typography>
      {showForm ? (
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
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
              <Button onClick={fillRandomData} variant="contained" color="secondary" fullWidth style={{ marginTop: 8 }}>
                Fill Random Data
              </Button>
            </Grid>
          </Grid>
        </form>
      ) : (
        <>
          <Typography style={{ textAlign: 'center', marginTop: 20 }}>
            {responseMessage}
          </Typography>
          <Button variant="outlined" color="primary" onClick={handleRetry} style={{ marginTop: 20 }}>
            Try Again
          </Button>
        </>
      )}
    </Paper>
  );
}

export default FormComponent;