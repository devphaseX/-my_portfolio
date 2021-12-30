import { FC } from 'react';
import Button from '../button/Button';
import { socialHandles } from '../navigation/Navigation';

const gitContact = socialHandles.find(
  (handle) => handle.name.toLowerCase() === 'github'
);

const About: FC = () => {
  return (
    <div className="about">
      <h2 className="tag">
        About me<sup>*</sup>
      </h2>
      <p className="info">
        I am Ayomide, Fullstack web developer based in
        Lagos, Nigeria.I am passionate about building web
        solution.Over the last 2 years, I have equiped
        myself with industrial training by partaking in
        internship programs,at hngintern and sidehustle
        internship .During the cause of training, I have
        priviledge chanced to have worked with amazing
        people.
      </p>
      <div className="about-contact">
        <Button href="">Download Resume</Button>
        <Button
          href={gitContact ? gitContact.profileUrl : ''}
        >
          Check github
        </Button>
      </div>
    </div>
  );
};

export default About;
