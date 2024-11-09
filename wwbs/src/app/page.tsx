import LocationAggregatorMap from "@/app/locationMap";

export default function Home() {
  const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  return (
    <main className="">
      <div className="relative min-h-screen">
        <LocationAggregatorMap />
      </div>
    </main>
  );
}
