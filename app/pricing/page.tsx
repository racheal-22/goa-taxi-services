import Image from "next/image"
import { Plane, Train, MapPin, Map } from "lucide-react"

export default function Pricing() {
  const airportPricing = [
    {
      id: "dabolim-north",
      title: "Dabolim Airport Pickup",
      image: "/dabolim.png?height=200&width=300",
      description: "Calangute, Baga, Anjuna, Vagator",
      price: "₹1850",
      
      time: "~1 hour",
    },
    {
      id: "dabolim-south",
      title: "Dabolim Airport: Drop",
      image: "/dabolim.png?height=200&width=300",
      description: "Colva, Benaulim, Palolem",
      price: "₹1500",
      
      time: "~45 min - 1.5 hours",
    },
    {
      id: "mopa-north",
      title: "Mopa Airport Pickup",
      image: "/mopa.png?height=200&width=300",
      description: "Calangute, Baga, Anjuna, Vagator",
      price: "₹2200",
      
      time: "~50 min",
    },
    {
      id: "mopa-south",
      title: "Mopa Airport Drop",
      image: "/mopa.png?height=200&width=300",
      description: "Colva, Benaulim, Palolem",
      price: "₹2000",
      
      time: "~2 hours",
    },
  ]

  const railwayPricing = [
    {
      id: "madgaon-north",
      title: "Karlim Railway Station",
      image: "/Mstation.png?height=200&width=300",
      
      price: "₹1200",
      distance: "~50 km",
      time: "~1.5 hours",
    },
    {
      id: "madgaon-south",
      title: "Madgaon Station to South Goa",
      image: "/Mstation2.png?height=200&width=300",
      
      price: "₹1800",
      distance: "~15-40 km",
      time: "~30-60 min",
    },
    {
      id: "thivim-north",
      title: "Thivim Station to North Goa",
      image: "/thivi.png?height=200&width=300",
      
      price: "₹1600",
      distance: "~20 km",
      time: "~40 min",
    },
  ]

  const sightseeingPricing = [
    {
      id: "north-goa",
      title: "North Goa Tour",
      image: "/north.png?height=200&width=300",
      description: "Calangute, Baga, Fort Aguada, Anjuna, Vagator",
      price: "₹3000",
      duration: "Full day (8 hours)",
      includes: "Driver, Fuel, Parking",
    },
    {
      id: "south-goa",
      title: "South Goa Tour",
      image: "/south.png?height=200&width=300",
      description: "Colva, Benaulim, Palolem, Butterfly Beach",
      price: "₹3500",
      duration: "Full day (8 hours)",
      includes: "Driver, Fuel, Parking",
    },
    {
      id: "dudhsagar",
      title: "Dudhsagar Waterfall Trip",
      image: "/dhudh.png?height=200&width=300",
      description: "Visit the magnificent Dudhsagar Falls",
      price: "₹4800",
      duration: "Full day (10 hours)",
      includes: "Driver, Fuel, Parking ",
    },
    {
      id: "spice-plantation",
      title: "Spice Plantation Tour",
      image: "/plant.png?height=200&width=300",
      description: "Visit spice plantations with lunch",
      price: "₹2500",
      duration: "Half day (5 hours)",
      includes: "Driver, Fuel, Parking ",
    },
  ]

  const outstationPricing = [
    {
      id: "goa-mumbai",
      title: "Goa to Mumbai",
      image: "/mumbai.png?height=200&width=300",
      
      
    },
    {
      id: "goa-bangalore",
      title: "Goa to Bangalore",
      image: "/benglore.png?height=400&width=300",
    },
    {
      id: "goa-belagavi",
      title: "Goa to Belagavi",
      image: "/belagavi.png?height=200&width=300",
      
   
    },
  ]

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Pricing</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Transparent and competitive pricing for all your transportation needs in Goa
        </p>

        {/* Airport Transfers */}
        <section id="airport" className="mb-16">
          <div className="flex items-center mb-8">
            <Plane className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold">Airport Transfers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {airportPricing.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-40">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <p className="text-xl font-bold text-yellow-800">{item.price}</p>
                    <div className="text-sm text-gray-600 mt-1">
                      <p>Distance: {item.distance}</p>
                      <p>Travel time: {item.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Railway Transfers */}
        <section id="railway" className="mb-16">
          <div className="flex items-center mb-8">
            <Train className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold">Railway & Local Stations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {railwayPricing.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-40">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <p className="text-xl font-bold text-yellow-800">{item.price}</p>
                    <div className="text-sm text-gray-600 mt-1">
                      <p>Distance: {item.distance}</p>
                      <p>Travel time: {item.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sightseeing */}
        <section id="sightseeing" className="mb-16">
          <div className="flex items-center mb-8">
            <MapPin className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold">Sightseeing & Picnic Spots</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sightseeingPricing.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-40">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <p className="text-xl font-bold text-yellow-800">{item.price}</p>
                    <div className="text-sm text-gray-600 mt-1">
                      <p>Duration: {item.duration}</p>
                      <p>Includes: {item.includes}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outstation */}
        <section id="outstation" className="mb-16">
          <div className="flex items-center mb-8">
            <Map className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold">Outstation Trips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outstationPricing.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-40">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <p className="text-xl font-bold text-yellow-800">{item.price}</p>
                    <div className="text-sm text-gray-600 mt-1">
                      <p>Distance: {item.distance}</p>
                      <p>Travel time: {item.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notes */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Prices may vary based on season, vehicle type, and specific requirements</li>
            
            <li>Night charges (7 PM - 10 PM): Additional Rs. 400</li>
            
            <li>For round trips, discounts are available</li>
          </ul>
          <div className="mt-6 text-center">
            <a
              href="https://wa.me/919699309907?text=I%20want%20to%20know%20more%20about%20pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-all inline-block"
            >
              Ask for Custom Quote
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

