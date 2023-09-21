"use client"
import { UserButton } from "@clerk/nextjs/app-beta/client";
import { usePathname } from "next/navigation"
import { LogOut } from "lucide-react"
import { Button } from "./ui/button";
import Link from "next/link";

const NavbarRoutes = () => {
  const pathname = usePathname()

  const isTecherPage = pathname?.startsWith("/teacher")
  const isPlayerPage = pathname?.includes("/chapter")

  return ( 
    <div className="flex gap-x-2 ml-auto">
      {isTecherPage || isPlayerPage 
        ? (
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        )
        : (
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Teach mode
            </Button>
          </Link>
        )
      }
      <UserButton 
        afterSignOutUrl="/"
      />
    </div>
  )
}

export default NavbarRoutes;