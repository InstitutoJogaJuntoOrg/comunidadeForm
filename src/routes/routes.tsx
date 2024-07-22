import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layout/default";
import { PrivateRoute } from "./private";
import { LoginPage } from "../pages/auth/login";
import { NewPassword } from "../pages/auth/password/confirm";
import { PasswordReset } from "../pages/auth/password";
import { RegisterPage } from "../pages/auth/register";
import { FormPage } from "../pages/form/form";
import { HomePage } from "../pages/home";



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/inscricao" element={<PrivateRoute> <FormPage /> </PrivateRoute>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth" element={<LoginPage  />} />
        <Route path="/reset" element={<PasswordReset  />} />
        <Route path="/newpassword" element={<NewPassword  />} />
        <Route path="/portal-do-titular" element={<LoginPage />} />

      </Route>
    </Routes>
  );
}
