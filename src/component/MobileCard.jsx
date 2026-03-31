import React from "react";

const MobileCard = ({ productData }) => {
  return (
    <div className="w-full flex items-center justify-around gap-10 bg-[#393939] mx-5 rounded-xl">
      <div className="flex items-center justify-around text-white">
        <img
          className="p-15 h-80"
          src={productData.image}
          alt={productData.title}
        />
        <div className="w-[800px]">
          <h1>{productData.title}</h1>
          <p className="text-gray-400">
            ⭐️ {productData.rating} | {productData.reviews}
          </p>
          <ul className="list-disc pl-5 text-gray-300">
            {productData.details.map((info, idx) => {
              return <li key={idx}>{info}</li>;
            })}
          </ul>
          <p className="text-green-500">{productData.offers.exchangeOffer}</p>
          <p className="text-green-300">{productData.offers.bankOffer}</p>
        </div>
      </div>
      <div className="text-white">
        <h3>{productData.price}</h3>
        <h4 className="line-through text-gray-500">
          {productData.originalPrice}
        </h4>
        <p className="text-green-500">{productData.discount}</p>
      </div>
    </div>
  );
};

export default MobileCard;
