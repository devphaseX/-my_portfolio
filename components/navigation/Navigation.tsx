import { FC } from 'react';
import { getCurrentDate } from '../../util';
import style from '../../styles/navigation.module.scss';

type MediaContact = { name: string; profileUrl: string };

const socialHandles: Array<MediaContact> = [
  { name: 'Github', profileUrl: '' },
  { name: 'Twitter', profileUrl: '' },
  { name: 'Linkedin', profileUrl: '' },
];

const Navigation: FC = () => {
  return (
    <nav className={style.navigation}>
      <div className={style.item}>
        Ayomide~folio{getCurrentDate().year}
      </div>
      <ul className={style.links}>
        {socialHandles.map((handle) => (
          <li
            key={handle.profileUrl}
            className={style.item}
          >
            <a href={handle.profileUrl}>{handle.name}.</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
