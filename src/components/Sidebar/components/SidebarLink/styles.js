import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
  link: {
    textDecoration: "none",
    "&:focus": {
      backgroundColor: 'var(--primary-lite)',
      borderRadius: 20,
    },
    "&:hover": {
      backgroundColor: theme.palette.background.light,
      borderRadius: 20,
    },
  },
  linkActive: {
    backgroundColor: 'var(--primary-lite) !important',
    borderRadius: '20px !important',
  },
  linkNested: {
    "&:focus": {
      backgroundColor: 'var(--primary-lite)',
      borderRadius: 20,
    },
    "&:hover": {
      backgroundColor: theme.palette.background.light,
      borderRadius: 20,
    },
  },
  linkIcon: {
    minWidth: '0 !important',
    marginRight: 10
  },
  linkIconActive: {
    color: theme.palette.primary.light,
  },
  linkText: {
    padding: 0,
    color: theme.palette.text.secondary + "CC",
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 14,
  },
  linkTextActive: {
    color: theme.palette.text.primary,
    fontWeight: "bold"
  },
  linkTextHidden: {
    opacity: 0,
  },
  nestedList: {
    paddingLeft: 30,
  },
  sectionTitle: {
    marginLeft: theme.spacing(4.5),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
