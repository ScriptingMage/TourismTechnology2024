export const db = {
  hiking_trails: [
    {
      id: 1,
      name: "Adlerweg",
      description:
        "The Eagle Trail with 33 stages and 422km covering 31,000 meters of altitude.",
      length: 422,
    },
    {
      id: 2,
      name: "Glocknerkrone",
      description:
        "A challenging trail around the Großglockner with 6 stages, totaling 65.6km.",
      length: 65.6,
    },
    {
      id: 3,
      name: "Die Alpenüberquerung",
      description:
        "A classic trans-Alpine route with stunning landscapes across 7 stages.",
      length: 95,
    },
  ],
  hiking_trails_leg: [
    {
      id: 1,
      hiking_trails_id: 1,
      start_point: "St. Johann",
      end_point: "Gaudeamushütte",
      distance: 12.5,
    },
    {
      id: 2,
      hiking_trails_id: 2,
      start_point: "Parkplatz Glanz",
      end_point: "Sudetendeutsche Hütte",
      distance: 8,
    },
    {
      id: 3,
      hiking_trails_id: 3,
      start_point: "Gmund",
      end_point: "Wildbad Kreuth",
      distance: 22,
    },
  ],
  overnight_stays: [
    {
      id: 1,
      name: "Gaudeamushütte",
      description: "A cozy hut with scenic views of the mountains.",
      capacity: 40,
      lat: 47.556,
      lon: 12.318,
    },
    {
      id: 2,
      name: "Sudetendeutsche Hütte",
      description:
        "Mountain hut with views of the Gradötzkees and the surrounding peaks.",
      capacity: 30,
      lat: 47.014,
      lon: 12.694,
    },
    {
      id: 3,
      name: "Wildbad Kreuth",
      description: "Historic spa area with alpine accommodations.",
      capacity: 25,
      lat: 47.626,
      lon: 11.726,
    },
  ],
  hiking_trails_overnight_stays: [
    {
      id: 1,
      hiking_trails_id: 1,
      overnight_stays_id: 1,
    },
    {
      id: 2,
      hiking_trails_id: 2,
      overnight_stays_id: 2,
    },
    {
      id: 3,
      hiking_trails_id: 3,
      overnight_stays_id: 3,
    },
  ],
  hiking_trails_booking: [
    {
      id: 1,
      hiking_trails_id: 1,
      name: "John Doe",
      start_date: "2024-06-01",
      end_date: "2024-06-07",
      beds: 2,
    },
    {
      id: 2,
      hiking_trails_id: 2,
      name: "Jane Smith",
      start_date: "2024-07-15",
      end_date: "2024-07-18",
      beds: 1,
    },
  ],
  hiking_trails_booking_leg: [
    {
      id: 1,
      hiking_trails_booking_id: 1,
      overnight_stays_id: 1,
      hiking_trails_leg_id: 1,
    },
    {
      id: 2,
      hiking_trails_booking_id: 2,
      overnight_stays_id: 2,
      hiking_trails_leg_id: 2,
    },
  ],
};
