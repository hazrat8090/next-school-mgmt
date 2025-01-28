import PagInation from "@/components/PagInation";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { eventsData, role } from "@/lib/data";
import FormModal from "@/components/FormModal";

const columns = [
  { header: "Title", accessor: "title" },
  {
    header: "Class",
    accessor: "class",
  },
  { header: "Date", accessor: "date", className: "hidden md:table-cell" },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  { header: "Actions", accessor: "action" },
];

type event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const EventsListPage = () => {
  const renderRow = (item: event) => (
    <tr
      key={item.id}
      className="border-b border-gray-400 even:bg-slate-100 hover:bg-lamaPurpleLight font-sm"
    >
      <td className="flex items-center gap-2 p-1 font-sem">{item.title}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <FormModal table="event" type="edit" id={item.id} />
          </Link>
          {role === "admin" && (
            <FormModal table="event" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={20} height={20} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={20} height={20} />
            </button>
            {role === "admin" && <FormModal table="event" type="plus" />}
          </div>
        </div>
      </div>
      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />
      <PagInation />
    </div>
  );
};

export default EventsListPage;
