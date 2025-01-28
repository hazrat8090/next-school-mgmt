import React from "react";
const announcements = [
  {
    id: 8,
    title: "Lessons",
    description: "in the mentioned data the Lessons will be started on",
    data: "2025/4/1",
  },
  {
    id: 1,
    title: "Midterm Exam",
    description: "in the mentioned data the Midterm Exams will be started on",
    data: "2025/6/1",
  },
  {
    id: 9,
    title: "Final Exam",
    description: "in this specific data the Final Exams will be started on",
    data: "2025/8/1",
  },
];
const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-500">View All</span>
      </div>
      {announcements.map((announcement) => (
        <div className="flex flex-col gap-4 mt-4" key={announcement.id}>
          <div className="bg-lamaSkyLight rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium ">{announcement.title}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                {announcement.data}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {announcement.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
