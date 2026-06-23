"use client";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const serviceOptions = [
  "ホームページ制作",
  "ランディングページ制作",
  "チラシ・フライヤー制作",
  "名刺制作",
  "SNS運用サポート",
  "ショート動画編集",
  "Googleマップ集客対策",
  "その他・複数サービス",
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 z-0" style={{ background: "rgba(8,8,8,0.9)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-14 animate-on-scroll ${inView ? "visible" : ""}`}>
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">Contact</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            まずは<span className="text-gold-gradient">無料相談</span>から
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            24時間以内に返信します。費用・期間のご確認だけでも大歓迎です。
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <div className={`animate-on-scroll-left ${inView ? "visible" : ""}`}>
            <h3 className="text-white font-bold text-xl mb-6">お気軽にご連絡ください</h3>

            {/* LINE CTA */}
            <a
              href="https://line.me/R/ti/p/@boosterone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-[rgba(0,195,0,0.3)] bg-[rgba(0,195,0,0.05)] hover:bg-[rgba(0,195,0,0.1)] hover:border-[rgba(0,195,0,0.6)] transition-all duration-300 mb-5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00B900] flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-base">LINEで相談する</p>
                <p className="text-gray-400 text-xs mt-0.5">最も返信が早い！通常30分以内</p>
              </div>
              <svg className="w-5 h-5 text-[#00B900] group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>riku05221818@yahoo.co.jp</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>070-4535-3126</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>対応時間：9:00〜21:00（年中無休）</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🔒", text: "完全無料相談" },
                { icon: "⚡", text: "24h以内返信" },
                { icon: "📝", text: "見積もり無料" },
                { icon: "🤝", text: "しつこい営業なし" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 p-3 rounded-lg bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.1)]"
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span className="text-xs text-gray-400 font-medium">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Google Map embed placeholder */}
            <div className="mt-6 rounded-xl overflow-hidden border border-[rgba(201,168,76,0.15)] h-48 bg-[#111111] flex items-center justify-center">
              <div className="text-center text-gray-600 text-xs">
                <svg className="w-8 h-8 mx-auto mb-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Googleマップを表示</p>
                <p className="text-[10px] mt-1">（実装時にAPIキーを設定）</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`animate-on-scroll-right ${inView ? "visible" : ""}`}>
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.4)] flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">送信完了しました！</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  お問い合わせありがとうございます。<br />
                  24時間以内にご連絡いたします。<br />
                  しばらくお待ちください。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-7 space-y-5">
                <div>
                  <label className="block text-xs text-[#C9A84C] tracking-wider mb-1.5 font-medium">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="山田 太郎"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#C9A84C] tracking-wider mb-1.5 font-medium">
                    電話番号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="090-1234-5678"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#C9A84C] tracking-wider mb-1.5 font-medium">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#C9A84C] tracking-wider mb-1.5 font-medium">
                    ご相談内容
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 rounded-lg text-sm appearance-none"
                  >
                    <option value="" className="bg-[#111111]">サービスを選択してください</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#111111]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[#C9A84C] tracking-wider mb-1.5 font-medium">
                    詳細・ご質問
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="ご予算・ご要望・ご質問など、お気軽にご記入ください"
                    value={form.message}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 rounded-lg text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-4 rounded-full font-bold tracking-wider text-sm flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      送信中...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      無料相談を申し込む
                    </>
                  )}
                </button>

                <p className="text-[10px] text-gray-600 text-center">
                  ご入力いただいた情報は、ご連絡・サービス提供のみに使用します
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
