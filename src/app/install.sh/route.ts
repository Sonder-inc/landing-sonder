import { NextResponse } from "next/server";

export async function GET() {
  const installScript = `#!/bin/bash

# Sonder CLI Installer
# https://trysonder.ai

set -e

# Colors for output
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
CYAN='\\033[0;36m'
NC='\\033[0m' # No Color

echo ""
echo -e "\${CYAN}╔═══════════════════════════════════════════════════════════╗\${NC}"
echo -e "\${CYAN}║                                                           ║\${NC}"
echo -e "\${CYAN}║              \${NC}🔮 \${GREEN}Sonder CLI Installer\${NC} 🔮\${CYAN}                  ║\${NC}"
echo -e "\${CYAN}║                                                           ║\${NC}"
echo -e "\${CYAN}╚═══════════════════════════════════════════════════════════╝\${NC}"
echo ""

# Detect OS
OS="unknown"
ARCH="unknown"

case "$(uname -s)" in
    Linux*)     OS="linux";;
    Darwin*)    OS="darwin";;
    CYGWIN*|MINGW*|MSYS*) OS="windows";;
    *)          OS="unknown";;
esac

case "$(uname -m)" in
    x86_64|amd64)   ARCH="amd64";;
    arm64|aarch64)  ARCH="arm64";;
    *)              ARCH="unknown";;
esac

echo -e "Detected: \${GREEN}\${OS}\${NC} (\${ARCH})"
echo ""

# Check for required tools
echo -e "\${YELLOW}Checking dependencies...\${NC}"

check_command() {
    if command -v "$1" &> /dev/null; then
        echo -e "  ✓ $1 found"
        return 0
    else
        echo -e "  \${RED}✗ $1 not found\${NC}"
        return 1
    fi
}

MISSING_DEPS=0
check_command "curl" || MISSING_DEPS=1
check_command "git" || MISSING_DEPS=1

echo ""

if [ "\$MISSING_DEPS" -eq 1 ]; then
    echo -e "\${YELLOW}Some dependencies are missing. Please install them first.\${NC}"
    echo ""
fi

# Installation directory
INSTALL_DIR="\$HOME/.sonder"
BIN_DIR="\$HOME/.local/bin"

echo -e "\${YELLOW}Installing Sonder...\${NC}"
echo ""

# Create directories
mkdir -p "\$INSTALL_DIR"
mkdir -p "\$BIN_DIR"

# Create the sonder CLI script
cat > "\$BIN_DIR/sonder" << 'SONDER_CLI'
#!/bin/bash

VERSION="0.1.0"
CONFIG_DIR="$HOME/.sonder"

show_help() {
    echo ""
    echo "🔮 Sonder - AI-powered hacking assistant"
    echo ""
    echo "Usage: sonder [command] [options]"
    echo ""
    echo "Commands:"
    echo "  scan <target>     Run a security scan on a target"
    echo "  analyze <file>    Analyze a file for vulnerabilities"
    echo "  recon <domain>    Perform reconnaissance on a domain"
    echo "  chat              Start an interactive AI chat session"
    echo "  update            Update Sonder to the latest version"
    echo "  version           Show version information"
    echo "  help              Show this help message"
    echo ""
    echo "Examples:"
    echo "  sonder scan https://example.com"
    echo "  sonder recon example.com"
    echo "  sonder chat"
    echo ""
    echo "For more information, visit: https://trysonder.ai/docs"
    echo ""
}

case "$1" in
    version|-v|--version)
        echo "Sonder CLI v$VERSION"
        ;;
    help|-h|--help|"")
        show_help
        ;;
    scan)
        echo "🔍 Scanning target: $2"
        echo "   This feature requires Sonder Pro. Visit https://trysonder.ai to upgrade."
        ;;
    analyze)
        echo "📄 Analyzing: $2"
        echo "   This feature requires Sonder Pro. Visit https://trysonder.ai to upgrade."
        ;;
    recon)
        echo "🌐 Performing recon on: $2"
        echo "   This feature requires Sonder Pro. Visit https://trysonder.ai to upgrade."
        ;;
    chat)
        echo "💬 Starting Sonder AI chat..."
        echo "   Visit https://trysonder.ai to access the full chat experience."
        ;;
    update)
        echo "🔄 Checking for updates..."
        curl -fsSL https://trysonder.ai/install.sh | bash
        ;;
    *)
        echo "Unknown command: $1"
        echo "Run 'sonder help' for usage information."
        exit 1
        ;;
esac
SONDER_CLI

# Make it executable
chmod +x "\$BIN_DIR/sonder"

echo -e "\${GREEN}✓ Sonder CLI installed successfully!\${NC}"
echo ""

# Check if BIN_DIR is in PATH
if [[ ":\$PATH:" != *":\$BIN_DIR:"* ]]; then
    echo -e "\${YELLOW}Add the following to your shell profile (.bashrc, .zshrc, etc.):\${NC}"
    echo ""
    echo -e "  \${CYAN}export PATH=\"\$BIN_DIR:\\\$PATH\"\${NC}"
    echo ""
    echo "Then restart your terminal or run:"
    echo ""
    echo -e "  \${CYAN}source ~/.bashrc\${NC}  (or ~/.zshrc)"
    echo ""
fi

echo -e "\${GREEN}╔═══════════════════════════════════════════════════════════╗\${NC}"
echo -e "\${GREEN}║                                                           ║\${NC}"
echo -e "\${GREEN}║              ✅ Installation Complete!                    ║\${NC}"
echo -e "\${GREEN}║                                                           ║\${NC}"
echo -e "\${GREEN}║     Run 'sonder help' to get started                      ║\${NC}"
echo -e "\${GREEN}║                                                           ║\${NC}"
echo -e "\${GREEN}╚═══════════════════════════════════════════════════════════╝\${NC}"
echo ""
echo -e "Visit \${CYAN}https://trysonder.ai\${NC} for documentation and support."
echo ""
`;

  return new NextResponse(installScript, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": "inline; filename=install.sh",
      "Cache-Control": "no-cache",
    },
  });
}
