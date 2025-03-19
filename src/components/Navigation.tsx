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
  megaMenu?: boolean;
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
    megaMenu: true,
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
      <div className="bg-primary-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between">
            <p className="text-sm">
              Special offer: 50% off your first month of training!
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/login" className="hover:text-gray-200">
                MY ACCOUNT
              </Link>
              <Link href="/contact" className="hover:text-gray-200">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-3xl font-bold text-primary-600">
                  FitHome
                </span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-12">
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
                            ? "text-primary-600"
                            : "text-gray-700 hover:text-primary-600",
                          "group inline-flex items-center px-1 text-sm font-bold tracking-wider outline-none"
                        )}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon
                          className={classNames(
                            "ml-2 h-4 w-4 transition-transform",
                            hoveredItem === item.name ? "rotate-180" : ""
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                >
                                  {isServiceItem(subItem) && subItem.icon && (
                                    <subItem.icon
                                      className="h-6 w-6 flex-shrink-0 text-primary-600"
                                      aria-hidden="true"
                                    />
                                  )}
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {subItem.name}
                                    </p>
                                    {isServiceItem(subItem) &&
                                      subItem.description && (
                                        <p className="mt-1 text-sm text-gray-500">
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
                          ? "text-primary-600"
                          : "text-gray-700 hover:text-primary-600",
                        "text-sm font-bold tracking-wider"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link
                href="/book-consultation"
                className="rounded-md bg-primary-600 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-primary-500 transition duration-150 ease-in-out"
              >
                GET STARTED TODAY
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </Disclosure.Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <Disclosure.Panel className="md:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => (
              <Fragment key={item.name}>
                <Disclosure.Button
                  as={Link}
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? "bg-primary-50 text-primary-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary-600",
                    "block py-2 pl-3 pr-4 text-base font-bold"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
                {item.items && (
                  <div className="pl-4">
                    {item.items.map((subItem) => (
                      <Disclosure.Button
                        key={subItem.name}
                        as={Link}
                        href={subItem.href}
                        className="block py-2 pl-3 pr-4 text-sm text-gray-600 hover:text-primary-600"
                      >
                        {subItem.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                )}
              </Fragment>
            ))}
            <div className="mt-4 px-4">
              <Link
                href="/book-consultation"
                className="block w-full rounded-md bg-primary-600 px-4 py-3 text-center text-base font-bold text-white shadow-sm hover:bg-primary-500"
              >
                GET STARTED TODAY
              </Link>
            </div>
          </div>
        </Disclosure.Panel>
      </Popover>
    </header>
  );
}
