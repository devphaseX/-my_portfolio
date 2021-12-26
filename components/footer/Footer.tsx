import { FC } from 'react';
import Navigation from '../navigation/Navigation';

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
        <a>
          <span></span>
          <span>Wilsonace87@gmail.com</span>
        </a>
      </div>
      <Navigation />
    </footer>
  );
};

export default Footer;
