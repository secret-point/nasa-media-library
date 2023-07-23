import React from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const YearInput = ({ year, setYear, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        views={["year"]}
        value={year}
        onChange={(newValue) => {
          setYear(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} helperText={null} variant="standard" />
        )}
        {...props}
      />
    </LocalizationProvider>
  );
};

export default YearInput;
