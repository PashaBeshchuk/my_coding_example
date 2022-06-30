import React, { memo } from "react";
import PropTypes from "prop-types";

import { Box, Button, Grid } from "./helpers_wrappers";

import useStyles from "../styles";
import { getEventScore, transformEventName } from "../../helpers";

export const EventDetails = memo(function EventDetails({
  event,
  show,
  handleOpenModal,
}) {
  const keys = Object.keys(event).filter(
    (key) => key !== "type" && key !== "id"
  );
  const classes = useStyles();

  return (
    <Box pl={4} pr={4}>
      {keys.map((key, id) => (
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          className={classes.boxshow}
        >
          <Grid item xs={1} />
          <Grid item xs={2}>
            <Box align="left">
              {"Apartment "}
              {id + 1}
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box align="right">
              {event[key]?.winner &&
              event[key]?.winner?.includes(show.leftName) ? (
                <span className={classes.win}>WIN</span>
              ) : (
                <span className={classes.lose}>LOSE</span>
              )}
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box align="center" className={classes.score}>
              {getEventScore(event[key], show.leftName, show.rightName)}
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box align="left">
              {event[key]?.winner &&
              event[key]?.winner?.includes(show.rightName) ? (
                <span className={classes.win}>WIN</span>
              ) : (
                <span className={classes.lose}>LOSE</span>
              )}
            </Box>
          </Grid>
          <Grid item xs={2} justify="flex-end">
            <Box align="right">{transformEventName(key)}</Box>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      ))}
      {keys.length ? (
        <Grid container spacing={3} xs={12}>
          <Grid item xs={1} />
          <Grid item xs={4} />
          <Grid
            item
            xs={2}
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.button}
          >
            <Button
              type="button"
              color="primary"
              variant="contained"
              onClick={handleOpenModal}
            >
              Delete Story
            </Button>
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={1} />
        </Grid>
      ) : (
        ""
      )}
    </Box>
  );
});

EventDetails.propTypes = {
  event: PropTypes.shape({}),
  show: PropTypes.shape({}),
  handleOpenModal: PropTypes.func.isRequired,
};
EventDetails.defaultProps = {
  event: {},
  show: {},
};
