import { GitPullRequest, CheckCircle2, Clock, FileCode2, AlertCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/status-badge";

const PrItem = ({
  title,
  description,
  additions,
  deletions,
  time,
  status,
}: {
  title: string;
  description: string;
  additions: number;
  deletions: number;
  time: string;
  status: "ready" | "review";
}) => (
  <div className="rounded-lg bg-black/50 p-4">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="mt-1 text-xs text-white/50">{description}</p>
      </div>
      <StatusBadge variant={status === "ready" ? "success" : "warning"}>
        {status === "ready" ? "Ready" : "Review"}
      </StatusBadge>
    </div>
    <div className="mt-3 flex items-center gap-4 text-xs text-white/50">
      <span className="flex items-center gap-1">
        <FileCode2 className="h-3 w-3" /> +{additions} -{deletions}
      </span>
      <span className="flex items-center gap-1">
        <Clock className="h-3 w-3" /> {time}
      </span>
    </div>
  </div>
);

const CveItem = ({
  id,
  dependency,
  severity,
}: {
  id: string;
  dependency: string;
  severity: "critical" | "high";
}) => (
  <div className="flex items-center gap-3 rounded-lg bg-black/30 p-3">
    <AlertCircle className={`h-4 w-4 ${severity === "critical" ? "text-red-400" : "text-orange-400"}`} />
    <div className="flex-1">
      <p className="text-xs font-medium text-white">{id}</p>
      <p className="text-[10px] text-white/50">{dependency}</p>
    </div>
    <CheckCircle2 className="h-4 w-4 text-green-400" />
  </div>
);

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
        <SectionHeader
          number="03"
          title="After the hack"
          subtitle="Remediation"
          variant="minimal"
        />
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
                  <PrItem
                    title="fix: sanitize SQL input in search endpoint"
                    description="Fixes SQL injection vulnerability in /api/search"
                    additions={24}
                    deletions={8}
                    time="2m ago"
                    status="ready"
                  />
                  <PrItem
                    title="fix: add CSRF token validation"
                    description="Prevents cross-site request forgery attacks"
                    additions={52}
                    deletions={3}
                    time="5m ago"
                    status="ready"
                  />
                  <PrItem
                    title="fix: escape user content in templates"
                    description="Resolves stored XSS vulnerability"
                    additions={18}
                    deletions={12}
                    time="8m ago"
                    status="review"
                  />
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
                <CveItem
                  id="CVE-2024-XXXX detected"
                  dependency="lodash < 4.17.21"
                  severity="critical"
                />
                <CveItem
                  id="CVE-2024-YYYY patched"
                  dependency="express < 4.18.2"
                  severity="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterHackSection;
