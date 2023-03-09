import Img from "next/image";

type Props = {
  data: {
    id: string;
    caption: string;
    media_url: string;
    timestamp: string;
    media_type: string;
    permalink: string;
  }[];
};

const InstagramSection = ({ data }: Props) => {

  
  return (
    <div className="mt-36 oveflow-hidden">
      <h3 className="sm:mb-8 text-center font-serif text-4xl sm:text-6xl font-black">
        Visit us on
      </h3>
      <div className="relative h-24 w-[95vw] mx-auto sm:w-screen">
        <Img
          src="/instagram.svg"
          alt="Instagram"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-wrap gap-4 max-w-7xl sm:mx-auto mx-4 justify-center sm:mt-12">
        {data &&
          data.slice(0, 6).map((image) => (
            <div key={image.id} className="relative w-[400px] aspect-square col-span-1">
              <Img
                src={image.media_url}
                alt={image.caption}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default InstagramSection;
