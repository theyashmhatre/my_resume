import { AiFillAndroid, AiFillAppstore } from "react-icons/ai";
import {  FaBrain, FaEthereum, FaPython} from "react-icons/fa";
import { SiJavascript, SiProgress} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineCloudServer } from "react-icons/ai";
import { MdAnalytics } from "react-icons/md";
import {project1, project2, project3, project4, project5, blog1, blog2} from "../assets/index"

// Features Data
const featuresData = [
  {
    id: 1,
    icon: <SiJavascript />,
    title: "Web Development",
    des: "Good knowledge of MERN Stack along with Next.js.",
  },
  {
    id: 2,
    icon: <AiFillAndroid />,
    title: "App Development",
    des: "Familiar with Flutter developement having developed various apps as well.",
  },
  {
    id: 3,
    icon: <FaEthereum />,
    title: "Blockchain Development",
    des: "Have hands-on experience in working with Solidity and Ethereum/Polygon Blockchain.",
  },
  {
    id: 4,
    icon: <FaPython />,
    title: "Python Scripting",
    des: "Wrote various scripts to automate processes and save time using python.",
  },
  {
    id: 5,
    icon: <AiOutlineCloudServer />,
    title: "Cloud Development",
    des: "Fairly new to this domain. Have achieved AWS Cloud Developer Associate Certificate.",
  },
];

const projectData = [
  {
    id: 1,
    title: "SyncFlix - Synchronised Video Player",
    desc: "Synchronised Video Player which allows a number of participants to simultaneously watch the same video and be in sync with each other througout. Have used React, Node and socket.io for the same",
    src: {project1},
    githubLink: "https://github.com/theyashmhatre/syncflix",
    websiteLink: "https://syncflix.yashmhatre.in"
  },
  {
    id: 2,
    title: "NFT Marketplace",
    desc: "Created an NFT marketplace using Solidity, deployed on the Polygon blockchain. Empowers creators to showcase and sell their unique digital assets seamlessly, providing a decentralized and cost-effective platform for NFT transactions.",
    src: {project2},
    githubLink: "https://github.com/theyashmhatre/nft-marketplace",
    websiteLink: "https://nft.yashmhatre.in"
  },
  {
    id: 3,
    title: "URL Shortner",
    desc: "URL Shortner with Authentication System made using MERN Stack.",
    src: {project3},
    githubLink: "https://github.com/theyashmhatre/URL-Shortner",
    websiteLink: ""
  },
  {
    id: 4,
    title: "Covid Tracker",
    desc: "Developed using Flutter & Dart, the mobile application uses third-party APIs to display data regarding the Covid-19 crises. Also features a super smooth UI",
    src: {project4},
    githubLink: "https://github.com/theyashmhatre/covid_tracker",
    websiteLink: ""
  },
  {
    id: 5,
    title: "Blog website with custom wordpress-like editor",
    desc: "A server-rendered blog website created using ReactJS, NextJS and Firebase as it's database for my very own blog - The Adventurous Engineer. It includes a Wordpress-like editor in the admin section for uploading blogs which includes images and videos as well.",
    src: {project5},
    githubLink: "https://github.com/theyashmhatre/tae-blog-website",
    websiteLink: ""
  },
]

const blogData = [
  {
    id: "1",
    title: "Execute a VB.NET DLL using Python",
    desc: "Usually if the DLL is coded using C++ language, it can easily be read and used using ctypes library of Python. But the main issue arises when we have to execute a VB.NET DLL and that's what this blog is about",
    src: {blog1},
    websiteLink: "https://medium.com/@yashmhatre62/execute-a-vb-net-dll-using-python-5a9422e9ffe1"
  },
  {
    id: "2",
    title: "Port an existing Ethereum DApp to run on Nervos’ EVM compatible Layer 2",
    desc: "Nervos is an open-source public blockchain ecosystem and collection of protocols creating the basis for a universal internet-like public network. This blog teaches you how to convert an Ethereum DApp to something that can run on the Nervos ecosystem.",
    src: {blog2},
    websiteLink: "https://medium.com/@yashmhatre62/port-an-existing-ethereum-dapp-to-run-on-nervos-evm-compatible-layer-2-3879ff23d45f"
  }
]

export {featuresData, projectData, blogData};