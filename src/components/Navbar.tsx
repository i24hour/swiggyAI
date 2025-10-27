
import { Search, HelpCircle, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import NavbarCartButton from "./NavbarCartButton";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Navbar = () => {
  const { toast } = useToast();
  const [searchOpen, setSearchOpen] = useState(false);

  const handleCorporateClick = () => {
    toast({
      title: "Swiggy Corporate",
      description: "Feature coming soon!",
    });
  };

  const handleSearchClick = () => {
    setSearchOpen(true);
    toast({
      title: "Search",
      description: "Use the AI chatbot to search and order food!",
    });
  };

  const handleHelpClick = () => {
    toast({
      title: "Help & Support",
      description: "Need help? Use our AI chatbot for instant assistance!",
    });
  };

  const handleProfileClick = () => {
    toast({
      title: "Profile",
      description: "Welcome, Priyanshu!",
    });
  };

  const handleLocationClick = () => {
    toast({
      title: "Change Location",
      description: "Location selection coming soon!",
    });
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="h-12 w-12 bg-brand-orange rounded-md flex items-center justify-center hover:bg-brand-orange/90 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m19 16-4-4 4-4"></path>
                  <path d="m5 8 4 4-4 4"></path>
                  <path d="M9 5v14"></path>
                  <path d="M15 5v14"></path>
                </svg>
              </div>
            </Link>
            <div className="ml-4">
              <button 
                onClick={handleLocationClick}
                className="flex items-center text-gray-800 hover:text-brand-orange transition-colors"
              >
                <span className="font-semibold">Other</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center space-x-6">
            <Link to="/top10" className="flex items-center text-gray-700 hover:text-brand-orange transition-colors cursor-pointer">
              <Trophy className="h-5 w-5 mr-2" />
              <span>Top 10</span>
            </Link>
            
            <button 
              onClick={handleCorporateClick}
              className="flex items-center text-gray-700 hover:text-brand-orange transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M9 21V9"></path>
              </svg>
              <span>Swiggy Corporate</span>
            </button>
            
            <button 
              onClick={handleSearchClick}
              className="flex items-center text-gray-700 hover:text-brand-orange transition-colors cursor-pointer"
            >
              <Search className="h-5 w-5 mr-2" />
              <span>Search</span>
            </button>
            
            <button 
              onClick={handleHelpClick}
              className="flex items-center text-gray-700 hover:text-brand-orange transition-colors cursor-pointer"
            >
              <div className="relative">
                <HelpCircle className="h-5 w-5 mr-2" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-1 rounded-full">NEW</span>
              </div>
              <span>Help</span>
            </button>
            
            <button 
              onClick={handleProfileClick}
              className="flex items-center text-gray-700 hover:text-brand-orange transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Priyanshu</span>
            </button>
            
            <NavbarCartButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
