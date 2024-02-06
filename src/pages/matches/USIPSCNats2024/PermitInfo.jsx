import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

import routes from "pages/matches/USIPSCNats2024/routes";
import footerRoutes from "pages/matches/USIPSCNats2024/footer.routes";
import bgImage from "assets/images/rio-bg.jpg";

export default function PermitInfo() {
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
                Permit Information
              </MKTypography>
              <MKTypography variant="body1" color="text" fontWeight="light">
                International shooters must apply for{" "}
                <b style={{ color: "red" }}>ATF Import Permit Form 6NIA</b> for
                temporary importation of firearms and ammunition. You can
                request an invitation letter under your name by contacting{" "}
                <a href="mailto:rioipscstats@gmail.com">
                  rioipscstats@gmail.com
                </a>
                .
              </MKTypography>
              <Divider variant="middle" sx={{ background: "black" }} />
              <MKTypography variant="h4" color="text" align="center" my={2}>
                ATF Import Permit Form 6NIA - Click{" "}
                <a
                  target="_blank"
                  href="https://www.atf.gov/firearms/docs/form/form-6nia-applicationpermit-temporary-importation-firearms-and-ammunition"
                >
                  HERE
                </a>
              </MKTypography>
              <MKTypography variant="body1" color="text" fontWeight="light">
                <FiberManualRecordIcon /> The application must be prepared in
                duplicate. <br />
                <FiberManualRecordIcon /> The signature required by question 17
                must be in ink on both copies. Other entries must be printed in
                ink or be typewritten. <br />
                <FiberManualRecordIcon /> All required items on the form must be
                completed or your application will not be approved. <br />
                <FiberManualRecordIcon /> ATF will process form 6NIA
                applications in{" "}
                <u style={{ color: "red" }}>approximately 6 to 8 weeks</u>.
                <br />
                <FiberManualRecordIcon /> ATF recommends applicants provide a
                fax number including country code on their applications when
                possible, to eliminate the possibility of approved permits being
                lost in the mail. <br />
                <FiberManualRecordIcon /> The application should be submitted
                to: "Bureau of Alcohol, Tobacco, Firearms and Explosives,
                Firearms and Explosives Imports Branch, 244 Needy Road,
                Martinsburg, WV 25405". It also may be faxed to 304-616-4551 or
                emailed to <a href="mailto:imports@atf.gov">
                  imports@atf.gov
                </a>. <br />
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
