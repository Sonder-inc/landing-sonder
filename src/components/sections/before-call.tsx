import Image from "next/image";
import { Linkedin, MoreHorizontal, ChevronDown, ArrowRight, Check, Link2 } from "lucide-react";

const BeforeCallSection = () => {
  return (
    <section id="prepare" className="container py-12 md:py-20 lg:pt-12 lg:pb-20">
      <div className="rounded-3xl border border-border-subtle">
        <div className="flex justify-between border-b border-border-subtle px-6 py-4 md:px-8">
          <span className="font-mono text-xs font-medium uppercase text-text-tertiary tracking-wider">[01] BEFORE THE CALL</span>
          <span className="font-mono text-xs font-medium uppercase text-text-tertiary tracking-wider">/ PREPARE</span>
        </div>

        <div className="grid divide-y divide-border-subtle">
          {/* Row 1: Pre-meeting briefs */}
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-between p-6 md:p-8 lg:p-12">
              <div>
                <p className="mb-4 text-7xl font-light text-text-tertiary/50">01</p>
                <h3 className="mb-4 font-display text-2xl font-medium leading-tight tracking-tight text-white lg:text-[28px]">
                  Pre-meeting briefs for back-to-back calls.
                </h3>
                <p className="max-w-sm text-base text-text-secondary lg:text-lg">
                  Aside pulls CRM data and LinkedIn profiles into one view so you never start a call unprepared.
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-5 text-text-tertiary">
                <Linkedin className="h-5 w-5" />
                <MoreHorizontal className="h-5 w-5" />
              </div>
            </div>

            <div className="flex items-center justify-center p-6 md:border-l md:border-border-subtle md:p-8 lg:p-12">
              <div className="w-full max-w-sm rounded-[24px] bg-background-secondary p-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-text-secondary">Pre-read</p>
                  <ChevronDown className="h-5 w-5 text-text-secondary" />
                </div>
                
                <div className="mb-4 flex items-start gap-3">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/yc-square_e929d257-3.png" alt="Y Combinator Logo" width={36} height={36} className="rounded-md"/>
                  <div>
                    <p className="font-medium text-white">Aside &lt;&gt; Y Combinator</p>
                    <p className="text-sm text-text-secondary">Nov 30, 2025 9:00 AM</p>
                  </div>
                </div>

                <a href="#" className="mb-4 block rounded-lg bg-[rgba(255,255,255,0.05)] p-3 transition-colors hover:bg-[rgba(255,255,255,0.1)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 rounded bg-[#FF6B35] px-1.5 py-0.5">
                        <p className="text-[10px] font-bold leading-none text-white">CRM</p>
                      </div>
                      <p className="text-sm font-medium text-white">Y Combinator</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-text-secondary"/>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">View Deal on Hubspot</p>
                </a>
                
                <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                  Deal size is 100K. Team's roughly 30–50 people. Chanhee is running this account — last time we ended up going deep on how Aside streamline their interview pipelines.
                </p>
                
                <div className="space-y-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">Participants</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/andrew-miklas-a4a02c771d0206992fb5c86d8270fba268de-4.png" alt="Andrew Miklas" width={32} height={32} className="rounded-full" />
                      <div>
                        <p className="text-sm font-medium text-white">Andrew Miklas</p>
                        <p className="text-xs text-text-secondary">General Partner</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <a href="#" className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-white/20">
                        <Linkedin className="h-3.5 w-3.5 text-white/70" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/garry-852ae376014448cd052ddbca9a16eb96c0ed76dfd33a-5.png" alt="Garry Tan" width={32} height={32} className="rounded-full" />
                      <div>
                        <p className="text-sm font-medium text-white">Garry Tan</p>
                        <p className="text-xs text-text-secondary">President & CEO</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <a href="#" className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-white/20">
                        <Linkedin className="h-3.5 w-3.5 text-white/70" />
                      </a>
                       <a href="#" className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-white/20">
                        <Link2 className="h-3.5 w-3.5 text-white/70" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: One-click recording */}
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-start p-6 pt-10 md:p-8 md:pt-10 lg:p-12 lg:pt-12">
              <div>
                <p className="mb-4 text-7xl font-light text-text-tertiary/50">02</p>
                <h3 className="mb-4 font-display text-2xl font-medium leading-tight tracking-tight text-white lg:text-[28px]">
                  One-click recording across every platform.
                </h3>
                <p className="max-w-sm text-base text-text-secondary lg:text-lg">
                  Without meeting bots, Aside supports anything in your laptop - Zoom, Google Meet, and dialers.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center p-6 md:border-l md:border-border-subtle md:p-8 lg:p-12">
              <div className="relative w-full max-w-sm overflow-hidden rounded-[24px] bg-black/50 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="absolute -inset-24 opacity-30 blur-3xl" style={{background: 'conic-gradient(from 90deg at 40% 50%, #ea580c, #6366f1, #06b6d4, #8b5cf6, #d946ef, #ea580c)'}}></div>
                <div className="relative flex min-h-[300px] flex-col justify-between p-6">
                    <div className="rounded-full bg-white/10 p-2 pl-4 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/google-meet_ec1c5fa2-3.webp" alt="Google Meet" width={24} height={24} />
                                <div>
                                    <p className="text-sm font-medium text-white">Meeting detected</p>
                                    <p className="text-xs text-text-secondary">Google Meet</p>
                                </div>
                            </div>
                            <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
                                <Check className="h-4 w-4" />
                                Take notes
                            </button>
                        </div>
                     </div>
                 
                    <div className="isolate flex w-full items-center justify-center">
                        <div className="flex items-center justify-center space-x-2 rounded-full bg-black/20 p-2 backdrop-blur-md">
                           <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/zoom_aae3c79c-2.webp" alt="Zoom" width={40} height={40} className="rounded-lg"/>
                           <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/google-meet_ec1c5fa2-3.webp" alt="Google Meet" width={40} height={40} className="rounded-lg"/>
                           <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/slack_874eeb6f-4.webp" alt="Slack" width={40} height={40} className="rounded-lg"/>
                           <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/teams_d5dc402a-5.webp" alt="Teams" width={40} height={40} className="rounded-lg"/>
                           <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/webex_4c753814-6.webp" alt="Webex" width={40} height={40} className="rounded-lg"/>
                        </div>
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

export default BeforeCallSection;