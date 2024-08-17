import * as Yup from "yup";

export const validation = Yup.object({
  email: Yup.string()
    .email("Неверный адрес электронной почты")
    .required("Обязательное поле"),
  password: Yup.string()
    .min(6, "Пароль должен быть не менее 6 символов")
    .required("Обязательное поле"),
});

export const validationLogin = Yup.object({
  email: Yup.string()
    .email("Неверный формат электронной почты")
    .required("Обязательно для заполнения"),
  password: Yup.string().required("Обязательно для заполнения"),
});
