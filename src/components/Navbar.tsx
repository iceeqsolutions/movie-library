import { NavbarContainer } from "../styles/Navbar.modules";
import {
  AppBar,
  Toolbar,
  // Typography,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <NavbarContainer>
      <AppBar className="appBar">
        <Toolbar className="toolBar">
          {/* <Typography className="navLogo">Movie Library</Typography> */}
          <img
            className="navLogo"
            src="src/assets/movieLibraryLogo.png"
            alt=""
          />
          <div className="navigation">
            {!isMobile ? (
              <>
                <div className="navLinks">
                  {MenuItems.map((link) => (
                    <NavLink to={link.link} key={link.id}>
                      <Tab label={link.title} />
                    </NavLink>
                  ))}
                </div>
                <div className="navRightBkg"></div>
              </>
            ) : (
              <>
                <div className="navRightBkg"></div>
                <HamburgerMenu />
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </NavbarContainer>
  );
};

export default Navbar;
