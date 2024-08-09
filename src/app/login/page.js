"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginValidator from "@/validators/login";
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
      identifier: "",
      password: "",
    },
    resolver: yupResolver(loginValidator),
  });

  const loginHandle = async (data, event) => {
     console.log('ok')
    event.preventDefault();
   
    const res = await fetch("http://localhost:4002/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        identifier: data.identifier,
        password: data.password,
      }),
    });

    if (res.status === 200) {
      await res.json();

      swal({
        title: "با موفقیت لاگین شد",
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
        title: "لاگین با شکست روبرو شد",
        icon: "error",
        buttons: "بستن",
      });
      console.log(await res);
    }
  };

  return (
    <div className="flex justify-center items-center bg-purple-600 h-dvh">
      <form
        onSubmit={handleSubmit(loginHandle)}
        className="flex flex-col justify-center items-center gap-y-5 w-2/3 xs:w-1/2 xl:w-1/3 p-6 xs:p-12 xl:p-20 rounded-3xl bg-zinc-900"
      >
        <h2 className="text-2xl text-white font-roboto-reg tracking-widest">
          Login
        </h2>
        <div className="w-full flex flex-col gap-y-1.5">
          <input
            {...register("identifier")}
            type="text"
            id="identifier"
            placeholder="username or phone "
            className="w-full bg-transparent text-center text-white rounded-full p-3 border-2 border-blue-600  outline-none focus:border-green-500"
          />
          <span className="text-sm text-red-600">
            {errors.identifier && errors.identifier.message}
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
        <button type="sumbit" className="w-1/2 p-3 flex items-center justify-center bg-transparent text-center text-white rounded-full  border-2 border-green-500  font-roboto-reg text-lg">
          submit
        </button>
        <p className="text-purple-400 text-center">
          Dont have account ?{" "}
          <Link href={"/register"} className="text-white ">
            register
          </Link>
        </p>
      </form>
    </div>
  );
}
