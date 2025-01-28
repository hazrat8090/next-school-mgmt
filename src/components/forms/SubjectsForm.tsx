"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "./InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username should be at least 3 characters" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  passwrd: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z.string().min(8, { message: "Phone number is required" }),
  address: z.string().min(4, { message: "Address is required" }),
  bloodType: z.string().min(1, { message: "Blood Type is required" }),
  birthDay: z.date({ message: "Birth date is required" }),
  gender: z.enum(["Male", "Female", "Other"], {
    message: "Gender is required",
  }),
  image: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

const SubjectsForm = ({
  type,
  data,
}: {
  type: "plus" | "edit";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
  });

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create Subject</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication information
      </span>
      <div className="flex flex-wrap justify-between gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email Address"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Password"
          name="passwrd"
          type="password"
          defaultValue={data?.passwrd}
          register={register}
          error={errors?.passwrd}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex flex-wrap justify-between gap-4">
        <InputField
          label="First Name"
          name="firstName"
          type="text"
          defaultValue={data?.firstName}
          register={register}
          error={errors?.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          type="text"
          defaultValue={data?.lastName}
          register={register}
          error={errors?.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          type="number"
          defaultValue={data?.phone}
          register={register}
          error={errors?.phone}
        />
        <InputField
          label="Address"
          name="address"
          type="text"
          defaultValue={data?.address}
          register={register}
          error={errors?.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          type="text"
          defaultValue={data?.bloodType}
          register={register}
          error={errors?.bloodType}
        />
        <InputField
          label="Birth Date"
          name="birthDay"
          type="date"
          defaultValue={data?.birthDay}
          register={register}
          error={errors?.birthDay}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-400">Gender</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("gender")}
            defaultValue={data?.gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors?.gender?.message && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-400 gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a Photo</span>
          </label>
          <input
            type="file"
            id="img"
            {...register("image")}
            className="hidden"
          />
          {errors?.image?.message && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "plus" ? "Create" : "Edit"}
      </button>
    </form>
  );
};

export default SubjectsForm;
