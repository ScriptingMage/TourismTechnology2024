import { db } from "@/database/db";
import { HikingTrail } from "./types";

export const fetchHikingTrails = async () => {
  try {
    // Simulate database request delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulated database fetch
    const hikingTrails: HikingTrail[] = db.hiking_trails;

    // Return the simulated data
    return hikingTrails;
  } catch (error) {
    console.error("Error fetching hiking trails:", error);
    throw new Error("Failed to fetch hiking trails");
  }
};

export const fetchHikingTrail = async (id: number) => {
  try {
    // Simulate database request delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulated database fetch
    const hikingTrail: HikingTrail | undefined = db.hiking_trails.find(
      (hiking_trail) => hiking_trail.id == id
    );
    
    if (!hikingTrail) {
      throw new Error("Hiking trail not found");
    }

    hikingTrail.stages = [];

    const stages = db.hiking_trail_stages.filter(
      (stage) => stage.hiking_trail_id == id
    );

    //Map to interface
    hikingTrail.stages = stages.map((stage) => {
      return {
        id: stage.id,
        hikingTrailId: stage.hiking_trail_id,
        position: stage.position,
        title: stage.title,
        description: stage.description,
        distance: stage.distance,
      };
    });
    // Return the simulated data
    return hikingTrail;
  } catch (error) {
    console.error("Error fetching hiking trail:", error);
    throw new Error("Failed to fetch hiking trail");
  }
};
