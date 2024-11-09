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
  hiking_trail_stages: [
    {
      id: 1,
      hiking_trail_id: 1,
      position: 1,
      title: "St. Johann",
      description: "Gaudeamushütte",
      distance: 12.5,
    },
    {
      id: 2,
      hiking_trail_id: 1,
      position: 2,
      title: "Parkplatz Glanz",
      description: "Sudetendeutsche Hütte",
      distance: 8,
    },
    {
      id: 3,
      hiking_trail_id: 1,
      position: 3,
      title: "Gmund",
      description: "Wildbad Kreuth",
      distance: 22,
    },
    {
      id: 4,
      position: 1,
      hiking_trail_id: 2,
      title: "Etappe 1: Parkplatz Glanz – Sudetendeutsche Hütte",
      distance: 8,
      description: "A scenic ascent from Parkplatz Glanz to the Sudetendeutsche Hütte, featuring Edelweiß meadows and sweeping mountain views."
    },
    {
      id: 5,
      position: 2,
      hiking_trail_id: 2,
      title: "Etappe 2: Sudetendeutsche Hütte – Kalser Tauernhaus",
      distance: 12,
      description: "An adventurous descent through glacial landscapes and alpine paths, ending at the Kalser Tauernhaus."
    },
    {
      id: 6,
      position: 3,
      hiking_trail_id: 2,
      title: "Etappe 3: Kalser Tauernhaus – Lucknerhütte",
      distance: 16.2,
      description: "A challenging and rewarding trail close to Großglockner, passing through valleys and alpine huts."
    },
    {
      id: 7,
      position: 4,
      hiking_trail_id: 2,
      title: "Etappe 4: Lucknerhütte – Glorer Hütte",
      distance: 7.9,
      description: "A varied hike with steep sections and secured paths, leading to the Glorer Hütte through beautiful mountain passes."
    },
    {
      id: 8,
      position: 5,
      hiking_trail_id: 2,
      title: "Etappe 5: Glorer Hütte – Alpengasthof Glödis Refugium",
      distance: 13.6,
      description: "A picturesque descent with stunning views of the Kalser Valley and surrounding peaks, concluding at Glödis Refugium."
    },
    {
      id: 9,
      position: 6,
      hiking_trail_id: 2,
      title: "Etappe 6: Alpengasthof Glödis Refugium – Kals am Großglockner",
      distance: 8.1,
      description: "A final descent through lush landscapes and traditional farmhouses, arriving in Kals am Großglockner."
    }
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
