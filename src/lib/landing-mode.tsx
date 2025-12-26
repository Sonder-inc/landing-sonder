"use client";

import * as React from "react";
import { analytics } from "./posthog";

export type LandingMode = "execute" | "educate";

type LandingModeContextValue = {
  mode: LandingMode;
  setMode: (mode: LandingMode) => void;
  toggleMode: () => void;
};

const LandingModeContext = React.createContext<LandingModeContextValue | null>(
  null
);

const STORAGE_KEY = "sonder:landingMode";

export function LandingModeProvider({
  children,
  initialMode = "execute",
  persist = true,
}: {
  children: React.ReactNode;
  initialMode?: LandingMode;
  persist?: boolean;
}) {
  const [mode, setModeState] = React.useState<LandingMode>(initialMode);

  React.useEffect(() => {
    if (!persist) return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "execute" || stored === "educate") {
        setModeState(stored);
      }
    } catch {
      // ignore storage errors
    }
  }, [persist]);

  const setMode = React.useCallback(
    (next: LandingMode) => {
      setModeState((prev) => {
        // Track mode switch if actually changing
        if (prev !== next) {
          analytics.modeSwitch(prev, next);
        }
        return next;
      });
      if (!persist) return;
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore storage errors
      }
    },
    [persist]
  );

  const toggleMode = React.useCallback(() => {
    setModeState((prev) => {
      const next = prev === "execute" ? "educate" : "execute";
      analytics.modeSwitch(prev, next);
      if (persist) {
        try {
          window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
          // ignore storage errors
        }
      }
      return next;
    });
  }, [persist]);

  const value = React.useMemo<LandingModeContextValue>(
    () => ({ mode, setMode, toggleMode }),
    [mode, setMode, toggleMode]
  );

  return (
    <LandingModeContext.Provider value={value}>
      {children}
    </LandingModeContext.Provider>
  );
}

export function useLandingMode() {
  const ctx = React.useContext(LandingModeContext);
  if (!ctx) {
    throw new Error("useLandingMode must be used within <LandingModeProvider />");
  }
  return ctx;
}


