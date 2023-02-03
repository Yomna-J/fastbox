import { Box, TextField, Typography, useTheme } from "@mui/material";
import { theme } from "../../theme";
import { default as logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { default as phone } from "../../assets/phone-icon.svg";
import { default as location } from "../../assets/location-icon.svg";
import { default as email } from "../../assets/email-icon.svg";
import { default as social } from "../../assets/social.svg";
import { default as footer } from "../../assets/footer.svg";

import PrimaryButton from "../ui/PrimaryButton";

const Footer = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const { palette } = useTheme(theme);
  return (
    <Box
      className="footer"
      sx={{
        backgroundColor: { xs: palette.secondary.main, md: "transparent" },
        backgroundImage: { xs: "none", md: `url(${footer})` },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left",
      }}
    >
      <Box
        sx={{
          display: "flex",
          mx: " 10%",
          mt: "5%",
          flexDirection: { xs: "column", md: "row" },
          gap: "1rem",
          "&>:nth-child(-n+3)": {
            borderRight: { md: "2px dashed #e3dedec2" },
            borderBottom: { xs: "2px dashed #e3dedec2", md: "none" },
          },
        }}
      >
        <Box className="footer-item" flex="1.6">
          <Box
            className="footer-title"
            component="img"
            src={logo}
            alt="logo"
            sx={{ width: "15rem" }}
          />
          <Typography
            variant="text"
            sx={{
              color: palette.text.secondary,
              fontSize: { md: "1rem" },
              textAlign: "left",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam..
          </Typography>
        </Box>
        <Box className="footer-item">
          <Typography
            className="footer-title"
            variant="head"
            sx={{
              color: palette.primary.dark,
              fontWeight: "bold",
            }}
          >
            Quick link
          </Typography>
          <Link to="/#" className="link">
            Tracking
          </Link>
          <Link to="/#" className="link">
            Shipping
          </Link>
          <Link to="/#" className="link">
            Locations
          </Link>
          <Link to="/#" className="link">
            Support
          </Link>
        </Box>
        <Box className="footer-item">
          <Typography
            className="footer-title"
            variant="head"
            sx={{
              color: palette.primary.dark,
              fontWeight: "bold",
            }}
          >
            Contact us
          </Typography>
          <Box className="contact-item">
            <img src={phone} />
            <Typography
              variant="text"
              sx={{
                color: palette.text.secondary,
              }}
            >
              (209) 555-0104
            </Typography>
          </Box>
          <Box className="contact-item">
            <img src={email} />
            <Typography
              variant="text"
              sx={{
                color: palette.text.secondary,
              }}
            >
              michelle.rivera@example.com
            </Typography>
          </Box>
          <Box className="contact-item">
            <img src={location} />
            <Typography
              variant="text"
              sx={{
                color: palette.text.secondary,
              }}
            >
              2715 Ash Dr. San Jose, South Dakota 83475
            </Typography>
          </Box>
        </Box>
        <Box className="footer-item">
          <Typography
            className="footer-title"
            variant="head"
            sx={{
              color: palette.primary.dark,
              fontWeight: "bold",
            }}
          >
            Subscribe
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Name"
              variant="standard"
              sx={{
                ":before": { borderBottomColor: palette.text.secondary },
                ":after": { borderBottomColor: palette.text.secondary },
              }}
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Email"
              variant="standard"
              sx={{
                mb: "2rem",
                ":before": { borderBottomColor: palette.text.secondary },
                ":after": { borderBottomColor: palette.text.secondary },
              }}
            />
            <PrimaryButton title="Subscribe" />
          </form>
        </Box>
      </Box>
      <Box
        sx={{
          mx: "10%",
          mt: "3rem",
          p: "2rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          borderTop: " 2px dashed #e3dedec2",
          gap: "1rem",
        }}
      >
        <Typography
          variant="text"
          sx={{
            color: palette.text.secondary,
          }}
        >
          Copyright 2023 | Designed by Uitaskca built by Yomna-J - All rights
          Reserved
        </Typography>
        <Box component="img" src={social} alt="social" />
      </Box>
    </Box>
  );
};

export default Footer;
