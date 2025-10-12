import InterviewReady from "@/public/InterviewReady.jpg";
import ADiTiBot from "@/public/ADiTiBot.png"
import BlogBot from "@/public/BlogBot.jpg";
import CareOnWheels from "@/public/CareOnWheels.png";
import SeaEye from "@/public/SeaEye.png";
import { Project } from "../types";

export const otherProjectsData: Project[] = [
  {
    title: "ADiTi Chatbot",
    shortDescription: "AI chatbot for university queries and student support",
    tags: ["Google Dialogflow", "Node.js", "Express", "Ngrok"],
    imageUrl: ADiTiBot,
    videoUrl: "",
    projectLink: "",
    overview:
      "Lifelike conversational AI developed to aid parents and students answer all queries related to the university.",
    detailedDescription: `• Developed natural language processing for university-specific queries
• Implemented context-aware conversation flows using Dialogflow
• Built robust backend API using Node.js and Express
• Integrated real-time communication with Ngrok tunneling
• Created comprehensive knowledge base for university information
• Designed user-friendly interface for students and parents
• Implemented multi-language support for diverse user base`,
    category: "other"
  },
  {
    title: "Care on Wheels",
    shortDescription: "Voice-controlled healthcare bot for patient assistance",
    tags: ["Arduino", "Vue.js", "Tableau", "Google Dialogflow", "Tailwind"],
    imageUrl: CareOnWheels,
    videoUrl: "",
    projectLink: "https://devfolio.co/projects/care-on-wheels-c011",
    overview:
      "A voice controlled bot aimed to ease the patients dependency on the medical staff, providing regular vital check-ups and easily available first-aid.",
    detailedDescription: `• Developed voice-controlled healthcare assistance system
• Integrated Arduino-based vital signs monitoring
• Created patient dashboard using Vue.js and Tailwind CSS
• Implemented data visualization with Tableau for health trends
• Used Google Dialogflow for natural voice interactions
• Designed automated first-aid guidance system
• Focused on reducing patient dependency on medical staff
• Built comprehensive health monitoring and alert system`,
    category: "other"
  },
  {
    title: "Blogbot",
    shortDescription: "Pandemic info chatbot with automated sanitizer dispenser",
    tags: ["Flask", "Arduino", "NLTK", "ScikitLearn", "Numpy", "Newspaper3K"],
    imageUrl: BlogBot,
    videoUrl: "",
    projectLink: "https://devfolio.co/projects/blog-bot-3e68",
    overview:
      "A chatbot app to answer queries related to the pandemic situation, vaccine status using web-scrapping, self-learnign, along with an automatic sanitizer dispenser and temperature sensor.",
    detailedDescription: `• Developed real-time pandemic information chatbot using NLP
• Implemented web scraping with Newspaper3K for latest updates
• Created self-learning system using NLTK and ScikitLearn
• Built Arduino-based automatic sanitizer dispenser
• Integrated temperature sensing for health screening
• Used Flask for web application framework
• Processed data with Numpy for statistical analysis
• Combined hardware and software for comprehensive health solution`,
    category: "other"
  },
  {
    title: "SeaEye",
    shortDescription: "AI-powered underwater object detection for marine surveillance",
    tags: ["Google Colab", "Roboflow"],
    imageUrl: SeaEye,
    videoUrl: "",
    projectLink: "https://ieeexplore.ieee.org/document/10112371",
    overview:
      "Deep learnign based underwater object detection model to identify and classify multiple types of underwater objects, increase awareness regarding the deteriorating underwater ecosystem and provide marine surveillance.",
    detailedDescription: `• Developed deep learning model for underwater object detection
• Trained on diverse marine life and object datasets using Google Colab
• Implemented real-time classification with high accuracy
• Used Roboflow for data annotation and augmentation
• Created awareness platform for marine ecosystem conservation
• Designed for marine surveillance and research applications
• Published research findings in IEEE conference proceedings
• Contributed to marine biology and conservation efforts`,
    category: "other"
  },
  {
    title: "Interview Ready",
    shortDescription: "Android quiz app for comprehensive interview preparation",
    tags: ["Java", "Android Studio", "Firebase", "Lottie"],
    imageUrl: InterviewReady,
    videoUrl: "",
    projectLink: "https://www.irjet.net/archives/V8/i10/IRJET-V8I10208.pdf",
    overview:
      "An android application that tests the users ability in aptitude, logical reasoning, mathematical reasoning, data structures and algorithms through quizes to help users with their interview preperation",
    detailedDescription: `• Comprehensive interview preparation platform for technical interviews
• Implemented adaptive quiz system covering multiple domains
• Created question banks for aptitude, logical reasoning, and mathematics
• Developed data structures and algorithms practice modules
• Built native Android app using Java and Android Studio
• Integrated Firebase for user progress tracking and analytics
• Added engaging animations using Lottie for better UX
• Designed personalized learning paths based on performance
• Published research paper documenting the application's impact`,
    category: "other" 
  },
] as const;