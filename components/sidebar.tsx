"use client";

import {
  Home,
  Users,
  Calendar,
  Briefcase,
  Settings,
  HelpCircle,
  Menu,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface NavItem {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Dashboard", isActive: true },
  { icon: Users, label: "Recruitment" },
  { icon: Calendar, label: "Schedule" },
  { icon: Briefcase, label: "Employee" },
  { icon: Settings, label: "Department" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-7 left-6 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6 text-black p-4" />
      </button>
      <aside
        className={`bg-white h-screen fixed left-0 top-0 transition-all duration-300 ease-in-out
        ${
          isOpen ? "w-64" : "w-0 -translate-x-full"
        } lg:translate-x-0 lg:w-64 xl:w-64
        overflow-y-auto overflow-x-hidden`}
      >
        <div className="flex items-center p-4 mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold text-blue-900 hidden lg:inline-block">
            Vasitum
          </span>
        </div>
        <div className="px-4">
          <h2 className="text-xs font-semibold text-gray-500 mb-4 hidden lg:block">
            MAIN MENU
          </h2>
          <nav>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center p-2 rounded-lg ${
                    item.isActive
                      ? "bg-red-50 text-red-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="">{item.label}</span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="px-4 mt-8">
          <h2 className="text-xs font-semibold text-gray-500 mb-4 hidden lg:block">
            OTHER
          </h2>
          <nav>
            <ul className="space-y-2">
              <li className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                <HelpCircle className="w-5 h-5 mr-3" />
                <span className="">Support</span>
              </li>
              <li className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                <Settings className="w-5 h-5 mr-3" />
                <span className="">Settings</span>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
