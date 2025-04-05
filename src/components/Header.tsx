
import { ThemeToggle } from "@/components/ThemeToggle";
import { Code, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold">DSA Solver</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center space-x-1 sm:space-x-3 justify-end">
          <Link 
            to="/documentation" 
            className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
          >
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Documentation</span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
