import React from 'react';
import { Cpu, Mail, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { courseInfo } from '../data/mockData';

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { title: 'Course', links: [
      { label: 'Syllabus', id: 'syllabus' },
      { label: 'Unit 1', id: 'unit-1' },
      { label: 'Unit 2', id: 'unit-2' },
      { label: 'Unit 3', id: 'unit-3' },
      { label: 'Unit 4', id: 'unit-4' },
    ]},
    { title: 'Interactive', links: [
      { label: 'Logic Gates Lab', id: 'interactive' },
      { label: 'Flip-Flop Simulator', id: 'interactive' },
      { label: 'Number Converter', id: 'interactive' },
    ]},
    { title: 'Resources', links: [
      { label: 'Boolean Algebra', id: 'syllabus' },
      { label: 'CPU Design', id: 'syllabus' },
      { label: 'Memory Systems', id: 'syllabus' },
    ]},
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white/10 p-2 rounded-lg border border-white/10">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{courseInfo.company || 'code.compyl'}</h3>
                <p className="text-xs text-slate-400">by {courseInfo.instructor || 'Deepak Agarwal'}</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering students to master Computer Organization & Architecture through interactive learning and comprehensive materials.
            </p>
            <div className="flex items-center gap-3">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((col, i) => (
            <div key={i}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <button onClick={() => onNavigate(link.id)}
                      className="text-slate-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-500 text-sm">
          <span>© {currentYear} code.compyl. All rights reserved.</span>
          <span className="flex items-center gap-1.5">Made with <Heart className="w-3.5 h-3.5 text-rose-400" /> for BCA Students</span>
          <span>Course Code: {courseInfo.code}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
