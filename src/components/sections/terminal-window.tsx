"use client";

export function TerminalWindow() {
  return (
    <div className="w-[560px] max-w-[90vw] overflow-hidden rounded-xl bg-[#1a1a1a] font-mono text-sm shadow-2xl">
      {/* Title Bar */}
      <div className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
      </div>

      {/* Terminal Content */}
      <div className="space-y-5 p-6">
        {/* Welcome Box */}
        <div className="inline-block rounded border border-primary px-4 py-2">
          <span className="text-primary">*</span>
          <span className="ml-2 text-white">Welcome to Strix Agent</span>
        </div>

        {/* Command Prompt */}
        <div className="flex items-center gap-2">
          <span className="text-primary">&gt;</span>
          <span className="font-semibold text-white">Scanning target...</span>
        </div>

        {/* Hacking-themed Code */}
        <div className="space-y-1 pl-0 text-[13px] leading-relaxed">
          <div>
            <span className="text-[#c586c0]">while</span>
            <span className="text-white">(</span>
            <span className="text-[#9cdcfe]">vulnerable</span>
            <span className="text-white">) {"{"}</span>
          </div>
          <div className="pl-4">
            <span className="text-[#dcdcaa]">probe_endpoint</span>
            <span className="text-white">();</span>
          </div>
          <div className="pl-4">
            <span className="text-[#dcdcaa]">bypass_filters</span>
            <span className="text-white">();</span>
          </div>
          <div className="pl-4">
            <span className="text-[#dcdcaa]">exploit</span>
            <span className="text-white">(</span>
            <span className="text-[#ce9178]">weakness</span>
            <span className="text-white">);</span>
          </div>
          <div className="mt-3 pl-4">
            <span className="text-[#c586c0]">if</span>
            <span className="text-white"> (</span>
            <span className="text-[#9cdcfe]">access_granted</span>
            <span className="text-white">) {"{"}</span>
          </div>
          <div className="pl-8">
            <span className="text-[#dcdcaa]">report_finding</span>
            <span className="text-white">();</span>
          </div>
          <div className="pl-4">
            <span className="text-white">{"}"}</span>
          </div>
          <div>
            <span className="text-white">{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}