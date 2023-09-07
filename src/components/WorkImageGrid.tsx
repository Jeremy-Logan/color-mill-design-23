import Link from 'next/link'
import React from 'react'

import { getCloudinaryImageUrl } from '../utils/cloudinary'
import Image from './Image'
import WorkModal from './WorkModal'

type Props = {
    images: {
        description: string
        title: string
        alt: string
        src: string
        url?: any
        modalDescription?: string;
        modalImages?: {
            src: string;
            alt: string;
        }[];
    }[]
}

function WorkImageGrid({ images }: Props) {
    return (
        <div className="grid w-screen mx-auto mt-12 gap- 4 justify-items-center max-w-7xl lg:grid-cols-2">
            {images.map((image, i) => (
                <div key={i} className="mb-8">
                    {image.url ? (
                        <Link href={image.url}>
                            <div className="relative h-[222px] w-[327px] shadow-lg transition-all duration-150 ease-in-out hover:scale-[102%] sm:h-[329px] sm:w-[484px] md:h-[412px] md:w-[606px] lg:h-[329px] lg:w-[484px] xl:h-[412px] xl:w-[606px]">
                                <Image
                                    src={getCloudinaryImageUrl(image.src)}
                                    alt={image.alt}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 45vw,"
                                />
                            </div>
                            <div className="mt-2 w-[327px] sm:w-[480px] md:mt-4 md:w-[600px] lg:w-[484px] xl:w-[606px]">
                                <h3 className="mb-2 text-xl font-medium sm:text-3xl">
                                    {image.title}{" "}
                                </h3>
                                <p className="italic sm:text-lg">{image.description}</p>
                            </div>
                        </Link>
                    ) : (<div className='flex flex-col w-full mx-auto'>
                        <WorkModal image={image} />
                    </div>
                    )}
                </div>))}

        </div>
    )
}

export default WorkImageGrid