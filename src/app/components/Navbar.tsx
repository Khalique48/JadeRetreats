"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { AlignJustify, X, MessageCircleMore, ChevronDown } from 'lucide-react';



function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState([false, false, false]);

  return (
    <div className="flex w-full z-50 flex-col justify-center items-center">
      <div
        className={cn(
          "top-0 fixed w-full",
          className
        )}
      >
        <Menu setActive={setActive}>
          <div className="hidden md:flex justify-center items-center md:space-x-10">
            <Link href="/" className="px-4 py-2">
              <MenuItem setActive={setActive} active={active} item="Retreats" >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/all-retreats">All Retreats</HoveredLink>
                  <HoveredLink href="/interface-design">Goa</HoveredLink>
                  <HoveredLink href="/seo">Bangalore</HoveredLink>
                </div>
              </MenuItem>
            </Link>
            <Link href="/" className="px-4 py-2">
              <MenuItem setActive={setActive} active={active} item="Experiences">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/all-retreats">Culinary</HoveredLink>
                  <HoveredLink href="/interface-design">Entertainment</HoveredLink>
                  <HoveredLink href="/seo">Wellness</HoveredLink>
                </div>
              </MenuItem>
            </Link>
          </div>
          <Link href="/" className="hidden md:flex justify-center items-center">
            <img className="justify-center" src="/Websitelogo.png" alt="logo" />
          </Link>
          <div className="hidden md:flex justify-center items-center">
            <Link href="/" className="px-4 py-2">
              <MenuItem setActive={setActive} active={active} item="Gallery" icon={false} />
            </Link>
            <Link href="/" className="px-4 py-2">
              <MenuItem setActive={setActive} active={active} item="About" icon={false} />
            </Link>
            <Link href="/" className="px-4 py-2">
              <MenuItem setActive={setActive} active={active} item="Contact with Us" icon={false} />
            </Link>
          </div>

          <div className="flex md:hidden justify-center flex-col items-start m-0 p-0 w-full">
            <div className="flex justify-between items-center w-full h-[85px] m-0 p-0 ">
              <button className="text-sm flex justify-center items-center h-full w-1/4" onClick={() => setOpen([!open[0], false, false])}>
              {open[0] ? (<X className="text-white w-6 h-6" />) : (<AlignJustify className="text-textHoverColor w-6 h-6" />)}
              </button>
              <Link href="/" className="flex md:hidden justify-center w-full items-center">
                <img className="justify-center" src="/Websitelogo.png" alt="logo" />
              </Link>
              <Link href={"/"} className="flex justify-center items-center h-full w-1/4">
                <MessageCircleMore className="text-textHoverColor w-6 h-6" />
              </Link>
            </div>
            {open[0] && (<div className="scale-in-ver-top text-white bg-[#272727] w-full">
            <div className="text-sm flex w-full justify-center items-start flex-col">
              <div className="flex justify-start items-start flex-col w-full">
                  <button className="focus:bg-black flex w-full px-5 py-2 justify-start items-center gap-x-2" onClick={() => setOpen([true, !open[1], open[2]])}>Retreats <ChevronDown className={`h-4 w-4`}/></button>
                  {open[1] && (
                    <div className="scale-in-ver-top flex w-full justify-center items-center flex-col">
                      <Link onClick={() => setOpen([false, false, false])} className="px-7 text-xs w-full py-2 focus:bg-black flex justify-start items-center" href="/all-retreats">All Retreats</Link>
                      <Link onClick={() => setOpen([false, false, false])} className="px-7 text-xs w-full py-2 focus:bg-black flex justify-start items-center" href="/interface-design">Goa</Link>
                      <Link onClick={() => setOpen([false, false, false])} className="px-7 text-xs w-full py-2 focus:bg-black flex justify-start items-center" href="/seo">Bangalore</Link>
                    </div>
                  )}
              </div>
              <div className="flex justify-start items-start flex-col w-full">
                  <button className="focus:bg-black flex w-full px-5 py-2 justify-start items-center gap-x-2" onClick={() => setOpen([true, open[1], !open[2]])}>Experiences <ChevronDown className={`h-4 w-4`}/></button>
                  {open[2] && (
                    <div className="scale-in-ver-top w-full flex justify-center items-center flex-col">
                      <Link onClick={() => setOpen([false, false, false])} className="px-7 py-2 text-xs w-full focus:bg-black flex justify-start items-center" href="/all-retreats">Culinary</Link>
                      <Link onClick={() => setOpen([false, false, false])} className="px-7 py-2 text-xs w-full focus:bg-black flex justify-start items-center" href="/interface-design">Entertainment</Link>
                      <Link onClick={() => setOpen([false, false, false])} className="px-7 py-2 text-xs w-full focus:bg-black flex justify-start items-center" href="/seo">Wellness</Link>
                    </div>
                  )}
              </div>
                  <Link onClick={() => setOpen([false, false, false])} className="text-sm focus:bg-black px-5 py-2" href="/">Gallery</Link>
                  <Link onClick={() => setOpen([false, false, false])} className="text-sm focus:bg-black px-5 py-2" href="/">About</Link>
                  <Link onClick={() => setOpen([false, false, false])} className="text-sm focus:bg-black px-5 py-2" href="/">Contact with Us</Link>
                </div>
            </div>)}
          </div>
        </Menu>



      </div>
    </div>
  );
}

export default Navbar;
