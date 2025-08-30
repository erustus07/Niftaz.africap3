import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Laptop, Headphones, Gamepad2, Home, Camera } from "lucide-react";

const categories = [
  {
    name: "Smartphones",
    icon: Smartphone,
    count: "250+ models",
    color: "bg-primary/10 text-primary",
    description: "Latest flagship and budget phones"
  },
  {
    name: "Laptops",
    icon: Laptop,
    count: "180+ models",
    color: "bg-accent/10 text-accent",
    description: "Gaming, business, and ultrabooks"
  },
  {
    name: "Audio",
    icon: Headphones,
    count: "120+ products",
    color: "bg-secondary/10 text-secondary",
    description: "Headphones, speakers, earbuds"
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    count: "90+ items",
    color: "bg-primary/10 text-primary",
    description: "Consoles, accessories, gear"
  },
  {
    name: "Smart Home",
    icon: Home,
    count: "70+ devices",
    color: "bg-accent/10 text-accent",
    description: "IoT devices, smart assistants"
  },
  {
    name: "Cameras",
    icon: Camera,
    count: "60+ models",
    color: "bg-secondary/10 text-secondary",
    description: "DSLRs, mirrorless, action cams"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection of premium electronics across all major categories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.name} className="group p-6 hover:shadow-medium transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {category.count}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Browse Collection
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
