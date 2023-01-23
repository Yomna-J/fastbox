import { Button, Box, Typography, useTheme, Grid } from "@mui/material";
import { useState } from "react";
import { theme } from "../../theme";

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
        gap: "5rem",
      }}
    >
      {/* TABS BOX */}
      <Box
        sx={{
          display: "flex",
          p: "3rem",
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
                background:
                  " linear-gradient(90deg, rgba(227,249,231,1) 0%, rgba(248,253,249,0.17776617482930668) 91%, rgba(255,255,255,1) 100%)",
                cursor: "pointer",
              }}
            >
              {review.author}
            </Box>
          );
        })}
      </Box>
      {/* CONTENT BOX */}
      <Box
        sx={{
          width: "70%",
          borderRadius: ".65rem",

          backgroundColor: palette.secondary.main,
        }}
      >
        {reviews[activeTab].content}
      </Box>
    </Box>
  );
};

export default Reviews;
