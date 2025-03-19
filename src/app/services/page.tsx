import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "/book-consultation",
    price: { monthly: "$199" },
    description: "Perfect for those just beginning their fitness journey.",
    features: [
      "2 sessions per week",
      "Personalized workout plan",
      "Basic nutrition guidance",
      "Progress tracking",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "/book-consultation",
    price: { monthly: "$299" },
    description: "Ideal for those serious about their fitness goals.",
    features: [
      "3 sessions per week",
      "Advanced workout programming",
      "Detailed nutrition planning",
      "Progress tracking with body composition",
      "24/7 chat support",
      "Monthly fitness assessments",
    ],
    featured: true,
  },
  {
    name: "Elite",
    id: "tier-elite",
    href: "/book-consultation",
    price: { monthly: "$399" },
    description: "For those who want the ultimate training experience.",
    features: [
      "4 sessions per week",
      "Elite workout programming",
      "Custom meal planning",
      "Advanced progress tracking",
      "Priority 24/7 support",
      "Weekly fitness assessments",
      "Recovery guidance",
    ],
    featured: false,
  },
];

const services = [
  {
    name: "Weight Loss Training",
    description:
      "Specialized programs designed to help you lose weight effectively and sustainably through a combination of cardio, strength training, and nutrition guidance.",
  },
  {
    name: "Strength & Muscle Building",
    description:
      "Focus on building lean muscle mass and increasing strength through progressive resistance training and proper nutrition planning.",
  },
  {
    name: "Functional Fitness",
    description:
      "Improve your daily life activities through exercises that enhance mobility, stability, and overall functional strength.",
  },
  {
    name: "Senior Fitness",
    description:
      "Tailored programs for older adults focusing on balance, flexibility, and strength to maintain independence and quality of life.",
  },
  {
    name: "Sports Performance",
    description:
      "Enhance your athletic performance with sport-specific training programs designed to improve speed, power, and agility.",
  },
  {
    name: "Post-Rehabilitation",
    description:
      "Safe and effective exercise programs for individuals recovering from injuries or surgery, working in coordination with healthcare providers.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Services() {
  return (
    <div className="bg-white">
      {/* Services section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Training Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a wide range of personalized training services to help you
            achieve your fitness goals. All programs are customized to your
            needs and delivered in the comfort of your home.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Pricing section */}
      <div className="relative isolate bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Choose the perfect training package that fits your goals and
              budget. All packages include a free initial consultation.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "relative bg-white shadow-2xl"
                    : "bg-white/5 sm:mx-8 lg:mx-0",
                  tier.featured ? "p-8 sm:p-10" : "p-6 sm:p-8",
                  "rounded-3xl"
                )}
              >
                <h3
                  className={classNames(
                    tier.featured ? "text-gray-900" : "text-white",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={classNames(
                    tier.featured ? "text-gray-600" : "text-gray-300",
                    "mt-4 text-sm leading-6"
                  )}
                >
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={classNames(
                      tier.featured ? "text-gray-900" : "text-white",
                      "text-4xl font-bold"
                    )}
                  >
                    {tier.price.monthly}
                  </span>
                  <span
                    className={classNames(
                      tier.featured ? "text-gray-600" : "text-gray-300",
                      "text-sm font-semibold"
                    )}
                  >
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className={classNames(
                    tier.featured ? "text-gray-600" : "text-gray-300",
                    "mt-8 space-y-3 text-sm leading-6"
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className={classNames(
                          tier.featured ? "text-primary-600" : "text-gray-500",
                          "h-6 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  className={classNames(
                    tier.featured
                      ? "bg-primary-600 text-white shadow-sm hover:bg-primary-500"
                      : "text-white ring-1 ring-inset ring-white/20 hover:ring-white/30",
                    "mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  )}
                >
                  Book Free Consultation
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
