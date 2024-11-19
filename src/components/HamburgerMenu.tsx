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

const HamburgerMenu = () => {
  const [open, setOpen] = useState(true); // set to false when component is ready

  const handleSideBarMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer open={open} onClose={handleSideBarMenu} anchor="left">
        <List>
          {MenuItems.map((link) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemIcon>
                <IconButton>
                  <Icon>{link.icon}</Icon>
                </IconButton>
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
