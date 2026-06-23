"use client";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    num: "01",
    title: "無料相談",
    desc: "LINEまたはフォームから気軽にご連絡ください。24時間以内に返信します。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "ヒアリング",
    desc: "事業内容・ターゲット・目標をしっかりヒアリング。最適なプランをご提案します。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "制作開始",
    desc: "ご承認いただいたプランに基づき制作開始。進捗は随時共有します。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "修正・調整",
    desc: "初稿提出後、3回まで無料で修正対応。ご満足いただけるまでブラッシュアップ。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "納品・公開",
    desc: "最終確認後、データ納品またはサーバー公開。納品後のサポートも万全です。",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Process() {
  const { ref, inView } = useInView();

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 z-0" style={{ background: "rgba(8,8,8,0.89)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 animate-on-scroll ${inView ? "visible" : ""}`}>
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">Process</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ご依頼から納品までの
            <span className="text-gold-gradient">5ステップ</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2">シンプルで明快なプロセスで、スムーズに進めます</p>
          <div className="section-divider mt-6" />
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:flex gap-4 items-start relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex-1 flex flex-col items-center text-center animate-on-scroll ${
                inView ? "visible" : ""
              } delay-${(i + 1) * 100}`}
            >
              {/* Circle */}
              <div className="relative w-20 h-20 mb-5 z-10">
                <div
                  className={`w-20 h-20 rounded-full border-2 border-[rgba(201,168,76,0.4)] bg-[#111111] flex flex-col items-center justify-center gap-0 group transition-all duration-300 hover:border-[#C9A84C] hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]`}
                >
                  <span
                    className="text-[10px] text-[#C9A84C] font-bold tracking-widest"
                  >
                    STEP
                  </span>
                  <span
                    className="text-xl font-black text-gold-gradient"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.num}
                  </span>
                </div>
              </div>

              {/* Icon */}
              <div className="text-[#C9A84C] mb-3">{step.icon}</div>

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>

              {/* Desc */}
              <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C] via-[rgba(201,168,76,0.3)] to-transparent" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`flex gap-6 animate-on-scroll ${inView ? "visible" : ""} delay-${(i + 1) * 100}`}
              >
                {/* Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-[#C9A84C] bg-[#111111] flex items-center justify-center">
                    <span
                      className="text-sm font-black text-gold-gradient"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="text-[#C9A84C] mb-2">{step.icon}</div>
                  <h3 className="text-white font-bold text-base mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div
          className={`mt-16 p-6 rounded-xl border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)] text-center animate-on-scroll ${
            inView ? "visible" : ""
          } delay-600`}
        >
          <p className="text-gray-400 text-sm">
            <span className="text-[#C9A84C] font-bold">最短3日〜</span> での納品が可能です。急ぎのご依頼もお気軽にご相談ください。
          </p>
        </div>
      </div>
    </section>
  );
}
