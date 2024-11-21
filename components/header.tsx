import { Search, Bell, MessageSquare, Menu } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow sticky top-0 z-10">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800 hidden lg:inline-block">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <Bell className="text-gray-600" />
        <MessageSquare className="text-gray-600" />
        <Image
          src="/pfp.png"
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </header>
  );
}
