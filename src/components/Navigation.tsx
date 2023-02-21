import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'

type Props = { toggle: () => void }

const transition = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, delayChildren: 0.2 },
	},
}

const height = {
	open: { scaleY: 1 ,
	},
	closed: {scaleY: 0.1 , transition: { delay: 1 },
	},
}

export const Navigation = ({ toggle }: Props) => {
    const itemIds = [0, 1, 2, 3, 4]
	return (
		<motion.div
			className='z-40 overflow-hidden w-screen absolute top-0 left-0 bottom-0'
			variants={height}>
			<motion.ul
				className=' absolute top-0 bottom-0 md:left-0 -left-8'
				variants={transition}
				onClick={toggle}>
				{itemIds.map((id, i: number) => (
					<MenuItem i={i} key={i} />
				))}
			</motion.ul>
		</motion.div>
	)
}

