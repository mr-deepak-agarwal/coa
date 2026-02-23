import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles, Binary, CircuitBoard, Cpu } from 'lucide-react';
import { Button } from './ui/button';
import { courseInfo } from '../data/mockData';

const HeroSection = ({ onNavigate }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.35 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX; p.y += p.speedY;
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
        ctx.fillStyle = `rgba(15,23,42,${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const d = Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2);
          if (d < 130) {
            ctx.strokeStyle = `rgba(15,23,42,${0.06*(1-d/130)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Accent blobs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-slate-100 rounded-full blur-3xl opacity-80" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-80" />

      {/* Floating icons */}
      <div className="absolute top-1/4 left-12 animate-float-slow opacity-10">
        <Binary className="w-20 h-20 text-slate-900" />
      </div>
      <div className="absolute top-1/3 right-16 animate-float opacity-10">
        <CircuitBoard className="w-24 h-24 text-slate-900" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float-slow opacity-10">
        <Cpu className="w-16 h-16 text-slate-900" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-xs font-semibold tracking-wider uppercase">{courseInfo.code}</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up leading-tight tracking-tight">
          <span className="text-slate-900">Computer</span>
          <br />
          <span className="relative inline-block">
            <span className="text-slate-900">Organization</span>
            <span className="absolute -bottom-1 left-0 right-0 h-1 bg-slate-900 rounded" />
          </span>
          <br />
          <span className="text-slate-400">&amp; Architecture</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-500 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-200 leading-relaxed">
          {courseInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up animation-delay-400">
          <Button
            onClick={() => onNavigate('syllabus')}
            className="group px-8 py-6 text-base bg-slate-900 hover:bg-slate-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
          >
            <span className="flex items-center gap-2">
              Explore Syllabus
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>

          <Button
            onClick={() => onNavigate('interactive')}
            variant="outline"
            className="group px-8 py-6 text-base border-2 border-slate-200 text-slate-700 hover:border-slate-900 hover:text-slate-900 bg-white transition-all duration-300 rounded-xl"
          >
            <Play className="w-4 h-4 mr-2" />
            Interactive Lab
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in animation-delay-600">
          {[
            { value: '4', label: 'Units' },
            { value: '40+', label: 'Topics' },
            { value: '7', label: 'Logic Gates' },
            { value: '∞', label: 'Possibilities' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
