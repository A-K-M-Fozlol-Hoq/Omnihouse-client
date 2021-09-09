export const saveEvent = (eventData) => {
  const colors = ["white", "blue", "green", "yellow", "red"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  fetch("https://safe-stream-72585.herokuapp.com/createEvent", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      type: eventData.type,
      title: eventData.title,
      location: eventData.location,
      people: eventData.people,
      startTime: eventData.startTime,
      endTime: eventData.endTime,
      description: eventData.description,
      color: color,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.acknowledged === true) {
        alert("Event created successfully");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const saveEventDraft = (eventData) => {
  console.log(eventData,'eventData')
  const colors = ["white", "blue", "green", "yellow", "red"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const formData = new FormData();
  formData.append("type", eventData.type);
  formData.append("title", eventData.title);
  formData.append("location", eventData.location);
  formData.append("people", eventData.people);
  formData.append("startTime", eventData.startTime);
  formData.append("endTime", eventData.endTime);
  formData.append("description", eventData.description);
  formData.append("color", color);
  fetch("https://safe-stream-72585.herokuapp.com/createDraftEvent", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.acknowledged === true) {
        alert("Event draft created successfully");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
