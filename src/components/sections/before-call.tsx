import { Bot, RefreshCw, Lightbulb, GitPullRequest, ChevronDown, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/status-badge";
import { DemoCard, DemoCardHeader } from "@/components/ui/demo-card";
import { FeatureRow, StatusItem } from "@/components/ui/feature-row";

// Demo card visuals for each feature
const AgentStatusCard = () => (
  <DemoCard>
    <DemoCardHeader>
      <p className="text-sm text-text-secondary">Agent Status</p>
      <ChevronDown className="h-5 w-5 text-text-secondary" />
    </DemoCardHeader>

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
          <StatusBadge>Complete</StatusBadge>
        </div>
      </div>
      <div className="rounded-lg bg-[rgba(255,255,255,0.05)] p-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-white">Refactoring API</p>
          <StatusBadge variant="warning">In Progress</StatusBadge>
        </div>
      </div>
    </div>
  </DemoCard>
);

const CliTerminalCard = () => (
  <DemoCard variant="terminal">
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
  </DemoCard>
);

const CiCdCard = () => (
  <DemoCard>
    <div className="mb-3 flex items-center gap-2">
      <RefreshCw className="h-4 w-4 text-primary" />
      <p className="text-sm font-medium text-white">Pipeline Status</p>
    </div>
    <div className="space-y-2">
      <StatusItem label="Build" status={<span className="text-primary">✓</span>} />
      <StatusItem label="Sonder Audit" status={<span className="text-primary">✓</span>} />
      <StatusItem label="Deploy" status={<span className="text-primary">✓</span>} />
    </div>
  </DemoCard>
);

const PocCard = () => (
  <DemoCard>
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
  </DemoCard>
);

const PrCard = () => (
  <DemoCard>
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
  </DemoCard>
);

const BeforeCallSection = () => {
  return (
    <section id="features" className="container py-12 md:py-20 lg:pt-12 lg:pb-20">
      <div className="rounded-3xl border border-border-subtle">
        <SectionHeader number="01" title="FEATURES" subtitle="CAPABILITIES" />

        <div className="grid divide-y divide-border-subtle">
          {/* Row 1: Agents */}
          <FeatureRow
            number="01"
            title="Agents"
            description="Deploy autonomous AI agents that debug, refactor, and ship code while you sleep. Built for the vibe coding workflow."
            icons={[Bot, Zap]}
            visual={<AgentStatusCard />}
          />

          {/* Row 2: CLI */}
          <FeatureRow
            number="02"
            title="CLI"
            description="Powerful command-line interface for hackers who live in the terminal. Run audits, deploy agents, and ship fixes in seconds."
            visual={<CliTerminalCard />}
            visualLeft
          />

          {/* Row 3: CI/CD */}
          <FeatureRow
            number="03"
            title="CI/CD"
            description="Integrate Sonder into your pipeline. Catch bugs before they hit production with automated code analysis on every push."
            visual={<CiCdCard />}
          />

          {/* Row 4: PoCs */}
          <FeatureRow
            number="04"
            title="PoCs"
            description="Generate proof-of-concept exploits for discovered vulnerabilities. Understand the real impact before attackers do."
            visual={<PocCard />}
            visualLeft
          />

          {/* Row 5: PRs */}
          <FeatureRow
            number="05"
            title="PRs"
            description="Auto-generate pull requests with fixes. One click to review, one click to merge. Ship secure code faster."
            visual={<PrCard />}
          />
        </div>
      </div>
    </section>
  );
};

export default BeforeCallSection;
