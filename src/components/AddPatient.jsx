import { useState } from "react";
import axios from "axios";

const AddPatient = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [priorityCategory, setPriorityCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/patients", {
        name,
        age,
        symptoms,
        priorityCategory,
        description,
      });
      console.log("Patient added:", response.data);
      // Clear form fields after successful submission
      setName("");
      setAge("");
      setSymptoms("");
      setPriorityCategory("");
      setDescription("");
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Patient</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Age Input */}
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Symptoms Input */}
        <input
          type="text"
          placeholder="Symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Priority Category Input */}
        <input
          type="text"
          placeholder="Priority Category"
          value={priorityCategory}
          onChange={(e) => setPriorityCategory(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Description Textarea */}
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-y-auto max-h-32 scrollbar-thumb-blue-500 scrollbar-track-gray-200"
        />

        {/* Submit Button */}
        <input
          type="submit"
          value="Add Patient"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300"
        />
      </form>
    </div>
  );
};

export default AddPatient;
