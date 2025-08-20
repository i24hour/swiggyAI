
import React from "react";
import { useCart } from "@/contexts/CartContext";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { toast } from "@/hooks/use-toast";

const CartPage = () => {
  const { items, removeItem, clearCart, getTotalPrice } = useCart();

  const handleCheckout = () => {
    toast({
      title: "Order placed successfully!",
      description: "Your order has been placed and will be delivered soon.",
    });
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add some delicious food to get started</p>
            <Button asChild>
              <a href="/">Browse Restaurants</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        
        <div className="space-y-6">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between">
                  <CardTitle>{item.name}</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-red-500"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-sm text-gray-500">
                  From {item.restaurant.name} ({item.restaurant.rating} ⭐)
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <div className="text-sm">Quantity: {item.quantity}</div>
                    {item.customization && (
                      <div className="text-sm text-gray-600">
                        {item.customization}
                      </div>
                    )}
                  </div>
                  <div className="font-semibold">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 border-t pt-4">
          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total</span>
            <span>₹{getTotalPrice().toFixed(2)}</span>
          </div>
          <Button 
            className="w-full py-6" 
            size="lg"
            onClick={handleCheckout}
          >
            Proceed to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

import { ShoppingBag } from "lucide-react";

export default CartPage;
