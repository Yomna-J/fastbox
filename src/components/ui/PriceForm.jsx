import {
  TextField,
  Box,
  useTheme,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { theme } from "../../theme.js";
import { useState } from "react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const PriceForm = () => {
  const { palette } = useTheme(theme);
  const [date, setDate] = useState(new Date());

  const [searchValues, setSearchValues] = useState({
    bookingDate: "",
    parcelType: "",
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchValues({ ...searchValues, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const { bookingDate, parcelType, from, to } = searchValues;

  return (
    <Box
      component="form"
      sx={{
        p: "4rem",
        mb: "3rem",
        width: "50%",
        backgroundColor: "#fff",
        borderRadius: "1.25rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Enter Booking date"
          name="bookingDate"
          value={date}
          onChange={(value) => setDate(value)}
          sx={{}}
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
                },
                input: {
                  color: palette.text.secondary,
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          id="booking-date"
          name="bookingDate"
          label="Basic example"
          value={bookingDate}
          onChange={handleChange}
          views={["year", "month", "day"]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              sx={{
                input: {
                  color: palette.text.secondary,
                },
              }}
            />
          )}
        />
      </LocalizationProvider> */}

      {/* <TextField
        id="booking-date"
        name="bookingDate"
        label="Basic example"
        variant="standard"
        type="date"
        value={bookingDate}
        onChange={handleChange}
        FormHelperTextProps={{ style: { fontWeight: "bold" } }}
        sx={{
          input: {
            color: palette.text.secondary,
          },
        }}
      /> */}
      <FormControl>
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
            },
          }}
        >
          <MenuItem value="">Select Parcel Type</MenuItem>
        </Select>
      </FormControl>
      <Box display="flex" gap="2rem">
        {/* TO FIELD */}
        <FormControl>
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
              },
            }}
          >
            <MenuItem value="">To</MenuItem>
          </Select>
        </FormControl>
        {/* FROM FIELD */}
        <FormControl>
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
              },
            }}
          >
            <MenuItem value="">From</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default PriceForm;
