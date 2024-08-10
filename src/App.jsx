import React, { useEffect, useState } from "react";
import Category from "./components/Category/category";
import Header from "./components/Header/header";
import axios from "./axios";
import Loading from "./components/Loading/loading";
import FastFoodList from "./components/FastFoodList/fastFoodList";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState([]);

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`,
    );

    setLoading(false);
    setFastFoodItems(response.data);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };
  const filterItems = (categoryId) => {
    fetchData(categoryId);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Category filterItems={filterItems} />
      <div className="container mt-10">{renderContent()}</div>
    </>
  );
}
export default App;
