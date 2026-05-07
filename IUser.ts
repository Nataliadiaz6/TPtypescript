
console.log("LOGIN CARGADO");
import type { IUser } from "../../../types/IUser";
import { Rol } from "../../../types/rol"

// seleccionamos formulario
const form = document.querySelector<HTMLFormElement>("#loginForm");

//validamos
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

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      alert("Credenciales incorrectas");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(user));

    if (user.rol === Rol.ADMIN) {
      window.location.href = "/src/pages/admin/home/home.html";
    } else {
      window.location.href = "/src/pages/client/home/home.html";
    }
  });
}