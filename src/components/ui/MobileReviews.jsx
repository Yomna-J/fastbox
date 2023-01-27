import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Typography, useTheme, Rating, Avatar } from "@mui/material";
import { theme } from "../../theme";
import { default as quote } from "../../assets/quote.svg";

const MobileReviews = ({ reviews }) => {
  const { palette } = useTheme(theme);

  return (
    <Box
      sx={{
        width: "100vw",
        p: "0 2rem 2rem 10%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Carousel useKeyboardArrows={true} showIndicators>
        {reviews.map((review) => (
          <div className="slide">
            <Box
              key={review.id}
              sx={{
                height: "80vh",
                p: "3vh",
                borderRadius: ".65rem",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
                gap: "1vh",
                backgroundColor: palette.secondary.main,
              }}
            >
              {/* AUTHOR BOX */}
              <Box
                display="flex"
                gap="1rem"
                justifyContent="center"
                alignItems="center"
              >
                <Avatar
                  alt={review.author}
                  src={review.avatar}
                  sx={{
                    width: "4rem",
                    height: "4rem",
                  }}
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
              </Box>
              <Box
                component="img"
                src={quote}
                alt="quote"
                sx={{
                  height: "4rem",
                }}
              />
              <Typography
                variant="text"
                sx={{
                  fontSize: "2vh",
                  color: palette.text.secondary,
                }}
              >
                {review.content}
              </Typography>
              <Typography
                variant="head"
                sx={{
                  color: palette.primary.dark,
                  fontWeight: "bold",
                }}
              >
                {review.job}
              </Typography>
              <Box>
                <Rating
                  name="read-only"
                  precision={0.5}
                  value={review.rate}
                  readOnly
                />
              </Box>
            </Box>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default MobileReviews;
