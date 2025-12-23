"use client";

import { useEffect, useRef } from "react";
import { liquidMetalFragmentShader, ShaderMount } from "@paper-design/shaders";
import { cn } from "@/lib/utils";

interface LiquidMetalProps {
  className?: string;
  children?: React.ReactNode;
}

export function LiquidMetal({ className, children }: LiquidMetalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shaderRef = useRef<ShaderMount | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the shader mount
    shaderRef.current = new ShaderMount(
      containerRef.current,
      liquidMetalFragmentShader,
      {
        u_repetition: 1.5,
        u_softness: 0.5,
        u_shiftRed: 0.3,
        u_shiftBlue: 0.3,
        u_distortion: 0,
        u_contour: 0,
        u_angle: 100,
        u_scale: 1.5,
        u_shape: 1,
        u_offsetX: 0.1,
        u_offsetY: -0.1,
      },
      undefined,
      0.6
    );

    return () => {
      // Cleanup shader on unmount
      if (shaderRef.current) {
        shaderRef.current.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={cn("relative isolate overflow-hidden rounded-full", className)}
      style={{ 
        WebkitMaskImage: "radial-gradient(circle, white, black)",
        maskImage: "radial-gradient(circle, white, black)" 
      }}
    >
      {children}
    </div>
  );
}

