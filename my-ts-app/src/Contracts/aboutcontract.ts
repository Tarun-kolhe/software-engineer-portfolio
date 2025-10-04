export interface Skill {
  labelskill: string;
  skilllogo: string;
}

export interface AboutSection {
  aboutheader: string;
  aboutdescription: string;
  aboutmoretitle: string;
  aboutmoredescription: string;
  aboutmoredescriptiontwo:string;
  contactcta: string;
  labelmyskills: string;
  skills: Skill[];
}
