import { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { camelizeKeys } from "reduxs/helpers";

import { axios } from "services/axios";

import { groupData } from "./helpers";

const eventUrl = "/event-service/events";
const eventMapShowUrl = "/event/event-show/";
const teamsSlugUrl = "/team-service/profiles";
const dataEventUrl = "/data-event/events/";

export const useEventDetails = () => {
  const { eventId, showId } = useParams();
  const { goBack } = useHistory();
  const [show, setShow] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(getUsersByIdSelector(showId));
  useEffect(() => {
    Promise.all([
      axios.get(`${eventMapShowUrl}:${eventId}`),
      axios.get(`${eventUrl}/${eventId}`),
    ]).then(([resShow, resEvent]) => {
      const { data: showData } = resShow;
      const {
        data: { data: eventData },
      } = resEvent;

      const participantIds = [
        eventData.participantLeft,
        eventData.participantRight,
      ];

      axios // eslint-disable-next-line max-len
        .get(
          `${teamsSlugUrl}?filter__show_id__eq=${showId}&filter__team_id__in=${participantIds}&page__limit=100`
        )
        .then(({ data }) => {
          const res = camelizeKeys(data);
          const resultWithTeams = groupData({
            eventes: [eventData],
            entities: res.data,
            idKey: "teamId",
            nameKey: "name",
            photoKey: "photos",
          });
          setEvent(resultWithTeams[0]);
          setShow(showData);
          setIsLoading(false);
        });
    });
  }, [showId, eventId]);

  const handleDeleteShow = useCallback(() => {
    setIsLoading(true);
    axios.delete(`${dataEventUrl}:${eventId}`).then(({ data }) => {
      setShow(data);
      setIsLoading(false);
    });
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    user,
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
  };
};
