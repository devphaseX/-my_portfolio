import { FC, useState } from 'react';
import { getCurrentDate } from '../../util';
import Button from '../button/Button';
import ArrowUpIcon from '../icons/ArrowUpIcon';
import useDimension from '../../hooks/useDimension';
import MenuIcon from '../icons/MenuIcon';

type MediaContact = { name: string; profileUrl: string };

export const socialHandles: Array<MediaContact> = [
  {
    name: 'Github',
    profileUrl: 'https://github.com/devphaseX',
  },
  {
    name: 'Twitter',
    profileUrl: 'https://www.twitter.com/iamayomidee',
  },
  {
    name: 'Linkedin',
    profileUrl: 'https://www.linkedin.com/in/devphasex/',
  },
];

interface NavigationProps {
  type: 'footer' | 'header';
}

const Navigation: FC<NavigationProps> = ({ type }) => {
  return <DesktopModeNavigation type={type} />;
};

export default Navigation;

const DesktopModeNavigation: FC<NavigationProps> = ({
  type,
}) => {
  if (type === 'footer') {
    return <FooterNavigation />;
  }

  return <HeaderNavigation />;
};

function SocialNavigation() {
  return (
    <nav>
      <ul className="links">
        {socialHandles.map((handle) => (
          <li key={handle.profileUrl} className="item">
            <a
              href={handle.profileUrl}
              target="_blank"
              rel="noreferrer"
            >
              {handle.name}.
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function HeaderNavigation() {
  const dimension = useDimension();
  let Navigation = DesktopHeaderNav;
  if (dimension) {
    const { width: deviceWidth } = dimension;
    if (deviceWidth < 505) {
      Navigation = MobileHeaderNav;
    }
  }
  return (
    <div className="navigation">
      <div className="item">
        Ayomide~folio{getCurrentDate().year}
      </div>
      <Navigation />
    </div>
  );
}

function MobileHeaderNav() {
  const [isMenuToggled, setMenuToggle] = useState(false);
  return (
    <>
      <div
        className={`mobileMenuModal ${
          isMenuToggled ? 'modalOpen' : 'modalclose'
        }`}
      >
        <div className="nav-modal-content">
          <SocialNavigation />
        </div>
      </div>
      <span
        onClick={() => {
          setMenuToggle(
            (currentToggleState) => !currentToggleState
          );
        }}
      >
        <MenuIcon />
      </span>
    </>
  );
}

function DesktopHeaderNav() {
  return <SocialNavigation />;
}

function FooterNavigation() {
  return (
    <div className="navigation navigation-footer">
      <SocialNavigation />
      <span
        className="navigate-back"
        onClick={() => {
          window.moveTo(0, 0);
        }}
      >
        <Button href="/" innerRoute>
          <ArrowUpIcon />
          <span>Back to top</span>
        </Button>
      </span>
    </div>
  );
}
