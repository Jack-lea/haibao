import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnalysisTerminal from './components/AnalysisTerminal';
import ProductGrid from './components/ProductGrid';
import StatsBar from './components/StatsBar';

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display antialiased selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-12">
        <Hero />
        <AnalysisTerminal />
        <ProductGrid />
      </main>
      <StatsBar />
    </div>
  );
}
