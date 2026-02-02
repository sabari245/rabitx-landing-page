"use client";

import { Button } from "../ui/Button";
import { ChevronDown, Menu, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs py-2 text-center font-medium">
        <span className="flex items-center justify-center gap-1">
          📱 Get the Onramp Money app soon
          <span className="text-gray-400">&gt;</span>
        </span>
      </div>

      {/* Main Navbar */}
      <nav className="container-custom h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
             {/* Simple Logo Placeholder */}
            <div className="text-2xl font-bold tracking-tighter flex items-center gap-1">
              <div className="w-6 h-6 bg-blue-600 rounded-sm skew-x-[-10deg]"></div>
              <span>ONRAMP</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              Individuals
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Business
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="#" className="text-sm font-medium hover:text-primary mr-2">
            Profile
          </Link>
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
             <Button variant="ghost" size="sm" className="bg-white shadow-sm h-8 rounded-md text-xs font-semibold">Buy</Button>
             <Button variant="ghost" size="sm" className="h-8 text-muted-foreground hover:text-foreground text-xs">Sell</Button>
             <Button variant="ghost" size="sm" className="h-8 text-muted-foreground hover:text-foreground text-xs">Swap</Button>
          </div>
          <Button variant="outline" size="sm" className="h-9 text-xs">Gift Cards</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white p-4 flex flex-col gap-4">
          <Link href="#" className="font-medium">Individuals</Link>
          <Link href="#" className="font-medium text-muted-foreground">Business</Link>
          <hr />
          <Link href="#" className="font-medium">Profile</Link>
          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline" size="sm">Buy</Button>
            <Button variant="outline" size="sm">Sell</Button>
            <Button variant="outline" size="sm">Swap</Button>
          </div>
          <Button className="w-full">Gift Cards</Button>
        </div>
      )}
    </div>
  );
}
