"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

const benefits = [
  {
    name: "Flexible Schedule",
    description:
      "Choose your working hours and maintain a healthy work-life balance.",
  },
  {
    name: "Competitive Pay",
    description:
      "Earn competitive rates with opportunities for bonuses based on client satisfaction and retention.",
  },
  {
    name: "Professional Development",
    description:
      "Access to continuing education and certification programs to enhance your skills.",
  },
  {
    name: "Client Base",
    description:
      "We handle client acquisition, allowing you to focus on what you do best - training.",
  },
  {
    name: "Support System",
    description:
      "Join a community of passionate fitness professionals and receive mentorship from experienced trainers.",
  },
  {
    name: "Career Growth",
    description:
      "Clear path for advancement with opportunities to take on leadership roles.",
  },
];

type CareerFormData = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  certifications: string;
  motivation: string;
  resume: FileList;
};

export default function Careers() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CareerFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: CareerFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log("Form data:", data);
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Thank you for your application!
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We will review your application and contact you soon to discuss the
            next steps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100 to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Join Our Team of Elite Trainers
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Turn your passion for fitness into a rewarding career. We&apos;re
              looking for passionate individuals who want to make a difference
              in people&apos;s lives through personalized in-home training.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Benefits
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Work With Us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a supportive environment where trainers can thrive and
            build successful careers.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {benefit.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Application form */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 bg-gray-50">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Apply Now
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Ready to start your journey with us? Fill out the application form
            below.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Years of Experience
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  id="experience"
                  {...register("experience", {
                    required: "Experience is required",
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
                {errors.experience && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.experience.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="certifications"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Certifications
              </label>
              <div className="mt-2">
                <textarea
                  id="certifications"
                  rows={3}
                  {...register("certifications", {
                    required: "Please list your certifications",
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  placeholder="List your relevant certifications..."
                />
                {errors.certifications && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.certifications.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="motivation"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Why do you want to join our team?
              </label>
              <div className="mt-2">
                <textarea
                  id="motivation"
                  rows={4}
                  {...register("motivation", {
                    required: "Please share your motivation",
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  placeholder="Tell us why you'd be a great fit for our team..."
                />
                {errors.motivation && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.motivation.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Resume
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  {...register("resume", {
                    required: "Please upload your resume",
                  })}
                  className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                />
                {errors.resume && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.resume.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
