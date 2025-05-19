import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bed, Clock, FileText, Users, Menu, X } from "lucide-react";

// SVG for subtle pattern in the background
const PatternSVG = () => (
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', top: 0, left: 0, opacity: 0.05 }}
  >
    <rect width="100" height="100" fill="none" stroke="#ccc" />
  </svg>
);

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* SVG Pattern */}
      <PatternSVG />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative z-10">
        {/* Overview Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Total Patients", value: "120", icon: Users, color: 'bg-blue-100', hoverColor: 'hover:bg-blue-200' },
            { title: "Available Beds", value: "25", icon: Bed, color: 'bg-green-100', hoverColor: 'hover:bg-green-200' },
            { title: "Today's Appointments", value: "32", icon: Clock, color: 'bg-yellow-100', hoverColor: 'hover:bg-yellow-200' },
            { title: "Critical Alerts", value: "3", icon: FileText, color: 'bg-red-100', hoverColor: 'hover:bg-red-200' },
          ].map((item, index) => (
            <Card
              key={index}
              className={`${item.color} ${item.hoverColor} backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105`}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="flex items-center space-x-2 text-sm font-semibold">
                  <item.icon className="h-5 w-5 text-blue-500" />
                  <p>{item.title}</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-secondary-foreground">
                  {item.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activity Feed */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                { time: "12:30 PM", activity: "Patient John Doe admitted" },
                { time: "1:15 PM", activity: "Bed 23 is now available" },
                { time: "1:45 PM", activity: "Emergency call in ER" },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-blue-600">
                    {item.time}
                  </span>
                  <span className="text-gray-700">- {item.activity}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Bed Availability */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle>Real-Time Bed Availability Tracker</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { ward: "General Ward", status: "Available", beds: 10, hoverColor: 'hover:bg-green-200' },
              { ward: "ICU", status: "Reserved", beds: 2, hoverColor: 'hover:bg-yellow-200' },
              { ward: "Pediatrics", status: "Critical", beds: 1, hoverColor: 'hover:bg-red-200' },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-gray-50/50 ${item.hoverColor} transition-transform transform hover:scale-105 hover:shadow-lg`}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{item.ward}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={`text-sm ${
                      item.status === 'Available'
                        ? 'text-green-600'
                        : item.status === 'Reserved'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }`}
                  >
                    Status: {item.status}
                  </p>
                  <p className="text-sm text-gray-600">Beds: {item.beds}</p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Queue Status for OPD */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle>Queue Status for OPD</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { department: "General OPD", queueLength: 15, waitTime: 45, hoverColor: 'hover:bg-blue-200' },
              { department: "Cardiology OPD", queueLength: 10, waitTime: 30, hoverColor: 'hover:bg-blue-300' },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-gray-50/50 ${item.hoverColor} transition hover:shadow-lg`}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{item.department}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Queue Length: {item.queueLength}
                  </p>
                  <p className="text-sm text-gray-600">
                    Estimated Wait Time: {item.waitTime} minutes
                  </p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>


        <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:bg-blue-100 transition-transform transform hover:scale-105 hover:shadow-xl">
  <CardHeader>
    <CardTitle>Patient Health Record Integration</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
      <Input type="file" className="flex-1" />
      <Button className="w-full sm:w-auto hover:bg-blue-600">Upload</Button>
    </div>
    <div>
      <h3 className="font-semibold mb-2">View Previous Visits</h3>
      <ul className="space-y-1">
        <li className="text-sm text-gray-600 hover:text-blue-600">
          Visit on 01/05/2023 - Dr. John Doe
        </li>
        <li className="text-sm text-gray-600 hover:text-blue-600">
          Visit on 15/04/2023 - Dr. Jane Smith
        </li>
      </ul>
    </div>
  </CardContent>
</Card>

      </main>
    </div>
  );
}
