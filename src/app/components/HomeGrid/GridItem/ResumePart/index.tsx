import React from 'react';
import '@/style/resume.part.css';
import {
  TSocialLink,
  resumePartLinks,
} from '@/app/components/UI/socials/data.info';
import { resolveIconType } from '@/app/components/UI/icons';

const ResumePart: React.FC = () => {
  return (
    <div className="resume-part">
      <div className="resume-part-content">
        <div className="resume-part-tag flex">
          <div className="resume-part__label flex">
            <h4 className="sm-2-md">Resume</h4>
          </div>
          <div className="resume-part__label-2 flex center sm-4-md">Skill</div>
        </div>
        <div className="resume-part-resource">
          <ul className="resume-resource-list flex">
            {resumePartLinks.map(
              ({
                platformIcon,
                platformName,
                profileLink,
                download,
              }: TSocialLink) => (
                <li className="resume-resource-item">
                  <a
                    href={profileLink}
                    download={download}
                    className="flex center resume-item__content"
                  >
                    <div>
                      <span>{resolveIconType(platformIcon)}</span>
                    </div>
                    <div className="sm-2-md resume-item__name">
                      <p>{platformName}</p>
                    </div>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { ResumePart };
