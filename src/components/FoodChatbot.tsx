
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, MicOff, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { v4 as uuidv4 } from "uuid";

interface ChatMessage {
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const FoodChatbot: React.FC = () => {
  const { toast } = useToast();
  const { addItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Hello! I'm your food ordering assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Speech recognition setup
  const recognition = useRef<SpeechRecognition | null>(null);
  
  // Safe check for window and SpeechRecognition
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognition.current = new SpeechRecognition();
        recognition.current.continuous = true;
        recognition.current.interimResults = true;
      }
    }
  }, []);

  // Scroll to bottom of chat when messages change
  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Process user input and generate a response
  const processUserInput = async (input: string) => {
    // Add user message to chat
    const userMessage: ChatMessage = {
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Check if message is an order
    if (input.toLowerCase().includes("order") || input.toLowerCase().includes("get me")) {
      // Parse order details (simple parsing example)
      const orderDetails = parseOrderInput(input);
      
      // Generate a random rating between 3.5 and 5.0
      const randomRating = parseFloat((Math.random() * 1.5 + 3.5).toFixed(1));
      
      // Add to cart
      const item = {
        id: uuidv4(),
        name: orderDetails.item,
        quantity: orderDetails.quantity,
        price: Math.floor(Math.random() * orderDetails.maxPrice || 100) + 20,
        restaurant: {
          name: orderDetails.restaurant || getRandomRestaurant(),
          rating: orderDetails.minRating || randomRating
        },
        customization: orderDetails.customization
      };

      addItem(item);

      // Generate response
      const botMessage: ChatMessage = {
        text: `🎉 Great! I've added ${orderDetails.quantity} ${orderDetails.item} ${orderDetails.customization ? 'with ' + orderDetails.customization : ''} to your cart from ${item.restaurant.name} (${item.restaurant.rating} ⭐️). The total cost is ₹${(item.price * orderDetails.quantity).toFixed(2)}.`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);

      // Show toast notification
      toast({
        title: "Item added to cart",
        description: `${orderDetails.quantity} ${orderDetails.item} from ${item.restaurant.name}`,
      });
    } else {
      // General response for non-order messages
      const botMessage: ChatMessage = {
        text: "I can help you order food! Try saying something like 'Order 2 samosas under ₹100 with green chutney'",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  // Parse order input
  const parseOrderInput = (input: string) => {
    // Simple parsing logic - in a real app, use NLP for better understanding
    const text = input.toLowerCase();
    const quantityMatch = text.match(/(\d+)\s+([a-zA-Z\s]+)/);
    const quantity = quantityMatch ? parseInt(quantityMatch[1]) : 1;
    
    // Extract item name using regex
    let itemName = "food item";
    if (quantityMatch) {
      const rawItemName = quantityMatch[2].trim();
      itemName = rawItemName.split(" with ")[0].split(" from ")[0].split(" under ")[0].trim();
    }

    // Extract price constraint
    const priceMatch = text.match(/under\s+(?:₹|rs\.?\s*)?(\d+)/i);
    const maxPrice = priceMatch ? parseInt(priceMatch[1]) : 200;

    // Extract restaurant name if specified
    const restaurantMatch = text.match(/from\s+([a-zA-Z\s]+)(?:with|under|$)/i);
    let restaurant = null;
    if (restaurantMatch && !restaurantMatch[1].includes("rating")) {
      restaurant = restaurantMatch[1].trim();
    }

    // Extract rating if specified
    const ratingMatch = text.match(/(\d+\.?\d*)\s*(?:rating|star)/i);
    const minRating = ratingMatch ? parseFloat(ratingMatch[1]) : null;

    // Extract customization
    const customizationMatch = text.match(/with\s+([a-zA-Z\s]+)(?:from|under|$)/i);
    const customization = customizationMatch ? customizationMatch[1].trim() : null;

    return {
      item: itemName,
      quantity,
      maxPrice,
      restaurant,
      minRating,
      customization
    };
  };

  // Get random restaurant name
  const getRandomRestaurant = (): string => {
    const restaurants = [
      "Biryani Palace",
      "Spice Garden",
      "Food Express",
      "Tandoori Delights",
      "Curry House",
      "Royal Flavors",
      "Foodie's Corner",
      "Taste of India"
    ];
    return restaurants[Math.floor(Math.random() * restaurants.length)];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      await processUserInput(userInput);
    }
  };

  const toggleSpeechRecognition = () => {
    if (!recognition.current) {
      toast({
        title: "Speech Recognition Not Available",
        description: "Your browser doesn't support speech recognition.",
        variant: "destructive",
      });
      return;
    }

    if (isListening) {
      // Stop listening
      recognition.current.stop();
      setIsListening(false);
    } else {
      // Start listening
      try {
        recognition.current.start();
        setIsListening(true);

        recognition.current.onresult = (event) => {
          const transcript = Array.from(event.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join("");
          
          setUserInput(transcript);
        };

        recognition.current.onend = () => {
          setIsListening(false);
        };

      } catch (error) {
        console.error("Speech recognition error:", error);
        setIsListening(false);
        toast({
          title: "Speech Recognition Error",
          description: "There was an error with the speech recognition service.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat dialog */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-lg shadow-xl z-50 flex flex-col">
          {/* Chat header */}
          <div className="p-4 border-b flex justify-between items-center bg-primary text-white rounded-t-lg">
            <h3 className="font-semibold">Food Assistant</h3>
            <Button variant="ghost" className="h-8 w-8 p-0 text-white" onClick={() => setIsOpen(false)}>
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </Button>
          </div>
          
          {/* Chat messages container */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Input form */}
          <form onSubmit={handleSubmit} className="p-4 border-t bg-gray-50">
            <div className="flex gap-2">
              <Input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your order..."
                className="flex-1"
              />
              <Button
                type="button"
                size="icon"
                variant={isListening ? "destructive" : "outline"}
                onClick={toggleSpeechRecognition}
                className="flex-shrink-0"
              >
                {isListening ? <MicOff /> : <Mic />}
              </Button>
              <Button type="submit" className="flex-shrink-0">
                Send
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default FoodChatbot;
