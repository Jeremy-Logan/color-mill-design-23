import Img from "next/image";
import { buildUrl } from 'cloudinary-build-url';

interface ImageProps {
  sizes: string | undefined;
  src: string;
  alt: string;
  fill: boolean;
  style?: React.CSSProperties;
  blurDataUrl: string
}

const Image = (props:ImageProps) => {
  return (
      <Img
        src={props.src}
        alt={props.alt}
        fill={props.fill}
        style={props.style}
        placeholder="blur"
        blurDataURL={props.blurDataUrl}
        sizes={
          props.fill
            ? props.sizes
            : ""
        }
      />
  );
};

export default Image;
