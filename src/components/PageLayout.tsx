
import Head from 'next/head'
import Script from 'next/script'
import { NextSeo } from 'next-seo'
import type { ReactNode } from 'react';

import * as gtag from '../lib/gtag'
import Footer from './Footer';
import Header from './Header'

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
					site_name: 'Color Mill Design',
				}}
			/><Script
			strategy='afterInteractive'
			src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
		/>
		<Script
			id='gtag-init'
			strategy='afterInteractive'
			dangerouslySetInnerHTML={{
				__html: `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '${gtag.GA_TRACKING_ID}', {
			page_path: window.location.pathname,
		});
		`,
			}}
		/>
			<div className=''>
				<Header/>
				<div className="min-h-screen overflow-hidden ">
					{props.children}
				
				</div>
				<Footer/></div>
			
		</>
	)
}
export default PageLayout