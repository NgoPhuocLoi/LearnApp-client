import {
  englishIcon,
  chemicalIcon,
  programIcon,
  mathIcon,
  physicsIcon,
} from "../assets/course-icon";

export const courses = [
  {
    name: "English",
    description: "Learn English",
    canLearn: true,
    path: "/english",
    thumb: englishIcon,
  },
  {
    name: "Chemical",
    description: "Learn Chemical",
    canLearn: false,
    path: "/chemical",
    thumb: chemicalIcon,
  },
  {
    name: "Program",
    description: "Learn Program",
    canLearn: false,
    path: "/program",
    thumb: programIcon,
  },
  {
    name: "Math",
    description: "Learn Math",
    canLearn: false,
    path: "/math",
    thumb: mathIcon,
  },
  {
    name: "Physics",
    description: "Learn Physics",
    canLearn: false,
    path: "/physics",
    thumb: physicsIcon,
  },
];
