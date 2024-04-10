import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteLayout from './pages/RootLayout/RootLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import AuthPage from './pages/AuthPage/AuthPage';
import Innovation from './pages/Home/Innovation';

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/innovations",
        element: <Innovation/>
      },
      {
        path: "/contactus",
        element: <ContactUs/>,
      },
      {
        path: "/authpage",
        element: <AuthPage/>
      }
    ],
  },
]);
return (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);
}
export default App;
