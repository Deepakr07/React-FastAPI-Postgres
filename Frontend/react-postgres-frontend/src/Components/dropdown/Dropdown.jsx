import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MenuItem, FormControl, InputLabel, Select, FormHelperText } from '@mui/material';
import "./dropdown.css"
import Button from '../button/button';
const DropdownForm = () => {
  // Initialize the form with useForm
  const { control, handleSubmit, formState: { errors } } = useForm();

  // Options for the dropdown
  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  // Submit handler
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <FormControl fullWidth error={!!errors.dropdown} >
        <InputLabel id="dropdown-label">Select Option</InputLabel>
        <Controller
          name="dropdown"
          control={control}
          defaultValue=""
          rules={{ required: 'This field is required' }}
          render={({ field }) => (
            <Select
              {...field}
              labelId="dropdown-label"
              label="Select Option"
              sx={{width:"25rem",border:"none"}}
            >
              {dropdownOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {/* Display error message if validation fails */}
        {errors.dropdown && <FormHelperText>{errors.dropdown.message}</FormHelperText>}
      </FormControl>
      
      <Button />
    </form>
  );
};

export default DropdownForm;
