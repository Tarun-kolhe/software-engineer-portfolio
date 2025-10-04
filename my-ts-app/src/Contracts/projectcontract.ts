export interface ProjectDetails {
  projectTitle: string;
  projectImage: string;
  projectDescription: string;
  projectThesisLink: string;
  projectLinkLabel: string;
}

export interface ProjectSection {
  labelProject: string;
  projectLabelDescription: string;
  projects: ProjectDetails[];
}
