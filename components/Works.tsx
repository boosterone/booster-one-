"use client";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const categories = ["すべて", "ホームページ", "SNS運用", "Googleマップ"];

const works = [
  {
    category: "ホームページ",
    industry: "美容室",
    title: "Salon H 様",
    desc: "美容室のブランドサイト制作。予約導線の最適化でオンライン予約率が3倍に。",
    result: "月間予約数 +230%",
    period: "制作期間 7日",
    color: "from-purple-900/30 to-pink-900/30",
  },
  {
    category: "ホームページ",
    industry: "パーソナルジム",
    title: "Gym K 様",
    desc: "パーソナルジムのホームページ制作。無料体験申込の導線を最適化しCV率を大幅改善。",
    result: "問い合わせ数 +280%",
    period: "制作期間 7日",
    color: "from-blue-900/30 to-cyan-900/30",
  },
  {
    category: "ホームページ",
    industry: "整体院",
    title: "Seitai Y 様",
    desc: "地域密着型整体院のWebサイト。SEO対策とMEO対策を同時実施し、Googleからの集客が大幅増加。",
    result: "検索流入 +180%",
    period: "制作期間 10日",
    color: "from-green-900/30 to-emerald-900/30",
  },
  {
    category: "Googleマップ",
    industry: "飲食店",
    title: "Restaurant I 様",
    desc: "Googleマップのプロフィール最適化と口コミ施策を実施。エリアキーワードで上位表示を獲得。",
    result: "電話問合せ +150%",
    period: "施策開始1ヶ月",
    color: "from-orange-900/30 to-red-900/30",
  },
  {
    category: "SNS運用",
    industry: "美容室",
    title: "Salon N 様",
    desc: "Instagram運用を代行。投稿の世界観統一とリール戦略でフォロワーが3ヶ月で10倍以上に。",
    result: "フォロワー 1,200→14,000",
    period: "運用3ヶ月",
    color: "from-pink-900/30 to-rose-900/30",
  },
  {
    category: "ホームページ",
    industry: "士業",
    title: "Office S 様",
    desc: "士業事務所のホームページ制作。専門性と信頼感を伝えるデザインで問い合わせ数が大幅向上。",
    result: "月間問合せ +320%",
    period: "制作期間 10日",
    color: "from-yellow-900/30 to-amber-900/30",
  },
];

export default function Works() {
  const { ref, inView } = useInView();
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filtered =
    activeCategory === "すべて"
      ? works
      : works.filter((w) => w.category === activeCategory);

  return (
    <section id="works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 z-0" style={{ background: "rgba(8,8,8,0.91)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-12 animate-on-scroll ${inView ? "visible" : ""}`}>
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">Works</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-gold-gradient">制作実績</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            各業種のお客様の売上・集客アップに貢献してきました
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll ${inView ? "visible" : ""} delay-100`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#C9A84C] border-[#C9A84C] text-[#080808] font-bold"
                  : "border-[rgba(201,168,76,0.2)] text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Works grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((work, i) => (
            <div
              key={work.title}
              className={`rounded-xl overflow-hidden border border-[rgba(201,168,76,0.12)] group hover:border-[rgba(201,168,76,0.4)] transition-all duration-500 animate-on-scroll ${
                inView ? "visible" : ""
              } delay-${Math.min((i + 1) * 100, 600)}`}
            >
              {/* Thumbnail placeholder */}
              <div
                className={`relative h-48 bg-gradient-to-br ${work.color} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 hero-dots opacity-20" />
                <div className="text-center z-10">
                  <span className="text-6xl font-black text-white opacity-10 select-none">
                    {work.industry[0]}
                  </span>
                </div>
                {/* Industry badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold bg-[rgba(8,8,8,0.7)] text-[#C9A84C] px-3 py-1 rounded-full border border-[rgba(201,168,76,0.3)]">
                    {work.industry}
                  </span>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold bg-[rgba(201,168,76,0.15)] text-[#C9A84C] px-3 py-1 rounded-full border border-[rgba(201,168,76,0.3)]">
                    {work.category}
                  </span>
                </div>
                {/* Result overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(8,8,8,0.9)] to-transparent p-4">
                  <span className="text-[#C9A84C] font-black text-lg">{work.result}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 bg-[#111111]">
                <h3 className="text-white font-bold text-base mb-2">{work.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{work.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-600">{work.period}</span>
                  <span className="text-xs text-[#C9A84C] group-hover:translate-x-1 transition-transform duration-200">
                    詳細 →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 animate-on-scroll ${inView ? "visible" : ""} delay-500`}>
          <p className="text-gray-500 text-sm mb-6">
            あなたのビジネスも、次の成功事例にしませんか？
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold px-10 py-4 rounded-full font-bold tracking-wider text-sm"
          >
            無料で相談する →
          </button>
        </div>
      </div>
    </section>
  );
}
