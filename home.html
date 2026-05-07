import type { IUser } from "./types/IUser";
import { Rol } from "./types/rol"

//protegemos rutas del sistema
function checkAuth() {

//obtenemos usuario logueado si exixte
  const user: IUser | null = JSON.parse(localStorage.getItem("userData") || "null");

//obtenemos ruta actual
  const path = window.location.pathname;

  //Si no hay usuario y no esta en login y registro lo mandamos al login
  if (!user && !path.includes("login") && !path.includes("registro")) {
    window.location.href = "/src/pages/auth/login/login.html";
    return;
  }

//si hay usuario logueado
  if (user) {
    // Cliente intentando entrar a admin
    if (path.includes("/admin") && user.rol !== Rol.ADMIN) {
      window.location.href = "/src/pages/client/home/home.html";
    }

    // Admin entrando a client
    if (path.includes("/client") && user.rol !== Rol.CLIENT) {
      window.location.href = "/src/pages/admin/home/home.html";
    }
  }
}
// proteccion en todas las paginas
checkAuth();