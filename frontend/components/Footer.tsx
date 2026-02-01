"use client";
import React from "react";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Announcements", href: "#announcements" },
    { name: "Projects", href: "#projects" },
    { name: "Concerns", href: "#concerns" },
  ];

  const resources = [
    { name: "Student Handbook", href: "#handbook" },
    { name: "Events Calendar", href: "#calendar" },
    { name: "Documents", href: "#documents" },
    { name: "FAQs", href: "#faqs" },
  ];

  const socialLinks = [
    { icon: IconBrandFacebook, href: "#", label: "Facebook" },
    { icon: IconBrandInstagram, href: "#", label: "Instagram" },
    { icon: IconBrandTwitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/UCCP.png"
                alt="UCCP Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-bold text-lg text-black dark:text-white">
                  UCCP Main
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Supreme Student Council
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Serving the students of University of Cebu - Main Campus with
              excellence and dedication.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <a
                    href={resource.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <IconMapPin className="w-5 h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  University of Cebu - Main Campus, Cebu City
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <IconMail className="w-5 h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                <a
                  href="mailto:uccp@uc.edu.ph"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  uccp@uc.edu.ph
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <IconPhone className="w-5 h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                <a
                  href="tel:+639123456789"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  +63 912 345 6789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center md:text-left">
              © {new Date().getFullYear()} University of Cebu Council of
              Presidents - Main. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#privacy"
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
