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
        Hey!, It&lsquo;s Ayomide, a frontend developer, dev advocate fully based
        in Lagos, Nigeria. I&lsquo;m passionate about building enrich web
        experience, a core member of the oou(Olabisi Onabanjo state University)
        developer&lsquo;s club. Having equiped with in dept frontend knowledge,
        I&lsquo;m able to build in house tools which has helped in my ability to
        create highly scable web product.During my free, I also tech people how
        to code at school. Over the years, I&lsquo;ve built a number of Web
        application using technology like Node js, Next js, Typescript, Mongodb,
        Graphql.
      </p>
      <div className="about-contact">
        <Button href="">Download Resume</Button>
        <Button href={gitContact ? gitContact.profileUrl : ''}>
          Check github
        </Button>
      </div>
    </div>
  );
};

export default About;
