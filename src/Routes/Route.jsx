import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Registration from "../Components/Registration";
import Profile from "../Components/Profile";
import AllCrops from "../Components/AllCrops";
import PrivateRoute from "./PrivateRoute";
import AddCrops from "../Components/AddCrops";
import Error from "../Pages/Error";
import CardDetails from "../Components/CardDetails";
import MyPost from "../Pages/MyPost";
import EditModal from "../Pages/EditModal";
import MyInterest from "../Pages/MyInterest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/all-crops",
        element: <AllCrops></AllCrops>,
      },
      {
        path: "/add-crops",
        element: (
          <PrivateRoute>
            <AddCrops></AddCrops>
          </PrivateRoute>
        ),
      },
      {
        path: "/crops/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPost",
        element: (
          <PrivateRoute>
            <MyPost></MyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/myInterest",
        element: (
          <PrivateRoute>
            <MyInterest></MyInterest>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default router;
