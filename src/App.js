import Header from "./Components/Header";
import Body from "./Components/Body";
import SideBar from "./Components/SideBar";
import SideBarExpanded from "./Components/SideBarExpanded";
import { Provider, useSelector } from "react-redux";
import appStore from "./ReduxStore/appStore";
import { UseSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainVideoContainer from "./Components/MainVideoContainer";
import WatchPage from "./Components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/watch",
      element: <WatchPage />,
    },
  ]);

  // console.log(selector);
  return (
    <Provider store={appStore}>
      <Header />
      <RouterProvider router={appRouter}>
        <Body />
        <WatchPage />
      </RouterProvider>
    </Provider>
  );
}

export default App;

//
