import { LetTalkButton } from '@/components/UI/button/Button';
import { ReachOutMedia } from '@/components/UI/socials';
import React from 'react';

const IntroPart: React.FC = () => {
  return (
    <div className="intro-part">
      <div className="intro-part-content flex">
        <div className="intro-part__title">
          <h1 className="lg-1-md">
            Creative
            <br /> Web developer
            <br /> based in Lagos
          </h1>
        </div>
        <div className="connect-with">
          <div className="connect-width__label">
            <p className="sm-3-md">Feel free to connect with me</p>
          </div>
          <div className="connect-buttons flex">
            <div>
              <ReachOutMedia />
            </div>
            <div>
              <LetTalkButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { IntroPart };
