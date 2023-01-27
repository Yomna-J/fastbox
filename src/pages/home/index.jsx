import {
  Button,
  Box,
  Typography,
  useTheme,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Hero from "../../components/hero/Hero";
import { theme } from "../../theme";
import { default as star } from "../../assets/star.svg";
import { default as truck } from "../../assets/truck.svg";
import { default as price } from "../../assets/price.svg";
import { default as gps } from "../../assets/gps.svg";
import Step from "../../components/step";
import Card from "../../components/ui/Card";
import PriceForm from "../../components/ui/PriceForm";
import Reviews from "../../components/ui/Reviews";
import PrimaryButton from "../../components/ui/PrimaryButton";
import data from "../../data";
import MobileReviews from "../../components/ui/MobileReviews";

const Home = () => {
  const { palette } = useTheme(theme);
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <div className="home">
      <Hero />
      {/* TOOLS */}
      <Box
        width="100%"
        max-width="10w"
        sx={{
          backgroundColor: palette.secondary.main,
          p: "2rem",
        }}
      >
        <ul className="tools">
          {data.tools.map((tool) => {
            return (
              <li key={tool.id}>
                <img src={tool.img} alt={tool.name} />
              </li>
            );
          })}
        </ul>
      </Box>
      {/* HOW IT WORKS */}
      <div className="how-work">
        <Box
          sx={{
            display: "flex",
            alignItems: { md: "flex-end", xs: "center" },
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { md: "space-between", xs: "center" },
            p: "15vh 15% 2rem 15%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { md: "4rem", xs: "0" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="head"
              sx={{
                color: palette.primary.dark,
                fontWeight: "bold",
                fontSize: { md: "2.0rem", xs: "1.25rem" },
              }}
            >
              How Fast box works
            </Typography>
            <Typography
              variant="text"
              sx={{
                width: { md: "40%", xs: "100%" },
                color: palette.text.secondary,
                fontSize: { md: "1.25rem" },
                textAlign: { md: "left", xs: "center" },
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate cillum dolore
              eu fugiat nulla pariatur.
            </Typography>
          </Box>
          <img src={star} alt="star" sx={{ alignSelf: "flex-end" }} />
        </Box>
        <Box
          sx={{
            p: "10vh 10% 2rem 10%",
          }}
        >
          <Grid
            container
            columns={{ xs: 1, md: 4 }}
            sx={{
              "&>:nth-child(-n+3)": {
                borderRight: { md: "1px dashed #9757d738" },
                borderBottom: { xs: "1px dashed #9757d738", md: "none" },
              },
            }}
          >
            {data.steps.map((step) => {
              return (
                <Grid className="steps-grid" item xs={1} key={step.id}>
                  <Step
                    className="step"
                    key={step.id}
                    id={step.id}
                    img={step.img}
                    name={step.name}
                    description={step.description}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        {/* NETWORK */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: "5rem",
            alignItems: "center",
            pr: { md: "10vw" },
          }}
        >
          <Box
            component="img"
            sx={{
              width: { xs: "100%", md: "50%" },
            }}
            src={truck}
            alt="truck"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              gap: "1.5rem",
              p: { xs: "2rem" },
            }}
          >
            <Typography
              variant="head"
              sx={{
                color: palette.primary.dark,
                fontWeight: "bold",
                fontSize: { md: "2.0rem", xs: "1.25rem" },
              }}
            >
              We Have the largest Network
            </Typography>
            <Typography
              variant="text"
              sx={{
                pt: "1rem",
                color: palette.text.secondary,
                fontSize: { md: "1.25rem" },
                textAlign: { md: "left", xs: "center" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <PrimaryButton title="Learn More" />
          </Box>
        </Box>
      </div>
      {/* SPECIALTIES */}
      <Box
        sx={{
          display: "flex",
          p: "2.5rem",
          flexDirection: { xs: "column", md: "row" },
          gap: { md: "4rem", xs: "0" },
          my: "5%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="head"
          sx={{
            color: palette.primary.dark,
            fontWeight: "bold",
            fontSize: { md: "2.0rem", xs: "1.25rem" },
          }}
        >
          Our Specialties
        </Typography>
        <Typography
          variant="text"
          sx={{
            width: { md: "30%", xs: "100%" },
            color: palette.text.secondary,
            fontSize: { md: "1.25rem" },
            textAlign: { md: "left", xs: "center" },
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu
          fugiat nulla pariatur.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          m: "0 10%",
          flexDirection: { xs: "column", md: "row" },
          gap: "5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.specialties.map((specialty) => {
          return (
            <Card
              key={specialty.id}
              number={specialty.id}
              title={specialty.title}
              description={specialty.description}
            />
          );
        })}
      </Box>
      {/* PRICE */}
      <Box
        sx={{
          backgroundColor: palette.secondary.main,
          p: { md: "3rem 3rem 0 3rem", xs: "1rem" },
          m: { xs: "20% 10%", md: "5% 10% 0 10%" },
          borderRadius: "1.25rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          gap: { md: "0", xs: "2rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            width: { md: "35%" },
            gap: "1.25rem",
          }}
        >
          <Typography
            variant="head"
            sx={{
              color: palette.primary.dark,
              fontWeight: "bold",
              fontSize: { md: "2.0rem", xs: "1.25rem" },
            }}
          >
            Calculate your price
          </Typography>
          <Typography
            variant="text"
            sx={{
              color: palette.text.secondary,
              fontSize: { md: "1.25rem" },
              textAlign: { md: "left", xs: "center" },
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu
            fugiat nulla pariatur.
          </Typography>
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            src={price}
            alt="price"
          />
        </Box>
        {/* PRICE FORM  */}
        <Box
          component="form"
          sx={{
            p: { md: "4rem", xs: "1rem" },
            mb: "3rem",
            width: { md: "50%" },
            backgroundColor: "#fff",
            borderRadius: "1.25rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <PriceForm />
        </Box>
      </Box>
      {/* SHIPMENT GPS */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          my: "5%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            gap: "1.5rem",
            p: "0 2rem 2rem 10%",
          }}
        >
          <Box
            component="img"
            sx={{ pb: { md: "2rem" }, ml: { md: "-2.5rem" } }}
            src={star}
            alt="star"
          />

          <Typography
            variant="head"
            sx={{
              color: palette.primary.dark,
              fontWeight: "bold",
              fontSize: { md: "2.0rem", xs: "1.25rem" },
            }}
          >
            Follow your shipment via GPS
          </Typography>
          <Typography
            variant="text"
            sx={{
              pt: "1rem",
              color: palette.text.secondary,
              fontSize: { md: "1.25rem" },
              textAlign: { md: "left", xs: "center" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate..
          </Typography>
          <Button
            variant="text"
            sx={{
              width: "10rem",
              p: ".5rem 1.5rem",
              backgroundColor: palette.primary.main,
              color: "#ffffff",
              borderRadius: 2,
              boxShadow: ` 0px 7px 5px 0px ${palette.primary.light}}`,
              "&:hover": { color: palette.primary.main },
            }}
          >
            Learn More
          </Button>
        </Box>
        <Box
          component="img"
          sx={{
            width: { xs: "100%", md: "50%" },
            mt: { md: "3rem" },
          }}
          src={gps}
          alt="gps"
        />
      </Box>
      {/* CLIENTS REVIEWS */}
      <Box
        sx={{
          display: "flex",
          py: "2.5rem",
          flexDirection: "column",
          gap: "0.75rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="head"
          sx={{
            color: palette.primary.dark,
            fontWeight: "bold",
            fontSize: { md: "2.0rem", xs: "1.25rem" },
          }}
        >
          What our Clients Say
        </Typography>
        <Typography
          variant="text"
          sx={{
            color: palette.text.secondary,
            fontSize: { md: "1.25rem" },
            textAlign: { md: "left", xs: "center" },
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu
          fugiat nulla pariatur.
        </Typography>
      </Box>
      {isMobile ? (
        <MobileReviews reviews={data.reviews} />
      ) : (
        <Reviews reviews={data.reviews} />
      )}
    </div>
  );
};

export default Home;
