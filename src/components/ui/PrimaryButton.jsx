import { Button, useTheme } from "@mui/material";
import { theme } from "../../theme";

const PrimaryButton = ({ title }) => {
  const { palette } = useTheme(theme);

  return (
    <Button
      variant="text"
      sx={{
        width: "10rem",
        p: ".5rem 1.5rem",
        backgroundColor: palette.primary.main,
        color: "#ffffff",
        borderRadius: 2,
        alignSelf: { xs: "center", md: "flex-start" },
        boxShadow: ` 0px 7px 5px 0px ${palette.primary.light}}`,
        "&:hover": { color: palette.primary.main },
      }}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
