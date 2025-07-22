
import InterviewReady from "@/public/InterviewReady.jpg";
import Game from "@/public/Game.png";
import AI1 from "@/public/AI1.png";
import TimeTest from "@/public/TimeTest.png"
import PeopleAnalyzer from "@/public/PeopleAnalyzer.png"
import ADiTiBot from "@/public/ADiTiBot.png"
import BlogBot from "@/public/BlogBot.jpg";
import GameDoora from "@/public/GameDoora.png";
import CareOnWheels from "@/public/CareOnWheels.png";
import SeaEye from "@/public/SeaEye.png";

export const projectsData = [
  {
    title: "TimeTest",
    description:
      "My first game developed for game jam titans under the theme 'time'. A 2D action maze chase to satisfy the hungry protagonist by feeding it treasures running agaist time navigating bullets.",
    shortDescription: "2D maze chase game built against time with treasure hunting mechanics",
    tags: ["GameMaker Studio"],
    imageUrl: TimeTest,
    videoUrl: "https://youtu.be/d7A8eDPak-0",
    projectLink: "https://youtu.be/d7A8eDPak-0",
    detail: "",
    category: "game",
  },
  {
    title: "Puzzle Shooter",
    description:
      "A 2 level puzle based first person shooter game, filled with challenges aimed to culivate strategical, logical and critical thinking.",
    shortDescription: "Strategic FPS puzzle game with 2 challenging levels",
    tags: ["Unreal Engine 5", "Blueprints", "C++"],
    imageUrl: Game,
    videoUrl: "https://youtu.be/ZkF977oFx_g",
    projectLink: "https://youtu.be/ZkF977oFx_g",
    detail: "",
    category: "game",
  },
  {
    title: "People Analyzer",
    description:
      "ML, RL, VR application to access the users personality and generate scenarios based on the output to simulate human conversations aiding  players to communicate with different personalities.",
    shortDescription: "VR personality analyzer with AI-driven conversation simulation",
    tags: ["Unity", "C#", "Android Studio", "Flask", "Mixamo"],
    imageUrl: PeopleAnalyzer,
    videoUrl: "https://youtu.be/HM0yv-m3DS0",
    projectLink: "https://youtu.be/HM0yv-m3DS0",
    detail: "",
    category: "game",
  },
  {
    title: "Game Mechanics + AI",
    description:
      "Unreal engine exploration project. Includes simple enemy AI behviour, gameplay mechanics like character gliding, swimming, jump height multiplyer, elevator logic.",
    shortDescription: "Unreal Engine showcase with AI behaviors and game mechanics",
    tags: ["Unreal Enigine", "Blueprints", "C++"],
    imageUrl: AI1,
    videoUrl: "https://youtu.be/g8KDFuvY5sw",
    projectLink: "https://youtu.be/g8KDFuvY5sw",
    detail: "",
    category: "game"
  },
  {
    title: "Gamedoora",
    description:
      "First ever studio-as-a-service. A platform to create, connect and collaborate with people across the globe to develop awe-inspiring games the open source way.",
    shortDescription: "Open-source game development collaboration platform",
    tags: ["React", "Next.js", "SQL", "Tailwind"],
    imageUrl: GameDoora,
    videoUrl: "",
    projectLink: "http://gamedoora.com/",
    detail: "",
    category: "game"
  },
  {
    title: "ADiTi Chatbot",
    description:
      "Lifelike conversational AI developed to aid parents and students answer all queries related to the university.",
    shortDescription: "AI chatbot for university queries and student support",
    tags: ["Google Dialogflow", "Node.js", "Express", "Ngrok"],
    imageUrl: ADiTiBot,
    videoUrl: "",
    projectLink: "",
    detail: "",
    category: "other"
  },
  {
    title: "Care on Wheels",
    description:
      "A voice controlled bot aimed to ease the patients dependency on the medical staff, providing regular vital check-ups and easily available first-aid.",
    shortDescription: "Voice-controlled healthcare bot for patient assistance",
    tags: ["Arduino", "Vue.js", "Tableau", "Google Dialogflow", "Tailwind"],
    imageUrl: CareOnWheels,
    videoUrl: "",
    projectLink: "https://devfolio.co/projects/care-on-wheels-c011",
    detail: "",
    category: "other"
  },
  {
    title: "Blogbot",
    description:
      "A chatbot app to answer queries related to the pandemic situation, vaccine status using web-scrapping, self-learnign, along with an automatic sanitizer dispenser and temperature sensor.",
    shortDescription: "Pandemic info chatbot with automated sanitizer dispenser",
    tags: ["Flask", "Arduino", "NLTK", "ScikitLearn", "Numpy", "Newspaper3K"],
    imageUrl: BlogBot,
    videoUrl: "",
    projectLink: "https://devfolio.co/projects/blog-bot-3e68",
    detail: "",
    category: "other"
  },
  {
    title: "SeaEye",
    description:
      "Deep learnign based underwater object detection model to identify and classify multiple types of underwater objects, increase awareness regarding the deteriorating underwater ecosystem and provide marine surveillance.",
    shortDescription: "AI-powered underwater object detection for marine surveillance",
    tags: ["Google Colab", "Roboflow"],
    imageUrl: SeaEye,
    videoUrl: "",
    projectLink: "https://ieeexplore.ieee.org/document/10112371",
    detail: "A multidisciplinary project, An underwater object detection model build to speedily and accurately identify multiple types of underwater objects along with classifying them into various categories, increase awareness regarding the deteriorating underwater ecosystem conditions and provide marine surveillanc.",
    category: "other"
  
  },
  {
    title: "Interview Ready",
    description:
      "An android application that tests the users ability in aptitude, logical reasoning, mathematical reasoning, data structures and algorithms through quizes to help users with their interview preperation",
    shortDescription: "Android quiz app for comprehensive interview preparation",
    tags: ["Java", "Android Studio", "Firebase", "Lottie"],
    imageUrl: InterviewReady,
    videoUrl: "",
    projectLink: "https://www.irjet.net/archives/V8/i10/IRJET-V8I10208.pdf",
    detail: "A one stop solution for interview preperations. An application that leverages the power of java to build a robust solution aiding aspirants prepare for the next leap in thier carrier ",
    category: "other" 
  },
  
] as const;