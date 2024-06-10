import Image from "next/image";
import Link from "next/link"
import {
  ArrowUpRightSquareIcon,
  BellDot,
  BoxIcon,
  ChevronDown,
  EllipsisVertical,
  Flag,
  FolderMinus,
  Fullscreen,
  Layers,
  LayoutDashboard,
  LineChart,
  Menu,
  MessageCircleCodeIcon,
  Package,
  Package2,
  ScreenShare,
  Search,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <main>


      <div className="grid min-h-screen w-full md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
        <div className="hidden   md:block bg-[#19979b] scroll-smooth text-white">
          <div className="flex h-full max-h-100vh flex-col gap-2">


            <div className="flex relative  items-center  px-4  lg:px-6 py-4 mb-2">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="text-xl ">Tocly</span>
              </Link>

            </div>



            <div className="flex-1 text-lg ">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4 text-white">


                <Link
                  href="#"
                  className="flex items-center  justify-between gap-3 rounded-md bg-[#45babe] px-3 py-2 text-white transition-all "
                >
                  <div className="flex gap-3  items-center justify-center">
                    <Avatar>
                      <AvatarImage alt="@shadcn" />
                      <AvatarFallback className="text-black">CN</AvatarFallback>
                    </Avatar>

                    <div className="">
                      <div className="text-lg">Reporting</div>
                      <div className="text-muted/80">Team Reproting</div>
                    </div>
                  </div>
                  <ChevronDown />
                </Link>


                <Link
                  href="#"
                  className="flex flex-col  gap-3 rounded-lg py-8 px-1 text-muted/60 transition-all "
                >
                  <div className="font-semibold">MENU</div>


                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-1 py-2 text-white transition-all text-lg hover:text-muted/90"
                  >
                    <ScreenShare className="h-5 w-5 " />
                    Dashboard
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-400">
                      3
                    </Badge>
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-1 py-2 text-white/90 transition-all hover:text-muted/90 text-lg"
                  >
                    <MessageCircleCodeIcon className="h-5 w-5" />
                    Apps
                    <ChevronDown className=" ml-auto h-4 w-6 " />

                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-1 py-2 text-white/90 transition-all hover:text-muted/90 text-lg"
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    Layouts
                    <ChevronDown className=" ml-auto h-4 w-6 " />

                  </Link>



                </Link>


                <Link
                  href="#"
                  className="flex flex-col  gap-3 rounded-lg  px-1 text-muted/60 transition-all "
                >
                  <div className="font-semibold">PAGES</div>




                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-1 py-2 text-white/90 transition-all hover:text-muted/90 text-lg"
                  >
                    <ArrowUpRightSquareIcon className="h-5 w-5" />
                    Authentication
                    <ChevronDown className=" ml-auto h-4 w-6 " />

                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-1 py-2 text-white/90 transition-all hover:text-muted/90 text-lg"
                  >
                    <BoxIcon className="h-5 w-5" />
                    Extra Pages
                    <ChevronDown className=" ml-auto h-4 w-6 " />

                  </Link>



                </Link>
                <Link
                  href="#"
                  className="flex flex-col  gap-3 rounded-lg py-8 px-1 text-muted/60 transition-all "
                >
                  <div className="font-semibold">COMPONENTS</div>



                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-1 py-2 text-white/90 transition-all hover:text-muted/90 text-lg"
                  >
                    <Layers className="h-5 w-5" />
                    UI Elements
                    <ChevronDown className=" ml-auto h-4 w-6 " />

                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-1 py-2 text-white transition-all text-lg hover:text-muted/90"
                  >
                    <FolderMinus className="h-5 w-5" />
                    Forms
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-400">
                      6
                    </Badge>
                  </Link>



                </Link>







              </nav>
            </div>
            <div className=" sticky flex items-center justify-between bottom-0 mt-auto p-4 bg-transparent/10">
              <div className="flex items-center justify-center gap-3 text-lg">
                <Avatar>
                  <AvatarImage alt="@shadcn" className="" />
                  <AvatarFallback className="text-black ">CN</AvatarFallback>
                </Avatar>
                Steven Deese
              </div>
              <div className=""><EllipsisVertical /></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">


          <header className="flex h-14 items-center justify-between gap-4  bg-muted/40 px-4 lg:h-[60px] lg:px-6">

            <div className="flex items-center justify-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Package2 className="h-6 w-6" />
                      <span className="sr-only">Acme </span>
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      hi
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Orders
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        6
                      </Badge>
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Package className="h-5 w-5" />
                      Products
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Users className="h-5 w-5" />
                      Customers
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <LineChart className="h-5 w-5" />
                      Analytics
                    </Link>
                  </nav>
                  <div className="mt-auto">
                    <Card>
                      <CardHeader>
                        <CardTitle>Upgrade to Pro</CardTitle>
                        <CardDescription>
                          Unlock all features and get unlimited access to our
                          support team.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button size="sm" className="w-full">
                          Upgrade
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </SheetContent>
              </Sheet>

              Dashboard
            </div>


            <div className="flex items-center justify-center gap-4 ">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full appearance-none bg-background pl-8 shadow-none  rounded-full"
                  />
                </div>
              </form>
              <Flag className="w-4 h-4" />
              <LayoutDashboard className="w-4 h-4" />
              <Fullscreen className="w-4 h-4" />
              <BellDot className="w-4 h-4" />
              <Settings className="w-4 h-4" />

            </div>

          </header>


          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/40 ">

            <Dashboard />
          </main>
        </div>
      </div>


    </main>
  );
}
