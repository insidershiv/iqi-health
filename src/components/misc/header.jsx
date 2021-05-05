import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from "react";
import Account from "../../../src/assets/img/account.svg";
import Filter from "../../../src/assets/img/filter.svg";
import Logo from "../../../src/assets/img/logo.png";
import Menu from "../../../src/assets/img/menu.svg";
import Notify from "../../../src/assets/img/notify.png";
import Search from "../../../src/assets/img/search.svg";
import Location from "../../../src/assets/img/location.svg";
import Toggle from "../../../src/assets/img/toggle.svg";

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    height: "20%",
    width: "20%",
  },
  imgContainer: {
    height: "32%",
    width: "32%",
  },
  logoContainer: {
    height: "50%",
    width: "50%",
  },

  filterContainer: {
    height: "10%",
    width: "10%",
  },

  locationIconStyle: {
    height: "8%",
    width: "8%",
  },

  searchIconStyle: {
    height: "5%",
    width: "5%",
  },

  inputContainer: {
    marginLeft: "0.625rem",
    marginRight: "0.938rem",
    fontSize: "2.8vw",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      style={{
        padding: "1.875rem 0.625rem 0.625rem 0.625rem",
        backgroundColor: "white",
        boxShadow: "1px 5px 37px -17px rgba(0,0,0,0.38)",
      }}
    >
      {/* top section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="95%"
        style={{ backgroundColor: "white" }}
      >
        <Box display="flex" flex="1">
          <img className={classes.menuContainer} src={Menu} alt="Menu drawer logo" />
        </Box>
        <Box
          display="flex"
          flex="2"
          justifyContent="center"
          alignItems="center"
        >
          <img className={classes.logoContainer} src={Logo} alt="Iqi logo" />
        </Box>
        <Box
          display="flex"
          flex="1"
          justifyContent="flex-end"
          alignItems="center"
        >
          <img
            className={classes.imgContainer}
            src={Account}
            style={{ marginRight: "0.5rem" }}
            alt="user logo"
          />
          <img className={[classes.imgContainer]} src={Notify} alt="notifications logo" />
        </Box>
      </Box>
      {/* location section */}
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        width="96%"
        style={{ marginTop: "1.25rem", marginBottom: "1.875rem" }}
      >
        <img className={classes.locationIconStyle} src={Location} alt="location logo" />
        <p className={classes.inputContainer} style={{ color: "#000" }}>
          29 DDA Flats, Vivek Vihar, Delhi 110032
        </p>
        <img style={{ marginLeft: "-0.625rem" }} src={Toggle} alt="toggler logo" />
      </Box>
      {/* search section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="93%"
        borderRadius="0.375rem"
        style={{
          backgroundColor: "#cdcdcd",
          padding: "0.5rem",
          marginBottom: "1.25rem",

        }}
      >
        <img
          className={classes.searchIconStyle}
          style={{ marginLeft: "0.313rem" }}
          src={Search}
          alt="Search Icon"
        />
        <InputBase
          className={classes.inputContainer}
          fullWidth
          placeholder="Search Clinic / doctor / Speciality / Package"
          inputProps={{ "aria-label": "naked" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <img className={classes.filterContainer} src={Filter} alt="Filter Icon" />
      </Box>
    </Box>
  );
};

export default Header;
