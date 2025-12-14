import { GitPullRequest, Bug, Shield, Bell, CheckCircle2, Clock, FileCode2, AlertCircle } from "lucide-react";

const AfterHackSection = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(0, 35, 84) 20%, rgb(0, 84, 35) 80%)",
      }}
      className="rounded-3xl border-t border-t-white/20"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-20">
        <div className="mb-4 flex items-center justify-between border-b border-b-white/10 pb-4 text-xs font-medium uppercase text-white/50">
          <span>[03] After the hack</span>
          <span>/ Remediation</span>
        </div>
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 md:grid-cols-2">
          <div className="md:col-start-1">
            <div className="sticky top-28">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/50">
                03-1. Auto PRs
              </div>
              <h3 className="font-display mb-2 max-w-sm text-[28px] font-medium leading-tight text-white">
                One-click fixes, ready to merge
              </h3>
              <p className="text-white/60">
                Sonder doesn&apos;t just find bugs—it writes the fix. Auto-generated PRs with full context, ready for review.
              </p>
            </div>
          </div>

          <div className="md:col-start-2 md:row-span-2 md:row-start-1">
            <div className="relative">
              <div className="mt-8 overflow-hidden rounded-2xl bg-black/40 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-2">
                  <GitPullRequest className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium text-white">Pull Requests</span>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg bg-black/50 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">fix: sanitize SQL input in search endpoint</p>
                        <p className="mt-1 text-xs text-white/50">Fixes SQL injection vulnerability in /api/search</p>
                      </div>
                      <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-[10px] font-medium text-green-400">Ready</span>
                    </div>
                    <div className="mt-3 flex items-center gap-4 text-xs text-white/50">
                      <span className="flex items-center gap-1"><FileCode2 className="h-3 w-3" /> +24 -8</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 2m ago</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-black/50 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">fix: add CSRF token validation</p>
                        <p className="mt-1 text-xs text-white/50">Prevents cross-site request forgery attacks</p>
                      </div>
                      <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-[10px] font-medium text-green-400">Ready</span>
                    </div>
                    <div className="mt-3 flex items-center gap-4 text-xs text-white/50">
                      <span className="flex items-center gap-1"><FileCode2 className="h-3 w-3" /> +52 -3</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 5m ago</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-black/50 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">fix: escape user content in templates</p>
                        <p className="mt-1 text-xs text-white/50">Resolves stored XSS vulnerability</p>
                      </div>
                      <span className="rounded-full bg-yellow-500/20 px-2 py-0.5 text-[10px] font-medium text-yellow-400">Review</span>
                    </div>
                    <div className="mt-3 flex items-center gap-4 text-xs text-white/50">
                      <span className="flex items-center gap-1"><FileCode2 className="h-3 w-3" /> +18 -12</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 8m ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden h-20 md:block md:col-start-1" />

          <div className="md:col-start-1">
            <div className="sticky top-28">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/50">
                03-2. CVE Monitoring
              </div>
              <h3 className="font-display mb-2 max-w-sm text-[28px] font-medium leading-tight text-white">
                New CVEs? Fixed before you wake up.
              </h3>
              <p className="text-white/60">
                Sonder monitors new vulnerabilities 24/7. When a CVE drops that affects your stack, a PR is already waiting.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-3 rounded-lg bg-black/30 p-3">
                  <AlertCircle className="h-4 w-4 text-red-400" />
                  <div className="flex-1">
                    <p className="text-xs font-medium text-white">CVE-2024-XXXX detected</p>
                    <p className="text-[10px] text-white/50">lodash &lt; 4.17.21</p>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-black/30 p-3">
                  <AlertCircle className="h-4 w-4 text-orange-400" />
                  <div className="flex-1">
                    <p className="text-xs font-medium text-white">CVE-2024-YYYY patched</p>
                    <p className="text-[10px] text-white/50">express &lt; 4.18.2</p>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterHackSection;