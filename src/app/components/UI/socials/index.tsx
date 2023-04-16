import { socialLinks } from './data.info';
import '@/style/social.css';

const ReachOutMedia = () => (
  <div>
    <ul className="social-link__list flex">
      {socialLinks.map(({ platformIcon, platformName, profileLink }) => (
        <li className="social-link__item flex center">
          <abbr title={platformName}>
            <a href={profileLink}>
              <div>{platformIcon}</div>
            </a>
          </abbr>
        </li>
      ))}
    </ul>
  </div>
);
export { ReachOutMedia };
