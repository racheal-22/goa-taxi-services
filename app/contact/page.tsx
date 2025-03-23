"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Format the message for WhatsApp
    const formattedMessage = encodeURIComponent(
      `*New Message from Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n\n` +
      `*Message:*\n${formData.message}`
    );
  
    // Show success toast
    toast({
      title: "Message Ready to Send!",
      description: "You'll be redirected to WhatsApp to complete sending your message.",
    });
  
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  
    // Short delay before redirecting to WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/919699309907?text=${formattedMessage}`, '_blank');
    }, 1000);
  };

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Get in touch with us for bookings, inquiries, or any questions you may have
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-6">Driver Details</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Jeron Menezes</h3>
                    <p className="text-gray-600">+91 96993 09907</p>
                    <div className="mt-2">
                      <a
                        href="https://wa.me/919699309907"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@goataxiservice.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Service Areas</h3>
                    <p className="text-gray-600">North Goa, South Goa, Picnic spots, Tourist places </p>
                    <p className="text-gray-600">Airport, Out Stations, Railway Station</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Location</h2>
              <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492485.5888038339!2d73.73211079218751!3d15.347085500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1647834159777!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="What can we help you with?"
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How do I book a taxi?</h3>
              <p className="text-gray-600">
                You can book a taxi by calling us, sending a WhatsApp message, or filling out the contact form on this
                page.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept cash, UPI payments.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can I book a taxi for multiple days?</h3>
              <p className="text-gray-600">
                Yes, we offer multi-day packages with special rates. Contact us for a custom quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

