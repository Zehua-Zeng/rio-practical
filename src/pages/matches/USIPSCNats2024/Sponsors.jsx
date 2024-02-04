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

import sauerlandCoachingLogo from "assets/images/sponsors/sauerland-coaching.png";
import staccatoLogo from "assets/images/sponsors/staccato.png";
import laugoArmsLogo from "assets/images/sponsors/laugo-arms.png";
import glockLogo from "assets/images/sponsors/glock.png";
import tanfoglioLogo from "assets/images/sponsors/tanfoglio.png";
import iwiLogo from "assets/images/sponsors/iwi.jpeg";
import dillonLogo from "assets/images/sponsors/dillon.png";
import ergoGripLogo from "assets/images/sponsors/ergoGrip.png";
import limcatLogo from "assets/images/sponsors/limcat.png";
import rollsizerLogo from "assets/images/sponsors/rollsizer.png";
import timneyTriggersLogo from "assets/images/sponsors/timneyTriggers.png";
import voodooTacticalLogo from "assets/images/sponsors/voodooTactical.png";

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
                Sponsors
              </MKTypography>
              <MKTypography variant="h1" align="center" my={2}>
                <span style={{ color: "#DC143C" }}>Match Sponsor</span>
              </MKTypography>
              <div>
                <a href="https://staccato2011.com/">
                  <img
                    src={staccatoLogo}
                    style={{
                      margin: "2rem auto",
                      display: "block",
                      maxWidth: "95%",
                    }}
                  ></img>
                </a>
              </div>
              <MKTypography variant="h2" align="center" my={2}>
                <span style={{ color: "#DAA520" }}>Premier Sponsor</span>
              </MKTypography>
              <div>
                <a href="https://www.laugoarms.com/">
                  <img
                    src={laugoArmsLogo}
                    style={{
                      margin: "2rem auto",
                      display: "block",
                      maxWidth: "95%",
                      maxHeight: "275px",
                    }}
                  ></img>
                </a>
              </div>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <MKTypography variant="h3" align="center" my={2}>
                  <span style={{ color: "#4169E1" }}>Division Sponsors</span>
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={6}>
                <div>
                  <a href="https://us.glock.com/en">
                    <img
                      src={glockLogo}
                      style={{
                        margin: "1rem auto",
                        display: "block",
                        maxWidth: "95%",
                        maxHeight: "250px",
                      }}
                    ></img>
                  </a>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div>
                  <a href="https://www.italianfirearmsgroup.com/tanfoglio">
                    <img
                      src={tanfoglioLogo}
                      style={{
                        margin: "1rem auto",
                        display: "block",
                        maxWidth: "95%",
                        maxHeight: "250px",
                      }}
                    ></img>
                  </a>
                </div>
                <br />
                <div>
                  <a href="https://iwi.us/">
                    <img
                      src={iwiLogo}
                      style={{
                        margin: "1rem auto",
                        display: "block",
                        maxWidth: "95%",
                        maxHeight: "250px",
                      }}
                    ></img>
                  </a>
                </div>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <MKTypography variant="h3" align="center" my={2}>
                    <span style={{ color: "#3CB371" }}>Stage Sponsors</span>
                  </MKTypography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div>
                    <a href="https://www.limcat.com/">
                      <img
                        src={limcatLogo}
                        style={{
                          margin: "1rem auto",
                          display: "block",
                          maxWidth: "95%",
                          maxHeight: "200px",
                        }}
                      ></img>
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div>
                    <a href="https://www.dillonprecision.com/">
                      <img
                        src={dillonLogo}
                        style={{
                          margin: "1rem auto",
                          display: "block",
                          maxWidth: "95%",
                          maxHeight: "200px",
                        }}
                      ></img>
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div>
                    <a href="https://www.ergogrips.net/">
                      <img
                        src={ergoGripLogo}
                        style={{
                          margin: "1rem auto",
                          display: "block",
                          maxWidth: "95%",
                          maxHeight: "200px",
                        }}
                      ></img>
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div>
                    <a href="https://www.rollsizer.com/">
                      <img
                        src={rollsizerLogo}
                        style={{
                          margin: "1rem auto",
                          display: "block",
                          maxWidth: "95%",
                          maxHeight: "200px",
                        }}
                      ></img>
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div>
                    <a href="https://timneytriggers.com/">
                      <img
                        src={timneyTriggersLogo}
                        style={{
                          margin: "1rem auto",
                          display: "block",
                          maxWidth: "95%",
                          maxHeight: "200px",
                        }}
                      ></img>
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div>
                    <a href="https://voodootactical.com/">
                      <img
                        src={voodooTacticalLogo}
                        style={{
                          margin: "1rem auto",
                          display: "block",
                          maxWidth: "95%",
                          maxHeight: "200px",
                        }}
                      ></img>
                    </a>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <MKTypography variant="h4" color="text" align="center" my={2}>
                  RO Lunch Sponsor
                </MKTypography>
              </Grid>
              <Grid item xs={12}>
                <a href="https://sauerlandcoaching.com/">
                  <img
                    src={sauerlandCoachingLogo}
                    style={{
                      margin: "1rem auto",
                      display: "block",
                      maxHeight: "75px",
                    }}
                  ></img>
                </a>
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
