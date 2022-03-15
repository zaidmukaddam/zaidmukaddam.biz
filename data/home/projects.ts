export interface IProjectData {
  title: string;
  scope: string;
  tags: string[];
  summary: string;
  srcName: string;
  link: string;
  trackLabel?: string;
}

const projectData: IProjectData[] = [
  {
    title: 'Linkto',
    scope: 'UX/UI Design. Web App Development',
    tags: ['nextjs', 'tailwindcss', 'supabase', 'react-query'],
    summary:
      'Combine all your online content into one short, easy Biolink. You can also create Biolink pages for things like blogs, merch, multimedia and so much more.',
    srcName: 'lnk-preview.png',
    link: '/writing/linkto',
  },
  {
    title: 'MiniFeed',
    scope: 'Web App Development',
    tags: ['nextjs', 'mongodb', 'auth0', 'framer-motion'],
    summary:
      'Mini Feed - The one stop shop for content you love. ',
    srcName: 'minifeed.png',
    link: '/writing/minifeed',
  },
  {
    title: 'MoodWiser',
    scope: 'UX/UI Design. Website Development',
    tags: ["Next JS", "Chakra UI", "Typescript"],
    summary:
      'MoodWiser is a simple, minimalistic, useful and fun habit tracker that keeps you and your friends accountable for each other by giving praises y\'all deserve to reach your goal!',
    srcName: 'moodwiser-preview.png',
    link: '/writing/moodwiser',
  },
  {
    title: 'TinkerTools',
    scope: 'UX/UI Design. Web App Development',
    tags: ['React', 'Chakra', 'Framer Motion', 'Typescript'],
    summary:
      "A quick, all-in-one toolbox of small tools for designers and designers who code. teenytools has many frequently used tools by developers every day, it provides both the ease of access on commonly used tools and a depth of customizations on those tools too.",
    srcName: 'tinkertools.png',
    link: '/writing/tinkertools',
  },
];

export default projectData;
