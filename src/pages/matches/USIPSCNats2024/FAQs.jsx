import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

import routes from "pages/matches/USIPSCNats2024/routes";
import footerRoutes from "pages/matches/USIPSCNats2024/footer.routes";
import bgImage from "assets/images/rio-bg.jpg";

export default function FAQs() {
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
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MKTypography variant="h2" color="text" align="center" my={2}>
                FAQs
              </MKTypography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKTypography variant="h4" color="text" align="center" my={2}>
                Slots
              </MKTypography>
              {/* slot 1 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="slot1-content"
                  id="slot1-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    I am from outside of the US, but I would like to shoot the
                    match. Can you give me a slot?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    For shooters from outside of the US, you must be an active
                    IPSC member in your Region of residence to sign up the
                    match:{" "}
                    <a href="https://practiscore.com/rio-salado-2024-ipsc-nationals/register">
                      PractiScore.com
                    </a>
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              {/* slot 2 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="slot2-content"
                  id="slot2-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    The schedule for the Main Match is not convenient for me.
                    Can I shoot the Pre-Match?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    Yes. However, since the Pre-Match is reserved for Match
                    Officials, please contact the{" "}
                    <a href="mailto:rioipsc@gmail.com">Match Director</a> to
                    check if there is a slot available.
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              {/* slot 3 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="slot3-content"
                  id="slot3-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    Where can I obtain information about being a Match Sponsor?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    Please send an email to{" "}
                    <a href="mailto:rioipscsponsorship@gmail.com">
                      rioipscsponsorship@gmail.com
                    </a>
                    .
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              {/* slot 4 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="slot4-content"
                  id="slot4-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    Unfortunately I must withdraw from the match. Can I transfer
                    my slot to someone else?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    No, you cannot transfer your slot to someone else. If you
                    cannot attend the match, please withdraw from PractiScore.
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              {/* slot 5 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="slot5-content"
                  id="slot5-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    What is the match refund policy?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    Cancellation before Mar. 8, 2024: 100% refund - $25
                    (processing fee) <br />
                    Cancellation after Mar. 8, 2024: No refund
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              {/* slot 6 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="slot6-content"
                  id="slot6-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    There is an error with my name or other details on the
                    competitor list. Who should I contact?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    Before the match starts, you should be able to edit your
                    information on PractiScore.com. After the match starts,
                    please contact the person who is in charge of Registration &
                    Stats: Steve Gonzalez (
                    <a href="mailto:rioipscstats@gmail.com">
                      rioipscstats@gmail.com
                    </a>
                    ).
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              {/* slot 7 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="slot7-content"
                  id="slot7-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    I am a U.S Citizen who lives in Canada. Can I still shoot
                    the match as a USPSA member?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    No. In IPSC, residency is defined as the Region where the
                    individual is ordinarily domiciled for a minimum of 183 days
                    of the twelve months immediately preceding the month in
                    which the match begins. It is not about your Nationality.
                    However, there are exceptions per IPSC rules. <br />A
                    competitor may represent only the IPSC Region in which they
                    reside, except as follows: <br />
                    <u>6.5.2.1</u> &emsp; In respect of a competitor who resides
                    in one Region, but who wishes to represent the Region of
                    which they are a citizen, the Regional Directors for the
                    Region of residence and the Region of citizenship must agree
                    in writing prior to the commencement of the match. <br />
                    <u>6.5.2.2</u> &emsp; A competitor who falls under the
                    conditions of Rule 6.5.1.2 may represent the Region of which
                    they are a member subject to the prior written approval of
                    the Regional Director.
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              {/* slot 8 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="slot8-content"
                  id="slot8-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    I am not an IPSC member in my Region. However I am a USPSA
                    “Foreign Member”, so may I shoot the match as a USPSA
                    Foreign member?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    No. This event is an IPSC Level III competition, not a USPSA
                    match. To participate, you must hold an active membership in
                    the IPSC Region corresponding to your usual place of
                    residence. In simpler terms, you need to be a member of IPSC
                    in the region where you live.
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKTypography variant="h4" color="text" align="center" my={2}>
                Airport / Hotel
              </MKTypography>
              {/* travel 1 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="travel1-content"
                  id="travel1-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    At which airport(s) should I arrive in your area?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    Please plan to travel into the{" "}
                    <a target="_blank" href="https://www.skyharbor.com/">
                      Phoenix Sky Harbor International Airport
                    </a>{" "}
                    (~30 minutes away from the range).
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              {/* travel 2 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="travel2-content"
                  id="travel2-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    Air Travel
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    Most regional carriers will transport firearms
                    internationally. Domestic or budget carriers might not. When
                    booking air transportation, check with the airline to
                    determine their policies.
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              {/* travel 3 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="travel3-content"
                  id="travel3-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    What is the Match Hotel?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    Click <a href="#/matches/2024-us-ipsc-nats/hotels">here</a>{" "}
                    for the complete information about Match Hotels.
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              {/* travel 4 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="travel4-content"
                  id="travel4-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    What is the Range Officers Hotel?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    La Quinta Inn & Suites by Wyndham Mesa Superstition Springs.
                    Click <a href="#/matches/2024-us-ipsc-nats/hotels">here</a>{" "}
                    for the complete information about the Range Officers Hotel.
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              <MKTypography variant="h4" color="text" align="center" my={2}>
                Firearms and Ammunition
              </MKTypography>
              {/* ammo 1 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="ammo1-content"
                  id="ammo1-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    Am I permitted to keep my firearms and ammunition with me
                    while I am in your country? If not, what are the storage
                    arrangements?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    YES. You are allowed to keep firearm and ammunition with
                    you. You need to keep your firearm unloaded in lock bo​x
                    separately with your ammo. You will need to have a copy of
                    your temporary import permit with your firearm at all time.
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              {/* ammo 2 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="ammo2-content"
                  id="ammo2-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    Can I ship my ammunition to the range ahead of time?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    Information Coming Soon.
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              {/* ammo 3 */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="ammo3-content"
                  id="ammo3-header"
                >
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    What is the Match Ammunition?
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <MKTypography variant="body2" color="text" fontWeight="light">
                    Information Coming Soon.
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
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
