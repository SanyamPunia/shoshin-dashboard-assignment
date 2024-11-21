import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Bell, Star, ChevronRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  subtext: string;
  bgColor: string;
  textColor: string;
}

function StatCard({
  title,
  value,
  subtext,
  bgColor,
  textColor,
}: StatCardProps) {
  return (
    <Card className={`${bgColor} p-4`}>
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-4xl font-bold text-gray-900 my-2">{value}</p>
      <p className={`${textColor} text-sm`}>{subtext}</p>
    </Card>
  );
}

interface EmployeeCardProps {
  title: string;
  value: number;
  men: number;
  women: number;
  change: string;
}

function EmployeeCard({ title, value, men, women, change }: EmployeeCardProps) {
  return (
    <Card className="p-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-4xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">
          {change}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{men} Men</p>
          <p className="text-sm text-gray-600">{women} Women</p>
        </div>
        <Image
          src="/graph.png"
          alt="Graph"
          width={115}
          height={70}
        />
      </div>
    </Card>
  );
}

export function Dashboard() {
  return (
    <main className="flex-1 p-8 overflow-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Available Position"
              value={24}
              subtext="4 Urgently needed"
              bgColor="bg-[#FFEFE7]"
              textColor="text-red-500"
            />
            <StatCard
              title="Job Open"
              value={10}
              subtext="4 Active hiring"
              bgColor="bg-[#E8F0FB]"
              textColor="text-blue-500"
            />
            <StatCard
              title="New Employees"
              value={24}
              subtext="4 Department"
              bgColor="bg-[#FDEBF9]"
              textColor="text-pink-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <EmployeeCard
              title="Total Employees"
              value={216}
              men={120}
              women={96}
              change="+2% Past month"
            />
            <EmployeeCard
              title="Talent Request"
              value={16}
              men={6}
              women={10}
              change="+5% Past month"
            />
          </div>
          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Announcement
              </h2>
              <span className="text-sm text-gray-500">Today, 13 Sep 2021</span>
            </div>
            <ul className="space-y-4 max-h-64 overflow-y-auto">
              {[1, 2, 3].map((_, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border border-gray-200 rounded-lg p-3"
                >
                  <div>
                    <p className="text-sm text-gray-800">
                      Outing schedule for every department
                    </p>
                    <p className="text-xs text-gray-500">5 Minutes ago</p>
                  </div>
                  <Bell className="text-gray-400" size={16} />
                </li>
              ))}
            </ul>
            <button className="text-red-500 mt-4 text-sm font-semibold flex items-center">
              See All Announcement
              <ChevronRight size={16} className="ml-1" />
            </button>
          </Card>
        </div>
        <div className="w-full lg:w-1/3">
          <Card className="p-4 bg-[#1B204A] mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">
              Recently Activity
            </h2>
            <div className="bg-[#161E54] text-white p-4 rounded-lg">
              <p className="text-xs">10:40 AM, Fri 10 Sept 2021</p>
              <p className="text-lg font-bold mt-2">You Posted a New Job</p>
              <p className="text-sm mt-2">
                Kindly check the requirements and terms of work and make sure
                everything is right.
              </p>
              <p className="text-sm mt-4">Today you makes 12 Activity</p>
              <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded text-sm">
                See All Activity
              </button>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Upcoming Schedule
              </h2>
              <span className="text-sm text-gray-500">Today, 13 Sep 2021</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              Priority
            </h3>
            <ul className="space-y-4 mb-4 max-h-64 overflow-y-auto">
              <li className="flex justify-between items-center border border-gray-200 rounded-lg p-3">
                <div>
                  <p className="text-sm text-gray-800">
                    Review candidate applications
                  </p>
                  <p className="text-xs text-gray-500">Today - 11:30 AM</p>
                </div>
                <Star className="text-yellow-400" size={16} />
              </li>
            </ul>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Other</h3>
            <ul className="space-y-4 max-h-64 overflow-y-auto">
              {[1, 2, 3].map((_, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border border-gray-200 rounded-lg p-3"
                >
                  <div>
                    <p className="text-sm text-gray-800">
                      Interview with candidates
                    </p>
                    <p className="text-xs text-gray-500">Today - 10:30 AM</p>
                  </div>
                  <Star className="text-gray-300" size={16} />
                </li>
              ))}
            </ul>
            <button className="text-red-500 mt-4 text-sm font-semibold flex items-center">
              Create a New Schedule
              <ChevronRight size={16} className="ml-1" />
            </button>
          </Card>
        </div>
      </div>
    </main>
  );
}
