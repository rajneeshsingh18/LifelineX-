import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectGroup,
} from "../components/ui/select";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const QueueStatus = () => {
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/patients");
        setPatients(res.data);
      } catch (err) {
        console.error("Error fetching patients data:", err);
      }
    };
    fetchPatients();
  }, []);

  const filteredPatients = patients
    .filter((patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (patient) =>
        statusFilter === "All" || patient.priorityCategory === statusFilter
    );

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500"; // Red
      case "Medium":
        return "bg-yellow-500"; // Orange
      case "Low":
        return "bg-green-500"; // Green
      default:
        return "bg-gray-200"; // Default color
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">
        Patient Queue Status
      </h1>

      {/* Search Input */}
      <Input
        placeholder="Search Patient"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4"
      />

      {/* Filter by Priority */}
      <Select
        value={statusFilter}
        onValueChange={(val) => setStatusFilter(val)}
      >
        <SelectTrigger className="mb-4">
          <SelectContent>
            <SelectGroup>
              <SelectItem value="All">All Priorities</SelectItem>
              <SelectItem value="High">High Priority</SelectItem>
              <SelectItem value="Medium">Medium Priority</SelectItem>
              <SelectItem value="Low">Low Priority</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectTrigger>
      </Select>

      {/* List of Patient Queue Status */}
      <div className="space-y-4">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <Card
              key={patient._id}
              className="transition-transform transform hover:scale-105"
            >
              <CardHeader
                className={`${getPriorityColor(
                  patient.priorityCategory
                )} p-4 rounded-t-md`}
              >
                <Badge className="text-white">{patient.priorityCategory}</Badge>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold">{patient.name}</p>
                  <p className="text-gray-500">{patient.age} years old</p>
                </div>
                <p className="text-gray-700 mt-2">
                  Symptoms: {patient.symptoms}
                </p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">No patients found.</p>
        )}
      </div>
    </div>
  );
};

export default QueueStatus;
