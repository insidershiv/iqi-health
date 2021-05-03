import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import { pxTorem } from "../../utils/utils";
import { HomeObj } from "./home-obj";
import { Button, Typography, useMediaQuery, useTheme, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
  cardContainer: {
    borderRadius: pxTorem(8),
    minWidth: pxTorem(200),
    backgroundColor: "#eeeeee",
    margin: "20px 16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 20px 10px 20px",
    color: "#7C7C7C",
    "&:hover, &:focus": {
      background: theme.palette.primary.main,
      boxShadow: "1px 5px 37px -17px rgba(0,0,0,0.38)",
      color: "#ffffff",
    },
    "&:active": {
      background: theme.palette.primary.main,
      boxShadow: "1px 5px 37px -17px rgba(0,0,0,0.38)",
      color: "#ffffff",
    },
  },

  pckgContainer: {
    borderRadius: pxTorem(8),
    backgroundRepeat: "no-repeat",
    minWidth: pxTorem(500),
    height: pxTorem(250),
    margin: "1rem 1rem",
    padding: "14px 20px 10px 20px",
  },
  pckgContainerButtonPosition: {
    position: 'absolute',
    left: 15,
    bottom: 33,
    backgroundColor: '#036881',
    color: '#fff'
  },
  // for small screen pckage container
  pckgContainerSm: {
    minWidth: pxTorem(338),
    marginBottom: 0,
    height: pxTorem(185)


  },
  pckgContainerButtonPositionSm: {
    position: 'absolute',
    left: 15,
    bottom: 40,
    backgroundColor: '#036881',
    color: '#fff'
  },

  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  imgContainer: {
    height: pxTorem(80),
    width: pxTorem(80),
  },
  textStyle: {
    fontSize: theme.typography.label,
    fontFamily: theme.typography.fontFamily,
    textAlign: "cover",
  },
  packageHeading: {
    color: '#101010'
  },
  referralContainer: {
    marginBottom: "10px",
    // display: 'flex', flex: 1,
    minHeight: "48vh",
    // backgroundColor: 'red',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundImage: `url(${HomeObj.referralData.img})`
  }
}));

const CardComponent = ({ classes, tile, index }) => (
  <div className={classes.cardContainer}>
    <div>
      <img className={classes.imgContainer} src={tile.img} alt={tile.name} />
    </div>
    <div>
      <p className={classes.textStyle}>{tile.name}</p>
    </div>
  </div>
);

const PackageComponent = ({ classes, tile, matches }) => (
  <div
    style={{
      backgroundImage: `url(${tile.bgImg})`,
      backgroundSize: "contain",
      position: "relative"
    }}
    className={matches ? `${classes.pckgContainer} + ' ' ${classes.pckgContainerSm}` : classes.pckgContainer}
  >
    <div style={{ height: pxTorem(80) }}>
      <Typography variant="subtitle1" className={classes.textStyle} >{tile.heading}</Typography>
      <Typography variant="h6" className={classes.textStyle} style={{ fontWeight: 600, color: '#000000' }} >
        {tile.title}
      </Typography>
      <div>
        <Typography variant="subtitle1" style={{ textDecoration: 'line-through', display: 'inline-block', marginRight: pxTorem(5) }}>
          {tile.oldAmt}
        </Typography>
        <Typography variant="subtitle1" style={{ display: 'inline-block', fontWeight: 600, color: '#000' }}>
          {tile.newAmt}
        </Typography>


      </div>

      <Typography variant="subtitle2" className={classes.textStyle} style={matches ? { maxWidth: '9rem' } : { maxWidth: '15rem' }}>

        {tile.desc}
      </Typography>
      <Button variant="contained" size="small" color="primary" className={matches ? classes.pckgContainerButtonPositionSm : classes.pckgContainerButtonPosition} >
        Book Now
      </Button>
    </div>
  </div >
);

const InformedComponent = ({ classes, tile }) => (
  <div
    style={{
      width: "95%",
      alignSelf: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "40px",
    }}
  >
    <div style={{ flexGrow: 1, marginRight: "30px" }}>
      <p
        className={classes.textStyle}
        style={{ color: "#4b4b4b", fontSize: "1.2rem" }}
      >
        {tile.desc}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <p style={{ color: "#878686", fontSize: "1rem" }}>
          {tile.categoryName}
        </p>
        <p style={{ color: "#878686" }}>...</p>
      </div>
    </div>
    <div>
      <img
        src={tile.bgImg}
        alt={tile.categoryName}
        style={{ height: "100px", width: "100px" }}
      />
    </div>

  </div>
);

const Main = (props) => {
  const classes = useStyles();
  let theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => { }, []);
  return (
    <div className={classes.root}>
      <h2 style={{ marginLeft: "2%", fontFamily: "Poppins" }}>My Wellness</h2>
      <GridList className={classes.gridList} cols={2.5}>
        {HomeObj.weelnessData.map((tile, index) => (
          <CardComponent classes={classes} tile={tile} index={index} />
        ))}
      </GridList>
      <GridList className={classes.gridList}>
        {HomeObj.packageData.map((tile) => (
          <PackageComponent classes={classes} tile={tile} matches={matchesMD} />
        ))}
      </GridList>
      {/* <div className={classes.referralContainer}></div> */}
      <Grid container className={classes.referralContainer}>

      </Grid>
      <div
        style={{
          marginBottom: "40px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            marginBottom: "30px",
            marginLeft: "2.5%",
            fontFamily: "Poppins",
          }}
        >
          Be Informed
        </h2>
        {HomeObj.informedData.map((tile) => (
          <InformedComponent classes={classes} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default Main;
