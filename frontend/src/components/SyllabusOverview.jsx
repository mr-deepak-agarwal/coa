import React from 'react';
import { units } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ChevronRight, Layers, Zap, BookOpen, Target } from 'lucide-react';

const SyllabusOverview = ({ onNavigate, onSelectUnit }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Gate': return <Zap className="w-5 h-5" />;
      case 'FlipFlop': return <Layers className="w-5 h-5" />;
      case 'CPU': return <Target className="w-5 h-5" />;
      case 'Memory': return <BookOpen className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 bg-white" id="syllabus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Curriculum</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2">
            Course Syllabus
          </h2>
          <div className="w-12 h-1 bg-slate-900 mt-4 rounded" />
          <p className="text-slate-500 text-base mt-5 max-w-xl">
            From basic logic gates to advanced memory systems — a complete journey through computer architecture.
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {units.map((unit) => (
            <Card
              key={unit.id}
              onClick={() => onSelectUnit(unit.id)}
              className="group relative bg-white border-2 border-slate-100 hover:border-slate-900 transition-all duration-300 cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-md"
            >
              {/* Unit number watermark */}
              <div className="absolute top-4 right-5 text-7xl font-black text-slate-50 group-hover:text-slate-100 transition-colors select-none">
                {String(unit.id).padStart(2, '0')}
              </div>

              <CardHeader className="relative pt-6 pb-2">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${unit.color} text-white mb-4 shadow-sm`}>
                  {getIcon(unit.icon)}
                </div>
                <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-slate-900 leading-snug">
                  Unit {unit.id}: {unit.title}
                </CardTitle>
                <p className="text-slate-400 text-sm mt-1">{unit.subtitle}</p>
              </CardHeader>

              <CardContent className="relative pb-5">
                <div className="space-y-1.5 mb-5">
                  {unit.topics.slice(0, 4).map(topic => (
                    <div key={topic.id} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                      {topic.title}
                    </div>
                  ))}
                  {unit.topics.length > 4 && (
                    <div className="text-xs text-slate-400 pl-3">+{unit.topics.length - 4} more topics</div>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-slate-900 font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
                  Explore Unit <ChevronRight className="w-4 h-4" />
                </div>
              </CardContent>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${unit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </Card>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Zap className="w-5 h-5" />, value: 'Boolean Algebra', label: 'Unit I Foundation' },
            { icon: <Layers className="w-5 h-5" />, value: 'Sequential Logic', label: 'Unit II Memory' },
            { icon: <Target className="w-5 h-5" />, value: 'CPU Design', label: 'Unit III Core' },
            { icon: <BookOpen className="w-5 h-5" />, value: 'I/O & Memory', label: 'Unit IV Systems' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-slate-500">{item.icon}</div>
              <div>
                <div className="text-sm font-semibold text-slate-900">{item.value}</div>
                <div className="text-xs text-slate-400">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SyllabusOverview;
