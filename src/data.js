import React from "react";
import ui from "./assets/ui-design.png"
import web from "./assets/website-design.png"
import app from "./assets/app-design.png"
import {AiOutlineMobile,AiOutlineColumnWidth,
  AiFillFormatPainter,AiFillEdit,AiOutlineCloseCircle,AiOutlineDollar} from "react-icons/ai"
import Portfolio1 from "./assets/portfolio-2.png";
import Portfolio2 from "./assets/portfolio-4.png";
import Portfolio3 from "./assets/portfolio-6.png";
import {FaHouseChimneyUser,FaUserLarge,FaRegHourglassHalf,FaMeteor,FaSatelliteDish} from "react-icons/fa6"

const sublinks = [
  {
    name:"home",
    icon:<FaHouseChimneyUser/>
  },
  {
    name:"about",
    icon:<FaUserLarge/>
  },
  {
    name:"services",
    icon:<FaRegHourglassHalf/>
  },
  {
    name:"portfolio",
    icon:<FaMeteor/>
  },
 
  {
    name:"contact",
    icon:<FaSatelliteDish/>
  },
];
 export const skills = [
  {
    img:ui,
    text:"UI / UX Design ",
    des :"Lorem ipsum dolor, sit amet consectetur adipisicing elit"
  },
  {
    img:web,
    text:"Website Design",
    des :"bbbn nnnn nnmmmac vewji neshe qo hksvdhf jwsihuagv "
  },
  {
    img:app,
    text:"App Design",
    des :"jsavk ehfiwuf  wifj wpoowv oikv jvwpvh verbwrnt"
  },
];
export const services = [
  {
    icon:<AiOutlineMobile/>,
    head:"Mobile Site ",
    text :"Responsive Web with All Phone And Easy to Use On Devices"
  },
  {
    icon:<AiOutlineColumnWidth/>,
    head:"Responsve Web ",
    text :"Responsive Web with All Computers And Easy to Use On Devices "
  },
  {
    icon:<AiFillFormatPainter/>,
    head:"Beautiful Colors ",
    text :"Comfrotable Colores For The Eye And Wonderful The Art Of Choosing Colors "
  },
  {
    icon:<AiFillEdit />,
    head:"Simble Code",
    text :"Simple And Easy Code That You Can Use At Any Time And Modify it"
  },
  {
    icon:<AiOutlineCloseCircle/>,
    head:"Not Error ",
    text :"There Are No Mistakes In The Work Because Of The Great Experience"
  }, {
    icon:<AiOutlineDollar />,
    head:"Win Money ",
    text :"There Are No Mistakes In The Work Because Of The Great Experience"
  },

];
export const portfolio = [
  {
    img:Portfolio1,
    name:"Template 1",
    url:" https://mo2888.github.io/template-1/ "
  },
  {
    img:Portfolio2,
    name:"Template 2 ",
    url:"https://mo2888.github.io/template-2/"
  },
  {
    img:Portfolio3,
    name:"Keeper App",
    url:" https://mo2888.github.io/keeper-app/"
  }
]



export default sublinks;
