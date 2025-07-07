const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Templates", "Pricing", "API"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact", "Status", "Community"],
    },
    {
      title: "Social",
      links: ["Twitter", "LinkedIn", "Instagram", "YouTube"],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">PortfolioBuilder</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Create stunning portfolios in minutes. No coding required.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-gray-100">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 PortfolioBuilder. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
