import { Dialog, Tab, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import { getCloudinaryImageUrl } from '../utils/cloudinary'
import Image from './Image'

type Props = {
    image: {
        src: string;
        alt: string;
        title: string;
        description: string;
        modalDescription?: string;
        modalImages?: {
            src: string;
            alt: string;
        }[];
    };
}

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ')
}

function WorkModal({ image }: Props) {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    return (<>
        <button type="button"
            onClick={openModal} className=" relative h-[222px] w-[327px] shadow-lg transition-all duration-150 ease-in-out hover:scale-[102%] sm:h-[329px] sm:w-[484px] md:h-[412px] md:w-[606px] lg:h-[329px] lg:w-[484px] xl:h-[412px] xl:w-[606px]">
            <Image
                src={getCloudinaryImageUrl(image.src)}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 45vw,"
            />
        </button>
        <button type="button"
            onClick={openModal} className="mt-2 w-[327px] sm:w-[480px] md:mt-4 md:w-[600px] lg:w-[484px] xl:w-[606px] text-left">
            <h3 className="mb-2 text-xl font-medium sm:text-3xl">
                {image.title}{" "}
            </h3>
            <p className="italic sm:text-lg">{image.description}</p>
        </button>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full h-full p-6 overflow-hidden text-left align-middle transition-all transform bg-white rounded-sm shadow-xl max-w-7xl">
                                <main className="mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8">
                                    <div className="max-w-2xl mx-auto lg:max-w-none">
                                        {/* Product */}
                                        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                                            {/* Image gallery */}
                                            <Tab.Group as="div" className="flex flex-col-reverse">
                                                {/* Image selector */}
                                                <div className="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
                                                    {image.modalImages && <Tab.List className={`grid grid-cols-${image.modalImages?.length} gap-6`}>
                                                        {image.modalImages?.map((image, i) => (
                                                            <Tab
                                                                key={i}
                                                                className="relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                            >
                                                                {({ selected }) => (
                                                                    <>
                                                                        <span className="sr-only">{image.alt}</span>
                                                                        <span className="absolute inset-0 overflow-hidden">
                                                                            <Image src={getCloudinaryImageUrl(image.src)} alt=""
                                                                                fill
                                                                                sizes='(max-width: 768px) 45vw,'
                                                                                style={{ objectFit: 'cover' }} />
                                                                        </span>
                                                                        <span
                                                                            className={classNames(
                                                                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                                                                'pointer-events-none absolute inset-0  ring-2 ring-offset-2'
                                                                            )}
                                                                            aria-hidden="true"
                                                                        />
                                                                    </>
                                                                )}
                                                            </Tab>
                                                        ))}
                                                    </Tab.List>}
                                                </div>

                                                <Tab.Panels>
                                                    {image.modalImages?.map((image, i) => (
                                                        <Tab.Panel key={i} className="relative object-cover object-center w-full h-72">
                                                            <Image
                                                                src={getCloudinaryImageUrl(image.src)}
                                                                alt={image.alt}
                                                                fill
                                                                sizes='(max-width: 768px) 45vw,'
                                                                style={{ objectFit: 'cover' }}
                                                            />
                                                        </Tab.Panel>
                                                    ))}
                                                </Tab.Panels>
                                            </Tab.Group>
                                            <div className="px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0">
                                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{image.title}</h1>
                                                <div className="mt-3">
                                                    <h2 className="sr-only">Project information</h2>
                                                    <p className="text-3xl tracking-tight text-gray-900">{image.description}</p>
                                                </div>                                                
                                                <section aria-labelledby="details-heading" className="mt-12">
                                                    <h2 id="details-heading" className="sr-only">
                                                        Additional details
                                                    </h2>
                                                    <div className="border-t divide-y border-gradient-to-r from-cyan-200 to-red-600">
                                                        <p className='mt-4'>{image.modalDescription}</p>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
    )
}

export default WorkModal