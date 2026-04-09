import { MapPin, GraduationCap } from 'lucide-react';

export function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start mb-32">
      <div className="md:col-span-7">
        <h1 className="font-headline text-5xl md:text-6xl mb-8 leading-tight">
          Jesus Diaz Sanchez
        </h1>
        <p className="font-headline italic text-2xl text-on-surface-variant mb-10 leading-relaxed max-w-2xl">
          Ph.D. Researcher at <span className="text-accent-blue">MIT</span>. Focusing on the intersection of stochastic optimization and large-scale architectural systems.
        </p>
        <div className="prose prose-neutral max-w-none text-on-surface-variant text-lg leading-relaxed space-y-6">
          <p>
            My research investigates how distributed intelligence can transform the efficiency of urban infrastructure. Currently a member of the Computational Design Lab, I work on developing robust algorithms that adapt to dynamic environmental constraints.
          </p>
          <p>
            Previously, I completed my Master's at <span className="text-accent-emerald">ETH Zürich</span>, where I explored generative modeling for structural optimization. I am passionate about open science and the democratization of technical tools for researchers.
          </p>
        </div>
        <div className="mt-12 flex items-center gap-8">
          <a className="text-sm font-semibold border-b-2 border-primary pb-1 hover:border-accent-blue hover:text-accent-blue transition-all" href="#">
            Download CV
          </a>
          <a className="text-sm font-semibold border-b-2 border-primary pb-1 hover:border-accent-blue hover:text-accent-blue transition-all" href="#">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="md:col-span-5 flex flex-col items-end">
        <div className="w-full max-w-sm">
          <div className="relative group">
            <div className="absolute inset-0 bg-accent-blue opacity-0 group-hover:opacity-5 transition-opacity"></div>
            <img 
              alt="Jesus Diaz Sanchez" 
              className="w-full aspect-[4/5] object-cover grayscale contrast-110 shadow-sm" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ApgZDF7b8Mm192u4TAZ0G6I4FcSry1gOQRaKebn_1DwojSg5Vx2-1SRq3xXhi_a5OfUyA7aw8u0SvAf_KkN-p05TjcUpqgoo-chxRK8PZIKtLr_7Eq0Q8O2v4P2-6DhBWfonVPLiP2ulId2G5Ed4cT5arzaNK_wpXVpO29d2CqZ6Snaf-p_pFOUoIpsxMtkEPNFHQx9PWQD5y9LsyEHgRXPYD47_1OiTazAXq6udvfedJ_QjpLVPupIzx1qOPtbPnUTnS9N361A"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-6 space-y-2 text-[13px] text-secondary font-medium tracking-tight">
            <div className="flex items-center">
              <MapPin size={16} className="mr-3 text-accent-blue/60" strokeWidth={2} />
              77 Massachusetts Ave, Cambridge, MA
            </div>
            <div className="flex items-center">
              <GraduationCap size={16} className="mr-3 text-accent-blue/60" strokeWidth={2} />
              Department of Architecture, MIT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
