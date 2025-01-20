import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MenuItem, FormControl, InputLabel, Select, FormHelperText } from '@mui/material';
import { useQuery } from 'react-query';
import Button from '../button/button';
import "./dropdown.css";

// Function to fetch dropdown options from the API
const fetchDropdownOptions = async () => {
  const response = await fetch('http://localhost:8000/farmer/'); // Replace with your API URL
  if (!response.ok) {
    throw new Error('Failed to fetch options');
  }
  return response.json();
};

const DropdownForm = () => {
  // Initialize the form with useForm
  const { control, handleSubmit, formState: { errors } } = useForm();

  // Fetch dropdown options using useQuery
  const { data, error, isLoading } = useQuery('dropdownOptions', fetchDropdownOptions);

  // Submit handler
  const onSubmit = (data) => {
    console.log(data);
  };

  // Handle loading and error states
  if (isLoading) return <div>Loading options...</div>;
  if (error) return <div>Error loading options: {error.message}</div>;

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
              sx={{ width: "25rem", border: "none" }}
            >
              {data.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
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
