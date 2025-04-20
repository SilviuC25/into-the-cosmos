import { promises as fs } from 'fs';
import path from 'path';
import PlanetCard from '../components/PlanetCard';

export default async function PlanetsPage() {
  const filePath = path.join(process.cwd(), 'src/app/data/planets.json');
  const file = await fs.readFile(filePath, 'utf-8');
  const planets = JSON.parse(file);

  return (
    <main className="px-4 py-10 max-w-5xl mx-auto space-y-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center">
        Explore the Planets
      </h1>

      <div className="space-y-12">
        {planets.map((planet: any) => (
          <PlanetCard key={planet.id} {...planet} />
        ))}
      </div>
    </main>
  );
}
