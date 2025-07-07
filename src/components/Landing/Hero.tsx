import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23818cf8%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Showcase Your Work in
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Minutes
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Create stunning portfolio websites with our intuitive block-based
            editor. No coding required, just drag, drop, and publish.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-2 border-gray-300 hover:border-gray-400 rounded-full transition-all duration-300">
              Watch Demo
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto border border-white/20">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded w-3/4"></div>
                <div className="h-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded w-1/2"></div>
                <div className="h-4 bg-gradient-to-r from-pink-200 to-blue-200 rounded w-5/6"></div>
                <div className="grid grid-cols-3 gap-2 mt-6">
                  <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded"></div>
                  <div className="h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded"></div>
                  <div className="h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
