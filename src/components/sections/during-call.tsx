import { AlertTriangle, Eye, Target, Skull } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section';
import { DemoCard } from '@/components/ui/demo-card';

const DuringHack = () => {
  return (
    <section id="during-hack" className="relative overflow-hidden bg-black py-12 md:py-20 lg:py-24">
      <div className="container relative z-10 mx-auto">
        <SectionHeader
          number="02"
          title="DURING THE HACK"
          subtitle="LIVE EXPLOITATION"
          variant="border-top"
        />
        <h2 className="mx-auto max-w-4xl pt-12 text-center font-display text-4xl font-medium leading-tight -tracking-[0.01em] text-text-primary md:text-5xl">
          Watch Sonder break your app in real-time. Every vulnerability, demonstrated.
        </h2>

        <div className="mt-12 flex flex-col gap-24 lg:gap-32">
          {/* Feature 1: Live PoC Generation */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-3 text-center lg:text-left">
              <h3 className="font-display text-2xl font-medium text-text-primary">
                Live proof-of-concept generation
              </h3>
              <p className="text-lg text-text-secondary">
                See exploits crafted in real-time. No theoretical reports—actual working PoCs that prove impact.
              </p>
            </div>
            <DemoCard variant="gradient" gradientColor="red">
              <div className="mb-4 flex items-center gap-2">
                <Skull className="h-5 w-5 text-red-400" />
                <span className="text-sm font-medium text-red-400">Exploit Generated</span>
              </div>
              <div className="rounded-lg bg-black/50 p-4 font-mono text-xs">
                <p className="text-red-400"># IDOR Vulnerability - User Data Access</p>
                <p className="mt-2 text-text-secondary">curl -X GET /api/users/{'{victim_id}'} \</p>
                <p className="text-text-secondary">  -H &quot;Authorization: Bearer {'{attacker_token}'}&quot;</p>
                <p className="mt-2 text-green-400"># Response: 200 OK</p>
                <p className="text-yellow-400"># Leaked: email, address, SSN</p>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-text-tertiary">
                <AlertTriangle className="h-3 w-3 text-yellow-400" />
                <span>CVSS 8.1 - High Severity</span>
              </div>
            </DemoCard>
          </div>

          {/* Feature 2: Attack Chain Visualization */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-3 text-center lg:text-left lg:order-last">
              <h3 className="font-display text-2xl font-medium text-text-primary">
                Full attack chain visualization
              </h3>
              <p className="text-lg text-text-secondary">
                See how vulnerabilities connect. One bug leads to another—watch the full exploitation path unfold.
              </p>
            </div>
            <div className="lg:order-first">
              <DemoCard variant="gradient" gradientColor="purple">
                <div className="mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-400" />
                  <span className="text-sm font-medium text-purple-400">Attack Chain</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/20 text-xs font-bold text-yellow-400">1</div>
                    <div className="flex-1 rounded-lg bg-black/50 p-2 text-sm text-text-secondary">XSS in search field</div>
                  </div>
                  <div className="ml-4 h-4 w-px bg-purple-500/50"></div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-xs font-bold text-orange-400">2</div>
                    <div className="flex-1 rounded-lg bg-black/50 p-2 text-sm text-text-secondary">Session token stolen</div>
                  </div>
                  <div className="ml-4 h-4 w-px bg-purple-500/50"></div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-400">3</div>
                    <div className="flex-1 rounded-lg bg-black/50 p-2 text-sm text-text-secondary">Admin account takeover</div>
                  </div>
                </div>
              </DemoCard>
            </div>
          </div>

          {/* Feature 3: Real-time Vulnerability Feed */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-3 text-center lg:text-left">
              <h3 className="font-display text-2xl font-medium text-text-primary">
                Real-time vulnerability feed
              </h3>
              <p className="text-lg text-text-secondary">
                Watch findings stream in as Sonder probes your attack surface. Every endpoint tested, every bug logged.
              </p>
            </div>
            <DemoCard variant="gradient" gradientColor="green">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium text-green-400">Live Feed</span>
                </div>
                <span className="animate-pulse rounded-full bg-green-500/20 px-2 py-0.5 text-[10px] font-medium text-green-400">● SCANNING</span>
              </div>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 rounded bg-black/50 p-2">
                  <span className="text-red-400">CRITICAL</span>
                  <span className="text-text-secondary">SQL Injection in /api/search</span>
                </div>
                <div className="flex items-center gap-2 rounded bg-black/50 p-2">
                  <span className="text-orange-400">HIGH</span>
                  <span className="text-text-secondary">Broken auth on /admin/users</span>
                </div>
                <div className="flex items-center gap-2 rounded bg-black/50 p-2">
                  <span className="text-yellow-400">MEDIUM</span>
                  <span className="text-text-secondary">Missing rate limiting</span>
                </div>
                <div className="flex items-center gap-2 rounded bg-black/50 p-2">
                  <span className="text-blue-400">LOW</span>
                  <span className="text-text-secondary">Verbose error messages</span>
                </div>
              </div>
            </DemoCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DuringHack;
