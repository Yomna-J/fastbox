import {
  Box,
  Typography,
  CardContent,
  useTheme,
  CardHeader,
} from "@mui/material";
import { theme } from "../../theme";

const Card = ({ number, title, description }) => {
  const { palette } = useTheme(theme);

  // TODO: Fix card padding
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        alignItems: { xs: "center", md: "flex-start" },
        width: { md: "500px ", xs: "100%" },
        gap: "1.5rem",
        p: "4rem 3rem ",
        borderRadius: ".80rem",
        boxShadow: ` 0px 0px 15px -3px ${palette.secondary.light}}`,
      }}
    >
      <Typography
        sx={{
          color: palette.secondary.light,
          fontWeight: "bold",
          fontSize: { md: "2rem", xs: "1.25rem" },
        }}
      >
        {number}
      </Typography>
      <Box
        sx={{
          pt: { md: ".75rem" },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography
          variant="head"
          sx={{
            color: palette.text.primary,
            fontWeight: "bold",
            fontSize: { md: "1.25rem", xs: "1.25rem" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: palette.text.secondary,
            fontSize: { md: "1rem" },
            textAlign: { md: "left", xs: "center" },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
