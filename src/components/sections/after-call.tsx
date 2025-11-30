import Image from "next/image";

const AfterCallSection = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(0, 35, 84) 20%, rgb(161, 126, 0) 80%)",
      }}
      className="rounded-3xl border-t border-t-white/20"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-20">
        <div className="mb-4 flex items-center justify-between border-b border-b-white/10 pb-4 text-xs font-medium uppercase text-white/50">
          <span>[03] After the call</span>
          <span>/ Memory</span>
        </div>
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 md:grid-cols-2">
          <div className="md:col-start-1">
            <div className="sticky top-28">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/50">
                03-1. Summarize
              </div>
              <h3 className="font-display mb-2 max-w-sm text-[28px] font-medium leading-tight text-white">
                Scorecard coaching that never repeats mistakes
              </h3>
              <p className="text-muted-foreground">
                Aside highlights what was missed what worked and what to ask
                next time.
              </p>
            </div>
          </div>

          <div className="md:col-start-2 md:row-span-2 md:row-start-1">
            <div className="relative">
              <div className="mt-8 overflow-hidden rounded-2xl bg-black/30 shadow-2xl backdrop-blur-xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/illust-after-meeting-1_804bbc7d-8.png"
                  alt="A call coaching interface from Aside showing areas for improvement like missed budget questions."
                  width={1176}
                  height={1016}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="hidden h-20 md:block md:col-start-1" />

          <div className="md:col-start-1">
            <div className="sticky top-28">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/50">
                03-2. Memory
              </div>
              <h3 className="font-display mb-2 max-w-sm text-[28px] font-medium leading-tight text-white">
                Your team’s best answers keep getting better
              </h3>
              <p className="text-muted-foreground">
                Aside learns from every call and turns proven answers into live
                suggestions for the next one so your team improves
                automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterCallSection;