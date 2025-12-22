export const URLS = {
  BOOK_DEMO: "https://cal.com/trysonder",
  APP: "https://app.trysonder.ai",
  INSTALL_SCRIPT: "https://trysonder.ai/install.sh",
  INSTALL_SCRIPT_SOURCE: "https://raw.githubusercontent.com/Sonder-inc/sonder/main/install.sh",
  GITHUB_ORG: "https://github.com/Sonder-inc",
  GITHUB_REPO: "https://github.com/Sonder-inc/sonder",
  DISCORD: "https://discord.gg/3PpkxCGWeV",
} as const;

export const ASSETS = {
  BG_PATTERN_DOT: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/bg-pattern-dot-16.svg",
  BG_PATTERN_ARROW: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/76e46daf-1e92-4ae7-a2aa-5014bf218bb7-asidehq-com/assets/images/bg-pattern-arrow-18.svg",
} as const;

export const INSTALL_COMMAND = `curl -fsSL ${URLS.INSTALL_SCRIPT} | bash`;

