import shoe01 from "../assets/images/products/shoe01.png";
import shoe02 from "../assets/images/products/shoe02.png";
import shoe03 from "../assets/images/products/shoe03.png";
import shoe04 from "../assets/images/products/shoe04.png";
const mockproducts = [
  {
    category: "Women",
    products: [
      { _id: 1, title: "Women Sneakers", price: 120, image: shoe01 },
      { _id: 2, title: "Running Shoes", price: 150, image: shoe02 },
      { _id: 3, title: "Stylish Boots", price: 180, image: shoe03 },
      { _id: 4, title: "Casual Walkers", price: 110, image: shoe04 },
    ],
  },
  {
    category: "Men",
    products: [
      { _id: 7, title: "Men Sneakers", price: 130, image: shoe01 },
      { _id: 8, title: "Leather Boots", price: 220, image: shoe02 },
      { _id: 9, title: "Sports Runner", price: 160, image: shoe03 },
      { _id: 10, title: "Street shoes", price: 125, image: shoe04 },
    ],
  },
  {
    category: "Unisex",
    products: [
      { _id: 11, title: "Unisex Sneakers", price: 140, image: shoe01 },
      { _id: 12, title: "High Tops", price: 155, image: shoe02 },
      { _id: 13, title: "Casual Trainers", price: 135, image: shoe03 },
      { _id: 14, title: "Urban Sneakers", price: 140, image: shoe04 },
    ],
  },
  {
    category: "Casual",
    products: [
      { _id: 15, title: "Casual Slip-ons", price: 95, image: shoe01 },
      { _id: 16, title: "Comfort Shoes", price: 100, image: shoe02 },
      { _id: 17, title: "Daily Sneakers", price: 110, image: shoe03 },
      { _id: 18, title: "Canvas Shoes", price: 105, image: shoe04 },
    ],
  },
];
export default mockproducts;
