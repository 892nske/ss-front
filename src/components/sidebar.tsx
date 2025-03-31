"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  FileText,
  Calendar,
  Settings,
} from "lucide-react"

const navigation = [
  { name: "ダッシュボード", href: "/", icon: LayoutDashboard },
  { name: "顧客管理", href: "/customers", icon: Users },
  { name: "提案書", href: "/proposals", icon: FileText },
  { name: "スケジュール", href: "/schedule", icon: Calendar },
  { name: "設定", href: "/settings", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-56 flex-col bg-card border-r">
      <div className="flex h-14 items-center border-b px-4">
        <span className="font-semibold">InvestPro</span>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5",
                  isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-accent-foreground"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}