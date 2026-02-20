"use client";

import { cn } from "../lib/utils"
import { AnimatedList } from "./magicui/animated-list"


let notifications = [
  {
    name: "New Diagnostic Report",
    description: "MRI Scan Analysis completed",
    time: "10m ago",
    icon: "\uD83E\uDDE0",
    color: "#F97316",
  },
  {
    name: "User Registered",
    description: "New patient account created",
    time: "8m ago",
    icon: "\uD83E\uDDD1\u200D\u2695\uFE0F",
    color: "#EA580C",
  },
  {
    name: "Doctor Feedback Received",
    description: "Dr. Smith submitted a review",
    time: "5m ago",
    icon: "\uD83D\uDCDD",
    color: "#FB923C",
  },
  {
    name: "Abnormality Detected",
    description: "Lung X-ray flagged for review",
    time: "3m ago",
    icon: "\u26A0\uFE0F",
    color: "#DC2626",
  },
  {
    name: "AI Confidence Updated",
    description: "CT Scan confidence score changed",
    time: "1m ago",
    icon: "\uD83D\uDCCA",
    color: "#C2410C",
  },
];


notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-black dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-neutral-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-neutral-600 dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function HeroList({
  className,
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 "></div>
    </div>
  );
}
