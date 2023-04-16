import { ProjectData } from '@/app/projects/data';
import { PrimaryButton } from '../button/Button';
import { ChevronRightCircle } from '../icons/ChevronRightCircle';
import '@/style/projectcard.css';
interface ProjectCardProps extends ProjectData {
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  title,
  bannerImgUrl,
  description,
  link,
  technologyTags,
}) => {
  return (
    <div className="project-card flex">
      <div className="project-card__tag flex center md-2-md">{index}</div>
      <div className="project-card__detail">
        <div className="project-card__image">
          <img src={bannerImgUrl} title={`${title} project image showcase`} />
        </div>
        <div className="project-card__modal">
          <div className="project-card__item flex">
            <div className="project-card__info">
              <div className="project-card__title">
                <h3 className="md-1-md">{title}</h3>
              </div>
              <div className="project-card__info">
                <div className="project-card__description ">
                  <p className="sm-1-rg">{description}</p>
                </div>
                <div className="project-card__tech">
                  <div>
                    <ul className="project-card__list flex">
                      {technologyTags.map((tag) => (
                        <li className="project-card__tech-tag flex center sm-2-md">
                          <span>{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="project__card__button">
              {typeof link.live !== 'undefined' && (
                <a href={link.live}>
                  <PrimaryButton
                    icon={<ChevronRightCircle size={19} />}
                    iconRight
                  >
                    Visit site
                  </PrimaryButton>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
