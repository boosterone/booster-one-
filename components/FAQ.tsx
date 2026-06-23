"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    q: "初めての依頼でも大丈夫ですか？",
    a: "もちろん大丈夫です！ホームページ制作が初めての方でも安心してご依頼いただけるよう、丁寧にヒアリングし、一つひとつわかりやすくご説明しながら進めます。わからないことは何でも質問してください。",
  },
  {
    q: "制作期間はどのくらいかかりますか？",
    a: "LPであれば最短3日〜、通常のホームページは7〜14日程度が目安です。ご依頼内容や込み具合によって変動しますので、お急ぎの場合はお早めにご相談ください。",
  },
  {
    q: "制作後の修正や更新はお願いできますか？",
    a: "はい、対応しております。プランに応じて修正回数が設定されていますが、CMS（更新機能）を導入したサイトであれば、ご自身で簡単に更新も可能です。継続的なサポートプランもご用意しています。",
  },
  {
    q: "料金の支払い方法を教えてください。",
    a: "銀行振込にて対応しております。制作開始前に着手金（50%）、納品時に残金（50%）のお支払いをお願いしております。まずはお見積もりをご確認いただいてからご判断ください。",
  },
  {
    q: "どのような業種に対応していますか？",
    a: "飲食店・美容室・パーソナルジム・整体院・士業・不動産・小売店など、幅広い業種に対応しています。業種ごとのノウハウを持っておりますので、お気軽にご相談ください。",
  },
  {
    q: "ホームページを作った後の集客サポートはありますか？",
    a: "はい、ございます。SEO対策・MEO（Googleマップ）対策・SNS運用サポート・ショート動画編集など、制作後の集客を継続的にサポートするプランをご用意しています。",
  },
  {
    q: "既存のホームページのリニューアルは対応できますか？",
    a: "対応可能です。現状のサイトを分析した上で、改善ポイントをご提案します。デザイン刷新だけでなく、集客導線の改善・SEO強化も含めてご提案します。",
  },
  {
    q: "打ち合わせはオンラインでできますか？",
    a: "はい、Zoom・Google Meet・LINEビデオ通話など、オンラインでの打ち合わせに対応しています。全国どこからでもお気軽にご依頼いただけます。",
  },
  {
    q: "SNS運用は完全代行もできますか？",
    a: "はい、投稿の企画・デザイン・文章作成・投稿・コメント対応まで、すべて代行するフルサポートプランをご用意しています。お客様は内容確認と承認のみでOKです。",
  },
  {
    q: "相談だけでも大丈夫ですか？",
    a: "もちろんです！無料相談は完全無料・無条件です。「何をすればいいかわからない」「予算感を知りたい」という段階でも大歓迎です。まずはお気軽にご連絡ください。",
  },
];

export default function FAQ() {
  const { ref, inView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 z-0" style={{ background: "rgba(8,8,8,0.91)" }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-14 animate-on-scroll ${inView ? "visible" : ""}`}>
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">FAQ</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            よくある<span className="text-gold-gradient">ご質問</span>
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border border-[rgba(201,168,76,0.12)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] animate-on-scroll ${
                inView ? "visible" : ""
              } delay-${Math.min((i % 5 + 1) * 100, 500)}`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-[#111111] hover:bg-[#131313] transition-colors duration-200"
                onClick={() => toggle(i)}
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <span className="text-[#C9A84C] font-black text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <span className="text-white text-sm font-medium leading-relaxed">{faq.q}</span>
                </div>
                <div
                  className={`w-7 h-7 rounded-full border border-[rgba(201,168,76,0.3)] flex items-center justify-center flex-shrink-0 ml-3 transition-all duration-300 ${
                    openIndex === i ? "bg-[rgba(201,168,76,0.15)] rotate-45" : ""
                  }`}
                >
                  <svg
                    className="w-3 h-3 text-[#C9A84C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-5 pt-1 flex gap-3 bg-[rgba(201,168,76,0.02)]">
                  <span className="text-[#C9A84C] font-black text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-14 animate-on-scroll ${inView ? "visible" : ""} delay-500`}>
          <p className="text-gray-500 text-sm mb-5">
            他にご不明な点がございましたら、お気軽にお問い合わせください
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold px-10 py-4 rounded-full font-bold tracking-wider text-sm"
          >
            無料で質問・相談する →
          </button>
        </div>
      </div>
    </section>
  );
}
