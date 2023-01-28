import {
  TextField,
  Box,
  useTheme,
  MenuItem,
  Select,
  FormControl,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { default as calender } from "../../assets/calender.svg";
import { default as location } from "../../assets/location.svg";
import { default as parcel } from "../../assets/parcel.svg";
import { theme } from "../../theme.js";
import { useState } from "react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PrimaryButton from "./PrimaryButton";
const PriceForm = () => {
  const { palette } = useTheme(theme);
  const [bookingDate, setBookingDate] = useState(new Date());

  const [searchValues, setSearchValues] = useState({
    parcelType: "",
    from: "",
    to: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchValues({ ...searchValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const { parcelType, from, to } = searchValues;

  return (
    <form onSubmit={handleFormSubmit}>
      {/* TODO: Add labels */}
      {/* BOOKING DATE */}
      <Box display="flex" gap="1rem" alignItems="center">
        <Box
          component="img"
          sx={{
            backgroundColor: palette.primary.main,
            width: "2rem",
            p: ".25rem",
            borderRadius: ".15rem",
          }}
          src={calender}
          alt="calender"
        />
        <Typography
          variant="head"
          sx={{
            color: palette.text.primary,
            fontWeight: "bold",
            fontSize: { md: "1.25rem", xs: "1.25rem" },
          }}
        >
          Booking Date
        </Typography>
      </Box>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="data-field"
          label="Enter Booking date"
          name="bookingDate"
          value={bookingDate}
          onChange={(value) => setBookingDate(value)}
          renderInput={(params) => (
            <TextField
              // InputLabelProps={{ shrink: false }}
              variant="standard"
              displayEmpty
              {...params}
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#bfbfbff7",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#bfbfbff7",
                },
                "& .MuiSvgIcon-root": {
                  color: palette.primary.main,
                },
                "& .MuiFormLabel-root": {
                  color: palette.text.secondary,
                  fontWeight: "500",
                },
                input: {
                  color: palette.text.secondary,
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
      {/* TYPE OF PARCEL */}
      <Box display="flex" gap="1rem" alignItems="center">
        <Box
          component="img"
          sx={{
            backgroundColor: palette.primary.main,
            width: "2rem",
            p: ".25rem",
            borderRadius: ".15rem",
          }}
          src={parcel}
          alt="parcel"
        />
        <Typography
          variant="head"
          sx={{
            color: palette.text.primary,
            fontWeight: "bold",
            fontSize: { md: "1.25rem", xs: "1.25rem" },
          }}
        >
          Type of Parcel
        </Typography>
      </Box>
      <FormControl className="data-field">
        <Select
          variant="standard"
          value={parcelType}
          name="parcelType"
          onChange={handleChange}
          displayEmpty
          sx={{
            ":before": { borderBottomColor: "#bfbfbff7" },
            ":after": { borderBottomColor: "#bfbfbff7" },
            "& .MuiSvgIcon-root": {
              color: palette.primary.main,
            },
            " & ": {
              color: palette.text.secondary,
              fontWeight: "500",
            },
          }}
        >
          <MenuItem value="">Select Parcel Type</MenuItem>
        </Select>
      </FormControl>
      <Box display="flex" gap="1rem" alignItems="center">
        <Box
          component="img"
          sx={{
            backgroundColor: palette.primary.main,
            width: "2rem",
            p: ".25rem",
            borderRadius: ".15rem",
          }}
          src={location}
          alt="location"
        />
        <Typography
          variant="head"
          sx={{
            color: palette.text.primary,
            fontWeight: "bold",
            fontSize: { md: "1.25rem", xs: "1.25rem" },
          }}
        >
          Destination
        </Typography>
      </Box>
      {/* DESTINATION */}
      <Box display="flex" flexWrap="wrap" gap="1rem">
        {/* TO FIELD */}
        <FormControl className="data-field">
          <Select
            variant="standard"
            value={to}
            name="to"
            onChange={handleChange}
            displayEmpty
            sx={{
              ":before": { borderBottomColor: "#bfbfbff7" },
              ":after": { borderBottomColor: "#bfbfbff7" },
              "& .MuiSvgIcon-root": {
                color: palette.primary.main,
              },
              " & ": {
                color: palette.text.secondary,
                fontWeight: "500",
              },
            }}
          >
            <MenuItem value="">To</MenuItem>
          </Select>
        </FormControl>
        {/* FROM FIELD */}
        <FormControl className="data-field">
          <Select
            variant="standard"
            value={from}
            name="from"
            onChange={handleChange}
            displayEmpty
            sx={{
              ":before": { borderBottomColor: "#bfbfbff7" },
              ":after": { borderBottomColor: "#bfbfbff7" },
              "& .MuiSvgIcon-root": {
                color: palette.primary.main,
              },
              " & ": {
                color: palette.text.secondary,
                fontWeight: "500",
              },
            }}
          >
            <MenuItem value="">From</MenuItem>
          </Select>
          {/* TODO: Add submit button */}
        </FormControl>
      </Box>
      <PrimaryButton title="Calculate" />
    </form>
  );
};

export default PriceForm;
