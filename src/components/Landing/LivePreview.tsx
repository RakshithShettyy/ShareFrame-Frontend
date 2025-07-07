const LivePreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See it in <span className="text-purple-600">action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here&apos;s what your portfolio could look like. Beautiful,
            professional, and ready to impress.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-t-2xl p-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="flex-1 bg-gray-700 rounded ml-4 px-4 py-1">
                <span className="text-gray-300 text-sm">
                  sarah-designer.com
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Mock Portfolio Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl font-bold">SD</span>
                </div>
                <h1 className="text-3xl font-bold mb-2">Sarah Designer</h1>
                <p className="text-purple-100">
                  UI/UX Designer & Creative Director
                </p>
              </div>

              {/* Mock Gallery Grid */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Featured Work
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded opacity-50"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mock Contact Form */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Get In Touch
                  </h3>
                  <div className="space-y-3">
                    <div className="h-10 bg-white rounded border-2 border-gray-200"></div>
                    <div className="h-10 bg-white rounded border-2 border-gray-200"></div>
                    <div className="h-20 bg-white rounded border-2 border-gray-200"></div>
                    <div className="h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded text-white flex items-center justify-center font-semibold">
                      Send Message
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivePreview;
