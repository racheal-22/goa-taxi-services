import Link from "next/link"
import Image from "next/image"
import { Phone, Navigation, Clock, Star } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/car.jpg?height=800&width=1200"
          alt="Goa Taxi Service"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Menezes Taxi Service</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Reliable, affordable and comfortable taxi service in Goa
          </p>
          <a
            href="https://wa.me/919699309907?text=I%20want%20to%20book%20a%20taxi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105"
          >
            Book a Ride
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Taxi Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Available round the clock for your convenience</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">Drivers with extensive knowledge of Goa</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comfortable Rides</h3>
              <p className="text-gray-600">Clean and well-maintained vehicles</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Book directly via WhatsApp or phone call</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Goa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your taxi now and experience the best of Goa with our reliable service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-all"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-yellow-500 text-yellow-500 hover:text-black font-bold py-3 px-8 border border-yellow-500 hover:border-transparent rounded-full text-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 inline-block" fill="#EAB308" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Great service! Our driver was punctual and very knowledgeable about Goa. Made our trip so much better."
              </p>
              <p className="font-semibold">- Racheal from Pune</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 inline-block" fill="#EAB308" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Very reliable and affordable taxi service. We used them for airport transfers and daily sightseeing.
                Highly recommend!"
              </p>
              <p className="font-semibold">- Raj from Mumbai</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 inline-block" fill="#EAB308" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The WhatsApp booking system is so convenient! Clean cars and friendly drivers. Will use again on our
                next visit."
              </p>
              <p className="font-semibold">- Michael from Belagavi</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

