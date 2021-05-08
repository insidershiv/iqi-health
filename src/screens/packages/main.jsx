import React from 'react'
import { Box, Button, Grid, InputAdornment, InputBase, Typography } from '@material-ui/core'
import { healthPackageList } from './package'
import Filter from "../../../src/assets/img/filter.svg";
import Toggle from "../../../src/assets/img/toggle.svg";
import Search from "../../../src/assets/img/search.svg";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle } from '@material-ui/icons';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom'



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
        height: "3%",
        width: "3%",
    },

    inputContainer: {
        marginLeft: "0.625rem",
        marginRight: "0.938rem",
        fontSize: "2.6vw",
    },
    list: {
        width: 230
    },
    selected: {
        backgroundColor: 'turquoise	 !important',
        color: 'white'
    }
}));


const PackageComponent = ({ item }) => {
    return (
        <Box style={{ width: '68%', height: '9rem', backgroundColor: '#ADD8E6', marginTop: '1rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '.2rem 3rem 1rem 3rem', borderRadius: '8px' }}>
            <Typography variant="h5" style={{ marginTop: '.8rem', fontWeight: '500', }}>
                {item.name}
            </Typography>
            <Typography variant="h5" style={{ fontWeight: '500' }}>
                {item.price}
            </Typography>
            <Button variant="contained" color="primary" size="small" style={{ color: 'white' }}>
                Add to cart
        </Button>
        </Box >
    )
}

const MainPackages = () => {
    const classes = useStyles();
    const history = useHistory();
    const goBack = () => {
        history.goBack()
    }
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
                <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: "row", width: '100%', marginBottom: '.8rem', marginLeft: '1rem' }}>

                    <ArrowBackIcon onClick={() => goBack()} />
                </div>
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
            <Grid container xs={12} alignItems="center" direction="column" style={{ marginTop: '3rem' }} >

                <div style={{ display: 'flex', alignItems: "center", paddingLeft: '10px', paddingRight: '10px' }}>

                    <Typography variant="h4" style={{ fontWeight: 600, }}>
                        Health CheckUp and Packages
            </Typography>
                </div>


                {healthPackageList.packages.map((item) => (
                    <PackageComponent item={item} />
                ))}

            </Grid >
        </>
    )
}

export default MainPackages