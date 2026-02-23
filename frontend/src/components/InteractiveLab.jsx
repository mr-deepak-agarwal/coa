import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Zap, Play, RotateCcw, Info } from 'lucide-react';

const InteractiveLab = () => {
  // Logic Gate Simulator State
  const [gateType, setGateType] = useState('AND');
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);

  // Flip-Flop Simulator State
  const [flipFlopType, setFlipFlopType] = useState('SR');
  const [ffInputS, setFfInputS] = useState(false);
  const [ffInputR, setFfInputR] = useState(false);
  const [ffOutput, setFfOutput] = useState(false);
  const [ffClock, setFfClock] = useState(false);

  // Binary Converter State
  const [decimalInput, setDecimalInput] = useState('42');

  const calculateGateOutput = () => {
    const a = inputA ? 1 : 0;
    const b = inputB ? 1 : 0;
    
    switch (gateType) {
      case 'AND': return a && b;
      case 'OR': return a || b;
      case 'NOT': return !inputA ? 1 : 0;
      case 'NAND': return !(a && b) ? 1 : 0;
      case 'NOR': return !(a || b) ? 1 : 0;
      case 'XOR': return a !== b ? 1 : 0;
      case 'XNOR': return a === b ? 1 : 0;
      default: return 0;
    }
  };

  const handleClockPulse = () => {
    setFfClock(true);
    setTimeout(() => {
      if (flipFlopType === 'SR') {
        if (ffInputS && !ffInputR) setFfOutput(true);
        else if (!ffInputS && ffInputR) setFfOutput(false);
        else if (ffInputS && ffInputR) setFfOutput((prev) => !prev); // Invalid but toggle for demo
      } else if (flipFlopType === 'D') {
        setFfOutput(ffInputS);
      } else if (flipFlopType === 'JK') {
        if (ffInputS && !ffInputR) setFfOutput(true);
        else if (!ffInputS && ffInputR) setFfOutput(false);
        else if (ffInputS && ffInputR) setFfOutput((prev) => !prev);
      } else if (flipFlopType === 'T') {
        if (ffInputS) setFfOutput((prev) => !prev);
      }
      setFfClock(false);
    }, 300);
  };

  const decToBinary = (dec) => {
    const num = parseInt(dec, 10);
    if (isNaN(num) || num < 0) return '0';
    return num.toString(2).padStart(8, '0');
  };

  const decToHex = (dec) => {
    const num = parseInt(dec, 10);
    if (isNaN(num) || num < 0) return '0';
    return num.toString(16).toUpperCase();
  };

  const decToOctal = (dec) => {
    const num = parseInt(dec, 10);
    if (isNaN(num) || num < 0) return '0';
    return num.toString(8);
  };

  return (
    <section className="py-24 bg-slate-50 relative" id="interactive">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-1">
            Hands-on Learning
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Interactive <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Lab</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Experiment with logic gates, flip-flops, and number systems in real-time
          </p>
        </div>

        <Tabs defaultValue="gates" className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 bg-white border border-slate-200 shadow-sm mb-8">
            <TabsTrigger value="gates" className="data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900">
              Logic Gates
            </TabsTrigger>
            <TabsTrigger value="flipflop" className="data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900">
              Flip-Flops
            </TabsTrigger>
            <TabsTrigger value="converter" className="data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900">
              Number Systems
            </TabsTrigger>
          </TabsList>

          {/* Logic Gate Simulator */}
          <TabsContent value="gates">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-slate-900" />
                    Logic Gate Simulator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Gate Selection */}
                  <div>
                    <label className="text-sm text-gray-500 mb-2 block">Select Gate</label>
                    <div className="flex flex-wrap gap-2">
                      {['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR', 'XNOR'].map((gate) => (
                        <Button
                          key={gate}
                          variant={gateType === gate ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setGateType(gate)}
                          className={gateType === gate 
                            ? 'bg-slate-900 text-slate-900 hover:bg-cyan-400' 
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          }
                        >
                          {gate}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Input A</span>
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-lg ${inputA ? 'text-slate-900' : 'text-gray-400'}`}>
                          {inputA ? '1' : '0'}
                        </span>
                        <Switch
                          checked={inputA}
                          onCheckedChange={setInputA}
                          className="data-[state=checked]:bg-slate-900"
                        />
                      </div>
                    </div>

                    {gateType !== 'NOT' && (
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Input B</span>
                        <div className="flex items-center gap-3">
                          <span className={`font-mono text-lg ${inputB ? 'text-slate-900' : 'text-gray-400'}`}>
                            {inputB ? '1' : '0'}
                          </span>
                          <Switch
                            checked={inputB}
                            onCheckedChange={setInputB}
                            className="data-[state=checked]:bg-slate-900"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Output */}
                  <div className="p-6 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl border border-violet-100">
                    <div className="text-center">
                      <span className="text-sm text-slate-400 block mb-2">Output</span>
                      <span className={`text-6xl font-bold font-mono ${
                        calculateGateOutput() ? 'text-slate-900' : 'text-gray-300'
                      }`}>
                        {calculateGateOutput()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Truth Table */}
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center gap-2">
                    <Info className="w-5 h-5 text-slate-700" />
                    {gateType} Gate Truth Table
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="px-4 py-3 text-slate-900 font-semibold">A</th>
                          {gateType !== 'NOT' && <th className="px-4 py-3 text-slate-900 font-semibold">B</th>}
                          <th className="px-4 py-3 text-slate-700 font-semibold">Output</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        {gateType === 'NOT' ? (
                          <>
                            <tr className="border-b border-slate-200/50"><td className="px-4 py-2 text-center">0</td><td className="px-4 py-2 text-center font-semibold text-slate-700">1</td></tr>
                            <tr><td className="px-4 py-2 text-center">1</td><td className="px-4 py-2 text-center font-semibold text-slate-700">0</td></tr>
                          </>
                        ) : (
                          <>
                            <tr className="border-b border-slate-200/50">
                              <td className="px-4 py-2 text-center">0</td>
                              <td className="px-4 py-2 text-center">0</td>
                              <td className="px-4 py-2 text-center font-semibold text-slate-700">
                                {gateType === 'AND' ? 0 : gateType === 'OR' ? 0 : gateType === 'NAND' ? 1 : gateType === 'NOR' ? 1 : gateType === 'XOR' ? 0 : 1}
                              </td>
                            </tr>
                            <tr className="border-b border-slate-200/50">
                              <td className="px-4 py-2 text-center">0</td>
                              <td className="px-4 py-2 text-center">1</td>
                              <td className="px-4 py-2 text-center font-semibold text-slate-700">
                                {gateType === 'AND' ? 0 : gateType === 'OR' ? 1 : gateType === 'NAND' ? 1 : gateType === 'NOR' ? 0 : gateType === 'XOR' ? 1 : 0}
                              </td>
                            </tr>
                            <tr className="border-b border-slate-200/50">
                              <td className="px-4 py-2 text-center">1</td>
                              <td className="px-4 py-2 text-center">0</td>
                              <td className="px-4 py-2 text-center font-semibold text-slate-700">
                                {gateType === 'AND' ? 0 : gateType === 'OR' ? 1 : gateType === 'NAND' ? 1 : gateType === 'NOR' ? 0 : gateType === 'XOR' ? 1 : 0}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 text-center">1</td>
                              <td className="px-4 py-2 text-center">1</td>
                              <td className="px-4 py-2 text-center font-semibold text-slate-700">
                                {gateType === 'AND' ? 1 : gateType === 'OR' ? 1 : gateType === 'NAND' ? 0 : gateType === 'NOR' ? 0 : gateType === 'XOR' ? 0 : 1}
                              </td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                    <h4 className="text-slate-900 font-semibold mb-2">Gate Expression</h4>
                    <code className="text-gray-700">
                      {gateType === 'AND' && 'Y = A · B'}
                      {gateType === 'OR' && 'Y = A + B'}
                      {gateType === 'NOT' && "Y = A'"}
                      {gateType === 'NAND' && "Y = (A · B)'"}
                      {gateType === 'NOR' && "Y = (A + B)'"}
                      {gateType === 'XOR' && 'Y = A ⊕ B'}
                      {gateType === 'XNOR' && "Y = (A ⊕ B)'"}
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Flip-Flop Simulator */}
          <TabsContent value="flipflop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">Flip-Flop Simulator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* FF Type Selection */}
                  <div>
                    <label className="text-sm text-gray-500 mb-2 block">Select Flip-Flop Type</label>
                    <div className="flex flex-wrap gap-2">
                      {['SR', 'D', 'JK', 'T'].map((ff) => (
                        <Button
                          key={ff}
                          variant={flipFlopType === ff ? 'default' : 'outline'}
                          onClick={() => setFlipFlopType(ff)}
                          className={flipFlopType === ff 
                            ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400' 
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          }
                        >
                          {ff} Flip-Flop
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">
                        {flipFlopType === 'SR' ? 'S (Set)' : flipFlopType === 'D' ? 'D (Data)' : flipFlopType === 'JK' ? 'J' : 'T (Toggle)'}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-lg ${ffInputS ? 'text-slate-700' : 'text-gray-400'}`}>
                          {ffInputS ? '1' : '0'}
                        </span>
                        <Switch
                          checked={ffInputS}
                          onCheckedChange={setFfInputS}
                          className="data-[state=checked]:bg-slate-900"
                        />
                      </div>
                    </div>

                    {(flipFlopType === 'SR' || flipFlopType === 'JK') && (
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">
                          {flipFlopType === 'SR' ? 'R (Reset)' : 'K'}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className={`font-mono text-lg ${ffInputR ? 'text-slate-700' : 'text-gray-400'}`}>
                            {ffInputR ? '1' : '0'}
                          </span>
                          <Switch
                            checked={ffInputR}
                            onCheckedChange={setFfInputR}
                            className="data-[state=checked]:bg-slate-900"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Clock Button */}
                  <Button
                    onClick={handleClockPulse}
                    className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                      ffClock 
                        ? 'bg-amber-500 text-white' 
                        : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-900 hover:from-emerald-400 hover:to-teal-400'
                    }`}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    {ffClock ? 'Clock Pulse Active...' : 'Apply Clock Pulse'}
                  </Button>

                  {/* Output */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl border border-violet-100 text-center">
                      <span className="text-sm text-slate-400 block mb-2">Q (Output)</span>
                      <span className={`text-5xl font-bold font-mono ${
                        ffOutput ? 'text-slate-700' : 'text-gray-300'
                      }`}>
                        {ffOutput ? '1' : '0'}
                      </span>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl border border-violet-100 text-center">
                      <span className="text-sm text-slate-400 block mb-2">Q' (Complement)</span>
                      <span className={`text-5xl font-bold font-mono ${
                        !ffOutput ? 'text-slate-900' : 'text-gray-300'
                      }`}>
                        {ffOutput ? '0' : '1'}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => {
                      setFfOutput(false);
                      setFfInputS(false);
                      setFfInputR(false);
                    }}
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </CardContent>
              </Card>

              {/* FF Info */}
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">{flipFlopType} Flip-Flop Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-slate-700 font-semibold mb-2">Characteristic Equation</h4>
                    <code className="text-xl text-gray-700">
                      {flipFlopType === 'SR' && "Q(n+1) = S + R'Q(n)"}
                      {flipFlopType === 'D' && 'Q(n+1) = D'}
                      {flipFlopType === 'JK' && "Q(n+1) = JQ'(n) + K'Q(n)"}
                      {flipFlopType === 'T' && 'Q(n+1) = T ⊕ Q(n)'}
                    </code>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-slate-700 font-semibold mb-2">Description</h4>
                    <p className="text-slate-400">
                      {flipFlopType === 'SR' && 'Set-Reset flip-flop. S=1 sets output to 1, R=1 resets to 0. S=R=1 is an invalid/forbidden state.'}
                      {flipFlopType === 'D' && 'Data flip-flop. The output Q follows the input D at every clock edge. Eliminates the invalid state problem of SR flip-flop.'}
                      {flipFlopType === 'JK' && 'Most versatile flip-flop. J acts as Set, K acts as Reset. J=K=1 toggles the output, eliminating invalid states.'}
                      {flipFlopType === 'T' && 'Toggle flip-flop. When T=1, output toggles on each clock pulse. When T=0, output remains unchanged. Used in counters.'}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-slate-700 font-semibold mb-2">Applications</h4>
                    <ul className="text-gray-500 space-y-1">
                      {flipFlopType === 'SR' && <><li>• Basic memory cell</li><li>• Switch debouncing</li><li>• Control circuits</li></>}
                      {flipFlopType === 'D' && <><li>• Data storage registers</li><li>• Shift registers</li><li>• Pipeline stages</li></>}
                      {flipFlopType === 'JK' && <><li>• Counters</li><li>• Frequency dividers</li><li>• Shift registers</li></>}
                      {flipFlopType === 'T' && <><li>• Binary counters</li><li>• Frequency division</li><li>• Clock circuits</li></>}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Number System Converter */}
          <TabsContent value="converter">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-slate-900 text-center">Number System Converter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Decimal Input */}
                  <div>
                    <label className="text-sm text-gray-500 mb-2 block">Enter Decimal Number</label>
                    <input
                      type="number"
                      value={decimalInput}
                      onChange={(e) => setDecimalInput(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-2xl font-mono text-slate-900 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-colors"
                      min="0"
                    />
                  </div>

                  {/* Conversions */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                      <span className="text-sm text-slate-400 block mb-2">Binary (Base 2)</span>
                      <span className="text-xl font-mono text-slate-900 break-all">
                        {decToBinary(decimalInput)}
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                      <span className="text-sm text-slate-400 block mb-2">Octal (Base 8)</span>
                      <span className="text-xl font-mono text-slate-700">
                        {decToOctal(decimalInput)}
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                      <span className="text-sm text-slate-400 block mb-2">Hexadecimal (Base 16)</span>
                      <span className="text-xl font-mono text-amber-400">
                        0x{decToHex(decimalInput)}
                      </span>
                    </div>
                  </div>

                  {/* Binary Breakdown */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h4 className="text-gray-500 text-sm mb-4">Binary Breakdown (8-bit)</h4>
                    <div className="flex justify-center gap-1">
                      {decToBinary(decimalInput).split('').map((bit, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <span className={`w-10 h-10 flex items-center justify-center rounded-lg font-mono text-xl font-bold ${
                            bit === '1' ? 'bg-slate-900/10 text-slate-900 border border-violet-500/50' : 'bg-slate-100 text-gray-300 border border-slate-200'
                          }`}>
                            {bit}
                          </span>
                          <span className="text-xs text-gray-400 mt-1">2^{7 - idx}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InteractiveLab;