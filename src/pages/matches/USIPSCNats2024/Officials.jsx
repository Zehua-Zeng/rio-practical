import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

import routes from "pages/matches/USIPSCNats2024/routes";
import footerRoutes from "pages/matches/USIPSCNats2024/footer.routes";
import bgImage from "assets/images/rio-bg.jpg";

import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Sponsors() {
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
                Officials
              </MKTypography>
              <MKTypography
                variant="body1"
                align="center"
                my={2}
                style={{ color: "#DC143C" }}
              >
                We are actively looking for IROA Officials. If you are
                interested in serving our match, please contact{" "}
                <a href="mailto:rsppmatch@gmail.com">rsppmatch@gmail.com</a> for
                more details. Thank you so much!
              </MKTypography>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} lg={4}>
                <MKTypography
                  variant="body1"
                  fontWeight="light"
                  color="text"
                  align="right"
                >
                  <b>Match Director</b>
                  <br />
                  Jim Adame
                  <br />(
                  <a href="mailto:rioipsc@gmail.com">rioipsc@gmail.com</a>)
                  <br />
                  <b>Assistant Match Director</b>
                  <br />
                  Leighton Oosthuisen
                  <br />(<a href="mailto:area2@uspsa.org">area2@uspsa.org</a>)
                  <br />
                  <b>Sponsorship Coordinator</b>
                  <br />
                  Mick Bjelopavlic
                  <br />(
                  <a href="mailto:rioipscsponsorship@gmail.com">
                    rioipscsponsorship@gmail.com
                  </a>
                  )
                  <br />
                  <b>Registration & Stats</b>
                  <br />
                  Steve Gonzalez
                  <br />(
                  <a href="mailto:rioipscstats@gmail.com">
                    rioipscstats@gmail.com
                  </a>
                  )
                  <br />
                  <b>RO Staff Coordinator</b>
                  <br />
                  Steve Leach
                  <br />(<a href="mailto:SgLeach@me.com">SgLeach@me.com</a>)
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={4}>
                <MKTypography
                  variant="body1"
                  fontWeight="light"
                  color="text"
                  align="center"
                >
                  <b>Range Master</b>
                  <br />
                  Troy McManus
                  <br />
                  <b>Assistant Range Master</b>
                  <br />
                  Russell Fortney
                  <br />
                  <b>IROA Range Officers</b>
                  <br />
                  Fausto Gamallo
                  <span style={{ margin: "5px" }} class="fi fi-ph"></span>
                  <br />
                  Kevin Bracken
                  <span style={{ margin: "5px" }} class="fi fi-ca"></span>
                  <br />
                  Mike Carraher
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Philip Joey Racaza
                  <span style={{ margin: "5px" }} class="fi fi-ph"></span>
                  <br />
                  Reynaldo Ganaban
                  <span style={{ margin: "5px" }} class="fi fi-ph"></span>
                  <br />
                  Sasja Barentsen
                  <span style={{ margin: "5px" }} class="fi fi-nl"></span>
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={4}>
                <MKTypography
                  variant="body1"
                  fontWeight="light"
                  color="text"
                  align="left"
                >
                  <b>NROI Range Officers</b>
                  <br />
                  Alan Glickman
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Amanda Fisher
                  <span style={{ margin: "5px" }} class="fi fi-ca"></span>
                  <br />
                  Artely Sumergido
                  <span style={{ margin: "5px" }} class="fi fi-ph"></span>
                  <br />
                  Brant Hurlburt
                  <span style={{ margin: "5px" }} class="fi fi-ca"></span>
                  <br />
                  Brent Callen
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Brenton Swift
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Bryan Larson
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Danny Minter
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Dave Mowers
                  <span style={{ margin: "5px" }} class="fi fi-ca"></span>
                  <br />
                  Dennis Maravillas
                  <span style={{ margin: "5px" }} class="fi fi-ph"></span>
                  <br />
                  Dennis Perrin
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Devon Seitz
                  <span style={{ margin: "5px" }} class="fi fi-ca"></span>
                  <br />
                  Donald Moran
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Gary Smith
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Gordon Blank
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Gordon Kaiser
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Grant Schorbach
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Hanneke Vermeulen
                  <span style={{ margin: "5px" }} class="fi fi-nl"></span>
                  <br />
                  Ivan Runions
                  <span style={{ margin: "5px" }} class="fi fi-ca"></span>
                  <br />
                  John Catterall
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Justin Fuller
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Kelly Wisoley
                  <span style={{ margin: "5px" }} class="fi fi-ca"></span>
                  <br />
                  Laura Seitz
                  <span style={{ margin: "5px" }} class="fi fi-ca"></span>
                  <br />
                  Marc Richardson
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Marci Minter
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Mario Cajanding
                  <span style={{ margin: "5px" }} class="fi fi-ph"></span>
                  <br />
                  Matthew Fox
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Michael McCrite
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Mike Larson
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Phillip Gallegos
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Rich Poirier
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Richard Bhella
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Rob Pickering
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Ross Chu
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Steven John
                  <span style={{ margin: "5px" }} class="fi fi-ca"></span>
                  <br />
                  Toby Walsh
                  <span style={{ margin: "5px" }} class="fi fi-us"></span>
                  <br />
                  Warren Zieper
                  <span style={{ margin: "5px" }} class="fi fi-ca"></span>
                </MKTypography>
              </Grid>
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
