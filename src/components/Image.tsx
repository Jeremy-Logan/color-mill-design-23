import Img from "next/image";

interface ImageProps {
  sizes: string | undefined;
  src: string;
  alt: string;
  fill: boolean;
  style?: React.CSSProperties;
  blurDataURL?: string;
}

const Image = (props:ImageProps) => {
  return (
      <Img
        src={props.src}
        alt={props.alt}
        fill={props.fill}
        style={props.style}
        placeholder="blur"
        blurDataURL={props.blurDataURL}
        sizes={
          props.fill
            ? props.sizes
            : ""
        }
      />
  );
};

export default Image;
