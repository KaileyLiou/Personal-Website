export interface Project {
  title: string;
  description: string;
  link: string;
  githubLink?: string;
  image: string;
  tag: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Screens + Shots",
    description: "A health reminder app that helps people stay on top of vaccines and cancer screenings.",
    link: "https://apps.apple.com/us/app/screens-shots/id6755749446",
    githubLink: "https://github.com/KaileyLiou/Screens-Shots",
    image: "/projects/screens_shots.png",
    tag: "apps",
    featured: true,
  },
  {
    title: "σ Orionis DBNets Analysis",
    description: "Python-based data analysis to evaluate DBNets2.0 for the σ Orionis star-forming region.",
    link: "https://drive.google.com/file/d/1OIrOtCjfVbmraP_URJOdOphN46_qVPAs/view?usp=sharing",
    githubLink: "https://github.com/KaileyLiou/sigma-orionis-dbnets",
    image: "/projects/sigma_orionis.png",
    tag: "research",
    featured: true,
  },
  {
    title: "Sea Turtles Website",
    description: "An interactive SvelteKit website on endangered sea turtles with a rotating facts panel and a quiz.",
    link: "https://kaileyliou.github.io/Turtles/",
    githubLink: "https://github.com/KaileyLiou/Turtles",
    image: "/projects/turtles.png",
    tag: "web",
    featured: true,
  },
  {
    title: "Sprig Maze",
    description: "A 14-level maze game built on Hack Club's Sprig hardware where the goal is to get the green pea to the boba.",
    link: "https://sprig.hackclub.com/share/3AWmEEVINE324649XdZ6",
    githubLink: "https://github.com/KaileyLiou/sprig-maze",
    image: "/projects/sprig.jpg",
    tag: "games",
    featured: true,
  },
];