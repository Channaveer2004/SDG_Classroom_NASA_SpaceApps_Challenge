"use client";
import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
 
  backgroundFill,
  blur = 7,
  speed = "fast",
  waveOpacity = 1,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: React.ReactNode;
}) => {
  const noise = useMemo(() => createNoise3D(), []);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const ntRef = useRef(0);
  const waveColors = useMemo(
    () =>
      colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee",
      ],
    [colors]
  );
  const drawWave = useCallback(
    (n: number) => {
    const ctx = ctxRef.current;
    if (!ctx) {
      return;
    }

    const { w, h } = sizeRef.current;
    const speedDelta = speed === "slow" ? 0.001 : speed === "fast" ? 0.002 : 0.001;
    ntRef.current += speedDelta;

    for (let waveIndex = 0; waveIndex < n; waveIndex++) {
      ctx.beginPath();
      ctx.lineWidth = 40;
      ctx.strokeStyle = waveColors[waveIndex % waveColors.length];
      for (let posX = 0; posX < w; posX += 5) {
        const y = noise(posX / 800, 0.3 * waveIndex, ntRef.current) * 100;
        ctx.lineTo(posX, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
    },
    [noise, waveColors, speed]
  );

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) {
      return;
    }

    const context = canvasElement.getContext("2d");
    if (!context) {
      return;
    }

    ctxRef.current = context;

    const handleResize = () => {
      const ctx = ctxRef.current;
      if (!ctx) {
        return;
      }

      sizeRef.current = {
        w: (ctx.canvas.width = window.innerWidth),
        h: (ctx.canvas.height = window.innerHeight),
      };
      ctx.filter = `blur(${blur}px)`;
    };

    ntRef.current = 0;
    handleResize();

    const renderFrame = () => {
      const ctx = ctxRef.current;
      if (!ctx) {
        return;
      }

      const { w, h } = sizeRef.current;

      ctx.fillStyle = backgroundFill || "black";
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animationRef.current = requestAnimationFrame(renderFrame);
    };

    renderFrame();
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [backgroundFill, blur, waveOpacity, speed, waveColors, drawWave]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        containerClassName ?? "h-screen"
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
