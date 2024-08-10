import React from "react";
import "./fastFood.scss";
import { HiShoppingCart } from "react-icons/hi";
const FastFoodList = ({ fastFoodItems }) => {
  return (
    <div className="fast-food grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {fastFoodItems.map((fastFood) => {
        return (
          <div
            className="fastFood-box overflow-hidden rounded-lg border text-justify"
            key={fastFood.id}
          >
            <div className="box-img relative mb-3">
              <img
                className="h-full w-full"
                src={fastFood.imageUrl}
                alt={fastFood.name}
              />
              <p className="absolute right-2 top-2 rounded-lg bg-red-500 p-2 text-center text-sm text-white">
                قیمت : {fastFood.price}
                <span className="mr-1">تومان</span>
              </p>
            </div>
            <div className="box-detail px-2">
              <h3 className="mb-3 text-lg text-gray-900">{fastFood.name}</h3>
              <p className="mb-3 min-h-[60px] text-sm text-gray-700">
                {fastFood.ingredients}
              </p>
              <a
                className="mb-3 flex items-center justify-center gap-2 rounded-lg bg-red-500 p-2 text-sm text-white"
                href=""
              >
                <HiShoppingCart />
                افزودن به سبد خرید
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;
