import { ArrowRight, ExternalLink, Terminal, Quote, Presentation } from 'lucide-react';

export function SelectedPublications() {
  return (
    <section className="mb-32">
      <div className="flex items-baseline justify-between mb-16">
        <h2 className="font-headline text-3xl">Selected Publications</h2>
        <a className="text-xs font-bold uppercase tracking-widest text-accent-blue hover:opacity-70 flex items-center transition-all group" href="#">
          Full bibliography
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2} />
        </a>
      </div>
      <div className="space-y-20">
        {/* Publication 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12">
          <div className="md:col-span-2">
            <span className="text-4xl font-headline italic text-outline-variant">2024</span>
          </div>
          <div className="md:col-span-10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
              <h3 className="text-xl font-bold leading-tight max-w-2xl group-hover:text-accent-emerald transition-colors">
                Scalable Robust Optimization for Adaptive Urban Structures under Stochastic Loads
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-surface bg-accent-emerald px-2 py-1 rounded-md self-start sm:self-auto shrink-0">
                Journal
              </span>
            </div>
            <p className="text-on-surface-variant mb-2">
              <span className="font-semibold text-primary">Jesus Diaz Sanchez</span>, Elena Rossi, Marcus Thorne, and Sarah Jenkins.
            </p>
            <p className="italic text-secondary text-sm mb-6">Journal of Computational Mechanics &amp; Engineering, Vol. 42</p>
            <div className="flex flex-wrap gap-6 text-[11px] font-bold uppercase tracking-widest text-accent-blue">
              <a className="hover:underline flex items-center gap-1.5" href="#">
                PDF <ExternalLink size={14} strokeWidth={2.5} />
              </a>
              <a className="hover:underline flex items-center gap-1.5" href="#">
                Code <Terminal size={14} strokeWidth={2.5} />
              </a>
              <a className="hover:underline flex items-center gap-1.5" href="#">
                BibTeX <Quote size={14} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Publication 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 pt-12 border-t border-outline-variant">
          <div className="md:col-span-2">
            <span className="text-4xl font-headline italic text-outline-variant">2023</span>
          </div>
          <div className="md:col-span-10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
              <h3 className="text-xl font-bold leading-tight max-w-2xl">
                Generative Adversarial Design: Bridging Topological Optimization and Aesthetics
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-surface bg-accent-pink px-2 py-1 rounded-md self-start sm:self-auto shrink-0">
                Conference
              </span>
            </div>
            <p className="text-on-surface-variant mb-2">
              Chen Wei, <span className="font-semibold text-primary">Jesus Diaz Sanchez</span>, and Arthur Miller.
            </p>
            <p className="italic text-secondary text-sm mb-6">International Conference on Computer-Aided Design (ICCAD)</p>
            <div className="flex flex-wrap gap-6 text-[11px] font-bold uppercase tracking-widest text-accent-blue">
              <a className="hover:underline flex items-center gap-1.5" href="#">
                PDF <ExternalLink size={14} strokeWidth={2.5} />
              </a>
              <a className="hover:underline flex items-center gap-1.5" href="#">
                Slides <Presentation size={14} strokeWidth={2.5} />
              </a>
              <a className="hover:underline flex items-center gap-1.5" href="#">
                BibTeX <Quote size={14} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
