import React from "react";
import "./SpecialDiscount.css";
import { FcEngineering } from "react-icons/fc";

const SpecialDiscount = () => {
  const items = [
    { id: 1, name: "Tomato with Tofu Salad", price: "Rp 97.750,00", originalPrice: "Rp 115.000,00", discount: "15%", available: 12, image: "https://www.connoisseurusveg.com/wp-content/uploads/2022/05/tofu-salad-fb.jpg" },
    { id: 2, name: "Japanese Chicken Gyoza", price: "Rp 81.700,00", originalPrice: "Rp 96.000,00", discount: "15%", available: 8, image: "https://static.vecteezy.com/system/resources/previews/026/974/407/large_2x/close-up-top-view-of-ingredients-age-gyoza-chicken-japanese-food-ai-generated-photo.jpg" },
    { id: 3, name: "2pcs of Amazing Avocado", price: "Rp 68.000,00", originalPrice: "Rp 80.000,00", discount: "15%", available: 10, image: "https://watermark.lovepik.com/photo/20211121/large/lovepik-avocado-picture_500586582.jpg" },
    { id: 4, name: "Lettuce with Stuff", price: "Rp 170.000,00", originalPrice: "Rp 200.000,00", discount: "15%", available: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xlmmHh7ys0q7miWzp3YhdCUdZf3yLetrJQ&s" }
  ];

  return (
    <div className="discount-section">
      <div className="top-section">
        <h1 className="restaurant-name"><FcEngineering /> Kans Resto</h1>
      </div>
      <div className="header">
        <h2>Special Discount Today</h2>
        <div className="countdown-box">
          <span className="countdown">Ends in</span>
          <span className="time">12:10:09</span>
        </div>
      </div>
      <div className="items-container">
        {items.map((item) => (
          <div className="item-card" key={item.id}>
            <div className="image-container">
              <img src={item.image} alt={item.name} className="item-image" />
              <span className="availability">Available: {item.available}</span>
            </div>
            <h3 className="item-name">{item.name}</h3>
            <div className="price-container">
              <div className="top-row">
                <span className="discount">16%</span>
                <span className="original-price">{item.originalPrice}</span>
              </div>
              <button className="order-button">Order</button>
              <p className="discounted-price">{item.price}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialDiscount;