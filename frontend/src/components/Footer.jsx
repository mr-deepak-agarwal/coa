import React from 'react';
import { Cpu, Mail, Github, Linkedin, Twitter, Heart, Zap } from 'lucide-react';
import { courseInfo } from '../data/mockData';

const Footer = ({ onNavigate }) => {
  const year = new Date().getFullYear();
  const cols = [
    { title: 'Course', links: [
      { label: 'Syllabus', id: 'syllabus' },
      { label: 'Unit 1', id: 'unit-1' }, { label: 'Unit 2', id: 'unit-2' },
      { label: 'Unit 3', id: 'unit-3' }, { label: 'Unit 4', id: 'unit-4' },
    ]},
    { title: 'Interactive', links: [
      { label: 'Logic Gates Lab', id: 'interactive' },
      { label: 'Flip-Flop Sim', id: 'interactive' },
      { label: 'Number Converter', id: 'interactive' },
    ]},
    { title: 'Topics', links: [
      { label: 'Boolean Algebra', id: 'syllabus' },
      { label: 'CPU Design', id: 'syllabus' },
      { label: 'Memory Systems', id: 'syllabus' },
    ]},
  ];

  return (
    <footer className="bg-[#0a0e1a] text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
      {/* Amber top border */}
      <div className="h-1 bg-amber-400 w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-amber-400 rounded-lg flex items-center justify-center">
                <Cpu className="w-[18px] h-[18px] text-[#0a0e1a]" />
              </div>
              <div>
                <div className="font-black text-white text-lg">{courseInfo.company || 'code.compyl'}</div>
                <div className="text-xs text-slate-500">by {courseInfo.instructor || 'Deepak Agarwal'}</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering BCA students to master Computer Organization &amp; Architecture through interactive learning.
            </p>
            <div className="flex gap-2">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/50 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-4 bg-amber-400 rounded-full" />
                <h4 className="text-white font-bold text-xs uppercase tracking-widest">{col.title}</h4>
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l, j) => (
                  <li key={j}>
                    <button onClick={() => onNavigate(l.id)}
                      className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-xs">
          <span>© {year} code.compyl — All rights reserved</span>
          <span className="flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-rose-400" /> for BCA Students
          </span>
          <span style={{ fontFamily: 'Space Mono, monospace' }}>
            {courseInfo.code}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
