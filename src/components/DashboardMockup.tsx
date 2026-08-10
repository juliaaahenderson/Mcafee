"use client";

import React, { useState, useEffect } from "react";
import { Shield, CheckCircle, AlertTriangle, Play, RefreshCw, Cpu, Activity, Database } from "lucide-react";

type DeviceType = "desktop" | "tablet" | "mobile";

export default function DashboardMockup() {
  const [device, setDevice] = useState<DeviceType>("desktop");
  const [secScore, setSecScore] = useState(98);
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  const startScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setProgress(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isScanning) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsScanning(false);
            setSecScore(100);
            clearInterval(timer);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
    }
    return () => clearInterval(timer);
  }, [isScanning]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Device Toggle Buttons */}
      <div className="flex gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200 mb-8 max-w-xs shadow-inner">
        {(["desktop", "tablet", "mobile"] as DeviceType[]).map((d) => (
          <button
            key={d}
            onClick={() => setDevice(d)}
            className={`px-4 py-1.5 rounded-md text-xs font-semibold capitalize tracking-wide transition-all duration-300 ${
              device === d
                ? "bg-brand-primary text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Responsive Viewport Wrapper */}
      <div className="w-full flex justify-center items-center px-4">
        <div
          className={`bg-slate-900 rounded-3xl border-8 border-slate-800 shadow-2xl overflow-hidden transition-all duration-500 relative ${
            device === "desktop"
              ? "w-full max-w-4xl h-[480px]"
              : device === "tablet"
              ? "w-full max-w-xl h-[450px]"
              : "w-full max-w-xs h-[500px]"
          }`}
        >
          {/* Internal Dashboard UI */}
          <div className="w-full h-full flex flex-col bg-slate-950 text-slate-100 font-sans">
            {/* Window Top Bar (Only for desktop) */}
            {device === "desktop" && (
              <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-500">sentinel-secure-vault://dashboard</div>
                <div className="w-12" />
              </div>
            )}

            {/* Dashboard Sidebar & Body container */}
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar (Desktop & Tablet only) */}
              {device !== "mobile" && (
                <div className="w-48 bg-slate-900/40 border-r border-slate-800/80 p-4 space-y-4 text-xs font-medium">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Shield className="w-4 h-4" />
                    <span>System Secure</span>
                  </div>
                  <div className="space-y-2.5 pt-2 text-slate-400">
                    <div className="flex items-center gap-2 hover:text-white cursor-pointer px-1 py-1 rounded transition">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Shield Engine</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white cursor-pointer px-1 py-1 rounded transition">
                      <Activity className="w-3.5 h-3.5" />
                      <span>Real-time Log</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white cursor-pointer px-1 py-1 rounded transition">
                      <Database className="w-3.5 h-3.5" />
                      <span>Data Vault</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Main Content Area */}
              <div className="flex-1 p-5 overflow-y-auto flex flex-col justify-between">
                {/* Top Status Panel */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="text-sm font-semibold tracking-wide text-white">System Security Overview</h4>
                    <p className="text-[11px] text-slate-400">Threat signatures updated 3 minutes ago.</p>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[10px] font-mono text-emerald-400">ONLINE</span>
                  </div>
                </div>

                {/* Main Action Block */}
                <div className="my-auto py-4 flex flex-col items-center">
                  <div className="relative flex items-center justify-center mb-4">
                    {/* Pulsing ring */}
                    <div className={`absolute inset-0 rounded-full border-2 border-emerald-500/20 animate-ping duration-1000 ${isScanning ? "opacity-100" : "opacity-0"}`} />
                    <div className={`w-28 h-28 rounded-full border-4 flex flex-col items-center justify-center bg-slate-900/50 backdrop-blur transition-all duration-500 ${
                      isScanning ? "border-brand-secondary" : "border-emerald-500"
                    }`}>
                      <Shield className={`w-10 h-10 ${isScanning ? "text-brand-secondary animate-pulse" : "text-emerald-400"}`} />
                      <span className="text-xl font-bold mt-1">{isScanning ? `${progress}%` : `${secScore}%`}</span>
                    </div>
                  </div>

                  <h5 className="text-xs text-center font-medium max-w-xs text-slate-300">
                    {isScanning ? "Inspecting storage, active memory & cloud databases..." : "Your device is fully protected."}
                  </h5>

                  <button
                    onClick={startScan}
                    disabled={isScanning}
                    className="mt-4 px-5 py-2 bg-brand-secondary text-white text-xs font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 transition shadow-lg shadow-blue-900/20 flex items-center gap-1.5"
                  >
                    {isScanning ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        Scanning System...
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Run Smart Scan
                      </>
                    )}
                  </button>
                </div>

                {/* Footer Metrics Row */}
                <div className="grid grid-cols-3 gap-3 border-t border-slate-800/80 pt-4">
                  <div className="bg-slate-900/40 p-2 rounded-lg border border-slate-800/60">
                    <span className="text-[10px] text-slate-400 block mb-0.5">CPU Overhead</span>
                    <span className="text-xs font-bold text-slate-200">1.2%</span>
                  </div>
                  <div className="bg-slate-900/40 p-2 rounded-lg border border-slate-800/60">
                    <span className="text-[10px] text-slate-400 block mb-0.5">Database</span>
                    <span className="text-xs font-bold text-emerald-400">Verified</span>
                  </div>
                  <div className="bg-slate-900/40 p-2 rounded-lg border border-slate-800/60">
                    <span className="text-[10px] text-slate-400 block mb-0.5">Network Stream</span>
                    <span className="text-xs font-bold text-slate-200">Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
