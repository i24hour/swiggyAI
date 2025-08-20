
import React from "react";
import Navbar from "@/components/Navbar";
import Greeting from "@/components/Greeting";
import FoodCategory from "@/components/FoodCategory";
import RestaurantCard from "@/components/RestaurantCard";
import FoodChatbot from "@/components/FoodChatbot";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample food category data
const foodCategories = [
  { id: 1, name: "Pizzas", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 2, name: "Biryani", image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 3, name: "Rolls", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 4, name: "Chole Bhature", image: "https://images.unsplash.com/photo-1627662168223-7df99068099a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 5, name: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 6, name: "Dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 7, name: "Cakes", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 8, name: "Thali", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 9, name: "Chinese", image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 10, name: "Ice Cream", image: "https://images.unsplash.com/photo-1629385744945-4571c533e28e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
];

// Top 10 food items
const topTenFoods = [
  { id: 1, name: "Butter Chicken", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 2, name: "Margherita Pizza", image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 3, name: "Masala Dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 4, name: "Chicken Biryani", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 5, name: "Paneer Tikka", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 6, name: "Veg Burger", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 7, name: "Chocolate Cake", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 8, name: "Pav Bhaji", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 9, name: "Tandoori Chicken", image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
  { id: 10, name: "Chole Bhature", image: "https://images.unsplash.com/photo-1627662168223-7df99068099a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
];

// Sample restaurant data
const restaurants = [
  {
    id: 1,
    name: "Punjabi Dhaba- P.D.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    deliveryTime: "15-20 mins",
    cuisines: ["North Indian", "Chinese", "Tandoor"],
    location: "Bus Stand",
    offer: "50% OFF UPTO ₹100"
  },
  {
    id: 2,
    name: "Hotel Prakash & Restaurant",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    deliveryTime: "10-15 mins",
    cuisines: ["North Indian", "South Indian", "Tandoor"],
    location: "Roorkee Talkies",
    offer: "66% OFF UPTO ₹130"
  },
  {
    id: 3,
    name: "The Cook House",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    cuisines: ["Chinese", "Italian", "Desserts", "Tandoor"],
    location: "Civil Lines",
    offer: "₹125 OFF ABOVE ₹199"
  },
  {
    id: 4,
    name: "KFC",
    image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    deliveryTime: "20-25 mins",
    cuisines: ["Burgers", "Fast Food", "Rolls"],
    location: "Roorkee",
    offer: "ITEMS AT ₹64"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="border-b pb-1">
        <Greeting username="PRIYANSHU" />
        <FoodCategory title="" categories={foodCategories} />
      </div>

      {/* Top 10 section */}
      <div className="border-b pb-1">
        <FoodCategory 
          title="Top 10" 
          categories={topTenFoods}
          showTopLabel={true}
        />
      </div>

      {/* Restaurants section */}
      <div className="my-8 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Top restaurant chains in Roorkee</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full border bg-white hover:bg-gray-100">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full border bg-white hover:bg-gray-100">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
      
      {/* Add the chatbot component */}
      <FoodChatbot />
    </div>
  );
};

export default Index;
