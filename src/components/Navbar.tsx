
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, X, Baby, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Tools', path: '/tools' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Baby className="h-8 w-8 text-parent-blue" />
          <span className="text-xl font-bold text-parent-dark">GrowTogether</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className="text-gray-600 hover:text-parent-blue transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-parent-blue text-parent-blue hover:bg-parent-blue hover:text-white">
            Sign In
          </Button>
          <Button className="bg-parent-blue hover:bg-parent-blue/90">Sign Up</Button>
        </div>
        
        {/* Mobile Navigation - Sheet Component */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[250px] sm:w-[300px]">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center space-x-2">
                  <Baby className="h-6 w-6 text-parent-blue" />
                  <span className="font-bold text-parent-dark">GrowTogether</span>
                </div>
              </SheetTitle>
              <SheetDescription>
                Your parenting companion
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-800 hover:text-parent-blue transition-colors duration-200 py-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-parent-blue text-parent-blue hover:bg-parent-blue hover:text-white">
                  Sign In
                </Button>
                <Button className="bg-parent-blue hover:bg-parent-blue/90">Sign Up</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
