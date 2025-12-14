import { Shield, Bug, Zap, Terminal, AlertTriangle, Eye, Target, Skull } from 'lucide-react';

const DuringHack = () => {
  return (
    <section id="during-hack" className="relative overflow-hidden bg-black py-12 md:py-20 lg:py-24">
      <div className="container relative z-10 mx-auto">
        <div className="relative mb-12 border-t border-white/10 md:mb-20">
          <div className="absolute -top-3 w-full px-4">
              <div className="relative h-px w-full">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-black pr-3">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-tertiary">
                    [02] DURING THE HACK
                  </p>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-black pl-3">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-tertiary">
                    / LIVE EXPLOITATION
                  </p>
                 </div>
              </div>
          </div>           
          <h2 className="mx-auto max-w-4xl pt-12 text-center font-display text-4xl font-medium leading-tight -tracking-[0.01em] text-text-primary md:text-5xl">
            Watch Sonder break your app in real-time. Every vulnerability, demonstrated.
          </h2>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
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
            <div className="relative flex items-center justify-center rounded-[28px] bg-gradient-to-br from-red-500/10 to-transparent p-2">
              <div className="w-full max-w-lg rounded-3xl border border-red-500/20 bg-black/80 p-5 shadow-2xl">
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
              </div>
            </div>
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
            <div className="relative flex items-center justify-center rounded-[28px] bg-gradient-to-br from-purple-500/10 to-transparent p-2 lg:order-first">
              <div className="w-full max-w-lg rounded-3xl border border-purple-500/20 bg-black/80 p-5 shadow-2xl">
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
              </div>
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
            <div className="relative flex items-center justify-center rounded-[28px] bg-gradient-to-br from-green-500/10 to-transparent p-2">
              <div className="w-full max-w-lg rounded-3xl border border-green-500/20 bg-black/80 p-5 shadow-2xl">
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
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DuringHack;