"use client";
import { Link } from "lucide-react";
import { usePathname } from "next/navigation";

export function HeaderBar() {
  const url = usePathname();

  const title = {
    "/": "Dashboard",
    "/hiking-trails": "Book your route!",
    "/admin": "Your upcoming visits",
    "/technicals": "Technicals",
  }[url];

  if (!title) {
    return null;
  }

  return (
    <header className="bg-white shadow border-b-2">
      <div className="mx-auto max-w-7xl h-20 px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex gap-4">

        <a href="/" className="max-h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </a>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        </div>
        <div className="flex gap-4">
          <a href="/hiking-trails">User Showcase</a>
          <a href="/admin">Admin showcase</a>
          <a href="/technicals">Technicals</a>
        </div>
      </div>
    </header>
  );
}
