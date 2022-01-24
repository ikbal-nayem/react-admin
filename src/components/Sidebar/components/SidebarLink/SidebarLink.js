import React, { useState } from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Inbox as InboxIcon, ArrowRightRounded, ArrowDropDownRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import classnames from "classnames";
import useStyles from "./styles";
import Dot from "../Dot";
import { useUserState } from "context/UserContext";
import user_type from "util/user_type";


const {ADMIN} = user_type

export default function SidebarLink(props) {
  const { link, icon, label, children, location, isSidebarOpened, show_to, nested, type} = props
  var { userInfo: {role} } = useUserState();
  var classes = useStyles();
  
  // local
  var [isOpen, setIsOpen] = useState(false);
  var isLinkActive = link && (location?.pathname === link || (children && location?.pathname.split('/')[1] === link.split('/')[1]));


  // role-wise view
  if(role!==ADMIN && !show_to?.includes(role)){
    return <></>
  }


  if (type === "title")
    return (
      <Typography
        className={classnames(classes.linkText, classes.sectionTitle, {
          [classes.linkTextHidden]: !isSidebarOpened,
        })}
      >
        {label}
      </Typography>
    );

  if (!children)
    return (
      <React.Fragment>
        <ListItem
          button
          component={link && Link}
          to={link}
          className={classes.link}
          classes={{
            root: classnames(classes.linkRoot, {
              [classes.linkActive]: isLinkActive,
              [classes.linkNested]: nested,
            }),
          }}
          disableRipple
          data-toggle="tooltip" data-placement="right" title={label}
        >
          <ListItemIcon
            className={classnames(classes.linkIcon, {
              [classes.linkIconActive]: isLinkActive,
            })}
          >
            {nested ? <Dot color={isLinkActive && "primary"} /> : icon}
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classnames(classes.linkText, {
                [classes.linkTextActive]: isLinkActive,
                [classes.linkTextHidden]: !isSidebarOpened,
              }),
            }}
            primary={label}
          />
        </ListItem>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <ListItem
        button
        component={link && Link}
        onClick={toggleCollapse}
        className={classes.link}
        to={link}
        disableRipple
        data-toggle="tooltip" data-placement="right" title={label}
      >
        <ListItemIcon
          className={classnames(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive,
          })}
        >
          {icon ? icon : <InboxIcon />}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened,
            }),
          }}
          primary={label}
        />
        {isOpen
          ? <ArrowDropDownRounded fontSize="small" />
          : <ArrowRightRounded fontSize="small" />
        }
      </ListItem>
      {children && (
        <Collapse
          in={isOpen && isSidebarOpened}
          timeout="auto"
          unmountOnExit
          className={classes.nestedList}
        >
          <List component="div" disablePadding>
            {children.map(childrenLink => (
              <SidebarLink
                key={childrenLink?.link}
                location={location}
                isSidebarOpened={isSidebarOpened}
                classes={classes}
                nested
                {...childrenLink}
              />
            ))}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  );

  // ###########################################################

  function toggleCollapse(e) {
    if (isSidebarOpened) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  }
}
