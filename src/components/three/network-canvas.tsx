"use client";

import dynamic from "next/dynamic";

const NodeNetwork = dynamic(() => import("./node-network"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,75,0.12),transparent_65%)]" />
  ),
});

export default function NetworkCanvas() {
  return <NodeNetwork />;
}
