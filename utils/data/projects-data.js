import ayla from "/public/image/ayla.jpg";
import crefin from "../..//public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 2,
    name: "Eternify AI",
    description:
      "This personalized AI solution enables users to create their own digital replica using their face, voice, and personality traits. The platform begins with a user onboarding process that collects basic information and personality-based questionnaire responses, allowing users to define interests through predefined or custom prompts. To generate a digital persona, users upload or record a video, which is processed via Tavus.io to create a unique Persona ID. Once created, users can interact with their AI-powered persona through a dashboard and invite others to engage with it. The system supports different roles: regular users who complete onboarding and manage their personas and minutes, and invited users who can interact with shared personas but must subscribe to create their own. A monthly subscription, managed through Stripe, is required to upload videos, and each user receives 20 free minutes with the option to purchase more. Users can also share their persona and allocate minutes to others for collaborative engagement",
    tools: ["ReactJs", "Tailwind CSS", "Stripe", "Java Spring Boot", "Python"],
    role: "Frontend Developer + Team Leader",
    code: "eternify.io",
    demo: "eternify.io",
    image: realEstate,
  },
  {
    id: 1,
    name: "Livesportz24",
    description:
      "This fully responsive, multilingual live scoring platform provides real-time updates and in-depth information for cricket and football enthusiasts. Built with Next.js and Tailwind CSS, it offers a fast and modern user interface, while Redux Toolkit ensures efficient and scalable state management. The platform is seamlessly integrated with external APIs to fetch live match data and updates, and uses Firebase Cloud Messaging (FCM) to deliver instant push notifications. It features theme support for easy switching between dark and light modes and supports English, Spanish, and Hindi to cater to a global audience. The design is fully optimized for desktops, tablets, and mobile devices.",
    tools: ["NextJS", "Tailwind CSS", "Firebase", "NodeJs"],
    role: "Frontend Developer + Team Leader",
    code: "Livesportz24.com",
    demo: "Livesportz24.com",
    image: travel,
  },
  {
    id: 3,
    name: "AI-Traveler",
    description:
      "This platform allows users to generate personalized travel itineraries using various content types and preferences. After a simple login or registration process, users provide details such as destination, travel dates, budget, preferred activities, and travel companions. Based on this input, the AI generates a customized itinerary, which users can further refine by regenerating or adjusting parameters like budget. The platform also includes interactive features such as AI-powered chat for location-specific queries and interactive maps for selected destinations. Users can book flights, accommodations, and rental cars directly through the platform. All trips are saved in chat history for easy access, and users have the option to publish their itineraries publicly or favorite those created by others. Note: The platform is still under development, and the current live link displays only a pre-sell page.",
    tools: ["ReactJs", "Tailwind CSS", "Stripe", "NodeJs", "Python"],
    role: "Frontend Developer + Team Leader",
    code: "aitraveler.ai",
    demo: "aitraveler.ai",
    image: realEstate,
  },
  {
    id: 4,
    name: "PorterYachts",
    description:
      "This premium booking platform offers users the ability to rent luxury yachts across a variety of global destinations. Users can browse an extensive selection of yachts and jets by location, with each listing showcasing detailed specifications, high-quality photos, and key features. The platform allows users to inquire about availability and request bookings through dedicated contact forms for personalized assistance. Popular travel destinations are highlighted for both yacht experiences. The service is divided into two specialized platforms: PorterYachts for luxury yacht rentals.",
    tools: ["NextJS", "Fireabse", "Tailwind CSS", "NodeJs"],
    role: "Frontend Developer + Team Leader",
    code: "porteryachts.com",
    demo: "porteryachts.com",
    image: crefin,
  },
  {
    id: 5,
    name: "PorterJets",
    description:
      "This premium booking platform offers users the ability to rent luxury private jets across a variety of global destinations. Users can browse an extensive selection of jets by location, with each listing showcasing detailed specifications, high-quality photos, and key features. The platform allows users to inquire about availability and request bookings through dedicated contact forms for personalized assistance. Popular travel destinations are highlighted for both jet experiences. The service is divided into two specialized platforms: PorterJets for private jet bookings.",
    tools: ["NextJS", "Fireabse", "Tailwind CSS", "NodeJs"],
    role: "Frontend Developer (Under Maintanance) + Team Leader",
    code: "porterjets.com",
    demo: "porterjets.com",
    image: crefin,
  },
  {
    id: 6,
    name: "Payyro",
    description: `This platform connects people in need with individuals and organizations willing to help, facilitating compassionate support through a seamless digital experience. Built with React.js and Tailwind CSS, it uses secure HTTPS APIs for data transactions and leverages Redux Toolkit for effective state management. The platform integrates Stripe to support payments via card, Google Pay, and bank transfer, while Firebase handles push notifications, analytics, and crash reporting. Its fully responsive design ensures optimal usability across all devices. Users can sign up either to request financial assistance by sharing their personal stories ("Get Help" users), to provide support by browsing and fulfilling requests ("Give Help" users), or as vendors—organizations that manage and submit help requests on behalf of others.`,
    tools: ["ReactJS", "Tailwind CSS", "Stripe"],
    code: "payyro.com",
    demo: "payyro.com",
    image: ayla,
    role: "Frontend Developer",
  },
  {
    id: 6,
    name: "Duplica",
    description:
      "Developed and implemented a powerful AI-driven platform that allows users to generate high-definition transformed images using custom prompts. The platform supports bulk image uploads, requiring a minimum of 10 images per session to ensure accurate model training and transformation. Users can define their own prompts to guide the AI in transforming the images, resulting in shape-to-shape consistency and highly realistic, full HD outputs. Integrated advanced image processing pipelines and AI algorithms to maintain fine details, proportions, and visual quality across all generated content. Focused on delivering a seamless user experience through intuitive UI/UX, efficient bulk upload management, and prompt-to-image accuracy, making the platform ideal for content creators, marketers, and AI enthusiasts seeking precision and visual fidelity.",
    tools: ["ReactJS", "Tailwind CSS", "Stripe"],
    code: "duplica.media",
    demo: "duplica.media",
    image: ayla,
    role: "Frontend Developer",
  },
];
