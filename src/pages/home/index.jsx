import { Button, Box, Typography, useTheme, Grid } from "@mui/material";
import Hero from "../../components/hero/Hero";
import { theme } from "../../theme";
import { default as airtable } from "../../assets/airtable.svg";
import { default as sketch } from "../../assets/sketch.svg";
import { default as dribbble } from "../../assets/dirbbble.svg";
import { default as slack } from "../../assets/slack.svg";
import { default as livechat } from "../../assets/livechat.svg";
import { default as gitlab } from "../../assets/gitlab.svg";
import { default as star } from "../../assets/star.svg";
import { default as booking } from "../../assets/booking.svg";
import { default as packing } from "../../assets/packing.svg";
import { default as transportation } from "../../assets/transportation.svg";
import { default as delivery } from "../../assets/delivery.svg";
import { default as truck } from "../../assets/truck.svg";
import Step from "../../components/step";
import Card from "../../components/ui/Card";
import PriceForm from "../../components/ui/PriceForm";
import Reviews from "../../components/ui/Reviews";

const Home = () => {
  const { palette } = useTheme(theme);
  const data = {
    tools: [
      { id: 1, name: "airtable", img: airtable },
      { id: 2, name: "sketch", img: sketch },
      { id: 3, name: "dribbble", img: dribbble },
      { id: 4, name: "slack", img: slack },
      { id: 5, name: "livechat", img: livechat },
      { id: 6, name: "gitlab", img: gitlab },
    ],
    steps: [
      {
        id: 1,
        name: "Booking",
        description:
          "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        img: booking,
      },
      {
        id: 2,
        name: "Packing",
        description:
          "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        img: packing,
      },
      {
        id: 3,
        name: "Transportation",
        description:
          "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        img: transportation,
      },
      {
        id: 4,
        name: "Delivery",
        description:
          "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        img: delivery,
      },
    ],
    specialties: [
      {
        id: "01",
        title: "Easy to order",
        description:
          "Stacks is a production-ready library of stackable content blocks built in React Native",
      },
      {
        id: "02",
        title: "Cash on delivery",
        description:
          "Stacks is a production-ready library of stackable content blocks built in React Native",
      },
      {
        id: "03",
        title: "Live tracking",
        description:
          "Stacks is a production-ready library of stackable content blocks built in React Native",
      },
    ],
    reviews: [
      {
        id: 0,
        picture: "",
        author: "dsafas",
        job: "dasf",
        content: "dsafajhdalkjhdasjfkhafeiaf fhdfalkfjh afajhflkjafsf",
        rate: 5,
      },
      {
        id: 1,
        picture: "",
        author: "eqrvzvv",
        job: "eeawra",
        content: "oooadsafjk dajhfkaf jakkdspsad",
        rate: 2,
      },
    ],
  };

  return (
    <div className="home">
      <Hero />
      {/* tools */}
      <Box
        width="100%"
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
        </Box>
      </div>
      <Box
        sx={{
          display: "flex",
          p: "2.5rem",
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
          m: "0 7%",
          p: "2.5rem",
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
      <Box
        sx={{
          backgroundColor: palette.secondary.main,
          p: "3rem 3rem 0 3rem",
          m: "2rem 10%",
          borderRadius: "1.25rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
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
          {/* TODO: Add image */}
        </Box>
        {/* PRICE FORM  */}

        <PriceForm />
      </Box>
      {/* TODO: Missing Section */}
      {/* REVIEWS */}
      <Reviews reviews={data.reviews} />
    </div>
  );
};

export default Home;
