import { NavbarContainer } from "../styles/Styles.modules";
import { AppBar, Toolbar, Typography, Tab } from "@mui/material";

const navLinkName = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Popular",
  },
  {
    id: 3,
    title: "Top Rated",
  },
  {
    id: 4,
    title: "TV Shows",
  },
];

const Navbar = () => {
  return (
    <NavbarContainer>
      <AppBar className="appBar">
        <Toolbar className="toolBar">
          <Typography className="navLogo">Movie Library</Typography>
          <div className="navLinks">
            {navLinkName.map((link) => (
              <Tab label={link.title} key={link.id} />
            ))}
          </div>
          <div className="navRightBkg"></div>
        </Toolbar>
      </AppBar>
    </NavbarContainer>
  );
};

export default Navbar;
