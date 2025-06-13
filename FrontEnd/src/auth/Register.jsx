import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'patient'
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Registering user...', formData);
    // call API from /services/authService.js
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600 dark:text-yellow-400">Register</h2>

        <div>
          <label className="block mb-1 text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
          >
            <option value="patient">Patient</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 dark:bg-yellow-400 dark:text-black"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
