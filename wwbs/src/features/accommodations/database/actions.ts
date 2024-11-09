import { prisma } from "@/database/db";

export const fetchAccommodationsForHikingTrail = async (id: number) => {
    try {
      // Simulate database request delay
      //await new Promise((resolve) => setTimeout(resolve, 1000));
  
      // Simulated database fetch
      // const hikingTrail: HikingTrail | undefined = db.hiking_trails.find(
      //   (hiking_trail) => hiking_trail.id == id
      // );
  
      // const accommodations = await prisma.accommodation.findMany({
      //   where: {
      //     hikingTrailAccommodation: {
      //       some: {
      //         hikingTrailId: id,
      //       },
      //     },
      //   },
      //   include: {
      //     hikingTrailAccommodation: true,
      //   },
      // });

      const hikingTrailAccommodations = await prisma.hikingTrailAccommodation.findMany({
        where: {
          hikingTrailId: id,
        },
        include: {
          accommodation: true,
          hikingTrailStage: true,
        },
      });
      
      // if (!hikingTrail) {
      //   throw new Error("Hiking trail not found");
      // }
  
      // hikingTrail.stages = [];
  
      // const stages = db.hiking_trail_stages.filter(
      //   (stage) => stage.hiking_trail_id == id
      // );
  
      // //Map to interface
      // hikingTrail.stages = stages.map((stage) => {
      //   return {
      //     id: stage.id,
      //     hikingTrailId: stage.hiking_trail_id,
      //     position: stage.position,
      //     title: stage.title,
      //     description: stage.description,
      //     distance: stage.distance,
      //   };
      // });
      // Return the simulated data
      return hikingTrailAccommodations;
    } catch (error) {
      console.error("Error fetching accommodations:", error);
      throw new Error("Failed to fetch accommodations:");
    }
  };