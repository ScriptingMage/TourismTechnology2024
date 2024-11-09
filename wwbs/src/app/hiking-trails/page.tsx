import { HikingTrailList } from "@/features/hiking-trails/components/hiking-trail-list";
import { fetchHikingTrails } from "@/features/hiking-trails/database/actions";

export default async function Page() {

  const hikingTrails = await fetchHikingTrails();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-center text-4xl font-bold mb-20">Hiking Trails</h1>
      <HikingTrailList hikingTrails={hikingTrails} />
    </div>
  );
}
