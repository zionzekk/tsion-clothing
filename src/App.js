import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routs/navigation/navigation";
import Home from "./components/routs/home/home";
const Shop = () => {
  return <h1>ddddddd</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
