import { Bot, Terminal, RefreshCw, Lightbulb, GitPullRequest, FileSearch, Shield, ChevronDown, ArrowRight, Check, Code2, Zap } from "lucide-react";

const BeforeCallSection = () => {
  return (
    <section id="features" className="container py-12 md:py-20 lg:pt-12 lg:pb-20">
      <div className="rounded-3xl border border-border-subtle">
        <div className="flex justify-between border-b border-border-subtle px-6 py-4 md:px-8">
          <span className="font-mono text-xs font-medium uppercase text-text-tertiary tracking-wider">[01] FEATURES</span>
          <span className="font-mono text-xs font-medium uppercase text-text-tertiary tracking-wider">/ CAPABILITIES</span>
        </div>

        <div className="grid divide-y divide-border-subtle">
          {/* Row 1: Agents */}
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-between p-6 md:p-8 lg:p-12">
              <div>
                <p className="mb-4 text-7xl font-light text-text-tertiary/50">01</p>
                <h3 className="mb-4 font-display text-2xl font-medium leading-tight tracking-tight text-white lg:text-[28px]">
                  Agents
                </h3>
                <p className="max-w-sm text-base text-text-secondary lg:text-lg">
                  Deploy autonomous AI agents that debug, refactor, and ship code while you sleep. Built for the vibe coding workflow.
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-5 text-text-tertiary">
                <Bot className="h-5 w-5" />
                <Zap className="h-5 w-5" />
              </div>
            </div>

            <div className="flex items-center justify-center p-6 md:border-l md:border-border-subtle md:p-8 lg:p-12">
              <div className="w-full max-w-sm rounded-[24px] bg-background-secondary p-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-text-secondary">Agent Status</p>
                  <ChevronDown className="h-5 w-5 text-text-secondary" />
                </div>
                
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/20">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Sonder Agent</p>
                    <p className="text-sm text-text-secondary">Active • 3 tasks running</p>
                  </div>
                </div>

                <div className="mb-4 space-y-2">
                  <div className="rounded-lg bg-[rgba(255,255,255,0.05)] p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-white">Fixing auth bug</p>
                      <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-medium text-primary">Complete</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-[rgba(255,255,255,0.05)] p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-white">Refactoring API</p>
                      <span className="rounded-full bg-yellow-500/20 px-2 py-0.5 text-[10px] font-medium text-yellow-400">In Progress</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: CLI */}
          <div className="grid md:grid-cols-2">
            <div className="flex items-center justify-center p-6 md:p-8 lg:p-12">
              <div className="relative w-full max-w-sm overflow-hidden rounded-[24px] bg-black/80 shadow-[0_20px_40px_rgba(0,0,0,0.5)] font-mono text-sm">
                <div className="border-b border-white/10 px-4 py-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/70"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500/70"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500/70"></div>
                  </div>
                </div>
                <div className="p-4 text-text-secondary">
                  <p><span className="text-primary">$</span> sonder audit ./src</p>
                  <p className="mt-2 text-text-tertiary">Scanning 247 files...</p>
                  <p className="text-yellow-400">⚠ Found 3 potential issues</p>
                  <p className="mt-2"><span className="text-primary">$</span> sonder fix --auto</p>
                  <p className="text-primary">✓ All issues resolved</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start p-6 pt-10 md:border-l md:border-border-subtle md:p-8 md:pt-10 lg:p-12 lg:pt-12">
              <div>
                <p className="mb-4 text-7xl font-light text-text-tertiary/50">02</p>
                <h3 className="mb-4 font-display text-2xl font-medium leading-tight tracking-tight text-white lg:text-[28px]">
                  CLI
                </h3>
                <p className="max-w-sm text-base text-text-secondary lg:text-lg">
                  Powerful command-line interface for hackers who live in the terminal. Run audits, deploy agents, and ship fixes in seconds.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3: CI/CD */}
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-start p-6 pt-10 md:p-8 md:pt-10 lg:p-12 lg:pt-12">
              <div>
                <p className="mb-4 text-7xl font-light text-text-tertiary/50">03</p>
                <h3 className="mb-4 font-display text-2xl font-medium leading-tight tracking-tight text-white lg:text-[28px]">
                  CI/CD
                </h3>
                <p className="max-w-sm text-base text-text-secondary lg:text-lg">
                  Integrate Sonder into your pipeline. Catch bugs before they hit production with automated code analysis on every push.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center p-6 md:border-l md:border-border-subtle md:p-8 lg:p-12">
              <div className="w-full max-w-sm rounded-[24px] bg-background-secondary p-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="mb-3 flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium text-white">Pipeline Status</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-[rgba(255,255,255,0.05)] p-3">
                    <span className="text-sm text-text-secondary">Build</span>
                    <span className="text-primary">✓</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[rgba(255,255,255,0.05)] p-3">
                    <span className="text-sm text-text-secondary">Sonder Audit</span>
                    <span className="text-primary">✓</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[rgba(255,255,255,0.05)] p-3">
                    <span className="text-sm text-text-secondary">Deploy</span>
                    <span className="text-primary">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: PoCs */}
          <div className="grid md:grid-cols-2">
            <div className="flex items-center justify-center p-6 md:p-8 lg:p-12">
              <div className="w-full max-w-sm rounded-[24px] bg-background-secondary p-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="mb-3 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-yellow-400" />
                  <p className="text-sm font-medium text-white">PoC Generated</p>
                </div>
                <div className="rounded-lg bg-black/50 p-3 font-mono text-xs text-text-secondary">
                  <p className="text-red-400"># SQL Injection PoC</p>
                  <p className="mt-1">curl -X POST /api/users \</p>
                  <p>  -d &apos;id=1 OR 1=1&apos;</p>
                  <p className="mt-2 text-yellow-400"># Impact: Data exposure</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start p-6 pt-10 md:border-l md:border-border-subtle md:p-8 md:pt-10 lg:p-12 lg:pt-12">
              <div>
                <p className="mb-4 text-7xl font-light text-text-tertiary/50">04</p>
                <h3 className="mb-4 font-display text-2xl font-medium leading-tight tracking-tight text-white lg:text-[28px]">
                  PoCs
                </h3>
                <p className="max-w-sm text-base text-text-secondary lg:text-lg">
                  Generate proof-of-concept exploits for discovered vulnerabilities. Understand the real impact before attackers do.
                </p>
              </div>
            </div>
          </div>

          {/* Row 5: PRs */}
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-start p-6 pt-10 md:p-8 md:pt-10 lg:p-12 lg:pt-12">
              <div>
                <p className="mb-4 text-7xl font-light text-text-tertiary/50">05</p>
                <h3 className="mb-4 font-display text-2xl font-medium leading-tight tracking-tight text-white lg:text-[28px]">
                  PRs
                </h3>
                <p className="max-w-sm text-base text-text-secondary lg:text-lg">
                  Auto-generate pull requests with fixes. One click to review, one click to merge. Ship secure code faster.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center p-6 md:border-l md:border-border-subtle md:p-8 lg:p-12">
              <div className="w-full max-w-sm rounded-[24px] bg-background-secondary p-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="mb-3 flex items-center gap-2">
                  <GitPullRequest className="h-4 w-4 text-purple-400" />
                  <p className="text-sm font-medium text-white">Pull Request</p>
                </div>
                <div className="rounded-lg bg-[rgba(255,255,255,0.05)] p-3">
                  <p className="text-sm font-medium text-white">fix: sanitize user input in auth</p>
                  <p className="mt-1 text-xs text-text-secondary">+12 -3 • 2 files changed</p>
                  <div className="mt-3 flex gap-2">
                    <button className="rounded-md bg-primary/20 px-3 py-1 text-xs font-medium text-primary">Merge</button>
                    <button className="rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-text-secondary">Review</button>
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