import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CounterChart from "@/components/CounterChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

const Admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-3/3 flex flex-col gap-6">
        {/* user card */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students" />
          <UserCard type="teachers" />
          <UserCard type="parrents" />
          <UserCard type="staffs" />
        </div>
        {/* middle chart */}
        <div>
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 h-[450px] p-1">
              <CounterChart />
            </div>
            <div className="w-full lg:w-2/3 h-[450px]">
              <AttendanceChart />
            </div>
          </div>
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 h-[450px] p-1 mb-2">
              <EventCalendar />
            </div>
            <div className="w-full mt-2 lg:w-2/3 h-[450px]">
              <Announcements />
            </div>
          </div>
        </div>

        {/* bottm chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
    </div>
  );
};

export default Admin;
