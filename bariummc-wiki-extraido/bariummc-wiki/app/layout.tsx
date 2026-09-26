import type { Metadata } from "next";
import "./globals.css";
import { WikiShell } from "@/components/WikiShell";
export const metadata: Metadata = {title:"BariumMC Wiki",description:"Wiki oficial do BariumMC.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><WikiShell>{children}</WikiShell></body></html>}