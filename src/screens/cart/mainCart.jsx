import { Box, Typography, Divider, Button, InputBase } from '@material-ui/core'
import React, { useState } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import CounterComponent from './counter';
import { makeStyles } from "@material-ui/core/styles";
import NumberFormat from 'react-number-format';
import AmountFormat from '../../components/NumberComponent';



const useStyles = makeStyles((theme) => ({
    promocodeContainer: {
        padding: '.5rem',
        borderRadius: '8px',
        "&:focus,&:active": {
            // background: theme.palette.primary.main,

            boxShadow: "1px 5px 37px -17px rgba(0,0,0,0.38)",
            color: "#ffffff",
        },
        border: "1px solid grey",
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        textTransform: "uppercase"
    },
    promocodeInput: {
        maxWidth: '80%',
        display: 'flex',
        alignSelf: 'flex-start',
        textTransform: 'uppercase'
    },
    CartComponentContainer: {
        backgroundColor: '#F5F5F5',
        borderRadius: '8px',
        margin: '1rem 0'
    },
    CartComponentData: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        width: '100%'
    },
    detailComponentData: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: "15px"
    },
    paymentButton: {
        borderRadius: '50px',
        color: 'white',
        padding: '1rem 2rem',
        margin: "40px 0",
        alignSelf: "center",
        width: "80%",
        fontWeight: 600,
        textTransform: "none"
    },
    backButtonCotainer: {
        display: 'flex', justifyContent: 'flex-start', flexDirection: "row", width: '100%', marginBottom: '.8rem', marginLeft: '1rem'
    },
    transitionComponentContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        padding: "15px"
    },
    transitonComponentItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        color: '#cdcdcd'
    },
    dateView: {
        display: 'flex',
        flexDirection: 'column',
        width: '3.4rem',
        backgroundColor: 'tomato',
        color: 'white',
        borderRadius: '8px',
        padding: '0.6rem',
        alignItems: 'center'
    }



}))

const TransactionComponent = ({ classes, subtotal, adminFee, discount }) => (
    <div className={classes.transitionComponentContainer} >
        <div className={classes.transitonComponentItem} >
            <span style={{ color: '#cdcdcd' }}>Subtotal</span>
            <span><NumberFormat value={subtotal} displayType={'text'} thousandSeparator={true} suffix={'₫'} />

            </span>
        </div>
        <div className={classes.transitonComponentItem} >
            <div>Discount Amount</div>
            <div>
                <AmountFormat value={discount} />
            </div>
        </div>
        <div className={classes.transitonComponentItem}>
            <span>Admin Fee</span>
            <span><AmountFormat value={adminFee} /></span>
        </div>
        <Divider style={{ margin: "15px 0" }} />
        <div className={classes.transitonComponentItem} style={{ marginBottom: '0', color: '#000', fontWeight: 600 }}><span>Order Total</span><span><AmountFormat value={123412} /></span></div>
    </div>
);

const PromocodeComponent = ({ classes }) => (
    <div className={classes.promocodeContainer} role="textbox">

        <InputBase
            className={classes.promocodeInput}

            fullWidth
            placeholder="Promo Code"
            inputProps={{ "aria-label": "naked" }}


        />
        <Typography variant="h6" color="primary">
            Apply
        </Typography>
    </div>
)

const DateViewComponent = ({ classes }) => (
    <Box display="flex" justify="start" alignItems="center" style={{ marginBottom: "15px" }}>
        <Box className={classes.dateView}>
            <div style={{ fontSize: '0.8rem' }}>Apr</div>
            <div style={{ fontSize: '1.4rem', fontWeight: '600' }}>22</div>
            <div style={{ fontSize: '0.8rem' }}>2021</div>
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'column', marginLeft: "15px" }}>
            <div style={{ fontSize: '1rem', fontWeight: '500', margin: "3px 0" }}>Appointment with</div>
            <div style={{ fontSize: '0.8rem', marginBottom: "3px" }}>MS. MD. Trần Đặng Xuân Tùng</div>
            <div style={{ fontSize: '0.8rem', marginBottom: "3px" }}>Thursday 12/34/456</div>
        </Box>
    </Box>
);

const DetailComponent = ({ classes }) => (
    <>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 500 }}> Type: <span style={{ fontWeight: 'normal' }}> Lab Test</span></span>
            <span style={{ fontWeight: 500, margin: "12px 0" }}> Price: <span style={{ fontWeight: 'normal' }}>
                <AmountFormat value={12122} /></span></span>
        </div>
        <div className={classes.detailComponentData}>
            <CounterComponent />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant="h5">Total : </Typography>
                <Typography variant="h5" style={{ fontWeight: 600, marginLeft: '10px' }}>

                    <AmountFormat value={12323312} /> </Typography>
            </div>
        </div>
    </>
);


const CartComponent = ({ type = "", classes }) => {
    return (
        <Box className={classes.CartComponentContainer} p={2}>
            <div className={classes.CartComponentData} >
                {type === "appointment" ? <DateViewComponent classes={classes} />
                    : <Typography variant="h5" style={{ fontWeight: 600, marginBottom: "8px" }}>
                        Periodic Health Examination for Foreigner
            </Typography>}
                <CloseIcon color="primary" />
            </div>
            <DetailComponent classes={classes} />
        </Box>
    )
}

const MainCart = () => {
    const history = useHistory();
    const classes = useStyles();
    const goBack = () => {
        history.goBack();
    }


    return (
        <React.Fragment>
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
                <div className={classes.backButtonCotainer} >
                    <ArrowBackIcon onClick={() => goBack()} />
                </div>

            </Box>

            <Box p={2} style={{ display: 'flex', flexDirection: "column" }}>
                <Typography variant="h1">
                    My Cart
                </Typography>
                <CartComponent classes={classes} />
                <CartComponent classes={classes} />
                <CartComponent type="appointment" classes={classes} />
                <PromocodeComponent classes={classes} />
            </Box>
            <TransactionComponent classes={classes} subtotal={9139381} discount={1212} adminFee={8000} />

            <Box style={{ textAlign: 'center' }}>
                <Button variant="contained" color="primary" className={classes.paymentButton}>
                    Proceed to payment
             </Button>
            </Box>
        </React.Fragment>
    )
}

export default MainCart