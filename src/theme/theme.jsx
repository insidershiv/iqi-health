import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

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
