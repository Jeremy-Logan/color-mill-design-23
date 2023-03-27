import { useForm } from "react-hook-form";

interface FormData  {
  name: string;
  email: string;
  description: string;
  timeline: string;
  budget: string;
  
};




const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
	// Encode form data
	const formData = new FormData();
	for (const key in data) {
	  if (Object.prototype.hasOwnProperty.call(data, key)) {
		formData.append(key, data[key as keyof FormData]);
	  }
	}
  
	// Convert FormData entries to a string array
	const formEntries: string[][] = [];
	for (const entry of formData.entries()) {
	  formEntries.push([entry[0], entry[1].toString()]);
	}
  
	// Send form data to Netlify
	try {
	  const response = await fetch(window.location.pathname, {
		method: 'POST',
		body: new URLSearchParams(formEntries),
	  });
  
	  if (response.ok) {
		console.log('Form submitted successfully');
		// Reset form or display success message
	  } else {
		console.log('Form submission failed');
		// Display error message
	  }
	} catch (error) {
	  console.error('Error submitting form:', error);
	  // Display error message
	}
  };
  
  

  return (
	<div className='mt-16 max-w-3xl w-full mx-auto justify-center flex flex-col'>
			<h3 className='text-2xl md:text-3xl text-center'>
				How can we work together? Let&apos;s talk it over.
			</h3>
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      id="contact"
      className="rounded-lg bg-white p-6 mt-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you are human: <input name="bot-field" />
        </label>
      </p>
      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block text-base font-semibold">
          What&apos;s your name?
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="w-full rounded border border-gray-300 p-2"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block text-base font-semibold">
          What&apos;s your organization&apos;s name?
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="w-full rounded border border-gray-300 p-2"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block text-base font-semibold">
          What&apos;s your email address?
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
          className="w-full rounded border border-gray-300 p-2"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="mb-2 block text-base font-semibold"
        >
          Briefly tell us about your project goals.
        </label>
        <textarea
          id="description"
          {...register("description", {
            required: "Please tell us about you project goals.",
          })}
          className="w-full rounded border border-gray-300 p-2"
          rows={5}
        ></textarea>
        {errors.description && (
          <p className="mt-1 text-xs text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="timeline" className="mb-2 block text-base font-semibold">
          Do you have a timeline in mind?
        </label>
        <textarea
          id="timeline"
          {...register("timeline", {
            required: "Please let us know your timeline",
          })}
          className="w-full rounded border border-gray-300 p-2"
        ></textarea>
        {errors.description && (
          <p className="mt-1 text-xs text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="budget" className="mb-2 mr-2 block text-xl">
          What have you budgeted for this project?
        </label>
        <select
          id="budget"
          {...register("budget", { required: "Budget is required" })}
          className="my-2 mb-12 w-full border-b-2 pl-2 focus:border-none"
        >
          <option className="focus:border-none" value="$1,000-$5,000">
            $1,000-$5,000
          </option>
          <option value="$5,000-$15,000">$5,000-$15,000</option>
          <option value="$15,000-$30,000">$15,000-$30,000</option>
          <option value="$30,000+">$30,000+</option>
        </select>
        {errors.budget && (
          <p className="mt-1 text-xs text-red-500">{errors.budget.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="duration-250 mt-4 w-full transform bg-[#fae06a] py-4 px-2 text-xl font-semibold text-gray-800 shadow-md transition hover:scale-105 hover:bg-[#94df57] hover:shadow-lg md:w-1/3"
      >
        Submit
      </button>
    </form>
	</div>
  );
};

export default ContactForm;
