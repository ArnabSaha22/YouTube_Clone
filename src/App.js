import Header from "./Components/Header";
import Body from "./Components/Body";
import SideBar from "./Components/SideBar";
import SideBarExpanded from "./Components/SideBarExpanded";
import { Provider, useSelector } from "react-redux";
import appStore from "./ReduxStore/appStore";
import { UseSelector } from "react-redux";

function App() {

 // console.log(selector);
  return (
    <Provider store={appStore}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
