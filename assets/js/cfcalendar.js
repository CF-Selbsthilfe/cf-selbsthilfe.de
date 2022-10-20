document.addEventListener("DOMContentLoaded", function() {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: "de",
      local: "local",
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "title",
        center: "",
        right: "today prev,next"
      },
      height: "auto",

      googleCalendarApiKey: "AIzaSyCcND4QLv_PoDMw2DU1KKyiNH2YUExfG9o",
      events: {
        googleCalendarId: "00e2e345637b6ac1fcd1c30a569419c2fcdc1b804b270b74f3cd7ef08b12a64d@group.calendar.google.com"
      },
      eventDisplay: "block",
      displayEventTime: false,
      displayEventEnd: false,
      eventBackgroundColor: "#00a7eb",
    });
    calendar.render();
  });
