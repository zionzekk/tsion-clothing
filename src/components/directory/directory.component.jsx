// import "./components/directory.styles.scss";
import CatagoryItem from "../catagories/catagory-item.component.jsx";

const Directory = ({ categories }) => (
  <div className="directory-container">
    {categories.map((category) => (
      <CatagoryItem key={categories.id} category={category} />
    ))}
  </div>
);

export default Directory;
