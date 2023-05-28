interface ProjectData {
  id?: string | number;
  title: string;
  bannerImgUrl: string;
  description: string;
  technologyTags: Array<string>;
  link: {
    live?: string;
    repo: string;
  };
}

const showcaseProjects: Array<ProjectData> = [
  {
    id: 1,
    title: 'Payeasy',
    description:
      'An online platform that allow people to learn how to code anytime, anywhere',
    bannerImgUrl: '/images/project-2.png',
    technologyTags: ['React.js', 'Typescript', 'Prisma', 'Nodejs'],
    link: { repo: '', live: 'something' },
  },
];

const projects: Array<ProjectData> = [
  {
    id: 1,
    title: 'Payeasy',
    description:
      'An online platform that allow people to learn how to code anytime, anywhere',
    bannerImgUrl: '/images/project-2.png',
    technologyTags: ['React.js', 'Typescript', 'Prisma', 'Nodejs'],
    link: { repo: '', live: 'something' },
  },
  {
    id: 2,
    title: 'Mobijob',
    description:
      'An online platform that allow people to learn how to code anytime, anywhere',
    bannerImgUrl: '/images/project-1.png',
    technologyTags: ['React.js', 'Typescript', 'Prisma', 'Nodejs'],
    link: { repo: '', live: 'something' },
  },
  {
    id: 3,
    title: 'Chops',
    description:
      'An online platform that allow people to learn how to code anytime, anywhere',
    bannerImgUrl: '/images/project-3.png',
    technologyTags: ['React.js', 'Typescript', 'Prisma', 'Nodejs'],
    link: { repo: '', live: 'something' },
  },
  {
    id: 4,
    title: 'Qskills',
    description:
      'An online platform that allow people to learn how to code anytime, anywhere',
    bannerImgUrl: '/images/project-4.png',
    technologyTags: ['React.js', 'Typescript', 'Prisma', 'Nodejs'],
    link: { repo: '', live: 'something' },
  },
  // {
  //   title: 'Vertt',
  //   description:
  //     'An online platform that allow people to learn how to code anytime, anywhere',
  //   bannerImgUrl: '/images/project-5.png',
  //   technologyTags: ['React.js', 'Typescript', 'Prisma', 'Nodejs'],
  //   link: { repo: '', live: '' },
  // },
];

export { projects, type ProjectData, showcaseProjects };
