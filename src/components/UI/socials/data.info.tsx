import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../icons';
import { DownloadIcon } from '../icons/Download';
import { MarkDownIcon } from '../icons/Markdown';

interface TSocialLink {
  platformName: string;
  profileLink: string;
  platformIcon: IconType;
  download?: true;
}

const socialLinks = [
  {
    platformIcon: <GitHubIcon size={20} />,
    platformName: 'Github',
    profileLink: '',
  },
  {
    platformIcon: <LinkedInIcon size={20} />,
    platformName: 'LinkedIn',
    profileLink: '',
  },
  {
    platformIcon: <TwitterIcon size={20} />,
    platformName: 'Twitter',
    profileLink: '',
  },
] as const satisfies ReadonlyArray<TSocialLink>;

const resumePartLinks = [
  {
    platformIcon: <DownloadIcon size={20} />,
    platformName: 'Download Resume',
    profileLink: '',
    download: true,
  },
  {
    platformIcon: <LinkedInIcon size={20} />,
    platformName: 'Linktre',
    profileLink: '',
  },
  {
    platformIcon: <GitHubIcon size={20} />,
    platformName: 'Github',
    profileLink: '',
  },
] as const satisfies ReadonlyArray<TSocialLink>;

export { socialLinks, resumePartLinks };
export type { TSocialLink };
