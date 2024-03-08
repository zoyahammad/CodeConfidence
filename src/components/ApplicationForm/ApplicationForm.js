import React, { useState } from 'react';
import { FormContainer } from './ApplicationFormStyles';
import { FormControl, FormLabel, InputLabel, MenuItem, Select, Button, TextField } from '@mui/material';

const ApplicationForm = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <FormContainer>
            <FormControl style={{ width: '70%', height: '70%' }}>
                <InputLabel style={{ fontSize: '18px' }}>Join As</InputLabel>
                <Select
                    labelId="joinAs"
                    id="joinAs"
                    value={selectedValue}
                    label="Mentor"
                    onChange={handleChange}
                    style={{ backgroundColor: '#FFFFFF', fontSize: '18px' }}
                >
                    <MenuItem value={"Mentor"}>Mentor</MenuItem>
                    <MenuItem value={"Mentee"}>Mentee</MenuItem>
                </Select>
                <FormLabel style={{ fontSize: '18px' }}>Full Name</FormLabel>
                <TextField style={{ backgroundColor: '#FFFFFF' }}></TextField>
                <FormLabel style={{ fontSize: '18px' }}>How can you contribute to our mission?</FormLabel>
                <TextField style={{ backgroundColor: '#FFFFFF' }}></TextField>
                <FormLabel style={{ fontSize: '18px' }}>How did you hear about us?</FormLabel>
                <TextField style={{ backgroundColor: '#FFFFFF' }}></TextField>
                <Button size="large">Submit</Button>
            </FormControl>
        </FormContainer>
    )
};
export default ApplicationForm;
