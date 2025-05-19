import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Search, Bed, AlertTriangle } from "lucide-react";

export default function BedAvailability() {
  const [beds, setBeds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedBed, setSelectedBed] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Example static data; replace with API call
      const bedData = [
        {
          id: 1,
          hospital: "City Hospital",
          department: "Emergency",
          available: 5,
          status: "Available",
        },
        {
          id: 2,
          hospital: "Metro Hospital",
          department: "Surgery",
          available: 0,
          status: "Critical",
        },
        {
          id: 3,
          hospital: "Greenwood Clinic",
          department: "ICU",
          available: 2,
          status: "Low Stock",
        },
        {
          id: 4,
          hospital: "Bright Hospital",
          department: "General",
          available: 10,
          status: "Available",
        },
      ];
      setBeds(bedData);
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Refresh data every 30 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const filteredBeds = beds
    .filter((bed) =>
      bed.hospital.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((bed) => statusFilter === "All" || bed.status === statusFilter);

  const handleBookBed = (bed) => {
    setSelectedBed(bed);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "Low Stock":
        return "bg-yellow-100 text-yellow-800";
      case "Critical":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Real-Time Bed Availability
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search Hospital"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Status</SelectItem>
            <SelectItem value="Available">Available</SelectItem>
            <SelectItem value="Low Stock">Low Stock</SelectItem>
            <SelectItem value="Critical">Critical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredBeds.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBeds.map((bed) => (
            <Card key={bed.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{bed.hospital}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{bed.department}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Bed className="mr-2 h-5 w-5 text-blue-500" />
                    <span className="font-semibold">{bed.available}</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className={getStatusColor(bed.status)}
                  >
                    {bed.status}
                  </Badge>
                </div>
                {bed.available > 0 ? (
                  <Button onClick={() => handleBookBed(bed)} className="w-full">
                    Book Bed
                  </Button>
                ) : (
                  <Button disabled className="w-full">
                    No Beds Available
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-6 text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
          <p className="text-lg font-semibold text-gray-700">
            No beds available matching your criteria.
          </p>
        </Card>
      )}

      <Dialog open={!!selectedBed} onOpenChange={() => setSelectedBed(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Booking Confirmation</DialogTitle>
            <DialogDescription>
              You have booked a bed at {selectedBed?.hospital}, Department:{" "}
              {selectedBed?.department}.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setSelectedBed(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
