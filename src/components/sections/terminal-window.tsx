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
          <span className="ml-2 text-white">Welcome to Sonder</span>
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
            <span className="text-[#c586c0]">when</span>
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

export function WebAppWindow() {
  return (
    <div className="w-[700px] max-w-[95vw] overflow-hidden rounded-xl bg-[#2d2d2d] font-sans text-sm shadow-2xl">
      {/* Title Bar */}
      <div className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-4 text-xs text-gray-400">Sonder</span>
        <span className="ml-2 rounded bg-[#3a3a3a] px-2 py-0.5 text-[10px] text-gray-500">Beta</span>
      </div>

      <div className="flex h-[360px]">
        {/* Sidebar */}
        <div className="w-[220px] border-r border-[#3a3a3a] bg-[#252525] p-4">
          {/* Input area */}
          <div className="mb-4 rounded-lg bg-[#1a1a1a] p-3">
            <p className="text-xs text-gray-400">Find a security vulnerability and fix it</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-[#3a3a3a]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Opus 4.5</span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3 w-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdowns */}
          <div className="mb-4 flex gap-2">
            <div className="flex items-center gap-1 rounded-lg bg-[#1a1a1a] px-2 py-1.5 text-[10px] text-white">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="max-w-[70px] truncate">acme/webapp</span>
              <svg className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-[#1a1a1a] px-2 py-1.5 text-[10px] text-white">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Default</span>
              <svg className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Sessions */}
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs text-gray-500">Sessions</span>
            <svg className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
          </div>
          <div className="rounded-lg bg-[#1a1a1a] p-3">
            <p className="text-xs font-medium text-white">SQL injection scan</p>
            <p className="text-[10px] text-gray-500">api-service · Dec 10</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col items-center justify-center bg-[#2d2d2d] p-6">
          {/* Mascot */}
          <div className="mb-4">
            <svg width="48" height="48" viewBox="0 0 48 48" className="text-primary">
              <rect x="8" y="16" width="32" height="24" rx="4" fill="currentColor"/>
              <rect x="12" y="8" width="8" height="12" rx="2" fill="currentColor"/>
              <rect x="28" y="8" width="8" height="12" rx="2" fill="currentColor"/>
              <circle cx="18" cy="26" r="3" fill="#1a1a1a"/>
              <circle cx="30" cy="26" r="3" fill="#1a1a1a"/>
            </svg>
          </div>

          {/* Selectors */}
          <div className="mb-4 flex gap-2">
            <div className="flex items-center gap-1 rounded-lg bg-[#3a3a3a] px-3 py-1.5 text-xs text-white">
              <span className="max-w-[100px] truncate">acme/webapp...</span>
              <svg className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-[#3a3a3a] px-3 py-1.5 text-xs text-white">
              <span>Default</span>
              <svg className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Task Cards */}
          <div className="w-full max-w-[280px] space-y-2">
            <div className="rounded-lg border border-[#3a3a3a] bg-[#252525] p-3">
              <h4 className="text-xs font-medium text-white">Scan for XSS vulnerabilities</h4>
              <p className="mt-1 text-[10px] text-gray-500">Analyze the codebase for cross-site scripting issues and recommend fixes</p>
              <div className="mt-2 flex items-center justify-end gap-1">
                <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[9px] text-primary">XSS</span>
                <span className="text-[9px] text-gray-500">3 found</span>
              </div>
            </div>
            <div className="rounded-lg border border-[#3a3a3a] bg-[#252525] p-3">
              <h4 className="text-xs font-medium text-white">Check authentication flows</h4>
              <p className="mt-1 text-[10px] text-gray-500">Review auth implementation for security vulnerabilities</p>
            </div>
            <div className="rounded-lg border border-[#3a3a3a] bg-[#252525] p-3">
              <h4 className="text-xs font-medium text-white">Audit API endpoints</h4>
              <p className="mt-1 text-[10px] text-gray-500">Search for insecure endpoints and missing authorization</p>
              <div className="mt-2 flex items-center justify-end gap-1">
                <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[9px] text-amber-400">Security</span>
                <span className="text-[9px] text-gray-500">Scanning...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}