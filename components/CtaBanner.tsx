"use client";
import { useInView } from "@/hooks/useInView";

export default function CtaBanner() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Gold gradient bg */}
      <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 z-0" style={{ background: "rgba(8,6,0,0.88)" }} />
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className={`animate-on-scroll ${inView ? "visible" : ""}`}>
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Free Consultation
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            今すぐ集客を<br />
            <span className="text-gold-gradient">加速させましょう</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            無料相談はお気軽にどうぞ。<br />
            「何から始めればいいかわからない」という方も大歓迎です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold px-10 py-4 rounded-full font-black tracking-wider text-base"
            >
              無料相談を申し込む →
            </button>
            <a
              href="https://line.me/R/ti/p/@boosterone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#00B900] hover:bg-[#00A500] text-white px-10 py-4 rounded-full font-bold tracking-wider text-base transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINEで相談する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
