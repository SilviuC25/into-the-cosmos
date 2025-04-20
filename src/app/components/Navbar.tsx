"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Planets", href: "/planets" },
  { label: "Timeline", href: "/timeline" },
  { label: "Fun Facts", href: "/fun-facts" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-[#f5f9ff] text-gray-800 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-6 text-xl font-bold text-blue-600 tracking-wide"
          >
            <Image
              src="/images/space.png"
              alt="Cosmos Icon"
              width={50}
              height={50}
              className="rounded-full"
            />
            Into the Cosmos
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  pathname === href ? "text-blue-600" : "text-gray-500 hover:text-blue-500"
                }`}
              >
                {pathname === href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-600"
                    transition={{ duration: 0.3 }}
                  />
                )}
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
