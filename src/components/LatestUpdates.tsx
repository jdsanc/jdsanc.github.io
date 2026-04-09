export function LatestUpdates() {
  const updates = [
    {
      date: 'Oct 2024',
      title: 'Paper accepted at NeurIPS 2024',
      description: "Our latest work on 'Recursive Gradient Descent for Large-Scale Urban Grids' was accepted for a spotlight presentation."
    },
    {
      date: 'Aug 2024',
      title: 'Invited Talk at Harvard GSD',
      description: 'Discussing the role of AI in sustainable structural design practices.'
    },
    {
      date: 'Jun 2024',
      title: 'Ph.D. Candidacy Achieved',
      description: 'Successfully defended the thesis proposal and advanced to candidacy.'
    }
  ];

  return (
    <section className="mb-32 bg-accent-blue/[0.02] -mx-6 px-6 py-16 rounded-xl">
      <h2 className="font-headline text-3xl mb-12 px-2 border-l-4 border-accent-blue">Latest Updates</h2>
      <div className="space-y-12">
        {updates.map((update, index) => (
          <div key={index} className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 group ${index !== 0 ? 'border-t border-outline-variant pt-12' : ''}`}>
            <div className="md:col-span-2">
              <span className="text-xs uppercase tracking-widest text-accent-blue font-bold">{update.date}</span>
            </div>
            <div className="md:col-span-10">
              <h3 className="font-bold text-lg mb-1 group-hover:text-accent-blue transition-colors">{update.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{update.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
