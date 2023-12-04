import MKTypography from "components/MKTypography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logoRio from "assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Rio Salado Practical Division",
    image: logoRio,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/riopractical",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/riopractical/",
    },
  ],
  menus: [
    {
      name: "Resources",
      items: [
        { name: "IPSC", href: "https://www.ipsc.org/" },
        {
          name: "USPSA",
          href: "https://uspsa.org/",
        },
        {
          name: "Rio Salado Sportman's Club",
          href: "https://rsscaz.com/",
        },
      ],
    },
    {
      name: "Help & Support",
      items: [{ name: "Contact US", href: "mailto:rioipsc@gmail.com" }],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} - Developed by{" "}
      <MKTypography
        component="a"
        href="https://zehua-zeng.github.io/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Zehua (Fiona)
      </MKTypography>{" "}
      for{" "}
      <MKTypography
        component="a"
        href="https://riopracticalpistol.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Rio Salado Practical Division
      </MKTypography>
      .
    </MKTypography>
  ),
};
