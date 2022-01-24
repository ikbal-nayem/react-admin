import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@mui/material";
import {
  AutoAwesomeMosaic,
  ArrowBack as ArrowBackIcon,
  Settings,
  HomeRepairService
} from "@mui/icons-material";
import { useTheme } from "@mui/material";
import classNames from "classnames";
import useStyles from "./styles";
import user_type from "util/user_type";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {useLayoutState, useLayoutDispatch, toggleSidebar} from "../../context/LayoutContext";
import { useLocation } from "react-router-dom";


const {HOUSEKEEPER} = user_type

const structure = [
  { label: "Dashboard", link: "/dashboard", icon: <AutoAwesomeMosaic />},
  { label: "House Keeping", link: "/house-keeping", icon: <HomeRepairService />, show_to: [HOUSEKEEPER]},
  { label: "Configuration", link: "/configuration", icon: <Settings />,
    children: [
      { label: "User", link: "/configuration/user"},
    ]
  }
];




const Sidebar = ()=>{
  var classes = useStyles();
  var theme = useTheme();
  const location = useLocation()

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);


  const handleWindowWidthChange = React.useCallback(()=>{
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }, [isPermanent, theme])

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  }, [handleWindowWidthChange]);
  

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, 'animate__animated animate__fadeInLeft', {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List>
        {structure.map((link, i) => (
          <SidebarLink
            key={i}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );
}

export default React.memo(Sidebar);
