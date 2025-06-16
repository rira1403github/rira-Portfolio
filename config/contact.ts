export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
  googlescholar = 'googlescholar',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@rira1403twitt',
  site: 'https://github.com/rira1403github',
  calendly: 'https://calendly.com/rajritik1403/',
  links: {
    github: 'https://github.com/rira1403github',
    linkedin: 'https://www.linkedin.com/in/ritik-raj-41b5a5234/',
    googlescholar:
      'https://scholar.google.com/',
    twitter: 'https://x.com/rira1403twitt',
    youtube: 'https://www.youtube.com/@RITIKRAJ-h8l',
    email: 'mailto:ritik1403@gmail.com',
    buymeacoffee: 'https://coff.ee/rajritik14x',
  },
};
