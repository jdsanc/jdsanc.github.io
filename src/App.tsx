/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LatestUpdates } from './components/LatestUpdates';
import { SelectedPublications } from './components/SelectedPublications';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-primary font-body selection:bg-accent-blue/10 selection:text-accent-blue">
      <Header />
      <main className="pt-32 max-w-5xl mx-auto px-6">
        <Hero />
        <LatestUpdates />
        <SelectedPublications />
      </main>
      <Footer />
    </div>
  );
}
