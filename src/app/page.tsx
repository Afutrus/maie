'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useWriteContract } from 'wagmi';
import { Info, ExternalLink } from 'lucide-react';

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#e5e5e0] font-serif selection:bg-[#d4af37]/30">
      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-xl tracking-[0.2em] font-light italic">enshrined</div>
        <div className="flex items-center gap-8 text-xs uppercase tracking-widest opacity-60 font-sans">
          <a href="#" className="hover:opacity-100 transition-opacity">Swap</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Liquidity</a>
          <a href="/skill.md" className="hover:opacity-100 transition-opacity border-b border-zinc-800">Agent Skill</a>
          <ConnectButton chainStatus="none" showBalance={false} />
        </div>
      </nav>

      <main className="max-w-xl mx-auto pt-20 pb-20 px-4 text-center">
        <h1 className="text-6xl font-light mb-4 italic tracking-tight">enshrined</h1>
        <p className="font-sans text-sm opacity-40 mb-12 tracking-[0.1em]">FAIR MINT. FIXED SUPPLY. ON-CHAIN ON TEMPO.</p>

        {/* Card Minting */}
        <div className="bg-[#111111] border border-zinc-800/50 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="bg-zinc-900/50 border-2 border-[#d4af37] p-4 rounded-xl text-left">
              <p className="text-2xl font-bold">$1</p>
              <p className="text-[10px] opacity-40 font-sans uppercase">720 ENSH</p>
            </button>
            <button className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl text-left opacity-30 cursor-not-allowed">
              <p className="text-2xl font-bold">$5</p>
              <p className="text-[10px] opacity-40 font-sans uppercase">3,600 ENSH</p>
            </button>
          </div>

          <div className="bg-black/40 border border-zinc-900 rounded-xl py-8 mb-6 font-sans">
            <div className="flex justify-center items-center gap-4">
              <span className="text-2xl font-medium">1 pathUSD</span>
              <span className="text-zinc-700 text-3xl">→</span>
              <span className="text-2xl font-medium">720 ENSH</span>
            </div>
            <p className="text-[9px] mt-2 opacity-30 tracking-widest uppercase">Direct On-chain Mint</p>
          </div>

          <button 
            className="w-full bg-[#e5e5e0] hover:bg-white text-black font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-20 uppercase tracking-widest text-sm mb-6"
            disabled={!isConnected}
          >
            {isConnected ? 'Execute Mint' : 'Connect Wallet to Mint'}
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-2 font-sans">
            {[
              { label: 'Price', val: '$1' },
              { label: 'Per Mint', val: '720' },
              { label: 'Total Mints', val: '8,871' },
              { label: 'Distributed', val: '37.3M' }
            ].map((stat, i) => (
              <div key={i} className="bg-zinc-950/50 border border-zinc-900 p-2 rounded-lg">
                <p className="text-[8px] opacity-40 uppercase mb-1">{stat.label}</p>
                <p className="text-xs font-medium">{stat.val}</p>
              </div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="mt-8 text-left">
             <div className="flex justify-between text-[10px] font-sans opacity-40 mb-2 uppercase tracking-tighter">
                <span>Remaining: 22,665,360 ENSH</span>
                <span>62.2% Minted</span>
             </div>
             <div className="h-[3px] w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full bg-[#d4af37] w-[62%]"></div>
             </div>
          </div>
        </div>

        {/* Token Info Footer */}
        <div className="mt-20 grid grid-cols-2 gap-4 text-left font-sans">
          <div className="border-t border-zinc-900 pt-4">
            <p className="text-[9px] opacity-30 uppercase">Symbol</p>
            <p className="text-sm">ENSH</p>
          </div>
          <div className="border-t border-zinc-900 pt-4">
            <p className="text-[9px] opacity-30 uppercase">Standard</p>
            <p className="text-sm">TIP-20</p>
          </div>
        </div>
      </main>
    </div>
  );
}
