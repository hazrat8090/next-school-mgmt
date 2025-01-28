import PagInation from "@/components/PagInation";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { parentsData, role, subjectsData } from "@/lib/data";
import FormModal from "@/components/FormModal";

const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Student Name",
    accessor: "studentName",
    className: "hidden md:table-cell",
  },

  { header: "Phone", accessor: "phone", className: "hidden md:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "action" },
];

type parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone?: string;
  address: string;
};

const ParentsListPage = () => {
  const renderRow = (item: parent) => (
    <tr
      key={item.id}
      className="border-b border-gray-400 even:bg-slate-100 hover:bg-lamaPurpleLight font-sm"
    >
      <td className="flex items-center gap-2 p-1 font-sem">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p>{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.students.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" height={15} width={15} />
            </button>
          </Link>
          {role === "admin" && <FormModal table="parent" type="delete" />}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={20} height={20} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={20} height={20} />
            </button>
            {role === "admin" && <FormModal table="parent" type="plus" />}
          </div>
        </div>
      </div>
      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      <PagInation />
    </div>
  );
};

export default ParentsListPage;
