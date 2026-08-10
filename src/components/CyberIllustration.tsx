"use client";

import React, { useEffect, useState } from "react";
import { Shield, Lock, Server, Cpu } from "lucide-react";

interface Node {
  id: number;
  x: number;
  y: number;
  type: "db" | "shield" | "server" | "user";
  label: string;
  status: "secure" | "checking" | "blocked";
}

interface Connection {
  from: number;
  to: number;
  active: boolean;
}

export default function CyberIllustration() {
  const [nodes, setNodes] = useState<Node[]>([
    { id: 1, x: 250, y: 70, type: "shield", label: "Sentinel AI Core", status: "secure" },
    { id: 2, x: 80, y: 180, type: "user", label: "User Device", status: "secure" },
    { id: 3, x: 420, y: 180, type: "server", label: "Cloud Node", status: "secure" },
    { id: 4, x: 150, y: 320, type: "db", label: "Data Vault", status: "secure" },
    { id: 5, x: 350, y: 320, type: "server", label: "Threat Intel Gateway", status: "secure" },
  ]);

  const [connections] = useState<Connection[]>([
    { from: 1, to: 2, active: true },
    { from: 1, to: 3, active: true },
    { from: 2, to: 4, active: true },
    { from: 3, to: 5, active: true },
    { from: 4, to: 5, active: true },
  ]);

  const [pingPos, setPingPos] = useState({ x: 0, y: 0 });
  const [activeConnectionIndex, setActiveConnectionIndex] = useState(0);

  useEffect(() => {
    // Animate a scanning node status
    const nodeInterval = setInterval(() => {
      setNodes((prev) =>
        prev.map((n) => {
          if (n.id === 5) {
            const nextStatus = n.status === "secure" ? "checking" : n.status === "checking" ? "blocked" : "secure";
            return { ...n, status: nextStatus };
          }
          return n;
        })
      );
    }, 4000);

    // Animate data flow
    const connectionInterval = setInterval(() => {
      setActiveConnectionIndex((prev) => (prev + 1) % connections.length);
    }, 2500);

    return () => {
      clearInterval(nodeInterval);
      clearInterval(connectionInterval);
    };
  }, [connections.length]);

  useEffect(() => {
    const conn = connections[activeConnectionIndex];
    const fromNode = nodes.find((n) => n.id === conn.from);
    const toNode = nodes.find((n) => n.id === conn.to);
    if (fromNode && toNode) {
      setPingPos({ x: fromNode.x, y: fromNode.y });
    }
  }, [activeConnectionIndex, connections, nodes]);

  const renderIcon = (type: string, status: string) => {
    const color = status === "blocked" ? "text-red-500" : status === "checking" ? "text-amber-500" : "text-emerald-500";
    switch (type) {
      case "shield":
        return <Shield className={`w-5 h-5 ${color}`} />;
      case "user":
        return <Cpu className={`w-5 h-5 ${color}`} />;
      case "server":
        return <Server className={`w-5 h-5 ${color}`} />;
      default:
        return <Lock className={`w-5 h-5 ${color}`} />;
    }
  };

  return (
    <div className="relative w-full h-[400px] md:h-[450px] bg-slate-950/80 rounded-2xl border border-slate-800 shadow-2xl p-6 overflow-hidden flex flex-col justify-between">
      {/* Abstract Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:30px_30px] opacity-15 pointer-events-none" />

      {/* Header Info */}
      <div className="flex justify-between items-center border-b border-slate-800 pb-3 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-xs font-mono text-slate-400">Sentinel Network Visualizer</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="text-emerald-400">Secure Links: 4</span>
          <span className="text-slate-400">Threat Stream: ACTIVE</span>
        </div>
      </div>

      {/* SVG Canvas for lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
        {/* Draw connections */}
        {connections.map((conn, idx) => {
          const fromNode = nodes.find((n) => n.id === conn.from);
          const toNode = nodes.find((n) => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          const isHighlighted = idx === activeConnectionIndex;

          return (
            <g key={idx}>
              <line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={isHighlighted ? "#10B981" : "#334155"}
                strokeWidth={isHighlighted ? 2 : 1}
                className="transition-all duration-1000"
              />
              {isHighlighted && (
                <circle r="4" fill="#10B981">
                  <animateMotion
                    dur="2.5s"
                    repeatCount="indefinite"
                    path={`M ${fromNode.x} ${fromNode.y} L ${toNode.x} ${toNode.y}`}
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Draw Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {nodes.map((node) => {
          // Adjust coordinate layout relative to responsive container coordinates
          const leftPercent = `${(node.x / 500) * 100}%`;
          const topPercent = `${(node.y / 400) * 100}%`;

          return (
            <div
              key={node.id}
              style={{ left: leftPercent, top: topPercent }}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto group cursor-pointer"
            >
              <div className={`p-3 rounded-full bg-slate-900 border transition-all duration-500 shadow-lg ${
                node.status === "blocked"
                  ? "border-red-500/80 shadow-red-950/50"
                  : node.status === "checking"
                  ? "border-amber-500/80 shadow-amber-950/50"
                  : "border-slate-700/80 group-hover:border-emerald-500"
              }`}>
                {renderIcon(node.type, node.status)}
              </div>
              <div className="mt-2 px-2 py-0.5 rounded bg-slate-950/95 border border-slate-800 text-[10px] font-mono text-slate-300 whitespace-nowrap shadow-md">
                {node.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Real-time event log */}
      <div className="z-10 bg-slate-950/90 border border-slate-800 rounded-lg p-3 font-mono text-[10px] text-slate-400 space-y-1 font-semibold">
        <div className="text-emerald-400">✓ AI core online: model version v4.2.1-prod</div>
        <div>💡 Scan complete: 18,409 background files inspected</div>
        {nodes.find((n) => n.id === 5)?.status === "blocked" ? (
          <div className="text-red-400 animate-pulse">✖ Threat Blocked: Suspicious payload at IP 192.168.4.120</div>
        ) : nodes.find((n) => n.id === 5)?.status === "checking" ? (
          <div className="text-amber-400">⏱ Monitoring gateway interface package traffic...</div>
        ) : (
          <div className="text-emerald-400">✓ Security status: Optimum performance, firewall operational</div>
        )}
      </div>
    </div>
  );
}
