import React from 'react';
import { Rocket, Search, Grid, List, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-[#111122]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <Rocket className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold tracking-tight">CrossBorderAI</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Dashboard</a>
          <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Market Analysis</a>
          <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Competitors</a>
          <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Settings</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex h-9 items-center justify-center rounded-lg border border-border-dark bg-transparent px-4 text-sm font-medium text-white hover:bg-white/5 transition-colors">
            Log In
          </button>
          <button className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-white shadow-glow hover:bg-primary-dark transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
