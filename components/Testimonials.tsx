import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Bloom & Wild's vitamin C serum transformed my dull skin in just two weeks. The glow is incredible, and knowing it's sustainably made makes me feel even better about my choice.",
      name: "Sarah Chen",
      role: "Marketing Director",
      image: "/images/testimonial-testimonials-0-1766158545966.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "As someone with sensitive skin, I was hesitant to try new products. But their gentle retinol formula gave me the anti-aging results I wanted without irritation. Science meets nature perfectly!",
      name: "Maria Rodriguez",
      role: "Wellness Coach",
      image: "/images/testimonial-testimonials-1-1766158546381.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "The packaging is beautiful, the results are visible, and I love supporting a brand that cares about the environment. My skin has never looked better at 45!",
      name: "Jennifer Adams",
      role: "Interior Designer",
      image: "/images/testimonial-testimonials-2-1766158546943.jpg",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-pink-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-primary-500">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real people who trust Bloom & Wild for their skincare journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent-500 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover ring-4 ring-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary-500 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial) => (
                <Image
                  key={testimonial.id}
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-gray-700 font-medium ml-4">
              Join 10,000+ happy customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}