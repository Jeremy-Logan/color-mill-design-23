import Img from 'next/image'
import Link from 'next/link'

import { urlForImage } from '../lib/sanity'
import { Post } from '../lib/types'



const BlogPostPreview = (post: Post) => {
	return (
		<div className='group border border-violet-400'><Link href={`/posts/${post.slug.current}`} key={post._id}>
			<div className='group bg-white'>
				
				<div className='relative aspect-square w-full mb-12 bg-white text-center shadow-lg transition-colors group-focus-within:border-blue-600 group-hover:border-gray-400 group-focus-within:group-hover:border-blue-600'>
					<Img
						src={urlForImage(post.mainImage).url()!}
						alt='placeholder'
						fill={true}
						style={{ objectFit: 'cover' }}
						sizes='(max-width: 768px) 100vw,
              					(max-width: 1200px) 50vw,
              					33vw'
					/>
					<div
				className='absolute left-0 -bottom-5 w-full py-[3px] '
				style={{
					backgroundColor: `${post.category[0].color.value}`,
					
				}}>
				{' '}
				<h3 className='text-xl font-semibold text-white '>
					{post.category[0].title}
				</h3>
			</div>
				</div>
				<div className='mx-6 mb-12'>
					
					<h2 className='text-lg font-semibold group-hover:underline underline-offset-4 mb-1'>{post.title}</h2>
					<div className='mb-1 text-sm text-gray-700 '>
						{post.publishedAt.replace(/-/g, '/').replace(/T.+/, '')}
					</div>
					<div>
						<p>{post.excerpt}</p>
					</div>
					<p className='text-blue-600'>Read more...</p>
				</div>
			</div></Link>
		</div>
	)
}

export default BlogPostPreview
