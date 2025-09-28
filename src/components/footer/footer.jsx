import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, MessageSquare } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Hook your newsletter API here
    alert(`Subscribed ${email} to the Vectornix newsletter (demo)`);
    setEmail("");
  };

  const infoLinks = [
    { label: "Docs", href: "/docs" },
    { label: "Examples", href: "/examples" },
    { label: "Blog", href: "/blog" },
    { label: "Community", href: "/community" },
  ];

  const helpfulLinks = [
    { label: "Pricing", href: "/pricing" },
    { label: "Support", href: "/support" },
    { label: "Status", href: "/status" },
    { label: "Privacy & Terms", href: "/legal" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      {/* Top demarcation: full-width subtle border + centered accent pill */}
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="mx-auto w-28 h-1 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 opacity-90 dark:opacity-80 my-6" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1 - Logo & About (no top/left border) */}
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Vectornix</h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            Vectornix AI Studio — a multi-modal, stateful AI agent platform for building,
            testing and deploying intelligent agents, quickly and confidently.
          </p>

          <div className="mt-5 space-y-3 text-sm">
            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Phone size={16} /> +1 (555) 123-4567
            </p>
            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Mail size={16} /> support@vectornix.ai
            </p>
            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin size={16} /> Remote · HQ: Lagos, Nigeria
            </p>
          </div>
        </div>

        {/* Column 2 - Product (mobile: top border; md+: left border) */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 md:mt-0 md:pt-0 md:border-t-0 md:border-l md:border-gray-200 dark:md:border-gray-800 md:pl-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            {infoLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Resources (same demarcation as column 2) */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 md:mt-0 md:pt-0 md:border-t-0 md:border-l md:border-gray-200 dark:md:border-gray-800 md:pl-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            {helpfulLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Newsletter & Socials (same demarcation as column 2/3) */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 md:mt-0 md:pt-0 md:border-t-0 md:border-l md:border-gray-200 dark:md:border-gray-800 md:pl-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Stay up to date</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Get release notes, security updates, and community news from Vectornix.
          </p>

          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              aria-label="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full px-3 py-2 rounded-l-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 bg-orange-600 hover:bg-orange-700 text-white rounded-r-md text-sm font-medium transition"
            >
              Subscribe
            </button>
          </form>

          {/* small social row */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com/vectornix"
              aria-label="Vectornix on GitHub"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://twitter.com/vectornix"
              aria-label="Vectornix on Twitter"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white transition"
            >
              <Twitter size={18} />
            </a>

            <a
              href="https://discord.gg/vectornix"
              aria-label="Vectornix Discord"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-violet-600 hover:text-white transition"
            >
              <MessageSquare size={18} />
            </a>

            <a
              href="https://www.linkedin.com/company/vectornix"
              aria-label="Vectornix on LinkedIn"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-700 hover:text-white transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider + bottom row */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Vectornix AI Studio — Built for deploying intelligent agents.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-xs text-gray-600 dark:text-gray-300 hover:text-orange-500 transition"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-xs text-gray-600 dark:text-gray-300 hover:text-orange-500 transition"
            >
              Terms
            </a>
            <a
              href="/status"
              className="text-xs text-gray-600 dark:text-gray-300 hover:text-orange-500 transition"
            >
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;