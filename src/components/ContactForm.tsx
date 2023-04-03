import { useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog } from '@headlessui/react';

interface FormData  {
  name: string;
  companyName: string;
  email: string;
  description: string;
  timeline: string;
  budget: string;
  
};




const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const encode = (data: Record<string, any>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleRegistration = (values: Record<string, any>) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values })
    })
    .then(() => {
      setSuccessMessage('Thank you for contacting us! We will be in touch soon.');
    })
    .catch(error => console.log(error));
    reset()
    setShowModal(true);
  }

  return (
	<div className='mt-16 max-w-3xl w-full mx-auto justify-center flex flex-col'>
			<h3 className='text-2xl md:text-3xl text-center'>
				How can we work together? Let&apos;s talk it over.
			</h3>
    <form
       onSubmit={handleSubmit(handleRegistration)}
      method="POST"
      name="contact"
      action="color-mill-design-23"
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
        <label htmlFor="companyName" className="mb-2 block text-base font-semibold">
          What&apos;s your organization&apos;s name?
        </label>
        <input
          type="text"
          id="companyName"
          {...register("companyName", { required: " Organization name is required" })}
          className="w-full rounded border border-gray-300 p-2"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.companyName.message}</p>
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
    <Dialog
        open={showModal}
        onClose={() => setShowModal(false)}
        className="fixed z-40 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="bg-white p-8 z-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Form submitted successfully</h2>
            <p>Thank you for reaching out! We will be in touch soon.</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
	</div>
  );
};

export default ContactForm;
