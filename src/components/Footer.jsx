function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Copyright & Brand Notice */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Smart Attendance
            </h2>

            <p className="text-sm leading-relaxed">
              A QR code-based attendance system designed for university classes,
              seminars, and school-related events.
            </p>

            <p className="text-sm mt-4">
              © {currentYear} Smart Attendance. All rights reserved.
            </p>
          </div>

          {/* Secondary Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-[oklch(64.5%_0.246_16.439)] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[oklch(64.5%_0.246_16.439)] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[oklch(64.5%_0.246_16.439)] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[oklch(64.5%_0.246_16.439)] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Policies */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Legal Policies
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-[oklch(64.5%_0.246_16.439)] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[oklch(64.5%_0.246_16.439)] transition">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[oklch(64.5%_0.246_16.439)] transition">
                  Data Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[oklch(64.5%_0.246_16.439)] transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div id="contact">
            <h3 className="text-white font-semibold mb-4">
              Contact Information
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-medium text-white">Email:</span>
                <br />
                smartattendance@email.com
              </li>

              <li>
                <span className="font-medium text-white">Phone:</span>
                <br />
                +63 900 000 0000
              </li>

              <li>
                <span className="font-medium text-white">Location:</span>
                <br />
                University Campus
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            Built for fast, secure, and organized attendance monitoring.
          </p>

          <p>
            Powered by QR Code Technology
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;