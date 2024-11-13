import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Plus,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { footerData } from "@/Data/LandingPage/Footer";

export default function Footer() {
  // Filter out the "Make" column and keep only Solutions, Resources, and Company
  const filteredColumns = footerData.columns.filter((col) =>
    ["Solutions", "Resources", "Company"].includes(col.title)
  );

  return (
    <footer className="bg-[#070314] text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Subscribe Section */}
          <div className="lg:w-1/3">
            <h3 className="text-base font-medium mb-4">
              {footerData.newsletter.title}
            </h3>
            <Input
              type="email"
              placeholder={footerData.newsletter.inputPlaceholder}
              className="bg-white text-black mb-2 w-full"
            />
            <p className="text-xs text-gray-300 mb-4">
              {footerData.newsletter.disclaimer
                .split("Privacy Notice")
                .map((part, index) =>
                  index === 0 ? (
                    part
                  ) : (
                    <>
                      <Link
                        href="#"
                        className="text-teal-400 hover:underline"
                      >
                        Privacy Notice
                      </Link>
                      {part}
                    </>
                  )
                )}
            </p>
            <button
              className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent text-sm font-medium flex items-center gap-2 transition-transform duration-300 relative hover:scale-105
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:via-cyan-400 after:to-green-500 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              {footerData.newsletter.buttonText}
            </button>
          </div>

          {/* Right-aligned columns */}
          <div className="lg:w-2/4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-medium mb-3">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs hover:text-gray-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs">{footerData.bottomSection.copyright}</p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            <Link
              href={footerData.bottomSection.socialMedia.facebook}
              className="hover:text-gray-300"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href={footerData.bottomSection.socialMedia.instagram}
              className="hover:text-gray-300"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href={footerData.bottomSection.socialMedia.twitter}
              className="hover:text-gray-300"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href={footerData.bottomSection.socialMedia.linkedin}
              className="hover:text-gray-300"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={footerData.bottomSection.socialMedia.youtube}
              className="hover:text-gray-300"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
