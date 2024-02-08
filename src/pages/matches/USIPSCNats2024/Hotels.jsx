import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

import routes from "pages/matches/USIPSCNats2024/routes";
import footerRoutes from "pages/matches/USIPSCNats2024/footer.routes";
import bgImage from "assets/images/hotels/la-quinta-bg.png";

import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import WifiIcon from "@mui/icons-material/Wifi";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";

import laQuintaLobby from "assets/images/hotels/la-quinta-lobby.png";
import laQuintaRoom1 from "assets/images/hotels/la-quinta-room-1.png";
import laQuintaRoom2 from "assets/images/hotels/la-quinta-room-2.png";
import laQuintaPool from "assets/images/hotels/la-quinta-pool.png";
import laQuintaBreakfest from "assets/images/hotels/la-quinta-breakfest.png";
import laQuintaFitness from "assets/images/hotels/la-quinta-fitness.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Lobby",
    imgPath: laQuintaLobby,
  },
  {
    label: "Free Breakfest",
    imgPath: laQuintaBreakfest,
  },
  {
    label: "Guest Room 1",
    imgPath: laQuintaRoom1,
  },
  {
    label: "Guest Room 2",
    imgPath: laQuintaRoom2,
  },
  {
    label: "Pool",
    imgPath: laQuintaPool,
  },
  {
    label: "Fitness Room",
    imgPath: laQuintaFitness,
  },
];

export default function Hotels() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <DefaultNavbar
        brand="2024 US IPSC Handgun Nationals"
        routes={routes}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      />
      <Container>
        <Card
          sx={{
            width: "100%",
            minHeight: "75vh",
            marginTop: "-50vh",
            p: 2,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
              rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <MKTypography variant="h2" color="text" align="center" my={2}>
                Hotels
              </MKTypography>
              <MKTypography
                variant="h4"
                color="text"
                align="center"
                my={2}
                fontWeight="light"
              >
                <b>2024 US IPSC Handgun Nationals - Official Match Hotel:</b> La
                Quinta Inn & Suites by Wyndham Mesa Superstition Springs
              </MKTypography>
              <Divider variant="middle" sx={{ background: "black" }} />
              <MKTypography variant="h4" color="text" align="center" my={2}>
                La Quinta Inn & Suites
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  maxWidth: "80%",
                  flexGrow: 1,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Paper
                  square
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 50,
                    pl: 2,
                    bgcolor: "background.default",
                  }}
                >
                  <MKTypography variant="body1" color="text" fontWeight="light">
                    {images[activeStep].label}
                  </MKTypography>
                </Paper>
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {images.map((step, index) => (
                    <div key={step.label}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                          component="img"
                          sx={{
                            display: "block",
                            overflow: "hidden",
                            width: "100%",
                          }}
                          src={step.imgPath}
                          alt={step.label}
                        />
                      ) : null}
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKTypography variant="body1" color="text" fontWeight="light">
                <b>Distance from Range:</b> 10 miles / 15 mins driving <br />
                <b>Address:</b> 6530 E Superstition Springs Blvd, Mesa, AZ 85206
                USA
                <br />
                <b style={{ color: "red" }}>Booking Link:</b>{" "}
                <a
                  target="_blank"
                  href="https://www.wyndhamhotels.com/hotels/52777?checkInDate=04/11/2024&checkOutDate=04/15/2024&groupCode=CGUSIP"
                >
                  https://www.wyndhamhotels.com/hotels/52777?checkInDate=04/11/2024&checkOutDate=04/15/2024&groupCode=CGUSIP
                </a>{" "}
                <br />
                <b style={{ color: "red" }}>
                  Group Code (for match rate):
                </b>{" "}
                <u style={{ color: "red" }}>CGUSIP</u>
                <br />
                <b>Accommodation Types:</b> (a) 2 Double Beds; (b) 1 King Bed;
                <br />
                (c) 2 Double Beds, Mobility/Hearing Accessible Room; <br /> (d)
                1 King Bed, Mobility/Hearing Accessible Room;
                <br /> (e) 1 King Bed One-Bedroom Suite, Pool View <br />
                <b>Featured Amenities:</b> <br />
                <SmokeFreeIcon /> 100% Smoke-Free Hotel,{" "}
                <LocalLaundryServiceIcon /> On-Site Guest Laundry,
                <br /> <FitnessCenterIcon /> Fitness Center,{" "}
                <MobileFriendlyIcon /> Mobile Check-in,
                <br />
                <WifiIcon /> Free WiFi, <FreeBreakfastIcon /> Free Breakfast
              </MKTypography>
            </Grid>
          </Grid>
        </Card>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
