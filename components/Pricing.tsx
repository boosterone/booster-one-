"use client";
import { useInView } from "@/hooks/useInView";

const plans = [
  {
    name: "ホームページ運用プラン",
    nameEn: "WEB PLAN",
    price: "12,000",
    unit: "円／月",
    desc: "HP制作費は完全無料！月々の運用費だけでプロのホームページを持てる。",
    features: [
      "ホームページ制作費 無料",
      "レスポンシブ対応（スマホ最適化）",
      "SEO対策込み",
      "お問い合わせフォーム設置",
      "SNSリンク設置",
      "月1回コンテンツ更新",
      "サポート・メンテナンス込み",
    ],
    notIncluded: [
      "Googleマップ・MEO対策",
      "SNS運用サポート",
    ],
    cta: "このプランで相談する",
    popular: false,
    period: "初期費用 完全無料",
  },
  {
    name: "スタンダードプラン",
    nameEn: "MEO PLAN",
    price: "32,000",
    unit: "円／月",
    desc: "HP制作費無料＋Googleマップ・MEO対策までフル対応。地域集客を最大化。",
    features: [
      "ホームページ制作費 無料",
      "レスポンシブ対応（スマホ最適化）",
      "SEO対策込み",
      "お問い合わせフォーム設置",
      "Googleマップ・MEO対策",
      "Googleビジネスプロフィール最適化",
      "口コミ管理・返信サポート",
      "サポート・メンテナンス込み",
    ],
    notIncluded: [],
    cta: "このプランで相談する",
    popular: true,
    period: "初期費用 完全無料",
  },
  {
    name: "フルサポートプラン",
    nameEn: "FULL SUPPORT",
    price: "52,000",
    unit: "円／月",
    desc: "HP＋MEO＋SNS運用まで全部お任せ！集客をトータルでサポート。",
    features: [
      "ホームページ制作費 無料",
      "レスポンシブ対応（スマホ最適化）",
      "SEO対策込み",
      "Googleマップ・MEO対策",
      "口コミ管理・返信サポート",
      "SNS運用サポート（投稿・運用代行）",
      "ショート動画編集込み",
      "専任担当者がつく",
    ],
    notIncluded: [],
    cta: "このプランで相談する",
    popular: false,
    period: "初期費用 完全無料",
  },
];

export default function Pricing() {
  const { ref, inView } = useInView();

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 z-0" style={{ background: "rgba(8,8,8,0.92)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 animate-on-scroll ${inView ? "visible" : ""}`}>
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">Pricing</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            明確な<span className="text-gold-gradient">料金プラン</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            追加費用なし。すべて明朗会計でご安心ください
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 transition-all duration-500 animate-on-scroll ${
                inView ? "visible" : ""
              } delay-${(i + 1) * 100} ${
                plan.popular
                  ? "pricing-popular"
                  : "bg-[#111111] border border-[rgba(201,168,76,0.12)] hover:border-[rgba(201,168,76,0.3)]"
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-5">
                  <span className="inline-block text-xs font-black tracking-widest bg-gradient-to-r from-[#C9A84C] to-[#E8C97A] text-[#080808] px-5 py-1.5 rounded-full">
                    ★ 最もお得・人気 No.1
                  </span>
                </div>
              )}

              {/* Plan name */}
              <p className="text-[10px] text-[#C9A84C] tracking-[0.25em] font-medium mb-1">
                {plan.nameEn}
              </p>
              <h3 className="text-white text-xl font-black mb-1">{plan.name}</h3>
              <p className="text-gray-500 text-xs mb-5 leading-relaxed">{plan.desc}</p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-[rgba(201,168,76,0.1)]">
                <div className="flex items-end gap-1">
                  {plan.price !== "要相談" && <span className="text-gray-500 text-sm">¥</span>}
                  <span
                    className={`text-4xl font-black ${plan.popular ? "text-gold-gradient" : "text-white"}`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm mb-1">{plan.unit}</span>
                </div>
                <p className="text-[10px] text-[#C9A84C] mt-1 tracking-wider">{plan.period}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-[#C9A84C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600 line-through">
                    <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-3.5 rounded-full font-bold text-sm tracking-wider transition-all duration-300 ${
                  plan.popular
                    ? "btn-gold"
                    : "btn-outline-gold"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Custom plan note */}
        <div
          className={`mt-10 text-center animate-on-scroll ${inView ? "visible" : ""} delay-400`}
        >
          <p className="text-gray-500 text-sm">
            ※ 表示価格は目安です。内容によって変動します。<br />
            <span className="text-[#C9A84C]">カスタムプランも対応可能。</span>まずはお気軽にご相談ください。
          </p>
        </div>
      </div>
    </section>
  );
}
