"use client";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    num: "01",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "ホームページ制作",
    desc: "集客に特化したWebサイトを制作。SEO対策・スマホ最適化・高速表示を標準装備。訪問者を顧客に変えるUI/UX設計。",
    tags: ["SEO対策", "レスポンシブ", "CMS対応"],
    price: "制作費無料・月々¥12,000〜",
    popular: true,
  },
  {
    num: "03",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    title: "チラシ・フライヤー制作",
    desc: "目を引くデザインで集客効果を最大化。A4/A5/B4/B5など各種サイズに対応。印刷会社への入稿データも込み。",
    tags: ["デザイン重視", "印刷対応", "各種サイズ"],
    price: "¥15,000〜",
    popular: false,
  },
  {
    num: "04",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    title: "名刺制作",
    desc: "ブランドイメージを高める高品質な名刺を制作。両面デザイン対応。QRコード付きでデジタル接点も強化。",
    tags: ["両面対応", "QRコード", "高品質印刷"],
    price: "¥5,000〜",
    popular: false,
  },
  {
    num: "05",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    title: "SNS運用サポート",
    desc: "Instagram・X・TikTok等のSNS運用を代行またはサポート。投稿設計からハッシュタグ戦略まで、フォロワー増加と集客を実現。",
    tags: ["Instagram", "X(Twitter)", "TikTok"],
    price: "¥30,000〜/月",
    popular: false,
  },
  {
    num: "06",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.951V15.05a1 1 0 01-1.447.898L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "ショート動画編集",
    desc: "Reels・TikTok・YouTubeショーツ向けの縦型動画を高品質編集。BGM・テロップ・エフェクト全込みで集客力を強化。",
    tags: ["Reels対応", "テロップ込み", "縦型動画"],
    price: "¥5,000〜/本",
    popular: false,
  },
  {
    num: "07",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Googleマップ集客対策",
    desc: "MEO対策でGoogleマップ上位表示を実現。口コミ管理・写真最適化・投稿戦略で近隣集客を最大化します。",
    tags: ["MEO対策", "口コミ管理", "上位表示"],
    price: "¥20,000〜/月",
    popular: false,
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 z-0" style={{ background: "rgba(8,8,8,0.9)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 animate-on-scroll ${inView ? "visible" : ""}`}>
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">Services</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-gold-gradient">7つのサービス</span>で<br />
            ビジネスを加速
          </h2>
          <p className="text-gray-500 text-sm mt-4">
            制作から集客・運用まで、すべてBOOSTER ONEにお任せください
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`gradient-border rounded-xl p-6 group hover:shadow-[0_0_50px_rgba(201,168,76,0.12)] transition-all duration-500 relative overflow-hidden animate-on-scroll ${
                inView ? "visible" : ""
              } delay-${Math.min((i + 1) * 100, 600)}`}
            >
              {s.popular && (
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold tracking-widest bg-gradient-to-r from-[#C9A84C] to-[#E8C97A] text-[#080808] px-3 py-1 rounded-full">
                    人気 No.1
                  </span>
                </div>
              )}

              {/* Number */}
              <span
                className="text-[64px] font-black text-[rgba(201,168,76,0.06)] absolute -top-2 -right-2 select-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.num}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center text-[#C9A84C] mb-4 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-[#C9A84C] border border-[rgba(201,168,76,0.25)] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="border-t border-[rgba(201,168,76,0.1)] pt-4 flex items-center justify-between">
                <span className="text-[#C9A84C] font-bold text-sm leading-tight">{s.price}</span>
                <span className="text-xs text-gray-600 flex-shrink-0 ml-2">詳しく相談する →</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 animate-on-scroll ${inView ? "visible" : ""} delay-600`}>
          <div className="inline-block p-px rounded-full bg-gradient-to-r from-[#C9A84C] via-[#E8C97A] to-[#C9A84C]">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#080808] hover:bg-[#111111] text-[#C9A84C] font-bold tracking-wider text-sm px-10 py-4 rounded-full transition-colors duration-200"
            >
              全サービスについて無料相談する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
