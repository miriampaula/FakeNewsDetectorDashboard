"use client";

import { useUserAdmin } from "@/contexts/UserAdminContext";
import { useRouter } from "next/navigation";
import { FiUser, FiUserCheck } from "react-icons/fi";

const UserAdminToggle = ({ theme }) => {
  const { isAdmin, toggleUserAdmin } = useUserAdmin();
  const router = useRouter();
  
  const isDarkTheme = theme.includes("dark");

  const handleUserClick = () => {
    if (isAdmin) toggleUserAdmin();
    router.push("/check_article"); // Navigate to user route
  };

  const handleAdminClick = () => {
    if (!isAdmin) toggleUserAdmin();
    router.push("/new_article"); // Navigate to admin route
  };

  return (
    <div className={`w-7/12 shadow-lg border ${isDarkTheme ? "border-gray-800" : "border-gray-100"} min-w-52 lg:bg-transparent lg:shadow-transparent mx-auto rounded-3xl flex items-center justify-center`}>
      <label
        className={`flex-1 text-center py-2 cursor-pointer ${!isAdmin ? `${isDarkTheme ? "bg-gray-600 text-gray-300" : "bg-gray-200 text-gray-800"}` : `${isDarkTheme ? "bg-gray-700 text-gray-500" : "bg-gray-100 text-gray-400"}`} rounded-l-3xl transition-all duration-300`}
        onClick={handleUserClick}
      >
        <FiUser className="inline-block mr-2" />
        User
      </label>
      <label
        className={`flex-1 text-center py-2 cursor-pointer ${isAdmin ? `${isDarkTheme ? "bg-gray-600 text-gray-300" : "bg-gray-200 text-gray-800"}` : `${isDarkTheme ? "bg-gray-700 text-gray-500" : "bg-gray-100 text-gray-400"}`} rounded-r-3xl transition-all duration-300`}
        onClick={handleAdminClick}
      >
        <FiUserCheck className="inline-block mr-2" />
        Admin
      </label>
    </div>
  );
};

export default UserAdminToggle;
