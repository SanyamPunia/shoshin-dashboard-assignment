import { Sidebar } from "@/components/sidebar";
import { Dashboard } from "@/components/dashboard";
import { Header } from "@/components/header";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <div className="flex-1 overflow-auto">
          <Header />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
