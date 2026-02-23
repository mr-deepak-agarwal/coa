import React from 'react';
import { units } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ChevronRight, Layers, Zap, BookOpen, Target } from 'lucide-react';

const unitAccents = [
  'border-l-amber-400',
  'border-l-rose-500',
  'border-l-blue-500',
  'border-l-emerald-500',
];

const SyllabusOverview = ({ onNavigate, onSelectUnit }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Gate': return <Zap className="w-5 h-5" />;
      case 'FlipFlop': return <Layers className="w-5 h-5" />;
      case 'CPU': return <Target className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 bg-[#f8fafc]" id="syllabus" style={{ fontFamily: 'Outfit, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-amber-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-amber-500">Full Curriculum</span>
            </div>
            <h2 className="text-5xl font-black text-[#0a0e1a] leading-tight">
              Course<br />
              <span className="relative inline-block">
                Syllabus
                <span className="absolute bottom-1 left-0 w-full h-2 bg-amber-400 -z-10 rounded" />
              </span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-base leading-relaxed">
            From logic gates to memory systems — every topic mapped for the University of Rajasthan BCA curriculum.
          </p>
        </div>

        {/* Unit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {units.map((unit, idx) => (
            <div
              key={unit.id}
              onClick={() => onSelectUnit(unit.id)}
              className={`group bg-white border-2 border-slate-100 border-l-4 ${unitAccents[idx % 4]} 
                hover:border-[#0a0e1a] hover:border-l-4 hover:-translate-y-1 hover:shadow-xl
                transition-all duration-250 cursor-pointer rounded-2xl overflow-hidden relative card-lift`}
            >
              {/* Big number watermark */}
              <div className="absolute top-3 right-5 text-8xl font-black text-slate-50 select-none leading-none">
                {String(unit.id).padStart(2,'0')}
              </div>

              <div className="p-7 relative">
                {/* Icon + unit tag */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${unit.color} text-white flex items-center justify-center shadow-md flex-shrink-0`}>
                    {getIcon(unit.icon)}
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-400"
                    style={{ fontFamily: 'Space Mono, monospace' }}>
                    Unit {String(unit.id).padStart(2,'0')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0a0e1a] mb-1 group-hover:text-[#0a0e1a] leading-snug">
                  {unit.title}
                </h3>
                <p className="text-slate-400 text-sm mb-5">{unit.subtitle}</p>

                {/* Topics */}
                <div className="space-y-1.5 mb-6">
                  {unit.topics.slice(0, 4).map(t => (
                    <div key={t.id} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                      {t.title}
                    </div>
                  ))}
                  {unit.topics.length > 4 && (
                    <div className="text-xs text-slate-400 font-medium pl-3">
                      +{unit.topics.length - 4} more topics
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[#0a0e1a] font-bold text-sm group-hover:gap-3 transition-all">
                  Explore Unit <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom feature strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: <Zap className="w-4 h-4" />, label: 'Boolean Algebra', sub: 'Unit I' },
            { icon: <Layers className="w-4 h-4" />, label: 'Sequential Logic', sub: 'Unit II' },
            { icon: <Target className="w-4 h-4" />, label: 'CPU Design', sub: 'Unit III' },
            { icon: <BookOpen className="w-4 h-4" />, label: 'I/O & Memory', sub: 'Unit IV' },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3.5">
              <div className="text-amber-500 flex-shrink-0">{f.icon}</div>
              <div>
                <div className="text-sm font-semibold text-[#0a0e1a]">{f.label}</div>
                <div className="text-xs text-slate-400">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SyllabusOverview;
