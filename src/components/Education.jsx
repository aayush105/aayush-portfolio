import { useFadeUp } from "../hooks/useFadeUp";
import SectionHeader from "./SectionHeader";
import { education } from "../data/data";

function EducationCard({ e }) {
  const ref = useFadeUp();
  return (
    <div
      ref={ref}
      className="group relative bg-bg rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 p-[24px] sm:p-[32px] flex flex-col opacity-0 translate-y-[28px] h-full"
    >
      <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-[16px] mb-[20px]">
        <div className="flex items-start gap-[16px]">
          <div className="shrink-0 flex items-center justify-center w-[56px] h-[56px] rounded-[12px] bg-surface2 border border-border overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px] dark:bg-[radial-gradient(#fff_1px,transparent_1px)]" />
            {e.logo ? (
              <img
                className="w-[36px] h-[36px] object-contain relative z-10"
                src={e.logo}
                alt={e.institution}
                onError={(ev) => (ev.target.style.display = "none")}
              />
            ) : (
              <div
                className="relative z-10 font-syne font-extrabold text-[12px] text-accent text-center leading-[1.2]"
                style={{ whiteSpace: "pre-line" }}
              >
                {e.ph}
              </div>
            )}
          </div>
          <div>
            <div className="inline-flex items-center gap-[6px] text-[9px] tracking-[0.1em] uppercase text-text bg-surface2 border border-border px-[10px] py-[4px] rounded-full mb-[10px]">
              {e.type}
            </div>
            <h3 className="font-syne text-[18px] sm:text-[20px] font-extrabold tracking-[-0.02em] leading-[1.2] text-text mb-[6px] group-hover:text-accent transition-colors duration-300">
              {e.degree}
            </h3>
            <div className="text-[13px] text-accent font-medium">
              {e.institution}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[12px] shrink-0 xl:self-start mt-[4px] xl:mt-0">
          <div className="text-[11px] text-muted tracking-[0.06em] bg-bg px-[12px] py-[6px] rounded-[8px] border border-border font-medium">
            {e.period}
          </div>
          {e.linkedin && (
            <a
              href={e.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-110"
              title="Verify on LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
        </div>
      </div>
      <div
        className="text-[13px] text-muted2 leading-[1.7] pt-[20px] border-t border-border mt-auto"
        dangerouslySetInnerHTML={{
          __html: e.detail.replace(
            "78.43%",
            '<strong style="color:var(--accent)">78.43%</strong>',
          ),
        }}
      />
    </div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="bg-surface px-[20px] py-[60px] md:px-[40px] md:py-[80px] lg:px-[80px] lg:py-[100px] transition-colors duration-[400ms]"
    >
      <SectionHeader label="04 — Learning" title="Education" count="04" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] xl:gap-[32px]">
        {education.map((e, i) => (
          <EducationCard key={i} e={e} />
        ))}
      </div>
    </section>
  );
}
