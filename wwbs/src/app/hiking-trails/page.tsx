import { db } from "@/lib/db/db";
import Image from "next/image";

const hikingTrails = db.hiking_trails;

export default function Page() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-center text-4xl font-bold mb-20">Hiking Trails</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {hikingTrails.map((trail) => (
          <div key={trail.id} className="border border-gray-500 p-4">
            <div className="flex gap-4">
              <div className="w-[400px] flex-shrink-0 ">
                <div className="aspect-w-16 aspect-h-9 ">
                  <Image
                    src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                    fill={true}
                  />
                </div>
              </div>

              <div className="flex-col">
                <h2 className="text-2xl font-bold">{trail.name}</h2>
                <p className="text-base">{trail.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
