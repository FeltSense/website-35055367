import { Microscope, Leaf, User, Calendar, Shield, Sparkles } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Microscope,
      title: 'Clinically Proven Natural Ingredients',
      description: 'Science-backed formulations with botanicals tested for efficacy and purity, delivering powerful results naturally.'
    },
    {
      icon: Leaf,
      title: 'Sustainable & Eco-Friendly Packaging',
      description: 'Biodegradable packaging and refillable containers that protect your skin while preserving our planet.'
    },
    {
      icon: User,
      title: 'Personalized Skincare Routines',
      description: 'Custom-curated regimens tailored to your unique skin type, concerns, and lifestyle for optimal results.'
    },
    {
      icon: Calendar,
      title: 'Visible Results in 30 Days',
      description: 'Experience transformative improvements in skin texture, tone, and radiance within just one month of use.'
    },
    {
      icon: Shield,
      title: '100% Satisfaction Guarantee',
      description: 'Love your skin transformation or receive a full refund. We stand behind every product with confidence.'
    },
    {
      icon: Sparkles,
      title: 'Luxury That Cares',
      description: 'Premium quality meets conscious beauty with formulations that pamper your skin and respect the environment.'
    }
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-slate-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose 
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent"> Bloom & Wild</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect harmony of nature and science with skincare that transforms your complexion while caring for our planet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-primary-200"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Sparkles className="w-5 h-5 text-accent-500" />
            <span className="text-gray-700 font-medium">Trusted by 50,000+ happy customers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}