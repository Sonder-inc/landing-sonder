"use client";

import Image from "next/image";
import { TerminalWindow, WebAppWindow } from "./terminal-window";

interface DesktopPreviewProps {
  activeTab?: "terminal" | "web";
}

const DesktopPreview = ({ activeTab = "terminal" }: DesktopPreviewProps) => {
  return (
    <div
      className="relative h-[480px] select-none overflow-hidden bg-cover bg-top md:h-[520px] md:rounded-xl"
      style={{
        backgroundImage:
          "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Generated-Image-December-01-2025-5_45PM-1764629164040.png?width=8000&height=8000&resize=contain')",
      }}
    >
      {/* NOTE: The original menu bar is likely translucent. Added background to match visual design. */}
      <div className="absolute left-0 top-0 z-10 flex h-9 w-full items-center bg-[#D4C5A9]/50 px-2 text-sm font-medium text-black backdrop-blur-sm">
        <div className="flex items-center">
          <span className="flex-shrink-0 px-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/svgs/menubar-apple_2b5d6514-2.svg"
              alt="Mac"
              width={14}
              height={17}
            />
          </span>
          <span className="px-3 font-bold">Sonder</span>
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

      {/* Window floating in front */}
      <div className="absolute inset-x-1 top-14 z-20 flex justify-center md:inset-x-auto md:left-1/2 md:block md:-translate-x-1/2">
        {activeTab === "terminal" ? <TerminalWindow /> : <WebAppWindow />}
      </div>
    </div>
  );
};

export default DesktopPreview;