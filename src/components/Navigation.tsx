"use client";

import { Fragment, useState } from "react";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
  UserGroupIcon,
  ClockIcon,
  ScaleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ServiceItem {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface CompanyItem {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  href: string;
  items?: ServiceItem[] | CompanyItem[];
}

const services: ServiceItem[] = [
  {
    name: "Personal Training",
    description: "One-on-one customized training sessions",
    href: "/services",
    icon: UserGroupIcon,
  },
  {
    name: "Weight Loss Programs",
    description: "Structured programs for effective weight loss",
    href: "/services",
    icon: ScaleIcon,
  },
  {
    name: "HIIT Training",
    description: "High-intensity interval training sessions",
    href: "/services",
    icon: BoltIcon,
  },
  {
    name: "Flexible Scheduling",
    description: "Book sessions at your convenience",
    href: "/services",
    icon: ClockIcon,
  },
];

const company: CompanyItem[] = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Press", href: "/press" },
];

const navigation: NavigationItem[] = [
  { name: "HOME", href: "/" },
  {
    name: "SERVICES",
    href: "/services",
    items: services,
  },
  { name: "TRAINERS", href: "/trainers" },
  {
    name: "COMPANY",
    href: "#",
    items: company,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function isServiceItem(item: ServiceItem | CompanyItem): item is ServiceItem {
  return "description" in item && "icon" in item;
}

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="bg-white">
      {/* Top bar */}
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between">
            <p className="text-sm font-medium text-gray-300">
              Special offer: 50% off your first month of training!
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <span className="h-4 w-px bg-gray-600" aria-hidden="true" />
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="relative bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-gray-900">
                  FitHome
                </span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative"
                >
                  {item.items ? (
                    <Popover className="relative">
                      <Popover.Button
                        className={classNames(
                          pathname === item.href
                            ? "text-gray-900 border-b-2 border-gray-900"
                            : "text-gray-600 hover:text-gray-900",
                          "group inline-flex items-center px-1 py-2 text-sm font-medium tracking-wide outline-none"
                        )}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon
                          className={classNames(
                            "ml-1 h-4 w-4 transition-transform",
                            hoveredItem === item.name ? "rotate-180" : ""
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as="div"
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-1 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-4 bg-white p-6">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 transition-colors"
                                >
                                  {isServiceItem(subItem) && subItem.icon && (
                                    <subItem.icon
                                      className="h-5 w-5 flex-shrink-0 text-gray-900"
                                      aria-hidden="true"
                                    />
                                  )}
                                  <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-900">
                                      {subItem.name}
                                    </p>
                                    {isServiceItem(subItem) &&
                                      subItem.description && (
                                        <p className="mt-1 text-xs text-gray-600">
                                          {subItem.description}
                                        </p>
                                      )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ) : (
                    <Link
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? "text-gray-900 border-b-2 border-gray-900"
                          : "text-gray-600 hover:text-gray-900",
                        "text-sm font-medium tracking-wide px-1 py-2"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link
                href="/book-consultation"
                className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                Book Free Consultation
              </Link>
            </div>

            {/* Mobile menu */}
            <div className="flex items-center md:hidden">
              <Disclosure>
                {({ open }) => (
                  <div>
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>

                    <Disclosure.Panel className="absolute left-0 right-0 top-full z-10 bg-white shadow-lg">
                      <div className="space-y-1 px-4 pb-3 pt-2">
                        {navigation.map((item) => (
                          <div key={item.name}>
                            <Disclosure.Button
                              as={Link}
                              href={item.href}
                              className={classNames(
                                pathname === item.href
                                  ? "text-gray-900 bg-gray-50"
                                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                                "block w-full py-2 text-left text-sm font-medium"
                              )}
                            >
                              {item.name}
                            </Disclosure.Button>
                            {item.items && (
                              <div className="pl-4 bg-gray-50">
                                {item.items.map((subItem) => (
                                  <Disclosure.Button
                                    key={subItem.name}
                                    as={Link}
                                    href={subItem.href}
                                    className="block w-full py-2 text-left text-sm text-gray-600 hover:text-gray-900"
                                  >
                                    {subItem.name}
                                  </Disclosure.Button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                        <div className="mt-4 space-y-3">
                          <Link
                            href="/book-consultation"
                            className="block w-full rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                          >
                            Book Free Consultation
                          </Link>
                          <div className="flex items-center justify-center space-x-4 pt-2 border-t border-gray-200">
                            <Link
                              href="/login"
                              className="text-sm font-medium text-gray-600 hover:text-gray-900"
                            >
                              Sign In
                            </Link>
                            <span
                              className="h-4 w-px bg-gray-300"
                              aria-hidden="true"
                            />
                            <Link
                              href="/contact"
                              className="text-sm font-medium text-gray-600 hover:text-gray-900"
                            >
                              Contact
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
