import tinycolor from "tinycolor2";

const primary = "#2c1c4c";
const secondary = "#7b0c11";
const warning = "#FFC260";
const success = "#3CD4A0";
const danger = "#ff0f60";
const info = "#9013FE";

const lightenRate = 5.0;
const darkenRate = 15;

// eslint-disable-next-line
export default {
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(primary)
        .darken(darkenRate)
        .toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(secondary)
        .darken(darkenRate)
        .toHexString(),
      contrastText: "#FFFFFF",
    },
    warning: {
      main: warning,
      light: tinycolor(warning)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(warning)
        .darken(darkenRate)
        .toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(success)
        .darken(darkenRate)
        .toHexString(),
    },
    danger: {
      main: danger,
      light: tinycolor(danger)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(danger)
        .darken(darkenRate)
        .toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(info)
        .darken(darkenRate)
        .toHexString(),
    },
    text: {
      primary: "#4A4A4A",
      secondary: "#6E6E6E",
      hint: "#B9B9B9",
    },
    background: {
      default: "#eaeaeac7",
      light: "#26273a1a",
    },
  },
  customShadows: {
    widget:
      "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetDark:
      "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetWide:
      "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 'var(--border-radius)',
      },
      label: {
        textTransform: 'capitalize'
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: "#00000065",
      },
    },
    MuiMenu: {
      paper: {
        boxShadow:
          `0px 3px 11px 0px ${tinycolor(primary).lighten(lightenRate).toHexString()}, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A`,
      },
    },
    MuiSelect: {
      icon: {
        color: "#B9B9B9",
      },
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#26273a1a !important",
          "&:focus": {
            backgroundColor: "#26273a1a",
          },
        },
      },
      button: {
        "&:hover, &:focus": {
          backgroundColor: "#26273a1a",
        },
      },
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: "white",
      },
    },
    MuiTableRow: {
      head: {
        backgroundColor: '#F1F5F7'
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid #e0e0e0",
        fontFamily: "var(--font-family-ubuntu)"
      },
      head: {
        fontSize: "0.95rem",
      },
      body: {
        fontSize: "0.95rem",
      },
    },
    PrivateSwitchBase: {
      root: {
        marginLeft: 10
      }
    }
  },
};
