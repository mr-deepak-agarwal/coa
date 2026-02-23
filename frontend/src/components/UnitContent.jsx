import React, { useState } from 'react';
import { units } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowLeft, BookOpen, Lightbulb, Code, ChevronLeft, ChevronRight, Layers, Zap, Target } from 'lucide-react';

const UnitContent = ({ selectedUnit, onBack }) => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const unit = units.find((u) => u.id === selectedUnit);
  
  if (!unit) return null;

  const currentTopic = unit.topics[currentTopicIndex];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Gate': return <Zap className="w-5 h-5" />;
      case 'FlipFlop': return <Layers className="w-5 h-5" />;
      case 'CPU': return <Target className="w-5 h-5" />;
      case 'Memory': return <BookOpen className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const renderContent = (content) => {
    if (!content) return null;
    
    return content.map((item, index) => {
      switch (item.type) {
        case 'concept':
          return (
            <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400 whitespace-pre-line">{item.description}</p>
            </div>
          );
        
        case 'gates':
          return (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Types of Logic Gates</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.items.map((gate, idx) => (
                  <Card key={idx} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-cyan-400">{gate.name}</CardTitle>
                      <Badge variant="outline" className="w-fit text-xs border-slate-600 text-slate-400">
                        {gate.symbol}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-400 mb-3">{gate.description}</p>
                      {gate.truthTable && (
                        <div className="bg-slate-900 rounded-lg p-2">
                          <table className="w-full text-xs">
                            <thead>
                              <tr className="text-cyan-400">
                                {gate.truthTable[0].length === 3 ? (
                                  <><th className="p-1">A</th><th className="p-1">B</th><th className="p-1">Out</th></>
                                ) : (
                                  <><th className="p-1">In</th><th className="p-1">Out</th></>
                                )}
                              </tr>
                            </thead>
                            <tbody className="text-slate-300">
                              {gate.truthTable.map((row, rIdx) => (
                                <tr key={rIdx} className="border-t border-slate-800">
                                  {row.map((val, cIdx) => (
                                    <td key={cIdx} className="p-1 text-center">{val}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        
        case 'laws':
          return (
            <div key={index} className="space-y-3">
              {item.items.map((law, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h5 className="font-semibold text-white mb-1">{law.name}</h5>
                      <p className="text-sm text-slate-400">{law.explanation}</p>
                    </div>
                    <code className="bg-slate-900 px-3 py-1 rounded text-cyan-400 text-sm whitespace-nowrap">
                      {law.formula}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          );

        case 'circuits':
        case 'flipflops':
        case 'operations':
        case 'methods':
        case 'shifts':
          return (
            <div key={index} className="space-y-3">
              {item.items && item.items.map((entry, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h5 className="font-semibold text-cyan-400 mb-1">{entry.name}</h5>
                  {entry.formula && (
                    <code className="block bg-slate-900 px-3 py-2 rounded text-teal-400 text-sm mb-2">
                      {entry.formula}
                    </code>
                  )}
                  {entry.characteristic && (
                    <code className="block bg-slate-900 px-3 py-2 rounded text-teal-400 text-sm mb-2">
                      {entry.characteristic}
                    </code>
                  )}
                  <p className="text-sm text-slate-400">{entry.description || entry.desc}</p>
                </div>
              ))}
            </div>
          );

        case 'registers':
          return (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {item.items.map((reg, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-cyan-400 font-semibold">{reg.name}</span>
                    <Badge className="bg-slate-700 text-slate-300 text-xs">{reg.bits} bits</Badge>
                  </div>
                  <p className="text-sm text-slate-400">{reg.purpose}</p>
                </div>
              ))}
            </div>
          );

        case 'modes':
        case 'types':
        case 'formats':
        case 'concepts':
        case 'mapping':
          return (
            <div key={index} className="space-y-3">
              {item.items && item.items.map((entry, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-cyan-400">{entry.name || entry.type}</span>
                    {entry.opcode && <Badge className="bg-slate-700 text-xs">{entry.opcode}</Badge>}
                  </div>
                  <p className="text-sm text-slate-400">{entry.desc || entry.description || entry.example}</p>
                </div>
              ))}
            </div>
          );

        case 'hierarchy':
          return (
            <div key={index} className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-teal-500" />
              <div className="space-y-4">
                {item.levels.map((level, idx) => (
                  <div key={idx} className="relative pl-14">
                    <div className="absolute left-4 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-white">{level.level}</span>
                        <span className="text-sm text-cyan-400">{level.speed}</span>
                        <span className="text-sm text-slate-500">{level.size}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );

        default:
          return null;
      }
    });
  };

  return (
    <section className="py-24 bg-slate-950 min-h-screen" id="units">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            onClick={onBack}
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Syllabus
          </Button>
        </div>

        {/* Unit Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${unit.color} shadow-lg`}>
              {getIcon(unit.icon)}
            </div>
            <div>
              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 mb-1">
                Unit {unit.id}
              </Badge>
              <h2 className="text-3xl font-bold text-white">{unit.title}</h2>
              <p className="text-slate-400">{unit.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Topics Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-900/50 border-slate-800 sticky top-24">
              <CardHeader>
                <CardTitle className="text-sm text-slate-400">Topics</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1 p-4 pt-0">
                  {unit.topics.map((topic, index) => (
                    <button
                      key={topic.id}
                      onClick={() => setCurrentTopicIndex(index)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                        currentTopicIndex === index
                          ? 'bg-cyan-500/20 text-cyan-400 font-medium'
                          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <span className="mr-2 text-slate-600">{topic.id}</span>
                      {topic.title}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader className="border-b border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/30 mb-2">
                      Topic {currentTopic.id}
                    </Badge>
                    <CardTitle className="text-2xl text-white">{currentTopic.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      disabled={currentTopicIndex === 0}
                      onClick={() => setCurrentTopicIndex((prev) => prev - 1)}
                      className="border-slate-700 text-slate-400 hover:text-white disabled:opacity-30"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      disabled={currentTopicIndex === unit.topics.length - 1}
                      onClick={() => setCurrentTopicIndex((prev) => prev + 1)}
                      className="border-slate-700 text-slate-400 hover:text-white disabled:opacity-30"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <Tabs defaultValue="theory" className="w-full">
                  <TabsList className="bg-slate-800 border border-slate-700 mb-6">
                    <TabsTrigger value="theory" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Theory
                    </TabsTrigger>
                    <TabsTrigger value="content" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                      <Code className="w-4 h-4 mr-2" />
                      Content
                    </TabsTrigger>
                    <TabsTrigger value="example" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      Example
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="theory" className="space-y-4">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700">
                      <p className="text-slate-300 leading-relaxed text-lg">{currentTopic.theory}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="content" className="space-y-6">
                    {renderContent(currentTopic.content)}
                  </TabsContent>

                  <TabsContent value="example">
                    {currentTopic.example && (
                      <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl p-6 border border-teal-500/30">
                        <div className="flex items-center gap-2 mb-4">
                          <Lightbulb className="w-5 h-5 text-teal-400" />
                          <h4 className="text-lg font-semibold text-teal-400">{currentTopic.example.title}</h4>
                        </div>
                        <pre className="text-slate-300 whitespace-pre-line font-mono text-sm bg-slate-900/50 rounded-lg p-4">
                          {currentTopic.example.description}
                        </pre>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitContent;