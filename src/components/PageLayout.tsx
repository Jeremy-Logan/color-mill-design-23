import Header from './Header'
import type { ReactNode } from 'react';
import {motion} from 'framer-motion';

import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Footer from './Footer';

type Props = {
	title: string
	description: string
	children: ReactNode
}

const PageLayout = (props: Props) => {
	return (
		<>
            <Head>
          <title>Color Mill Design</title>
          <meta name="description" content={props.description} />
          <link rel="icon" href="/favicon.ico" />
          
        </Head>
			<NextSeo
				title={props.title}
				description={props.description}
				openGraph={{
					url: 'https://www.colormilldesign.com',
					locale: 'en_IE',
					type: 'website',
					title: `${props.title}`,
					description: `${props.description}`,
					images: [
						{
							url: 'https://www.colormilldesign.com/color-mill-logo.jpg',
							width: 800,
							height: 600,
							alt: 'Color Mill Design',
							type: 'image/png',
						},
					],
					site_name: 'Point Arena Lighthouse',
				}}
			/><div className="absolute top-0 z-50 h-3 w-full bg-gradient-to-r from-[#C10682] to-[#0A99B9] "></div>
			<motion.div className='h-full overflow-hidden'
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1, transition:{duration: 0.5} }}
			>
				<Header/>
				<div className="min-h-screen">
					{props.children}
				
				</div>
				<Footer/>
			</motion.div>
		</>
	)
}
export default PageLayout