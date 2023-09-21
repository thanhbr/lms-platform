import {Menu} from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import Sizebar from "./sidebar";

const MobileSidebar = () => {
  return ( 
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transiton">
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        <Sizebar />
      </SheetContent>
    </Sheet>
  );
}
 
export default MobileSidebar;