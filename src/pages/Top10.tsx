
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FoodChatbot from "@/components/FoodChatbot";

// Sample data for top 10 foods
const topTenFoods = [
  { id: 1, name: "Butter Chicken", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", buyCount: "25,430" },
  { id: 2, name: "Margherita Pizza", image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", buyCount: "22,156" },
  { id: 3, name: "Masala Dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", buyCount: "20,845" },
  { id: 4, name: "Chicken Biryani", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", buyCount: "18,670" },
  { id: 5, name: "Paneer Tikka", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", buyCount: "16,980" },
  { id: 6, name: "Veg Burger", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", buyCount: "15,210" },
  { id: 7, name: "Chocolate Cake", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", buyCount: "14,560" },
  { id: 8, name: "Pav Bhaji", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", buyCount: "13,875" },
  { id: 9, name: "Tandoori Chicken", image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", buyCount: "13,120" },
  { id: 10, name: "Chole Bhature", image: "https://images.unsplash.com/photo-1627662168223-7df99068099a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", buyCount: "12,345" },
];

// Sample data for top 10 restaurants
const topTenRestaurants = [
  { id: 1, name: "The Spice Factory", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", orders: "5,230" },
  { id: 2, name: "Curry House", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", orders: "4,980" },
  { id: 3, name: "Pizza Paradise", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", orders: "4,750" },
  { id: 4, name: "Biryani Palace", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", orders: "4,210" },
  { id: 5, name: "Chinese Wok", image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", orders: "3,965" },
  { id: 6, name: "Burger Junction", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", orders: "3,780" },
  { id: 7, name: "South Indian Delights", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", orders: "3,650" },
  { id: 8, name: "Punjabi Tadka", image: "https://images.unsplash.com/photo-1517057011470-8f36d636e6ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", orders: "3,420" },
  { id: 9, name: "Cafe Italia", image: "https://images.unsplash.com/photo-1557642994-d39619e25efb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", orders: "3,210" },
  { id: 10, name: "Street Food Corner", image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", orders: "3,050" },
];

const Top10 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="my-8 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="border-b pb-4 mb-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Top 10</h1>
          <p className="text-gray-600">Most popular items and restaurants this week</p>
        </div>

        <Tabs defaultValue="foods" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-gray-100 h-12">
              <TabsTrigger 
                value="foods" 
                className="data-[state=active]:bg-brand-orange data-[state=active]:text-white px-8"
              >
                Top 10 Foods
              </TabsTrigger>
              <TabsTrigger 
                value="restaurants" 
                className="data-[state=active]:bg-brand-orange data-[state=active]:text-white px-8"
              >
                Top 10 Restaurants
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="foods">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {topTenFoods.map((food) => (
                <div key={food.id} className="flex items-center gap-4 bg-white rounded-lg border p-4 hover:shadow-md transition-shadow">
                  <div className="font-bold text-3xl text-brand-orange">{food.id}.</div>
                  <div className="relative overflow-hidden rounded-lg w-32 h-32 flex-shrink-0">
                    <img 
                      src={food.image} 
                      alt={food.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-800">{food.name}</h3>
                    <p className="text-gray-600 mt-1">
                      <span className="font-semibold">{food.buyCount}</span> orders this week
                    </p>
                    <Button className="mt-3 bg-brand-orange hover:bg-brand-orange/90">
                      Order Now <ArrowRight className="ml-1" size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="restaurants">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topTenRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="flex items-center gap-4 bg-white rounded-lg border p-4 hover:shadow-md transition-shadow">
                  <div className="font-bold text-3xl text-brand-orange">{restaurant.id}.</div>
                  <div className="relative overflow-hidden rounded-lg w-32 h-32 flex-shrink-0">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-800">{restaurant.name}</h3>
                    <p className="text-gray-600 mt-1">
                      <span className="font-semibold">{restaurant.orders}</span> orders this week
                    </p>
                    <Button className="mt-3 bg-brand-orange hover:bg-brand-orange/90">
                      Order Now <ArrowRight className="ml-1" size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Add the chatbot component */}
      <FoodChatbot />
    </div>
  );
};

export default Top10;
