"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const TeachersForm = dynamic(() => import("./forms/TeachersForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentsForm = dynamic(() => import("./forms/StudentsForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ParentsForm = dynamic(() => import("./forms/ParentsForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ClassesForm = dynamic(() => import("./forms/ClassesForm"), {
  loading: () => <h1>Loading...</h1>,
});
const SubjectsForm = dynamic(() => import("./forms/SubjectsForm"), {
  loading: () => <h1>Loading...</h1>,
});
const LessonsForm = dynamic(() => import("./forms/LessonsForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ExamsForm = dynamic(() => import("./forms/ExamsForm"), {
  loading: () => <h1>Loading...</h1>,
});
const AssignmentsForm = dynamic(() => import("./forms/AssignmentsForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ResultForm = dynamic(() => import("./forms/ResultForm"), {
  loading: () => <h1>Loading...</h1>,
});
const AttendanceForm = dynamic(() => import("./forms/AttendanceForm"), {
  loading: () => <h1>Loading...</h1>,
});
const EventsForm = dynamic(() => import("./forms/EventsForm"), {
  loading: () => <h1>Loading...</h1>,
});
const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  [key: string]: (type: "plus" | "edit", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeachersForm type={type} data={data} />,
  student: (type, data) => <StudentsForm type={type} data={data} />,
  parent: (type, data) => <ParentsForm type={type} data={data} />,
  subject: (type, data) => <SubjectsForm type={type} data={data} />,
  lesson: (type, data) => <LessonsForm type={type} data={data} />,
  class: (type, date) => <ClassesForm type={type} data={date} />,
  exam: (type, data) => <ExamsForm type={type} data={data} />,
  assignment: (type, data) => <AssignmentsForm type={type} data={data} />,
  result: (type, data) => <ResultForm type={type} data={data} />,
  attendance: (type, data) => <AttendanceForm type={type} data={data} />,
  event: (type, data) => <EventsForm type={type} data={data} />,
  AnnouncementForm: (type, data) => (
    <AnnouncementForm type={type} data={data} />
  ),
};
const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "plus" | "edit" | "delete" | "view";
  data?: any;
  id?: number;
}) => {
  const size = type === "plus" ? "w-8 h-8" : "w-7 h-7";
  const backgroundColor =
    type === "plus"
      ? "bg-lamaYellow"
      : type === "edit"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" || (type === "view" && id) ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be deleted. Are you sure you want to delete this?{" "}
          {table}
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "plus" || type === "edit" ? (
      forms[table](type, data)
    ) : (
      "Form Not Found"
    );
  };
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${backgroundColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
