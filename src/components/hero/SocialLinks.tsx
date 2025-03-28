import { Github, Linkedin } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const links = [
  {
    href: 'https://linkedin.com/in/soheil-asami/',
    icon: <Linkedin className="w-6 h-6 text-[#0077B5]" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://t.me/soeil',
    icon: <FaTelegramPlane className="w-6 h-6 text-[#2CA5E0]" />,
    label: 'Telegram',
  },
  {
    href: 'https://wa.me/989215005194',
    icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />,
    label: 'WhatsApp',
  },
  {
    href: 'https://x.com/_soeil',
    icon: <FaXTwitter className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: 'Twitter',
  },
  {
    href: 'https://github.com/soheils2',
    icon: <Github className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: 'GitHub',
  },
];

export function SocialLinks({ horezental = false }: { horezental?: boolean }) {
  return (
    <div
      className={`flex flex-wrap gap-2 justify-center items-center ${
        horezental ? 'flex-row' : 'md:fixed md:left-0 md:flex-col'
      }`}
    >
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:scale-110 transform transition-transform duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
}
