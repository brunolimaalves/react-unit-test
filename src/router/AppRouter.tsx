import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import NotFound from '../components/NotFound'

export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}
            errorElement={<NotFound />}
            children={[
            <Route key="login" path="login" element={<h1>Login page</h1>} />,
            <Route key="profile" path="profile" element={<h1>Profile page</h1>} />,
            <Route key="settings" path="settings" element={<h1>Settings page</h1>} />,
            <Route key="dash" path="dash" element={<h1>Protected Layout</h1>} />,
            ]}
        />
      </>
    )
  );