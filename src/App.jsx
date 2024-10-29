import { Outlet, useNavigation } from "react-router-dom";

import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar.jsx";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <NavBar></NavBar>
      {navigation.state === "loading" ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </>
  );
}

export default App;
