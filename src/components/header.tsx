import { Type } from "lucide-react";
import Link from "next/link";
import { NavLink } from "./navlink";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="h-16 w-full border-b flex items-center justify-between px-2 sm:px-5">
      <div className="flex items-center">
        <Link href="/">
          <div className="flex gap-2 items-center mr-4 sm:mr-16">
            <Type />
            <h1 className="text-xl font-bold tracking-tight">Edição de Texto</h1>
          </div>
        </Link>

        <nav className="flex gap-4 sm:gap-6 text-sm items-center">
          <NavLink href="/syncfusion">Syncfusion</NavLink>
          <NavLink href="/docxtemplater">docxtemplater</NavLink>
        </nav>
      </div>
    </header>
  )
}