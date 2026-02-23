import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Zap, Binary, CircuitBoard, Cpu } from 'lucide-react';
import { courseInfo } from '../data/mockData';

const HeroSection = ({ onNavigate }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();

    // Dot grid that slowly drifts
    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      o: Math.random() * 0.3 + 0.05,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10,14,26,${d.o})`;
        ctx.fill();
      });
      // Lines between nearby dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(10,14,26,${0.07 * (1 - dist/100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white" id="home">
      {/* Animated canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Amber glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full z-0"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)' }} />
      {/* Navy stripe left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0a0e1a] z-10" />

      {/* Floating decorative icons */}
      <div className="absolute top-[20%] left-[8%] animate-float-slow opacity-[0.07]">
        <Binary className="w-28 h-28 text-[#0a0e1a]" />
      </div>
      <div className="absolute top-[35%] right-[6%] animate-float opacity-[0.07]">
        <CircuitBoard className="w-32 h-32 text-[#0a0e1a]" />
      </div>
      <div className="absolute bottom-[20%] left-[22%] animate-float-slow opacity-[0.07]">
        <Cpu className="w-20 h-20 text-[#0a0e1a]" />
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-10">

        {/* Course tag */}
        <div className="animate-fade-in flex items-center gap-3 mb-10">
          <div className="flex items-center gap-2 bg-[#0a0e1a] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ fontFamily: 'Space Mono, monospace' }}>
            <Zap className="w-3 h-3 text-amber-400" />
            {courseInfo.code}
          </div>
          <div className="h-px flex-1 max-w-[60px] bg-amber-400" />
          <span className="text-sm text-slate-500 font-medium">Interactive Learning Platform</span>
        </div>

        {/* Giant headline */}
        <h1 className="animate-slide-up leading-[1.0] tracking-tight mb-8" 
          style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(52px, 9vw, 110px)' }}>
          <span className="block text-[#0a0e1a]">Computer</span>
          <span className="block relative text-[#0a0e1a]">
            Organization
            <span className="absolute bottom-0 left-0 w-full h-[6px] bg-amber-400 rounded-sm" />
          </span>
          <span className="block" style={{ color: '#94a3b8' }}>&amp; Architecture</span>
        </h1>

        {/* Tagline */}
        <p className="animate-slide-up animation-delay-200 text-lg text-slate-500 mb-12 max-w-xl leading-relaxed">
          {courseInfo.tagline}
        </p>

        {/* CTAs */}
        <div className="animate-slide-up animation-delay-400 flex flex-wrap gap-4 items-center">
          <button
            onClick={() => onNavigate('syllabus')}
            className="group flex items-center gap-3 bg-[#0a0e1a] hover:bg-[#1e293b] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore Syllabus
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('interactive')}
            className="group flex items-center gap-3 border-2 border-[#0a0e1a] text-[#0a0e1a] font-bold px-8 py-4 rounded-xl text-base hover:bg-[#0a0e1a] hover:text-white transition-all duration-200"
          >
            <Play className="w-4 h-4" />
            Interactive Lab
          </button>
        </div>

        {/* Stats */}
        <div className="animate-fade-in animation-delay-600 mt-20 flex flex-wrap gap-4">
          {[
            { value: '4', label: 'Units' },
            { value: '40+', label: 'Topics' },
            { value: '7', label: 'Logic Gates' },
            { value: '∞', label: 'Possibilities' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border-2 border-slate-100 hover:border-amber-400 transition-colors rounded-xl px-5 py-4 shadow-sm">
              <span className="text-3xl font-black text-[#0a0e1a]" style={{ fontFamily: 'Outfit, sans-serif' }}>{s.value}</span>
              <span className="text-sm text-slate-500 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-amber-400 rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
