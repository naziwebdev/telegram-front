"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerValidator from "@/validators/register";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      phone: "",
      password: "",
    },
    resolver: yupResolver(registerValidator),
  });

  const registerHandle = async (data, event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:4002/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        phone: data.phone,
        password: data.password,
      }),
    });

    if (res.status === 201) {
      await res.json();

      swal({
        title: "با موفقیت ثبت نام شد",
        icon: "success",
        buttons: "ورود به اپ",
      }).then((value) => {
        if (value) {
          reset();
          router.replace("/");
        }
      });
    } else {
      swal({
        title: "   ثبت نام با شکست روبرو شد",
        icon: "error",
        buttons: "بستن",
      });
      console.log(await res.json());
    }
  };

  return (
    <div className="flex justify-center items-center bg-purple-600 h-dvh">
      <form
        onSubmit={handleSubmit(registerHandle)}
        className="flex flex-col justify-center items-center gap-y-5 w-2/3 xs:w-1/2 xl:w-1/3 p-6 xs:p-12 xl:p-20 rounded-3xl bg-zinc-900"
      >
        <h2 className="text-2xl text-white font-roboto-reg tracking-wider">
          Register
        </h2>
        <div className="w-full flex flex-col gap-y-1.5">
          <input
            {...register("username")}
            type="text"
            id="username"
            placeholder="username "
            className="w-full bg-transparent text-center text-white rounded-full p-3 border-2 border-blue-600  outline-none focus:border-green-500"
          />
          <span className="text-sm text-red-600">
            {errors.username && errors.username.message}
          </span>
        </div>
        <div className="w-full flex flex-col gap-y-1.5">
          <input
            {...register("phone")}
            type="text"
            id="phone"
            placeholder="phone"
            className="w-full bg-transparent text-white text-center rounded-full p-3 border-2 border-blue-600 outline-none focus:border-green-500"
          />
          <span className="text-sm text-red-600">
            {errors.phone && errors.phone.message}
          </span>
        </div>
        <div className="w-full flex flex-col gap-y-1.5">
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="password"
            className="w-full bg-transparent text-white text-center rounded-full p-3 border-2 border-blue-600  outline-none focus:border-green-500"
          />
          <span className="text-sm text-red-600">
            {errors.password && errors.password.message}
          </span>
        </div>
        <button className="w-1/2 p-3 flex items-center justify-center bg-transparent text-center text-white rounded-full  border-2 border-green-500  font-roboto-reg text-lg">
          submit
        </button>
        <p className="text-purple-400 text-center">
          have you account ? <Link href={"/login"} className="text-white ">Login</Link>
        </p>
      </form>
    </div>
  );
}
