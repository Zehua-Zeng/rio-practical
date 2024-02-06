import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import StarIcon from "@mui/icons-material/Star";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

import routes from "pages/matches/USIPSCNats2024/routes";
import footerRoutes from "pages/matches/USIPSCNats2024/footer.routes";
import bgImage from "assets/images/rio-bg.jpg";

export default function IPSCvsUSPSA() {
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
                IPSC vs. USPSA
              </MKTypography>
              <MKTypography variant="body1" fontWeight="light" color="text">
                In the US, IPSC rules aren't widely adopted. This page is for
                shooters who primarily compete in USPSA but also want to
                participate in IPSC. If you've had extensive experience with
                USPSA matches and consider yourself knowledgeable in the sport,
                we strongly urge you to take a moment to read through this page
                and familiarize yourself with IPSC rules. Additionally, it's
                crucial to verify that your equipment complies with IPSC
                regulations before the match. <br />
                <br />
                IPSC (International Practical Shooting Confederation) and USPSA
                (United States Practical Shooting Association) are both
                organizations that govern practical shooting competitions but
                differ in their scope and organization.
              </MKTypography>
            </Grid>
            <Grid item xs={12}>
              <Stack>
                <MKBox display="flex" mt={2}>
                  <MKBox
                    width="5rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <CorporateFareIcon />
                  </MKBox>
                  <MKTypography
                    variant="body1"
                    fontWeight="light"
                    color="text"
                    pl={2}
                  >
                    <b>International vs. National Focus:</b> IPSC is an
                    international body that governs practical shooting
                    competitions worldwide, while USPSA is specifically focused
                    on the United States. USPSA is a member organization under
                    the IPSC umbrella.
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" mt={2}>
                  <MKBox
                    width="5rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <AccountBalanceIcon />
                  </MKBox>
                  <MKTypography
                    variant="body1"
                    fontWeight="light"
                    color="text"
                    pl={2}
                  >
                    <b>Organization Structure:</b> IPSC sets global standards
                    and rules for practical shooting competitions, while USPSA
                    operates within the framework provided by IPSC but also has
                    its own specific rules and regulations tailored for its
                    competitions.
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" mt={2}>
                  <MKBox
                    width="9.5rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <SportsScoreIcon />
                  </MKBox>
                  <MKTypography
                    variant="body1"
                    fontWeight="light"
                    color="text"
                    pl={2}
                  >
                    <b>Competition Differences:</b> While both IPSC and USPSA
                    share similar roots and principles, there might be slight
                    variations in the rules, stage designs, and scoring systems
                    between the two. USPSA may have certain rules or divisions
                    that are unique to its competition.
                    <br />
                    <LabelImportantIcon />{" "}
                    <b>
                      <u>Example 1:</u>
                    </b>{" "}
                    In USPSA, divisions are named{" "}
                    <b>"Limited", "Single Stack", and "Carry Optics"</b>,
                    whereas IPSC designates them as{" "}
                    <b>"Standard", "Classic", and "Production Optics"</b>,
                    respectively.{" "}
                    <b>
                      Additionally, "PCC", which is one of the USPSA divisions,
                      is <u style={{ color: "red" }}>*not*</u> considered as a
                      division in IPSC, but rather a discipline.
                    </b>
                    <br />
                    <LabelImportantIcon />{" "}
                    <b>
                      <u>Example 2:</u>
                    </b>{" "}
                    In USPSA, you can put <b>magazine pouches</b> anywhere on
                    the belt, while IPSC ONLY allows you to do so in the Open
                    division. In other divisions, magazine pouches have to be{" "}
                    <b>at/behind your hip bones</b>.
                    <br />
                    <LabelImportantIcon />{" "}
                    <b>
                      <u>Example 3:</u>
                    </b>{" "}
                    In Open division, USPSA allows magazines with a maximum
                    length of 171.25mm, while IPSC is <b>170mm FLAT</b>.
                    <br />
                    <LabelImportantIcon />{" "}
                    <b>
                      <u>Example 4:</u>
                    </b>{" "}
                    IPSC Standard guns must fit in the IPSC BOX. However, many
                    USPSA Limited guns with 141.25mm magazines won't fit, and
                    most 5” barrel Limited guns need to use 126mm magazines to
                    meet the box requirements.
                    <br />
                    <LabelImportantIcon />{" "}
                    <b>
                      <u>Example 5:</u>
                    </b>{" "}
                    In USPSA, you can load your 140mm magazines to full capacity
                    in the <b>Carry Optics</b> division. In IPSC, the maximum
                    magazine capacity allowed for <b>Production Optics</b> is 15
                    rounds. 140mm magazines are legal, but they can only be
                    loaded to 15 rounds.
                    <br />
                    <LabelImportantIcon />{" "}
                    <b>
                      <u>Example 6:</u>
                    </b>{" "}
                    In <b>Production</b> and <b>Production Optics</b> divisions,
                    firearm modifications are restricted. Only minor detailing,
                    such as the removal of burrs and/or adjustments unavoidably
                    required in order to fit replacement OFM parts or
                    components, changing the original color and/or finish,
                    and/or adding stripes or other embellishments, is allowed.
                    <br />
                    <LabelImportantIcon />{" "}
                    <b>
                      <u>Example 7:</u>
                    </b>{" "}
                    In <b>Production</b> and <b>Production Optics</b> divisions,
                    the minimum trigger pull is 2.27kg (5lbs.) for first shot{" "}
                    <u style={{ color: "red" }}>*OR*</u> 1.36kg (3lbs.) for
                    every shot.
                    <br />
                    <LabelImportantIcon />{" "}
                    <b>
                      <u>Example 8:</u>
                    </b>{" "}
                    In USPSA, once the Range Officer gives the command "Make
                    ready", you can take a sight picture and dry fire. However,
                    in IPSC,{" "}
                    <b>neither a sight picture nor dry firing is allowed</b>{" "}
                    after the RO gives the command "Load and Make Ready".
                    Failure to comply with this rule results in a warning for
                    the first offense, recorded on the equipment check sheet.{" "}
                    <b>
                      Subsequent violations incur a procedural penalty for each
                      occurrence after the second time.
                    </b>
                    <br />
                    <StarIcon /> We mention only eight examples here; however,
                    there are{" "}
                    <b>
                      <u>*many*</u>
                    </b>{" "}
                    small rule differences between IPSC and USPSA, so it's
                    crucial to review the latest version of{" "}
                    <a href="https://www.ipsc.org/wp-content/uploads/2023/04/IPSC-Handgun-Competition-Rules-Apr-2023-Edition-Final-25-Apr-2023.pdf">
                      <b>IPSC rules</b>
                    </a>{" "}
                    before the match. In the worst-case scenario, your equipment
                    may not meet IPSC standards, or you could face penalties or
                    DQ from the match because of your "knowledge" with USPSA
                    rules.
                    <br />
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" mt={2}>
                  <MKBox
                    width="3.5rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <RememberMeIcon />
                  </MKBox>
                  <MKTypography
                    variant="body1"
                    fontWeight="light"
                    color="text"
                    pl={2}
                  >
                    <b>Membership and Participation:</b> Membership in USPSA is
                    often easier for those located in the United States, while
                    IPSC caters to a broader international membership base.
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" mt={2}>
                  <MKBox
                    width="6rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <EmojiEventsIcon />
                  </MKBox>
                  <MKTypography
                    variant="body1"
                    fontWeight="light"
                    color="text"
                    pl={2}
                  >
                    <b>Recognition and Championships:</b> IPSC hosts the IPSC
                    World Shoot, which is the highest-level international
                    practical shooting championship every three years,
                    attracting competitors from around the world. USPSA hosts
                    its own national championships and other major competitions
                    within the United States.
                  </MKTypography>
                </MKBox>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Despite these differences, both IPSC and USPSA promote safe and
                competitive practical shooting sports, emphasizing accuracy,
                speed, and precision while navigating stages that require
                diverse shooting skills.
              </MKTypography>
              <MKTypography
                variant="body1"
                fontWeight="light"
                color="text"
                mt={2}
              >
                <TipsAndUpdatesIcon /> <b>Other Resources:</b> You can find more
                information about the difference between IPSC and USPSA on{" "}
                <a href="https://s3.uspsa.io/media/IPSCRules2021.pdf">
                  <b>this article (from USPSA Magazine)</b>
                </a>
                . However, some of the information is old, such as the
                information about the Production Optics <b>"Light"</b> division,
                which was removed after the IPSC General Assembly during the
                2022 IPSC World Shoot.
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
