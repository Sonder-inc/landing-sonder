import type { LandingMode } from "@/lib/landing-mode";

type ProductStepId = "terminal" | "web" | "cli" | "slack" | "pm";

export type LandingCopy = {
  hero: {
    introPill: string;
    titlePrefix: string;
    subtitle1: string;
    subtitle2: string;
  };
  trustedBy: { label: string };
  product: {
    heading: string;
    subheading: string;
    steps: Array<{
      id: ProductStepId;
      number: string;
      label: string;
      title: string;
      description: string;
    }>;
  };
  enterprise: {
    intro: string;
    headline: string;
  };
  security: {
    eyebrow: string;
    headline: string;
  };
  finalCta: {
    headline: string;
    subhead: string;
  };
  windows: {
    terminal: { statusLine: string };
    web: {
      prompt: string;
      tasks: Array<{ title: string; description: string }>;
    };
    slack: { userMessage: string; sonderMessage: string };
  };
};

export const landingCopy: Record<LandingMode, LandingCopy> = {
  execute: {
    hero: {
      introPill: "introducing sonder v0.1",
      titlePrefix: "AI hackers\u00A0to",
      subtitle1: "Move faster in the terminal. Keep control.",
      subtitle2:
        "An AI terminal agent built for security workflows—quick iterations, fewer dead ends, and clean, repeatable output. Open source with BYOK support.",
    },
    trustedBy: { label: "Trusted by teams at" },
    product: {
      heading: "Sonder meets you\nwherever you work.",
      subheading:
        "Embed agents into your workflow across terminal, web, and chat. Keep momentum and delegate security work wherever it naturally happens.",
      steps: [
        {
          id: "terminal",
          number: "01",
          label: "TERMINAL / IDE",
          title: "Sonder at your fingertips",
          description:
            "Sonder embeds directly into your workflow. IDE, Web, CLI, Slack, Linear. Delegate tasks as they come to mind, wherever you are.",
        },
        {
          id: "web",
          number: "02",
          label: "WEB BROWSER",
          title: "Sonder in your browser",
          description:
            "Launch tests and review findings in a clean web UI with full traceability.",
        },
        {
          id: "cli",
          number: "03",
          label: "COMMAND LINE",
          title: "Sonder at scale",
          description:
            "Script and parallelize agents at massive scale for CI/CD, migrations, and maintenance.",
        },
        {
          id: "slack",
          number: "04",
          label: "SLACK / TEAMS",
          title: "Sonder in the war room",
          description:
            "Give support teams and engineers a shared line to Sonder. From incident triage to small bug fixes, anyone can delegate tasks in plain English.",
        },
        {
          id: "pm",
          number: "05",
          label: "PROJECT MANAGER",
          title: "Sonder in your backlog",
          description:
            "Automatically trigger agents from tickets and ship fixes while maintaining traceability from issue to code.",
        },
      ],
    },
    enterprise: {
      intro:
        "Sonder is designed to meet the demands of modern enterprise teams — secure, scalable, and ready to integrate with your existing engineering tools.",
      headline: "AI that will work with you, not replace you",
    },
    security: {
      eyebrow: "[04] Enterprise Ready",
      headline:
        "Built for teams that can’t afford to compromise on security or compliance.",
    },
    finalCta: {
      headline: "Finding bugs at terminal velocity",
      subhead: "Continuous pentesting that scales with your codebase. Ship fast, stay secure.",
    },
    windows: {
      terminal: { statusLine: "Scanning target..." },
      web: {
        prompt: "Find a security vulnerability and fix it",
        tasks: [
          {
            title: "Scan for XSS vulnerabilities",
            description:
              "Analyze the codebase for cross-site scripting issues and recommend fixes",
          },
          {
            title: "Check authentication flows",
            description: "Review auth implementation for security vulnerabilities",
          },
          {
            title: "Audit API endpoints",
            description: "Search for insecure endpoints and missing authorization",
          },
        ],
      },
      slack: {
        userMessage:
          "Run a quick scan on api.sonder.dev and file the top 3 issues. @sonder",
        sonderMessage:
          "On it. I’ll scan endpoints + auth flows and draft tickets with reproduction steps.",
      },
    },
  },
  educate: {
    hero: {
      introPill: "introducing sonder v0.1",
      titlePrefix: "AI hackers\u00A0to",
      subtitle1: "Learn hacking in a real terminal—guided by an AI agent.",
      subtitle2:
        "Connects to pwn.college, TryHackMe, and Hack The Box to walk you through labs step-by-step. Open source. Bring your own API key, or use ours.",
    },
    trustedBy: { label: "Trusted by teams at" },
    product: {
      heading: "Sonder meets you\nwherever you learn.",
      subheading:
        "Get explanations, reproducible demos, and practical fixes across terminal, web, and chat—right where your team already collaborates.",
      steps: [
        {
          id: "terminal",
          number: "01",
          label: "TERMINAL / IDE",
          title: "Explain it in context",
          description:
            "Ask why a pattern is risky, get annotated diffs, and learn safe alternatives without leaving your editor.",
        },
        {
          id: "web",
          number: "02",
          label: "WEB BROWSER",
          title: "Teach through traceability",
          description:
            "Review findings with clear reasoning, evidence, and remediation notes that become documentation.",
        },
        {
          id: "cli",
          number: "03",
          label: "COMMAND LINE",
          title: "Standardize knowledge",
          description:
            "Generate repeatable checks and guardrails your team can run in CI to prevent regressions.",
        },
        {
          id: "slack",
          number: "04",
          label: "SLACK / TEAMS",
          title: "Coach in the war room",
          description:
            "During incidents, get quick explanations, prioritized next steps, and guidance the whole team can follow.",
        },
        {
          id: "pm",
          number: "05",
          label: "PROJECT MANAGER",
          title: "Turn fixes into playbooks",
          description:
            "Generate tickets with learning notes, acceptance criteria, and links to examples so fixes stick.",
        },
      ],
    },
    enterprise: {
      intro:
        "Sonder fits enterprise reality — auditability, permissions, and guardrails so teams can learn and ship safely at scale.",
      headline: "AI that levels up your team",
    },
    security: {
      eyebrow: "[04] Enterprise Ready",
      headline:
        "Built for teams that need security outcomes—and shared understanding.",
    },
    finalCta: {
      headline: "Security learning at terminal velocity",
      subhead:
        "Guided assessments that turn into playbooks. Ship fast, understand faster.",
    },
    windows: {
      terminal: { statusLine: "Explaining findings..." },
      web: {
        prompt: "Explain this vulnerability and propose a fix",
        tasks: [
          {
            title: "Explain XSS risk",
            description:
              "Show a minimal repro, impact, and a safer encoding strategy",
          },
          {
            title: "Teach auth best practices",
            description:
              "Walk through the flow and highlight where to harden it",
          },
          {
            title: "Review API authorization",
            description:
              "Explain missing checks and propose consistent policy enforcement",
          },
        ],
      },
      slack: {
        userMessage:
          "Can you explain the top risks on api.sonder.dev and how to fix them? @sonder",
        sonderMessage:
          "Yep. I’ll summarize root causes, show repro steps, and propose fixes with links to examples.",
      },
    },
  },
};


