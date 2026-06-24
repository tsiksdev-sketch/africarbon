'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import Link from "next/link";
import { Leaf, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import data from "@/lib/data";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/i18n/language-context";
import SideNav from "./sidebar";


type Group = { label: string; items: { to: string; label: string; desc: string }[] };

type Gang = { label: string; items: { to: string; label: string; desc: string }[] };


const groups: Group[] = [
 
  {
    label: "nav.tools",
    items: [
      { to: "./carbon", label: "nav.tools.carbon-calculator", desc: "nav.tools.carbon-calculator.desc" },
      { to: "./glossary", label: "nav.tools.glossary", desc: "nav.tools.glossary.desc" },
    ],
  },
  
];

const gangs: Gang[] = [
 
  {
    label: "Services",
    items: [
      { to: "./climatefinance", label: "Climate Finance", desc: "nav.tools.carbon-calculator.desc" },
      { to: "./esgfootprint", label: "ESG, GHG & Carbon Footprinting", desc: "nav.tools.glossary.desc" },
      { to: "./recs", label: "Renewable Energy Certificates & Energy Attribute Markets", desc: "nav.tools.glossary.desc" },
      { to:"./mrvsafeguard", label: "MRV and Safeguards ", desc: "nav.tools.glossary.desc" },
     
    ],
  },
  
];

const Navbar = () => {

   const { t } = useLanguage()
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="./" className="flex items-center gap-2">
         <Image src="./download.png" alt="Africarbon Logo" width={200} height={200} className="md:h-30 md:w-30 w-20 h-20" />
        </Link>

        <div className=" items-center gap-1 flex">
          <Link href="./" className=" hidden md:block rounded-md px-3 py-2 text-[16px] text-muted-foreground hover:text-foreground">
           Home
          </Link>
           <Link href="./about" className="hidden md:block rounded-md px-3 py-2 text-[16px] text-muted-foreground hover:text-foreground">
           About
          </Link>
           {gangs.map((d) => (
            <div
              key={d.label}
              className="relative hidden md:block"
              onMouseEnter={() => setOpen(d.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <button className="flex items-center gap-1 rounded-md px-3 py-2 text-[16px] text-muted-foreground transition-colors hover:text-foreground">
                {t(d.label)}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <AnimatePresence>
                {open === d.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full w-72 pt-2"
                  >
                    <div className="rounded-xl border border-border bg-popover p-2 shadow-xl ">
                      {d.items.map((at,f) => (
                        <Link
                          key={f}
                          href={at.to}
                          className="block rounded-lg px-3 py-2 transition-colors hover:bg-secondary"
                        >
                          <p className="text-[16px] font-medium">{t(at.label)}</p>
                          <p className="text-xs text-muted-foreground">{t(at.desc)}</p>
                        </Link>
                      ))}
                     
                    </div>
                   
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
            {data.menu.map((item,i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className= "hidden md:block rounded-md px-3 py-2 text-[16px] text-muted-foreground hover:text-foreground"
                        >
                          <p className="text-[16px]">{t(item.name)}</p>
                        
                        </Link>))}
         
            
          <div className="md:hidden block "><SideNav/></div>
          <Button  size="lg"  className="hidden md:block ml-3 bg-lime-500 hover:bg-lime-300" >
            <Link href="./services">{t('nav.get-started')}</Link>
          </Button>
        </div>

       
      </div>

      
    </motion.nav>
  );
};

export default Navbar;
