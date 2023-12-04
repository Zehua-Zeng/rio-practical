import GroupsIcon from "@mui/icons-material/Groups";
import SportsIcon from "@mui/icons-material/Sports";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DifferenceIcon from "@mui/icons-material/Difference";

import GeneralInfo from "pages/matches/USIPSCNats2024/GeneralInfo";
import Schedule from "pages/matches/USIPSCNats2024/Schedule";
import Hotels from "pages/matches/USIPSCNats2024/Hotels";
import Tourism from "pages/matches/USIPSCNats2024/Tourism";
import Officials from "pages/matches/USIPSCNats2024/Officials";
import Sponsors from "pages/matches/USIPSCNats2024/Sponsors";
import IPSCvsUSPSA from "pages/matches/USIPSCNats2024/IPSCvsUSPSA";
import FAQs from "pages/matches/USIPSCNats2024/FAQs";

const usipscnats24_routes = [
  {
    name: "Competitiors",
    icon: <GroupsIcon />,
    collapse: [
      {
        name: "General Information",
        route: "/matches/2024-us-ipsc-nats/general-info",
        component: <GeneralInfo />,
      },
      {
        name: "Schedule",
        route: "/matches/2024-us-ipsc-nats/schedule",
        component: <Schedule />,
      },
      {
        name: "Hotels",
        route: "/matches/2024-us-ipsc-nats/hotels",
        component: <Hotels />,
      },
      {
        name: "Tourism",
        route: "/matches/2024-us-ipsc-nats/tourism",
        component: <Tourism />,
      },
    ],
  },
  {
    name: "Officials",
    icon: <SportsIcon />,
    route: "/matches/2024-us-ipsc-nats/officials",
    component: <Officials />,
  },
  {
    name: "Sponsors",
    icon: <CardGiftcardIcon />,
    route: "/matches/2024-us-ipsc-nats/sponsors",
    component: <Sponsors />,
  },
  {
    name: "IPSC vs USPSA",
    icon: <DifferenceIcon />,
    route: "matches/2024-us-ipsc-nats/ipsc-vs-uspsa",
    component: <IPSCvsUSPSA />,
  },
  {
    name: "FAQs",
    icon: <HelpOutlineIcon />,
    route: "/matches/2024-us-ipsc-nats/faqs",
    component: <FAQs />,
  },
];

export default usipscnats24_routes;
