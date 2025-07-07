const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Freelance Designer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote:
        "I had my portfolio live in under 30 minutes. The interface is incredibly intuitive and the results look professional.",
    },
    {
      name: "Maria Rodriguez",
      role: "Photography Student",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b152d29b?w=150&h=150&fit=crop&crop=face",
      quote:
        "Perfect for showcasing my photography work. The gallery layouts are beautiful and my clients love the clean design.",
    },
    {
      name: "David Kim",
      role: "Web Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote:
        "As a developer, I appreciate good design tools. This platform strikes the perfect balance between simplicity and power.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by <span className="text-green-600">creators</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who trust us to showcase their best
            work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
