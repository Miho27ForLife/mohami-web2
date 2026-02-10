import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import PublicLayout from "../layouts/PublicLayout.jsx";
import AppLayout from "../layouts/AppLayout.jsx";

// Public pages
import Home from "../../pages/public/Home.jsx";
import About from "../../pages/public/About.jsx";
import Contact from "../../pages/public/Contact.jsx";
import Pricing from "../../pages/public/Pricing.jsx";
import ServicesHub from "../../pages/public/ServicesHub.jsx";
import ServicesCategory from "../../pages/public/ServicesCategory.jsx";
import ServiceDetails from "../../pages/public/ServiceDetails.jsx";
import LibraryList from "../../pages/public/LibraryList.jsx";
import LibraryDetails from "../../pages/public/LibraryDetails.jsx";
import Privacy from "../../pages/public/Privacy.jsx";
import Terms from "../../pages/public/Terms.jsx";

// App pages
import Dashboard from "../../pages/app/Dashboard.jsx";

function NotFound() {
  return <div>404 — Page not found</div>;
}

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/pricing", element: <Pricing /> },

      // Services
      { path: "/services", element: <ServicesHub /> },
      { path: "/services/:category", element: <ServicesCategory /> },
      { path: "/services/:category/:id", element: <ServiceDetails /> },

      // Library
      { path: "/library", element: <LibraryList /> },
      { path: "/library/:id", element: <LibraryDetails /> },

      // Policies
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },
    ],
  },

  // Authenticated App
  {
    path: "/app",
    element: <AppLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  },

  { path: "*", element: <NotFound /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
