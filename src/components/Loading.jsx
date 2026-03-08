import React from "react";
import { ChefHat } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ChefHat
        size={100}
        className="text-amber-500 animate-spin"
      />
      <p className="text-black mt-3 text-lg font-semibold">
        Cooking something delicious...
      </p>
    </div>
  );
};

export default Loading;
