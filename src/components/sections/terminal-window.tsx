import { Brain, ChevronRight, Globe, MousePointer2, ShieldAlert } from "lucide-react";

export function TerminalWindow() {
  return (
    <div className="w-[900px] max-w-[95vw] overflow-hidden rounded-xl border border-[#333] bg-[#0a0a0a] font-mono text-sm shadow-2xl">
      {/* Title Bar */}
      <div className="flex items-center justify-between border-b border-[#333] bg-[#111] px-4 py-2.5">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-xs font-medium text-gray-400">agent-terminal — -zsh — 120x40</div>
        <div className="w-16" />
      </div>

      <div className="flex h-[420px] flex-col md:h-[500px] md:flex-row">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6 text-gray-300 scrollbar-none">
          <div className="space-y-6">
            {/* Action: Clicking */}
            <div className="flex gap-3">
              <MousePointer2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
              <span className="text-cyan-400">clicking</span>
            </div>

            {/* Thinking Block */}
            <div className="flex gap-3">
              <Brain className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
              <div className="space-y-2">
                <span className="font-bold text-white">Thinking</span>
                <p className="leading-relaxed text-gray-300">
                  EXCELLENT! I've found a critical SSRF vulnerability! The URL Health Checker attempted to connect to http://127.0.0.1:22 (localhost SSH port) and returned a "500 Network Error" after 62ms. This confirms the service is reachable internally.
                </p>
              </div>
            </div>

            {/* Action: Clicking */}
            <div className="flex gap-3">
              <MousePointer2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
              <span className="text-cyan-400">clicking</span>
            </div>

            {/* Action: Typing */}
            <div className="flex gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
              <div className="break-all">
                <span className="text-cyan-400">typing</span>{" "}
                <span className="text-cyan-200">http://169.254.169.254/latest/meta-data/</span>
              </div>
            </div>

            {/* Thinking Block */}
            <div className="flex gap-3">
              <Brain className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
              <div className="space-y-2">
                <span className="font-bold text-white">Thinking</span>
                <p className="leading-relaxed text-gray-300">
                  CRITICAL FINDING! The AWS metadata endpoint returned "200 Bad Request" in 220ms. This is extremely significant because it indicates the request was processed by the metadata service.
                </p>
              </div>
            </div>

            {/* Vulnerability Report */}
            <div className="flex gap-3">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              <div className="w-full space-y-2">
                <span className="font-bold text-red-400">Vulnerability Report</span>
                <div className="rounded border border-red-500/30 bg-red-500/10 p-4">
                  <h3 className="mb-2 font-bold text-white">Critical SSRF in URL Health Checker — AWS Metadata Access</h3>
                  <div className="mb-4 text-xs font-bold text-red-400">Severity: CRITICAL</div>
                  <p className="text-sm text-gray-300">
                    **VULNERABILITY SUMMARY:**<br />
                    Server-Side Request Forgery (SSRF) vulnerability in the URL Health Checker feature allows attackers to make requests to internal services and cloud metadata endpoints.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Line */}
          <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-gray-500">
            <span>Investigating.</span>
            <span className="ml-auto text-xs">ESC to stop agent</span>
          </div>
          <div className="mt-2 flex items-center gap-2 rounded border border-white/10 bg-[#1a1a1a] px-3 py-2">
            <ChevronRight className="h-4 w-4 text-gray-500" />
            <div className="h-4 w-2 animate-pulse bg-gray-500"></div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden w-72 shrink-0 border-l border-[#333] bg-[#0c0c0c] p-4 md:block">
          <div className="mb-6 flex items-center gap-2 rounded border border-blue-500/30 bg-blue-900/30 px-3 py-1.5 text-sm font-medium text-blue-200">
            <div className="h-2 w-2 rounded-full bg-blue-400"></div>
            StrixAgent
          </div>

          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-2 text-white">
              <div className="h-1.5 w-1.5 rounded-full border border-gray-500 bg-gray-500"></div>
              SSRF Specialist
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full border border-gray-500"></div>
              IDOR Projects Speci
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full border border-gray-500"></div>
              XSS Hunter
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full border border-gray-500"></div>
              Auth & Business Log
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
