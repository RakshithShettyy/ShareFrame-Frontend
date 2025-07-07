import { Globe, Palette, Share2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Choose Your URL",
      description:
        "Pick a custom domain or use our free subdomain to establish your online presence instantly.",
    },
    {
      icon: Palette,
      title: "Customize Your Site",
      description:
        "Drag and drop blocks, customize colors, fonts, and layouts to match your unique style.",
    },
    {
      icon: Share2,
      title: "Share & Track Views",
      description:
        "Publish with one click and track visitor analytics to grow your audience effectively.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to{" "}
            <span className="text-blue-600">succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools you need to create, customize,
            and share your portfolio with the world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
