import LocationAggregatorMap from "@/app/locationMap";

export default function Home() {
  const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  return (
    <main className="">
      <div className="relative h-screen flex">
        <div className="w-1/2 h-full [&>*]:!relative">
          <LocationAggregatorMap />
        </div>
        <div className="w-1/2">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            facere repellendus, blanditiis adipisci quidem eligendi architecto
            error eaque quaerat ad modi eos asperiores placeat? Saepe officiis
            ab sint excepturi itaque?
          </p>
        </div>
      </div>
    </main>
  );
}
