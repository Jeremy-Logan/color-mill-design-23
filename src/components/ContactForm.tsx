import { useForm } from 'react-hook-form'

const ContactForm = () => {
// 	const { register, errors } = useForm()

	return (<></>
// 		<div className='mt-12 lg:mx-[25vw] sm:mx-[10vw] justify-center flex flex-col'>
// 		<h1 className='font-serif text-6xl mb-10'>Let&apos;s connect.</h1>
// 			<h3 className='text-3xl md:text-4xl'>
// 				How can we work together? Let&apos;s talk it over.
// 			</h3>
// 			<form
// 				method='POST'
// 				name='contact'
// 				data-netlify='true'
// 				netlify-honeypot='bot-field'
// 				id='contact'>
// 				<input type='hidden' name='form-name' value='contact' />
// 				<div className={'flex flex-col w-full items-left '}>
// 					<div className={'text-black flex-grow md:w-8/12'}>
// 						<p className='hidden'>
// 							<label>
// 								Don&apos;t fill this out if you're human:{' '}
// 								<input name='bot-field' />
// 							</label>
// 						</p>

// 						<label htmlFor='name' className='mr-2 text-xl'>
// 							<h3 className='text-2xl mt-12'>
// 								What&apos;s your name?
// 							</h3>
// 							<input
// 								type='text'
// 								name='contactName'
// 								id='contactName'
// 								placeholder=''
// 								{...register('name', {
// 									required: 'Please enter your name.',
// 								})}
// 								className={
// 									'text-xl w-full my-4 pl-2 h-12 border-b-2'
// 								}
// 							/>
// 						</label>
// 						<label htmlFor='orgName' className='mr-2 text-xl '>
// 							<h3 className='text-2xl mt-16'>
// 								What&apos;s your organization&apos;s name?
// 							</h3>
// 							<input
// 								type='text'
// 								name='orgName'
// 								id='orgName'
// 								placeholder=''
// 								{...register('orgName', {
// 									required:
// 										"Please enter your organization's name.",
// 								})}
// 								className={
// 									'text-xl w-full my-4 pl-2 h-12 border-b-2'
// 								}
// 							/>
// 						</label>

// 						<label htmlFor='email' className='mr-2 text-xl '>
// 							<h3 className='text-2xl mt-16'>
// 								What&apos;s your email address?
// 							</h3>
// 							<input
// 								type='email'
// 								name='contactEmail'
// 								id='contactEmail'
// 								placeholder=''
// 								{...register('email', {
// 									required:
// 										'Please enter a valid email address.',
// 								})}
// 								className={
// 									'text-xl w-full my-4 pl-2 h-12 border-b-2'
// 								}
// 							/>
// 						</label>
// 						<label htmlFor='question' className='mr-2 text-xl '>
// 							<h3 className='text-2xl mt-16'>
// 								Briefly tell us about your project goals.
// 							</h3>
// 							<textarea
// 								type='text'
// 								name='contactGoals'
// 								id='contactGoals'
// 								rows='3'
// 								placeholder=''
// 								{...register('contactGoals', {
// 									required:
// 										'Please tell us about you project goals.',
// 								})}
// 								className={'w-full my-2 pl-2 border-b-2'}
// 							/>
// 						</label>
// 						<label htmlFor='question' className='mr-2 text-xl '>
// 							<h3 className='text-2xl mt-16'>
// 								Do you have a timeline in mind?
// 							</h3>
// 							<input
// 								type='text'
// 								name='contactTimeline'
// 								id='contactTimeline'
// 								placeholder=''
// 								{...register('contactTimeline', {
// 									required:
// 										'Please let us know your timeline.',
// 								})}
// 								className={'text-xl w-full my-4 pl-2 h-12 border-b-2 '}
// 							/>
// 						</label>
// 						<label htmlFor='question' className='mr-2 text-xl '>
// 							<h3 className='text-2xl mt-16'>
// 								What have you budgeted for this project?
// 							</h3>
// 							<select
// 								type='text'
// 								name='contactBudget'
// 								id='contactTimeline'
// 								placeholder=''
// 								{...register('contactBudget', {
// 									required:
// 										'Please let us know your budget.',
// 								})}
// 								className={'w-full my-2 pl-2 border-b-2 mb-12 focus:border-none'}
// 							><option className='focus:border-none' value='$1,000-$5,000'>$1,000-$5,000</option>
// 							<option value='$5,000-$15,000'>$5,000-$15,000</option>
// 							<option value='$15,000-$30,000'>$15,000-$30,000</option>
// 							<option value='$30,000+'>$30,000+</option></select>
// 						</label>
// 						<button
// 							type='submit'
// 							className='bg-[#fae06a] text-gray-800 text-xl font-semibold w-full md:w-1/3 py-4 px-2 mt-4 hover:bg-[#94df57] transform hover:scale-105 shadow-md hover:shadow-lg transition duration-250'>
// 							SEND
// 						</button>
// 					</div>
// 				</div>
// 			</form>
// 		</div>
	)
}

export default ContactForm
