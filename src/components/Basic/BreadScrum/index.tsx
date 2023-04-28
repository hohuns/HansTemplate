import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { uiActions } from "../../../store/uiSlice";

interface breadScrumType {
  breadScrumTile: string;
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

// Making title for breadscrum
export default function BasicBreadcrumbs({ breadScrumTile }: breadScrumType) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="primary.main">
          <HomeIcon
            sx={{ width: "1rem", height: "1rem", cursor: "pointer" }}
            onClick={() => {
              navigate("/home");
              dispatch(uiActions.updateDashboardIndex(0));
            }}
          />
        </Link>
        <Typography
          variant="body2"
          sx={{ marginBottom: "0.4rem", color: "primary.main" }}
        >
          {breadScrumTile}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
