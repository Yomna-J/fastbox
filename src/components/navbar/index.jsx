import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { Menu, Close } from "@mui/icons-material";

const Navbar = () => {
  const { palette } = useTheme();
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
      <Box>
        <svg
          width="249"
          height="59"
          viewBox="0 0 259 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.5984 47.1063C35.6065 54.8204 43.8508 61.6925 49.9742 68.0014C60.093 56.8759 76.7746 43.3741 76.7746 27.7513C76.7746 12.4276 64.4456 0 49.2322 0C42.3394 0 36.0301 2.55782 31.1977 6.77779H23.8986C21.8483 6.77779 20.1727 8.46752 20.1727 10.5274C20.1727 12.5931 21.8498 14.2771 23.8986 14.2771H35.5187C38.9982 10.6827 43.8566 8.45155 49.2322 8.45155C50.029 8.45155 50.8099 8.50091 51.5793 8.59526C61.0497 9.75804 68.3877 17.8931 68.3877 27.7513C68.3877 37.8476 60.6923 46.1322 50.8862 46.9785C50.3416 47.0235 49.7927 47.0511 49.2322 47.0511C43.093 47.0511 37.6237 44.1376 34.1225 39.6085H13.0104C10.9602 39.6085 9.28453 41.2982 9.28453 43.3581C9.28453 45.4238 10.9616 47.1077 13.0104 47.1077H29.5984V47.1063ZM10.4487 17.4228C8.39843 17.4228 6.72278 19.1125 6.72278 21.1782C6.72278 23.2381 8.39988 24.9279 10.4487 24.9279H30.2857C30.6819 22.2031 31.6429 19.6554 33.0506 17.4242H10.4487V17.4228ZM31.9786 36.1405L30.0984 28.6368H3.72159C1.67709 28.6368 0 30.3266 0 32.3865C0 34.4522 1.67709 36.1419 3.72159 36.1419H31.9786V36.1405Z"
            fill="#3CBD96"
          />
          <path
            d="M50.4411 24.7654L56.295 21.3598L61.7139 18.2083L56.295 15.0523L49.4296 11.0588L42.5642 15.0523L37.1453 18.2083L42.5642 21.3598L48.4239 24.7654L49.4296 25.3519L50.4411 24.7654ZM56.295 23.7521L50.4411 27.1577V42.4088L56.295 39.0032L63.1547 35.0155V27.03V19.7644L56.295 23.7521ZM48.4239 27.1577L42.5642 23.7521L35.7045 19.7644V27.03V35.0155L42.5642 39.0032L48.4239 42.4088V27.1577Z"
            fill="#3CBD96"
          />
          <path
            d="M108.778 26.0015H94.1016V43.9106H98.4657V37.3099H107.766V33.6749H98.4657V29.8338H108.778V26.0015ZM132.773 43.9106L124.928 26.0015H120.027L112.148 43.9106H116.777L118.071 40.6095H126.622L127.923 43.9106H132.773ZM122.333 29.8077L125.328 37.3345H119.363L122.333 29.8077ZM138.023 40.0695C138.023 42.7275 139.215 43.9106 141.835 43.9106H151.731C154.352 43.9106 155.543 42.7275 155.543 40.0695V37.1545C155.543 34.5662 154.403 33.5457 151.731 33.3135L144.064 32.5934C142.975 32.4991 142.644 32.216 142.644 31.1621V30.8369C142.644 29.7816 143.027 29.3969 144.064 29.3969H149.552C150.591 29.3969 150.973 29.783 150.973 30.8369V31.2144H155.184V29.8338C155.184 27.1758 153.993 26.0015 151.381 26.0015H142.08C139.468 26.0015 138.277 27.1758 138.277 29.8338V32.2944C138.277 34.8754 139.416 35.8945 142.08 36.1268L149.755 36.8468C150.845 36.9499 151.176 37.2329 151.176 38.2781V39.0664C151.176 40.1203 150.793 40.5064 149.755 40.5064H143.655C142.618 40.5064 142.234 40.1203 142.234 39.0664V38.3812H138.023V40.0695ZM161.583 26.0015V29.8846H167.727V43.9091H172.092V29.8846H178.236V26.0015H161.583ZM207.284 34.5909C208.423 34.1365 208.985 33.0565 208.985 31.3668V29.8324C208.985 27.1744 207.794 26 205.173 26H192.478V43.9106H205.684C208.297 43.9106 209.488 42.7275 209.488 40.0695V37.995C209.487 36.0745 208.755 34.9509 207.284 34.5909ZM203.19 29.3707C204.236 29.3707 204.611 29.7569 204.611 30.8108V31.779C204.611 32.8765 204.288 33.2104 203.19 33.2104H196.842V29.3693H203.19V29.3707ZM205.123 39.0925C205.123 40.1464 204.739 40.5325 203.702 40.5325H196.844V36.1514H203.702C204.791 36.1514 205.123 36.5376 205.123 37.5828V39.0925ZM229.695 43.9106C233.048 43.9106 234.622 42.3413 234.622 38.9473V30.9574C234.622 27.562 233.048 26.0029 229.695 26.0029H221.519C218.175 26.0029 216.601 27.5634 216.601 30.9574V38.9459C216.601 42.3399 218.176 43.9091 221.519 43.9091H229.695V43.9106ZM223.05 40.1725C221.519 40.1725 220.966 39.6064 220.966 38.072V31.8313C220.966 30.2969 221.519 29.7308 223.05 29.7308H228.173C229.721 29.7308 230.257 30.2969 230.257 31.8313V38.072C230.257 39.6064 229.721 40.1725 228.173 40.1725H223.05ZM244.577 43.9106L249.224 37.455L253.793 43.9106H259L252.192 34.797L258.743 26.0015H253.791L249.478 32.1144L245.155 26.0015H239.948L246.499 34.797L239.702 43.9106H244.577Z"
            fill="#312E43"
          />
        </svg>
      </Box>
      {/* DESKTOP NAVBAR */}
      {isNotMobile && (
        <>
          <Box>
            <Link to="/" className={"link" + (url === "/" ? " active" : "")}>
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
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Navbar;
