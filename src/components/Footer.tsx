'use client'
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-neutral-400 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#features" className="text-base text-neutral-300 hover:text-white transition-colors duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#demo" className="text-base text-neutral-300 hover:text-white transition-colors duration-200">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#waitlist" className="text-base text-neutral-300 hover:text-white transition-colors duration-200">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-neutral-300 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-neutral-300 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-neutral-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-400 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-neutral-300 hover:text-white transition-colors duration-200">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-neutral-300 hover:text-white transition-colors duration-200">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-400 tracking-wider uppercase">
              Connect
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-neutral-300 hover:text-white transition-colors duration-200">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-neutral-300 hover:text-white transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-700 pt-8">
          <p className="text-base text-neutral-400 text-center">
            © 2025 Flow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 