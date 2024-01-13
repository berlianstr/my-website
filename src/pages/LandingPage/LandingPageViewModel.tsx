import { useEffect, useState } from "react";
import dummyUser from "../../data/api/data-user.json";

interface IExperienceProps {
  startDate: string;
  endDate: string;
  role: string;
  company: string;
  description: string;
  listJobDetails: string[];
}

interface IPortfolioProps {
  startDate: string;
  endDate: string;
  name: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkGithub: string;
  tag: string[];
}

export interface IEducationProps {
  startDate: string;
  endDate: string;
  major: string;
  schoolName: string;
  location: string;
  description: string[];
}
export interface ISkillsProps {
  name: string;
  stacks: string[];
}

export interface IDataUserProps {
  name: string;
  phone: string;
  email: string;
  skills: ISkillsProps[];
  experience: IExperienceProps[];
  education: IEducationProps[];
  certificate: any[];
  portfolio: IPortfolioProps[];
}

export default function useLandingPageViewModel() {
  const [dataUser, setDataUser] = useState<IDataUserProps>();
  useEffect(() => {
    setDataUser(dummyUser);
  }, [dummyUser]);

  return {
    dataUser,
  };
}
