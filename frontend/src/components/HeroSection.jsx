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
      {/* Clean subtle dot canvas — very faint */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-30" />

      {/* Amber accent block — top-right corner only, tight */}
      <div className="absolute top-0 right-0 w-64 h-64 z-0"
        style={{ background: 'radial-gradient(circle at top right, rgba(245,158,11,0.08) 0%, transparent 65%)' }} />

      {/* Left navy border strip */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0a0e1a] z-10" />

      {/* Main content */}
      <div className="relative z-20 max-w-5xl mx-auto px-8 sm:px-12">

        {/* Course tag */}
        <div className="animate-fade-in flex items-center gap-3 mb-10">
          <div className="flex items-center gap-2 bg-[#0a0e1a] text-white px-4 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase"
            style={{ fontFamily: 'Space Mono, monospace' }}>
            <Zap className="w-3 h-3 text-amber-400" />
            {courseInfo.code}
          </div>
          <div className="h-px w-8 bg-amber-400" />
          <span className="text-sm text-slate-400 font-medium">Interactive Learning Platform</span>
        </div>

        {/* Headline */}
        <h1 className="animate-slide-up leading-[0.95] tracking-tight mb-8"
          style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(48px, 8.5vw, 104px)' }}>
          <span className="block text-[#0a0e1a]">Computer</span>
          <span className="block relative inline-block text-[#0a0e1a] pb-2">
            Organization
            <span className="absolute bottom-0 left-0 w-full h-[5px] bg-amber-400 rounded-sm" />
          </span>
          <span className="block text-[#0a0e1a]">&amp; Architecture</span>
        </h1>

        {/* Tagline */}
        <p className="animate-slide-up animation-delay-200 text-lg text-slate-500 mb-12 max-w-lg leading-relaxed">
          {courseInfo.tagline}
        </p>

        {/* CTAs */}
        <div className="animate-slide-up animation-delay-400 flex flex-wrap gap-3 items-center">
          <button
            onClick={() => onNavigate('syllabus')}
            className="group flex items-center gap-2 bg-[#0a0e1a] hover:bg-[#1e293b] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200"
          >
            Explore Syllabus
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate('interactive')}
            className="group flex items-center gap-2 border-2 border-[#0a0e1a] text-[#0a0e1a] font-bold px-8 py-4 rounded-xl text-base hover:bg-[#0a0e1a] hover:text-white transition-all duration-200"
          >
            <Play className="w-4 h-4" />
            Interactive Lab
          </button>
        </div>

        {/* Stats */}
        <div className="animate-fade-in animation-delay-600 mt-16 flex flex-wrap gap-3">
          {[
            { value: '4', label: 'Units' },
            { value: '40+', label: 'Topics' },
            { value: '7', label: 'Logic Gates' },
            { value: '∞', label: 'Possibilities' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border-2 border-slate-100 hover:border-amber-400 transition-colors duration-200 rounded-xl px-5 py-3.5">
              <span className="text-2xl font-black text-[#0a0e1a]">{s.value}</span>
              <span className="text-sm text-slate-400 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-200 flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-amber-400 rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
