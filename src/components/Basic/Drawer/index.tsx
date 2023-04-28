import React from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import Divider from "@mui/material/Divider";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

interface drawerType {
  openDrawer: boolean;
  setOpenDrawer: (arg0: boolean) => void;
}
const DrawerComponent = ({ openDrawer, setOpenDrawer }: drawerType) => {
  let navigate = useNavigate();

  // routing for sidebar to each coressponding components
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (index === 0) {
      navigate("/home");
      setOpenDrawer(false);
    } else if (index === 1) {
      navigate("/logo1");
      setOpenDrawer(false);
    } else if (index === 2) {
      navigate("/logo2");
      setOpenDrawer(false);
    } else if (index === 3) {
      navigate("/logo3");
      setOpenDrawer(false);
    } else if (index === 4) {
      navigate("/logo3");
      setOpenDrawer(false);
    }
  };

  return (
    <Drawer anchor="left" open={openDrawer}>
      <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 3.125rem)",
          maxWidth: 250,
          bgcolor: "background.paper",
          marginTop: "1.2rem",
          borderRight: "1px solid black",
          padding: "1.2rem",
        }}
      >
        <List component="nav" aria-label="second folders">
          <ListItemButton onClick={(event) => handleListItemClick(event, 0)}>
            <ListItemIcon>
              <HomeIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            onClick={(event) => handleListItemClick(event, 1)}
            sx={{ marginTop: "0.3rem" }}
          >
            <ListItemIcon>
              <LocationOnIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary="logo1" />
          </ListItemButton>
          <ListItemButton onClick={(event) => handleListItemClick(event, 2)}>
            <ListItemIcon>
              <NoteAltIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary="logo2" />
          </ListItemButton>
          <ListItemButton onClick={(event) => handleListItemClick(event, 3)}>
            <ListItemIcon>
              <PrecisionManufacturingIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary="logo3" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
