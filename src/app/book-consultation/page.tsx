"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type ConsultationFormData = {
  name: string;
  email: string;
  phone: string;
  preferredTrainer: "male" | "female" | "no-preference";
  preferredTime: string;
  goals: string;
};

export default function BookConsultation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsultationFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: ConsultationFormData) => {
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
            Thank you for booking a consultation!
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We will contact you shortly to confirm your consultation time and
            match you with the perfect trainer.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Book Your Free Consultation
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Take the first step towards achieving your fitness goals. Fill out the
          form below to schedule your free consultation with one of our
          certified trainers.
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
                {...register("phone", { required: "Phone number is required" })}
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
              htmlFor="preferredTrainer"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Preferred Trainer Gender
            </label>
            <div className="mt-2">
              <select
                id="preferredTrainer"
                {...register("preferredTrainer")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              >
                <option value="no-preference">No Preference</option>
                <option value="male">Male Trainer</option>
                <option value="female">Female Trainer</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="preferredTime"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Preferred Consultation Time
            </label>
            <div className="mt-2">
              <input
                type="datetime-local"
                id="preferredTime"
                {...register("preferredTime", {
                  required: "Preferred time is required",
                })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              />
              {errors.preferredTime && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.preferredTime.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="goals"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Your Fitness Goals
            </label>
            <div className="mt-2">
              <textarea
                id="goals"
                rows={4}
                {...register("goals", {
                  required: "Please describe your fitness goals",
                })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="Tell us about your fitness goals and what you hope to achieve..."
              />
              {errors.goals && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.goals.message}
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
              {isSubmitting ? "Submitting..." : "Book Consultation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
