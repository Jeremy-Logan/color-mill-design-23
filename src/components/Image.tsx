
import { CldImage } from "next-cloudinary";

interface ImageProps {
  sizes: string | undefined;
  src: string;
  alt: string;
  fill: boolean;
  style?: React.CSSProperties;
 
  quality?: number;
}

const Image = (props:ImageProps) => {
  return (
      <CldImage
        src={props.src}
        alt={props.alt}
        fill={props.fill}
        style={props.style}
        quality={props.quality}
       
        
        sizes={
          props.fill
            ? props.sizes
            : ""
        }
      />
  );
};

export default Image;
