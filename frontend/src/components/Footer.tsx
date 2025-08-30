import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Niftaz Africa</h3>
                <p className="text-xs text-muted-foreground">Premium Electronics</p>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              Your trusted partner for premium electronics across Africa. 
              We bring you the latest technology with authentic products, 
              competitive prices, and exceptional service.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@niftazafrica.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Contact",
                "Track Order",
                "Shipping Info",
                "Returns",
                "Warranty",
                "Bulk Orders",
                "Careers"
              ].map((link) => (
                <li key={link}>
                  <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Categories</h4>
            <ul className="space-y-3">
              {[
                "Smartphones",
                "Laptops",
                "Audio",
                "Gaming",
                "Smart Home",
                "Cameras",
                "Accessories",
                "Tablets"
              ].map((category) => (
                <li key={category}>
                  <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Stay Updated</h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Subscribe to get special offers, free giveaways, and updates on new arrivals.
              </p>
              
              <div className="space-y-3">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background"
                />
                <Button variant="accent" className="w-full">
                  Subscribe
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Follow us:</span>
                <div className="flex gap-2">
                  {[
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Linkedin, href: "#" }
                  ].map(({ icon: Icon, href }) => (
                    <Button key={href} variant="ghost" size="icon" className="h-8 w-8">
                      <Icon className="w-4 h-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Niftaz Africa. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Button variant="link" className="text-sm h-auto p-0 text-muted-foreground">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-sm h-auto p-0 text-muted-foreground">
              Terms of Service
            </Button>
            <Button variant="link" className="text-sm h-auto p-0 text-muted-foreground">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
