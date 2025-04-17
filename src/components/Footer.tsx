
import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-parent-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Baby className="h-8 w-8 text-parent-blue" />
              <span className="text-xl font-bold">GrowTogether</span>
            </div>
            <p className="text-gray-300 text-sm">
              Supporting parents through every milestone with personalized guidance and tools.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link to="#" className="text-gray-300 hover:text-parent-blue">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-parent-blue">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-parent-blue">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-parent-blue">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Baby', 'Toddler', 'Preschool', 'School Age', 'Teens'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              {['Growth Tracker', 'Sleep Log', 'Milestone Tracker', 'Immunization Schedule', 'Feeding Guide'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Our Experts', 'Blog', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} GrowTogether. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
