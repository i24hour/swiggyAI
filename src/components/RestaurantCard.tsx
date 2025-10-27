
import React from "react";
import { useToast } from "@/hooks/use-toast";

interface RestaurantCardProps {
  restaurant: {
    id: number;
    name: string;
    image: string;
    rating: number;
    deliveryTime: string;
    cuisines: string[];
    location: string;
    offer?: string;
  };
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const { name, image, rating, deliveryTime, cuisines, location, offer } = restaurant;
  const { toast } = useToast();

  const handleRestaurantClick = () => {
    toast({
      title: `Opening ${name}`,
      description: "Loading menu items...",
    });
  };

  return (
    <div 
      className="group flex flex-col cursor-pointer relative"
      onClick={handleRestaurantClick}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {offer && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-600 to-orange-500 text-white p-2 font-medium">
            {offer}
          </div>
        )}
      </div>
      
      <div className="mt-3">
        <h3 className="font-bold text-gray-800 truncate group-hover:text-brand-orange transition-colors">{name}</h3>
        <div className="flex items-center mt-1">
          <div className="flex items-center bg-green-700 px-1.5 py-0.5 rounded text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="ml-1 text-xs font-medium">{rating}</span>
          </div>
          <span className="mx-2 font-bold text-gray-300">•</span>
          <span className="text-gray-500 text-sm">{deliveryTime}</span>
        </div>
        <p className="text-gray-500 text-sm truncate mt-1">{cuisines.join(", ")}</p>
        <p className="text-gray-500 text-sm mt-0.5">{location}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
