import CizaSvg from "../public/ciza.svg";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Team project on Behance",
    description: "Platform was developed over 6 weeks",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/devme-2.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Current Clientele Locations",
    description: "Cape Town, JHB, BFN, Burundi, Uganda and USA!",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Technologies",
    description: "I'm constantly learning these",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Nama Language Course",
    description: "Currently building ...",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "DevConnect",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "w-devcon.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://devconnect-v2.netlify.app/",
  },
  {
    id: 2,
    title: "DevelopMe",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "devme-2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.behance.net/gallery/173247639/Develop-Me",
  },
  {
    id: 2,
    title: "BMIL",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/w-bmil.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://bmil.org/",
  },
  {
    id: 3,
    title: "IDBS",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/w-idbs.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://institutedbs.com/",
  },
  {
    id: 4,
    title: "Electrod",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/w-electrod.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://electrod.africa/",
  },
  {
    id: 5,
    title: "UdyNet",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/w-sifinet.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://sifinet.co.za/",
  },
  {
    id: 6,
    title: "Micassa Suites",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/w-micassa.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://micassasuites.com/",
  },
];

export const testimonials = [
  // {
  //   quote:
  //     "Collaborating with Ali was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ali's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ali is the ideal partner.",
  //   name: "Dr. Albert Mubako",
  //   title: "IDBS Co-Director",
  //   source: "/albert.svg",
  // },
  // {
  //   quote:
  //     "Collaborating with Ali was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ali's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ali is the ideal partner.",
  //   name: "Dr. Jeffrey Ray",
  //   title: "IDBS/BMIL Co-Director",
  //   source: "/ray.svg",
  // },
  {
    quote:
      "Collaborating with Ali was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ali's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ali is the ideal partner.",
    name: "Dr. Lambert Ciza",
    title: "BMIL Co-Director",
    source: CizaSvg,
  },
  // {
  //   quote:
  //     "Collaborating with Ali was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ali's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ali is the ideal partner.",
  //   name: "Larry Smith",
  //   title: "UdyNet Director",
  //   source: "/larry.svg",
  // },
  // {
  //   quote:
  //     "Collaborating with Ali was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ali's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ali is the ideal partner.",
  //   name: "Adeobajesu Aboluwade",
  //   title: "Social Media Manager",
  //   source: "/adeoba.svg",
  // },
  // {
  //   quote:
  //     "Collaborating with Ali was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ali's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ali is the ideal partner.",
  //   name: "Phathu Rachipeti",
  //   title: "Rachips Director",
  //   source: "/phathu.svg",
  // },
  // {
  //   quote:
  //     "Collaborating with Ali was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ali's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ali is the ideal partner.",
  //   name: "Yassah Matovu",
  //   title: "Micassa Suites Director",
  //   source: "/yassah.svg",
  // },
  // {
  //   quote:
  //     "Collaborating with Ali was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ali's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ali is the ideal partner.",
  //   name: "Charles Babumba",
  //   title: "Electrod Director",
  //   source: "/electrod.svg",
  // },
  // {
  //   quote:
  //     "Collaborating with Ali was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ali's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ali is the ideal partner.",
  //   name: "Romeo Lekoba",
  //   title: "Event Serve Director",
  //   source: "/romeo.svg",
  // },
];

export const companies = [
  {
    id: 1,
    name: "IDBS",
    img: "/c-idbs.png",
    nameImg: "/c-idbs.png",
  },
  {
    id: 2,
    name: "EventServe",
    img: "/c-eventServe.png",
    nameImg: "/c-eventServe.png",
  },
  {
    id: 3,
    name: "BMIL",
    img: "/c-bmil.png",
    nameImg: "/c-bmil.png",
  },
  {
    id: 4,
    name: "Micassa",
    img: "/c-micassa.png",
    nameImg: "/c-micassa.png",
  },
  {
    id: 5,
    name: "UdyNet",
    img: "/c-udynet.png",
    nameImg: "/c-udynet.png",
  },
  {
    id: 6,
    name: "ycl",
    img: "/c-ycl.png",
    nameImg: "/c-ycl.png",
  },
  {
    id: 7,
    name: "Electrod",
    img: "/c-electrod.png",
    nameImg: "/c-electrod.png",
  },
  {
    id: 8,
    name: "Rachips",
    img: "/c-rachips.png",
    nameImg: "/c-rachips.png",
  },
  {
    id: 9,
    name: "kk-npo",
    img: "/c-kk-npo.png",
    nameImg: "/c-kk-npo.png",
  },
  {
    id: 10,
    name: "Botsdh",
    img: "/c-botsdh.png",
    nameImg: "/c-botsdh.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Business Consultation",
    desc: "Providing strategic insights and tailored solutions to optimize operations, drive growth, and boost sales performance.",
    className: "md:col-span-2",
    thumbnail: "/i-business.svg",
  },
  {
    id: 2,
    title: "Brand Development",
    desc: "Crafting compelling brand identities, ensuring consistency, and elevating market presence for lasting audience engagement.",
    className: "md:col-span-2",
    thumbnail: "/i-design.svg",
  },
  {
    id: 3,
    title: "Software Development",
    desc: "Designing and building scalable, efficient software solutions tailored to meet specific client needs and industry standards.",
    className: "md:col-span-2",
    thumbnail: "/i-code.svg",
  },
  {
    id: 4,
    title: "Project Management",
    desc: "Leading projects from conception to completion, ensuring timely delivery, budget adherence, and stakeholder satisfaction.",
    className: "md:col-span-2",
    thumbnail: "/i-manage.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/alimora83",
  },
  {
    id: 2,
    img: "/x.png",
    link: "https://x.com/swarts_d",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/daurius-ali-swarts/",
  },
  {
    id: 4,
    img: "/whatsapp.png",
    link: "https://api.whatsapp.com/send?phone=789658725",
  },
];
