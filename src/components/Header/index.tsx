import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import "./style.css";

function Header() {



    return (
        <>
            <Grid className="Header-heading" container justify="center">
                <Typography variant="h2" align="center"><i className="fas fa-user-friends"></i>COMPANY DIRECTORY</Typography>
                <Grid className="Header-instructions" container justify="center">
                    <Typography align="center">Search by first or last name or select a column heading to sort. </Typography>
                </Grid>
            </Grid>

        </>
    )

}

export default Header;
