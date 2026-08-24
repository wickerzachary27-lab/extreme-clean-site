"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!isDragging) return;
      updatePosition(e.clientX);
    }
    function handleTouchMove(e: TouchEvent) {
      if (!isDragging) return;
      updatePosition(e.touches[0].clientX);
    }
    function handleEnd() {
      setIsDragging(false);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-[16/9] w-full max-w-5xl cursor-ew-resize select-none overflow-hidden"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* After image (full width, behind) */}
      <div className="absolute inset-0">
        <Image
          src="/images/slider-after-detailing.jpg"
          alt="After detailing — gleaming car"
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <span className="absolute top-4 right-4 font-display text-lg tracking-wider text-white drop-shadow-lg sm:text-2xl">
          AFTER
        </span>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image
          src="/images/slider-before-detailing.jpg"
          alt="Before detailing — dirty car"
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <span className="absolute top-4 left-4 font-display text-lg tracking-wider text-white drop-shadow-lg sm:text-2xl">
          BEFORE
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-1 bg-gold"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-gold">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-dark"
          >
            <path
              d="M6 4L2 10L6 16M14 4L18 10L14 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
