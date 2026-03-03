import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center text-center gap-8 max-w-4xl relative">
      {/* Background Glow Effect */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary w-fit mx-auto mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          AI Engine v2.0 Live
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
          <span className="text-gradient">AI 跨境选品助手</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
          输入你的目标市场，AI 帮你找到蓝海机会
        </p>
      </div>

      {/* Search Area */}
      <div className="w-full max-w-2xl flex flex-col gap-4 relative z-10">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative flex items-center bg-surface-dark border border-border-dark rounded-xl p-2 shadow-2xl">
            <div className="pl-3 text-slate-400">
              <Search className="h-6 w-6" />
            </div>
            <input 
              className="w-full bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 text-base py-3 px-4 outline-none" 
              placeholder="例如：欧美宠物市场，预算 $5000，主做 Amazon FBA" 
              type="text"
            />
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-primary/30 flex items-center gap-2 whitespace-nowrap">
              开始 AI 分析
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          <button className="px-4 py-1.5 rounded-full border border-border-dark bg-surface-dark/50 text-sm text-slate-300 hover:border-primary/50 hover:text-white transition-colors">
            🐾 宠物用品
          </button>
          <button className="px-4 py-1.5 rounded-full border border-border-dark bg-surface-dark/50 text-sm text-slate-300 hover:border-primary/50 hover:text-white transition-colors">
            🏠 家居收纳
          </button>
          <button className="px-4 py-1.5 rounded-full border border-border-dark bg-surface-dark/50 text-sm text-slate-300 hover:border-primary/50 hover:text-white transition-colors">
            🏕️ 户外运动
          </button>
        </div>
      </div>
    </section>
  );
}
