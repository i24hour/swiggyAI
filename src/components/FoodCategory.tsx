
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

interface FoodCategoryProps {
  title: string;
  categories: {
    id: number;
    name: string;
    image: string;
  }[];
  showTopLabel?: boolean;
  topLabel?: string;
}

const FoodCategory = ({ title, categories, showTopLabel = false, topLabel = "TOP 10" }: FoodCategoryProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.8;
      
      const newScrollLeft = direction === "right" 
        ? scrollLeft + scrollAmount 
        : scrollLeft - scrollAmount;
      
      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      // Update arrow visibility after scrolling
      setTimeout(() => {
        if (sliderRef.current) {
          const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
          setShowLeftArrow(scrollLeft > 0);
          setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
        }
      }, 300);
    }
  };

  return (
    <div className="my-8 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => scroll("left")}
            className={`p-2 rounded-full border ${showLeftArrow ? 'bg-white hover:bg-gray-100' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}
            disabled={!showLeftArrow}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className={`p-2 rounded-full border ${showRightArrow ? 'bg-white hover:bg-gray-100' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}
            disabled={!showRightArrow}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide py-2 pb-4 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center min-w-[120px] sm:min-w-[150px]">
            <div className="relative">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full"
              />
              {showTopLabel && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                  {topLabel}
                </div>
              )}
            </div>
            <p className="mt-2 text-gray-800 font-medium text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
