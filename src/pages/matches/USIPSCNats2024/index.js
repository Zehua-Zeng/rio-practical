import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import routes from "pages/matches/USIPSCNats2024/routes";
import footerRoutes from "pages/matches/USIPSCNats2024/footer.routes";
import bgImage from "assets/images/rio-bg.jpg";
import IPSCRioLogo from "assets/images/IPSC-Rio-Match-Logo.png";
import IPSCRange from "assets/images/IPSC-Range-150x150.png";
import IPSCSquads from "assets/images/IPSC-Squads-150x150.png";
import IPSCSchedule from "assets/images/IPSC-Schedule-150x150.png";
import IPSCFAQs from "assets/images/IPSC-FAQs-150x150.png";
import IPSCTourism from "assets/images/IPSC-Tourism-150x150.png";

export default function USIPSCNats2024() {
  return (
    <>
      <DefaultNavbar brand="2024 US IPSC Nationals" routes={routes} sticky />
      {/* 1 */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              2024 US IPSC Nationals <br />
              Mesa, Arizona
            </MKTypography>
            <MKTypography
              variant="h3"
              color="white"
              opacity={0.8}
              mt={1}
              mb={3}
            >
              April 10-14, 2024
            </MKTypography>

            <MKButton
              color="white"
              size="large"
              href="#/matches/2024-us-ipsc-nats/general-info"
            >
              MATCH INFORMATION
              <ArrowRightIcon sx={{ ml: 1 }} />
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      {/* 2 */}
      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <img src={IPSCRioLogo} style={{ maxWidth: "100%" }} />
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                2024 US IPSC Nationals is around the corner!
              </MKTypography>
              <MKTypography
                variant="body1"
                fontWeight="regular"
                color="secondary"
                mb={1}
                pr={2}
              >
                <b>
                  "We're excited to host the 2024 IPSC Nationals at Rio Salado
                  Sportsman's Club and looking forward to seeing everyone here!"
                </b>
              </MKTypography>
              <MKTypography
                variant="body2"
                fontWeight="regular"
                color="secondary"
                mb={1}
                pr={2}
              >
                Jim Adame, Match Director
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={8} sx={{ ml: "auto" }}>
            {/* Range location */}
            <Grid container spacing={3}>
              <Grid container item xs={12} md={6}>
                <Grid item xs={3}>
                  <img src={IPSCRange} style={{ maxWidth: "100%" }} />
                </Grid>
                <Grid item xs={9}>
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    Range Location
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant={"body2"}
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    The match will be held at Rio Salado Sportsman's Club in the
                    city Mesa of Arizona State. Address:{" "}
                    <a
                      target="_blank"
                      href="https://maps.app.goo.gl/edv7UoPm3CWu6rqXA"
                    >
                      3960 N Usery Pass Rd, Mesa, AZ 85207
                    </a>
                    .
                  </MKTypography>
                </Grid>
              </Grid>
              {/* Important Dates */}
              <Grid container item xs={12} md={6}>
                <Grid item xs={3}>
                  <img src={IPSCSchedule} style={{ maxWidth: "100%" }} />
                </Grid>
                <Grid item xs={9}>
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    Important Dates
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant={"body2"}
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    Dec 3, 2023: Match Registration <br />
                    Dec 10, 2023: Squadding <br />
                    Apr 10, 2024: Pre-Match Day 1 <br />
                    Apr 12, 2024: Main-Match Day 1 <br />
                    Apr 14, 2024: Closing Ceremony
                  </MKTypography>
                </Grid>
              </Grid>
              {/* Registration and Squadding */}
              <Grid container item xs={12} md={6}>
                <Grid item xs={3}>
                  <img src={IPSCSquads} style={{ maxWidth: "100%" }} />
                </Grid>
                <Grid item xs={9}>
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    Registration & Squadding
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant={"body2"}
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    For US shooters, please check{" "}
                    <a
                      target="_blank"
                      href="https://practiscore.com/rio-salado-2024-ipsc-nationals/register"
                    >
                      PractiScore.com
                    </a>{" "}
                    for registration and squadding. For shooters from outside of
                    the US, please contact your Regional Director{" "}
                    <a target="_blank" href="https://www.ipsc.org/regions">
                      Here
                    </a>{" "}
                    and confirm your member status before registration.
                  </MKTypography>
                </Grid>
              </Grid>
              {/* FAQs */}
              <Grid container item xs={12} md={6}>
                <Grid item xs={3}>
                  <img src={IPSCFAQs} style={{ maxWidth: "100%" }} />
                </Grid>
                <Grid item xs={9}>
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    FAQs
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant={"body2"}
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    Before contacting Match Organizers, please check{" "}
                    <a href="#/matches/2024-us-ipsc-nats/faqs">this page</a> for
                    more info.
                  </MKTypography>
                </Grid>
              </Grid>
              {/* Difference between USPSA & IPSC */}
              <Grid container item xs={12} md={6}>
                <Grid item xs={3}>
                  <img src={IPSCFAQs} style={{ maxWidth: "100%" }} />
                </Grid>
                <Grid item xs={9}>
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    IPSC vs USPSA
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant={"body2"}
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    Please check{" "}
                    <a href="#/matches/2024-us-ipsc-nats/ipsc-vs-uspsa">
                      this page
                    </a>{" "}
                    for some useful knowledge about the difference between IPSC
                    and USPSA rules.
                  </MKTypography>
                </Grid>
              </Grid>
              {/*  AZ Tourism */}
              <Grid container item xs={12} md={6}>
                <Grid item xs={3}>
                  <img src={IPSCTourism} style={{ maxWidth: "100%" }} />
                </Grid>
                <Grid item xs={9}>
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    Tourism at Arizona
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant={"body2"}
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    Arizona is here to welcome all visitors with many
                    attractions, great food and wonderful people!
                  </MKTypography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* 3 */}
      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography
            variant="h1"
            color="black"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            Match Sponor
          </MKTypography>
          <MKTypography
            variant="h3"
            color="grey"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            PENDING
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                FAQs
              </MKTypography>
              <MKTypography
                variant="body1"
                fontWeight="regular"
                color="secondary"
                mb={1}
                pr={2}
              >
                <b>
                  IPSC Level III Matches are large Regional IPSC competition and
                  competitors must be active IPSC members of their respective
                  Regions, and in good standing.
                </b>
              </MKTypography>
              <MKTypography
                variant="body2"
                fontWeight="regular"
                color="secondary"
                mb={1}
                pr={2}
              >
                If you wish to attend and compete on this match, you can contact
                your Regional Director with the option below.
              </MKTypography>
              <MKButton
                color="dark"
                size="large"
                href="https://www.ipsc.org/regions"
              >
                FIND YOUR IPSC REGION
                <ArrowRightIcon sx={{ ml: 1 }} />
              </MKButton>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={8} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              {/* FAQ1 */}
              <Grid container item xs={12} md={6}>
                <Grid item xs={3}>
                  <MKTypography
                    display="block"
                    variant="h1"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                    ml={3.5}
                  >
                    <ContactSupportIcon />
                  </MKTypography>
                </Grid>
                <Grid item xs={9}>
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    I am from outside of the US, but I would like to shoot the
                    match. Can you give me a slot?
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant={"body2"}
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    For shooters from outside of the US, you must be an active
                    IPSC member in your Region of residence to sign up the
                    match:{" "}
                    <a href="https://practiscore.com/rio-salado-2024-ipsc-nationals/register">
                      PractiScore.com
                    </a>
                    .
                  </MKTypography>
                </Grid>
              </Grid>
              {/* FAQ 2 */}
              <Grid container item xs={12} md={6}>
                <Grid item xs={3}>
                  <MKTypography
                    display="block"
                    variant="h1"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                    ml={3.5}
                  >
                    <ContactSupportIcon />
                  </MKTypography>
                </Grid>
                <Grid item xs={9}>
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    The schedule for the Main Match is not convenient for me.
                    Can I shoot the Pre-Match?
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant={"body2"}
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    Yes. However, since the Pre-Match is reserved for Match
                    Officials, please contact the{" "}
                    <a href="mailto:rioipsc@gmail.com">Match Director</a> to
                    check if there is a slot available.
                  </MKTypography>
                </Grid>
              </Grid>
              {/* FAQ 3 */}
              <Grid container item xs={12} md={6}>
                <Grid item xs={3}>
                  <MKTypography
                    display="block"
                    variant="h1"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                    ml={3.5}
                  >
                    <ContactSupportIcon />
                  </MKTypography>
                </Grid>
                <Grid item xs={9}>
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    Unfortunately I must withdraw from the match. Can I transfer
                    my slot to someone else?
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant={"body2"}
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    No, you cannot transfer your slot to someone else. If you
                    cannot attend the match, please withdraw from PractiScore.
                  </MKTypography>
                </Grid>
              </Grid>
              {/* FAQ 4 */}
              <Grid container item xs={12} md={6}>
                <Grid item xs={3}>
                  <MKTypography
                    display="block"
                    variant="h1"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                    ml={3.5}
                  >
                    <ContactSupportIcon />
                  </MKTypography>
                </Grid>
                <Grid item xs={9}>
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    Where can I obtain information about being a Match Sponsor?
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant={"body2"}
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    Please send an email to{" "}
                    <a href="mailto:rioipscsponsorship@gmail.com">
                      rioipscsponsorship@gmail.com
                    </a>
                    .
                  </MKTypography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
