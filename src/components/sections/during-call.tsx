import Image from 'next/image';
import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';

const SupabaseIcon = ({ className }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M13.5414 23.3852L7.89311 18.2325C5.35338 16.4259 3.79998 13.0635 3.79998 9.24803V5.98145H8.7904C12.3957 5.98145 15.3541 7.74786 16.8924 10.7485L20.0076 16.3263C21.1969 18.4688 20.7818 21.0181 19.242 22.399L13.5414 23.3852Z" fill="#15FFAB"/>
        <path d="M10.4262 0.537109L17.0744 5.52758C19.6142 7.33418 21.1676 10.6966 21.1676 14.512V17.7786H16.1772C12.5719 17.7786 9.61353 16.0122 8.07525 13.0115L4.95999 7.43372C3.77069 5.29124 4.18585 2.74191 5.72561 1.36098L10.4262 0.537109Z" fill="#00755E"/>
    </svg>
);

const DuringCall = () => {
  return (
    <section id="during-call" className="relative overflow-hidden bg-black py-12 md:py-20 lg:py-24">
      <div className="container relative z-10 mx-auto">
        <div className="relative mb-12 border-t border-white/10 md:mb-20">
          <div className="absolute -top-3 w-full px-4">
              <div className="relative h-px w-full">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-black pr-3">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-tertiary">
                    [02] DURING THE CALL
                  </p>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-black pl-3">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-tertiary">
                    / FEATURES
                  </p>
                 </div>
              </div>
          </div>           
          <h2 className="mx-auto max-w-4xl pt-12 text-center font-display text-4xl font-medium leading-tight -tracking-[0.01em] text-text-primary md:text-5xl">
            Aside gives live suggestion during the call. Every rep speaks like your best rep.
          </h2>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {/* Feature 1: Live search */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-3 text-center lg:text-left">
              <h3 className="font-display text-2xl font-medium text-text-primary">
                Live search answers to technical questions
              </h3>
              <p className="text-lg text-text-secondary">
                Aside searches the answer from company docs in under a second so you never stall on calls.
              </p>
            </div>
            <div
              className="relative flex items-center justify-center rounded-[28px] p-2"
              style={{
                backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/bg-pattern-slash-17.svg")',
                backgroundSize: '150% auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="w-full max-w-lg rounded-3xl border border-white/15 bg-black/30 p-4 shadow-2xl backdrop-blur-2xl">
                <div className="mb-4 flex items-center gap-3 text-sm text-text-secondary">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="flex items-center gap-2">
                    <SupabaseIcon className="h-4 w-4" />
                    Supabase Docs
                  </span>
                </div>

                <div className="mb-4 space-y-2">
                  <h4 className="font-medium text-text-primary">Migrating from Neon to Supabase</h4>
                  <p className="text-sm text-text-secondary">
                    Supabase runs on standard Postgres with full SQL, ACID guarantees, PITR, and high availability...
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-black/20 p-4 shadow-lg backdrop-blur-xl">
                  <p className="mb-3 text-sm font-medium text-text-primary">
                    Q. I’m using Neon. Do you support instant restore?
                  </p>
                  <p className="mb-4 text-xs text-text-tertiary">
                    Answer found from docs and Chanhee’s call
                  </p>
                  <div className="mb-4 flex items-start gap-2 text-sm text-text-primary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <p>
                      Yes, we support it with PITR (Point-In-Time Recovery) and fast database branching.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-black/20 p-2 text-xs transition-colors hover:bg-white/5">
                      <SupabaseIcon className="h-5 w-5" />
                      <div className="flex-grow overflow-hidden">
                        <p className="truncate font-medium text-text-primary">Switch from Neon to Supabase</p>
                        <p className="truncate text-text-tertiary">supabase.com</p>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-black/20 p-2 text-xs transition-colors hover:bg-white/5">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/minibar-citation-profile2_08365775-6.png"
                        alt="Chanhee's call"
                        width={20}
                        height={20}
                        className="h-5 w-5 rounded-full"
                      />
                      <div className="flex-grow overflow-hidden">
                        <p className="truncate font-medium text-text-primary">Intro call between Chanhee and John</p>
                        <p className="truncate text-text-tertiary">Past call ⋅ 2w ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Your best answers */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-3 text-center lg:text-left lg:order-last">
              <h3 className="font-display text-2xl font-medium text-text-primary">
                Your best answers, delivered by every rep.
              </h3>
              <p className="text-lg text-text-secondary">
                Turn answers from past winning calls into live suggestions for every rep in every call.
              </p>
            </div>
            <div
              className="relative flex items-center justify-center rounded-[28px] p-2 lg:order-first"
              style={{
                backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/bg-pattern-slash-17.svg")',
                backgroundSize: '150% auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: 'scaleX(-1)',
              }}
            >
              <div
                className="w-full max-w-lg rounded-3xl border border-white/15 bg-black/30 p-5 shadow-2xl backdrop-blur-2xl"
                style={{ transform: 'scaleX(-1)' }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/minibar-citation-profile2_08365775-6.png"
                        alt="Jun"
                        width={24}
                        height={24}
                        className="h-6 w-6 rounded-full"
                      />
                    <span className="text-sm font-medium text-text-primary">Jun</span>
                  </div>
                  <button className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-text-primary transition-colors hover:bg-white/20">
                    Memorize Answer
                  </button>
                </div>

                <p className="mb-2 text-sm text-text-primary">Q. Price is too expensive.</p>
                <p className="mb-4 text-xs text-text-tertiary">
                  Past answer from Jun &lt;&gt; Acme (Closed won)
                </p>

                <div className="rounded-lg bg-black/20 p-4">
                  <p className="text-sm text-text-secondary">
                    I hear you, but most teams actually end up paying less with Supabase once infra + auth + backups are included.
                  </p>
                </div>
                
                <div className="mt-4 flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-black/20 p-2 text-xs transition-colors hover:bg-white/5">
                  <Image
                     src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/minibar-citation-profile2_08365775-6.png"
                     alt="Jun <> Acme"
                     width={20}
                     height={20}
                     className="h-5 w-5 rounded-full"
                   />
                   <div className="flex-grow overflow-hidden">
                     <p className="truncate font-medium text-text-primary">Jun &lt;&gt; Acme</p>
                     <p className="truncate text-text-tertiary">Past call ⋅ 2w ago</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Question suggestions */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-3 text-center lg:text-left">
              <h3 className="font-display text-2xl font-medium text-text-primary">
                Question suggestions that never miss the real pain
              </h3>
              <p className="text-lg text-text-secondary">
                Aside reads buyer signals and prompts the exact next question so discovery goes deep and late stage surprises disappear.
              </p>
            </div>
            <div
              className="relative flex items-center justify-center rounded-[28px] p-2"
              style={{
                backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/bg-pattern-slash-17.svg")',
                backgroundSize: '150% auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="w-full max-w-lg rounded-3xl border border-white/15 bg-black/30 p-5 shadow-2xl backdrop-blur-2xl">
                  <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500/10">
                          <Sparkles className="h-4 w-4 text-yellow-500" />
                      </div>
                      <div>
                          <p className="font-medium text-text-primary">Buyer signal detected</p>
                          <p className="text-sm text-text-secondary">“...we don’t have engineering resources”</p>
                      </div>
                  </div>

                  <div className="space-y-2">
                      <div className="cursor-pointer rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-text-secondary transition-colors hover:bg-black/40">
                          What's your engineering roadmap look like?
                      </div>
                      <div className="cursor-pointer rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-text-secondary transition-colors hover:bg-black/40">
                          How does this factor into your eng priorities?
                      </div>
                      <div className="cursor-pointer rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-text-secondary transition-colors hover:bg-black/40">
                          What's driving the need to move on this now?
                      </div>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DuringCall;