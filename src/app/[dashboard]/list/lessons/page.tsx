import PagInation from "@/components/PagInation";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { classesData, lessonsData, role } from "@/lib/data";
import FormModal from "@/components/FormModal";

const columns = [
  { header: "Subject Name", accessor: "name" },
  {
    header: "Class",
    accessor: "class",
  },
  { header: "Teacher", accessor: "teacher", className: "hidden md:table-cell" },

  { header: "Actions", accessor: "action" },
];

type classes = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const LessonsListPage = () => {
  const renderRow = (item: classes) => (
    <tr
      key={item.id}
      className="border-b border-gray-400 even:bg-slate-100 hover:bg-lamaPurpleLight font-sm"
    >
      <td className="flex items-center gap-2 p-1 font-sem">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <FormModal table="lesson" type="edit" />
          </Link>
          {role === "admin" && <FormModal table="lesson" type="delete" />}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={20} height={20} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={20} height={20} />
            </button>
            {role === "admin" && <FormModal table="lesson" type="plus" />}
          </div>
        </div>
      </div>
      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      <PagInation />
    </div>
  );
};

export default LessonsListPage;
