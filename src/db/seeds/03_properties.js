const table = 'properties'
exports.seed = knex => {
  return knex(table).insert([
    {
      id: 1,
      legal_description: "EA 117 1 3 R1 (3777m2)",
      lot: "7032-3-5",
      block: "30",
      unit: "B308",
      area: 27197.52,
      phase: "1",
      tract: "24403",
      increment: "5",
      square_footage: 52503.5,
      building_square_footage: 52503.5,
      map_document: 428353,
      building_type: "Residential",
      year_built: 1983,
      type_of_construction: "DWELL/ICP",
      building_condition: "Average",
      municipality: "Dededo",
      condominium: "Pacific Towers",
      island: "Guam"
    },
    {
      id: 2,
      legal_description: "EA 121 1 3",
      lot: "7032-3-5",
      block: "30",
      unit: "B308",
      area: 27197.52,
      phase: "1",
      tract: "24403",
      increment: "5",
      square_footage: 52503.5,
      building_square_footage: 52503.5,
      map_document: 428353,
      building_type: "Residential",
      year_built: 1964,
      type_of_construction: "DWELL/ICP",
      building_condition: "Average",
      municipality: "Dededo",
      condominium: "Nimitz Hill Towers",
      island: "Guam"
    },
    {
      id: 3,
      legal_description: "EA 117 1 3 R1 (3777m2)",
      lot: "7032-3-5",
      block: "30",
      unit: "B308",
      area: 27197.52,
      phase: "1",
      tract: "24403",
      increment: "5",
      square_footage: 52503.5,
      building_square_footage: 52503.5,
      map_document: 428353,
      building_type: "Commercial",
      year_built: 1975,
      type_of_construction: "DWELL/ICP",
      building_condition: "Average",
      municipality: "Garapan",
      island: "Saipan"
    }

  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}))`)
  });
};
