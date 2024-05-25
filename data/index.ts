export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-1 md:col-span-3 md:row-span-2",
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
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-1 md:row-span-2",
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
    title: "ShareMe Social Media App",
    des: "Explore the joys of sharing your great moments with friends",
    img: "/shareme.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://sharemenat.netlify.app",
  },
  {
    id: 2,
    title: "Chilax - Movie Streaming App",
    des: "Enjoy your Movie streaming experience with chillax. Seamlessly watch all your favourite movies.",
    img: "/hero.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/NatMaestro/chillax-app",
  },
  {
    id: 3,
    title: "Demaestro Tech Shop - E-Commerce Application",
    des: "A REAL E-Commerce app which allows you to browse through products and make purchases using our online payment systems.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/NatMaestro/E-commerce",
  },
  {
    id: 4,
    title: "Travel Diaries",
    des: "A travel webapp that allows you to join in the travel experience as you tour around.",
    img: "/img-2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://travel-diaries-gh.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Nathaniel is a Junior Dev who is Hardworking and Perservering. He has demonstrated great dedication to the job which is admirable. Nathaniel is constantly trying to be better and do well which makes him valuable. Look no further for a dev as Nathaniel will be at your beck and call..",
    name: "Kwesi Dadson",
    title: "Director & Founder of Slightly Techie",
    img: "/kwesi.jpg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Willian M. Tsikata ",
    title: "Team Lead, Clinigup Evidence",
    img: ""
  },
  {
    quote:
      "Nathaniel was very helpful and fast to respond to my inquiry to help with Wordpress website issues.  His knowledge was comprehensive.  Even better, his advice helped me enough to solve the problems and he did not accept any payment for this, very straight up guy! Thank you Warren.",
    name: "Micky Rola",
    title: "Student, Slightly Techie",
    img: ""
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Clinigup Evidence",
    desc: "Assisted in the development of a web-based platform using Next.js & Sanity, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Eng. & Tutor - Slightly Techie",
    desc: "Designed and developed Web apps & scripts for our clients using ReactJS,NextJS & Django.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a Travel app for a client, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    desc: "Developed and maintained user-facing features and servers using modern frontend and Backend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/NatMaestro",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/NathanielCondu1"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/nathaniel-conduah-0989a5170/"
  },
];