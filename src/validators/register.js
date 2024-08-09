import * as yup from "yup";

const registerValidator = yup.object().shape({
  username: yup
    .string()
    .min(3, "نام حداقل باید ۳ کارکتر باشد")
    .required("وارد کردن این فیلد الزامیست"),
  phone: yup
    .string()
    .matches(/^09[0-9]{9}$/)
    .required("وارد کردن این فیلد الزامیست"),
  password: yup
    .string()
    .required("رمز عبور خود را وارد نمایید")
    .min(6, "رمز عبور باید حداقل ۶ کارکتر باشد")
    .max(20, "رمز عبور باید حذاکثر ۲۰ کارکتر باشد")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "رمز عبور باید حاوی حروف بزرگ و کوچک و اعداد و علائم باشد"
    ),
});

export default registerValidator;
