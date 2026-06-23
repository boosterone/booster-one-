"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  "ホームページ制作",
  "チラシ制作",
  "名刺制作",
  "SNS運用",
  "ショート動画編集",
  "Googleマップ集客",
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; life: number; maxLife: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const createParticle = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 1.5 - 0.5,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      });
    };

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      if (frame % 3 === 0) createParticle();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const progress = p.life / p.maxLife;
        const alpha = p.alpha * (1 - progress);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${alpha})`;
        ctx.fill();

        if (p.life >= p.maxLife) particles.splice(i, 1);
      }

      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "#080808",
      }}
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0" style={{ background: "rgba(8,8,8,0.82)" }} />
      {/* Gold overlay */}
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at 30% 60%, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-1 pointer-events-none" />

      {/* Grid background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(201,168,76,0.05)] pointer-events-none hidden md:block"
        style={{ animation: "spin 60s linear infinite" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[rgba(201,168,76,0.08)] pointer-events-none hidden md:block"
        style={{ animation: "spin 40s linear infinite reverse" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.05)] mb-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-xs text-[#C9A84C] tracking-widest font-medium">
              集客支援のプロフェッショナル
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="block text-white">集客を</span>
            <span className="block text-gold-gradient">加速させる、</span>
            <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
              あなたのビジネスパートナー
            </span>
          </h1>

          {/* Sub headline */}
          <p
            className={`text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            ホームページ制作から集客支援まで、
            <br className="hidden sm:block" />
            中小企業・飲食店・美容室・パーソナルジム・整体院を
            <br className="hidden sm:block" />
            <span className="text-[#C9A84C] font-medium">ワンストップでトータルサポート。</span>
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-14 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <button
              onClick={() => handleScroll("#contact")}
              className="btn-gold px-8 py-4 rounded-full text-base font-bold tracking-wider animate-pulse-gold flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              無料相談・お問い合わせ
            </button>
            <button
              onClick={() => handleScroll("#services")}
              className="btn-outline-gold px-8 py-4 rounded-full text-base font-bold tracking-wider flex items-center justify-center gap-2"
            >
              サービスを見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Service tags */}
          <div
            className={`transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-xs text-gray-600 tracking-widest uppercase mb-3">Services</p>
            <div className="flex flex-wrap gap-2">
              {services.map((s, i) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full border border-[rgba(201,168,76,0.2)] text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-200 cursor-default"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-[rgba(201,168,76,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { num: "100+", label: "制作実績" },
              { num: "98%", label: "顧客満足度" },
              { num: "最短3日", label: "納品スピード" },
              { num: "24h", label: "サポート対応" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-black text-gold-gradient"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.num}
                </div>
                <div className="text-xs text-gray-500 mt-1 tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-600 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C9A84C] to-transparent" />
      </div>
    </section>
  );
}
