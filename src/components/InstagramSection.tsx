import Img from "next/image";

type Props = {
  images: {
    id: string;
    caption: string;
    media_url: string;
    timestamp: string;
    media_type: string;
    permalink: string;
  }[];
};

const InstagramSection = ({ images }: Props) => {
  return (
    <div className="mt-36 oveflow-hidden">
      <h3 className="mb-8 text-center font-serif text-6xl font-black">
        Visit us on
      </h3>
      <div className="relative h-24 w-screen">
        <Img
          src="/instagram.svg"
          alt="Instagram"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-wrap gap-4 max-w-7xl mx-auto justify-center mt-12">
        {images &&
          images.slice(0, 6).map((image) => (
            <div key={image.id} className="relative w-[400px] aspect-square col-span-1">
              <Img
                src={image.media_url}
                alt={image.caption}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default InstagramSection;
