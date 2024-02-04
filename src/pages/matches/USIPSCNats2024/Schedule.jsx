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
import IPSCRioLogo from "assets/images/ipsc/IPSC-Rio-Match-Logo.png";

export default function Schedule() {
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
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MKTypography variant="h2" color="text" align="center" my={2}>
                Schedule
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={5}>
              <img src={IPSCRioLogo} style={{ maxWidth: "100%" }} />
            </Grid>
            <Grid item xs={12} lg={7}>
              <MKTypography
                variant="body1"
                color="text"
                align="center"
                my={2}
                fontWeight="light"
              >
                Match Registration Opens: <b>Dec. 3, 2023</b>
                <br />
                Squadding Opens: <b>Dec. 10, 2023</b>
                <br />
              </MKTypography>
              <Divider variant="middle" sx={{ background: "black" }} />
              <MKTypography
                variant="body1"
                color="text"
                align="center"
                my={2}
                fontWeight="light"
              >
                Pre-Match Registration and Equipment Check: <b>Apr. 9, 2024</b>
                <br />
                Main Match Registration and Equipment Check:{" "}
                <b>Apr. 11, 2024</b>
                <br />
              </MKTypography>
              <Divider variant="middle" sx={{ background: "black" }} />
              <MKTypography
                variant="body1"
                color="text"
                align="center"
                my={2}
                fontWeight="light"
              >
                Pre-Match: <b>Apr. 10-11, 2024</b>
                <br />
                Main Match: <b>Apr. 12-14, 2024</b>
                <br />
                Awards Ceremory: <b>Apr. 14, 2024</b>
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
