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
            mt: { xs: -60, lg: -90 },
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
              <MKTypography
                variant="body1"
                fontWeight="light"
                color="text"
                align="center"
              >
                Coming Soon. Stay Tuned!
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
