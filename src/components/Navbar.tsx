import { NavbarContainer } from "../styles/Styles.modules";
import { AppBar, Toolbar, Typography, Tab } from "@mui/material";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <NavbarContainer>
      <AppBar className="appBar">
        <Toolbar className="toolBar">
          <Typography className="navLogo">Movie Library</Typography>
          <div className="navigation">
            <div className="navLinks">
              {MenuItems.map((link) => (
                <NavLink to={link.link} key={link.id}>
                  <Tab label={link.title} />
                </NavLink>
              ))}
            </div>
          </div>
          <div className="navRightBkg"></div>
        </Toolbar>
        <HamburgerMenu />
      </AppBar>
    </NavbarContainer>
  );
};

export default Navbar;
