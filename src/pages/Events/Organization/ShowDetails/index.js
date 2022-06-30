import React, { memo } from "react";
import PropTypes from "prop-types";

import { Box, Grid } from "components/_wrappers";

import useStyles from "../styles";

export const ShowDetails = memo(function ShowDetails({ event, goBack }) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      alignItems="center"
      className={classes.boxTeam}
    >
      <Grid item xs={1} className={classes.goBack}>
        <span onClick={goBack} style={{ marginLeft: 38 }}>
          <svg
            width="8"
            height="10"
            viewBox="0 0 8 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M-4.56976e-07 5L8 10L8 0L-4.56976e-07 5Z" fill="#212121" />
          </svg>
          {" Go back"}
        </span>
      </Grid>
      <Grid item xs={4}>
        <Box className={classes.teamName}>{event.leftName}</Box>
        <Box align="center" className={classes.teamLogo}>
          {event.leftPhoto?.length && (
            <img src={event.leftPhoto[0].url} alt="" width={100} height={90} />
          )}
        </Box>
      </Grid>
      <Grid xs={1} align="center" className={classes.score}>
        {event.seriesType?.toUpperCase()}
      </Grid>
      <Grid xs={4}>
        <Box align="right" className={classes.teamName}>
          {event.rightName}
        </Box>
        <Box align="center" className={classes.teamLogo}>
          {event.rightPhoto?.length && (
            <img src={event.rightPhoto[0].url} alt="" width={100} height={90} />
          )}
        </Box>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
});

ShowDetails.propTypes = {
  event: PropTypes.shape({}),
  goBack: PropTypes.func.isRequired,
};
ShowDetails.defaultProps = {
  event: {},
};
