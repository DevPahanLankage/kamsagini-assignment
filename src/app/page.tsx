import Link from "next/link";
import Image from "next/image";
import {
  UserGroupIcon,
  HomeIcon,
  CalendarIcon,
  CheckBadgeIcon,
  ClockIcon,
  ChartBarIcon,
  UserIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Choose Your Trainer",
    description:
      "Select from our certified male or female trainers based on your preferences and goals.",
    icon: UserGroupIcon,
  },
  {
    name: "Train at Home",
    description:
      "No gym membership needed. Get professional training in the comfort of your own home.",
    icon: HomeIcon,
  },
  {
    name: "Flexible Scheduling",
    description:
      "Book sessions at times that work for you with our easy-to-use scheduling system.",
    icon: CalendarIcon,
  },
  {
    name: "Career Growth",
    description:
      "Achieve your fitness goals and unlock the opportunity to become a certified trainer.",
    icon: CheckBadgeIcon,
  },
];

const programs = [
  {
    name: "Weight Loss",
    description:
      "Customized programs to help you reach your ideal weight through effective workouts and nutrition guidance.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Strength Training",
    description:
      "Build muscle, increase strength, and improve overall fitness with our specialized strength programs.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "HIIT Workouts",
    description:
      "High-intensity interval training sessions designed to maximize calorie burn and improve cardiovascular health.",
    image:
      "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Book a Consultation",
    description:
      "Schedule your free consultation to discuss your fitness goals and preferences.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    step: 2,
    title: "Meet Your Trainer",
    description:
      "Get matched with a certified trainer who fits your needs and personality.",
    icon: UserIcon,
  },
  {
    step: 3,
    title: "Personalized Plan",
    description:
      "Receive a customized workout and nutrition plan tailored to your goals.",
    icon: ChartBarIcon,
  },
  {
    step: 4,
    title: "Start Training",
    description:
      "Begin your fitness journey with convenient in-home training sessions.",
    icon: ClockIcon,
  },
];

const testimonials = [
  {
    content:
      "Working with FitHome has transformed my life. The convenience of having a trainer come to my home made it so much easier to stick to my fitness routine.",
    author: "Sarah M.",
    role: "Lost 30 lbs in 6 months",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    content:
      "The trainers are incredibly knowledgeable and professional. They created a program that perfectly fits my busy schedule and fitness goals.",
    author: "Michael R.",
    role: "Gained 15 lbs muscle mass",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    content:
      "I love how I can choose between male and female trainers. My trainer understands exactly what I need and pushes me to achieve more than I thought possible.",
    author: "Emily L.",
    role: "Improved strength & flexibility",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative">
        {/* Background image */}
        <div className="absolute inset-0 h-[600px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Personal training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
              Transform Your Life with Personal Training at Home
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Experience the convenience of professional fitness training in
              your own space. Our certified trainers bring the gym to you.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/book-consultation"
                className="rounded-md bg-primary-600 px-8 py-4 text-lg font-bold text-white shadow-sm hover:bg-primary-500 inline-flex justify-center"
              >
                GET STARTED TODAY
              </Link>
              <Link
                href="/services"
                className="rounded-md bg-white/10 px-8 py-4 text-lg font-bold text-white shadow-sm ring-1 ring-white/20 hover:bg-white/20 inline-flex justify-center"
              >
                VIEW PRICING
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional banner */}
      <div className="bg-primary-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg font-bold">
            Special Offer: Save 50% on your first month of training! Limited
            time only.
          </p>
        </div>
      </div>

      {/* Training Programs section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Personalized Training Programs
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose from our variety of specialized training programs, each
              tailored to your specific goals and needs.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.name}
                className="flex flex-col overflow-hidden rounded-lg"
              >
                <div className="flex-shrink-0">
                  <Image
                    className="h-48 w-full object-cover"
                    src={program.image}
                    alt={program.name}
                    width={400}
                    height={200}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {program.name}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Getting started with FitHome is easy. Follow these simple steps to
              begin your fitness journey.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {howItWorks.map((step) => (
                <div
                  key={step.step}
                  className="flex flex-col items-center text-center"
                >
                  <div className="rounded-lg bg-primary-600 p-3 mb-6">
                    <step.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    <div className="mb-2 text-primary-600">
                      Step {step.step}
                    </div>
                    {step.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{step.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hear from our clients who have transformed their lives with
              FitHome personal training.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="flex flex-col justify-between"
              >
                <div className="flex items-center gap-x-6">
                  <Image
                    className="h-16 w-16 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-primary-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg leading-8 text-gray-600">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for your fitness journey
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We bring professional fitness training to your doorstep, making it
              easier than ever to achieve your health and fitness goals.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-5 w-5 flex-none text-primary-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-primary-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your fitness journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Book your free consultation today and take the first step towards
              achieving your fitness goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/book-consultation"
                className="rounded-md bg-white px-8 py-4 text-lg font-bold text-primary-600 shadow-sm hover:bg-gray-100"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
