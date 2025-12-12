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

      {/* Content */}
      <div className="space-y-4 p-6">
        {/* Repository Dropdown */}
        <div className="flex items-center gap-2 rounded border border-border bg-[#2a2a2a] px-3 py-2">
          <span className="text-muted-foreground">🔗</span>
          <span className="text-sm text-muted-foreground">your-org/your-app</span>
          <span className="ml-auto text-muted-foreground">▼</span>
        </div>

        {/* Model Dropdown */}
        <div className="flex items-center gap-2 rounded border border-border bg-[#2a2a2a] px-3 py-2">
          <span className="text-muted-foreground">💬</span>
          <span className="text-sm text-muted-foreground">Opus 4.5</span>
          <span className="ml-auto text-muted-foreground">▼</span>
        </div>

        {/* Action Cards */}
        <div className="space-y-3 pt-2">
          <div className="rounded-lg border border-border bg-[#252525] p-4 transition-colors hover:bg-[#2a2a2a]">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-sm font-medium text-white">Audit the dependencies</span>
              <span className="ml-auto rounded bg-primary/20 px-2 py-0.5 text-[10px] text-primary">deps</span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Analyze dependencies for outdated packages or security vulnerabilities
            </p>
          </div>

          <div className="rounded-lg border border-border bg-[#252525] p-4 transition-colors hover:bg-[#2a2a2a]">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-sm font-medium text-white">Find performance issues</span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Analyze for performance anti-patterns and inefficiencies
            </p>
          </div>

          <div className="rounded-lg border border-border bg-[#252525] p-4 transition-colors hover:bg-[#2a2a2a]">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-sm font-medium text-white">Fix a security issue</span>
              <span className="ml-auto rounded bg-yellow-500/20 px-2 py-0.5 text-[10px] text-yellow-400">Security</span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Search for security issues and fix them
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}