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
import ifgTanfoglioLogo from "assets/images/sponsors/ifg-tanfoglio.png";
import iwiLogo from "assets/images/sponsors/iwi.jpeg";
import dillonLogo from "assets/images/sponsors/dillon.png";
import ergoGripLogo from "assets/images/sponsors/ergo-grip.png";
import limcatLogo from "assets/images/sponsors/limcat.png";
import rollsizerLogo from "assets/images/sponsors/rollsizer.png";
import timneyTriggersLogo from "assets/images/sponsors/timney-triggers.png";
import voodooTacticalLogo from "assets/images/sponsors/voodoo-tactical.png";
import techwearLogo from "assets/images/sponsors/techwear.png";
import holosunLogo from "assets/images/sponsors/holosun.png";
import vortexOpticsLogo from "assets/images/sponsors/vortex-optics.png";
import cmoreLogo from "assets/images/sponsors/cmore.png";
import redhillTacticalLogo from "assets/images/sponsors/redhill-tactical.png";
import czcLogo from "assets/images/sponsors/czc.png";

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
                Sponsors
              </MKTypography>
              <MKTypography variant="h1" align="center" my={2}>
                <span style={{ color: "#DC143C" }}>Match Sponsor</span>
              </MKTypography>
              <div>
                <a target="_blank" href="https://staccato2011.com/">
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
                <span style={{ color: "#CD5C5C" }}>Premier Sponsor</span>
              </MKTypography>
              <div>
                <a target="_blank" href="https://www.laugoarms.com/">
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
                  <a target="_blank" href="https://us.glock.com/en">
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
                  <a
                    target="_blank"
                    href="https://www.italianfirearmsgroup.com/"
                  >
                    <img
                      src={ifgTanfoglioLogo}
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
                  <a target="_blank" href="https://iwi.us/">
                    <img
                      src={iwiLogo}
                      style={{
                        margin: "1rem auto",
                        display: "block",
                        maxWidth: "95%",
                        maxHeight: "125px",
                      }}
                    ></img>
                  </a>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div>
                  <a target="_blank" href="https://czcustom.com/">
                    <img
                      src={czcLogo}
                      style={{
                        margin: "1rem auto",
                        display: "block",
                        maxWidth: "95%",
                        maxHeight: "125px",
                      }}
                    ></img>
                  </a>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div>
                  <a target="_blank" href="https://holosun.com/">
                    <img
                      src={holosunLogo}
                      style={{
                        margin: "1rem auto",
                        display: "block",
                        maxWidth: "95%",
                        maxHeight: "125px",
                      }}
                    ></img>
                  </a>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div>
                  <a target="_blank" href="https://vortexoptics.com/">
                    <img
                      src={vortexOpticsLogo}
                      style={{
                        margin: "1rem auto",
                        display: "block",
                        maxWidth: "95%",
                        maxHeight: "125px",
                      }}
                    ></img>
                  </a>
                </div>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <MKTypography variant="h3" align="center" my={2}>
                  <span style={{ color: "#3CB371" }}>Stage Sponsors</span>
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={4}>
                <div>
                  <a target="_blank" href="https://www.limcat.com/">
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
                  <a target="_blank" href="https://www.dillonprecision.com/">
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
                  <a target="_blank" href="https://www.redhilltactical.com/">
                    <img
                      src={redhillTacticalLogo}
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
                  <a target="_blank" href="https://www.rollsizer.com/">
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
                  <a target="_blank" href="https://timneytriggers.com/">
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
                  <a target="_blank" href="https://voodootactical.com/">
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
              <Grid item xs={12} md={4}>
                <div>
                  <a target="_blank" href="https://techwearusa.com/">
                    <img
                      src={techwearLogo}
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
                  <a target="_blank" href="https://www.ergogrips.net/">
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
                <a target="_blank" href="https://cmore.com/">
                  <img
                    src={cmoreLogo}
                    style={{
                      margin: "1rem auto",
                      display: "block",
                      maxWidth: "95%",
                      maxHeight: "200px",
                    }}
                  ></img>
                </a>
              </Grid>
            </Grid>
            {/* <Grid container item xs={12} md={6}>
              <Grid item xs={12}>
                <MKTypography variant="h4" align="center" my={2}>
                  <span style={{ color: "#DAA520" }}>Gold Sponsor</span>
                </MKTypography>
              </Grid>
              <Grid item xs={12}>
                <a target="_blank" href="https://cmore.com/">
                  <img
                    src={cmoreLogo}
                    style={{
                      margin: "1rem auto",
                      display: "block",
                      maxHeight: "75px",
                    }}
                  ></img>
                </a>
              </Grid>
            </Grid> */}
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <MKTypography variant="h4" color="text" align="center" my={2}>
                  RO Lunch Sponsor
                </MKTypography>
              </Grid>
              <Grid item xs={12}>
                <a target="_blank" href="https://sauerlandcoaching.com/">
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
