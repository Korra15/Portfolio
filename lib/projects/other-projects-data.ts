import InterviewReady from "@/public/InterviewReady.jpg";
import ADiTiBot from "@/public/ADiTiBot.png"
import BlogBot from "@/public/BlogBot.jpg";
import CareOnWheels from "@/public/CareOnWheels.png";
import SeaEye from "@/public/SeaEye.png";
import { ChatbotDetailed, CareOnWheelsDetailed, BlogbotDetailed, SeaEyeDetailed, InterviewReadyDetailed } from "../details/other-detailed";
import { Project } from "../types";

export const otherProjectsData: Project[] = [
  {
    title: "ADiTi Chatbot",
    shortDescription: "AI chatbot for university queries and student support",
    tags: ["Google Dialogflow", "Node.js", "Express", "Ngrok"],
    imageUrl: ADiTiBot,
    overview:
      "Lifelike conversational AI developed to aid parents and students answer university-related queries.",
    detailedDescription: ChatbotDetailed, 
    category: "other"
  },

  {
    title: "Care on Wheels",
    shortDescription: "Voice-controlled healthcare bot for patient assistance",
    tags: ["Arduino", "Vue.js", "Tableau", "Google Dialogflow", "Tailwind"],
    imageUrl: CareOnWheels,
    projectLink: "https://devfolio.co/projects/care-on-wheels-c011",
    overview:
      "A voice controlled bot aimed to ease the patients dependency on the medical staff, providing regular vital check-ups and easily available first-aid.",
    detailedDescription: CareOnWheelsDetailed ,
    category: "other"
  },
  {
    title: "Blogbot",
    shortDescription: "Pandemic info chatbot with automated sanitizer dispenser",
    tags: ["Flask", "Arduino", "NLTK", "ScikitLearn", "Numpy", "Newspaper3K"],
    imageUrl: BlogBot,
    projectLink: "https://devfolio.co/projects/blog-bot-3e68",
    overview:
      "A chatbot app to answer queries related to the pandemic situation, vaccine status using web-scrapping, self-learnign, along with an automatic sanitizer dispenser and temperature sensor.",
    detailedDescription: BlogbotDetailed,
    category: "other"
  },
  {
    title: "SeaEye",
    shortDescription: "AI-powered underwater object detection for marine surveillance",
    tags: ["Google Colab", "Roboflow"],
    imageUrl: SeaEye,
    projectLink: "https://ieeexplore.ieee.org/document/10112371",
    overview:
      "Deep learnign based underwater object detection model to identify and classify multiple types of underwater objects, increase awareness regarding the deteriorating underwater ecosystem and provide marine surveillance.",
    detailedDescription: SeaEyeDetailed,
    category: "other"
  },
  {
    title: "Interview Ready",
    shortDescription: "Android quiz app for comprehensive interview preparation",
    tags: ["Java", "Android Studio", "Firebase", "Lottie"],
    imageUrl: InterviewReady,
    projectLink: "https://www.irjet.net/archives/V8/i10/IRJET-V8I10208.pdf",
    overview:
      "An android application that tests the users ability in aptitude, logical reasoning, mathematical reasoning, data structures and algorithms through quizes to help users with their interview preperation",
    detailedDescription: InterviewReadyDetailed,
    category: "other" 
  },
];