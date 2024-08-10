import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Loading from "../Loading/loading";
import './category.scss'
import SearchBar from "../SearchBar/searchBar";

const Category = ({ filterItems }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategories(response.data);
      setLoading(false);
    };
    fetchCategories();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="flex justify-between w-full h-full ">
      <ul className="flex h-full items-center  gap-4 px-3">
        <li
          className="h-full min-w-[100px] cursor-pointer border-b border-b-transparent transition-all"
          onClick={() => filterItems()}
        >
          <a
            className="flex h-full w-full items-center justify-center nav-link"
            href="#"
          >
            همه غذاها
          </a>
        </li>
        {categories.map((category) => (
          <li
            className="h-full min-w-[100px] cursor-pointer border-b border-b-transparent transition-all "
            onClick={() => filterItems(category.id)}
            key={category.id}
          >
            <a
              className="flex h-full w-full items-center justify-center nav-link"
              href="#"
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
      <SearchBar/>
      </div>
    );
  };

  return (
    <div>
      <nav className="container">
        <div className="box-nav mt-[-30px] flex h-14 items-center justify-center rounded-md bg-white shadow">
          {renderContent()}
        </div>
      </nav>
    </div>
  );
};

export default Category;
