import { NavbarContainer } from "../styles/Styles.modules";
import { AppBar, Toolbar, Typography, Tab } from "@mui/material";
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
  {
    id: 5,
    title: "Search",
    link: "/search-results",
  },
];

interface NavbarProps {
  onSearchTermsChange: (terms: string) => void;
  handleClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onSearchTermsChange,
  handleClick,
}) => {
  return (
    <NavbarContainer>
      <AppBar className="appBar">
        <Toolbar className="toolBar">
          <Typography className="navLogo">Movie Library</Typography>
          <div className="navigation">
            <div className="navLinks">
              {navLinkName.map((link) => (
                <NavLink to={link.link} key={link.id}>
                  <Tab label={link.title} />
                </NavLink>
              ))}
            </div>
            <SearchBar
              searchTermsChange={onSearchTermsChange}
              handleClick={handleClick}
            />
          </div>
          <div className="navRightBkg"></div>
        </Toolbar>
      </AppBar>
    </NavbarContainer>
  );
};

export default Navbar;
