import { NavbarContainer } from "../styles/Styles.modules";
import { AppBar, Toolbar, Typography, Tab } from "@mui/material";
// import { link } from "fs";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const navLinkName = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Popular",
    link: "/popular-movies",
  },
  {
    id: 3,
    title: "Top Rated",
    link: "/top-rated-movies",
  },
  {
    id: 4,
    title: "TV Shows",
    link: "/tv-shows",
  },
];

const Navbar = () => {
  return (
    <NavbarContainer>
      <AppBar className="appBar">
        <Toolbar className="toolBar">
          <Typography className="navLogo">Movie Library</Typography>
          <div className="navigation">
            <div className="navLinks">
              {navLinkName.map((link) => (
                <NavLink to={link.link}>
                  <Tab label={link.title} key={link.id} />
                </NavLink>
              ))}
            </div>
            <SearchBar />
          </div>
          <div className="navRightBkg"></div>
        </Toolbar>
      </AppBar>
    </NavbarContainer>
  );
};

export default Navbar;
