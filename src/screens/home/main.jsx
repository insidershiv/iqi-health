import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import { pxTorem } from "../../utils/utils";
import { HomeObj } from "./home-obj";
import {
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: " 3rem 1rem",
  },
  cardContainer: {
    borderRadius: pxTorem(8),
    minWidth: pxTorem(130),
    backgroundColor: "#eeeeee",
    margin: "30px 16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 20px 10px 20px",
    color: "#7C7C7C",
    // "&:hover, &:focus": {
    //   // background: theme.palette.primary.main,
    //   background: 'red',
    //   boxShadow: "1px 5px 37px -17px rgba(0,0,0,0.38)",
    //   color: "#ffffff",
    // },
    // "&:active": {
    //   // background: theme.palette.primary.main,
    //   background: 'red',
    //   boxShadow: "1px 5px 37px -17px rgba(0,0,0,0.38)",
    //   color: "#ffffff",
    // },
  },

  pckgContainer: {
    borderRadius: pxTorem(8),
    backgroundRepeat: "no-repeat",
    minWidth: pxTorem(500),
    height: pxTorem(250),
    margin: "3rem 1rem",
    padding: "14px 20px 10px 20px",
  },
  pckgContainerButtonPosition: {
    position: "absolute",
    left: 15,
    bottom: 33,
    backgroundColor: "#036881",
    color: "#fff",
  },
  // for small screen pckage container
  pckgContainerSm: {
    minWidth: pxTorem(360),
    marginBottom: 0,
    height: pxTorem(185),
  },
  pckgContainerButtonPositionSm: {
    position: "absolute",
    left: 15,
    bottom: 30,
    backgroundColor: "#036881",
    color: "#fff",
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
  referalImg: {
    height: "100%",
    width: "100%",
  },
  textStyle: {
    fontSize: theme.typography.label,
    fontFamily: theme.typography.fontFamily,
    textAlign: "cover",
  },
  packageHeading: {
    color: "#101010",
  },
  referralContainer: {
    marginBottom: "30px",
    marginTop: "30px",
  },
}));

const CardComponent = ({ classes, tile, index }) => (
  <div className={classes.cardContainer} key={index} style={index === 0 ? {
    background: 'red',
    boxShadow: "1px 5px 37px -17px rgba(0,0,0,0.38)",
    color: "#ffffff"
  } : {}} >
    <div>
      <img className={classes.imgContainer} src={tile.img} alt={tile.name} />
    </div>
    <div>
      <p className={classes.textStyle}>{tile.name}</p>
    </div>
  </div>
);

const PackageComponent = ({ classes, tile, matches, index }) => (
  <div
    style={{
      backgroundImage: `url(${tile.bgImg})`,
      backgroundSize: "contain",
      position: "relative",
    }}
    className={
      matches
        ? `${classes.pckgContainer} + ' ' ${classes.pckgContainerSm}`
        : classes.pckgContainer
    }
    key={index}
  >
    <div style={{ height: pxTorem(80) }}>
      <Typography variant="subtitle1" className={classes.textStyle}>
        {tile.heading}
      </Typography>
      <Typography
        variant="h5"
        className={classes.textStyle}
        style={{ fontWeight: 600, color: "#000000" }}
      >
        {tile.title}
      </Typography>
      <div>
        <Typography
          variant="subtitle1"
          style={{
            textDecoration: "line-through",
            display: "inline-block",
            marginRight: pxTorem(5),
          }}
        >
          {tile.oldAmt}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ display: "inline-block", fontWeight: 600, color: "#000" }}
        >
          {tile.newAmt}
        </Typography>
      </div>

      <Typography
        variant="subtitle2"
        className={classes.textStyle}
        style={matches ? { maxWidth: "9rem" } : { maxWidth: "15rem" }}
      >
        {tile.desc}
      </Typography>
      <Button
        variant="contained"
        size="small"
        color="primary"
        className={
          matches
            ? classes.pckgContainerButtonPositionSm
            : classes.pckgContainerButtonPosition
        }
      >
        Book Now
      </Button>
    </div>
  </div>
);

const InformedComponent = ({ classes, tile, index }) => (
  <div
    style={{
      width: "98%",
      display: "flex",
      alignSelf: "center",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "40px",
    }}
    key={index}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "100%",
      }}
    >
      <Box
        component="div"
        my={2}
        whiteSpace="noWrap"
        maxWidth="60vw"
        textOverflow="ellipsis"
        overflow="hidden"
      >
        {tile.desc}
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#878686", fontSize: "1rem" }}>
          {tile.categoryName}
        </p>
        <p style={{ color: "#878686", marginRight: "20px" }}>...</p>
      </div>
    </div>
    <div style={{ width: "8rem", height: "40%" }}>
      <img
        src={tile.bgImg}
        alt={tile.categoryName}
        style={{ height: "8rem", width: "8rem" }}
      />
    </div>
  </div>
);

const Main = (props) => {
  const classes = useStyles();
  let theme = useTheme();
  // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

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
        {HomeObj.packageData.map((tile, index) => (
          <PackageComponent classes={classes} tile={tile} index={index} matches={matchesMD} />
        ))}
      </GridList>
      <div className={classes.referralContainer}>
        <img
          className={classes.referalImg}
          src={HomeObj.referralData.img}
          alt={"hi"}
        />
      </div>
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
        {HomeObj.informedData.map((tile, index) => (
          <InformedComponent classes={classes} tile={tile} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
