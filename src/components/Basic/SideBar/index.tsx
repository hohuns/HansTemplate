import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { uiActions } from "../../../store/uiSlice";
import { useCallback, useEffect, useState } from "react";
import { Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import DrawerComponent from "../Drawer";
import { useLocation } from "react-router-dom";

export default function SelectedListItem() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const reduxDashboardIndex: number = useAppSelector(
    (state) => state.ui.dashboardIndex
  );
  const [selectedIndex, setSelectedIndex] =
    useState<number>(reduxDashboardIndex);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const location = useLocation();

  // routing for sidebar to each coressponding components
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (index === 0) {
      navigate("/home");
      setSelectedIndex(index);
      dispatch(uiActions.updateDashboardIndex(index));
      localStorage.setItem("index", index.toString());
    } else if (index === 1) {
      navigate("/logo1");
      setSelectedIndex(index);
      dispatch(uiActions.updateDashboardIndex(index));
      localStorage.setItem("index", index.toString());
    } else if (index === 2) {
      navigate("/logo2");
      setSelectedIndex(index);
      dispatch(uiActions.updateDashboardIndex(index));
      localStorage.setItem("index", index.toString());
    } else if (index === 3) {
      navigate("/logo3");
      setSelectedIndex(index);
      dispatch(uiActions.updateDashboardIndex(index));
      localStorage.setItem("index", index.toString());
    }
  };

  const sidebarIndexReloader = useCallback(() => {
    if (location.pathname === "/home") {
      localStorage.setItem("index", "0");
      dispatch(uiActions.updateDashboardIndex(0));
      setSelectedIndex(0);
    } else if (location.pathname === "/logo1") {
      localStorage.setItem("index", "1");
      dispatch(uiActions.updateDashboardIndex(1));
      setSelectedIndex(1);
    } else if (location.pathname === "/logo2") {
      localStorage.setItem("index", "2");
      dispatch(uiActions.updateDashboardIndex(2));
      setSelectedIndex(2);
    } else if (location.pathname === "/logo3") {
      localStorage.setItem("index", "3");
      dispatch(uiActions.updateDashboardIndex(3));
      setSelectedIndex(3);
    }
  }, [dispatch, location.pathname]);

  // Tracking sidebar index whenever app is refreshed
  useEffect(() => {
    sidebarIndexReloader();
  }, [sidebarIndexReloader]);

  return (
    <>
      {!matches ? (
        <Box>
          <Paper
            elevation={8}
            sx={{
              width: "100%",
              height: "calc(100vh - 3.125rem)",
              maxWidth: 250,
              bgcolor: "background.paper",
              padding: "1.25rem",
            }}
          >
            <List
              component="nav"
              aria-label="second folders"
              sx={{ marginTop: "1.2rem" }}
            >
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <HomeIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Home"
                  primaryTypographyProps={{ fontSize: "0.9rem" }}
                />
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
                sx={{ marginTop: "0.625rem" }}
              >
                <ListItemIcon>
                  <LocationOnIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Logo1"
                  primaryTypographyProps={{ fontSize: "0.9rem" }}
                />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemIcon>
                  <NoteAltIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Logo2"
                  primaryTypographyProps={{ fontSize: "0.9rem" }}
                />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemIcon>
                  <PrecisionManufacturingIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Logo3"
                  primaryTypographyProps={{ fontSize: "0.9rem" }}
                />
              </ListItemButton>
            </List>
          </Paper>
        </Box>
      ) : (
        <Box
          sx={{
            height: "calc(100vh - 3.125rem)",
            Width: "0.625rem",
            bgcolor: "background.paper",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <ChevronRightIcon
            onClick={() => {
              setOpenDrawer(true);
            }}
          />
          <DrawerComponent
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
          />
        </Box>
      )}
    </>
  );
}
