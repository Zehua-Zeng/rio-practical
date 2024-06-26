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
import rioRangeMap from "assets/images/rio-range-map.png";
import logoRio from "assets/images/logo.png";
import stagesPdf from "assets/2024-IPSC-Nationals-All-Stages-Print.pdf";

export default function GeneralInfo() {
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
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <MKTypography variant="h2" color="text" align="center" my={2}>
                General Information
              </MKTypography>
              <MKTypography
                variant="body1"
                color="text"
                align="center"
                fontWeight="light"
              >
                Please read all the information below{" "}
                <u style={{ color: "red" }}>BEFORE</u> contacting Match
                Director.
              </MKTypography>
              <Divider variant="middle" sx={{ background: "black" }} />
            </Grid>
            {/* 0 */}
            <Grid item xs={12} lg={3}>
              <MKTypography variant="h4" color="text" align="center">
                Match Registration
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={9}>
              <MKTypography variant="body1" color="text" fontWeight="light">
                <a
                  target="_blank"
                  href="https://practiscore.com/rio-salado-2024-ipsc-nationals/register"
                >
                  Rio Salado 2024 IPSC Handgun Nationals on PractiScore.com
                </a>
              </MKTypography>
            </Grid>
            <Grid item xs={12}>
              <Divider variant="middle" sx={{ background: "black" }} />
            </Grid>
            {/* 1 */}
            <Grid item xs={12} lg={3}>
              <MKTypography variant="h4" color="text" align="center">
                Equipment Check Schedule, Location & Handbook
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={9}>
              <MKTypography variant="body1" color="text" fontWeight="light">
                <b>Pre-Match</b> Registration and Equipment Check:
                <br />
                <b>Apr. 9, 2024 (Tuesday):</b> 1pm -- 4pm
                <br />
                <b>Apr. 10, 2024 (Wednesday):</b> 8:30am -- 12:30pm
                <br />
                <br />
                <b>Main-Match</b> Registration and Equipment Check:
                <br />
                <b>Apr. 11, 2024 (Thursday):</b> 10am -- 4pm
                <br />
                <b>Apr. 12, 2024 (Friday):</b> 8:30am -- 12:30pm
                <br />
                <br />
                <b>Location:</b> Outdoor Education and Training Center (OETC)
                <br />
                <span style={{ color: "red" }}>
                  (Please check the bottom-left corner of the range map below.)
                </span>
                <br />
                <br />
                <b>
                  EQUIPMENT CHECK handbook - Click{" "}
                  <a
                    target="_blank"
                    href="https://www.ipsc.org/wp-content/uploads/2020/06/IPSC-Handgun-Equipment-Check-Handbook-Jan-2019-edition.pdf"
                  >
                    HERE
                  </a>
                </b>
                <br />
                <b style={{ color: "red" }}>IMPORTANT:</b> Equipment Check
                Handbook will guide you to make sure your equipment comforms
                with IPSC Rules.
              </MKTypography>
            </Grid>
            <Grid item xs={12}>
              <Divider variant="middle" sx={{ background: "black" }} />
            </Grid>
            {/* 2 */}
            <Grid item xs={12} lg={3}>
              <MKTypography variant="h4" color="text" align="center">
                Match Plans
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={9}>
              <MKTypography variant="body1" color="text">
                <b>Stages & Round Counts</b>
              </MKTypography>
              <MKTypography variant="body2" color="text">
                18 stages + Chrono; Rounds: ~ 350
              </MKTypography>
            </Grid>
            <Grid item xs={12}>
              <Divider variant="middle" sx={{ background: "black" }} />
            </Grid>
            {/* 3 */}
            <Grid item xs={12} lg={3}>
              <MKTypography variant="h4" align="center">
                <span style={{ color: "#FF6347" }}>Match Stages</span>
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={9}>
              <MKTypography variant="body1" color="text" fontWeight="light">
                <a href={stagesPdf} target="_blank">
                  Download Stages PDF
                </a>
              </MKTypography>
            </Grid>
            <Grid item xs={12}>
              <Divider variant="middle" sx={{ background: "black" }} />
            </Grid>
            {/* 4 */}
            <Grid item xs={12} lg={3}>
              <MKTypography variant="h4" color="text" align="center">
                Match Ammunition
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={9}>
              <MKTypography variant="body1" color="text" fontWeight="light">
                Please ship ammo to the following address with this format:{" "}
                <br />
                <b>
                  [Your Name] (For 2024 IPSC Hangun Nationals)
                  <br />
                  C/O Jim Adame
                  <br />
                  Rio Salado Sportsman's Club,
                  <br />
                  3960 N Usery Pass Road, <br />
                  Mesa, AZ 85207
                </b>
              </MKTypography>
            </Grid>
            <Grid item xs={12}>
              <Divider variant="middle" sx={{ background: "black" }} />
            </Grid>
            {/* 5 */}
            <Grid item xs={12} lg={3}>
              <MKTypography variant="h4" color="text" align="center">
                Match Results
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={9}>
              <MKTypography variant="body1" color="text" fontWeight="light">
                PENDING
              </MKTypography>
            </Grid>
            <Grid item xs={12}>
              <Divider variant="middle" sx={{ background: "black" }} />
            </Grid>
            {/* 6 */}
            <Grid item xs={12} lg={3}>
              <MKTypography variant="h4" color="text" align="center">
                The Range
              </MKTypography>
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <img
                  src={logoRio}
                  style={{
                    maxWidth: "100%",
                  }}
                ></img>
              </div>
            </Grid>
            <Grid item xs={12} lg={9}>
              <MKTypography variant="body1" color="text">
                <b>Facility</b>
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Rio Salado Sportman's Club
              </MKTypography>
              <MKTypography variant="body1" color="text" mt={1}>
                <b>Address</b>
              </MKTypography>
              <MKTypography variant="body2" color="text">
                3960 N Usery Pass Rd, Mesa, AZ 85207 USA
              </MKTypography>
              <MKTypography variant="body1" color="text" mt={1}>
                <b>Direction</b>
              </MKTypography>
              <MKTypography variant="body2" color="text">
                <a
                  target="_blank"
                  href="https://maps.apple.com/?address=3960%20N%20Usery%20Pass%20Rd,%20Mesa,%20AZ%20%2085207,%20United%20States&auid=12950290871060907284&ll=33.488880,-111.623566&lsp=9902&q=Rio%20Salado%20Sportsman's%20Club"
                >
                  Apple Map
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/edv7UoPm3CWu6rqXA"
                >
                  Google Map
                </a>
              </MKTypography>
            </Grid>
            <Grid item xs={12}>
              <Divider variant="middle" sx={{ background: "black" }} />
            </Grid>
            {/* 6 */}
            <Grid item xs={12} lg={3}>
              <MKTypography variant="h4" color="text" align="center">
                Range Map
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={9}>
              <img src={rioRangeMap} style={{ maxWidth: "100%" }}></img>
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
