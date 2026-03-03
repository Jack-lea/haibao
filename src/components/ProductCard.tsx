import React from 'react';

interface ProductCardProps {
  key?: React.Key;
  icon: string;
  title: string;
  category: string;
  score: number;
  scoreColor: 'green' | 'blue' | 'yellow';
  radarLabel: string;
  searchVolume: string;
  price: string;
  margin: string;
  insight: string;
}

export default function ProductCard({
  icon,
  title,
  category,
  score,
  scoreColor,
  radarLabel,
  searchVolume,
  price,
  margin,
  insight
}: ProductCardProps) {
  const colorMap = {
    green: {
      score: 'bg-green-500/10 text-green-400 border-green-500/20',
      radarSvg: 'fill-primary/20 stroke-primary',
      radarText: 'text-primary',
      marginText: 'text-green-400',
      polygon: '50,15 85,42 70,85 30,85 15,42'
    },
    blue: {
      score: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      radarSvg: 'fill-blue-500/20 stroke-blue-500',
      radarText: 'text-blue-400',
      marginText: 'text-blue-400',
      polygon: '50,20 80,45 65,80 35,80 20,45'
    },
    yellow: {
      score: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      radarSvg: 'fill-yellow-500/20 stroke-yellow-500',
      radarText: 'text-yellow-400',
      marginText: 'text-yellow-400',
      polygon: '50,12 88,40 72,88 28,88 12,40'
    }
  };

  const colors = colorMap[scoreColor];

  return (
    <div className="group relative bg-surface-dark border border-border-dark rounded-2xl p-5 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-slate-800 overflow-hidden flex items-center justify-center text-2xl">
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">{title}</h3>
            <p className="text-xs text-slate-400">{category}</p>
          </div>
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded border ${colors.score}`}>
          {score}分
        </span>
      </div>

      {/* Radar Chart Visualization (CSS Only Abstract) */}
      <div className="relative h-32 w-full my-4 flex items-center justify-center">
        <svg className="w-24 h-24 text-slate-700/50 fill-none stroke-current stroke-1" viewBox="0 0 100 100">
          <polygon points="50,10 90,40 75,90 25,90 10,40"></polygon>
          <polygon className="stroke-slate-600/50" points="50,25 70,40 62,65 38,65 30,40"></polygon>
        </svg>
        {/* Data Shape */}
        <svg className={`w-24 h-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[1.5] ${colors.radarSvg}`} viewBox="0 0 100 100">
          <polygon points={colors.polygon}></polygon>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-[10px] font-bold ${colors.radarText}`}>{radarLabel}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4 border-t border-b border-border-dark py-3">
        <div className="text-center">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider">月搜索</div>
          <div className="text-sm font-semibold text-white">{searchVolume}</div>
        </div>
        <div className="text-center border-l border-border-dark">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider">参考价</div>
          <div className="text-sm font-semibold text-white">{price}</div>
        </div>
        <div className="text-center border-l border-border-dark">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider">毛利率</div>
          <div className={`text-sm font-semibold ${colors.marginText}`}>{margin}</div>
        </div>
      </div>

      <div className="bg-primary/5 rounded-lg p-3 mb-4 border border-primary/10 flex-1">
        <p className="text-xs text-slate-300 italic leading-relaxed">
          <span className="text-primary not-italic font-bold mr-1">AI 洞察:</span>
          {insight}
        </p>
      </div>

      <button className="w-full py-2 rounded-lg bg-slate-800 text-sm font-medium text-white hover:bg-slate-700 transition-colors border border-border-dark group-hover:border-slate-600 mt-auto">
        查看详情
      </button>
    </div>
  );
}
