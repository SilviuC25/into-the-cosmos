import FunFactCard from './FunFactCard';
import facts from '../data/facts.json';

export default function FunFactsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-indigo-950 to-black text-white">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-4xl font-bold text-indigo-400">Fun Space Facts</h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            Blow your mind with quirky, weird, and wonderful space trivia 🌠
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, i) => (
            <FunFactCard key={i} {...fact} />
          ))}
        </div>
      </div>
    </section>
  );
}
