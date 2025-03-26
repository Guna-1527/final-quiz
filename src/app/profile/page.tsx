"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaEdit, FaUser, FaChartBar, FaCrown } from "react-icons/fa";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 555-789-1234",
    linkedin: "linkedin.com/in/johndoe",
    gender: "Male",
    birthday: "1995-08-15",
    avatar: "/avatar.png",
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  // Handle input change with proper typing for the event
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-100 p-10 rounded-3xl shadow-2xl w-full max-w-7xl grid grid-cols-4 gap-8"
      >
        {/* Sidebar */}
        <div className="bg-blue-600 p-8 rounded-2xl shadow-lg flex flex-col gap-6 items-start w-full text-white">
          <div className="w-full flex flex-col items-center">
            <Image
              src={user.avatar}
              width={130}
              height={130}
              alt="User Avatar"
              className="rounded-full border-4 border-white shadow-lg"
            />
            <h2 className="text-2xl font-semibold mt-3">{user.name}</h2>
            <p className="text-gray-200 text-sm">{user.email}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsEditing(!isEditing)}
              className="mt-4 bg-white text-blue-600 px-5 py-2 rounded-lg shadow-lg flex items-center gap-2"
            >
              <FaEdit size={18} /> {isEditing ? "Cancel" : "Edit Profile"}
            </motion.button>
          </div>
          <nav className="w-full mt-6">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                <FaChartBar size={20} /> Performance
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                <FaUser size={20} /> Dashboard
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                <FaCrown size={20} /> Subscription Plan
              </li>
            </ul>
          </nav>
        </div>

        {/* Profile Info */}
        <div className="col-span-3 bg-white p-8 rounded-2xl shadow-lg relative">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Profile Information
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {Object.entries(user).map(
              ([key, value]) =>
                key !== "avatar" && (
                  <div key={key} className="flex flex-col gap-1">
                    <label className="text-gray-600 capitalize">{key}</label>
                    <input
                      type="text"
                      name={key} // Set the name to match the property in state
                      value={value}
                      onChange={handleInputChange} // Handle the change to update state
                      disabled={!isEditing}
                      className={`p-3 rounded-lg w-full border focus:outline-none transition-all ${
                        isEditing
                          ? "border-blue-500 bg-white"
                          : "border-gray-300 bg-gray-100 text-gray-500"
                      }`}
                    />
                  </div>
                )
            )}
          </div>
          {isEditing && (
            <div className="mt-6 text-center">
              <Button
                onClick={handleSave}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all"
              >
                Save Changes
              </Button>
            </div>
          )}
          {saved && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              Profile Updated Successfully!
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
