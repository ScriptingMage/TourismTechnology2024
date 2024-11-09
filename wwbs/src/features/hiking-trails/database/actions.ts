import { db } from "@/database/db"


export const fetchHikingTrails = async () => {
    try {
        // Simulate database request delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulated database fetch
        const hikingTrails = db.hiking_trails;

        // Return the simulated data
        return hikingTrails;
    } catch (error) {
        console.error("Error fetching hiking trails:", error);
        throw new Error("Failed to fetch hiking trails");
    }
}