
import React from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NavbarCartButton = () => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <Link to="/cart">
      <Button variant="ghost" className="relative">
        <ShoppingBag className="h-5 w-5" />
        {itemCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center rounded-full text-xs"
          >
            {itemCount}
          </Badge>
        )}
      </Button>
    </Link>
  );
};

export default NavbarCartButton;
