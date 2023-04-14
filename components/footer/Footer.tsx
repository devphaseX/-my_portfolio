import { FC } from 'react';
import Navigation from '../navigation/Navigation';
import ArrowRightIcon from '../icons/ArrowRightIcon';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <h3 className="tag">
        Connect with me<sup>*</sup>
      </h3>
      <p className="short-messasge">
        Got any question or just wanna network, feel free to
        drop a line
      </p>
      <div className="contact">
        <a href="mailTo:wilsonace87@gmail.com">
          <span>
            <ArrowRightIcon />
          </span>
          <span>Wilsonace87@gmail.com</span>
        </a>
      </div>
      <Navigation type="footer" />
    </footer>
  );
};

export default Footer;
