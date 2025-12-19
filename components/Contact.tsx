'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent ml-3">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your skincare routine? We're here to help you discover the perfect science-backed solutions for your skin.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl shadow-primary-500/10 p-8 md:p-10 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-0 transition-colors duration-300 group-hover:border-gray-300"
                      placeholder="Your beautiful name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-0 transition-colors duration-300 group-hover:border-gray-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-0 transition-colors duration-300 group-hover:border-gray-300 resize-none"
                    placeholder="Tell us about your skincare journey and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-primary-600 hover:to-primary-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-primary-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Your Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl shadow-primary-500/10 p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Connect With Us
              </h3>
              
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group-hover:bg-primary-50">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Email Us</p>
                      <p className="text-gray-900 font-semibold">hello@bloomandwild.com</p>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group-hover:bg-secondary-50">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Call Us</p>
                      <p className="text-gray-900 font-semibold">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group-hover:bg-accent-50">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Visit Us</p>
                      <p className="text-gray-900 font-semibold">
                        123 Beauty Boulevard<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Customer Care Hours</h4>
              <div className="space-y-2 text-primary-100">
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: 12:00 PM - 5:00 PM</p>
              </div>
              <div className="mt-6 pt-6 border-t border-primary-400">
                <p className="text-sm text-primary-100">
                  Our skincare experts are standing by to help you achieve your most radiant skin yet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}