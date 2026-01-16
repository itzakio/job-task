import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-base-300 mt-20">
      <div className="max-w-360 mx-auto px-4 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Tech<span className="text-primary">Shop</span>
            </h2>
            <p className="mt-4 text-sm opacity-70 leading-relaxed">
              TechShop is your trusted destination for modern gadgets,
              electronics, and smart technology. Quality products, fair prices,
              and reliable service.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a className="btn btn-circle btn-sm btn-outline">
                <FaFacebookF />
              </a>
              <a className="btn btn-circle btn-sm btn-outline">
                <FaTwitter />
              </a>
              <a className="btn btn-circle btn-sm btn-outline">
                <FaInstagram />
              </a>
              <a className="btn btn-circle btn-sm btn-outline">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="hover:text-primary transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-primary transition">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-primary cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-primary cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-primary cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-primary cursor-pointer">
                Return Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 opacity-80">
                <FaEnvelope className="text-primary" />
                support@techshop.com
              </li>
              <li className="flex items-center gap-3 opacity-80">
                <FaPhoneAlt className="text-primary" />
                +880 1234 567890
              </li>
              <li className="flex items-center gap-3 opacity-80">
                <FaMapMarkerAlt className="text-primary" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
          <p>
            © {new Date().getFullYear()} TechShop. All rights reserved.
          </p>
          <p>
            Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
