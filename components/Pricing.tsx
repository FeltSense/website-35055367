'use client'

import { Check, Crown, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-emerald-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Exclusive Pre-Launch Access
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Reserve Your <span className="text-primary-500">Spot</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be among the first to experience our revolutionary skincare collection. 
            Limited founding member positions available.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-all duration-300">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-accent-400 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Founding Member
              </div>
            </div>

            <div className="pt-12 pb-8 px-8">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  $29
                  <span className="text-lg font-normal text-gray-500 ml-2">one-time</span>
                </div>
                <p className="text-gray-600">Secure your early access today</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  'Complete 3-step skincare routine',
                  '30-day supply of premium formulas',
                  'Exclusive founding member pricing',
                  'Priority customer support access',
                  'First access to new product launches'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-secondary-100 rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-secondary-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link 
                href="https://buy.stripe.com/prod_TJtceEOGnyYvh1"
                className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-8 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Pre-Order for $29
              </Link>

              {/* Urgency Text */}
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500 mb-2">
                  Join <span className="font-semibold text-primary-600">247+ others</span> who have reserved their spot
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-amber-700 bg-amber-50 px-3 py-2 rounded-full">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  Limited spots remaining
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-8 space-y-2">
            <p className="text-sm text-gray-500">✨ Science-backed formulations</p>
            <p className="text-sm text-gray-500">🌿 Sustainably sourced ingredients</p>
            <p className="text-sm text-gray-500">💚 Eco-friendly packaging</p>
          </div>
        </div>
      </div>
    </section>
  )
}