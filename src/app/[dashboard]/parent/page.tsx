import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import React from "react";

const ParentPage = () => {
  return (
    <div className="p-2 flex gap-4 flex-col xl:flex-row">
      <div className="w-full xl:w-3/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">
            Schedule 8th (Manocher Sultani)
          </h1>
          <BigCalendar />
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default ParentPage;
