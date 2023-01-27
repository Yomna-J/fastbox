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
import { default as price } from "../../assets/price.svg";
import { default as gps } from "../../assets/gps.svg";
import Step from "../../components/step";
import Card from "../../components/ui/Card";
import PriceForm from "../../components/ui/PriceForm";
import Reviews from "../../components/ui/Reviews";
import PrimaryButton from "../../components/ui/PrimaryButton";

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
        avatar: "",
        author: "dsafas",
        job: "dasf",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur finibus risus consectetur pharetra. Sed scelerisque, nisi ut vestibulum convallis, nibh arcu iaculis tellus, vel molestie risus nisl ut purus. Sed at erat nec sem pretium porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse eu neque ex. Integer rhoncus enim a magna scelerisque, sed euismod lacus imperdiet. Phasellus ac diam eget sem tincidunt fermentum. Duis at nunc quis leo mollis tincidunt at ut turpis.",
        rate: 5,
      },
      {
        id: 1,
        avatar: "",
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
        </Box>{" "}
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
            Follow your shipment via GPS{" "}
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
      {/* REVIEWS */}
      <Reviews reviews={data.reviews} />
    </div>
  );
};

export default Home;
