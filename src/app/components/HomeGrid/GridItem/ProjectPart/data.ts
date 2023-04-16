interface ProjectData {
  title: string;
  bannerImgUrl: string;
  description: string;
  technologyTags: Array<string>;
  link: {
    live?: string;
    repo: string;
  };
}

const projects: Array<ProjectData> = [
  {
    title: 'Payeasy',
    description:
      'An online platform that allow people to learn how to code anytime, anywhere',
    bannerImgUrl: '/public/images/project-2.png',
    technologyTags: ['React.js', 'Typescript', 'Prisma', 'Nodejs'],
    link: { repo: '', live: '' },
  },
  {
    title: 'Mobijob',
    description:
      'An online platform that allow people to learn how to code anytime, anywhere',
    bannerImgUrl: '/public/images/project-1.png',
    technologyTags: ['React.js', 'Typescript', 'Prisma', 'Nodejs'],
    link: { repo: '', live: '' },
  },
  {
    title: 'Chops',
    description:
      'An online platform that allow people to learn how to code anytime, anywhere',
    bannerImgUrl: '/public/images/project-3.png',
    technologyTags: ['React.js', 'Typescript', 'Prisma', 'Nodejs'],
    link: { repo: '', live: '' },
  },
  {
    title: 'Qskills',
    description:
      'An online platform that allow people to learn how to code anytime, anywhere',
    bannerImgUrl: '/public/images/project-4.png',
    technologyTags: ['React.js', 'Typescript', 'Prisma', 'Nodejs'],
    link: { repo: '', live: '' },
  },
  {
    title: 'Vertt',
    description:
      'An online platform that allow people to learn how to code anytime, anywhere',
    bannerImgUrl: '/public/images/project-5.png',
    technologyTags: ['React.js', 'Typescript', 'Prisma', 'Nodejs'],
    link: { repo: '', live: '' },
  },
];

export { projects, type ProjectData };
