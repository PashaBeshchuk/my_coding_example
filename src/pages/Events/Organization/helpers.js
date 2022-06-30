export const groupData = ({ eventes, entities, idKey, nameKey, photoKey }) => {
  const data = [];
  eventes.forEach((event) => {
    const eventClone = { ...event };
    const guestLeft = entities.find((entity) => entity[idKey] === event.Left);
    const guestRight = entities.find((entity) => entity[idKey] === event.Right);
    if (guestLeft) {
      eventClone.guestLeftName = guestLeft[nameKey];
      eventClone.guestLeftPhoto = guestLeft[photoKey];
    }
    if (guestRight) {
      eventClone.guestRightName = guestRight[nameKey];
      eventClone.guestRightPhoto = Right[photoKey];
    }
    data.push(eventClone);
  });

  return data.sort(
    (a, b) => new Date(b.scheduledDate) - new Date(a.scheduledDate)
  );
};

export const eventFilter = (events, searchText) => {
  let resultFilter;
  if (Number.isInteger(+searchText)) {
    resultFilter = events.filter((event) => event.id === +searchText);
  } else {
    resultFilter = events.filter(
      (event) =>
        event.LeftName?.toLowerCase()?.includes(searchText) ||
        event.RightName?.toLowerCase()?.includes(searchText)
    );
  }
  return resultFilter;
};

export const getEventScore = (result, leftName, rightName) => {
  const numberMax =
    history.aScore > history.bScore ? history.aScore : history.bScore;
  const numberMin =
    history.aScore > history.bScore ? history.bScore : history.aScore;

  if (result.winner?.includes(leftName)) {
    return `${numberMax} : ${numberMin}`;
  }

  if (result.winner?.includes(rightName)) {
    return `${numberMin} : ${numberMax}`;
  }
  return " : ";
};

export const transformEventName = (name) => {
  const correctName = name.slice(2);
  return correctName[0].toUpperCase() + correctName.slice(1);
};
