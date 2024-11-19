import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import { useState } from "react";
import MenuItems from "./MenuItems";
import { NavLink } from "react-router-dom";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false); // set to false when component is ready

  const handleSideBarMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer open={open} onClose={handleSideBarMenu} anchor="left">
        <List
          sx={{
            color: "#222",
          }}
        >
          {MenuItems.map((link) => (
            <NavLink
              style={{ textDecoration: "none", color: "#222" }}
              key={link.id}
              to={link.link}
            >
              <ListItemButton onClick={() => setOpen(false)}>
                <ListItemIcon>
                  <IconButton>
                    <Icon
                      sx={{
                        color: "#222",
                      }}
                    >
                      {link.icon}
                    </Icon>
                  </IconButton>
                </ListItemIcon>

                <ListItemText>{link.title}</ListItemText>
              </ListItemButton>
            </NavLink>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={handleSideBarMenu}>
        <Icon
          sx={{
            color: "#fff",
            marginLeft: "auto",
            marginRight: "40px",
          }}
        >
          menu
        </Icon>
      </IconButton>
    </>
  );
};

export default HamburgerMenu;
