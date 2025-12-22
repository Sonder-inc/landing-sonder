"use client";

const SONDER_LOGO = [
  '  ▄█▄  ',
  ' █████ ',
  '▄█ █ █▄',
  '█ ███ █',
  '█ ▀ ▀ █',
  ' ▀ █ ▀ ',
];

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
        <div className="w-[260px] border-r border-[#3a3a3a] bg-[#252525] p-4">
          {/* Input area */}
          <div className="mb-4 rounded-lg bg-[#1a1a1a] p-3">
            <p className="text-xs text-gray-400">Find a security vulnerability and fix it</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Opus 4.5</span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4A9EFF]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdowns */}
          <div className="mb-4 flex justify-between gap-2">
            <div className="flex w-fit items-center gap-1 rounded-lg bg-[#1a1a1a] px-2 py-1.5 text-[10px] text-white">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>acme/webapp</span>
              <svg className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex w-fit items-center gap-1 rounded-lg bg-[#1a1a1a] px-2 py-1.5 text-[10px] text-white">
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
            <svg width="64" height="64" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="2" height="2" fill="#4da3ff" />
              <rect x="12" y="2" width="2" height="2" fill="#4da3ff" />
              <rect x="2" y="4" width="2" height="2" fill="#4da3ff" />
              <rect x="12" y="4" width="2" height="2" fill="#4da3ff" />
              <rect x="4" y="4" width="8" height="2" fill="#4da3ff" />
              <rect x="4" y="6" width="8" height="4" fill="#4da3ff" />
              <rect x="3" y="10" width="10" height="2" fill="#4da3ff" />
              <rect x="4" y="12" width="2" height="2" fill="#4da3ff" />
              <rect x="10" y="12" width="2" height="2" fill="#4da3ff" />
              <rect x="5" y="7" width="2" height="2" fill="#1c1c1c" />
              <rect x="9" y="7" width="2" height="2" fill="#1c1c1c" />
            </svg>
          </div>

          {/* Selectors */}
          <div className="mb-4 flex w-full max-w-[280px] justify-center gap-2">
            <div className="flex items-center gap-1 rounded-lg bg-[#3a3a3a] px-3 py-1.5 text-xs text-white">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="max-w-[100px] truncate">acme/webapp...</span>
              <svg className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-[#3a3a3a] px-3 py-1.5 text-xs text-white">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
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
                <span className="rounded bg-[#4A9EFF]/20 px-1.5 py-0.5 text-[9px] text-[#4A9EFF]">XSS</span>
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

export function CommandLineWindow() {
  return (
    <div className="w-[700px] max-w-[95vw] overflow-hidden rounded-xl bg-[#0f0f0f] font-mono text-sm shadow-2xl ring-1 ring-white/10">
      {/* Title Bar */}
      <div className="flex items-center justify-between bg-[#151515] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="text-xs tracking-widest text-white/50">COMMAND LINE</span>
      </div>

      <div className="flex h-[360px] items-center justify-center p-10">
        <div className="w-full max-w-[520px] rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <div className="space-y-1 text-[13px] leading-relaxed text-white/80">
            <div>
              <span className="text-white/60">run_sonder_fix()</span> {"{"}
            </div>
            <div className="pl-4">
              <span className="text-white/60">echo</span> <span className="text-white/60">"Processing "</span>
              <span className="text-orange-300">$1</span>
            </div>
            <div className="pl-4">
              <span className="text-orange-300">sonder</span> <span className="text-white/60">--task</span>{" "}
              <span className="text-white/60">"Fix the bug in "</span>
              <span className="text-orange-300">$1</span>
            </div>
            <div>{"}"}</div>
            <div className="pt-4 text-white/60">
              for bug in bugs:
              <div className="pl-4">run_sonder_fix(bug)</div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
            >
              RUN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SlackWindow() {
  return (
    <div className="w-[700px] max-w-[95vw] overflow-hidden rounded-xl bg-[#0f0f10] font-sans text-sm shadow-2xl ring-1 ring-white/10">
      {/* Title Bar */}
      <div className="flex items-center justify-between bg-[#151515] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="text-xs tracking-widest text-white/50">SLACK / TEAMS</span>
      </div>

      <div className="flex h-[360px] items-center justify-center p-10">
        <div className="w-full max-w-[560px] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
          <div className="border-b border-white/10 px-4 py-3 font-mono text-xs text-white/50">
            #project <span className="ml-1 text-white/30">▾</span>
          </div>
          <div className="space-y-3 px-4 py-4">
            <div className="rounded-xl bg-black/20 p-3">
              <div className="font-mono text-[11px] text-white/60">You</div>
              <div className="mt-1 font-mono text-[13px] text-white/80">
                Run a quick scan on <span className="text-orange-300">api.sonder.dev</span> and file the top 3 issues.
                <span className="text-orange-300"> @sonder</span>
              </div>
            </div>
            <div className="rounded-xl bg-black/20 p-3">
              <div className="font-mono text-[11px] text-white/60">sonder</div>
              <div className="mt-1 font-mono text-[13px] text-white/80">
                On it. I’ll scan endpoints + auth flows and draft tickets with reproduction steps.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 border-t border-white/10 px-4 py-3">
            <div className="h-8 flex-1 rounded-lg bg-black/20" />
            <div className="h-8 w-8 rounded-lg bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectManagerWindow() {
  return (
    <div className="w-[700px] max-w-[95vw] overflow-hidden rounded-xl bg-[#0f0f10] font-sans text-sm shadow-2xl ring-1 ring-white/10">
      {/* Title Bar */}
      <div className="flex items-center justify-between bg-[#151515] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="text-xs tracking-widest text-white/50">PROJECT MANAGER</span>
      </div>

      <div className="flex h-[360px] items-center justify-center p-10">
        <div className="w-full max-w-[420px] space-y-3">
          <div className="flex items-center justify-center gap-3 text-white/60">
            <div className="h-3 w-3 rounded-full ring-2 ring-white/30" />
            <span className="font-mono text-xs">Todo</span>
            <span className="font-mono text-xs text-white/30">3</span>
          </div>

          {[
            { key: "PRO-14", title: "Implement Light Mode" },
            { key: "PRO-18", title: "Optimize Image Rendering Pipeline" },
            { key: "PRO-21", title: "Implement Dark Mode" },
          ].map((t) => (
            <div
              key={t.key}
              className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] tracking-wider text-white/40">{t.key}</div>
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </div>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-3.5 w-3.5 rounded-full ring-1 ring-white/20" />
                <div className="text-sm text-white/75">{t.title}</div>
              </div>
              <div className="mt-3 h-1 w-10 rounded bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}