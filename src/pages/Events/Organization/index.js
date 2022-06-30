import React, { memo } from "react";
import { ModalInfo, Loading, PageHeader } from "components";
import { ROUTES } from "routes";

import { Layout } from "./helpers_wrappers";

import { useMatchDetails } from "./useMatchDetails";
import useStyles from "./styles";
import { EventDetails } from "./EventDetails";
import { ShowDetails } from "./ShowDetails";

export const MatchDetails = memo(function MatchDetails() {
  const {
    eventId,
    event,
    show,
    showId,

    isLoading,
    isOpen,

    handleDeleteShow,
    handleOpenModal,
    handleCloseModal,

    goBack,
  } = useMatchDetails();
  const classes = useStyles();
  const eventPageUrl = `${pathWithParamsByRoute(ROUTES.OBSERVER_SETTINGS, {
    showId,
  })}`;

  return (
    <Layout className={classes.root}>
      {isLoading && <Loading />}

      <PageHeader title={`${eventId} Match Info`} />

      <EventDetails event={event} eventPageUrl={eventPageUrl} goBack={goBack} />
      <ShowDetails
        event={event}
        show={show}
        handleOpenModal={handleOpenModal}
      />

      <ModalInfo
        text={`Want to delete Match ${eventId}?`}
        buttonText="Approve"
        isOpen={isOpen}
        handleClose={handleCloseModal}
        handleAction={handleDeleteShow}
      />
    </Layout>
  );
});
