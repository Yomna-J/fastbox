import {
  Button,
  Box,
  Typography,
  useTheme,
  Grid,
  Rating,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { theme } from "../../theme";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Reviews = ({ reviews }) => {
  const { palette } = useTheme(theme);

  const [activeTab, setActiveTab] = useState(0);

  //   TODO: Responsive design
  const onTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <Box
      sx={{
        m: "2rem 10%",
        borderRadius: "1.25rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* TABS BOX */}
      <Box
        sx={{
          display: "flex",
          p: "0 0 3rem 3rem",
          gap: "1.5rem",
          flexDirection: "column",
          height: "100%",
          width: "30%",
        }}
      >
        {reviews.map((review) => {
          return (
            <Box // TAB BOX
              className={activeTab === review.id ? "active-tab" : ""}
              key={review.id}
              onClick={() => {
                setActiveTab(review.id);
              }}
              sx={{
                width: "100%",
                p: "2rem",
                borderRadius: ".65rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background:
                  " linear-gradient(90deg, rgba(227,249,231,1) 0%, rgba(248,253,249,0.17776617482930668) 91%, rgba(255,255,255,1) 100%)",
                cursor: "pointer",
              }}
            >
              <Avatar
                alt={reviews[activeTab].author}
                src={reviews[activeTab].avatar}
              />

              <Typography
                variant="head"
                sx={{
                  color: palette.text.primary,
                  fontWeight: "bold",
                }}
              >
                {review.author}
              </Typography>

              <ArrowForwardIosIcon color={palette.primary.main} />
            </Box>
          );
        })}
      </Box>
      {/* CONTENT BOX */}
      <Box
        sx={{
          width: "70%",
          borderRadius: activeTab === 0 ? "0 .65rem  .65rem .65rem" : ".65rem",
          display: "flex",
          p: "3rem 6rem",
          gap: "2rem",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: palette.secondary.main,
        }}
      >
        {/* TODO: Add svg */}

        <Typography
          variant="text"
          sx={{
            color: palette.text.secondary,
          }}
        >
          {reviews[activeTab].content}
        </Typography>
        <Typography
          variant="head"
          sx={{
            color: palette.primary.dark,
            fontWeight: "bold",
          }}
        >
          {reviews[activeTab].job}
        </Typography>
        <Rating name="read-only" value={reviews[activeTab].rate} readOnly />
      </Box>
    </Box>
  );
};

export default Reviews;
