import Image from "next/image";
import { Sparkles, PauseCircle, ChevronDown } from "lucide-react";

const DesktopPreview = () => {
  return (
    <div
      className="relative h-96 select-none overflow-hidden bg-cover md:rounded-xl"
      style={{
        backgroundImage:
          "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Generated-Image-December-01-2025-5_45PM-1764629164040.png?width=8000&height=8000&resize=contain')",
      }}
    >
      {/* NOTE: The original menu bar is likely translucent. Added background to match visual design. */}
      <div className="absolute left-0 top-0 flex h-9 w-full items-center bg-[#D4C5A9]/80 px-2 text-sm font-medium text-black backdrop-blur-sm">
        <div className="flex items-center">
          <span className="px-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/menubar-apple_2b5d6514-2.svg"
              alt="Mac"
              width={14}
              height={17}
            />
          </span>
          <span className="px-3 font-bold">Aside</span>
          <span className="px-3">File</span>
          <span className="px-3">Edit</span>
          <span className="px-3">View</span>
          <span className="px-3">Window</span>
          <span className="px-3">Help</span>
        </div>
        <div className="grow"></div>
        <div className="hidden items-center md:flex">
          <span className="px-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/menubar-wifi_a265f209-3.svg"
              alt="Wifi"
              width={18}
              height={12}
            />
          </span>
          <span className="px-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/menubar-spotlight_f1b25dd2-4.svg"
              alt="Spotlight"
              width={17}
              height={17}
            />
          </span>
          <span className="px-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/menubar-share_a39f7040-5.svg"
              alt="Share"
              width={14}
              height={18}
            />
          </span>
          <span className="px-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/menubar-control-center_8cc83767-6.svg"
              alt="Control Center"
              width={18}
              height={18}
            />
          </span>
          <span className="px-3">Sun Nov 30 11:58 AM</span>
        </div>
      </div>

      <div className="absolute left-1/2 top-16 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="flex items-start">
          <div className="-ml-5 flex h-11 w-11 shrink-0 items-center justify-center">
            <div className="rounded-full shadow-xl">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full">
                <Image
                  alt="Aside"
                  className="-mb-[0.4375rem] h-6 w-auto"
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/character-casper_87004055-7.svg"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>

          <div className="w-fit">
            <div className="relative rounded-3xl border-t border-t-white/30 bg-black/30 shadow-2xl backdrop-blur-2xl transition-all">
              <div className="overflow-hidden rounded-3xl">
                <div className="p-1">
                  <div className="flex w-max items-center">
                    <div className="flex h-8 shrink-0 items-center justify-center gap-1 rounded-full py-2 pl-2 pr-2.5 text-[15px] font-medium text-muted-foreground">
                      <Image
                        alt="Insights"
                        className="h-4 w-4 opacity-50"
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/insights_2d831173-8.svg"
                        width={16}
                        height={16}
                      />
                      <span>Insights</span>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-1 rounded-full py-2 pl-2 pr-2.5 text-[15px] font-medium text-muted-foreground">
                      <Sparkles className="h-4 w-4" fill="currentColor" />
                      <span>Ask</span>
                    </div>
                    <div className="mx-0.5 h-4 w-px bg-primary"></div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                      <PauseCircle className="h-6 w-6 text-white" fill="currentColor" />
                    </div>
                    <div className="flex items-center gap-0.5 rounded-full pl-1 pr-0.5">
                      <div className="flex h-6 w-6 items-center justify-center gap-[3px]">
                        {/* NOTE: The 'animate-audioBar*' classes require keyframes to be defined in tailwind.config.js */}
                        <div className="h-1/4 w-[3px] animate-[audioBar1_1.5s_ease-in-out_infinite] rounded-full bg-white"></div>
                        <div className="h-1/2 w-[3px] animate-[audioBar2_1.5s_ease-in-out_infinite] rounded-full bg-white delay-200"></div>
                        <div className="h-3/4 w-[3px] animate-[audioBar3_1.5s_ease-in-out_infinite] rounded-full bg-white delay-400"></div>
                      </div>
                      <ChevronDown className="h-4 w-4 text-white/40" />
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div className="w-max max-w-[20rem] grow space-y-1.5 px-5 py-3 md:max-w-[30rem]">
                    <div className="z-1 w-full">
                      <div className="space-y-0.5 py-1">
                        <div className="text-base font-semibold leading-tight tracking-tight text-white">
                          Q. What's the difference with Firebase?
                        </div>
                        <p className="text-sm font-medium tracking-tight text-muted-foreground">
                          Best answer from past calls
                        </p>
                      </div>
                      <div className="text-base font-medium tracking-[-0.015em] text-accent-foreground">
                        <div className="mb-3">
                          Supabase gives you a real Postgres database with SQL, auth, and row level security so you get Firebase-like speed with full control and flexibility.
                        </div>
                        <div className="-mb-0.5 flex items-center gap-1">
                          <div className="flex w-[11rem] shrink-0 items-center gap-2 rounded-xl border border-border bg-black/10 py-1.5 pl-2 pr-3">
                            <Image
                              className="h-5 w-5 flex-shrink-0 rounded-full"
                              alt="Citation"
                              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/minibar-citation-supabase_dc08722f-1.png"
                              width={20}
                              height={20}
                            />
                            <div className="truncate">
                              <p className="truncate text-xs font-medium leading-tight text-white">
                                Supabase vs Firebase
                              </p>
                              <p className="truncate text-[10px] leading-none text-muted-foreground">
                                supabase.com
                              </p>
                            </div>
                          </div>
                          <div className="flex w-[11rem] shrink-0 items-center gap-2 rounded-xl border border-border bg-black/10 py-1.5 pl-2 pr-3">
                            <Image
                              className="h-5 w-5 flex-shrink-0 rounded-full"
                              alt="Citation"
                              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/icons/minibar-citation-profile_8c511a53-2.png"
                              width={20}
                              height={20}
                            />
                            <div className="truncate">
                              <p className="truncate text-xs font-medium leading-tight text-white">
                                Intro call between Chanhee and John
                              </p>
                              <p className="truncate text-[10px] leading-none text-muted-foreground">
                                Past call ⋅ 2w ago
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-75% to-primary/15"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopPreview;