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
import bgImage from "assets/images/rio-bg.jpg";

export default function Tourism() {
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
      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Card
          sx={{
            width: "100%",
            minHeight: "75vh",
            p: 2,
            mt: -70,
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
                Tourism
              </MKTypography>
              <Divider variant="middle" sx={{ background: "black" }} />
            </Grid>
            <Grid item xs={12} lg={3}>
              <MKTypography variant="h4" color="text" align="center">
                Airport
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={9}>
              <MKTypography variant="body1" color="text">
                <a target="_blank" href="https://www.skyharbor.com/">
                  Phoenix Sky Harbor International Airport
                </a>{" "}
                (30 minutes away from the range)
              </MKTypography>
            </Grid>
            <Grid item xs={12}>
              <Divider variant="middle" sx={{ background: "black" }} />
            </Grid>
            <Grid item xs={12} lg={3}>
              <MKTypography variant="h4" color="text" align="center">
                Tourism for Shooters
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={9}>
              <MKTypography variant="body1" color="text" fontWeight="light">
                <b>Accuracy Speaks (Gunsmith at the range)</b>
                <br />
                <b>Address:</b> 3960 N Usery Pass Rd, Mesa, AZ 85207 USA <br />
                <b>Website:</b>{" "}
                <a target="_blank" href="https://accuracyspeaks.com/">
                  https://accuracyspeaks.com/
                </a>
                <br />
                <br />
                <b>
                  Ghost Products CZ Custom Shop (25 minutes away from the range)
                </b>
                <br />
                <b>Address:</b> 110 E Southern Ave, Mesa, AZ 85210 USA <br />
                <b>Website:</b>{" "}
                <a target="_blank" href="https://czcustom.com/">
                  https://czcustom.com/
                </a>
                <br />
                <br />
                <b>Dillon Precision (35 minutes away from the range)</b>
                <br />
                <b>Address:</b> 8009 E Dillons Way, Scottsdale, AZ 85260 USA
                <br />
                <b>Website:</b>{" "}
                <a target="_blank" href="https://www.dillonprecision.com/">
                  https://www.dillonprecision.com/
                </a>
                <br />
                <br />
                <b>
                  The Vault at Pistol Parlour (20 minutes away from the range)
                </b>
                <br />
                <b>Address:</b> 1356 S Gilbert Rd b7, Mesa, AZ 85204 USA <br />
                <b>Website:</b>{" "}
                <a target="_blank" href="https://thevaultatpistolparlour.com/">
                  https://thevaultatpistolparlour.com/
                </a>
                <br />
                <br />
                <b>AJI Sporting Goods (15 minutes away from the range)</b>
                <br />
                <b>Address:</b> 10444 E Apache Trail, Apache Junction, AZ 85120
                USA <br />
                <b>Website:</b>{" "}
                <a target="_blank" href="https://www.ajisports.com/">
                  https://www.ajisports.com/
                </a>
                <br />
                <br />
                <b>SCHEELS (30 minutes away from the range)</b>
                <br />
                <b>Address:</b> 3199 W Chandler Blvd, Chandler, AZ 85226 USA
                <br />
                <b>Website:</b>{" "}
                <a
                  target="_blank"
                  href="https://www.scheels.com/store?StoreID=026"
                >
                  https://www.scheels.com/store?StoreID=026
                </a>
                <br />
                <br />
                <b>Bass Pro Shops (25 minutes away from the range)</b>
                <br />
                <b>Address:</b> 1133 N Dobson Rd, Mesa, AZ 85201 USA
                <br />
                <b>Website:</b>{" "}
                <a
                  target="_blank"
                  href="https://stores.basspro.com/us/az/mesa/1133-north-dobson.html"
                >
                  https://stores.basspro.com/us/az/mesa/1133-north-dobson.html
                </a>
                <br />
                <br />
              </MKTypography>
            </Grid>
            <Grid item xs={12}>
              <Divider variant="middle" sx={{ background: "black" }} />
            </Grid>
            <Grid item xs={12} lg={3}>
              <MKTypography variant="h4" color="text" align="center">
                Local Attractions
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={9}>
              <MKTypography variant="body1" color="text" fontWeight="light">
                <b>Lost Dutchman State Park (20 minutes away from the range)</b>
                <br />
                <b>Address:</b> 6109 N Apache Trail, Apache Junction, AZ 85119
                USA
                <br />
                <b>Website:</b>{" "}
                <a
                  target="_blank"
                  href="https://azstateparks.com/lost-dutchman"
                >
                  https://azstateparks.com/lost-dutchman
                </a>
                <br />
                <br />
                <b>The Dolly Steamboat (40 minutes away from the range)</b>
                <br />
                <b>Address:</b> 16802 AZ-88, Apache Junction, AZ 85119 USA
                <br />
                <b>Website:</b>{" "}
                <a target="_blank" href="https://dollysteamboat.com/">
                  https://dollysteamboat.com/
                </a>
                <br />
                <br />
                <b>
                  Arizona Commemorative Air Force Museum (15 minutes away from
                  the range)
                </b>
                <br />
                <b>Address:</b> 2017 N Greenfield Rd, Mesa, AZ 85215 USA
                <br />
                <b>Website:</b>{" "}
                <a target="_blank" href="https://www.azcaf.org/">
                  https://www.azcaf.org/
                </a>
                <br />
                <br />
                <b>
                  Butterfly Wonderland & OdySea Aquarium (30 minutes away from
                  the range)
                </b>
                <br />
                <b>Address:</b> 9500 East Vía de Ventura F100, Scottsdale, AZ
                85256 USA
                <br />
                <b>Website:</b>{" "}
                <a target="_blank" href="https://butterflywonderland.com/">
                  https://butterflywonderland.com/
                </a>{" "}
                &{" "}
                <a target="_blank" href="https://www.odyseaaquarium.com/">
                  https://www.odyseaaquarium.com/
                </a>
                <br />
                <br />
                <b>Sedona (2 hours away from the range)</b>
                <br />
                <b>Address:</b> 331 Forest Road Sedona, AZ 86336 USA
                <br />
                <b>Website:</b>{" "}
                <a
                  target="_blank"
                  href="https://visitsedona.com/trip-planning/visitor-center/"
                >
                  https://butterflywonderland.com/
                </a>
                <br />
                <br />
                <b>"World Famous" Grand Canyon (4 hours away from the range)</b>
                <br />
                <b>Address:</b> S Entrance Rd, Grand Canyon Village, AZ 86023
                USA
                <br />
                <b>Website:</b>{" "}
                <a
                  target="_blank"
                  href="https://www.nps.gov/grca/planyourvisit/visitorcenters.htm"
                >
                  https://www.nps.gov/grca/planyourvisit/visitorcenters.htm
                </a>
                <br />
                <br />
                For more local attractions, please check -{" "}
                <a target="_blank" href="https://www.visitarizona.com/">
                  HERE
                </a>
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
