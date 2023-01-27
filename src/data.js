import { default as airtable } from "./assets/airtable.svg";
import { default as sketch } from "./assets/sketch.svg";
import { default as dribbble } from "./assets/dirbbble.svg";
import { default as slack } from "./assets/slack.svg";
import { default as livechat } from "./assets/livechat.svg";
import { default as gitlab } from "./assets/gitlab.svg";
import { default as booking } from "./assets/booking.svg";
import { default as packing } from "./assets/packing.svg";
import { default as transportation } from "./assets/transportation.svg";
import { default as delivery } from "./assets/delivery.svg";
import { default as avatar1 } from "./assets/avatar1.svg";
import { default as avatar2 } from "./assets/avatar2.svg";
import { default as avatar3 } from "./assets/avatar3.svg";

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
      avatar: avatar1,
      author: "Adam Smith",
      job: "Web Developer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur finibus risus consectetur pharetra. Sed scelerisque, nisi ut vestibulum convallis, nibh arcu iaculis tellus, vel molestie risus nisl ut purus. Sed at erat nec sem pretium porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse eu neque ex. Integer rhoncus enim a magna scelerisque, sed euismod lacus imperdiet. Phasellus ac diam eget sem tincidunt fermentum. Duis at nunc quis leo mollis tincidunt at ut turpis.",
      rate: 5,
    },
    {
      id: 1,
      avatar: avatar2,
      author: "Sofia Caralino",
      job: "Business Analyst",
      content:
        "Convallis a cras semper auctor. Tempor nec feugiat nisl pretium fusce id. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Cras sed felis eget velit aliquet sagittis id. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. ",
      rate: 2,
    },
    {
      id: 2,
      avatar: avatar3,
      author: "Marfie Motcast",
      job: "Software Engineer",
      content:
        "Dolor sit amet consectetur adipiscing elit pellentesque. Dolor magna eget est lorem ipsum. Ac turpis egestas integer eget aliquet nibh praesent tristique. ",
      rate: 4.5,
    },
  ],
};

export default data;
