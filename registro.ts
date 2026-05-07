import type { IUser } from "../../../types/IUser";
import { Rol } from "../../../types/rol";

const form = document.querySelector<HTMLFormElement>("#registroForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const email = data.get("email") as string;
    const password = data.get("password") as string;

    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

    const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.some((u) => u.email === email);

    if (exists) {
      alert("El usuario ya existe");
      return;
    }

    const newUser: IUser = {
      email,
      password,
      rol: Rol.CLIENT,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Usuario registrado correctamente");
    window.location.href = "/src/pages/auth/login/login.html";
  });
}