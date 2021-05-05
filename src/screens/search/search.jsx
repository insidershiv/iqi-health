import React from "react";
import { hospitals } from "./search-obj";
import { similarHospitalData } from "./search-obj";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Grid,
  GridList,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { pxTorem } from "../../utils/utils";
import placeholder from "../../assets/img/placeholder.svg";
import doctorsTeam from "../../assets/img/doctorteam.svg";
import favourite from "../../assets/img/Favorite.svg";
import Header from "../../components/misc/header";
import Footer from "../../components/misc/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: pxTorem(8),
    minWidth: pxTorem(168),
    backgroundColor: "#f8f8f8",
    margin: "1rem .8rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: ".5rem .9rem .9rem .5rem",
    color: "#7C7C7C",
    // "&:hover, &:focus": {
    //   background: theme.palette.primary.main,
    //   boxShadow: "1px 5px 37px -17px rgba(0,0,0,0.38)",
    //   color: "#ffffff",
    // },
    // "&:active": {
    //   background: theme.palette.primary.main,
    //   boxShadow: "1px 5px 37px -17px rgba(0,0,0,0.38)",
    //   color: "#ffffff",
    // },
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
  spacer: {
    marginTop: '3px',
  }
}));

const HospitalCardComponent = ({ tile, classes, index }) => {
  const { name, doctors, img, rating, reviewsCount, location, desc } = tile;
  console.log(name);
  return (
    <Card className={classes.root}>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
            marginBottom: "1rem",
          }}
        >
          <img src={img} alt={name} />
        </div>
        <Typography variant="h6" style={{ fontWeight: "bold", color: "#000" }}>
          {name}
        </Typography>
        <Typography variant="h6" style={{ color: "#1f1f1f" }}>
          {desc}
        </Typography>
        <div style={{ display: "flex", marginTop: ".5rem" }}>
          <div style={{ marginRight: ".8rem" }}>
            <img src={placeholder} alt="location" />
          </div>
          <div>{location}</div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: ".8rem" }}
        >
          <div style={{ marginRight: ".8rem" }}>
            <img src={doctorsTeam} alt="doctors count" />
          </div>
          <div>
            <Typography variant="subtitle2">{doctors}</Typography>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: ".8rem" }}
        >
          <div style={{ marginRight: ".8rem" }}>
            <img src={favourite} alt="doctors count" />
          </div>
          <div>
            <Typography variant="subtitle2">
              {rating} ( {reviewsCount} reviews )
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


const SimilarHospitalCardComponent = ({ classes, tile }) => {
  return (
    <Card style={{ width: '94%', backgroundColor: '#f8f8f8', margin: '8px auto' }}>
      <Grid container item justify="space-between" alignItems="center" style={{ padding: '12px' }}>
        <div style={{ backgroundColor: 'white', padding: '12px', height: '4.2rem', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={tile.img} alt="" style={{ width: '100%', height: '100%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, marginLeft: '.8rem' }}>

          <Typography variant="h6" style={{ fontSize: '3vw' }}>
            {tile.name}
          </Typography>

          <Typography variant="h6">
            {tile.desc}
          </Typography>
          <div style={{ display: 'flex', alignItems: "center", marginTop: '3px' }}>
            <img src={placeholder} alt="location logo" style={{ width: '0.6rem', marginRight: '.3rem' }} />
            <Typography variant="h6" style={{ fontSize: '.6rem', display: 'inline-block', color: '#868686' }}>
              {tile.location}
            </Typography>
          </div>

          <div style={{ display: 'flex', marginTop: '3px' }}>
            <img src={favourite} alt="" />
            <Typography variant="h6" style={{ color: '#868686', marginTop: '3px' }}>

              {tile.rating} ({tile.reviewsCount} reviews)
                </Typography>
            <Typography variant="h6" style={{ color: '#868686', marginTop: '3px', marginLeft: '5px' }}>
              {tile.doctors}
            </Typography>
          </div>
        </div>
        <img src={tile.rightArrow} alt="" />
      </Grid>
    </Card>
  )
}

const Search = ({ }) => {
  const classes = useStyles();
  let theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <Header />
      <Grid container style={{ marginTop: "1rem", padding: "1rem" }}>
        <Grid container item justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">Top NearBy Hospitals</Typography>
          </Grid>

          <Grid item>
            <Typography variant="h6">
              <Link>
                See All
              </Link>
            </Typography>
          </Grid>
        </Grid>


      </Grid>
      <GridList className={classes.gridList} style={{ margin: 0 }}>
        {hospitals.hospitalData.map((tile, index) => (
          <HospitalCardComponent classes={classes} tile={tile} index={index} />
        ))}
      </GridList>
      <Grid container style={{ padding: '1rem' }} justify="space-between">

        <Grid item>
          <Typography variant="h5" style={{ fontWeight: '600' }}>
            Compare with similar hospitals
            </Typography>
        </Grid>

        <Grid item>
          <Link>
            <Typography variant="h6">
              See All
            </Typography>
          </Link>
        </Grid>



      </Grid>
      <Grid container direction="column" flexGrow="1">
        {
          similarHospitalData.Data.map((tile, index) => (
            <SimilarHospitalCardComponent classes={classes} tile={tile} index={index} />
          ))
        }

      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default Search;
