import { ReactNode } from "react"

interface PageBase {
  children?: ReactNode;
}

export function PageBase({ children }: PageBase) {
  return (
    <main className="py-5 px-10">
      {children}
    </main>
  )
}