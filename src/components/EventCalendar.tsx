"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 84,
    title: "sport",
    time: "03:pm || 04:pm",
    description: "football training",
  },
  {
    id: 34,
    title: "teaching",
    time: "08:am || 12:pm",
    description: "teaching mathematic",
  },
];

const EventCalendar = () => {
  const [value, setValue] = useState<Value>(new Date());

  const handleChange = (newValue: Value) => {
    setValue(newValue); // Update the state with the new value
  };

  return (
    <div className="bg-white rounded-md p-4 w-full ">
      <Calendar onChange={handleChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-4 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-600 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-500 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
