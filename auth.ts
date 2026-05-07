// la seguridad la deja,os solamente el el main.ts
// funcion para cerrar sesion
export function logout() {
// borramos usuario loguado
  localStorage.removeItem("userData");
//redirigimos al login
  window.location.href = "/src/pages/auth/login/login.html";
}