import PagInation from "@/components/PagInation";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  assignmentsData,
  examsData,
  lessonsData,
  resultsData,
  role,
} from "@/lib/data";
import FormModal from "@/components/FormModal";

const columns = [
  { header: "Subject Name", accessor: "name" },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  { header: "Teacher", accessor: "teacher", className: "hidden md:table-cell" },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  { header: "Date", accessor: "date", className: "hidden md:table-cell" },
  { header: "Actions", accessor: "action" },
];

type result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  type: "exam | assignment";
  date: string;
  score: number;
};

const ResultsListPage = () => {
  const renderRow = (item: result) => (
    <tr
      key={item.id}
      className="border-b border-gray-400 even:bg-slate-100 hover:bg-lamaPurpleLight font-sm"
    >
      <td className="flex items-center gap-2 p-1 font-sem">{item.subject}</td>
      <td className="hidden md:table-cell">{item.student}</td>
      <td className="hidden md:table-cell">{item.score}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <FormModal table="result" type="edit" />
          </Link>
          {role === "admin" && <FormModal table="result" type="delete" />}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={20} height={20} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={20} height={20} />
            </button>
            {role === "admin" && <FormModal table="result" type="plus" />}
          </div>
        </div>
      </div>
      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />
      <PagInation />
    </div>
  );
};

export default ResultsListPage;
