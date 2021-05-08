import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React, { useState } from "react";
import Account from "../../../src/assets/img/account.svg";
import Filter from "../../../src/assets/img/filter.svg";
import Logo from "../../../src/assets/img/logo.png";
import MenuLogo from "../../../src/assets/img/menu.svg";
import Notify from "../../../src/assets/img/notify.png";
import Search from "../../../src/assets/img/search.svg";
import Location from "../../../src/assets/img/location.svg";
import Toggle from "../../../src/assets/img/toggle.svg";
import { useHistory } from 'react-router-dom'


import { Divider, Drawer, List, ListItemText, Menu, MenuItem } from "@material-ui/core";


// const navigationItems = ['Home', 'Members', 'Appointments', 'Consultation', 'Reports', 'Orders', 'My Wallet']

const navigationItems = [
  {
    linkName: 'Home',
    route: '/dashboard'
  },
  {
    linkName: 'Members',
    route: '/members'

  },
  {
    linkName: 'Appointments',
    route: '/appointments'
  },
  {
    linkName: 'Consultation',
    route: '/consultation'
  },
  {
    linkName: 'Reports',
    route: '/reports'
  },
  {
    linkName: 'Orders',
    route: '/orders'
  },
  {
    linkName: 'My Wallet',
    route: '/my-wallet'
  }

]

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
  list: {
    width: 230
  },
  selected: {
    backgroundColor: 'turquoise	 !important',
    color: 'white'
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isSelected, setIsSelected] = useState(null)
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <>
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
            <img className={classes.menuContainer} src={MenuLogo} alt="Menu drawer logo" onClick={() => setIsDrawerOpen(true)} />
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
              aria-controls="simple-menu"
              onClick={(event) => handleClick(event)}
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

          />
          <img className={classes.filterContainer} src={Filter} alt="Filter Icon" />
        </Box>
      </Box>
      <div>



        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}

        >
          <div className={classes.list} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            <List style={{ width: '100%', }}>

              {navigationItems.map((item, index) => (
                <div key={index}>
                  <MenuItem button onClick={() => { (setIsSelected(index)); history.push(item.route) }} selected={isSelected === index} classes={{ selected: classes.selected }} >

                    <ListItemText >{item.linkName}</ListItemText>
                  </MenuItem>
                  <Divider />
                </div>
              ))}


            </List>
          </div>

        </Drawer>
      </div>

      <div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => { handleClose() }}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>


    </>
  );
};

export default Header;
