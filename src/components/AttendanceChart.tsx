"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const data = [
  {
    name: "Sat",
    present: 1000,
    absent: 101,
  },
  {
    name: "Sun",
    present: 937,
    absent: 89,
  },
  {
    name: "Mon",
    present: 333,
    absent: 666,
  },
  {
    name: "Tue",
    present: 993,
    absent: 73,
  },
  {
    name: "Wed",
    present: 833,
    absent: 150,
  },
  {
    name: "Thur",
    present: 973,
    absent: 110,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="absent"
            fill="#FAE27C"
            legendType="circle"
            radius={[8, 8, 0, 0]}
          />
          <Bar
            dataKey="present"
            fill="#C3EBFA"
            legendType="circle"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
