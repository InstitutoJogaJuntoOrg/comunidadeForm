import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layout/default";
import { PrivateRoute } from "./private";
import { NewPassword } from "../pages/auth/password/confirm";
import { PasswordReset } from "../pages/auth/password";
import { RegisterPage } from "../pages/auth/register";
import { HomePage } from "../pages/home";



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/inscricao" element={<PrivateRoute> <HomePage /> </PrivateRoute>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/auth" element={<HomePage  />} />
        <Route path="/reset" element={<PasswordReset  />} />
        <Route path="/newpassword" element={<NewPassword  />} />
        <Route path="/portal-do-titular" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
