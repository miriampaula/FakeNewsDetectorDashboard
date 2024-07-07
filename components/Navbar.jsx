"use client";

import Link from "next/link";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineQueryStats } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import { IoMdSearch } from "react-icons/io";
import { useTheme } from "@/contexts/ThemeContext";
import UserAdminToggle from "./UserAdminToggle";
import { useUserAdmin } from "@/contexts/UserAdminContext";

const Navbar = () => {
  const { theme } = useTheme();
  const { isAdmin } = useUserAdmin();

  return (
    <>
      {isAdmin && (
        <nav
          className={`fixed ${
            theme.includes("light")
              ? "text-gray-700 hover:text-gray-900 bg-white"
              : "text-white hover:text-gray-100 bg-gray-800 border-l border-gray-400"
          } top-0 left-0 w-64 h-full p-8 shadow-lg`}
        >
          <UserAdminToggle theme={theme} />
                    


          <ul className="space-y-6 pt-5">
            <li>
              <Link
                className="flex place-items-baseline gap-3 text-lg font-semibold "
                href="/"
              >
                <IoNewspaperOutline />
                Label Articles
              </Link>
            </li>

            <li>
              <Link
                className="flex place-items-baseline gap-3 text-lg font-semibold "
                href="/new_article"
              >
                <FaPlus />
                New Article
              </Link>
            </li>

            <li>
              <Link
                className="flex place-items-baseline gap-3 text-lg font-semibold"
                href="/stats"
              >
                <MdOutlineQueryStats />
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="gap-5 grid pt-5">
          <ThemeToggle />
            </div>
         

        </nav>
      )}

      {!isAdmin && (
        <nav
          className={`fixed ${
            theme.includes("light")
              ? "text-gray- bg-gray-100/30 hover:text-gray-900"
              : "text-white bg-gray-900 hover:text-gray-100 "
          } top-0 left-0 w-64 h-full p-8 `}
        >
          <UserAdminToggle theme={theme} />
        </nav>
      )}
    </>
  );
};

export default Navbar;
