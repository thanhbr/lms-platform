"use client"
import { UserButton } from "@clerk/nextjs/app-beta/client";
import { usePathname } from "next/navigation"
import { LogOut } from "lucide-react"
import { Button } from "./ui/button";
import Link from "next/link";
import { SearchInput } from "./search-input";

const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTecherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return ( 
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTecherPage || isCoursePage 
          ? (
            <Link href="/">
              <Button size="sm" variant="ghost">
                <LogOut className="h-4 w-4 mr-2" />
                Exit
              </Button>
            </Link>
          )
          : (
            <Link href="/teacher/courses">
              <Button size="sm" variant="ghost">
                Teacher mode
              </Button>
            </Link>
          )
        }
        <UserButton 
          afterSignOutUrl="/"
        />
      </div>
    </>
  )
}

export default NavbarRoutes;