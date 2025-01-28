import React from "react";
import Image from "next/image";
const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min:w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-700">
          2025/22
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">9099</h1>
      <h2 className="capytalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
