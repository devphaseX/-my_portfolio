import { Header } from '@/components/UI/Header';
import { ArrowButton } from '@/components/UI/button/ArrowButton';
import React from 'react';

const AboutPart: React.FC = () => {
  return (
    <div className="about-part">
      <div className="about-part-content">
        <div>
          <Header text="About" />
        </div>
        <div className="about-detail">
          <p className="sm-1-rg">
            My name is Lawal Ayomide. A creative developer with 2+ years of
            experience, I’m currently based in Lagos, Nigeria. I’m a computer
            engineering student in my final year of my bachealor degree
            programHey, I am Ayomide, a creative developer with 2+ years of
            experience, I’m currently based in Lagos, Nigeria. I’m a computer
            engineering student in my final year of my bachealor degree programa
            computer engineering student in my final year of my bachealor degree
            programa computer
          </p>
          <div className="about-read-more">
            <ArrowButton to="/about-me" fill direction={{ rtl: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutPart };
