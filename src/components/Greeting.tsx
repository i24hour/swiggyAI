
import React from "react";

interface GreetingProps {
  username: string;
}

const Greeting: React.FC<GreetingProps> = ({ username }) => {
  return (
    <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mt-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        {username}, what's on your mind?
      </h1>
    </div>
  );
};

export default Greeting;
