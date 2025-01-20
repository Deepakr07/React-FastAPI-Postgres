import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MenuItem, FormControl, InputLabel, Select, FormHelperText } from '@mui/material';
import { scroller } from 'react-scroll';
import { useQuery } from 'react-query';
import Button from '../button/button';
import "./dropdown.css";

const fetchDropdownOptions = async () => {
  const response = await fetch('http://localhost:8000/farmer/');
  if (!response.ok) {
    throw new Error('Failed to fetch options');
  }
  return response.json();
};

const DropdownForm = ({ onDropdownChange }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const { data, error, isLoading } = useQuery('dropdownOptions', fetchDropdownOptions);

  const onSubmit = (data, e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    console.log(data);

    // Scroll to the table section
    scroller.scrollTo('tablesection', {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  if (isLoading) return <div>Loading dropdown options...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleChange = (e) => {
    onDropdownChange(e.target.value);  // Pass the selected value back to the parent
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <FormControl fullWidth error={!!errors.dropdown}>
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
              onChange={(e) => {
                handleChange(e);  
                field.onChange(e);  
              }}
            >
              {data.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errors.dropdown && <FormHelperText>{errors.dropdown.message}</FormHelperText>}
      </FormControl>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default DropdownForm;
