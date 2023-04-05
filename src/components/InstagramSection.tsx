/* eslint-disable @next/next/no-img-element */
import Img from "next/image";

type Props = {
  feed: {
    id: string;
    caption: string;
    mediaUrl: string;
    timestamp: string;
    media_type: string;
    permalink: string;
  };
};

const InstagramSection = ( feed : Props) => {
const data = Object.values(feed) 
  
  return (
    <div className="mt-36 xl:mt-24 oveflow-hidden">
      <h3 className="sm:mb-8 text-center font-serif text-4xl sm:text-6xl font-black">
        Visit us on
      </h3>
      <div className="relative h-24 w-[95vw] mx-auto sm:w-full">
        <Img
          src="/instagram.svg"
          alt="Instagram"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-wrap gap-4 max-w-7xl sm:mx-auto mx-4 justify-center sm:mt-12">
        {data &&
          data.map((image) => (
            <a key={image.id} href={image.permalink}
            target="_blank"
            rel="noopener noreferrer" className="relative w-[400px] aspect-square col-span-1 cursor-pointer bg-gradient-to-b from-violet-500 to-cyan-50">
              <img
                src={image.mediaUrl}
                alt={image.caption}
                aria-label="Instagram post"
                style={{ objectFit: "cover", position: "absolute", height:'400px' }}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </a>
          ))}
      </div>
    </div>
  );
};

export default InstagramSection;
