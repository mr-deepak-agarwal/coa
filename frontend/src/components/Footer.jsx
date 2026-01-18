import React from 'react';
import { Cpu, Mail, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { courseInfo } from '../data/mockData';

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Course',
      links: [
        { label: 'Syllabus', id: 'syllabus' },
        { label: 'Unit 1', id: 'unit-1' },
        { label: 'Unit 2', id: 'unit-2' },
        { label: 'Unit 3', id: 'unit-3' },
        { label: 'Unit 4', id: 'unit-4' },
      ],
    },
    {
      title: 'Interactive',
      links: [
        { label: 'Logic Gates Lab', id: 'interactive' },
        { label: 'Flip-Flop Simulator', id: 'interactive' },
        { label: 'Number Converter', id: 'interactive' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Boolean Algebra', id: 'syllabus' },
        { label: 'CPU Design', id: 'syllabus' },
        { label: 'Memory Systems', id: 'syllabus' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl blur-lg opacity-50" />
                <div className="relative bg-slate-900 p-2.5 rounded-xl border border-cyan-500/30">
                  <Cpu className="w-7 h-7 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  {courseInfo.company}
                </h3>
                <p className="text-xs text-slate-400">by {courseInfo.instructor}</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Empowering students to master Computer Organization & Architecture through 
              interactive learning and comprehensive course materials.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: '#' },
                { icon: <Linkedin className="w-5 h-5" />, href: '#' },
                { icon: <Twitter className="w-5 h-5" />, href: '#' },
                { icon: <Mail className="w-5 h-5" />, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} {courseInfo.company}. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-rose-500" /> for BCA Students
            </p>
            <p className="text-slate-500 text-sm">
              Course Code: {courseInfo.code}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;