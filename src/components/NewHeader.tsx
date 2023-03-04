import { Fragment, useState } from 'react'
import Img from "next/image";
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { motion } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const products = [


  { name: 'Non-Profits', description: 'Get a better understanding of your traffic', href: '#' },
  { name: 'Businesses', description: 'Speak directly to your customers', href: '#' }
]
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
        <div className="absolute z-50 top-0 bg-gradient-to-r from-[#C10682] to-[#0A99B9] w-screen h-3 "></div>
      <nav className="mx-auto flex max-w-[1800px] items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        
          <motion.button
            initial={{ opacity: 1 }}
            className="flex flex-col items-center justify-center outline-none focus:outline-none sm:right-4 "
          >
            <Link href="/">
              <picture>
                <source
                  srcSet="https://res.cloudinary.com/the-color-mill/image/upload/v1616105305/Color%20Mill%20Design/color-mill-animated-logo_bxjcpm.webp"
                  type="image/webp"
                />
                <source
                  srcSet="https://res.cloudinary.com/the-color-mill/image/upload/v1639014317/Color%20Mill%20Design/ColorMillLogoHeader-NoText_nvtcqj.png"
                  type="image/png"
                />
                <img
                  className="h-20 sm:h-24 lg:h-36"
                  srcSet="https://res.cloudinary.com/the-color-mill/image/upload/v1639014317/Color%20Mill%20Design/ColorMillLogoHeader-NoText_nvtcqj.png"
                  alt="Color Mill logo"
                />
              </picture>
            </Link>
          </motion.button>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
              Work
              <ChevronDownIcon className="h-5 w-5 flex-none text-[#06b2a0]" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6  p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                     
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href="/about" className="text-lg font-semibold leading-6 text-gray-900">
            About
          </Link>
          <Link href="/purpose" className="text-lg font-semibold leading-6 text-gray-900">
            Purpose
          </Link>
          <Link href="/news" className="text-lg font-semibold leading-6 text-gray-900">
            News
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button type="button"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md border-2 border-[#625BE4] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          <Link href="#" className="text-lg font-semibold leading-6 text-[#625BE4]">
            Contact 
          </Link></button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
          <motion.button
            initial={{ opacity: 1 }}
            className="flex flex-col items-center justify-center outline-none focus:outline-none sm:right-4 "
          >
            <Link href="/">
              <picture>
                <source
                  srcSet="https://res.cloudinary.com/the-color-mill/image/upload/v1616105305/Color%20Mill%20Design/color-mill-animated-logo_bxjcpm.webp"
                  type="image/webp"
                />
                <source
                  srcSet="https://res.cloudinary.com/the-color-mill/image/upload/v1639014317/Color%20Mill%20Design/ColorMillLogoHeader-NoText_nvtcqj.png"
                  type="image/png"
                />
                <img
                  className="h-20 sm:h-36"
                  srcSet="https://res.cloudinary.com/the-color-mill/image/upload/v1639014317/Color%20Mill%20Design/ColorMillLogoHeader-NoText_nvtcqj.png"
                  alt="Color Mill logo"
                />
              </picture>
            </Link>
            <Link href="/">
              <h1 className="my-auto hidden text-2xl font-bold md:block md:text-3xl lg:text-4xl">
                Color Mill Design
              </h1>
            </Link>
          </motion.button>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Work
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none text-[#06b2a0]')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                          </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="/purpose"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Purpose
                </Link>
                <Link
                  href="/news"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  News
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}