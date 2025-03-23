import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">GoaTaxi</h3>
            <p className="text-gray-300 mb-4">
              Providing reliable and affordable taxi services across Goa since 2010. Your comfort and safety are our top
              priorities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#airport" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link href="/services#railway" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Railway Station Pickup
                </Link>
              </li>
              <li>
                <Link href="/services#sightseeing" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Sightseeing Tours
                </Link>
              </li>
              <li>
                <Link href="/services#outstation" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Outstation Trips
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                <span className="text-gray-300">+91 96993 09907</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                <span className="text-gray-300">info@goataxiservice.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                <span className="text-gray-300">Panjim, Goa, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GoaTaxi Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

