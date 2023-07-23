import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader";

const SearchScreen = React.lazy(() => import("./pages/SearchScreen"));
const ShowScreen = React.lazy(() => import("./pages/ShowScreen"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchScreen />,
  },
  {
    path: "/showDetails",
    element: <ShowScreen />,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <React.Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </Provider>
  );
};

export default App;
