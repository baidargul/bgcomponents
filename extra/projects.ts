type ProjectType = {
  name: string;
  description: string;
  image: string;
  link: string;
};

export const Projects: ProjectType[] = [
  {
    name: "SocialEdge Creatives",
    description:
      "They're a video marketing agency that specializes in creating impactful social media campaigns designed to engage, inspire, and convert. From tailored video ads to engaging podcasts, our team of creative professionals works to bring your brand story to life across digital platforms.",
    image: "/projects/socialedge.png",
    link: "https://socialedge.com/",
  },
  {
    name: "Al Sarab Al Dhkkiya",
    description:
      "An Omanian client who wanted a website for a local industrial business. It's a company that provides services to the oil and gas industry.",
    image: "/projects/al.png",
    link: "alsarab.om",
  },
  {
    name: "Vegan Matrimonial",
    description:
      "A dating site for vegan couples. It's a platform that connects people who share a common interest in a healthy lifestyle.",
    image: "/projects/vegan.png",
    link: "https://veganmatrimonial.com/",
  },
];
