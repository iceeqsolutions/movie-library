import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

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
  /*   {
      id: 4,
      title: "TV Shows",
      link: "/tv-shows",
    }, */
  {
    id: 5,
    title: "New Releases",
    link: "/new-releases",
  },
  {
    id: 6,
    title: "Search",
    link: "/search-results",
  },
];

const HamburgerMenu = () => {
  const [open, setOpen] = useState(true); // set to false when component is ready

  const handleSideBarMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer open={open} onClose={handleSideBarMenu} anchor="left">
        <List>
          {navLinkName.map((link) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemIcon>
                <IconButton />
              </ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
