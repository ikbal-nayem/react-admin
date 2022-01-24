import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles(theme => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 30,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: '#fff !important',
    boxShadow: '-1px 0px 8px 0px #8b8b8b !important'
  },
  drawerOpen: {
    width: drawerWidth,
    background: 'transparent',
    borderRight: '0 !important',
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })+"!important",
  },
  drawerClose: {
    background: 'transparent',
    borderRight: '0 !important',
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })+"!important",
    overflowX: "hidden",
    // width: theme.spacing(7) + 40,
    width: 70,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    minHeight: "50px !important"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  mobileBackButton: {
    marginTop: theme.spacing(0.5),
    marginLeft: 'auto',
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing(0.625),
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
