import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground">
          <span>Free shipping on orders over $100</span>
          <div className="flex items-center gap-4">
            <span>📧 support@niftazafrica.com</span>
            <span>📞 +234 123 456 7890</span>
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Niftaz Africa</h1>
              <p className="text-xs text-muted-foreground">Premium Electronics</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search for electronics, smartphones, laptops..." 
                className="pl-10 pr-4 h-12 rounded-full border-2 focus:border-primary"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-accent text-accent-foreground">
                2
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 py-3 border-t border-border">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Smartphones
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Laptops
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Audio
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Gaming
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Accessories
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Smart Home
          </Button>
          <Button variant="accent" size="sm" className="ml-auto">
            🔥 Hot Deals
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
