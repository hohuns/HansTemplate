import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/homepage/index";
import Location from "./pages/logo1/index";
import Order from "./pages/logo2/index";
import AGVPool from "./pages/logo3/index";
import LoginGate from "./components/Basic/LoginGate/index";
import { useAppSelector, useAppDispatch } from "../src/store/hooks";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import themeLight from "./assets/theme-light";
import themeDark from "./assets/theme-dark";
import { uiActions } from "../src/store/uiSlice";
import { useEffect } from "react";

function App() {
  const reduxTheme: string = useAppSelector((state) => state.ui.theme);
  const localStorageTheme = localStorage.getItem("theme");
  const dispatch = useAppDispatch();

  //Update theme whenever page is refreshed
  useEffect(() => {
    const thmeReloader = () => {
      console.log(localStorageTheme);
      dispatch(uiActions.updateTheme(localStorageTheme as string));
    };
    thmeReloader();
  }, [dispatch, localStorageTheme]);

  return (
    <>
      <ThemeProvider
        theme={reduxTheme === "themeLight" ? themeLight : themeDark}
      >
        <CssBaseline />
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/logo1" element={<Location></Location>} />
          <Route path="/logo2" element={<Order></Order>} />
          <Route path="/logo3" element={<AGVPool></AGVPool>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
