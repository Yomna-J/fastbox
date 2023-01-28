import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { Menu, Close } from "@mui/icons-material";
import PrimaryButton from "../ui/PrimaryButton";
import { default as logo } from "../../assets/logo.svg";
import { theme } from "../../theme";

const Navbar = () => {
  const { palette } = useTheme(theme);
  const location = useLocation();
  const [url, setUrl] = useState(null);
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  const isNotMobile = useMediaQuery("(min-width: 1200px)");

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <Box
      position="absolute"
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        p: "1rem 3%",
      }}
    >
      <Box
        component="img"
        sx={{ pb: { md: "2rem" }, ml: { md: "-2.5rem" } }}
        src={logo}
        alt="logo"
      />
      {/* DESKTOP NAVBAR */}
      {isNotMobile && (
        <>
          <Box>
            {/* EMPTY FAKE LINKS */}
            <Link to="/" className={"link" + (url === "/" ? " active" : "")}>
              Home
            </Link>
            <Link
              to="/#"
              className={"link" + (url === "/tracking" ? " active" : "")}
            >
              Tracking
            </Link>
            <Link
              to="/#"
              className={"link" + (url === "/shipping" ? " active" : "")}
            >
              Shipping
            </Link>
            <Link
              to="/#"
              className={"link" + (url === "/locations" ? " active" : "")}
            >
              Locations
            </Link>
            <Link
              to="/#"
              className={"link" + (url === "/support" ? " active" : "")}
            >
              Support
            </Link>
          </Box>
          <Box display="flex" gap="1.5rem">
            <Button
              variant="text"
              sx={{
                p: ".5rem 1.5rem",
                color: palette.text.secondary,
                backgroundColor: "transparent",
                "&:hover": { color: palette.primary.main },
              }}
            >
              Signin
            </Button>
            <Button
              variant="text"
              sx={{
                p: ".5rem 1.5rem",
                backgroundColor: palette.primary.main,
                color: "#ffffff",
                borderRadius: 2,
                boxShadow: ` 0px 7px 5px 0px ${palette.primary.light}}`,
                "&:hover": { color: palette.primary.main },
              }}
            >
              Register
            </Button>
          </Box>
        </>
      )}

      {!isNotMobile && (
        <>
          <IconButton
            onClick={() => {
              setIsMobileMenuToggled(!isMobileMenuToggled);
              console.log("te");
            }}
          >
            <Menu />
          </IconButton>
          {/* MOBILE NAVBAR BODY */}
          {isMobileMenuToggled && (
            <Box
              position="fixed"
              right="0"
              bottom="0"
              height="100%"
              zIndex="10"
              maxWidth="500px"
              minWidth="300px"
              sx={{
                backgroundColor: "#fff",
              }}
            >
              {/* CLOSE ICON */}
              <Box display="flex" justifyContent="flex-end" p="2rem">
                <IconButton
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                >
                  <Close />
                </IconButton>
              </Box>

              {/* MENU ITEMS */}
              <Box
                p="3rem"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Link
                  to="/"
                  className={"link" + (url === "/" ? " active" : "")}
                >
                  Home
                </Link>
                <Link
                  to="/tracking"
                  className={"link" + (url === "/tracking" ? " active" : "")}
                >
                  Tracking
                </Link>
                <Link
                  to="/shipping"
                  className={"link" + (url === "/shipping" ? " active" : "")}
                >
                  Shipping
                </Link>
                <Link
                  to="/locations"
                  className={"link" + (url === "/locations" ? " active" : "")}
                >
                  Locations
                </Link>
                <Link
                  to="/support"
                  className={"link" + (url === "/support" ? " active" : "")}
                >
                  Support
                </Link>
                <Button
                  variant="text"
                  sx={{
                    p: ".5rem 1.5rem",
                    color: palette.text.secondary,
                    backgroundColor: "transparent",
                    "&:hover": { color: palette.primary.main },
                  }}
                >
                  Signin
                </Button>
                <PrimaryButton title="Register" />
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Navbar;
