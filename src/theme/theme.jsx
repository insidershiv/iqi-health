import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
const breakpoints = createBreakpoints({})

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#02abd6",
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontWeight: 600,
      fontSize: "3rem",
    },
    subtitle1: {
      color: "#868686",
    },
    label: {
      fontSize: "0.6rem",
    },
  },
  overrides: {
    MuiFormLabel: {
      asterisk: {
        color: "#db3131",
        "&$error": {
          color: "#db3131",
        },
      },
    },
    MuiTypography: {
      h5: {

        fontSize: "1rem",
        [breakpoints.down("md")]: {
          fontSize: "1rem"
        },
        [breakpoints.down("sm")]: {
          fontSize: ".9rem"
        },


      },

      h6: {

        fontSize: ".8rem",
        [breakpoints.down("lg")]: {
          fontSize: ".8rem",
        },
        [breakpoints.down("md")]: {
          fontSize: ".7rem"
        },
        [breakpoints.down("sm")]: {
          fontSize: ".7rem"
        },


      },

      subtitle2: {

        [breakpoints.down("md")]: {
          fontSize: ".75rem"
        },
        [breakpoints.down("sm")]: {
          fontSize: ".8rem",


        }

      }
    }
    // Mui: {
    //   focused: {
    //     border: '1px solid red',
    //     color: 'red'
    //   }
    // },
    // MuiTextField: {
    //   root: {
    //     border: '1px solid red',
    //     '&:focus': {
    //       border: '1px solid red'
    //     }
    //   }
    // },
    // MuiInputLabel: {
    //   shrink: {
    //     color: 'red',
    //     border: '1px solid red'
    //   },
    //   formControl: {
    //     border: '1px solid red'
    //   }
    // },
    // MuiOutlinedInput: {

    //   input: {

    //     '&:focus': {
    //       border: '1px solid red'
    //     }
    //   }
    // },
    // MuiInputBase: {
    //   root: {
    //     color: 'red',
    //     border: '1px solid red'
    //   }
    // },
    // MuiFormControl: {
    //   root: {
    //     color: 'red',
    //     border: '1px solid red',
    //     fontSize: '3rem'
    //   }
    // },

    // MuiInputBase: {
    //   input: {
    //     border: '1px solid red',
    //     // '&:focus': {
    //     //   border: '1px solid red',
    //     //   color: 'red'

    //     // }
    //   }
    // },
    // MuiFocused: {
    //   fieldset: {
    //     borderColor: 'green'
    //   }
    // },

    // MuiFilledInput: {
    //   root: {
    //     backgroundColor: 'rgba(255,255,255,0.8)',
    //     '&:hover': {
    //       backgroundColor: 'rgba(255,255,255,1)'
    //     },
    //     '&.Mui-focused': {
    //       backgroundColor: 'rgba(255,255,255,1)'
    //     }
    //   }
    // }
    // MuiInputBase: {
    //   root: {
    //     '&:focused': {
    //       border: '1px solid red',
    //     }
    //   }
    // }
  },
});

theme = responsiveFontSizes(theme);

export default theme;
