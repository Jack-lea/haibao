import React from 'react';
import { Sparkles, Grid, List } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const products = [
    {
      icon: '🐱',
      title: '智能猫砂盆',
      category: '宠物电子类',
      score: 92,
      scoreColor: 'green' as const,
      radarLabel: '潜力高',
      searchVolume: '120k+',
      price: '$89.9',
      margin: '35%',
      insight: '市场仍处于成长期，高端细分领域竞争较小，建议捆绑耗材销售。'
    },
    {
      icon: '🧘‍♀️',
      title: '环保瑜伽垫',
      category: '运动健身类',
      score: 88,
      scoreColor: 'blue' as const,
      radarLabel: '稳健',
      searchVolume: '85k+',
      price: '$45.0',
      margin: '42%',
      insight: '虽然是红海品类，但"可降解材料"关键词趋势上升显著，溢价空间大。'
    },
    {
      icon: '🏮',
      title: '太阳能庭院灯',
      category: '户外园艺类',
      score: 85,
      scoreColor: 'yellow' as const,
      radarLabel: '爆发期',
      searchVolume: '210k+',
      price: '$29.9',
      margin: '28%',
      insight: '季节性强，Q3备货关键期。复古造型在欧洲市场点击率高出平均值40%。'
    }
  ];

  return (
    <>
      {/* Section Title */}
      <div className="w-full flex items-center justify-between pt-8">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          推荐蓝海选品机会
        </h2>
        <div className="flex gap-2">
          <button className="p-2 rounded-lg bg-surface-dark border border-border-dark text-slate-400 hover:text-white">
            <Grid className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg bg-transparent border border-transparent text-slate-500 hover:text-white">
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Product Cards Grid */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            icon={product.icon}
            title={product.title}
            category={product.category}
            score={product.score}
            scoreColor={product.scoreColor}
            radarLabel={product.radarLabel}
            searchVolume={product.searchVolume}
            price={product.price}
            margin={product.margin}
            insight={product.insight}
          />
        ))}
      </section>
    </>
  );
}
