import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routs/navigation/navigation";
import Home from "./components/routs/home/home";
import SignIn from "./components/routs/sign-in/sign-in";
const Shop = () => {
  return <h1>ddddddd</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
