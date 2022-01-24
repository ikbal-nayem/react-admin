import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {
  AppBar,
  Avatar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import {
  Menu as MenuIcon,
  Person as AccountIcon,
  MenuOpen,
  VpnKey,
  AccountCircle
} from "@mui/icons-material";
import classNames from "classnames";
import useStyles from "./styles";
import { useLayoutState, useLayoutDispatch, toggleSidebar } from "context/LayoutContext";
import { useUserDispatch, signOut, useUserState } from "context/UserContext";
import user_type from 'util/user_type';
import { url } from 'util/Api';



function Header() {
  var classes = useStyles();
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  var userDispatch = useUserDispatch();
  var { userInfo } = useUserState();
  var [profileMenu, setProfileMenu] = useState(null);
  const navigate = useNavigate();
  const user_role = Object.keys(user_type).find(val=>user_type[val]===userInfo.role)

  const handleResetPassword = ()=>{
    setProfileMenu(null)
    navigate('/reset-password')
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {userInfo.role!==user_type.SYSADMIN &&
          <IconButton
            color="inherit"
            onClick={() => toggleSidebar(layoutDispatch)}
            className={classNames(classes.headerMenuButtonSandwich, classes.headerMenuButtonCollapse)}
          >
            {layoutState.isSidebarOpened ? (
              <MenuOpen classes={{root: classNames(classes.headerIcon, classes.headerIconCollapse)}}/>
            ) : (
              <MenuIcon classes={{root: classNames(classes.headerIcon, classes.headerIconCollapse)}}/>
            )}
          </IconButton>
        }

        {userInfo.role!==user_type.SYSADMIN &&
          <Avatar src={`${url}${userInfo.client && userInfo.client.logo}`} variant="rounded" alt="" />
        }
        <h4 className={classes.logotype}>
          {userInfo.role===user_type.SYSADMIN?"System Admin panel":userInfo.client?.name}
        </h4>
        <div className={classes.grow}/>

        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          onClick={e => setProfileMenu(e.currentTarget)}
        >
          <AccountCircle classes={{ root: classes.headerIcon }} />
        </IconButton>
        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <h4 variant="h4" weight="medium">{userInfo.name}</h4>
            <strong>{user_role}</strong>
            <span className={classes.profileMenuLink} color="primary">
              {userInfo.phone}
            </span>
          </div>
          <MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem)} disabled>
            <AccountIcon className={classes.profileMenuIcon} /> Profile
          </MenuItem>
          <MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem)} onClick={handleResetPassword}>
            <VpnKey className={classes.profileMenuIcon} /> Change password
          </MenuItem>
          <div className={`${classes.profileMenuUser} text-center`}>
            <strong
              className={`${classes.profileMenuLink} border border-secondary rounded`}
              color="primary"
              onClick={() => signOut(userDispatch, navigate)}
            >
              Sign Out
            </strong>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}


export default React.memo(Header)