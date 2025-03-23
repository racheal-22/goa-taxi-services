import Image from "next/image"
import Link from "next/link"
import { Plane, Train, MapPin, Map } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Airport Transfers",
      description: "Reliable pickup and drop services from North & South Goa Airports",
      icon: <Plane className="w-8 h-8" />,
      image: "/airport.png?height=300&width=400",
      link: "/pricing#airport",
    },
    {
      id: 2,
      title: "Railway & Local Stations",
      description: "Convenient transfers from Madgaon, Thivim and other stations",
      icon: <Train className="w-8 h-8" />,
      image: "/car.jpg?height=300&width=400",
      link: "/pricing#railway",
    },
    {
      id: 3,
      title: "Sightseeing & Picnic Spots",
      description: "Explore Waterfalls, Candolim, Baga and other beautiful locations",
      icon: <MapPin className="w-8 h-8" />,
      image: "/seen.png?height=300&width=400",
      link: "/pricing#sightseeing",
    },
    {
      id: 4,
      title: "Outstation Trips",
      description: "Comfortable journeys to Karnataka, Maharashtra and beyond",
      icon: <Map className="w-8 h-8" />,
      image: "/car.jpg?height=300&width=400",
      link: "/pricing#outstation",
    },
  ]

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We offer a wide range of taxi services to meet all your transportation needs in Goa
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 -mt-14 ml-4 border-4 border-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Custom Tour Packages</h2>
          <p className="text-lg text-gray-600 mb-6">
            Looking for a customized tour experience? We offer personalized tour packages tailored to your preferences
            and schedule.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">North Goa Tour</h3>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Calangute Beach</li>
                <li>Baga Beach</li>
                <li>Fort Aguada</li>
                <li>Anjuna Beach</li>
                <li>Chapora Fort</li>
              </ul>
              <p className="font-semibold">Duration: 8 hours</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">South Goa Tour</h3>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Colva Beach</li>
                <li>Palolem Beach</li>
                <li>Dudhsagar Waterfalls</li>
                <li>Spice Plantations</li>
                <li>Old Goa Churches</li>
              </ul>
              <p className="font-semibold">Duration: 9 hours</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/919699309907?text=I%20want%20to%20book%20a%20custom%20tour"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-all inline-block"
            >
              Inquire About Custom Tours
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

