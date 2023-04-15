interface IconDimension {
  width?: number | string;
  height?: number | string;
  size?: number | string;
}

interface IconTypeProps extends IconDimension {}

export type { IconTypeProps, IconDimension };
