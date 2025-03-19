const trainers = [
  {
    name: "Sarah Johnson",
    role: "Senior Personal Trainer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    specialties: ["Weight Loss", "HIIT", "Nutrition Planning"],
    description:
      "With over 8 years of experience, Sarah specializes in helping clients achieve their weight loss goals through personalized training programs and nutrition guidance.",
  },
  {
    name: "Michael Chen",
    role: "Certified Personal Trainer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    specialties: ["Strength Training", "Muscle Building", "Sports Performance"],
    description:
      "Michael brings his competitive sports background and strength training expertise to help clients build muscle and improve athletic performance.",
  },
  {
    name: "Emily Rodriguez",
    role: "Fitness Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    specialties: ["Yoga", "Functional Training", "Senior Fitness"],
    description:
      "Emily combines traditional fitness techniques with yoga and functional training to create balanced, sustainable workout programs for clients of all ages.",
  },
  {
    name: "James Wilson",
    role: "Personal Trainer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    specialties: ["Cardio Training", "Boxing", "Core Strength"],
    description:
      "James specializes in high-energy workouts that combine cardio, boxing, and core training to help clients improve their overall fitness and endurance.",
  },
];

export default function Trainers() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Expert Trainers
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our certified personal trainers are passionate about helping you
            achieve your fitness goals. Each trainer brings unique expertise and
            experience to create personalized workout programs.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {trainers.map((trainer) => (
            <li key={trainer.name} className="group relative">
              <div className="aspect-h-3 aspect-w-3 overflow-hidden rounded-2xl bg-gray-100">
                <img
                  className="object-cover object-center"
                  src={trainer.image}
                  alt={trainer.name}
                />
                <div className="flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white bg-opacity-90 p-4 rounded-lg w-full">
                    <h4 className="font-semibold text-gray-900">
                      {trainer.name}
                    </h4>
                    <p className="mt-1 text-sm text-gray-700">
                      {trainer.description}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {trainer.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">
                {trainer.role}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {trainer.specialties.map((specialty) => (
                  <li
                    key={specialty}
                    className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/10"
                  >
                    {specialty}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="mt-16 text-center">
          <a
            href="/book-consultation"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
