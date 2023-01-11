import { Box, Typography, useTheme } from "@mui/material";
import { theme } from "../../theme";

const Step = ({ id, name, img, description }) => {
  const { palette } = useTheme(theme);

  return (
    <Box
      className="step"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: "1rem",
        gap: "1rem",
      }}
    >
      <img src={img} width="25%" />
      <Typography
        sx={{
          color: palette.text.secondary,
          fontWeight: "bold",
          fontSize: { md: ".75rem" },
        }}
      >
        Step {id}
      </Typography>
      <Typography
        sx={{
          color: palette.primary.dark,
          fontWeight: "bold",
          fontSize: { md: "1.5rem", xs: "1.25rem" },
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: palette.text.secondary,
          fontSize: { md: "1rem" },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Step;
