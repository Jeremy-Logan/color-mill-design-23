
import Head from 'next/head'
import Script from 'next/script'
import { NextSeo } from 'next-seo'
import type { ReactNode } from 'react';

import * as gtag from '../lib/gtag'
import Footer from './Footer';
import Header from './Header'

type Props = {
	tags?: string[] | undefined;
	author: any;
	image: string;
	headline: string;
	description: string
	children: ReactNode
	slug?: string
	type?: string
	publishedAt?: string
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
				title={`Impactful Design Solutions for Nonprofits & Small Businesses |${props.headline}`}
				description={props.description}
				additionalMetaTags={[{ name: "keywords", content: "design agency, brand strategy, web design, web development, graphic design, nonprofits, small businesses, branding, digital presence, creative solutions" }]}
				openGraph={{
					url: `https://www.colormilldesign.com/${props.slug}`,
					locale: 'en_IE',
					type: props.type,
					title: `Impactful Design Solutions for Nonprofits & Small Businesses | ${props.headline}`,
					description: `${props.description}`,
					article: {
						publishedTime: props.publishedAt,
						authors: [
							`${props.author}`,
						],
						tags: props.tags ,
					},
					images: [
						{
							url: props.image,
							width: 800,
							height: 600,
							alt: props.headline,
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
				<Header />
				<div className="min-h-screen overflow-hidden ">
					{props.children}
					
				</div>
				<Footer /></div>

		</>
	)
}
export default PageLayout