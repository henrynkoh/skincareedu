import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkincareEdu - Personalized Skincare Education",
  description: "Learn about skincare ingredients, track your skin progress, and access personalized skincare routines and education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background min-h-screen`}>
        <Navbar />
        <main>
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">SkincareEdu</h3>
                <p className="text-sm text-gray-300">
                  Personalized skincare education platform combining the best features of 
                  Stilla, SkinVision, and Think Dirty.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-3">Features</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Ingredient Scanner</li>
                  <li>Skin Monitoring</li>
                  <li>Education Classes</li>
                  <li>Community Support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Help Center</li>
                  <li>Blog</li>
                  <li>API Documentation</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>support@skincareedu.com</li>
                  <li>+1 (555) 123-4567</li>
                  <li>1234 Skincare Ave.</li>
                  <li>Social Media</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
              © {new Date().getFullYear()} SkincareEdu. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 