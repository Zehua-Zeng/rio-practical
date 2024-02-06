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
                  PENDING
                  <br />
                  <b>NROI Range Officers</b>
                  <br />
                  PENDING
                  <br />
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={4}></Grid>
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
