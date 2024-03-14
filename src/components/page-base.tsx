import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";

interface PageBase {
  children?: ReactNode;
  className?: string;
}

export function PageBase({ children, className }: PageBase) {
  return (
    <main className={twMerge("py-5 px-10", className)}>
      {children}
    </main>
  )
}