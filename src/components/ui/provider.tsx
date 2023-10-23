"use client"


import { ThemeProvider } from "@/components/ui/theme-provider";

interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
    {children}
    </ThemeProvider>
    )
}
