import Link from "next/link";
import { Leaf,  } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";


const cols = [
  {
    title: "Services",
    links: [

      { to: "./climatefinance", label: "Climate Finance" },
      { to: "./recs", label: "RECS and EAM" },
    ],
  },
  {
    title: "Tools",
    links: [
      { to: "./tools/carbon", label: "Carbon Calculator" },
      { to: "./tools/glossary", label: "Glossary" },
    ],
  },
  {
    title: "Get In Touch",
    links: [
      { to: "./contact", label: "Telephone: +263 71 678 0112 | +260 961 375 645" },
         { to: "./contact", label: "Email: contact@africarbontrading.com" },
    ],
  },
  {
    title: "Location",
    links: [
      { to: "./contact", label: "Zimbabwe Office: 8 Jackson Road, Hillside" },
      { to: "./contact", label: "Zambia Office: 86 Independence Avenue, Lusaka, Zambia" },
     
    ],
  },
];

const Footer = () => (
  <footer 
  className="border-t border-border px-6 py-16 relative flex flex-col items-center gap-10 w-full bg-norepeat bg-fixed"
  style={{
    backgroundImage: 'url("./x.png")',
   
  }}
>
    <div className=" absolute inset-0 " >
              
             <div className="absolute bg-green-950/80 inset-0"></div>
            
    </div>
      <div className=" w-[80%] relative z-10 bg-lime-600/50 flex flex-col md:flex-row justify-between items-center py-15 md:px-10 rounded-2xl">
            <div>
              <h1 className="text-white text-[20px] md:text-[40px] font-bold font-heading">Stay with us on Social</h1>
            </div>
            <div className="flex flex-row gap-2 items-center ">
              <p className="px-2 text-[16px] md:text-[20px] text-white ">FOLLOW US:</p>
              <Link href="https://www.facebook.com/africarbon" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="h-6 w-6 md:h-10 md:w-10 border border-white rounded-full  p-1 md:p-2 text-white hover:text-lime-300" />
              </Link>
              <Link href="https://www.instagram.com/africarbon" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-6 w-6 md:h-10 md:w-10 border border-white rounded-full  p-1 md:p-2 text-white hover:text-lime-300" />
              </Link>
              <Link href="https://www.twitter.com/africarbon" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-6 w-6 md:h-10 md:w-10 border border-white rounded-full  p-1 md:p-2 text-white hover:text-lime-300" />
              </Link>
              <Link href="https://www.youtube.com/africarbon" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="h-6 w-6 md:h-10 md:w-10 border border-white rounded-full p-1 md:p-2 text-white hover:text-lime-300" />
              </Link>
            </div>
      </div>
    <div className="mx-auto max-w-6xl z-10 relative">
      <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-yellow-400" />
            <span className="font-heading text-lg text-yellow-400 font-bold">Africarbon</span>
          </div>
          <p className="mt-4 max-w-xs text-[16px] text-white">
            An institute for carbon literacy — training, applied projects, and open
            research for a credible net-zero transition.
          </p>
        </div>
        {cols.map((c,i) => (
          <div key={i}>
            <p className="mb-3 text-[18px] font-semibold uppercase tracking-wider text-lime-300">
              {c.title}
            </p>
            <ul className="space-y-2">
              {c.links.map((l,j) => (
                <li key={j}>
                  <Link href={l.to} className="text-[16px] text-white transition-colors hover:text-lime-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 border-t border-border pt-6 text-center text-xs text-white">
        © 2026 Africa Institute for Carbon Trading and Sustainability. Building a net-zero future through education,
        projects, and research.
      </div>
    </div>
  </footer>
);

export default Footer;
