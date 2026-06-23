"use client";
import { useInView } from "@/hooks/useInView";

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "業界最水準の低コスト",
    subtitle: "LOW COST",
    desc: "無駄なコストを徹底排除。大手制作会社の1/3〜1/5の価格で、同等以上のクオリティを実現。費用対効果を最大化します。",
    accent: "¥",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "圧倒的スピード対応",
    subtitle: "FAST DELIVERY",
    desc: "ヒアリングから最短3日でLP納品。急な依頼にも柔軟に対応。スピーディーな集客スタートを実現します。",
    accent: "⚡",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "集客に特化した設計",
    subtitle: "CONVERSION FIRST",
    desc: "「見た目」より「成果」を重視。問い合わせが来る動線設計、SEO対策、MEO対策まで、集客に直結する仕組みを構築します。",
    accent: "↑",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: "ワンストップ対応",
    subtitle: "ONE STOP",
    desc: "Web制作からSNS運用・動画編集・チラシ・名刺まで一社完結。複数の会社に依頼する手間と費用を削減できます。",
    accent: "∞",
  },
];

export default function WhyUs() {
  const { ref, inView } = useInView();

  return (
    <section id="why" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 z-0" style={{ background: "rgba(8,8,8,0.88)" }} />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[rgba(201,168,76,0.04)] to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 animate-on-scroll ${inView ? "visible" : ""}`}>
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Why Choose Us
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            選ばれる<span className="text-gold-gradient">4つの理由</span>
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`gradient-border p-6 rounded-xl group hover:shadow-[0_0_40px_rgba(201,168,76,0.1)] transition-all duration-500 animate-on-scroll ${
                inView ? "visible" : ""
              } delay-${(i + 1) * 100}`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center text-[#C9A84C] mb-5 group-hover:bg-[rgba(201,168,76,0.15)] transition-colors duration-300">
                {r.icon}
              </div>

              {/* Subtitle */}
              <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] font-medium mb-2">
                {r.subtitle}
              </p>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-3 leading-tight">{r.title}</h3>

              {/* Divider */}
              <div className="w-8 h-px bg-[rgba(201,168,76,0.4)] mb-3 group-hover:w-16 transition-all duration-500" />

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 animate-on-scroll ${inView ? "visible" : ""} delay-500`}>
          <p className="text-gray-400 mb-6 text-sm">
            まずは無料相談から。お気軽にお問い合わせください。
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold px-10 py-4 rounded-full font-bold tracking-wider text-sm"
          >
            無料で相談してみる →
          </button>
        </div>
      </div>
    </section>
  );
}
