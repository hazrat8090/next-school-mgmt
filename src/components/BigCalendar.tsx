"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "@/lib/data";
const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleChangeView = (slectedView: View) => {
    setView(slectedView);
  };
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        style={{ height: 600 }}
        onView={handleChangeView}
        min={new Date(2025, 1, 2, 8, 0, 0)}
        max={new Date(2025, 1, 2, 16, 0, 0)}
      />
    </div>
  );
};

export default BigCalendar;
