import { NextResponse } from "next/server";
import { URLS } from "@/lib/constants";

export async function GET() {
  try {
    const response = await fetch(URLS.INSTALL_SCRIPT_SOURCE, {
      headers: {
        "User-Agent": "Sonder-Proxy",
      },
      // Cache for 5 minutes to reduce GitHub requests
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return new NextResponse("Failed to fetch install script", {
        status: response.status,
      });
    }

    const script = await response.text();

    return new NextResponse(script, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": "inline; filename=install.sh",
        "Cache-Control": "public, max-age=300, s-maxage=300",
      },
    });
  } catch {
    return new NextResponse("Failed to fetch install script", { status: 500 });
  }
}
