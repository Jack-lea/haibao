import React from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function AnalysisTerminal() {
  return (
    <section className="w-full max-w-3xl glass-panel rounded-xl overflow-hidden shadow-2xl animate-fade-in-up">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#15162e] border-b border-border-dark">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-xs text-slate-500 font-mono ml-2">ai_analysis_engine.exe — running</div>
      </div>
      
      <div className="p-6 font-mono text-sm space-y-4">
        <div className="flex items-start gap-3 text-green-400/90">
          <CheckCircle2 className="h-4 w-4 mt-0.5" />
          <div className="flex-1">
            <span className="text-slate-400">[10:42:15]</span> 正在分析市场趋势...
            <div className="h-1 w-24 bg-green-900/50 rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-green-500 w-full"></div>
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 text-green-400/90">
          <CheckCircle2 className="h-4 w-4 mt-0.5" />
          <div className="flex-1">
            <span className="text-slate-400">[10:42:18]</span> 扫描竞争格局...
            <div className="h-1 w-32 bg-green-900/50 rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-green-500 w-full"></div>
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 text-blue-400">
          <Loader2 className="h-4 w-4 mt-0.5 animate-spin" />
          <div className="flex-1">
            <span className="text-slate-400">[10:42:21]</span> 计算利润空间...
            <div className="h-1 w-40 bg-blue-900/30 rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-blue-500 w-2/3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
