import Header from './Header'
import type { ReactNode } from 'react';

import Head from 'next/head'
import { NextSeo } from 'next-seo'

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
			/>
			<div className='h-full overflow-x-hidden'>
				<Header/>
				<div className="">
					{props.children}
				
				</div>
				
			</div>
		</>
	)
}
export default PageLayout