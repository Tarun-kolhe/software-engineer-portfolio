

export interface HeaderLink {
  label: string;
  link: string;
}

export interface CtaDetail {
  ctaLabel: string;
  ctaLink: string;
}

export interface SocialLink {
  socialLink: string;
  socialLabel: string;
  socialImage: string;
}
export interface Typeword {
  label: string[];
}


export interface UserHomepageContract {
  logoimage: string;
  username: string;
  headerLinks: HeaderLink[];
  greetings: string;
  description: string;
  ctadetail: CtaDetail;
  socialLinks: SocialLink[];
  typewords:string[];
}
