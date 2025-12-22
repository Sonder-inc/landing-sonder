export async function register() {
  // Polyfill localStorage for SSR to prevent "localStorage is not a function" errors
  // This runs on the server before any other code
  if (typeof window === 'undefined') {
    const localStorageData = new Map<string, string>();
    const sessionStorageData = new Map<string, string>();
    
    (globalThis as any).localStorage = {
      getItem: (key: string) => localStorageData.get(key) ?? null,
      setItem: (key: string, value: string) => localStorageData.set(key, value),
      removeItem: (key: string) => localStorageData.delete(key),
      clear: () => localStorageData.clear(),
      get length() { return localStorageData.size; },
      key: (index: number) => Array.from(localStorageData.keys())[index] ?? null,
    };
    
    (globalThis as any).sessionStorage = {
      getItem: (key: string) => sessionStorageData.get(key) ?? null,
      setItem: (key: string, value: string) => sessionStorageData.set(key, value),
      removeItem: (key: string) => sessionStorageData.delete(key),
      clear: () => sessionStorageData.clear(),
      get length() { return sessionStorageData.size; },
      key: (index: number) => Array.from(sessionStorageData.keys())[index] ?? null,
    };
  }
}

