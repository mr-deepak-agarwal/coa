import React from 'react';
import { units } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronRight, Layers, Zap, BookOpen, Target } from 'lucide-react';

const SyllabusOverview = ({ onNavigate, onSelectUnit }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Gate': return <Zap className="w-6 h-6" />;
      case 'FlipFlop': return <Layers className="w-6 h-6" />;
      case 'CPU': return <Target className="w-6 h-6" />;
      case 'Memory': return <BookOpen className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="syllabus">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/30 px-4 py-1">
            Complete Curriculum
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Course <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Syllabus</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive journey through computer architecture - from basic logic gates to advanced memory systems
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {units.map((unit, index) => (
            <Card
              key={unit.id}
              className="group relative bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
              onClick={() => onSelectUnit(unit.id)}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Unit Number Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-6xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors">
                  {String(unit.id).padStart(2, '0')}
                </span>
              </div>

              <CardHeader className="relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${unit.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(unit.icon)}
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Unit {unit.id}: {unit.title}
                </CardTitle>
                <p className="text-slate-400 text-sm mt-1">{unit.subtitle}</p>
              </CardHeader>

              <CardContent className="relative">
                {/* Topics Preview */}
                <div className="space-y-2 mb-4">
                  {unit.topics.slice(0, 4).map((topic) => (
                    <div
                      key={topic.id}
                      className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                      {topic.title}
                    </div>
                  ))}
                  {unit.topics.length > 4 && (
                    <div className="text-sm text-slate-500">
                      +{unit.topics.length - 4} more topics
                    </div>
                  )}
                </div>

                {/* View Unit Button */}
                <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                  Explore Unit
                  <ChevronRight className="w-4 h-4" />
                </div>
              </CardContent>

              {/* Bottom Gradient Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${unit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </Card>
          ))}
        </div>

        {/* Course Overview Stats */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="w-8 h-8" />, value: 'Boolean Algebra', label: 'Foundation' },
              { icon: <Layers className="w-8 h-8" />, value: 'Sequential Logic', label: 'Memory Elements' },
              { icon: <Target className="w-8 h-8" />, value: 'CPU Design', label: 'Core Architecture' },
              { icon: <BookOpen className="w-8 h-8" />, value: 'I/O & Memory', label: 'System Interface' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-cyan-500/10 text-cyan-400 mb-3">
                  {item.icon}
                </div>
                <div className="text-white font-semibold">{item.value}</div>
                <div className="text-slate-500 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyllabusOverview;