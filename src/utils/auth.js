import { cookies } from "next/headers";

export const authUser = async () => {
  const res = await fetch("http://localhost:4002/auth/me", {
    headers: {
      Cookie: cookies().toString(),
    },
  });
  const data = await res.json();

  if (res.status === 200) {
    return data;
  } else {
    return false
  }
};
