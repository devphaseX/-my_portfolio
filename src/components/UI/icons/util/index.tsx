import { IconDimension } from '../@types';
import { ICON_SIZE_DEFAULT } from './constant';

function computeIconDimension({ height, size, width }: IconDimension) {
  const typeofWidth = typeof width as 'string' | 'number' | 'undefined';
  const typeofHeight = typeof height as 'string' | 'number' | 'undefined';
  const typeofSize = typeof size as 'string' | 'number' | 'undefined';

  if (
    (typeofHeight === 'undefined' && typeofWidth !== 'undefined') ||
    (typeofHeight !== 'undefined' && typeofWidth === 'undefined')
  ) {
    throw new TypeError(
      'Height or width cannot be passed optionally, if either is used both as to be passed along'
    );
  }

  const _width =
    typeofWidth === 'undefined'
      ? typeofSize === 'undefined'
        ? ICON_SIZE_DEFAULT
        : typeofSize === 'number'
        ? `${size}px`
        : size
      : typeofWidth == 'number'
      ? `${width}px`
      : width;

  const _height =
    typeofHeight === 'undefined'
      ? typeofSize === 'undefined'
        ? ICON_SIZE_DEFAULT
        : typeofSize === 'number'
        ? `${size}px`
        : size
      : typeofHeight === 'number'
      ? `${height}px`
      : height;

  return { height: _height, width: _width };
}

const resolveIconType = (type: string | React.ReactNode) =>
  typeof type === 'string' ? <img src={type} alt="icon" /> : type;

export { computeIconDimension, resolveIconType };
