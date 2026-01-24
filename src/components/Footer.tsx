const Footer = () => {
  return (
    <footer className="bg-charcoal py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-gold text-xl">✧</span>
          <span className="text-gold font-display text-lg italic">Occult Yogis</span>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Occult Yogis. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
          <a href="#" className="hover:text-gold transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
