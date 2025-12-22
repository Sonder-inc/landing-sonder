export const URLS = {
  BOOK_DEMO: "https://cal.com/trysonder",
  APP: "https://app.trysonder.ai",
  INSTALL_SCRIPT: "https://trysonder.ai/install.sh",
  INSTALL_SCRIPT_SOURCE: "https://raw.githubusercontent.com/Sonder-inc/sonder/main/install.sh",
  GITHUB_ORG: "https://github.com/Sonder-inc",
  GITHUB_REPO: "https://github.com/Sonder-inc/sonder",
  DISCORD: "https://discord.gg/3PpkxCGWeV",
} as const;

export const INSTALL_COMMAND = `curl -fsSL ${URLS.INSTALL_SCRIPT} | bash`;

