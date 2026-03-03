import React from 'react';

export default function StatsBar() {
  return (
    <div className="sticky bottom-0 w-full border-t border-border-dark bg-[#111122]/90 backdrop-blur-lg py-3 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>系统运行正常</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 md:gap-8 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-slate-500">已分析产品</span>
              <span className="font-mono text-white font-bold">12,847+</span>
            </div>
            <div className="h-4 w-px bg-border-dark"></div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-slate-500">覆盖市场</span>
              <span className="font-mono text-white font-bold">23个</span>
            </div>
            <div className="h-4 w-px bg-border-dark"></div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-slate-500">平均节省时间</span>
              <span className="font-mono text-green-400 font-bold">80%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
