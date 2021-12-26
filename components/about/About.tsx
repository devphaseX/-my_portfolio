import { FC } from 'react';
import '../../styles/home.module.scss';
import Button from '../button/Button';

const About: FC = () => {
  return (
    <div className="about">
      <h2 className="tag">More About Me</h2>
      <p className="info">
        I am Ayomide, Fullstack web developer based in
        Lagos, Nigeria.I am passionate about building web
        solution.Over the last 2 years, I have equiped
        myself with industrial training by partaking in
        internship at hngintern and sidehustle internship
        program.During the period of training, I am chanced
        to have worked with amazing people.
      </p>
      <div className="about-contact">
        <Button href="">Download Resume</Button>
        <Button href="">Check github</Button>
      </div>
    </div>
  );
};

export default About;
