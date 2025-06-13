import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bed, ClipboardList, Calendar, Pill, UserPlus, Menu } from "lucide-react";

const navItems = [
  { to: "/bed-availability", icon: Bed, label: "Bed Availability" },
  { to: "/queue-status", icon: ClipboardList, label: "Queue Status" },
  { to: "/appointments", icon: Calendar, label: "Appointments" },
  { to: "/medicine-inventory", icon: Pill, label: "Medicine Inventory" },
  { to: "/addpatients", icon: UserPlus, label: "Add Patients" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] dark:bg-gray-800">
                  <nav className="flex flex-col gap-4 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="mr-3 h-5 w-5" />
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <h1 className="text-lg font-bold dark:text-white">🏥 LifeLineX HMS</h1>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.to}>
                  <Link to={item.to} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={
                        navigationMenuTriggerStyle() +
                        " text-sm text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                      }
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 dark:bg-yellow-400 dark:text-black transition-colors duration-200"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}
