export interface Pokemon {
  id:        number;
  name:      string;
  order:     number;
  height:    number;
  weight:    number;
  image:     string | null;
  types:     string[];
  abilities: string[];
  stats:     Stat[];
}

export interface Stat {
  name:     string;
  baseStat: number;
}

export const pokemons: Pokemon[] = [
  {
    "id": 1,
    "name": "bulbasaur",
    "order": 1,
    "height": 7,
    "weight": 69,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "overgrow",
      "chlorophyll"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 49
      },
      {
        "name": "defense",
        "baseStat": 49
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 2,
    "name": "ivysaur",
    "order": 2,
    "height": 10,
    "weight": 130,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "overgrow",
      "chlorophyll"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 62
      },
      {
        "name": "defense",
        "baseStat": 63
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 3,
    "name": "venusaur",
    "order": 3,
    "height": 20,
    "weight": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "overgrow",
      "chlorophyll"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 82
      },
      {
        "name": "defense",
        "baseStat": 83
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 4,
    "name": "charmander",
    "order": 5,
    "height": 6,
    "weight": 85,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "solar-power"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 39
      },
      {
        "name": "attack",
        "baseStat": 52
      },
      {
        "name": "defense",
        "baseStat": 43
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 5,
    "name": "charmeleon",
    "order": 6,
    "height": 11,
    "weight": 190,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "solar-power"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 58
      },
      {
        "name": "attack",
        "baseStat": 64
      },
      {
        "name": "defense",
        "baseStat": 58
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 6,
    "name": "charizard",
    "order": 7,
    "height": 17,
    "weight": 905,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    "types": [
      "fire",
      "flying"
    ],
    "abilities": [
      "blaze",
      "solar-power"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 84
      },
      {
        "name": "defense",
        "baseStat": 78
      },
      {
        "name": "special-attack",
        "baseStat": 109
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 7,
    "name": "squirtle",
    "order": 10,
    "height": 5,
    "weight": 90,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "rain-dish"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 44
      },
      {
        "name": "attack",
        "baseStat": 48
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 64
      },
      {
        "name": "speed",
        "baseStat": 43
      }
    ]
  },
  {
    "id": 8,
    "name": "wartortle",
    "order": 11,
    "height": 10,
    "weight": 225,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "rain-dish"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 59
      },
      {
        "name": "attack",
        "baseStat": 63
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 58
      }
    ]
  },
  {
    "id": 9,
    "name": "blastoise",
    "order": 12,
    "height": 16,
    "weight": 855,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "rain-dish"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 79
      },
      {
        "name": "attack",
        "baseStat": 83
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 78
      }
    ]
  },
  {
    "id": 10,
    "name": "caterpie",
    "order": 14,
    "height": 3,
    "weight": 29,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "shield-dust",
      "run-away"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 20
      },
      {
        "name": "special-defense",
        "baseStat": 20
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 11,
    "name": "metapod",
    "order": 15,
    "height": 7,
    "weight": 99,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "shed-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 20
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 12,
    "name": "butterfree",
    "order": 16,
    "height": 11,
    "weight": 320,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "compound-eyes",
      "tinted-lens"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 13,
    "name": "weedle",
    "order": 17,
    "height": 3,
    "weight": 32,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "shield-dust",
      "run-away"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 20
      },
      {
        "name": "special-defense",
        "baseStat": 20
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 14,
    "name": "kakuna",
    "order": 18,
    "height": 6,
    "weight": 100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "shed-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 25
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 15,
    "name": "beedrill",
    "order": 19,
    "height": 10,
    "weight": 295,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "swarm",
      "sniper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 16,
    "name": "pidgey",
    "order": 21,
    "height": 3,
    "weight": 18,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 56
      }
    ]
  },
  {
    "id": 17,
    "name": "pidgeotto",
    "order": 22,
    "height": 11,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 63
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 71
      }
    ]
  },
  {
    "id": 18,
    "name": "pidgeot",
    "order": 23,
    "height": 15,
    "weight": 395,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 83
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 101
      }
    ]
  },
  {
    "id": 19,
    "name": "rattata",
    "order": 25,
    "height": 3,
    "weight": 35,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "run-away",
      "guts",
      "hustle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 56
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 72
      }
    ]
  },
  {
    "id": 20,
    "name": "raticate",
    "order": 27,
    "height": 7,
    "weight": 185,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "run-away",
      "guts",
      "hustle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 81
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 97
      }
    ]
  },
  {
    "id": 21,
    "name": "spearow",
    "order": 30,
    "height": 3,
    "weight": 20,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "sniper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 31
      },
      {
        "name": "special-defense",
        "baseStat": 31
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 22,
    "name": "fearow",
    "order": 31,
    "height": 12,
    "weight": 380,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "sniper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 61
      },
      {
        "name": "special-defense",
        "baseStat": 61
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 23,
    "name": "ekans",
    "order": 32,
    "height": 20,
    "weight": 69,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 44
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 54
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 24,
    "name": "arbok",
    "order": 33,
    "height": 35,
    "weight": 650,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 69
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 79
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 25,
    "name": "pikachu",
    "order": 35,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 26,
    "name": "raichu",
    "order": 51,
    "height": 8,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 27,
    "name": "sandshrew",
    "order": 53,
    "height": 6,
    "weight": 120,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "sand-veil",
      "sand-rush"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 20
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 28,
    "name": "sandslash",
    "order": 55,
    "height": 10,
    "weight": 295,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "sand-veil",
      "sand-rush"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 29,
    "name": "nidoran-f",
    "order": 57,
    "height": 4,
    "weight": 70,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "poison-point",
      "rivalry",
      "hustle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 47
      },
      {
        "name": "defense",
        "baseStat": 52
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 41
      }
    ]
  },
  {
    "id": 30,
    "name": "nidorina",
    "order": 58,
    "height": 8,
    "weight": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "poison-point",
      "rivalry",
      "hustle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 62
      },
      {
        "name": "defense",
        "baseStat": 67
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 56
      }
    ]
  },
  {
    "id": 31,
    "name": "nidoqueen",
    "order": 59,
    "height": 13,
    "weight": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
    "types": [
      "poison",
      "ground"
    ],
    "abilities": [
      "poison-point",
      "rivalry",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 92
      },
      {
        "name": "defense",
        "baseStat": 87
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 76
      }
    ]
  },
  {
    "id": 32,
    "name": "nidoran-m",
    "order": 60,
    "height": 5,
    "weight": 90,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "poison-point",
      "rivalry",
      "hustle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 46
      },
      {
        "name": "attack",
        "baseStat": 57
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 33,
    "name": "nidorino",
    "order": 61,
    "height": 9,
    "weight": 195,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "poison-point",
      "rivalry",
      "hustle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 61
      },
      {
        "name": "attack",
        "baseStat": 72
      },
      {
        "name": "defense",
        "baseStat": 57
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 34,
    "name": "nidoking",
    "order": 62,
    "height": 14,
    "weight": 620,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    "types": [
      "poison",
      "ground"
    ],
    "abilities": [
      "poison-point",
      "rivalry",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 81
      },
      {
        "name": "attack",
        "baseStat": 102
      },
      {
        "name": "defense",
        "baseStat": 77
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 35,
    "name": "clefairy",
    "order": 64,
    "height": 6,
    "weight": 75,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "cute-charm",
      "magic-guard",
      "friend-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 48
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 36,
    "name": "clefable",
    "order": 65,
    "height": 13,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "cute-charm",
      "magic-guard",
      "unaware"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 73
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 37,
    "name": "vulpix",
    "order": 66,
    "height": 6,
    "weight": 99,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "flash-fire",
      "drought"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 38
      },
      {
        "name": "attack",
        "baseStat": 41
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 38,
    "name": "ninetales",
    "order": 68,
    "height": 11,
    "weight": 199,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "flash-fire",
      "drought"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 73
      },
      {
        "name": "attack",
        "baseStat": 76
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 81
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 39,
    "name": "jigglypuff",
    "order": 71,
    "height": 5,
    "weight": 55,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    "types": [
      "normal",
      "fairy"
    ],
    "abilities": [
      "cute-charm",
      "competitive",
      "friend-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 115
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 20
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 40,
    "name": "wigglytuff",
    "order": 72,
    "height": 10,
    "weight": 120,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    "types": [
      "normal",
      "fairy"
    ],
    "abilities": [
      "cute-charm",
      "competitive",
      "frisk"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 140
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 41,
    "name": "zubat",
    "order": 73,
    "height": 8,
    "weight": 75,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    "types": [
      "poison",
      "flying"
    ],
    "abilities": [
      "inner-focus",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 42,
    "name": "golbat",
    "order": 74,
    "height": 16,
    "weight": 550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
    "types": [
      "poison",
      "flying"
    ],
    "abilities": [
      "inner-focus",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 43,
    "name": "oddish",
    "order": 76,
    "height": 5,
    "weight": 54,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "chlorophyll",
      "run-away"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 44,
    "name": "gloom",
    "order": 77,
    "height": 8,
    "weight": 86,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "chlorophyll",
      "stench"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 45,
    "name": "vileplume",
    "order": 78,
    "height": 12,
    "weight": 186,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "chlorophyll",
      "effect-spore"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 46,
    "name": "paras",
    "order": 80,
    "height": 3,
    "weight": 54,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
    "types": [
      "bug",
      "grass"
    ],
    "abilities": [
      "effect-spore",
      "dry-skin",
      "damp"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 25
      }
    ]
  },
  {
    "id": 47,
    "name": "parasect",
    "order": 81,
    "height": 10,
    "weight": 295,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
    "types": [
      "bug",
      "grass"
    ],
    "abilities": [
      "effect-spore",
      "dry-skin",
      "damp"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 48,
    "name": "venonat",
    "order": 82,
    "height": 10,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "compound-eyes",
      "tinted-lens",
      "run-away"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 49,
    "name": "venomoth",
    "order": 83,
    "height": 15,
    "weight": 125,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "shield-dust",
      "tinted-lens",
      "wonder-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 50,
    "name": "diglett",
    "order": 84,
    "height": 2,
    "weight": 8,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "sand-veil",
      "arena-trap",
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 10
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 25
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 51,
    "name": "dugtrio",
    "order": 86,
    "height": 7,
    "weight": 333,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "sand-veil",
      "arena-trap",
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 52,
    "name": "meowth",
    "order": 88,
    "height": 4,
    "weight": 42,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "pickup",
      "technician",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 53,
    "name": "persian",
    "order": 91,
    "height": 10,
    "weight": 320,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "limber",
      "technician",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 54,
    "name": "psyduck",
    "order": 93,
    "height": 8,
    "weight": 196,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    "types": [
      "water"
    ],
    "abilities": [
      "damp",
      "cloud-nine",
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 52
      },
      {
        "name": "defense",
        "baseStat": 48
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 55,
    "name": "golduck",
    "order": 94,
    "height": 17,
    "weight": 766,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    "types": [
      "water"
    ],
    "abilities": [
      "damp",
      "cloud-nine",
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 82
      },
      {
        "name": "defense",
        "baseStat": 78
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 56,
    "name": "mankey",
    "order": 95,
    "height": 5,
    "weight": 280,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "vital-spirit",
      "anger-point",
      "defiant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 57,
    "name": "primeape",
    "order": 96,
    "height": 10,
    "weight": 320,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "vital-spirit",
      "anger-point",
      "defiant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 58,
    "name": "growlithe",
    "order": 97,
    "height": 7,
    "weight": 190,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "intimidate",
      "flash-fire",
      "justified"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 59,
    "name": "arcanine",
    "order": 98,
    "height": 19,
    "weight": 1550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "intimidate",
      "flash-fire",
      "justified"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 60,
    "name": "poliwag",
    "order": 99,
    "height": 6,
    "weight": 124,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    "types": [
      "water"
    ],
    "abilities": [
      "water-absorb",
      "damp",
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 61,
    "name": "poliwhirl",
    "order": 100,
    "height": 10,
    "weight": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
    "types": [
      "water"
    ],
    "abilities": [
      "water-absorb",
      "damp",
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 62,
    "name": "poliwrath",
    "order": 101,
    "height": 13,
    "weight": 540,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
    "types": [
      "water",
      "fighting"
    ],
    "abilities": [
      "water-absorb",
      "damp",
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 63,
    "name": "abra",
    "order": 103,
    "height": 9,
    "weight": 195,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 25
      },
      {
        "name": "attack",
        "baseStat": 20
      },
      {
        "name": "defense",
        "baseStat": 15
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 64,
    "name": "kadabra",
    "order": 104,
    "height": 13,
    "weight": 565,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 65,
    "name": "alakazam",
    "order": 105,
    "height": 15,
    "weight": 480,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 66,
    "name": "machop",
    "order": 107,
    "height": 8,
    "weight": 195,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "guts",
      "no-guard",
      "steadfast"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 67,
    "name": "machoke",
    "order": 108,
    "height": 15,
    "weight": 705,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "guts",
      "no-guard",
      "steadfast"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 68,
    "name": "machamp",
    "order": 109,
    "height": 16,
    "weight": 1300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "guts",
      "no-guard",
      "steadfast"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 69,
    "name": "bellsprout",
    "order": 110,
    "height": 7,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "chlorophyll",
      "gluttony"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 70,
    "name": "weepinbell",
    "order": 111,
    "height": 10,
    "weight": 64,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "chlorophyll",
      "gluttony"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 71,
    "name": "victreebel",
    "order": 112,
    "height": 17,
    "weight": 155,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "chlorophyll",
      "gluttony"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 72,
    "name": "tentacool",
    "order": 113,
    "height": 9,
    "weight": 455,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
    "types": [
      "water",
      "poison"
    ],
    "abilities": [
      "clear-body",
      "liquid-ooze",
      "rain-dish"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 73,
    "name": "tentacruel",
    "order": 114,
    "height": 16,
    "weight": 550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
    "types": [
      "water",
      "poison"
    ],
    "abilities": [
      "clear-body",
      "liquid-ooze",
      "rain-dish"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 74,
    "name": "geodude",
    "order": 115,
    "height": 4,
    "weight": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    "types": [
      "rock",
      "ground"
    ],
    "abilities": [
      "rock-head",
      "sturdy",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 75,
    "name": "graveler",
    "order": 117,
    "height": 10,
    "weight": 1050,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
    "types": [
      "rock",
      "ground"
    ],
    "abilities": [
      "rock-head",
      "sturdy",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 76,
    "name": "golem",
    "order": 119,
    "height": 14,
    "weight": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
    "types": [
      "rock",
      "ground"
    ],
    "abilities": [
      "rock-head",
      "sturdy",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 77,
    "name": "ponyta",
    "order": 121,
    "height": 10,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "run-away",
      "flash-fire",
      "flame-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 78,
    "name": "rapidash",
    "order": 123,
    "height": 17,
    "weight": 950,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "run-away",
      "flash-fire",
      "flame-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 79,
    "name": "slowpoke",
    "order": 125,
    "height": 12,
    "weight": 360,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    "types": [
      "water",
      "psychic"
    ],
    "abilities": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 80,
    "name": "slowbro",
    "order": 127,
    "height": 16,
    "weight": 785,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    "types": [
      "water",
      "psychic"
    ],
    "abilities": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 81,
    "name": "magnemite",
    "order": 132,
    "height": 3,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    "types": [
      "electric",
      "steel"
    ],
    "abilities": [
      "magnet-pull",
      "sturdy",
      "analytic"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 25
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 82,
    "name": "magneton",
    "order": 133,
    "height": 10,
    "weight": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
    "types": [
      "electric",
      "steel"
    ],
    "abilities": [
      "magnet-pull",
      "sturdy",
      "analytic"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 83,
    "name": "farfetchd",
    "order": 135,
    "height": 8,
    "weight": 150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "inner-focus",
      "defiant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 52
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 58
      },
      {
        "name": "special-defense",
        "baseStat": 62
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 84,
    "name": "doduo",
    "order": 137,
    "height": 14,
    "weight": 392,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "run-away",
      "early-bird",
      "tangled-feet"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 85,
    "name": "dodrio",
    "order": 138,
    "height": 18,
    "weight": 852,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "run-away",
      "early-bird",
      "tangled-feet"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 86,
    "name": "seel",
    "order": 139,
    "height": 11,
    "weight": 900,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
    "types": [
      "water"
    ],
    "abilities": [
      "thick-fat",
      "hydration",
      "ice-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 87,
    "name": "dewgong",
    "order": 140,
    "height": 17,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
    "types": [
      "water",
      "ice"
    ],
    "abilities": [
      "thick-fat",
      "hydration",
      "ice-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 88,
    "name": "grimer",
    "order": 141,
    "height": 9,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "stench",
      "sticky-hold",
      "poison-touch"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 25
      }
    ]
  },
  {
    "id": 89,
    "name": "muk",
    "order": 143,
    "height": 12,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "stench",
      "sticky-hold",
      "poison-touch"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 90,
    "name": "shellder",
    "order": 145,
    "height": 3,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    "types": [
      "water"
    ],
    "abilities": [
      "shell-armor",
      "skill-link",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 91,
    "name": "cloyster",
    "order": 146,
    "height": 15,
    "weight": 1325,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
    "types": [
      "water",
      "ice"
    ],
    "abilities": [
      "shell-armor",
      "skill-link",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 180
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 92,
    "name": "gastly",
    "order": 147,
    "height": 13,
    "weight": 1,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    "types": [
      "ghost",
      "poison"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 93,
    "name": "haunter",
    "order": 148,
    "height": 16,
    "weight": 1,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    "types": [
      "ghost",
      "poison"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 115
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 94,
    "name": "gengar",
    "order": 149,
    "height": 15,
    "weight": 405,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    "types": [
      "ghost",
      "poison"
    ],
    "abilities": [
      "cursed-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 95,
    "name": "onix",
    "order": 151,
    "height": 88,
    "weight": 2100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    "types": [
      "rock",
      "ground"
    ],
    "abilities": [
      "rock-head",
      "sturdy",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 160
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 96,
    "name": "drowzee",
    "order": 154,
    "height": 10,
    "weight": 324,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "insomnia",
      "forewarn",
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 48
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 43
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 42
      }
    ]
  },
  {
    "id": 97,
    "name": "hypno",
    "order": 155,
    "height": 16,
    "weight": 756,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "insomnia",
      "forewarn",
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 73
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 73
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 67
      }
    ]
  },
  {
    "id": 98,
    "name": "krabby",
    "order": 156,
    "height": 4,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
    "types": [
      "water"
    ],
    "abilities": [
      "hyper-cutter",
      "shell-armor",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 99,
    "name": "kingler",
    "order": 157,
    "height": 13,
    "weight": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
    "types": [
      "water"
    ],
    "abilities": [
      "hyper-cutter",
      "shell-armor",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 100,
    "name": "voltorb",
    "order": 158,
    "height": 5,
    "weight": 104,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "soundproof",
      "static",
      "aftermath"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 101,
    "name": "electrode",
    "order": 159,
    "height": 12,
    "weight": 666,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "soundproof",
      "static",
      "aftermath"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 150
      }
    ]
  },
  {
    "id": 102,
    "name": "exeggcute",
    "order": 160,
    "height": 4,
    "weight": 25,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
    "types": [
      "grass",
      "psychic"
    ],
    "abilities": [
      "chlorophyll",
      "harvest"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 103,
    "name": "exeggutor",
    "order": 161,
    "height": 20,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
    "types": [
      "grass",
      "psychic"
    ],
    "abilities": [
      "chlorophyll",
      "harvest"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 104,
    "name": "cubone",
    "order": 163,
    "height": 4,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "rock-head",
      "lightning-rod",
      "battle-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 105,
    "name": "marowak",
    "order": 164,
    "height": 10,
    "weight": 450,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "rock-head",
      "lightning-rod",
      "battle-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 106,
    "name": "hitmonlee",
    "order": 168,
    "height": 15,
    "weight": 498,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "limber",
      "reckless",
      "unburden"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 53
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 87
      }
    ]
  },
  {
    "id": 107,
    "name": "hitmonchan",
    "order": 169,
    "height": 14,
    "weight": 502,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "keen-eye",
      "iron-fist",
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 79
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 76
      }
    ]
  },
  {
    "id": 108,
    "name": "lickitung",
    "order": 171,
    "height": 12,
    "weight": 655,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "own-tempo",
      "oblivious",
      "cloud-nine"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 109,
    "name": "koffing",
    "order": 173,
    "height": 6,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "levitate",
      "neutralizing-gas",
      "stench"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 110,
    "name": "weezing",
    "order": 174,
    "height": 12,
    "weight": 95,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "levitate",
      "neutralizing-gas",
      "stench"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 111,
    "name": "rhyhorn",
    "order": 176,
    "height": 10,
    "weight": 1150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
    "types": [
      "ground",
      "rock"
    ],
    "abilities": [
      "lightning-rod",
      "rock-head",
      "reckless"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 25
      }
    ]
  },
  {
    "id": 112,
    "name": "rhydon",
    "order": 177,
    "height": 19,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
    "types": [
      "ground",
      "rock"
    ],
    "abilities": [
      "lightning-rod",
      "rock-head",
      "reckless"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 113,
    "name": "chansey",
    "order": 180,
    "height": 11,
    "weight": 346,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "natural-cure",
      "serene-grace",
      "healer"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 250
      },
      {
        "name": "attack",
        "baseStat": 5
      },
      {
        "name": "defense",
        "baseStat": 5
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 114,
    "name": "tangela",
    "order": 182,
    "height": 10,
    "weight": 350,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "chlorophyll",
      "leaf-guard",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 115,
    "name": "kangaskhan",
    "order": 184,
    "height": 22,
    "weight": 800,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "early-bird",
      "scrappy",
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 116,
    "name": "horsea",
    "order": 186,
    "height": 4,
    "weight": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "sniper",
      "damp"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 117,
    "name": "seadra",
    "order": 187,
    "height": 12,
    "weight": 250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
    "types": [
      "water"
    ],
    "abilities": [
      "poison-point",
      "sniper",
      "damp"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 118,
    "name": "goldeen",
    "order": 189,
    "height": 6,
    "weight": 150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "water-veil",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 67
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 63
      }
    ]
  },
  {
    "id": 119,
    "name": "seaking",
    "order": 190,
    "height": 13,
    "weight": 390,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "water-veil",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 92
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 68
      }
    ]
  },
  {
    "id": 120,
    "name": "staryu",
    "order": 191,
    "height": 8,
    "weight": 345,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
    "types": [
      "water"
    ],
    "abilities": [
      "illuminate",
      "natural-cure",
      "analytic"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 121,
    "name": "starmie",
    "order": 192,
    "height": 11,
    "weight": 800,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
    "types": [
      "water",
      "psychic"
    ],
    "abilities": [
      "illuminate",
      "natural-cure",
      "analytic"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 122,
    "name": "mr-mime",
    "order": 194,
    "height": 13,
    "weight": 545,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "abilities": [
      "soundproof",
      "filter",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 123,
    "name": "scyther",
    "order": 196,
    "height": 15,
    "weight": 560,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "swarm",
      "technician",
      "steadfast"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 124,
    "name": "jynx",
    "order": 200,
    "height": 14,
    "weight": 406,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
    "types": [
      "ice",
      "psychic"
    ],
    "abilities": [
      "oblivious",
      "forewarn",
      "dry-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 115
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 125,
    "name": "electabuzz",
    "order": 202,
    "height": 11,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "vital-spirit"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 83
      },
      {
        "name": "defense",
        "baseStat": 57
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 126,
    "name": "magmar",
    "order": 205,
    "height": 13,
    "weight": 445,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "flame-body",
      "vital-spirit"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 57
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 93
      }
    ]
  },
  {
    "id": 127,
    "name": "pinsir",
    "order": 207,
    "height": 15,
    "weight": 550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "hyper-cutter",
      "mold-breaker",
      "moxie"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 128,
    "name": "tauros",
    "order": 209,
    "height": 14,
    "weight": 884,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "intimidate",
      "anger-point",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 129,
    "name": "magikarp",
    "order": 210,
    "height": 9,
    "weight": 100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 20
      },
      {
        "name": "attack",
        "baseStat": 10
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 15
      },
      {
        "name": "special-defense",
        "baseStat": 20
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 130,
    "name": "gyarados",
    "order": 211,
    "height": 65,
    "weight": 2350,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    "types": [
      "water",
      "flying"
    ],
    "abilities": [
      "intimidate",
      "moxie"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 79
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 81
      }
    ]
  },
  {
    "id": 131,
    "name": "lapras",
    "order": 213,
    "height": 25,
    "weight": 2200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
    "types": [
      "water",
      "ice"
    ],
    "abilities": [
      "water-absorb",
      "shell-armor",
      "hydration"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 130
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 132,
    "name": "ditto",
    "order": 214,
    "height": 3,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "limber",
      "imposter"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 48
      },
      {
        "name": "attack",
        "baseStat": 48
      },
      {
        "name": "defense",
        "baseStat": 48
      },
      {
        "name": "special-attack",
        "baseStat": 48
      },
      {
        "name": "special-defense",
        "baseStat": 48
      },
      {
        "name": "speed",
        "baseStat": 48
      }
    ]
  },
  {
    "id": 133,
    "name": "eevee",
    "order": 215,
    "height": 3,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "run-away",
      "adaptability",
      "anticipation"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 134,
    "name": "vaporeon",
    "order": 217,
    "height": 10,
    "weight": 290,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
    "types": [
      "water"
    ],
    "abilities": [
      "water-absorb",
      "hydration"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 130
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 135,
    "name": "jolteon",
    "order": 218,
    "height": 8,
    "weight": 245,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "volt-absorb",
      "quick-feet"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 130
      }
    ]
  },
  {
    "id": 136,
    "name": "flareon",
    "order": 219,
    "height": 9,
    "weight": 250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "flash-fire",
      "guts"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 137,
    "name": "porygon",
    "order": 225,
    "height": 8,
    "weight": 365,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "trace",
      "download",
      "analytic"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 138,
    "name": "omanyte",
    "order": 228,
    "height": 4,
    "weight": 75,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
    "types": [
      "rock",
      "water"
    ],
    "abilities": [
      "swift-swim",
      "shell-armor",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 139,
    "name": "omastar",
    "order": 229,
    "height": 10,
    "weight": 350,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
    "types": [
      "rock",
      "water"
    ],
    "abilities": [
      "swift-swim",
      "shell-armor",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 125
      },
      {
        "name": "special-attack",
        "baseStat": 115
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 140,
    "name": "kabuto",
    "order": 230,
    "height": 5,
    "weight": 115,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
    "types": [
      "rock",
      "water"
    ],
    "abilities": [
      "swift-swim",
      "battle-armor",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 141,
    "name": "kabutops",
    "order": 231,
    "height": 13,
    "weight": 405,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
    "types": [
      "rock",
      "water"
    ],
    "abilities": [
      "swift-swim",
      "battle-armor",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 142,
    "name": "aerodactyl",
    "order": 232,
    "height": 18,
    "weight": 590,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "rock-head",
      "pressure",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 130
      }
    ]
  },
  {
    "id": 143,
    "name": "snorlax",
    "order": 235,
    "height": 21,
    "weight": 4600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "immunity",
      "thick-fat",
      "gluttony"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 160
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 144,
    "name": "articuno",
    "order": 236,
    "height": 17,
    "weight": 554,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
    "types": [
      "ice",
      "flying"
    ],
    "abilities": [
      "pressure",
      "snow-cloak"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 125
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 145,
    "name": "zapdos",
    "order": 238,
    "height": 16,
    "weight": 526,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
    "types": [
      "electric",
      "flying"
    ],
    "abilities": [
      "pressure",
      "static"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 146,
    "name": "moltres",
    "order": 240,
    "height": 20,
    "weight": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
    "types": [
      "fire",
      "flying"
    ],
    "abilities": [
      "pressure",
      "flame-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 147,
    "name": "dratini",
    "order": 242,
    "height": 18,
    "weight": 33,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
    "types": [
      "dragon"
    ],
    "abilities": [
      "shed-skin",
      "marvel-scale"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 41
      },
      {
        "name": "attack",
        "baseStat": 64
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 148,
    "name": "dragonair",
    "order": 243,
    "height": 40,
    "weight": 165,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
    "types": [
      "dragon"
    ],
    "abilities": [
      "shed-skin",
      "marvel-scale"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 61
      },
      {
        "name": "attack",
        "baseStat": 84
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 149,
    "name": "dragonite",
    "order": 244,
    "height": 22,
    "weight": 2100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    "types": [
      "dragon",
      "flying"
    ],
    "abilities": [
      "inner-focus",
      "multiscale"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 91
      },
      {
        "name": "attack",
        "baseStat": 134
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 150,
    "name": "mewtwo",
    "order": 245,
    "height": 20,
    "weight": 1220,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "pressure",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 106
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 154
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 130
      }
    ]
  },
  {
    "id": 151,
    "name": "mew",
    "order": 248,
    "height": 4,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "synchronize"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 152,
    "name": "chikorita",
    "order": 249,
    "height": 9,
    "weight": 64,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "leaf-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 49
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 49
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 153,
    "name": "bayleef",
    "order": 250,
    "height": 12,
    "weight": 158,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "leaf-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 62
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 63
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 154,
    "name": "meganium",
    "order": 251,
    "height": 18,
    "weight": 1005,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "leaf-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 82
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 83
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 155,
    "name": "cyndaquil",
    "order": 252,
    "height": 5,
    "weight": 79,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "flash-fire"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 39
      },
      {
        "name": "attack",
        "baseStat": 52
      },
      {
        "name": "defense",
        "baseStat": 43
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 156,
    "name": "quilava",
    "order": 253,
    "height": 9,
    "weight": 190,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "flash-fire"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 58
      },
      {
        "name": "attack",
        "baseStat": 64
      },
      {
        "name": "defense",
        "baseStat": 58
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 157,
    "name": "typhlosion",
    "order": 254,
    "height": 17,
    "weight": 795,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "flash-fire"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 84
      },
      {
        "name": "defense",
        "baseStat": 78
      },
      {
        "name": "special-attack",
        "baseStat": 109
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 158,
    "name": "totodile",
    "order": 255,
    "height": 6,
    "weight": 95,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 64
      },
      {
        "name": "special-attack",
        "baseStat": 44
      },
      {
        "name": "special-defense",
        "baseStat": 48
      },
      {
        "name": "speed",
        "baseStat": 43
      }
    ]
  },
  {
    "id": 159,
    "name": "croconaw",
    "order": 256,
    "height": 11,
    "weight": 250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 59
      },
      {
        "name": "special-defense",
        "baseStat": 63
      },
      {
        "name": "speed",
        "baseStat": 58
      }
    ]
  },
  {
    "id": 160,
    "name": "feraligatr",
    "order": 257,
    "height": 23,
    "weight": 888,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 79
      },
      {
        "name": "special-defense",
        "baseStat": 83
      },
      {
        "name": "speed",
        "baseStat": 78
      }
    ]
  },
  {
    "id": 161,
    "name": "sentret",
    "order": 258,
    "height": 8,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "run-away",
      "keen-eye",
      "frisk"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 46
      },
      {
        "name": "defense",
        "baseStat": 34
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 162,
    "name": "furret",
    "order": 259,
    "height": 18,
    "weight": 325,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "run-away",
      "keen-eye",
      "frisk"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 76
      },
      {
        "name": "defense",
        "baseStat": 64
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 163,
    "name": "hoothoot",
    "order": 260,
    "height": 7,
    "weight": 212,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "insomnia",
      "keen-eye",
      "tinted-lens"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 36
      },
      {
        "name": "special-defense",
        "baseStat": 56
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 164,
    "name": "noctowl",
    "order": 261,
    "height": 16,
    "weight": 408,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "insomnia",
      "keen-eye",
      "tinted-lens"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 86
      },
      {
        "name": "special-defense",
        "baseStat": 96
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 165,
    "name": "ledyba",
    "order": 262,
    "height": 10,
    "weight": 108,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "swarm",
      "early-bird",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 20
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 166,
    "name": "ledian",
    "order": 263,
    "height": 14,
    "weight": 356,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "swarm",
      "early-bird",
      "iron-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 167,
    "name": "spinarak",
    "order": 264,
    "height": 5,
    "weight": 85,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "swarm",
      "insomnia",
      "sniper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 168,
    "name": "ariados",
    "order": 265,
    "height": 11,
    "weight": 335,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "swarm",
      "insomnia",
      "sniper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 169,
    "name": "crobat",
    "order": 75,
    "height": 18,
    "weight": 750,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png",
    "types": [
      "poison",
      "flying"
    ],
    "abilities": [
      "inner-focus",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 130
      }
    ]
  },
  {
    "id": 170,
    "name": "chinchou",
    "order": 266,
    "height": 5,
    "weight": 120,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png",
    "types": [
      "water",
      "electric"
    ],
    "abilities": [
      "volt-absorb",
      "illuminate",
      "water-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 38
      },
      {
        "name": "defense",
        "baseStat": 38
      },
      {
        "name": "special-attack",
        "baseStat": 56
      },
      {
        "name": "special-defense",
        "baseStat": 56
      },
      {
        "name": "speed",
        "baseStat": 67
      }
    ]
  },
  {
    "id": 171,
    "name": "lanturn",
    "order": 267,
    "height": 12,
    "weight": 225,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png",
    "types": [
      "water",
      "electric"
    ],
    "abilities": [
      "volt-absorb",
      "illuminate",
      "water-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 125
      },
      {
        "name": "attack",
        "baseStat": 58
      },
      {
        "name": "defense",
        "baseStat": 58
      },
      {
        "name": "special-attack",
        "baseStat": 76
      },
      {
        "name": "special-defense",
        "baseStat": 76
      },
      {
        "name": "speed",
        "baseStat": 67
      }
    ]
  },
  {
    "id": 172,
    "name": "pichu",
    "order": 34,
    "height": 3,
    "weight": 20,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 20
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 15
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 173,
    "name": "cleffa",
    "order": 63,
    "height": 3,
    "weight": 30,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "cute-charm",
      "magic-guard",
      "friend-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 25
      },
      {
        "name": "defense",
        "baseStat": 28
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 174,
    "name": "igglybuff",
    "order": 70,
    "height": 3,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png",
    "types": [
      "normal",
      "fairy"
    ],
    "abilities": [
      "cute-charm",
      "competitive",
      "friend-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 15
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 20
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 175,
    "name": "togepi",
    "order": 268,
    "height": 3,
    "weight": 15,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "hustle",
      "serene-grace",
      "super-luck"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 20
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 176,
    "name": "togetic",
    "order": 269,
    "height": 6,
    "weight": 32,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png",
    "types": [
      "fairy",
      "flying"
    ],
    "abilities": [
      "hustle",
      "serene-grace",
      "super-luck"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 177,
    "name": "natu",
    "order": 271,
    "height": 2,
    "weight": 20,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png",
    "types": [
      "psychic",
      "flying"
    ],
    "abilities": [
      "synchronize",
      "early-bird",
      "magic-bounce"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 178,
    "name": "xatu",
    "order": 272,
    "height": 15,
    "weight": 150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png",
    "types": [
      "psychic",
      "flying"
    ],
    "abilities": [
      "synchronize",
      "early-bird",
      "magic-bounce"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 179,
    "name": "mareep",
    "order": 273,
    "height": 6,
    "weight": 78,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "plus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 180,
    "name": "flaaffy",
    "order": 274,
    "height": 8,
    "weight": 133,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "plus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 181,
    "name": "ampharos",
    "order": 275,
    "height": 14,
    "weight": 615,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "plus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 115
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 182,
    "name": "bellossom",
    "order": 79,
    "height": 4,
    "weight": 58,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "chlorophyll",
      "healer"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 183,
    "name": "marill",
    "order": 278,
    "height": 4,
    "weight": 85,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png",
    "types": [
      "water",
      "fairy"
    ],
    "abilities": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 20
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 20
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 184,
    "name": "azumarill",
    "order": 279,
    "height": 8,
    "weight": 285,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png",
    "types": [
      "water",
      "fairy"
    ],
    "abilities": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 185,
    "name": "sudowoodo",
    "order": 281,
    "height": 12,
    "weight": 380,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "sturdy",
      "rock-head",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 186,
    "name": "politoed",
    "order": 102,
    "height": 11,
    "weight": 339,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png",
    "types": [
      "water"
    ],
    "abilities": [
      "water-absorb",
      "damp",
      "drizzle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 187,
    "name": "hoppip",
    "order": 282,
    "height": 4,
    "weight": 5,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png",
    "types": [
      "grass",
      "flying"
    ],
    "abilities": [
      "chlorophyll",
      "leaf-guard",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 188,
    "name": "skiploom",
    "order": 283,
    "height": 6,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png",
    "types": [
      "grass",
      "flying"
    ],
    "abilities": [
      "chlorophyll",
      "leaf-guard",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 189,
    "name": "jumpluff",
    "order": 284,
    "height": 8,
    "weight": 30,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png",
    "types": [
      "grass",
      "flying"
    ],
    "abilities": [
      "chlorophyll",
      "leaf-guard",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 190,
    "name": "aipom",
    "order": 285,
    "height": 8,
    "weight": 115,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "run-away",
      "pickup",
      "skill-link"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 191,
    "name": "sunkern",
    "order": 287,
    "height": 3,
    "weight": 18,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "chlorophyll",
      "solar-power",
      "early-bird"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 192,
    "name": "sunflora",
    "order": 288,
    "height": 8,
    "weight": 85,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "chlorophyll",
      "solar-power",
      "early-bird"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 193,
    "name": "yanma",
    "order": 289,
    "height": 12,
    "weight": 380,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "speed-boost",
      "compound-eyes",
      "frisk"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 194,
    "name": "wooper",
    "order": 291,
    "height": 4,
    "weight": 85,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png",
    "types": [
      "water",
      "ground"
    ],
    "abilities": [
      "damp",
      "water-absorb",
      "unaware"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 195,
    "name": "quagsire",
    "order": 292,
    "height": 14,
    "weight": 750,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png",
    "types": [
      "water",
      "ground"
    ],
    "abilities": [
      "damp",
      "water-absorb",
      "unaware"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 196,
    "name": "espeon",
    "order": 220,
    "height": 9,
    "weight": 265,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "synchronize",
      "magic-bounce"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 197,
    "name": "umbreon",
    "order": 221,
    "height": 10,
    "weight": 270,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "synchronize",
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 130
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 198,
    "name": "murkrow",
    "order": 293,
    "height": 5,
    "weight": 21,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png",
    "types": [
      "dark",
      "flying"
    ],
    "abilities": [
      "insomnia",
      "super-luck",
      "prankster"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 42
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 42
      },
      {
        "name": "speed",
        "baseStat": 91
      }
    ]
  },
  {
    "id": 199,
    "name": "slowking",
    "order": 130,
    "height": 20,
    "weight": 795,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png",
    "types": [
      "water",
      "psychic"
    ],
    "abilities": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 200,
    "name": "misdreavus",
    "order": 295,
    "height": 7,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 201,
    "name": "unown",
    "order": 297,
    "height": 5,
    "weight": 50,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 48
      },
      {
        "name": "attack",
        "baseStat": 72
      },
      {
        "name": "defense",
        "baseStat": 48
      },
      {
        "name": "special-attack",
        "baseStat": 72
      },
      {
        "name": "special-defense",
        "baseStat": 48
      },
      {
        "name": "speed",
        "baseStat": 48
      }
    ]
  },
  {
    "id": 202,
    "name": "wobbuffet",
    "order": 299,
    "height": 13,
    "weight": 285,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "shadow-tag",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 190
      },
      {
        "name": "attack",
        "baseStat": 33
      },
      {
        "name": "defense",
        "baseStat": 58
      },
      {
        "name": "special-attack",
        "baseStat": 33
      },
      {
        "name": "special-defense",
        "baseStat": 58
      },
      {
        "name": "speed",
        "baseStat": 33
      }
    ]
  },
  {
    "id": 203,
    "name": "girafarig",
    "order": 300,
    "height": 15,
    "weight": 415,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png",
    "types": [
      "normal",
      "psychic"
    ],
    "abilities": [
      "inner-focus",
      "early-bird",
      "sap-sipper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 204,
    "name": "pineco",
    "order": 301,
    "height": 6,
    "weight": 72,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "sturdy",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 205,
    "name": "forretress",
    "order": 302,
    "height": 12,
    "weight": 1258,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png",
    "types": [
      "bug",
      "steel"
    ],
    "abilities": [
      "sturdy",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 140
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 206,
    "name": "dunsparce",
    "order": 303,
    "height": 15,
    "weight": 140,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "serene-grace",
      "run-away",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 207,
    "name": "gligar",
    "order": 304,
    "height": 11,
    "weight": 648,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png",
    "types": [
      "ground",
      "flying"
    ],
    "abilities": [
      "hyper-cutter",
      "sand-veil",
      "immunity"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 208,
    "name": "steelix",
    "order": 152,
    "height": 92,
    "weight": 4000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png",
    "types": [
      "steel",
      "ground"
    ],
    "abilities": [
      "rock-head",
      "sturdy",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 200
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 209,
    "name": "snubbull",
    "order": 306,
    "height": 6,
    "weight": 78,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "intimidate",
      "run-away",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 210,
    "name": "granbull",
    "order": 307,
    "height": 14,
    "weight": 487,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "intimidate",
      "quick-feet",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 211,
    "name": "qwilfish",
    "order": 308,
    "height": 5,
    "weight": 39,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png",
    "types": [
      "water",
      "poison"
    ],
    "abilities": [
      "poison-point",
      "swift-swim",
      "intimidate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 212,
    "name": "scizor",
    "order": 197,
    "height": 18,
    "weight": 1180,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png",
    "types": [
      "bug",
      "steel"
    ],
    "abilities": [
      "swarm",
      "technician",
      "light-metal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 213,
    "name": "shuckle",
    "order": 309,
    "height": 6,
    "weight": 205,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png",
    "types": [
      "bug",
      "rock"
    ],
    "abilities": [
      "sturdy",
      "gluttony",
      "contrary"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 20
      },
      {
        "name": "attack",
        "baseStat": 10
      },
      {
        "name": "defense",
        "baseStat": 230
      },
      {
        "name": "special-attack",
        "baseStat": 10
      },
      {
        "name": "special-defense",
        "baseStat": 230
      },
      {
        "name": "speed",
        "baseStat": 5
      }
    ]
  },
  {
    "id": 214,
    "name": "heracross",
    "order": 310,
    "height": 15,
    "weight": 540,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png",
    "types": [
      "bug",
      "fighting"
    ],
    "abilities": [
      "swarm",
      "guts",
      "moxie"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 215,
    "name": "sneasel",
    "order": 312,
    "height": 9,
    "weight": 280,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png",
    "types": [
      "dark",
      "ice"
    ],
    "abilities": [
      "inner-focus",
      "keen-eye",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 216,
    "name": "teddiursa",
    "order": 314,
    "height": 6,
    "weight": 88,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "pickup",
      "quick-feet",
      "honey-gather"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 217,
    "name": "ursaring",
    "order": 315,
    "height": 18,
    "weight": 1258,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "guts",
      "quick-feet",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 218,
    "name": "slugma",
    "order": 316,
    "height": 7,
    "weight": 350,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "magma-armor",
      "flame-body",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 219,
    "name": "magcargo",
    "order": 317,
    "height": 8,
    "weight": 550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png",
    "types": [
      "fire",
      "rock"
    ],
    "abilities": [
      "magma-armor",
      "flame-body",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 220,
    "name": "swinub",
    "order": 318,
    "height": 4,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png",
    "types": [
      "ice",
      "ground"
    ],
    "abilities": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 221,
    "name": "piloswine",
    "order": 319,
    "height": 11,
    "weight": 558,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png",
    "types": [
      "ice",
      "ground"
    ],
    "abilities": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 222,
    "name": "corsola",
    "order": 321,
    "height": 6,
    "weight": 50,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png",
    "types": [
      "water",
      "rock"
    ],
    "abilities": [
      "hustle",
      "natural-cure",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 223,
    "name": "remoraid",
    "order": 323,
    "height": 6,
    "weight": 120,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png",
    "types": [
      "water"
    ],
    "abilities": [
      "hustle",
      "sniper",
      "moody"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 224,
    "name": "octillery",
    "order": 324,
    "height": 9,
    "weight": 285,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png",
    "types": [
      "water"
    ],
    "abilities": [
      "suction-cups",
      "sniper",
      "moody"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 225,
    "name": "delibird",
    "order": 325,
    "height": 9,
    "weight": 160,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png",
    "types": [
      "ice",
      "flying"
    ],
    "abilities": [
      "vital-spirit",
      "hustle",
      "insomnia"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 226,
    "name": "mantine",
    "order": 327,
    "height": 21,
    "weight": 2200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png",
    "types": [
      "water",
      "flying"
    ],
    "abilities": [
      "swift-swim",
      "water-absorb",
      "water-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 140
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 227,
    "name": "skarmory",
    "order": 328,
    "height": 17,
    "weight": 505,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png",
    "types": [
      "steel",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "sturdy",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 140
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 228,
    "name": "houndour",
    "order": 329,
    "height": 6,
    "weight": 108,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png",
    "types": [
      "dark",
      "fire"
    ],
    "abilities": [
      "early-bird",
      "flash-fire",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 229,
    "name": "houndoom",
    "order": 330,
    "height": 14,
    "weight": 350,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png",
    "types": [
      "dark",
      "fire"
    ],
    "abilities": [
      "early-bird",
      "flash-fire",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 230,
    "name": "kingdra",
    "order": 188,
    "height": 18,
    "weight": 1520,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png",
    "types": [
      "water",
      "dragon"
    ],
    "abilities": [
      "swift-swim",
      "sniper",
      "damp"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 231,
    "name": "phanpy",
    "order": 332,
    "height": 5,
    "weight": 335,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "pickup",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 232,
    "name": "donphan",
    "order": 333,
    "height": 11,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "sturdy",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 233,
    "name": "porygon2",
    "order": 226,
    "height": 6,
    "weight": 325,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "trace",
      "download",
      "analytic"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 234,
    "name": "stantler",
    "order": 334,
    "height": 14,
    "weight": 712,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "intimidate",
      "frisk",
      "sap-sipper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 73
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 62
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 235,
    "name": "smeargle",
    "order": 335,
    "height": 12,
    "weight": 580,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "own-tempo",
      "technician",
      "moody"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 20
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 20
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 236,
    "name": "tyrogue",
    "order": 167,
    "height": 7,
    "weight": 210,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "guts",
      "steadfast",
      "vital-spirit"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 237,
    "name": "hitmontop",
    "order": 170,
    "height": 14,
    "weight": 480,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "intimidate",
      "technician",
      "steadfast"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 238,
    "name": "smoochum",
    "order": 199,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png",
    "types": [
      "ice",
      "psychic"
    ],
    "abilities": [
      "oblivious",
      "forewarn",
      "hydration"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 15
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 239,
    "name": "elekid",
    "order": 201,
    "height": 6,
    "weight": 235,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "vital-spirit"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 63
      },
      {
        "name": "defense",
        "baseStat": 37
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 240,
    "name": "magby",
    "order": 204,
    "height": 7,
    "weight": 214,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "flame-body",
      "vital-spirit"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 37
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 83
      }
    ]
  },
  {
    "id": 241,
    "name": "miltank",
    "order": 336,
    "height": 12,
    "weight": 755,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "thick-fat",
      "scrappy",
      "sap-sipper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 242,
    "name": "blissey",
    "order": 181,
    "height": 15,
    "weight": 468,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "natural-cure",
      "serene-grace",
      "healer"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 255
      },
      {
        "name": "attack",
        "baseStat": 10
      },
      {
        "name": "defense",
        "baseStat": 10
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 135
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 243,
    "name": "raikou",
    "order": 337,
    "height": 19,
    "weight": 1780,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "pressure",
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 115
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 244,
    "name": "entei",
    "order": 338,
    "height": 21,
    "weight": 1980,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "pressure",
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 115
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 245,
    "name": "suicune",
    "order": 339,
    "height": 20,
    "weight": 1870,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png",
    "types": [
      "water"
    ],
    "abilities": [
      "pressure",
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 246,
    "name": "larvitar",
    "order": 340,
    "height": 6,
    "weight": 720,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png",
    "types": [
      "rock",
      "ground"
    ],
    "abilities": [
      "guts",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 64
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 41
      }
    ]
  },
  {
    "id": 247,
    "name": "pupitar",
    "order": 341,
    "height": 12,
    "weight": 1520,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png",
    "types": [
      "rock",
      "ground"
    ],
    "abilities": [
      "shed-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 84
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 51
      }
    ]
  },
  {
    "id": 248,
    "name": "tyranitar",
    "order": 342,
    "height": 20,
    "weight": 2020,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png",
    "types": [
      "rock",
      "dark"
    ],
    "abilities": [
      "sand-stream",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 134
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 61
      }
    ]
  },
  {
    "id": 249,
    "name": "lugia",
    "order": 344,
    "height": 52,
    "weight": 2160,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
    "types": [
      "psychic",
      "flying"
    ],
    "abilities": [
      "pressure",
      "multiscale"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 106
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 154
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 250,
    "name": "ho-oh",
    "order": 345,
    "height": 38,
    "weight": 1990,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png",
    "types": [
      "fire",
      "flying"
    ],
    "abilities": [
      "pressure",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 106
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 154
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 251,
    "name": "celebi",
    "order": 346,
    "height": 6,
    "weight": 50,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png",
    "types": [
      "psychic",
      "grass"
    ],
    "abilities": [
      "natural-cure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 252,
    "name": "treecko",
    "order": 347,
    "height": 5,
    "weight": 50,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "unburden"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 253,
    "name": "grovyle",
    "order": 348,
    "height": 9,
    "weight": 216,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "unburden"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 254,
    "name": "sceptile",
    "order": 349,
    "height": 17,
    "weight": 522,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "unburden"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 255,
    "name": "torchic",
    "order": 351,
    "height": 4,
    "weight": 25,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "speed-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 256,
    "name": "combusken",
    "order": 352,
    "height": 9,
    "weight": 195,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png",
    "types": [
      "fire",
      "fighting"
    ],
    "abilities": [
      "blaze",
      "speed-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 257,
    "name": "blaziken",
    "order": 353,
    "height": 19,
    "weight": 520,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png",
    "types": [
      "fire",
      "fighting"
    ],
    "abilities": [
      "blaze",
      "speed-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 258,
    "name": "mudkip",
    "order": 355,
    "height": 4,
    "weight": 76,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "damp"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 259,
    "name": "marshtomp",
    "order": 356,
    "height": 7,
    "weight": 280,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png",
    "types": [
      "water",
      "ground"
    ],
    "abilities": [
      "torrent",
      "damp"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 260,
    "name": "swampert",
    "order": 357,
    "height": 15,
    "weight": 819,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png",
    "types": [
      "water",
      "ground"
    ],
    "abilities": [
      "torrent",
      "damp"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 261,
    "name": "poochyena",
    "order": 359,
    "height": 5,
    "weight": 136,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "run-away",
      "quick-feet",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 262,
    "name": "mightyena",
    "order": 360,
    "height": 10,
    "weight": 370,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "intimidate",
      "quick-feet",
      "moxie"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 263,
    "name": "zigzagoon",
    "order": 361,
    "height": 4,
    "weight": 175,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "pickup",
      "gluttony",
      "quick-feet"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 38
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 41
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 41
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 264,
    "name": "linoone",
    "order": 363,
    "height": 5,
    "weight": 325,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "pickup",
      "gluttony",
      "quick-feet"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 61
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 61
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 265,
    "name": "wurmple",
    "order": 365,
    "height": 3,
    "weight": 36,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "shield-dust",
      "run-away"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 20
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 266,
    "name": "silcoon",
    "order": 366,
    "height": 6,
    "weight": 100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "shed-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 267,
    "name": "beautifly",
    "order": 367,
    "height": 10,
    "weight": 284,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "swarm",
      "rivalry"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 268,
    "name": "cascoon",
    "order": 368,
    "height": 7,
    "weight": 115,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "shed-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 269,
    "name": "dustox",
    "order": 369,
    "height": 12,
    "weight": 316,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "shield-dust",
      "compound-eyes"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 270,
    "name": "lotad",
    "order": 370,
    "height": 5,
    "weight": 26,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png",
    "types": [
      "water",
      "grass"
    ],
    "abilities": [
      "swift-swim",
      "rain-dish",
      "own-tempo"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 271,
    "name": "lombre",
    "order": 371,
    "height": 12,
    "weight": 325,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png",
    "types": [
      "water",
      "grass"
    ],
    "abilities": [
      "swift-swim",
      "rain-dish",
      "own-tempo"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 272,
    "name": "ludicolo",
    "order": 372,
    "height": 15,
    "weight": 550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png",
    "types": [
      "water",
      "grass"
    ],
    "abilities": [
      "swift-swim",
      "rain-dish",
      "own-tempo"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 273,
    "name": "seedot",
    "order": 373,
    "height": 5,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "chlorophyll",
      "early-bird",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 274,
    "name": "nuzleaf",
    "order": 374,
    "height": 10,
    "weight": 280,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png",
    "types": [
      "grass",
      "dark"
    ],
    "abilities": [
      "chlorophyll",
      "early-bird",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 275,
    "name": "shiftry",
    "order": 375,
    "height": 13,
    "weight": 596,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png",
    "types": [
      "grass",
      "dark"
    ],
    "abilities": [
      "chlorophyll",
      "wind-rider",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 276,
    "name": "taillow",
    "order": 376,
    "height": 3,
    "weight": 23,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "guts",
      "scrappy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 277,
    "name": "swellow",
    "order": 377,
    "height": 7,
    "weight": 198,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "guts",
      "scrappy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 125
      }
    ]
  },
  {
    "id": 278,
    "name": "wingull",
    "order": 378,
    "height": 6,
    "weight": 95,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png",
    "types": [
      "water",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "hydration",
      "rain-dish"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 279,
    "name": "pelipper",
    "order": 379,
    "height": 12,
    "weight": 280,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png",
    "types": [
      "water",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "drizzle",
      "rain-dish"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 280,
    "name": "ralts",
    "order": 380,
    "height": 4,
    "weight": 66,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "abilities": [
      "synchronize",
      "trace",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 28
      },
      {
        "name": "attack",
        "baseStat": 25
      },
      {
        "name": "defense",
        "baseStat": 25
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 281,
    "name": "kirlia",
    "order": 381,
    "height": 8,
    "weight": 202,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "abilities": [
      "synchronize",
      "trace",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 38
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 282,
    "name": "gardevoir",
    "order": 382,
    "height": 16,
    "weight": 484,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "abilities": [
      "synchronize",
      "trace",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 283,
    "name": "surskit",
    "order": 386,
    "height": 5,
    "weight": 17,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png",
    "types": [
      "bug",
      "water"
    ],
    "abilities": [
      "swift-swim",
      "rain-dish"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 32
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 52
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 284,
    "name": "masquerain",
    "order": 387,
    "height": 8,
    "weight": 36,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "intimidate",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 62
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 82
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 285,
    "name": "shroomish",
    "order": 388,
    "height": 4,
    "weight": 45,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "effect-spore",
      "poison-heal",
      "quick-feet"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 286,
    "name": "breloom",
    "order": 389,
    "height": 12,
    "weight": 392,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png",
    "types": [
      "grass",
      "fighting"
    ],
    "abilities": [
      "effect-spore",
      "poison-heal",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 287,
    "name": "slakoth",
    "order": 390,
    "height": 8,
    "weight": 240,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "truant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 288,
    "name": "vigoroth",
    "order": 391,
    "height": 14,
    "weight": 465,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "vital-spirit"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 289,
    "name": "slaking",
    "order": 392,
    "height": 20,
    "weight": 1305,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "truant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 150
      },
      {
        "name": "attack",
        "baseStat": 160
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 290,
    "name": "nincada",
    "order": 393,
    "height": 5,
    "weight": 55,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png",
    "types": [
      "bug",
      "ground"
    ],
    "abilities": [
      "compound-eyes",
      "run-away"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 31
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 291,
    "name": "ninjask",
    "order": 394,
    "height": 8,
    "weight": 120,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "speed-boost",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 61
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 160
      }
    ]
  },
  {
    "id": 292,
    "name": "shedinja",
    "order": 395,
    "height": 8,
    "weight": 12,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png",
    "types": [
      "bug",
      "ghost"
    ],
    "abilities": [
      "wonder-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 1
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 293,
    "name": "whismur",
    "order": 396,
    "height": 6,
    "weight": 163,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "soundproof",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 64
      },
      {
        "name": "attack",
        "baseStat": 51
      },
      {
        "name": "defense",
        "baseStat": 23
      },
      {
        "name": "special-attack",
        "baseStat": 51
      },
      {
        "name": "special-defense",
        "baseStat": 23
      },
      {
        "name": "speed",
        "baseStat": 28
      }
    ]
  },
  {
    "id": 294,
    "name": "loudred",
    "order": 397,
    "height": 10,
    "weight": 405,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "soundproof",
      "scrappy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 84
      },
      {
        "name": "attack",
        "baseStat": 71
      },
      {
        "name": "defense",
        "baseStat": 43
      },
      {
        "name": "special-attack",
        "baseStat": 71
      },
      {
        "name": "special-defense",
        "baseStat": 43
      },
      {
        "name": "speed",
        "baseStat": 48
      }
    ]
  },
  {
    "id": 295,
    "name": "exploud",
    "order": 398,
    "height": 15,
    "weight": 840,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "soundproof",
      "scrappy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 104
      },
      {
        "name": "attack",
        "baseStat": 91
      },
      {
        "name": "defense",
        "baseStat": 63
      },
      {
        "name": "special-attack",
        "baseStat": 91
      },
      {
        "name": "special-defense",
        "baseStat": 73
      },
      {
        "name": "speed",
        "baseStat": 68
      }
    ]
  },
  {
    "id": 296,
    "name": "makuhita",
    "order": 399,
    "height": 10,
    "weight": 864,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "thick-fat",
      "guts",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 72
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 20
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 25
      }
    ]
  },
  {
    "id": 297,
    "name": "hariyama",
    "order": 400,
    "height": 23,
    "weight": 2538,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "thick-fat",
      "guts",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 144
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 298,
    "name": "azurill",
    "order": 277,
    "height": 2,
    "weight": 20,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png",
    "types": [
      "normal",
      "fairy"
    ],
    "abilities": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 20
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 20
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 299,
    "name": "nosepass",
    "order": 401,
    "height": 10,
    "weight": 970,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "sturdy",
      "magnet-pull",
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 135
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 300,
    "name": "skitty",
    "order": 403,
    "height": 6,
    "weight": 110,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "cute-charm",
      "normalize",
      "wonder-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 301,
    "name": "delcatty",
    "order": 404,
    "height": 11,
    "weight": 326,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "cute-charm",
      "normalize",
      "wonder-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 302,
    "name": "sableye",
    "order": 405,
    "height": 5,
    "weight": 110,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png",
    "types": [
      "dark",
      "ghost"
    ],
    "abilities": [
      "keen-eye",
      "stall",
      "prankster"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 303,
    "name": "mawile",
    "order": 407,
    "height": 6,
    "weight": 115,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png",
    "types": [
      "steel",
      "fairy"
    ],
    "abilities": [
      "hyper-cutter",
      "intimidate",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 304,
    "name": "aron",
    "order": 409,
    "height": 4,
    "weight": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png",
    "types": [
      "steel",
      "rock"
    ],
    "abilities": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 305,
    "name": "lairon",
    "order": 410,
    "height": 9,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png",
    "types": [
      "steel",
      "rock"
    ],
    "abilities": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 140
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 306,
    "name": "aggron",
    "order": 411,
    "height": 21,
    "weight": 3600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png",
    "types": [
      "steel",
      "rock"
    ],
    "abilities": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 180
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 307,
    "name": "meditite",
    "order": 413,
    "height": 6,
    "weight": 112,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "abilities": [
      "pure-power",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 308,
    "name": "medicham",
    "order": 414,
    "height": 13,
    "weight": 315,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "abilities": [
      "pure-power",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 309,
    "name": "electrike",
    "order": 416,
    "height": 6,
    "weight": 152,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod",
      "minus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 310,
    "name": "manectric",
    "order": 417,
    "height": 15,
    "weight": 402,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod",
      "minus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 311,
    "name": "plusle",
    "order": 419,
    "height": 4,
    "weight": 42,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "plus",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 312,
    "name": "minun",
    "order": 420,
    "height": 4,
    "weight": 42,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "minus",
      "volt-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 313,
    "name": "volbeat",
    "order": 421,
    "height": 7,
    "weight": 177,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "illuminate",
      "swarm",
      "prankster"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 73
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 47
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 314,
    "name": "illumise",
    "order": 422,
    "height": 6,
    "weight": 177,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "oblivious",
      "tinted-lens",
      "prankster"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 47
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 73
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 315,
    "name": "roselia",
    "order": 424,
    "height": 3,
    "weight": 20,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "natural-cure",
      "poison-point",
      "leaf-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 316,
    "name": "gulpin",
    "order": 426,
    "height": 4,
    "weight": 103,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "liquid-ooze",
      "sticky-hold",
      "gluttony"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 43
      },
      {
        "name": "defense",
        "baseStat": 53
      },
      {
        "name": "special-attack",
        "baseStat": 43
      },
      {
        "name": "special-defense",
        "baseStat": 53
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 317,
    "name": "swalot",
    "order": 427,
    "height": 17,
    "weight": 800,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "liquid-ooze",
      "sticky-hold",
      "gluttony"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 73
      },
      {
        "name": "defense",
        "baseStat": 83
      },
      {
        "name": "special-attack",
        "baseStat": 73
      },
      {
        "name": "special-defense",
        "baseStat": 83
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 318,
    "name": "carvanha",
    "order": 428,
    "height": 8,
    "weight": 208,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png",
    "types": [
      "water",
      "dark"
    ],
    "abilities": [
      "rough-skin",
      "speed-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 20
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 20
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 319,
    "name": "sharpedo",
    "order": 429,
    "height": 18,
    "weight": 888,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png",
    "types": [
      "water",
      "dark"
    ],
    "abilities": [
      "rough-skin",
      "speed-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 320,
    "name": "wailmer",
    "order": 431,
    "height": 20,
    "weight": 1300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png",
    "types": [
      "water"
    ],
    "abilities": [
      "water-veil",
      "oblivious",
      "pressure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 130
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 321,
    "name": "wailord",
    "order": 432,
    "height": 145,
    "weight": 3980,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png",
    "types": [
      "water"
    ],
    "abilities": [
      "water-veil",
      "oblivious",
      "pressure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 170
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 322,
    "name": "numel",
    "order": 433,
    "height": 7,
    "weight": 240,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png",
    "types": [
      "fire",
      "ground"
    ],
    "abilities": [
      "oblivious",
      "simple",
      "own-tempo"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 323,
    "name": "camerupt",
    "order": 434,
    "height": 19,
    "weight": 2200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png",
    "types": [
      "fire",
      "ground"
    ],
    "abilities": [
      "magma-armor",
      "solid-rock",
      "anger-point"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 324,
    "name": "torkoal",
    "order": 436,
    "height": 5,
    "weight": 804,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "white-smoke",
      "drought",
      "shell-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 140
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 325,
    "name": "spoink",
    "order": 437,
    "height": 7,
    "weight": 306,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "thick-fat",
      "own-tempo",
      "gluttony"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 25
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 326,
    "name": "grumpig",
    "order": 438,
    "height": 9,
    "weight": 715,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "thick-fat",
      "own-tempo",
      "gluttony"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 327,
    "name": "spinda",
    "order": 439,
    "height": 11,
    "weight": 50,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "own-tempo",
      "tangled-feet",
      "contrary"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 328,
    "name": "trapinch",
    "order": 440,
    "height": 7,
    "weight": 150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "hyper-cutter",
      "arena-trap",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 10
      }
    ]
  },
  {
    "id": 329,
    "name": "vibrava",
    "order": 441,
    "height": 11,
    "weight": 153,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png",
    "types": [
      "ground",
      "dragon"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 330,
    "name": "flygon",
    "order": 442,
    "height": 20,
    "weight": 820,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png",
    "types": [
      "ground",
      "dragon"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 331,
    "name": "cacnea",
    "order": 443,
    "height": 4,
    "weight": 513,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "sand-veil",
      "water-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 332,
    "name": "cacturne",
    "order": 444,
    "height": 13,
    "weight": 774,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png",
    "types": [
      "grass",
      "dark"
    ],
    "abilities": [
      "sand-veil",
      "water-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 115
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 333,
    "name": "swablu",
    "order": 445,
    "height": 4,
    "weight": 12,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "natural-cure",
      "cloud-nine"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 334,
    "name": "altaria",
    "order": 446,
    "height": 11,
    "weight": 206,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png",
    "types": [
      "dragon",
      "flying"
    ],
    "abilities": [
      "natural-cure",
      "cloud-nine"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 335,
    "name": "zangoose",
    "order": 448,
    "height": 13,
    "weight": 403,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "immunity",
      "toxic-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 73
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 336,
    "name": "seviper",
    "order": 449,
    "height": 27,
    "weight": 525,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "shed-skin",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 73
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 337,
    "name": "lunatone",
    "order": 450,
    "height": 10,
    "weight": 1680,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png",
    "types": [
      "rock",
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 338,
    "name": "solrock",
    "order": 451,
    "height": 12,
    "weight": 1540,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png",
    "types": [
      "rock",
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 339,
    "name": "barboach",
    "order": 452,
    "height": 4,
    "weight": 19,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png",
    "types": [
      "water",
      "ground"
    ],
    "abilities": [
      "oblivious",
      "anticipation",
      "hydration"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 48
      },
      {
        "name": "defense",
        "baseStat": 43
      },
      {
        "name": "special-attack",
        "baseStat": 46
      },
      {
        "name": "special-defense",
        "baseStat": 41
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 340,
    "name": "whiscash",
    "order": 453,
    "height": 9,
    "weight": 236,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png",
    "types": [
      "water",
      "ground"
    ],
    "abilities": [
      "oblivious",
      "anticipation",
      "hydration"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 78
      },
      {
        "name": "defense",
        "baseStat": 73
      },
      {
        "name": "special-attack",
        "baseStat": 76
      },
      {
        "name": "special-defense",
        "baseStat": 71
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 341,
    "name": "corphish",
    "order": 454,
    "height": 6,
    "weight": 115,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png",
    "types": [
      "water"
    ],
    "abilities": [
      "hyper-cutter",
      "shell-armor",
      "adaptability"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 43
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 342,
    "name": "crawdaunt",
    "order": 455,
    "height": 11,
    "weight": 328,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png",
    "types": [
      "water",
      "dark"
    ],
    "abilities": [
      "hyper-cutter",
      "shell-armor",
      "adaptability"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 63
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 343,
    "name": "baltoy",
    "order": 456,
    "height": 5,
    "weight": 215,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png",
    "types": [
      "ground",
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 344,
    "name": "claydol",
    "order": 457,
    "height": 15,
    "weight": 1080,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png",
    "types": [
      "ground",
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 345,
    "name": "lileep",
    "order": 458,
    "height": 10,
    "weight": 238,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png",
    "types": [
      "rock",
      "grass"
    ],
    "abilities": [
      "suction-cups",
      "storm-drain"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 66
      },
      {
        "name": "attack",
        "baseStat": 41
      },
      {
        "name": "defense",
        "baseStat": 77
      },
      {
        "name": "special-attack",
        "baseStat": 61
      },
      {
        "name": "special-defense",
        "baseStat": 87
      },
      {
        "name": "speed",
        "baseStat": 23
      }
    ]
  },
  {
    "id": 346,
    "name": "cradily",
    "order": 459,
    "height": 15,
    "weight": 604,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png",
    "types": [
      "rock",
      "grass"
    ],
    "abilities": [
      "suction-cups",
      "storm-drain"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 86
      },
      {
        "name": "attack",
        "baseStat": 81
      },
      {
        "name": "defense",
        "baseStat": 97
      },
      {
        "name": "special-attack",
        "baseStat": 81
      },
      {
        "name": "special-defense",
        "baseStat": 107
      },
      {
        "name": "speed",
        "baseStat": 43
      }
    ]
  },
  {
    "id": 347,
    "name": "anorith",
    "order": 460,
    "height": 7,
    "weight": 125,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png",
    "types": [
      "rock",
      "bug"
    ],
    "abilities": [
      "battle-armor",
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 348,
    "name": "armaldo",
    "order": 461,
    "height": 15,
    "weight": 682,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png",
    "types": [
      "rock",
      "bug"
    ],
    "abilities": [
      "battle-armor",
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 349,
    "name": "feebas",
    "order": 462,
    "height": 6,
    "weight": 74,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "oblivious",
      "adaptability"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 20
      },
      {
        "name": "attack",
        "baseStat": 15
      },
      {
        "name": "defense",
        "baseStat": 20
      },
      {
        "name": "special-attack",
        "baseStat": 10
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 350,
    "name": "milotic",
    "order": 463,
    "height": 62,
    "weight": 1620,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png",
    "types": [
      "water"
    ],
    "abilities": [
      "marvel-scale",
      "competitive",
      "cute-charm"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 79
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 125
      },
      {
        "name": "speed",
        "baseStat": 81
      }
    ]
  },
  {
    "id": 351,
    "name": "castform",
    "order": 464,
    "height": 3,
    "weight": 8,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "forecast"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 352,
    "name": "kecleon",
    "order": 468,
    "height": 10,
    "weight": 220,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "color-change",
      "protean"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 353,
    "name": "shuppet",
    "order": 469,
    "height": 6,
    "weight": 23,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "insomnia",
      "frisk",
      "cursed-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 44
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 63
      },
      {
        "name": "special-defense",
        "baseStat": 33
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 354,
    "name": "banette",
    "order": 470,
    "height": 11,
    "weight": 125,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "insomnia",
      "frisk",
      "cursed-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 64
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 83
      },
      {
        "name": "special-defense",
        "baseStat": 63
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 355,
    "name": "duskull",
    "order": 472,
    "height": 8,
    "weight": 150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "levitate",
      "frisk"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 20
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 25
      }
    ]
  },
  {
    "id": 356,
    "name": "dusclops",
    "order": 473,
    "height": 16,
    "weight": 306,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "pressure",
      "frisk"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 130
      },
      {
        "name": "speed",
        "baseStat": 25
      }
    ]
  },
  {
    "id": 357,
    "name": "tropius",
    "order": 475,
    "height": 20,
    "weight": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png",
    "types": [
      "grass",
      "flying"
    ],
    "abilities": [
      "chlorophyll",
      "solar-power",
      "harvest"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 99
      },
      {
        "name": "attack",
        "baseStat": 68
      },
      {
        "name": "defense",
        "baseStat": 83
      },
      {
        "name": "special-attack",
        "baseStat": 72
      },
      {
        "name": "special-defense",
        "baseStat": 87
      },
      {
        "name": "speed",
        "baseStat": 51
      }
    ]
  },
  {
    "id": 358,
    "name": "chimecho",
    "order": 477,
    "height": 6,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 359,
    "name": "absol",
    "order": 478,
    "height": 12,
    "weight": 470,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "pressure",
      "super-luck",
      "justified"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 360,
    "name": "wynaut",
    "order": 298,
    "height": 6,
    "weight": 140,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "shadow-tag",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 23
      },
      {
        "name": "defense",
        "baseStat": 48
      },
      {
        "name": "special-attack",
        "baseStat": 23
      },
      {
        "name": "special-defense",
        "baseStat": 48
      },
      {
        "name": "speed",
        "baseStat": 23
      }
    ]
  },
  {
    "id": 361,
    "name": "snorunt",
    "order": 480,
    "height": 7,
    "weight": 168,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "inner-focus",
      "ice-body",
      "moody"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 362,
    "name": "glalie",
    "order": 481,
    "height": 15,
    "weight": 2565,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "inner-focus",
      "ice-body",
      "moody"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 363,
    "name": "spheal",
    "order": 484,
    "height": 8,
    "weight": 395,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png",
    "types": [
      "ice",
      "water"
    ],
    "abilities": [
      "thick-fat",
      "ice-body",
      "oblivious"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 25
      }
    ]
  },
  {
    "id": 364,
    "name": "sealeo",
    "order": 485,
    "height": 11,
    "weight": 876,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png",
    "types": [
      "ice",
      "water"
    ],
    "abilities": [
      "thick-fat",
      "ice-body",
      "oblivious"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 365,
    "name": "walrein",
    "order": 486,
    "height": 14,
    "weight": 1506,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png",
    "types": [
      "ice",
      "water"
    ],
    "abilities": [
      "thick-fat",
      "ice-body",
      "oblivious"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 366,
    "name": "clamperl",
    "order": 487,
    "height": 4,
    "weight": 525,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png",
    "types": [
      "water"
    ],
    "abilities": [
      "shell-armor",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 64
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 74
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 32
      }
    ]
  },
  {
    "id": 367,
    "name": "huntail",
    "order": 488,
    "height": 17,
    "weight": 270,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "water-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 104
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 94
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 52
      }
    ]
  },
  {
    "id": 368,
    "name": "gorebyss",
    "order": 489,
    "height": 18,
    "weight": 226,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "hydration"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 84
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 114
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 52
      }
    ]
  },
  {
    "id": 369,
    "name": "relicanth",
    "order": 490,
    "height": 10,
    "weight": 234,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png",
    "types": [
      "water",
      "rock"
    ],
    "abilities": [
      "swift-swim",
      "rock-head",
      "sturdy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 370,
    "name": "luvdisc",
    "order": 491,
    "height": 6,
    "weight": 87,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "hydration"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 43
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 97
      }
    ]
  },
  {
    "id": 371,
    "name": "bagon",
    "order": 492,
    "height": 6,
    "weight": 421,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png",
    "types": [
      "dragon"
    ],
    "abilities": [
      "rock-head",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 372,
    "name": "shelgon",
    "order": 493,
    "height": 11,
    "weight": 1105,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png",
    "types": [
      "dragon"
    ],
    "abilities": [
      "rock-head",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 373,
    "name": "salamence",
    "order": 494,
    "height": 15,
    "weight": 1026,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png",
    "types": [
      "dragon",
      "flying"
    ],
    "abilities": [
      "intimidate",
      "moxie"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 374,
    "name": "beldum",
    "order": 496,
    "height": 6,
    "weight": 952,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png",
    "types": [
      "steel",
      "psychic"
    ],
    "abilities": [
      "clear-body",
      "light-metal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 375,
    "name": "metang",
    "order": 497,
    "height": 12,
    "weight": 2025,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png",
    "types": [
      "steel",
      "psychic"
    ],
    "abilities": [
      "clear-body",
      "light-metal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 376,
    "name": "metagross",
    "order": 498,
    "height": 16,
    "weight": 5500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png",
    "types": [
      "steel",
      "psychic"
    ],
    "abilities": [
      "clear-body",
      "light-metal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 377,
    "name": "regirock",
    "order": 500,
    "height": 17,
    "weight": 2300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "clear-body",
      "sturdy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 200
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 378,
    "name": "regice",
    "order": 501,
    "height": 18,
    "weight": 1750,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "clear-body",
      "ice-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 200
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 379,
    "name": "registeel",
    "order": 502,
    "height": 19,
    "weight": 2050,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "clear-body",
      "light-metal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 150
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 150
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 380,
    "name": "latias",
    "order": 503,
    "height": 14,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 130
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 381,
    "name": "latios",
    "order": 505,
    "height": 20,
    "weight": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 382,
    "name": "kyogre",
    "order": 507,
    "height": 45,
    "weight": 3520,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png",
    "types": [
      "water"
    ],
    "abilities": [
      "drizzle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 150
      },
      {
        "name": "special-defense",
        "baseStat": 140
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 383,
    "name": "groudon",
    "order": 509,
    "height": 35,
    "weight": 9500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "drought"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 150
      },
      {
        "name": "defense",
        "baseStat": 140
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 384,
    "name": "rayquaza",
    "order": 511,
    "height": 70,
    "weight": 2065,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
    "types": [
      "dragon",
      "flying"
    ],
    "abilities": [
      "air-lock"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 150
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 150
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 385,
    "name": "jirachi",
    "order": 513,
    "height": 3,
    "weight": 11,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png",
    "types": [
      "steel",
      "psychic"
    ],
    "abilities": [
      "serene-grace"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 386,
    "name": "deoxys-normal",
    "order": 514,
    "height": 17,
    "weight": 608,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "pressure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 150
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 150
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 150
      }
    ]
  },
  {
    "id": 387,
    "name": "turtwig",
    "order": 518,
    "height": 4,
    "weight": 102,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "shell-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 68
      },
      {
        "name": "defense",
        "baseStat": 64
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 31
      }
    ]
  },
  {
    "id": 388,
    "name": "grotle",
    "order": 519,
    "height": 11,
    "weight": 970,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "shell-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 89
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 36
      }
    ]
  },
  {
    "id": 389,
    "name": "torterra",
    "order": 520,
    "height": 22,
    "weight": 3100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png",
    "types": [
      "grass",
      "ground"
    ],
    "abilities": [
      "overgrow",
      "shell-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 109
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 56
      }
    ]
  },
  {
    "id": 390,
    "name": "chimchar",
    "order": 521,
    "height": 5,
    "weight": 62,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "iron-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 44
      },
      {
        "name": "attack",
        "baseStat": 58
      },
      {
        "name": "defense",
        "baseStat": 44
      },
      {
        "name": "special-attack",
        "baseStat": 58
      },
      {
        "name": "special-defense",
        "baseStat": 44
      },
      {
        "name": "speed",
        "baseStat": 61
      }
    ]
  },
  {
    "id": 391,
    "name": "monferno",
    "order": 522,
    "height": 9,
    "weight": 220,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png",
    "types": [
      "fire",
      "fighting"
    ],
    "abilities": [
      "blaze",
      "iron-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 64
      },
      {
        "name": "attack",
        "baseStat": 78
      },
      {
        "name": "defense",
        "baseStat": 52
      },
      {
        "name": "special-attack",
        "baseStat": 78
      },
      {
        "name": "special-defense",
        "baseStat": 52
      },
      {
        "name": "speed",
        "baseStat": 81
      }
    ]
  },
  {
    "id": 392,
    "name": "infernape",
    "order": 523,
    "height": 12,
    "weight": 550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png",
    "types": [
      "fire",
      "fighting"
    ],
    "abilities": [
      "blaze",
      "iron-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 76
      },
      {
        "name": "attack",
        "baseStat": 104
      },
      {
        "name": "defense",
        "baseStat": 71
      },
      {
        "name": "special-attack",
        "baseStat": 104
      },
      {
        "name": "special-defense",
        "baseStat": 71
      },
      {
        "name": "speed",
        "baseStat": 108
      }
    ]
  },
  {
    "id": 393,
    "name": "piplup",
    "order": 524,
    "height": 4,
    "weight": 52,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "competitive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 53
      },
      {
        "name": "attack",
        "baseStat": 51
      },
      {
        "name": "defense",
        "baseStat": 53
      },
      {
        "name": "special-attack",
        "baseStat": 61
      },
      {
        "name": "special-defense",
        "baseStat": 56
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 394,
    "name": "prinplup",
    "order": 525,
    "height": 8,
    "weight": 230,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "competitive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 64
      },
      {
        "name": "attack",
        "baseStat": 66
      },
      {
        "name": "defense",
        "baseStat": 68
      },
      {
        "name": "special-attack",
        "baseStat": 81
      },
      {
        "name": "special-defense",
        "baseStat": 76
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 395,
    "name": "empoleon",
    "order": 526,
    "height": 17,
    "weight": 845,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png",
    "types": [
      "water",
      "steel"
    ],
    "abilities": [
      "torrent",
      "competitive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 84
      },
      {
        "name": "attack",
        "baseStat": 86
      },
      {
        "name": "defense",
        "baseStat": 88
      },
      {
        "name": "special-attack",
        "baseStat": 111
      },
      {
        "name": "special-defense",
        "baseStat": 101
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 396,
    "name": "starly",
    "order": 527,
    "height": 3,
    "weight": 20,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "reckless"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 397,
    "name": "staravia",
    "order": 528,
    "height": 6,
    "weight": 155,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "intimidate",
      "reckless"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 398,
    "name": "staraptor",
    "order": 529,
    "height": 12,
    "weight": 249,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "intimidate",
      "reckless"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 399,
    "name": "bidoof",
    "order": 530,
    "height": 5,
    "weight": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "simple",
      "unaware",
      "moody"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 59
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 31
      }
    ]
  },
  {
    "id": 400,
    "name": "bibarel",
    "order": 531,
    "height": 10,
    "weight": 315,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png",
    "types": [
      "normal",
      "water"
    ],
    "abilities": [
      "simple",
      "unaware",
      "moody"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 79
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 71
      }
    ]
  },
  {
    "id": 401,
    "name": "kricketot",
    "order": 532,
    "height": 3,
    "weight": 22,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "shed-skin",
      "run-away"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 37
      },
      {
        "name": "attack",
        "baseStat": 25
      },
      {
        "name": "defense",
        "baseStat": 41
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 41
      },
      {
        "name": "speed",
        "baseStat": 25
      }
    ]
  },
  {
    "id": 402,
    "name": "kricketune",
    "order": 533,
    "height": 10,
    "weight": 255,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "swarm",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 77
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 51
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 51
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 403,
    "name": "shinx",
    "order": 534,
    "height": 5,
    "weight": 95,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "rivalry",
      "intimidate",
      "guts"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 34
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 34
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 404,
    "name": "luxio",
    "order": 535,
    "height": 9,
    "weight": 305,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "rivalry",
      "intimidate",
      "guts"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 49
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 49
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 405,
    "name": "luxray",
    "order": 536,
    "height": 14,
    "weight": 420,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "rivalry",
      "intimidate",
      "guts"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 79
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 79
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 406,
    "name": "budew",
    "order": 423,
    "height": 2,
    "weight": 12,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "natural-cure",
      "poison-point",
      "leaf-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 407,
    "name": "roserade",
    "order": 425,
    "height": 9,
    "weight": 145,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "natural-cure",
      "poison-point",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 408,
    "name": "cranidos",
    "order": 537,
    "height": 9,
    "weight": 315,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "mold-breaker",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 67
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 58
      }
    ]
  },
  {
    "id": 409,
    "name": "rampardos",
    "order": 538,
    "height": 16,
    "weight": 1025,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "mold-breaker",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 97
      },
      {
        "name": "attack",
        "baseStat": 165
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 58
      }
    ]
  },
  {
    "id": 410,
    "name": "shieldon",
    "order": 539,
    "height": 5,
    "weight": 570,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png",
    "types": [
      "rock",
      "steel"
    ],
    "abilities": [
      "sturdy",
      "soundproof"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 42
      },
      {
        "name": "defense",
        "baseStat": 118
      },
      {
        "name": "special-attack",
        "baseStat": 42
      },
      {
        "name": "special-defense",
        "baseStat": 88
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 411,
    "name": "bastiodon",
    "order": 540,
    "height": 13,
    "weight": 1495,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png",
    "types": [
      "rock",
      "steel"
    ],
    "abilities": [
      "sturdy",
      "soundproof"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 52
      },
      {
        "name": "defense",
        "baseStat": 168
      },
      {
        "name": "special-attack",
        "baseStat": 47
      },
      {
        "name": "special-defense",
        "baseStat": 138
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 412,
    "name": "burmy",
    "order": 541,
    "height": 2,
    "weight": 34,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "shed-skin",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 29
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 29
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 36
      }
    ]
  },
  {
    "id": 413,
    "name": "wormadam-plant",
    "order": 542,
    "height": 5,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png",
    "types": [
      "bug",
      "grass"
    ],
    "abilities": [
      "anticipation",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 59
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 79
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 36
      }
    ]
  },
  {
    "id": 414,
    "name": "mothim",
    "order": 545,
    "height": 9,
    "weight": 233,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "swarm",
      "tinted-lens"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 94
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 94
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 66
      }
    ]
  },
  {
    "id": 415,
    "name": "combee",
    "order": 546,
    "height": 3,
    "weight": 55,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "honey-gather",
      "hustle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 42
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 42
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 416,
    "name": "vespiquen",
    "order": 547,
    "height": 12,
    "weight": 385,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "pressure",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 102
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 102
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 417,
    "name": "pachirisu",
    "order": 548,
    "height": 4,
    "weight": 39,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "run-away",
      "pickup",
      "volt-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 418,
    "name": "buizel",
    "order": 549,
    "height": 7,
    "weight": 295,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "water-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 419,
    "name": "floatzel",
    "order": 550,
    "height": 11,
    "weight": 335,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "water-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 420,
    "name": "cherubi",
    "order": 551,
    "height": 4,
    "weight": 33,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "chlorophyll"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 62
      },
      {
        "name": "special-defense",
        "baseStat": 53
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 421,
    "name": "cherrim",
    "order": 552,
    "height": 5,
    "weight": 93,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "flower-gift"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 87
      },
      {
        "name": "special-defense",
        "baseStat": 78
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 422,
    "name": "shellos",
    "order": 553,
    "height": 3,
    "weight": 63,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png",
    "types": [
      "water"
    ],
    "abilities": [
      "sticky-hold",
      "storm-drain",
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 76
      },
      {
        "name": "attack",
        "baseStat": 48
      },
      {
        "name": "defense",
        "baseStat": 48
      },
      {
        "name": "special-attack",
        "baseStat": 57
      },
      {
        "name": "special-defense",
        "baseStat": 62
      },
      {
        "name": "speed",
        "baseStat": 34
      }
    ]
  },
  {
    "id": 423,
    "name": "gastrodon",
    "order": 554,
    "height": 9,
    "weight": 299,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png",
    "types": [
      "water",
      "ground"
    ],
    "abilities": [
      "sticky-hold",
      "storm-drain",
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 111
      },
      {
        "name": "attack",
        "baseStat": 83
      },
      {
        "name": "defense",
        "baseStat": 68
      },
      {
        "name": "special-attack",
        "baseStat": 92
      },
      {
        "name": "special-defense",
        "baseStat": 82
      },
      {
        "name": "speed",
        "baseStat": 39
      }
    ]
  },
  {
    "id": 424,
    "name": "ambipom",
    "order": 286,
    "height": 12,
    "weight": 203,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "technician",
      "pickup",
      "skill-link"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 66
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 66
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 425,
    "name": "drifloon",
    "order": 555,
    "height": 4,
    "weight": 12,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png",
    "types": [
      "ghost",
      "flying"
    ],
    "abilities": [
      "aftermath",
      "unburden",
      "flare-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 34
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 44
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 426,
    "name": "drifblim",
    "order": 556,
    "height": 12,
    "weight": 150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png",
    "types": [
      "ghost",
      "flying"
    ],
    "abilities": [
      "aftermath",
      "unburden",
      "flare-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 150
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 44
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 54
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 427,
    "name": "buneary",
    "order": 557,
    "height": 4,
    "weight": 55,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "run-away",
      "klutz",
      "limber"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 66
      },
      {
        "name": "defense",
        "baseStat": 44
      },
      {
        "name": "special-attack",
        "baseStat": 44
      },
      {
        "name": "special-defense",
        "baseStat": 56
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 428,
    "name": "lopunny",
    "order": 558,
    "height": 12,
    "weight": 333,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "cute-charm",
      "klutz",
      "limber"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 76
      },
      {
        "name": "defense",
        "baseStat": 84
      },
      {
        "name": "special-attack",
        "baseStat": 54
      },
      {
        "name": "special-defense",
        "baseStat": 96
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 429,
    "name": "mismagius",
    "order": 296,
    "height": 9,
    "weight": 44,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 430,
    "name": "honchkrow",
    "order": 294,
    "height": 9,
    "weight": 273,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png",
    "types": [
      "dark",
      "flying"
    ],
    "abilities": [
      "insomnia",
      "super-luck",
      "moxie"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 52
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 52
      },
      {
        "name": "speed",
        "baseStat": 71
      }
    ]
  },
  {
    "id": 431,
    "name": "glameow",
    "order": 560,
    "height": 5,
    "weight": 39,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "limber",
      "own-tempo",
      "keen-eye"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 49
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 42
      },
      {
        "name": "special-attack",
        "baseStat": 42
      },
      {
        "name": "special-defense",
        "baseStat": 37
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 432,
    "name": "purugly",
    "order": 561,
    "height": 10,
    "weight": 438,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "thick-fat",
      "own-tempo",
      "defiant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 71
      },
      {
        "name": "attack",
        "baseStat": 82
      },
      {
        "name": "defense",
        "baseStat": 64
      },
      {
        "name": "special-attack",
        "baseStat": 64
      },
      {
        "name": "special-defense",
        "baseStat": 59
      },
      {
        "name": "speed",
        "baseStat": 112
      }
    ]
  },
  {
    "id": 433,
    "name": "chingling",
    "order": 476,
    "height": 2,
    "weight": 6,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 434,
    "name": "stunky",
    "order": 562,
    "height": 4,
    "weight": 192,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png",
    "types": [
      "poison",
      "dark"
    ],
    "abilities": [
      "stench",
      "aftermath",
      "keen-eye"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 63
      },
      {
        "name": "attack",
        "baseStat": 63
      },
      {
        "name": "defense",
        "baseStat": 47
      },
      {
        "name": "special-attack",
        "baseStat": 41
      },
      {
        "name": "special-defense",
        "baseStat": 41
      },
      {
        "name": "speed",
        "baseStat": 74
      }
    ]
  },
  {
    "id": 435,
    "name": "skuntank",
    "order": 563,
    "height": 10,
    "weight": 380,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png",
    "types": [
      "poison",
      "dark"
    ],
    "abilities": [
      "stench",
      "aftermath",
      "keen-eye"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 103
      },
      {
        "name": "attack",
        "baseStat": 93
      },
      {
        "name": "defense",
        "baseStat": 67
      },
      {
        "name": "special-attack",
        "baseStat": 71
      },
      {
        "name": "special-defense",
        "baseStat": 61
      },
      {
        "name": "speed",
        "baseStat": 84
      }
    ]
  },
  {
    "id": 436,
    "name": "bronzor",
    "order": 564,
    "height": 5,
    "weight": 605,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png",
    "types": [
      "steel",
      "psychic"
    ],
    "abilities": [
      "levitate",
      "heatproof",
      "heavy-metal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 57
      },
      {
        "name": "attack",
        "baseStat": 24
      },
      {
        "name": "defense",
        "baseStat": 86
      },
      {
        "name": "special-attack",
        "baseStat": 24
      },
      {
        "name": "special-defense",
        "baseStat": 86
      },
      {
        "name": "speed",
        "baseStat": 23
      }
    ]
  },
  {
    "id": 437,
    "name": "bronzong",
    "order": 565,
    "height": 13,
    "weight": 1870,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png",
    "types": [
      "steel",
      "psychic"
    ],
    "abilities": [
      "levitate",
      "heatproof",
      "heavy-metal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 67
      },
      {
        "name": "attack",
        "baseStat": 89
      },
      {
        "name": "defense",
        "baseStat": 116
      },
      {
        "name": "special-attack",
        "baseStat": 79
      },
      {
        "name": "special-defense",
        "baseStat": 116
      },
      {
        "name": "speed",
        "baseStat": 33
      }
    ]
  },
  {
    "id": 438,
    "name": "bonsly",
    "order": 280,
    "height": 5,
    "weight": 150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "sturdy",
      "rock-head",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 10
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 10
      }
    ]
  },
  {
    "id": 439,
    "name": "mime-jr",
    "order": 193,
    "height": 6,
    "weight": 130,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "abilities": [
      "soundproof",
      "filter",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 20
      },
      {
        "name": "attack",
        "baseStat": 25
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 440,
    "name": "happiny",
    "order": 179,
    "height": 6,
    "weight": 244,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "natural-cure",
      "serene-grace",
      "friend-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 5
      },
      {
        "name": "defense",
        "baseStat": 5
      },
      {
        "name": "special-attack",
        "baseStat": 15
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 441,
    "name": "chatot",
    "order": 566,
    "height": 5,
    "weight": 19,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 76
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 92
      },
      {
        "name": "special-defense",
        "baseStat": 42
      },
      {
        "name": "speed",
        "baseStat": 91
      }
    ]
  },
  {
    "id": 442,
    "name": "spiritomb",
    "order": 567,
    "height": 10,
    "weight": 1080,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png",
    "types": [
      "ghost",
      "dark"
    ],
    "abilities": [
      "pressure",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 92
      },
      {
        "name": "defense",
        "baseStat": 108
      },
      {
        "name": "special-attack",
        "baseStat": 92
      },
      {
        "name": "special-defense",
        "baseStat": 108
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 443,
    "name": "gible",
    "order": 568,
    "height": 7,
    "weight": 205,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png",
    "types": [
      "dragon",
      "ground"
    ],
    "abilities": [
      "sand-veil",
      "rough-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 58
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 42
      }
    ]
  },
  {
    "id": 444,
    "name": "gabite",
    "order": 569,
    "height": 14,
    "weight": 560,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png",
    "types": [
      "dragon",
      "ground"
    ],
    "abilities": [
      "sand-veil",
      "rough-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 82
      }
    ]
  },
  {
    "id": 445,
    "name": "garchomp",
    "order": 570,
    "height": 19,
    "weight": 950,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png",
    "types": [
      "dragon",
      "ground"
    ],
    "abilities": [
      "sand-veil",
      "rough-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 108
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 102
      }
    ]
  },
  {
    "id": 446,
    "name": "munchlax",
    "order": 234,
    "height": 6,
    "weight": 1050,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "pickup",
      "thick-fat",
      "gluttony"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 135
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 5
      }
    ]
  },
  {
    "id": 447,
    "name": "riolu",
    "order": 572,
    "height": 7,
    "weight": 202,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "steadfast",
      "inner-focus",
      "prankster"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 448,
    "name": "lucario",
    "order": 573,
    "height": 12,
    "weight": 540,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png",
    "types": [
      "fighting",
      "steel"
    ],
    "abilities": [
      "steadfast",
      "inner-focus",
      "justified"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 115
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 449,
    "name": "hippopotas",
    "order": 575,
    "height": 8,
    "weight": 495,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "sand-stream",
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 72
      },
      {
        "name": "defense",
        "baseStat": 78
      },
      {
        "name": "special-attack",
        "baseStat": 38
      },
      {
        "name": "special-defense",
        "baseStat": 42
      },
      {
        "name": "speed",
        "baseStat": 32
      }
    ]
  },
  {
    "id": 450,
    "name": "hippowdon",
    "order": 576,
    "height": 20,
    "weight": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "sand-stream",
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 108
      },
      {
        "name": "attack",
        "baseStat": 112
      },
      {
        "name": "defense",
        "baseStat": 118
      },
      {
        "name": "special-attack",
        "baseStat": 68
      },
      {
        "name": "special-defense",
        "baseStat": 72
      },
      {
        "name": "speed",
        "baseStat": 47
      }
    ]
  },
  {
    "id": 451,
    "name": "skorupi",
    "order": 577,
    "height": 8,
    "weight": 120,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png",
    "types": [
      "poison",
      "bug"
    ],
    "abilities": [
      "battle-armor",
      "sniper",
      "keen-eye"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 452,
    "name": "drapion",
    "order": 578,
    "height": 13,
    "weight": 615,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png",
    "types": [
      "poison",
      "dark"
    ],
    "abilities": [
      "battle-armor",
      "sniper",
      "keen-eye"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 453,
    "name": "croagunk",
    "order": 579,
    "height": 7,
    "weight": 230,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png",
    "types": [
      "poison",
      "fighting"
    ],
    "abilities": [
      "anticipation",
      "dry-skin",
      "poison-touch"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 48
      },
      {
        "name": "attack",
        "baseStat": 61
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 61
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 454,
    "name": "toxicroak",
    "order": 580,
    "height": 13,
    "weight": 444,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png",
    "types": [
      "poison",
      "fighting"
    ],
    "abilities": [
      "anticipation",
      "dry-skin",
      "poison-touch"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 83
      },
      {
        "name": "attack",
        "baseStat": 106
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 86
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 455,
    "name": "carnivine",
    "order": 581,
    "height": 14,
    "weight": 270,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 74
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 72
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 72
      },
      {
        "name": "speed",
        "baseStat": 46
      }
    ]
  },
  {
    "id": 456,
    "name": "finneon",
    "order": 582,
    "height": 4,
    "weight": 70,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "storm-drain",
      "water-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 49
      },
      {
        "name": "attack",
        "baseStat": 49
      },
      {
        "name": "defense",
        "baseStat": 56
      },
      {
        "name": "special-attack",
        "baseStat": 49
      },
      {
        "name": "special-defense",
        "baseStat": 61
      },
      {
        "name": "speed",
        "baseStat": 66
      }
    ]
  },
  {
    "id": 457,
    "name": "lumineon",
    "order": 583,
    "height": 12,
    "weight": 240,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "storm-drain",
      "water-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 69
      },
      {
        "name": "attack",
        "baseStat": 69
      },
      {
        "name": "defense",
        "baseStat": 76
      },
      {
        "name": "special-attack",
        "baseStat": 69
      },
      {
        "name": "special-defense",
        "baseStat": 86
      },
      {
        "name": "speed",
        "baseStat": 91
      }
    ]
  },
  {
    "id": 458,
    "name": "mantyke",
    "order": 326,
    "height": 10,
    "weight": 650,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png",
    "types": [
      "water",
      "flying"
    ],
    "abilities": [
      "swift-swim",
      "water-absorb",
      "water-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 20
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 459,
    "name": "snover",
    "order": 584,
    "height": 10,
    "weight": 505,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png",
    "types": [
      "grass",
      "ice"
    ],
    "abilities": [
      "snow-warning",
      "soundproof"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 62
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 62
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 460,
    "name": "abomasnow",
    "order": 585,
    "height": 22,
    "weight": 1355,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png",
    "types": [
      "grass",
      "ice"
    ],
    "abilities": [
      "snow-warning",
      "soundproof"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 92
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 92
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 461,
    "name": "weavile",
    "order": 313,
    "height": 11,
    "weight": 340,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png",
    "types": [
      "dark",
      "ice"
    ],
    "abilities": [
      "pressure",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 125
      }
    ]
  },
  {
    "id": 462,
    "name": "magnezone",
    "order": 134,
    "height": 12,
    "weight": 1800,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png",
    "types": [
      "electric",
      "steel"
    ],
    "abilities": [
      "magnet-pull",
      "sturdy",
      "analytic"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 463,
    "name": "lickilicky",
    "order": 172,
    "height": 17,
    "weight": 1400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "own-tempo",
      "oblivious",
      "cloud-nine"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 464,
    "name": "rhyperior",
    "order": 178,
    "height": 24,
    "weight": 2828,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png",
    "types": [
      "ground",
      "rock"
    ],
    "abilities": [
      "lightning-rod",
      "solid-rock",
      "reckless"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 115
      },
      {
        "name": "attack",
        "baseStat": 140
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 465,
    "name": "tangrowth",
    "order": 183,
    "height": 20,
    "weight": 1286,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "chlorophyll",
      "leaf-guard",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 125
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 466,
    "name": "electivire",
    "order": 203,
    "height": 18,
    "weight": 1386,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "motor-drive",
      "vital-spirit"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 123
      },
      {
        "name": "defense",
        "baseStat": 67
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 467,
    "name": "magmortar",
    "order": 206,
    "height": 16,
    "weight": 680,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "flame-body",
      "vital-spirit"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 67
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 83
      }
    ]
  },
  {
    "id": 468,
    "name": "togekiss",
    "order": 270,
    "height": 15,
    "weight": 380,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png",
    "types": [
      "fairy",
      "flying"
    ],
    "abilities": [
      "hustle",
      "serene-grace",
      "super-luck"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 469,
    "name": "yanmega",
    "order": 290,
    "height": 19,
    "weight": 515,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "speed-boost",
      "tinted-lens",
      "frisk"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 86
      },
      {
        "name": "attack",
        "baseStat": 76
      },
      {
        "name": "defense",
        "baseStat": 86
      },
      {
        "name": "special-attack",
        "baseStat": 116
      },
      {
        "name": "special-defense",
        "baseStat": 56
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 470,
    "name": "leafeon",
    "order": 222,
    "height": 10,
    "weight": 255,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "leaf-guard",
      "chlorophyll"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 471,
    "name": "glaceon",
    "order": 223,
    "height": 8,
    "weight": 259,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "snow-cloak",
      "ice-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 472,
    "name": "gliscor",
    "order": 305,
    "height": 20,
    "weight": 425,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png",
    "types": [
      "ground",
      "flying"
    ],
    "abilities": [
      "hyper-cutter",
      "sand-veil",
      "poison-heal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 125
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 473,
    "name": "mamoswine",
    "order": 320,
    "height": 25,
    "weight": 2910,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png",
    "types": [
      "ice",
      "ground"
    ],
    "abilities": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 474,
    "name": "porygon-z",
    "order": 227,
    "height": 9,
    "weight": 340,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "adaptability",
      "download",
      "analytic"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 475,
    "name": "gallade",
    "order": 384,
    "height": 16,
    "weight": 520,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png",
    "types": [
      "psychic",
      "fighting"
    ],
    "abilities": [
      "steadfast",
      "sharpness",
      "justified"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 476,
    "name": "probopass",
    "order": 402,
    "height": 14,
    "weight": 3400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png",
    "types": [
      "rock",
      "steel"
    ],
    "abilities": [
      "sturdy",
      "magnet-pull",
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 145
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 150
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 477,
    "name": "dusknoir",
    "order": 474,
    "height": 22,
    "weight": 1066,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "pressure",
      "frisk"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 135
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 135
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 478,
    "name": "froslass",
    "order": 483,
    "height": 13,
    "weight": 266,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png",
    "types": [
      "ice",
      "ghost"
    ],
    "abilities": [
      "snow-cloak",
      "cursed-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 479,
    "name": "rotom",
    "order": 587,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png",
    "types": [
      "electric",
      "ghost"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 77
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 77
      },
      {
        "name": "speed",
        "baseStat": 91
      }
    ]
  },
  {
    "id": 480,
    "name": "uxie",
    "order": 593,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 130
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 481,
    "name": "mesprit",
    "order": 594,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 482,
    "name": "azelf",
    "order": 595,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 483,
    "name": "dialga",
    "order": 596,
    "height": 54,
    "weight": 6830,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png",
    "types": [
      "steel",
      "dragon"
    ],
    "abilities": [
      "pressure",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 150
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 484,
    "name": "palkia",
    "order": 597,
    "height": 42,
    "weight": 3360,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png",
    "types": [
      "water",
      "dragon"
    ],
    "abilities": [
      "pressure",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 150
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 485,
    "name": "heatran",
    "order": 598,
    "height": 17,
    "weight": 4300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png",
    "types": [
      "fire",
      "steel"
    ],
    "abilities": [
      "flash-fire",
      "flame-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 91
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 106
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 106
      },
      {
        "name": "speed",
        "baseStat": 77
      }
    ]
  },
  {
    "id": 486,
    "name": "regigigas",
    "order": 599,
    "height": 37,
    "weight": 4200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "slow-start"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 160
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 487,
    "name": "giratina-altered",
    "order": 600,
    "height": 45,
    "weight": 7500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png",
    "types": [
      "ghost",
      "dragon"
    ],
    "abilities": [
      "pressure",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 150
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 488,
    "name": "cresselia",
    "order": 602,
    "height": 15,
    "weight": 856,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 120
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 489,
    "name": "phione",
    "order": 603,
    "height": 4,
    "weight": 31,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png",
    "types": [
      "water"
    ],
    "abilities": [
      "hydration"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 490,
    "name": "manaphy",
    "order": 604,
    "height": 3,
    "weight": 14,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png",
    "types": [
      "water"
    ],
    "abilities": [
      "hydration"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 491,
    "name": "darkrai",
    "order": 605,
    "height": 15,
    "weight": 505,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "bad-dreams"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 125
      }
    ]
  },
  {
    "id": 492,
    "name": "shaymin-land",
    "order": 606,
    "height": 2,
    "weight": 21,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "natural-cure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 493,
    "name": "arceus",
    "order": 608,
    "height": 32,
    "weight": 3200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "multitype"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 120
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 494,
    "name": "victini",
    "order": 609,
    "height": 4,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png",
    "types": [
      "psychic",
      "fire"
    ],
    "abilities": [
      "victory-star"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 495,
    "name": "snivy",
    "order": 610,
    "height": 6,
    "weight": 81,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "contrary"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 63
      }
    ]
  },
  {
    "id": 496,
    "name": "servine",
    "order": 611,
    "height": 8,
    "weight": 160,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "contrary"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 83
      }
    ]
  },
  {
    "id": 497,
    "name": "serperior",
    "order": 612,
    "height": 33,
    "weight": 630,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "contrary"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 113
      }
    ]
  },
  {
    "id": 498,
    "name": "tepig",
    "order": 613,
    "height": 5,
    "weight": 99,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 63
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 499,
    "name": "pignite",
    "order": 614,
    "height": 10,
    "weight": 555,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png",
    "types": [
      "fire",
      "fighting"
    ],
    "abilities": [
      "blaze",
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 93
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 500,
    "name": "emboar",
    "order": 615,
    "height": 16,
    "weight": 1500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png",
    "types": [
      "fire",
      "fighting"
    ],
    "abilities": [
      "blaze",
      "reckless"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 123
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 501,
    "name": "oshawott",
    "order": 616,
    "height": 5,
    "weight": 59,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "shell-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 63
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 502,
    "name": "dewott",
    "order": 617,
    "height": 8,
    "weight": 245,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "shell-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 83
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 503,
    "name": "samurott",
    "order": 618,
    "height": 15,
    "weight": 946,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "shell-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 108
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 504,
    "name": "patrat",
    "order": 619,
    "height": 5,
    "weight": 116,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "run-away",
      "keen-eye",
      "analytic"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 39
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 39
      },
      {
        "name": "speed",
        "baseStat": 42
      }
    ]
  },
  {
    "id": 505,
    "name": "watchog",
    "order": 620,
    "height": 11,
    "weight": 270,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "illuminate",
      "keen-eye",
      "analytic"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 69
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 69
      },
      {
        "name": "speed",
        "baseStat": 77
      }
    ]
  },
  {
    "id": 506,
    "name": "lillipup",
    "order": 621,
    "height": 4,
    "weight": 41,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "vital-spirit",
      "pickup",
      "run-away"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 507,
    "name": "herdier",
    "order": 622,
    "height": 9,
    "weight": 147,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "intimidate",
      "sand-rush",
      "scrappy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 508,
    "name": "stoutland",
    "order": 623,
    "height": 12,
    "weight": 610,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "intimidate",
      "sand-rush",
      "scrappy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 509,
    "name": "purrloin",
    "order": 624,
    "height": 4,
    "weight": 101,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "limber",
      "unburden",
      "prankster"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 41
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 37
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 37
      },
      {
        "name": "speed",
        "baseStat": 66
      }
    ]
  },
  {
    "id": 510,
    "name": "liepard",
    "order": 625,
    "height": 11,
    "weight": 375,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "limber",
      "unburden",
      "prankster"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 64
      },
      {
        "name": "attack",
        "baseStat": 88
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 88
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 106
      }
    ]
  },
  {
    "id": 511,
    "name": "pansage",
    "order": 626,
    "height": 6,
    "weight": 105,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "gluttony",
      "overgrow"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 53
      },
      {
        "name": "defense",
        "baseStat": 48
      },
      {
        "name": "special-attack",
        "baseStat": 53
      },
      {
        "name": "special-defense",
        "baseStat": 48
      },
      {
        "name": "speed",
        "baseStat": 64
      }
    ]
  },
  {
    "id": 512,
    "name": "simisage",
    "order": 627,
    "height": 11,
    "weight": 305,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "gluttony",
      "overgrow"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 98
      },
      {
        "name": "defense",
        "baseStat": 63
      },
      {
        "name": "special-attack",
        "baseStat": 98
      },
      {
        "name": "special-defense",
        "baseStat": 63
      },
      {
        "name": "speed",
        "baseStat": 101
      }
    ]
  },
  {
    "id": 513,
    "name": "pansear",
    "order": 628,
    "height": 6,
    "weight": 110,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "gluttony",
      "blaze"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 53
      },
      {
        "name": "defense",
        "baseStat": 48
      },
      {
        "name": "special-attack",
        "baseStat": 53
      },
      {
        "name": "special-defense",
        "baseStat": 48
      },
      {
        "name": "speed",
        "baseStat": 64
      }
    ]
  },
  {
    "id": 514,
    "name": "simisear",
    "order": 629,
    "height": 10,
    "weight": 280,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "gluttony",
      "blaze"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 98
      },
      {
        "name": "defense",
        "baseStat": 63
      },
      {
        "name": "special-attack",
        "baseStat": 98
      },
      {
        "name": "special-defense",
        "baseStat": 63
      },
      {
        "name": "speed",
        "baseStat": 101
      }
    ]
  },
  {
    "id": 515,
    "name": "panpour",
    "order": 630,
    "height": 6,
    "weight": 135,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png",
    "types": [
      "water"
    ],
    "abilities": [
      "gluttony",
      "torrent"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 53
      },
      {
        "name": "defense",
        "baseStat": 48
      },
      {
        "name": "special-attack",
        "baseStat": 53
      },
      {
        "name": "special-defense",
        "baseStat": 48
      },
      {
        "name": "speed",
        "baseStat": 64
      }
    ]
  },
  {
    "id": 516,
    "name": "simipour",
    "order": 631,
    "height": 10,
    "weight": 290,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png",
    "types": [
      "water"
    ],
    "abilities": [
      "gluttony",
      "torrent"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 98
      },
      {
        "name": "defense",
        "baseStat": 63
      },
      {
        "name": "special-attack",
        "baseStat": 98
      },
      {
        "name": "special-defense",
        "baseStat": 63
      },
      {
        "name": "speed",
        "baseStat": 101
      }
    ]
  },
  {
    "id": 517,
    "name": "munna",
    "order": 632,
    "height": 6,
    "weight": 233,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "forewarn",
      "synchronize",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 76
      },
      {
        "name": "attack",
        "baseStat": 25
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 67
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 24
      }
    ]
  },
  {
    "id": 518,
    "name": "musharna",
    "order": 633,
    "height": 11,
    "weight": 605,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "forewarn",
      "synchronize",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 116
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 107
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 29
      }
    ]
  },
  {
    "id": 519,
    "name": "pidove",
    "order": 634,
    "height": 3,
    "weight": 21,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "big-pecks",
      "super-luck",
      "rivalry"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 36
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 43
      }
    ]
  },
  {
    "id": 520,
    "name": "tranquill",
    "order": 635,
    "height": 6,
    "weight": 150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "big-pecks",
      "super-luck",
      "rivalry"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 62
      },
      {
        "name": "attack",
        "baseStat": 77
      },
      {
        "name": "defense",
        "baseStat": 62
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 42
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 521,
    "name": "unfezant",
    "order": 636,
    "height": 12,
    "weight": 290,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "big-pecks",
      "super-luck",
      "rivalry"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 93
      }
    ]
  },
  {
    "id": 522,
    "name": "blitzle",
    "order": 637,
    "height": 8,
    "weight": 298,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "lightning-rod",
      "motor-drive",
      "sap-sipper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 32
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 32
      },
      {
        "name": "speed",
        "baseStat": 76
      }
    ]
  },
  {
    "id": 523,
    "name": "zebstrika",
    "order": 638,
    "height": 16,
    "weight": 795,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "lightning-rod",
      "motor-drive",
      "sap-sipper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 63
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 63
      },
      {
        "name": "speed",
        "baseStat": 116
      }
    ]
  },
  {
    "id": 524,
    "name": "roggenrola",
    "order": 639,
    "height": 4,
    "weight": 180,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "sturdy",
      "weak-armor",
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 525,
    "name": "boldore",
    "order": 640,
    "height": 9,
    "weight": 1020,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "sturdy",
      "weak-armor",
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 526,
    "name": "gigalith",
    "order": 641,
    "height": 17,
    "weight": 2600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "sturdy",
      "sand-stream",
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 25
      }
    ]
  },
  {
    "id": 527,
    "name": "woobat",
    "order": 642,
    "height": 4,
    "weight": 21,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png",
    "types": [
      "psychic",
      "flying"
    ],
    "abilities": [
      "unaware",
      "klutz",
      "simple"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 43
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 43
      },
      {
        "name": "speed",
        "baseStat": 72
      }
    ]
  },
  {
    "id": 528,
    "name": "swoobat",
    "order": 643,
    "height": 9,
    "weight": 105,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png",
    "types": [
      "psychic",
      "flying"
    ],
    "abilities": [
      "unaware",
      "klutz",
      "simple"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 67
      },
      {
        "name": "attack",
        "baseStat": 57
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 77
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 114
      }
    ]
  },
  {
    "id": 529,
    "name": "drilbur",
    "order": 644,
    "height": 3,
    "weight": 85,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "sand-rush",
      "sand-force",
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 68
      }
    ]
  },
  {
    "id": 530,
    "name": "excadrill",
    "order": 645,
    "height": 7,
    "weight": 404,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png",
    "types": [
      "ground",
      "steel"
    ],
    "abilities": [
      "sand-rush",
      "sand-force",
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 88
      }
    ]
  },
  {
    "id": 531,
    "name": "audino",
    "order": 646,
    "height": 11,
    "weight": 310,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "healer",
      "regenerator",
      "klutz"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 103
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 86
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 86
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 532,
    "name": "timburr",
    "order": 648,
    "height": 6,
    "weight": 125,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "guts",
      "sheer-force",
      "iron-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 533,
    "name": "gurdurr",
    "order": 649,
    "height": 12,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "guts",
      "sheer-force",
      "iron-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 534,
    "name": "conkeldurr",
    "order": 650,
    "height": 14,
    "weight": 870,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "guts",
      "sheer-force",
      "iron-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 140
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 535,
    "name": "tympole",
    "order": 651,
    "height": 5,
    "weight": 45,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "hydration",
      "water-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 64
      }
    ]
  },
  {
    "id": 536,
    "name": "palpitoad",
    "order": 652,
    "height": 8,
    "weight": 170,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png",
    "types": [
      "water",
      "ground"
    ],
    "abilities": [
      "swift-swim",
      "hydration",
      "water-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 69
      }
    ]
  },
  {
    "id": 537,
    "name": "seismitoad",
    "order": 653,
    "height": 15,
    "weight": 620,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png",
    "types": [
      "water",
      "ground"
    ],
    "abilities": [
      "swift-swim",
      "poison-touch",
      "water-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 74
      }
    ]
  },
  {
    "id": 538,
    "name": "throh",
    "order": 654,
    "height": 13,
    "weight": 555,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "guts",
      "inner-focus",
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 120
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 539,
    "name": "sawk",
    "order": 655,
    "height": 14,
    "weight": 510,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "sturdy",
      "inner-focus",
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 540,
    "name": "sewaddle",
    "order": 656,
    "height": 3,
    "weight": 25,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png",
    "types": [
      "bug",
      "grass"
    ],
    "abilities": [
      "swarm",
      "chlorophyll",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 53
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 42
      }
    ]
  },
  {
    "id": 541,
    "name": "swadloon",
    "order": 657,
    "height": 5,
    "weight": 73,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png",
    "types": [
      "bug",
      "grass"
    ],
    "abilities": [
      "leaf-guard",
      "chlorophyll",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 63
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 42
      }
    ]
  },
  {
    "id": 542,
    "name": "leavanny",
    "order": 658,
    "height": 12,
    "weight": 205,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png",
    "types": [
      "bug",
      "grass"
    ],
    "abilities": [
      "swarm",
      "chlorophyll",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 103
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 92
      }
    ]
  },
  {
    "id": 543,
    "name": "venipede",
    "order": 659,
    "height": 4,
    "weight": 53,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "poison-point",
      "swarm",
      "speed-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 59
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 39
      },
      {
        "name": "speed",
        "baseStat": 57
      }
    ]
  },
  {
    "id": 544,
    "name": "whirlipede",
    "order": 660,
    "height": 12,
    "weight": 585,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "poison-point",
      "swarm",
      "speed-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 99
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 79
      },
      {
        "name": "speed",
        "baseStat": 47
      }
    ]
  },
  {
    "id": 545,
    "name": "scolipede",
    "order": 661,
    "height": 25,
    "weight": 2005,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "poison-point",
      "swarm",
      "speed-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 89
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 69
      },
      {
        "name": "speed",
        "baseStat": 112
      }
    ]
  },
  {
    "id": 546,
    "name": "cottonee",
    "order": 662,
    "height": 3,
    "weight": 6,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png",
    "types": [
      "grass",
      "fairy"
    ],
    "abilities": [
      "prankster",
      "infiltrator",
      "chlorophyll"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 27
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 37
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 66
      }
    ]
  },
  {
    "id": 547,
    "name": "whimsicott",
    "order": 663,
    "height": 7,
    "weight": 66,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png",
    "types": [
      "grass",
      "fairy"
    ],
    "abilities": [
      "prankster",
      "infiltrator",
      "chlorophyll"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 67
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 77
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 116
      }
    ]
  },
  {
    "id": 548,
    "name": "petilil",
    "order": 664,
    "height": 5,
    "weight": 66,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "chlorophyll",
      "own-tempo",
      "leaf-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 549,
    "name": "lilligant",
    "order": 665,
    "height": 11,
    "weight": 163,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "chlorophyll",
      "own-tempo",
      "leaf-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 550,
    "name": "basculin-red-striped",
    "order": 666,
    "height": 10,
    "weight": 180,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png",
    "types": [
      "water"
    ],
    "abilities": [
      "reckless",
      "adaptability",
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 92
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 98
      }
    ]
  },
  {
    "id": 551,
    "name": "sandile",
    "order": 668,
    "height": 7,
    "weight": 152,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png",
    "types": [
      "ground",
      "dark"
    ],
    "abilities": [
      "intimidate",
      "moxie",
      "anger-point"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 72
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 552,
    "name": "krokorok",
    "order": 669,
    "height": 10,
    "weight": 334,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png",
    "types": [
      "ground",
      "dark"
    ],
    "abilities": [
      "intimidate",
      "moxie",
      "anger-point"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 82
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 74
      }
    ]
  },
  {
    "id": 553,
    "name": "krookodile",
    "order": 670,
    "height": 15,
    "weight": 963,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png",
    "types": [
      "ground",
      "dark"
    ],
    "abilities": [
      "intimidate",
      "moxie",
      "anger-point"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 117
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 92
      }
    ]
  },
  {
    "id": 554,
    "name": "darumaka",
    "order": 671,
    "height": 6,
    "weight": 375,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "hustle",
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 15
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 555,
    "name": "darmanitan-standard",
    "order": 673,
    "height": 13,
    "weight": 929,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "sheer-force",
      "zen-mode"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 140
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 556,
    "name": "maractus",
    "order": 677,
    "height": 10,
    "weight": 280,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "water-absorb",
      "chlorophyll",
      "storm-drain"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 86
      },
      {
        "name": "defense",
        "baseStat": 67
      },
      {
        "name": "special-attack",
        "baseStat": 106
      },
      {
        "name": "special-defense",
        "baseStat": 67
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 557,
    "name": "dwebble",
    "order": 678,
    "height": 3,
    "weight": 145,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png",
    "types": [
      "bug",
      "rock"
    ],
    "abilities": [
      "sturdy",
      "shell-armor",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 558,
    "name": "crustle",
    "order": 679,
    "height": 14,
    "weight": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png",
    "types": [
      "bug",
      "rock"
    ],
    "abilities": [
      "sturdy",
      "shell-armor",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 125
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 559,
    "name": "scraggy",
    "order": 680,
    "height": 6,
    "weight": 118,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png",
    "types": [
      "dark",
      "fighting"
    ],
    "abilities": [
      "shed-skin",
      "moxie",
      "intimidate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 48
      }
    ]
  },
  {
    "id": 560,
    "name": "scrafty",
    "order": 681,
    "height": 11,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png",
    "types": [
      "dark",
      "fighting"
    ],
    "abilities": [
      "shed-skin",
      "moxie",
      "intimidate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 58
      }
    ]
  },
  {
    "id": 561,
    "name": "sigilyph",
    "order": 682,
    "height": 14,
    "weight": 140,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png",
    "types": [
      "psychic",
      "flying"
    ],
    "abilities": [
      "wonder-skin",
      "magic-guard",
      "tinted-lens"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 72
      },
      {
        "name": "attack",
        "baseStat": 58
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 103
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 97
      }
    ]
  },
  {
    "id": 562,
    "name": "yamask",
    "order": 683,
    "height": 5,
    "weight": 15,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "mummy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 38
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 563,
    "name": "cofagrigus",
    "order": 685,
    "height": 17,
    "weight": 765,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "mummy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 58
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 145
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 564,
    "name": "tirtouga",
    "order": 686,
    "height": 7,
    "weight": 165,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png",
    "types": [
      "water",
      "rock"
    ],
    "abilities": [
      "solid-rock",
      "sturdy",
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 54
      },
      {
        "name": "attack",
        "baseStat": 78
      },
      {
        "name": "defense",
        "baseStat": 103
      },
      {
        "name": "special-attack",
        "baseStat": 53
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 22
      }
    ]
  },
  {
    "id": 565,
    "name": "carracosta",
    "order": 687,
    "height": 12,
    "weight": 810,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png",
    "types": [
      "water",
      "rock"
    ],
    "abilities": [
      "solid-rock",
      "sturdy",
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 74
      },
      {
        "name": "attack",
        "baseStat": 108
      },
      {
        "name": "defense",
        "baseStat": 133
      },
      {
        "name": "special-attack",
        "baseStat": 83
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 32
      }
    ]
  },
  {
    "id": 566,
    "name": "archen",
    "order": 688,
    "height": 5,
    "weight": 95,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "defeatist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 112
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 74
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 567,
    "name": "archeops",
    "order": 689,
    "height": 14,
    "weight": 320,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "defeatist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 140
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 112
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 568,
    "name": "trubbish",
    "order": 690,
    "height": 6,
    "weight": 310,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "stench",
      "sticky-hold",
      "aftermath"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 62
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 62
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 569,
    "name": "garbodor",
    "order": 691,
    "height": 19,
    "weight": 1073,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "stench",
      "weak-armor",
      "aftermath"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 82
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 82
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 570,
    "name": "zorua",
    "order": 692,
    "height": 7,
    "weight": 125,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "illusion"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 571,
    "name": "zoroark",
    "order": 693,
    "height": 16,
    "weight": 811,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "illusion"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 572,
    "name": "minccino",
    "order": 694,
    "height": 4,
    "weight": 58,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "cute-charm",
      "technician",
      "skill-link"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 573,
    "name": "cinccino",
    "order": 695,
    "height": 5,
    "weight": 75,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "cute-charm",
      "technician",
      "skill-link"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 574,
    "name": "gothita",
    "order": 696,
    "height": 4,
    "weight": 58,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "frisk",
      "competitive",
      "shadow-tag"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 575,
    "name": "gothorita",
    "order": 697,
    "height": 7,
    "weight": 180,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "frisk",
      "competitive",
      "shadow-tag"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 576,
    "name": "gothitelle",
    "order": 698,
    "height": 15,
    "weight": 440,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "frisk",
      "competitive",
      "shadow-tag"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 577,
    "name": "solosis",
    "order": 699,
    "height": 3,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 578,
    "name": "duosion",
    "order": 700,
    "height": 6,
    "weight": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 579,
    "name": "reuniclus",
    "order": 701,
    "height": 10,
    "weight": 201,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 580,
    "name": "ducklett",
    "order": 702,
    "height": 5,
    "weight": 55,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png",
    "types": [
      "water",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "big-pecks",
      "hydration"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 62
      },
      {
        "name": "attack",
        "baseStat": 44
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 44
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 581,
    "name": "swanna",
    "order": 703,
    "height": 13,
    "weight": 242,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png",
    "types": [
      "water",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "big-pecks",
      "hydration"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 87
      },
      {
        "name": "defense",
        "baseStat": 63
      },
      {
        "name": "special-attack",
        "baseStat": 87
      },
      {
        "name": "special-defense",
        "baseStat": 63
      },
      {
        "name": "speed",
        "baseStat": 98
      }
    ]
  },
  {
    "id": 582,
    "name": "vanillite",
    "order": 704,
    "height": 4,
    "weight": 57,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "ice-body",
      "snow-cloak",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 36
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 44
      }
    ]
  },
  {
    "id": 583,
    "name": "vanillish",
    "order": 705,
    "height": 11,
    "weight": 410,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "ice-body",
      "snow-cloak",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 51
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 59
      }
    ]
  },
  {
    "id": 584,
    "name": "vanilluxe",
    "order": 706,
    "height": 13,
    "weight": 575,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "ice-body",
      "snow-warning",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 71
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 79
      }
    ]
  },
  {
    "id": 585,
    "name": "deerling",
    "order": 707,
    "height": 6,
    "weight": 195,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png",
    "types": [
      "normal",
      "grass"
    ],
    "abilities": [
      "chlorophyll",
      "sap-sipper",
      "serene-grace"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 586,
    "name": "sawsbuck",
    "order": 708,
    "height": 19,
    "weight": 925,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png",
    "types": [
      "normal",
      "grass"
    ],
    "abilities": [
      "chlorophyll",
      "sap-sipper",
      "serene-grace"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 587,
    "name": "emolga",
    "order": 709,
    "height": 4,
    "weight": 50,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png",
    "types": [
      "electric",
      "flying"
    ],
    "abilities": [
      "static",
      "motor-drive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 103
      }
    ]
  },
  {
    "id": 588,
    "name": "karrablast",
    "order": 710,
    "height": 5,
    "weight": 59,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "swarm",
      "shed-skin",
      "no-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 589,
    "name": "escavalier",
    "order": 711,
    "height": 10,
    "weight": 330,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png",
    "types": [
      "bug",
      "steel"
    ],
    "abilities": [
      "swarm",
      "shell-armor",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 590,
    "name": "foongus",
    "order": 712,
    "height": 2,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "effect-spore",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 69
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 591,
    "name": "amoonguss",
    "order": 713,
    "height": 6,
    "weight": 105,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "effect-spore",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 114
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 592,
    "name": "frillish",
    "order": 714,
    "height": 12,
    "weight": 330,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png",
    "types": [
      "water",
      "ghost"
    ],
    "abilities": [
      "water-absorb",
      "cursed-body",
      "damp"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 593,
    "name": "jellicent",
    "order": 715,
    "height": 22,
    "weight": 1350,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png",
    "types": [
      "water",
      "ghost"
    ],
    "abilities": [
      "water-absorb",
      "cursed-body",
      "damp"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 594,
    "name": "alomomola",
    "order": 716,
    "height": 12,
    "weight": 316,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png",
    "types": [
      "water"
    ],
    "abilities": [
      "healer",
      "hydration",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 165
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 595,
    "name": "joltik",
    "order": 717,
    "height": 1,
    "weight": 6,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png",
    "types": [
      "bug",
      "electric"
    ],
    "abilities": [
      "compound-eyes",
      "unnerve",
      "swarm"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 47
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 57
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 596,
    "name": "galvantula",
    "order": 718,
    "height": 8,
    "weight": 143,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png",
    "types": [
      "bug",
      "electric"
    ],
    "abilities": [
      "compound-eyes",
      "unnerve",
      "swarm"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 77
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 97
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 108
      }
    ]
  },
  {
    "id": 597,
    "name": "ferroseed",
    "order": 719,
    "height": 6,
    "weight": 188,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png",
    "types": [
      "grass",
      "steel"
    ],
    "abilities": [
      "iron-barbs"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 44
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 91
      },
      {
        "name": "special-attack",
        "baseStat": 24
      },
      {
        "name": "special-defense",
        "baseStat": 86
      },
      {
        "name": "speed",
        "baseStat": 10
      }
    ]
  },
  {
    "id": 598,
    "name": "ferrothorn",
    "order": 720,
    "height": 10,
    "weight": 1100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png",
    "types": [
      "grass",
      "steel"
    ],
    "abilities": [
      "iron-barbs",
      "anticipation"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 74
      },
      {
        "name": "attack",
        "baseStat": 94
      },
      {
        "name": "defense",
        "baseStat": 131
      },
      {
        "name": "special-attack",
        "baseStat": 54
      },
      {
        "name": "special-defense",
        "baseStat": 116
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 599,
    "name": "klink",
    "order": 721,
    "height": 3,
    "weight": 210,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "plus",
      "minus",
      "clear-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 600,
    "name": "klang",
    "order": 722,
    "height": 6,
    "weight": 510,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "plus",
      "minus",
      "clear-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 601,
    "name": "klinklang",
    "order": 723,
    "height": 6,
    "weight": 810,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "plus",
      "minus",
      "clear-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 602,
    "name": "tynamo",
    "order": 724,
    "height": 2,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 603,
    "name": "eelektrik",
    "order": 725,
    "height": 12,
    "weight": 220,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 604,
    "name": "eelektross",
    "order": 726,
    "height": 21,
    "weight": 805,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 605,
    "name": "elgyem",
    "order": 727,
    "height": 5,
    "weight": 90,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "telepathy",
      "synchronize",
      "analytic"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 606,
    "name": "beheeyem",
    "order": 728,
    "height": 10,
    "weight": 345,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "telepathy",
      "synchronize",
      "analytic"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 607,
    "name": "litwick",
    "order": 729,
    "height": 3,
    "weight": 31,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png",
    "types": [
      "ghost",
      "fire"
    ],
    "abilities": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 608,
    "name": "lampent",
    "order": 730,
    "height": 6,
    "weight": 130,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png",
    "types": [
      "ghost",
      "fire"
    ],
    "abilities": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 609,
    "name": "chandelure",
    "order": 731,
    "height": 10,
    "weight": 343,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png",
    "types": [
      "ghost",
      "fire"
    ],
    "abilities": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 145
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 610,
    "name": "axew",
    "order": 732,
    "height": 6,
    "weight": 180,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png",
    "types": [
      "dragon"
    ],
    "abilities": [
      "rivalry",
      "mold-breaker",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 46
      },
      {
        "name": "attack",
        "baseStat": 87
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 57
      }
    ]
  },
  {
    "id": 611,
    "name": "fraxure",
    "order": 733,
    "height": 10,
    "weight": 360,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png",
    "types": [
      "dragon"
    ],
    "abilities": [
      "rivalry",
      "mold-breaker",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 66
      },
      {
        "name": "attack",
        "baseStat": 117
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 67
      }
    ]
  },
  {
    "id": 612,
    "name": "haxorus",
    "order": 734,
    "height": 18,
    "weight": 1055,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png",
    "types": [
      "dragon"
    ],
    "abilities": [
      "rivalry",
      "mold-breaker",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 76
      },
      {
        "name": "attack",
        "baseStat": 147
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 97
      }
    ]
  },
  {
    "id": 613,
    "name": "cubchoo",
    "order": 735,
    "height": 5,
    "weight": 85,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "snow-cloak",
      "slush-rush",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 614,
    "name": "beartic",
    "order": 736,
    "height": 26,
    "weight": 2600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "snow-cloak",
      "slush-rush",
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 615,
    "name": "cryogonal",
    "order": 737,
    "height": 11,
    "weight": 1480,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 135
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 616,
    "name": "shelmet",
    "order": 738,
    "height": 4,
    "weight": 77,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "hydration",
      "shell-armor",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 25
      }
    ]
  },
  {
    "id": 617,
    "name": "accelgor",
    "order": 739,
    "height": 8,
    "weight": 253,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "hydration",
      "sticky-hold",
      "unburden"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 145
      }
    ]
  },
  {
    "id": 618,
    "name": "stunfisk",
    "order": 740,
    "height": 7,
    "weight": 110,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png",
    "types": [
      "ground",
      "electric"
    ],
    "abilities": [
      "static",
      "limber",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 109
      },
      {
        "name": "attack",
        "baseStat": 66
      },
      {
        "name": "defense",
        "baseStat": 84
      },
      {
        "name": "special-attack",
        "baseStat": 81
      },
      {
        "name": "special-defense",
        "baseStat": 99
      },
      {
        "name": "speed",
        "baseStat": 32
      }
    ]
  },
  {
    "id": 619,
    "name": "mienfoo",
    "order": 742,
    "height": 9,
    "weight": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "inner-focus",
      "regenerator",
      "reckless"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 620,
    "name": "mienshao",
    "order": 743,
    "height": 14,
    "weight": 355,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "inner-focus",
      "regenerator",
      "reckless"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 621,
    "name": "druddigon",
    "order": 744,
    "height": 16,
    "weight": 1390,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png",
    "types": [
      "dragon"
    ],
    "abilities": [
      "rough-skin",
      "sheer-force",
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 77
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 48
      }
    ]
  },
  {
    "id": 622,
    "name": "golett",
    "order": 745,
    "height": 10,
    "weight": 920,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png",
    "types": [
      "ground",
      "ghost"
    ],
    "abilities": [
      "iron-fist",
      "klutz",
      "no-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 59
      },
      {
        "name": "attack",
        "baseStat": 74
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 623,
    "name": "golurk",
    "order": 746,
    "height": 28,
    "weight": 3300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png",
    "types": [
      "ground",
      "ghost"
    ],
    "abilities": [
      "iron-fist",
      "klutz",
      "no-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 89
      },
      {
        "name": "attack",
        "baseStat": 124
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 624,
    "name": "pawniard",
    "order": 747,
    "height": 5,
    "weight": 102,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png",
    "types": [
      "dark",
      "steel"
    ],
    "abilities": [
      "defiant",
      "inner-focus",
      "pressure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 625,
    "name": "bisharp",
    "order": 748,
    "height": 16,
    "weight": 700,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png",
    "types": [
      "dark",
      "steel"
    ],
    "abilities": [
      "defiant",
      "inner-focus",
      "pressure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 626,
    "name": "bouffalant",
    "order": 749,
    "height": 16,
    "weight": 946,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "reckless",
      "sap-sipper",
      "soundproof"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 627,
    "name": "rufflet",
    "order": 750,
    "height": 5,
    "weight": 105,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "sheer-force",
      "hustle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 83
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 37
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 628,
    "name": "braviary",
    "order": 751,
    "height": 15,
    "weight": 410,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "sheer-force",
      "defiant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 123
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 57
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 629,
    "name": "vullaby",
    "order": 752,
    "height": 5,
    "weight": 90,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png",
    "types": [
      "dark",
      "flying"
    ],
    "abilities": [
      "big-pecks",
      "overcoat",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 630,
    "name": "mandibuzz",
    "order": 753,
    "height": 12,
    "weight": 395,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png",
    "types": [
      "dark",
      "flying"
    ],
    "abilities": [
      "big-pecks",
      "overcoat",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 631,
    "name": "heatmor",
    "order": 754,
    "height": 14,
    "weight": 580,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "gluttony",
      "flash-fire",
      "white-smoke"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 97
      },
      {
        "name": "defense",
        "baseStat": 66
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 66
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 632,
    "name": "durant",
    "order": 755,
    "height": 3,
    "weight": 330,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png",
    "types": [
      "bug",
      "steel"
    ],
    "abilities": [
      "swarm",
      "hustle",
      "truant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 58
      },
      {
        "name": "attack",
        "baseStat": 109
      },
      {
        "name": "defense",
        "baseStat": 112
      },
      {
        "name": "special-attack",
        "baseStat": 48
      },
      {
        "name": "special-defense",
        "baseStat": 48
      },
      {
        "name": "speed",
        "baseStat": 109
      }
    ]
  },
  {
    "id": 633,
    "name": "deino",
    "order": 756,
    "height": 8,
    "weight": 173,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png",
    "types": [
      "dark",
      "dragon"
    ],
    "abilities": [
      "hustle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 52
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 38
      }
    ]
  },
  {
    "id": 634,
    "name": "zweilous",
    "order": 757,
    "height": 14,
    "weight": 500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png",
    "types": [
      "dark",
      "dragon"
    ],
    "abilities": [
      "hustle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 72
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 58
      }
    ]
  },
  {
    "id": 635,
    "name": "hydreigon",
    "order": 758,
    "height": 18,
    "weight": 1600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png",
    "types": [
      "dark",
      "dragon"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 92
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 98
      }
    ]
  },
  {
    "id": 636,
    "name": "larvesta",
    "order": 759,
    "height": 11,
    "weight": 288,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png",
    "types": [
      "bug",
      "fire"
    ],
    "abilities": [
      "flame-body",
      "swarm"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 637,
    "name": "volcarona",
    "order": 760,
    "height": 16,
    "weight": 460,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png",
    "types": [
      "bug",
      "fire"
    ],
    "abilities": [
      "flame-body",
      "swarm"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 638,
    "name": "cobalion",
    "order": 761,
    "height": 21,
    "weight": 2500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png",
    "types": [
      "steel",
      "fighting"
    ],
    "abilities": [
      "justified"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 91
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 129
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 72
      },
      {
        "name": "speed",
        "baseStat": 108
      }
    ]
  },
  {
    "id": 639,
    "name": "terrakion",
    "order": 762,
    "height": 19,
    "weight": 2600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png",
    "types": [
      "rock",
      "fighting"
    ],
    "abilities": [
      "justified"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 91
      },
      {
        "name": "attack",
        "baseStat": 129
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 72
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 108
      }
    ]
  },
  {
    "id": 640,
    "name": "virizion",
    "order": 763,
    "height": 20,
    "weight": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png",
    "types": [
      "grass",
      "fighting"
    ],
    "abilities": [
      "justified"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 91
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 72
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 129
      },
      {
        "name": "speed",
        "baseStat": 108
      }
    ]
  },
  {
    "id": 641,
    "name": "tornadus-incarnate",
    "order": 764,
    "height": 15,
    "weight": 630,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/641.png",
    "types": [
      "flying"
    ],
    "abilities": [
      "prankster",
      "defiant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 79
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 111
      }
    ]
  },
  {
    "id": 642,
    "name": "thundurus-incarnate",
    "order": 766,
    "height": 15,
    "weight": 610,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/642.png",
    "types": [
      "electric",
      "flying"
    ],
    "abilities": [
      "prankster",
      "defiant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 79
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 111
      }
    ]
  },
  {
    "id": 643,
    "name": "reshiram",
    "order": 768,
    "height": 32,
    "weight": 3300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png",
    "types": [
      "dragon",
      "fire"
    ],
    "abilities": [
      "turboblaze"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 150
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 644,
    "name": "zekrom",
    "order": 769,
    "height": 29,
    "weight": 3450,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png",
    "types": [
      "dragon",
      "electric"
    ],
    "abilities": [
      "teravolt"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 150
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 645,
    "name": "landorus-incarnate",
    "order": 770,
    "height": 15,
    "weight": 680,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/645.png",
    "types": [
      "ground",
      "flying"
    ],
    "abilities": [
      "sand-force",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 89
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 115
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 101
      }
    ]
  },
  {
    "id": 646,
    "name": "kyurem",
    "order": 772,
    "height": 30,
    "weight": 3250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png",
    "types": [
      "dragon",
      "ice"
    ],
    "abilities": [
      "pressure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 125
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 647,
    "name": "keldeo-ordinary",
    "order": 775,
    "height": 14,
    "weight": 485,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/647.png",
    "types": [
      "water",
      "fighting"
    ],
    "abilities": [
      "justified"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 91
      },
      {
        "name": "attack",
        "baseStat": 72
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 129
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 108
      }
    ]
  },
  {
    "id": 648,
    "name": "meloetta-aria",
    "order": 777,
    "height": 6,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png",
    "types": [
      "normal",
      "psychic"
    ],
    "abilities": [
      "serene-grace"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 77
      },
      {
        "name": "defense",
        "baseStat": 77
      },
      {
        "name": "special-attack",
        "baseStat": 128
      },
      {
        "name": "special-defense",
        "baseStat": 128
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 649,
    "name": "genesect",
    "order": 779,
    "height": 15,
    "weight": 825,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png",
    "types": [
      "bug",
      "steel"
    ],
    "abilities": [
      "download"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 71
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 99
      }
    ]
  },
  {
    "id": 650,
    "name": "chespin",
    "order": 780,
    "height": 4,
    "weight": 90,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "bulletproof"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 56
      },
      {
        "name": "attack",
        "baseStat": 61
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 48
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 38
      }
    ]
  },
  {
    "id": 651,
    "name": "quilladin",
    "order": 781,
    "height": 7,
    "weight": 290,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "bulletproof"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 61
      },
      {
        "name": "attack",
        "baseStat": 78
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 56
      },
      {
        "name": "special-defense",
        "baseStat": 58
      },
      {
        "name": "speed",
        "baseStat": 57
      }
    ]
  },
  {
    "id": 652,
    "name": "chesnaught",
    "order": 782,
    "height": 16,
    "weight": 900,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png",
    "types": [
      "grass",
      "fighting"
    ],
    "abilities": [
      "overgrow",
      "bulletproof"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 88
      },
      {
        "name": "attack",
        "baseStat": 107
      },
      {
        "name": "defense",
        "baseStat": 122
      },
      {
        "name": "special-attack",
        "baseStat": 74
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 64
      }
    ]
  },
  {
    "id": 653,
    "name": "fennekin",
    "order": 783,
    "height": 4,
    "weight": 94,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "magician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 62
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 654,
    "name": "braixen",
    "order": 784,
    "height": 10,
    "weight": 145,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "magician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 59
      },
      {
        "name": "attack",
        "baseStat": 59
      },
      {
        "name": "defense",
        "baseStat": 58
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 73
      }
    ]
  },
  {
    "id": 655,
    "name": "delphox",
    "order": 785,
    "height": 15,
    "weight": 390,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png",
    "types": [
      "fire",
      "psychic"
    ],
    "abilities": [
      "blaze",
      "magician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 69
      },
      {
        "name": "defense",
        "baseStat": 72
      },
      {
        "name": "special-attack",
        "baseStat": 114
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 104
      }
    ]
  },
  {
    "id": 656,
    "name": "froakie",
    "order": 786,
    "height": 3,
    "weight": 70,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "protean"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 41
      },
      {
        "name": "attack",
        "baseStat": 56
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 62
      },
      {
        "name": "special-defense",
        "baseStat": 44
      },
      {
        "name": "speed",
        "baseStat": 71
      }
    ]
  },
  {
    "id": 657,
    "name": "frogadier",
    "order": 787,
    "height": 6,
    "weight": 109,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "protean"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 54
      },
      {
        "name": "attack",
        "baseStat": 63
      },
      {
        "name": "defense",
        "baseStat": 52
      },
      {
        "name": "special-attack",
        "baseStat": 83
      },
      {
        "name": "special-defense",
        "baseStat": 56
      },
      {
        "name": "speed",
        "baseStat": 97
      }
    ]
  },
  {
    "id": 658,
    "name": "greninja",
    "order": 788,
    "height": 15,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png",
    "types": [
      "water",
      "dark"
    ],
    "abilities": [
      "torrent",
      "protean"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 72
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 67
      },
      {
        "name": "special-attack",
        "baseStat": 103
      },
      {
        "name": "special-defense",
        "baseStat": 71
      },
      {
        "name": "speed",
        "baseStat": 122
      }
    ]
  },
  {
    "id": 659,
    "name": "bunnelby",
    "order": 791,
    "height": 4,
    "weight": 50,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "pickup",
      "cheek-pouch",
      "huge-power"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 38
      },
      {
        "name": "attack",
        "baseStat": 36
      },
      {
        "name": "defense",
        "baseStat": 38
      },
      {
        "name": "special-attack",
        "baseStat": 32
      },
      {
        "name": "special-defense",
        "baseStat": 36
      },
      {
        "name": "speed",
        "baseStat": 57
      }
    ]
  },
  {
    "id": 660,
    "name": "diggersby",
    "order": 792,
    "height": 10,
    "weight": 424,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png",
    "types": [
      "normal",
      "ground"
    ],
    "abilities": [
      "pickup",
      "cheek-pouch",
      "huge-power"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 56
      },
      {
        "name": "defense",
        "baseStat": 77
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 77
      },
      {
        "name": "speed",
        "baseStat": 78
      }
    ]
  },
  {
    "id": 661,
    "name": "fletchling",
    "order": 793,
    "height": 3,
    "weight": 17,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "big-pecks",
      "gale-wings"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 43
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 38
      },
      {
        "name": "speed",
        "baseStat": 62
      }
    ]
  },
  {
    "id": 662,
    "name": "fletchinder",
    "order": 794,
    "height": 7,
    "weight": 160,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png",
    "types": [
      "fire",
      "flying"
    ],
    "abilities": [
      "flame-body",
      "gale-wings"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 62
      },
      {
        "name": "attack",
        "baseStat": 73
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 56
      },
      {
        "name": "special-defense",
        "baseStat": 52
      },
      {
        "name": "speed",
        "baseStat": 84
      }
    ]
  },
  {
    "id": 663,
    "name": "talonflame",
    "order": 795,
    "height": 12,
    "weight": 245,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png",
    "types": [
      "fire",
      "flying"
    ],
    "abilities": [
      "flame-body",
      "gale-wings"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 81
      },
      {
        "name": "defense",
        "baseStat": 71
      },
      {
        "name": "special-attack",
        "baseStat": 74
      },
      {
        "name": "special-defense",
        "baseStat": 69
      },
      {
        "name": "speed",
        "baseStat": 126
      }
    ]
  },
  {
    "id": 664,
    "name": "scatterbug",
    "order": 796,
    "height": 3,
    "weight": 25,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "shield-dust",
      "compound-eyes",
      "friend-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 38
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 27
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 665,
    "name": "spewpa",
    "order": 797,
    "height": 3,
    "weight": 84,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "shed-skin",
      "friend-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 22
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 27
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 29
      }
    ]
  },
  {
    "id": 666,
    "name": "vivillon",
    "order": 798,
    "height": 12,
    "weight": 170,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "shield-dust",
      "compound-eyes",
      "friend-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 52
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 89
      }
    ]
  },
  {
    "id": 667,
    "name": "litleo",
    "order": 799,
    "height": 6,
    "weight": 135,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png",
    "types": [
      "fire",
      "normal"
    ],
    "abilities": [
      "rivalry",
      "unnerve",
      "moxie"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 62
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 58
      },
      {
        "name": "special-attack",
        "baseStat": 73
      },
      {
        "name": "special-defense",
        "baseStat": 54
      },
      {
        "name": "speed",
        "baseStat": 72
      }
    ]
  },
  {
    "id": 668,
    "name": "pyroar",
    "order": 800,
    "height": 15,
    "weight": 815,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png",
    "types": [
      "fire",
      "normal"
    ],
    "abilities": [
      "rivalry",
      "unnerve",
      "moxie"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 86
      },
      {
        "name": "attack",
        "baseStat": 68
      },
      {
        "name": "defense",
        "baseStat": 72
      },
      {
        "name": "special-attack",
        "baseStat": 109
      },
      {
        "name": "special-defense",
        "baseStat": 66
      },
      {
        "name": "speed",
        "baseStat": 106
      }
    ]
  },
  {
    "id": 669,
    "name": "flabebe",
    "order": 801,
    "height": 1,
    "weight": 1,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "flower-veil",
      "symbiosis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 44
      },
      {
        "name": "attack",
        "baseStat": 38
      },
      {
        "name": "defense",
        "baseStat": 39
      },
      {
        "name": "special-attack",
        "baseStat": 61
      },
      {
        "name": "special-defense",
        "baseStat": 79
      },
      {
        "name": "speed",
        "baseStat": 42
      }
    ]
  },
  {
    "id": 670,
    "name": "floette",
    "order": 802,
    "height": 2,
    "weight": 9,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "flower-veil",
      "symbiosis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 54
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 47
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 98
      },
      {
        "name": "speed",
        "baseStat": 52
      }
    ]
  },
  {
    "id": 671,
    "name": "florges",
    "order": 804,
    "height": 11,
    "weight": 100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "flower-veil",
      "symbiosis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 68
      },
      {
        "name": "special-attack",
        "baseStat": 112
      },
      {
        "name": "special-defense",
        "baseStat": 154
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 672,
    "name": "skiddo",
    "order": 805,
    "height": 9,
    "weight": 310,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "sap-sipper",
      "grass-pelt"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 66
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 48
      },
      {
        "name": "special-attack",
        "baseStat": 62
      },
      {
        "name": "special-defense",
        "baseStat": 57
      },
      {
        "name": "speed",
        "baseStat": 52
      }
    ]
  },
  {
    "id": 673,
    "name": "gogoat",
    "order": 806,
    "height": 17,
    "weight": 910,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "sap-sipper",
      "grass-pelt"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 123
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 62
      },
      {
        "name": "special-attack",
        "baseStat": 97
      },
      {
        "name": "special-defense",
        "baseStat": 81
      },
      {
        "name": "speed",
        "baseStat": 68
      }
    ]
  },
  {
    "id": 674,
    "name": "pancham",
    "order": 807,
    "height": 6,
    "weight": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "iron-fist",
      "mold-breaker",
      "scrappy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 67
      },
      {
        "name": "attack",
        "baseStat": 82
      },
      {
        "name": "defense",
        "baseStat": 62
      },
      {
        "name": "special-attack",
        "baseStat": 46
      },
      {
        "name": "special-defense",
        "baseStat": 48
      },
      {
        "name": "speed",
        "baseStat": 43
      }
    ]
  },
  {
    "id": 675,
    "name": "pangoro",
    "order": 808,
    "height": 21,
    "weight": 1360,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png",
    "types": [
      "fighting",
      "dark"
    ],
    "abilities": [
      "iron-fist",
      "mold-breaker",
      "scrappy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 124
      },
      {
        "name": "defense",
        "baseStat": 78
      },
      {
        "name": "special-attack",
        "baseStat": 69
      },
      {
        "name": "special-defense",
        "baseStat": 71
      },
      {
        "name": "speed",
        "baseStat": 58
      }
    ]
  },
  {
    "id": 676,
    "name": "furfrou",
    "order": 809,
    "height": 12,
    "weight": 280,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "fur-coat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 102
      }
    ]
  },
  {
    "id": 677,
    "name": "espurr",
    "order": 810,
    "height": 3,
    "weight": 35,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "keen-eye",
      "infiltrator",
      "own-tempo"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 62
      },
      {
        "name": "attack",
        "baseStat": 48
      },
      {
        "name": "defense",
        "baseStat": 54
      },
      {
        "name": "special-attack",
        "baseStat": 63
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 68
      }
    ]
  },
  {
    "id": 678,
    "name": "meowstic-male",
    "order": 811,
    "height": 6,
    "weight": 85,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "keen-eye",
      "infiltrator",
      "prankster"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 74
      },
      {
        "name": "attack",
        "baseStat": 48
      },
      {
        "name": "defense",
        "baseStat": 76
      },
      {
        "name": "special-attack",
        "baseStat": 83
      },
      {
        "name": "special-defense",
        "baseStat": 81
      },
      {
        "name": "speed",
        "baseStat": 104
      }
    ]
  },
  {
    "id": 679,
    "name": "honedge",
    "order": 813,
    "height": 8,
    "weight": 20,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png",
    "types": [
      "steel",
      "ghost"
    ],
    "abilities": [
      "no-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 37
      },
      {
        "name": "speed",
        "baseStat": 28
      }
    ]
  },
  {
    "id": 680,
    "name": "doublade",
    "order": 814,
    "height": 8,
    "weight": 45,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png",
    "types": [
      "steel",
      "ghost"
    ],
    "abilities": [
      "no-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 59
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 150
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 49
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 681,
    "name": "aegislash-shield",
    "order": 815,
    "height": 17,
    "weight": 530,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png",
    "types": [
      "steel",
      "ghost"
    ],
    "abilities": [
      "stance-change"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 140
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 140
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 682,
    "name": "spritzee",
    "order": 817,
    "height": 2,
    "weight": 5,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "healer",
      "aroma-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 52
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 63
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 23
      }
    ]
  },
  {
    "id": 683,
    "name": "aromatisse",
    "order": 818,
    "height": 8,
    "weight": 155,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "healer",
      "aroma-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 101
      },
      {
        "name": "attack",
        "baseStat": 72
      },
      {
        "name": "defense",
        "baseStat": 72
      },
      {
        "name": "special-attack",
        "baseStat": 99
      },
      {
        "name": "special-defense",
        "baseStat": 89
      },
      {
        "name": "speed",
        "baseStat": 29
      }
    ]
  },
  {
    "id": 684,
    "name": "swirlix",
    "order": 819,
    "height": 4,
    "weight": 35,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "sweet-veil",
      "unburden"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 62
      },
      {
        "name": "attack",
        "baseStat": 48
      },
      {
        "name": "defense",
        "baseStat": 66
      },
      {
        "name": "special-attack",
        "baseStat": 59
      },
      {
        "name": "special-defense",
        "baseStat": 57
      },
      {
        "name": "speed",
        "baseStat": 49
      }
    ]
  },
  {
    "id": 685,
    "name": "slurpuff",
    "order": 820,
    "height": 8,
    "weight": 50,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "sweet-veil",
      "unburden"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 82
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 86
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 72
      }
    ]
  },
  {
    "id": 686,
    "name": "inkay",
    "order": 821,
    "height": 4,
    "weight": 35,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png",
    "types": [
      "dark",
      "psychic"
    ],
    "abilities": [
      "contrary",
      "suction-cups",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 53
      },
      {
        "name": "attack",
        "baseStat": 54
      },
      {
        "name": "defense",
        "baseStat": 53
      },
      {
        "name": "special-attack",
        "baseStat": 37
      },
      {
        "name": "special-defense",
        "baseStat": 46
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 687,
    "name": "malamar",
    "order": 822,
    "height": 15,
    "weight": 470,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png",
    "types": [
      "dark",
      "psychic"
    ],
    "abilities": [
      "contrary",
      "suction-cups",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 86
      },
      {
        "name": "attack",
        "baseStat": 92
      },
      {
        "name": "defense",
        "baseStat": 88
      },
      {
        "name": "special-attack",
        "baseStat": 68
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 73
      }
    ]
  },
  {
    "id": 688,
    "name": "binacle",
    "order": 823,
    "height": 5,
    "weight": 310,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png",
    "types": [
      "rock",
      "water"
    ],
    "abilities": [
      "tough-claws",
      "sniper",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 42
      },
      {
        "name": "attack",
        "baseStat": 52
      },
      {
        "name": "defense",
        "baseStat": 67
      },
      {
        "name": "special-attack",
        "baseStat": 39
      },
      {
        "name": "special-defense",
        "baseStat": 56
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 689,
    "name": "barbaracle",
    "order": 824,
    "height": 13,
    "weight": 960,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png",
    "types": [
      "rock",
      "water"
    ],
    "abilities": [
      "tough-claws",
      "sniper",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 72
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 54
      },
      {
        "name": "special-defense",
        "baseStat": 86
      },
      {
        "name": "speed",
        "baseStat": 68
      }
    ]
  },
  {
    "id": 690,
    "name": "skrelp",
    "order": 825,
    "height": 5,
    "weight": 73,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png",
    "types": [
      "poison",
      "water"
    ],
    "abilities": [
      "poison-point",
      "poison-touch",
      "adaptability"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 691,
    "name": "dragalge",
    "order": 826,
    "height": 18,
    "weight": 815,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png",
    "types": [
      "poison",
      "dragon"
    ],
    "abilities": [
      "poison-point",
      "poison-touch",
      "adaptability"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 97
      },
      {
        "name": "special-defense",
        "baseStat": 123
      },
      {
        "name": "speed",
        "baseStat": 44
      }
    ]
  },
  {
    "id": 692,
    "name": "clauncher",
    "order": 827,
    "height": 5,
    "weight": 83,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png",
    "types": [
      "water"
    ],
    "abilities": [
      "mega-launcher"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 53
      },
      {
        "name": "defense",
        "baseStat": 62
      },
      {
        "name": "special-attack",
        "baseStat": 58
      },
      {
        "name": "special-defense",
        "baseStat": 63
      },
      {
        "name": "speed",
        "baseStat": 44
      }
    ]
  },
  {
    "id": 693,
    "name": "clawitzer",
    "order": 828,
    "height": 13,
    "weight": 353,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png",
    "types": [
      "water"
    ],
    "abilities": [
      "mega-launcher"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 71
      },
      {
        "name": "attack",
        "baseStat": 73
      },
      {
        "name": "defense",
        "baseStat": 88
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 89
      },
      {
        "name": "speed",
        "baseStat": 59
      }
    ]
  },
  {
    "id": 694,
    "name": "helioptile",
    "order": 829,
    "height": 5,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png",
    "types": [
      "electric",
      "normal"
    ],
    "abilities": [
      "dry-skin",
      "sand-veil",
      "solar-power"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 44
      },
      {
        "name": "attack",
        "baseStat": 38
      },
      {
        "name": "defense",
        "baseStat": 33
      },
      {
        "name": "special-attack",
        "baseStat": 61
      },
      {
        "name": "special-defense",
        "baseStat": 43
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 695,
    "name": "heliolisk",
    "order": 830,
    "height": 10,
    "weight": 210,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png",
    "types": [
      "electric",
      "normal"
    ],
    "abilities": [
      "dry-skin",
      "sand-veil",
      "solar-power"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 62
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 52
      },
      {
        "name": "special-attack",
        "baseStat": 109
      },
      {
        "name": "special-defense",
        "baseStat": 94
      },
      {
        "name": "speed",
        "baseStat": 109
      }
    ]
  },
  {
    "id": 696,
    "name": "tyrunt",
    "order": 831,
    "height": 8,
    "weight": 260,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png",
    "types": [
      "rock",
      "dragon"
    ],
    "abilities": [
      "strong-jaw",
      "sturdy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 58
      },
      {
        "name": "attack",
        "baseStat": 89
      },
      {
        "name": "defense",
        "baseStat": 77
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 48
      }
    ]
  },
  {
    "id": 697,
    "name": "tyrantrum",
    "order": 832,
    "height": 25,
    "weight": 2700,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png",
    "types": [
      "rock",
      "dragon"
    ],
    "abilities": [
      "strong-jaw",
      "rock-head"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 82
      },
      {
        "name": "attack",
        "baseStat": 121
      },
      {
        "name": "defense",
        "baseStat": 119
      },
      {
        "name": "special-attack",
        "baseStat": 69
      },
      {
        "name": "special-defense",
        "baseStat": 59
      },
      {
        "name": "speed",
        "baseStat": 71
      }
    ]
  },
  {
    "id": 698,
    "name": "amaura",
    "order": 833,
    "height": 13,
    "weight": 252,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png",
    "types": [
      "rock",
      "ice"
    ],
    "abilities": [
      "refrigerate",
      "snow-warning"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 77
      },
      {
        "name": "attack",
        "baseStat": 59
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 67
      },
      {
        "name": "special-defense",
        "baseStat": 63
      },
      {
        "name": "speed",
        "baseStat": 46
      }
    ]
  },
  {
    "id": 699,
    "name": "aurorus",
    "order": 834,
    "height": 27,
    "weight": 2250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png",
    "types": [
      "rock",
      "ice"
    ],
    "abilities": [
      "refrigerate",
      "snow-warning"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 123
      },
      {
        "name": "attack",
        "baseStat": 77
      },
      {
        "name": "defense",
        "baseStat": 72
      },
      {
        "name": "special-attack",
        "baseStat": 99
      },
      {
        "name": "special-defense",
        "baseStat": 92
      },
      {
        "name": "speed",
        "baseStat": 58
      }
    ]
  },
  {
    "id": 700,
    "name": "sylveon",
    "order": 224,
    "height": 10,
    "weight": 235,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "cute-charm",
      "pixilate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 130
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 701,
    "name": "hawlucha",
    "order": 835,
    "height": 8,
    "weight": 215,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png",
    "types": [
      "fighting",
      "flying"
    ],
    "abilities": [
      "limber",
      "unburden",
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 92
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 74
      },
      {
        "name": "special-defense",
        "baseStat": 63
      },
      {
        "name": "speed",
        "baseStat": 118
      }
    ]
  },
  {
    "id": 702,
    "name": "dedenne",
    "order": 836,
    "height": 2,
    "weight": 22,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png",
    "types": [
      "electric",
      "fairy"
    ],
    "abilities": [
      "cheek-pouch",
      "pickup",
      "plus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 67
      },
      {
        "name": "attack",
        "baseStat": 58
      },
      {
        "name": "defense",
        "baseStat": 57
      },
      {
        "name": "special-attack",
        "baseStat": 81
      },
      {
        "name": "special-defense",
        "baseStat": 67
      },
      {
        "name": "speed",
        "baseStat": 101
      }
    ]
  },
  {
    "id": 703,
    "name": "carbink",
    "order": 837,
    "height": 3,
    "weight": 57,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png",
    "types": [
      "rock",
      "fairy"
    ],
    "abilities": [
      "clear-body",
      "sturdy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 150
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 150
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 704,
    "name": "goomy",
    "order": 838,
    "height": 3,
    "weight": 28,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png",
    "types": [
      "dragon"
    ],
    "abilities": [
      "sap-sipper",
      "hydration",
      "gooey"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 705,
    "name": "sliggoo",
    "order": 839,
    "height": 8,
    "weight": 175,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png",
    "types": [
      "dragon"
    ],
    "abilities": [
      "sap-sipper",
      "hydration",
      "gooey"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 53
      },
      {
        "name": "special-attack",
        "baseStat": 83
      },
      {
        "name": "special-defense",
        "baseStat": 113
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 706,
    "name": "goodra",
    "order": 840,
    "height": 20,
    "weight": 1505,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png",
    "types": [
      "dragon"
    ],
    "abilities": [
      "sap-sipper",
      "hydration",
      "gooey"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 150
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 707,
    "name": "klefki",
    "order": 841,
    "height": 2,
    "weight": 30,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png",
    "types": [
      "steel",
      "fairy"
    ],
    "abilities": [
      "prankster",
      "magician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 57
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 91
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 87
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 708,
    "name": "phantump",
    "order": 842,
    "height": 4,
    "weight": 70,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png",
    "types": [
      "ghost",
      "grass"
    ],
    "abilities": [
      "natural-cure",
      "frisk",
      "harvest"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 43
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 48
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 38
      }
    ]
  },
  {
    "id": 709,
    "name": "trevenant",
    "order": 843,
    "height": 15,
    "weight": 710,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png",
    "types": [
      "ghost",
      "grass"
    ],
    "abilities": [
      "natural-cure",
      "frisk",
      "harvest"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 76
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 82
      },
      {
        "name": "speed",
        "baseStat": 56
      }
    ]
  },
  {
    "id": 710,
    "name": "pumpkaboo-average",
    "order": 844,
    "height": 4,
    "weight": 50,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/710.png",
    "types": [
      "ghost",
      "grass"
    ],
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 49
      },
      {
        "name": "attack",
        "baseStat": 66
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 44
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 51
      }
    ]
  },
  {
    "id": 711,
    "name": "gourgeist-average",
    "order": 848,
    "height": 9,
    "weight": 125,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png",
    "types": [
      "ghost",
      "grass"
    ],
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 122
      },
      {
        "name": "special-attack",
        "baseStat": 58
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 84
      }
    ]
  },
  {
    "id": 712,
    "name": "bergmite",
    "order": 852,
    "height": 10,
    "weight": 995,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "own-tempo",
      "ice-body",
      "sturdy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 69
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 32
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 28
      }
    ]
  },
  {
    "id": 713,
    "name": "avalugg",
    "order": 853,
    "height": 20,
    "weight": 5050,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "own-tempo",
      "ice-body",
      "sturdy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 117
      },
      {
        "name": "defense",
        "baseStat": 184
      },
      {
        "name": "special-attack",
        "baseStat": 44
      },
      {
        "name": "special-defense",
        "baseStat": 46
      },
      {
        "name": "speed",
        "baseStat": 28
      }
    ]
  },
  {
    "id": 714,
    "name": "noibat",
    "order": 854,
    "height": 5,
    "weight": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png",
    "types": [
      "flying",
      "dragon"
    ],
    "abilities": [
      "frisk",
      "infiltrator",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 715,
    "name": "noivern",
    "order": 855,
    "height": 15,
    "weight": 850,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png",
    "types": [
      "flying",
      "dragon"
    ],
    "abilities": [
      "frisk",
      "infiltrator",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 97
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 123
      }
    ]
  },
  {
    "id": 716,
    "name": "xerneas",
    "order": 856,
    "height": 30,
    "weight": 2150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "fairy-aura"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 126
      },
      {
        "name": "attack",
        "baseStat": 131
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 131
      },
      {
        "name": "special-defense",
        "baseStat": 98
      },
      {
        "name": "speed",
        "baseStat": 99
      }
    ]
  },
  {
    "id": 717,
    "name": "yveltal",
    "order": 857,
    "height": 58,
    "weight": 2030,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png",
    "types": [
      "dark",
      "flying"
    ],
    "abilities": [
      "dark-aura"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 126
      },
      {
        "name": "attack",
        "baseStat": 131
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 131
      },
      {
        "name": "special-defense",
        "baseStat": 98
      },
      {
        "name": "speed",
        "baseStat": 99
      }
    ]
  },
  {
    "id": 718,
    "name": "zygarde-50",
    "order": 858,
    "height": 50,
    "weight": 3050,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png",
    "types": [
      "dragon",
      "ground"
    ],
    "abilities": [
      "aura-break"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 108
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 121
      },
      {
        "name": "special-attack",
        "baseStat": 81
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 719,
    "name": "diancie",
    "order": 863,
    "height": 7,
    "weight": 88,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png",
    "types": [
      "rock",
      "fairy"
    ],
    "abilities": [
      "clear-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 150
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 150
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 720,
    "name": "hoopa",
    "order": 865,
    "height": 5,
    "weight": 90,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "abilities": [
      "magician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 150
      },
      {
        "name": "special-defense",
        "baseStat": 130
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 721,
    "name": "volcanion",
    "order": 867,
    "height": 17,
    "weight": 1950,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png",
    "types": [
      "fire",
      "water"
    ],
    "abilities": [
      "water-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 722,
    "name": "rowlet",
    "order": 868,
    "height": 3,
    "weight": 15,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png",
    "types": [
      "grass",
      "flying"
    ],
    "abilities": [
      "overgrow",
      "long-reach"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 42
      }
    ]
  },
  {
    "id": 723,
    "name": "dartrix",
    "order": 869,
    "height": 7,
    "weight": 160,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png",
    "types": [
      "grass",
      "flying"
    ],
    "abilities": [
      "overgrow",
      "long-reach"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 52
      }
    ]
  },
  {
    "id": 724,
    "name": "decidueye",
    "order": 870,
    "height": 16,
    "weight": 366,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png",
    "types": [
      "grass",
      "ghost"
    ],
    "abilities": [
      "overgrow",
      "long-reach"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 107
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 725,
    "name": "litten",
    "order": 871,
    "height": 4,
    "weight": 43,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "intimidate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 726,
    "name": "torracat",
    "order": 872,
    "height": 7,
    "weight": 250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "intimidate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 727,
    "name": "incineroar",
    "order": 873,
    "height": 18,
    "weight": 830,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png",
    "types": [
      "fire",
      "dark"
    ],
    "abilities": [
      "blaze",
      "intimidate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 728,
    "name": "popplio",
    "order": 874,
    "height": 4,
    "weight": 75,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "liquid-voice"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 54
      },
      {
        "name": "defense",
        "baseStat": 54
      },
      {
        "name": "special-attack",
        "baseStat": 66
      },
      {
        "name": "special-defense",
        "baseStat": 56
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 729,
    "name": "brionne",
    "order": 875,
    "height": 6,
    "weight": 175,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "liquid-voice"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 69
      },
      {
        "name": "defense",
        "baseStat": 69
      },
      {
        "name": "special-attack",
        "baseStat": 91
      },
      {
        "name": "special-defense",
        "baseStat": 81
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 730,
    "name": "primarina",
    "order": 876,
    "height": 18,
    "weight": 440,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png",
    "types": [
      "water",
      "fairy"
    ],
    "abilities": [
      "torrent",
      "liquid-voice"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 74
      },
      {
        "name": "defense",
        "baseStat": 74
      },
      {
        "name": "special-attack",
        "baseStat": 126
      },
      {
        "name": "special-defense",
        "baseStat": 116
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 731,
    "name": "pikipek",
    "order": 877,
    "height": 3,
    "weight": 12,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "skill-link",
      "pickup"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 732,
    "name": "trumbeak",
    "order": 878,
    "height": 6,
    "weight": 148,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "skill-link",
      "pickup"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 733,
    "name": "toucannon",
    "order": 879,
    "height": 11,
    "weight": 260,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "skill-link",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 734,
    "name": "yungoos",
    "order": 880,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "stakeout",
      "strong-jaw",
      "adaptability"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 48
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 735,
    "name": "gumshoos",
    "order": 881,
    "height": 7,
    "weight": 142,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "stakeout",
      "strong-jaw",
      "adaptability"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 88
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 736,
    "name": "grubbin",
    "order": 883,
    "height": 4,
    "weight": 44,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "swarm"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 47
      },
      {
        "name": "attack",
        "baseStat": 62
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 46
      }
    ]
  },
  {
    "id": 737,
    "name": "charjabug",
    "order": 884,
    "height": 5,
    "weight": 105,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png",
    "types": [
      "bug",
      "electric"
    ],
    "abilities": [
      "battery"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 57
      },
      {
        "name": "attack",
        "baseStat": 82
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 36
      }
    ]
  },
  {
    "id": 738,
    "name": "vikavolt",
    "order": 885,
    "height": 15,
    "weight": 450,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png",
    "types": [
      "bug",
      "electric"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 77
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 145
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 43
      }
    ]
  },
  {
    "id": 739,
    "name": "crabrawler",
    "order": 887,
    "height": 6,
    "weight": 70,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "hyper-cutter",
      "iron-fist",
      "anger-point"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 47
      },
      {
        "name": "attack",
        "baseStat": 82
      },
      {
        "name": "defense",
        "baseStat": 57
      },
      {
        "name": "special-attack",
        "baseStat": 42
      },
      {
        "name": "special-defense",
        "baseStat": 47
      },
      {
        "name": "speed",
        "baseStat": 63
      }
    ]
  },
  {
    "id": 740,
    "name": "crabominable",
    "order": 888,
    "height": 17,
    "weight": 1800,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png",
    "types": [
      "fighting",
      "ice"
    ],
    "abilities": [
      "hyper-cutter",
      "iron-fist",
      "anger-point"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 97
      },
      {
        "name": "attack",
        "baseStat": 132
      },
      {
        "name": "defense",
        "baseStat": 77
      },
      {
        "name": "special-attack",
        "baseStat": 62
      },
      {
        "name": "special-defense",
        "baseStat": 67
      },
      {
        "name": "speed",
        "baseStat": 43
      }
    ]
  },
  {
    "id": 741,
    "name": "oricorio-baile",
    "order": 889,
    "height": 6,
    "weight": 34,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png",
    "types": [
      "fire",
      "flying"
    ],
    "abilities": [
      "dancer"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 98
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 93
      }
    ]
  },
  {
    "id": 742,
    "name": "cutiefly",
    "order": 893,
    "height": 1,
    "weight": 2,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png",
    "types": [
      "bug",
      "fairy"
    ],
    "abilities": [
      "honey-gather",
      "shield-dust",
      "sweet-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 84
      }
    ]
  },
  {
    "id": 743,
    "name": "ribombee",
    "order": 894,
    "height": 2,
    "weight": 5,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png",
    "types": [
      "bug",
      "fairy"
    ],
    "abilities": [
      "honey-gather",
      "shield-dust",
      "sweet-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 124
      }
    ]
  },
  {
    "id": 744,
    "name": "rockruff",
    "order": 896,
    "height": 5,
    "weight": 92,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "keen-eye",
      "vital-spirit",
      "steadfast"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 745,
    "name": "lycanroc-midday",
    "order": 898,
    "height": 8,
    "weight": 250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "keen-eye",
      "sand-rush",
      "steadfast"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 112
      }
    ]
  },
  {
    "id": 746,
    "name": "wishiwashi-solo",
    "order": 901,
    "height": 2,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/746.png",
    "types": [
      "water"
    ],
    "abilities": [
      "schooling"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 20
      },
      {
        "name": "defense",
        "baseStat": 20
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 747,
    "name": "mareanie",
    "order": 903,
    "height": 4,
    "weight": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png",
    "types": [
      "poison",
      "water"
    ],
    "abilities": [
      "merciless",
      "limber",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 53
      },
      {
        "name": "defense",
        "baseStat": 62
      },
      {
        "name": "special-attack",
        "baseStat": 43
      },
      {
        "name": "special-defense",
        "baseStat": 52
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 748,
    "name": "toxapex",
    "order": 904,
    "height": 7,
    "weight": 145,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png",
    "types": [
      "poison",
      "water"
    ],
    "abilities": [
      "merciless",
      "limber",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 63
      },
      {
        "name": "defense",
        "baseStat": 152
      },
      {
        "name": "special-attack",
        "baseStat": 53
      },
      {
        "name": "special-defense",
        "baseStat": 142
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 749,
    "name": "mudbray",
    "order": 905,
    "height": 10,
    "weight": 1100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "own-tempo",
      "stamina",
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 750,
    "name": "mudsdale",
    "order": 906,
    "height": 25,
    "weight": 9200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "own-tempo",
      "stamina",
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 751,
    "name": "dewpider",
    "order": 907,
    "height": 3,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png",
    "types": [
      "water",
      "bug"
    ],
    "abilities": [
      "water-bubble",
      "water-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 38
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 52
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 72
      },
      {
        "name": "speed",
        "baseStat": 27
      }
    ]
  },
  {
    "id": 752,
    "name": "araquanid",
    "order": 908,
    "height": 18,
    "weight": 820,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png",
    "types": [
      "water",
      "bug"
    ],
    "abilities": [
      "water-bubble",
      "water-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 92
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 132
      },
      {
        "name": "speed",
        "baseStat": 42
      }
    ]
  },
  {
    "id": 753,
    "name": "fomantis",
    "order": 910,
    "height": 3,
    "weight": 15,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "leaf-guard",
      "contrary"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 754,
    "name": "lurantis",
    "order": 911,
    "height": 9,
    "weight": 185,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "leaf-guard",
      "contrary"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 755,
    "name": "morelull",
    "order": 913,
    "height": 2,
    "weight": 15,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png",
    "types": [
      "grass",
      "fairy"
    ],
    "abilities": [
      "illuminate",
      "effect-spore",
      "rain-dish"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 756,
    "name": "shiinotic",
    "order": 914,
    "height": 10,
    "weight": 115,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png",
    "types": [
      "grass",
      "fairy"
    ],
    "abilities": [
      "illuminate",
      "effect-spore",
      "rain-dish"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 757,
    "name": "salandit",
    "order": 915,
    "height": 6,
    "weight": 48,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png",
    "types": [
      "poison",
      "fire"
    ],
    "abilities": [
      "corrosion",
      "oblivious"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 48
      },
      {
        "name": "attack",
        "baseStat": 44
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 71
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 77
      }
    ]
  },
  {
    "id": 758,
    "name": "salazzle",
    "order": 916,
    "height": 12,
    "weight": 222,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png",
    "types": [
      "poison",
      "fire"
    ],
    "abilities": [
      "corrosion",
      "oblivious"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 64
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 111
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 117
      }
    ]
  },
  {
    "id": 759,
    "name": "stufful",
    "order": 918,
    "height": 5,
    "weight": 68,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png",
    "types": [
      "normal",
      "fighting"
    ],
    "abilities": [
      "fluffy",
      "klutz",
      "cute-charm"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 760,
    "name": "bewear",
    "order": 919,
    "height": 21,
    "weight": 1350,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png",
    "types": [
      "normal",
      "fighting"
    ],
    "abilities": [
      "fluffy",
      "klutz",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 120
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 761,
    "name": "bounsweet",
    "order": 920,
    "height": 3,
    "weight": 32,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "leaf-guard",
      "oblivious",
      "sweet-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 42
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 38
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 38
      },
      {
        "name": "speed",
        "baseStat": 32
      }
    ]
  },
  {
    "id": 762,
    "name": "steenee",
    "order": 921,
    "height": 7,
    "weight": 82,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "leaf-guard",
      "oblivious",
      "sweet-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 52
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 48
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 48
      },
      {
        "name": "speed",
        "baseStat": 62
      }
    ]
  },
  {
    "id": 763,
    "name": "tsareena",
    "order": 922,
    "height": 12,
    "weight": 214,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "leaf-guard",
      "queenly-majesty",
      "sweet-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 72
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 98
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 98
      },
      {
        "name": "speed",
        "baseStat": 72
      }
    ]
  },
  {
    "id": 764,
    "name": "comfey",
    "order": 923,
    "height": 1,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "flower-veil",
      "triage",
      "natural-cure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 51
      },
      {
        "name": "attack",
        "baseStat": 52
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 82
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 765,
    "name": "oranguru",
    "order": 924,
    "height": 15,
    "weight": 760,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png",
    "types": [
      "normal",
      "psychic"
    ],
    "abilities": [
      "inner-focus",
      "telepathy",
      "symbiosis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 766,
    "name": "passimian",
    "order": 925,
    "height": 20,
    "weight": 828,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "receiver",
      "defiant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 767,
    "name": "wimpod",
    "order": 926,
    "height": 5,
    "weight": 120,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png",
    "types": [
      "bug",
      "water"
    ],
    "abilities": [
      "wimp-out"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 25
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 20
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 768,
    "name": "golisopod",
    "order": 927,
    "height": 20,
    "weight": 1080,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png",
    "types": [
      "bug",
      "water"
    ],
    "abilities": [
      "emergency-exit"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 140
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 769,
    "name": "sandygast",
    "order": 928,
    "height": 5,
    "weight": 700,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png",
    "types": [
      "ghost",
      "ground"
    ],
    "abilities": [
      "water-compaction",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 770,
    "name": "palossand",
    "order": 929,
    "height": 13,
    "weight": 2500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png",
    "types": [
      "ghost",
      "ground"
    ],
    "abilities": [
      "water-compaction",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 771,
    "name": "pyukumuku",
    "order": 930,
    "height": 3,
    "weight": 12,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png",
    "types": [
      "water"
    ],
    "abilities": [
      "innards-out",
      "unaware"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 130
      },
      {
        "name": "speed",
        "baseStat": 5
      }
    ]
  },
  {
    "id": 772,
    "name": "type-null",
    "order": 931,
    "height": 19,
    "weight": 1205,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "battle-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 59
      }
    ]
  },
  {
    "id": 773,
    "name": "silvally",
    "order": 932,
    "height": 23,
    "weight": 1005,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "rks-system"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 774,
    "name": "minior-red-meteor",
    "order": 933,
    "height": 3,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/774.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 775,
    "name": "komala",
    "order": 947,
    "height": 4,
    "weight": 199,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "comatose"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 776,
    "name": "turtonator",
    "order": 948,
    "height": 20,
    "weight": 2120,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png",
    "types": [
      "fire",
      "dragon"
    ],
    "abilities": [
      "shell-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 78
      },
      {
        "name": "defense",
        "baseStat": 135
      },
      {
        "name": "special-attack",
        "baseStat": 91
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 36
      }
    ]
  },
  {
    "id": 777,
    "name": "togedemaru",
    "order": 949,
    "height": 3,
    "weight": 33,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png",
    "types": [
      "electric",
      "steel"
    ],
    "abilities": [
      "iron-barbs",
      "lightning-rod",
      "sturdy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 98
      },
      {
        "name": "defense",
        "baseStat": 63
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 73
      },
      {
        "name": "speed",
        "baseStat": 96
      }
    ]
  },
  {
    "id": 778,
    "name": "mimikyu-disguised",
    "order": 951,
    "height": 2,
    "weight": 7,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "abilities": [
      "disguise"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 96
      }
    ]
  },
  {
    "id": 779,
    "name": "bruxish",
    "order": 955,
    "height": 9,
    "weight": 190,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png",
    "types": [
      "water",
      "psychic"
    ],
    "abilities": [
      "dazzling",
      "strong-jaw",
      "wonder-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 92
      }
    ]
  },
  {
    "id": 780,
    "name": "drampa",
    "order": 956,
    "height": 30,
    "weight": 1850,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png",
    "types": [
      "normal",
      "dragon"
    ],
    "abilities": [
      "berserk",
      "sap-sipper",
      "cloud-nine"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 91
      },
      {
        "name": "speed",
        "baseStat": 36
      }
    ]
  },
  {
    "id": 781,
    "name": "dhelmise",
    "order": 957,
    "height": 39,
    "weight": 2100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png",
    "types": [
      "ghost",
      "grass"
    ],
    "abilities": [
      "steelworker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 131
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 86
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 782,
    "name": "jangmo-o",
    "order": 958,
    "height": 6,
    "weight": 297,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png",
    "types": [
      "dragon"
    ],
    "abilities": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 783,
    "name": "hakamo-o",
    "order": 959,
    "height": 12,
    "weight": 470,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png",
    "types": [
      "dragon",
      "fighting"
    ],
    "abilities": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 784,
    "name": "kommo-o",
    "order": 960,
    "height": 16,
    "weight": 782,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png",
    "types": [
      "dragon",
      "fighting"
    ],
    "abilities": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 125
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 785,
    "name": "tapu-koko",
    "order": 962,
    "height": 18,
    "weight": 205,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png",
    "types": [
      "electric",
      "fairy"
    ],
    "abilities": [
      "electric-surge",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 130
      }
    ]
  },
  {
    "id": 786,
    "name": "tapu-lele",
    "order": 963,
    "height": 12,
    "weight": 186,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "abilities": [
      "psychic-surge",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 787,
    "name": "tapu-bulu",
    "order": 964,
    "height": 19,
    "weight": 455,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png",
    "types": [
      "grass",
      "fairy"
    ],
    "abilities": [
      "grassy-surge",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 788,
    "name": "tapu-fini",
    "order": 965,
    "height": 13,
    "weight": 212,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png",
    "types": [
      "water",
      "fairy"
    ],
    "abilities": [
      "misty-surge",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 130
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 789,
    "name": "cosmog",
    "order": 966,
    "height": 2,
    "weight": 1,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "unaware"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 43
      },
      {
        "name": "attack",
        "baseStat": 29
      },
      {
        "name": "defense",
        "baseStat": 31
      },
      {
        "name": "special-attack",
        "baseStat": 29
      },
      {
        "name": "special-defense",
        "baseStat": 31
      },
      {
        "name": "speed",
        "baseStat": 37
      }
    ]
  },
  {
    "id": 790,
    "name": "cosmoem",
    "order": 967,
    "height": 1,
    "weight": 9999,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "sturdy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 43
      },
      {
        "name": "attack",
        "baseStat": 29
      },
      {
        "name": "defense",
        "baseStat": 131
      },
      {
        "name": "special-attack",
        "baseStat": 29
      },
      {
        "name": "special-defense",
        "baseStat": 131
      },
      {
        "name": "speed",
        "baseStat": 37
      }
    ]
  },
  {
    "id": 791,
    "name": "solgaleo",
    "order": 968,
    "height": 34,
    "weight": 2300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png",
    "types": [
      "psychic",
      "steel"
    ],
    "abilities": [
      "full-metal-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 137
      },
      {
        "name": "attack",
        "baseStat": 137
      },
      {
        "name": "defense",
        "baseStat": 107
      },
      {
        "name": "special-attack",
        "baseStat": 113
      },
      {
        "name": "special-defense",
        "baseStat": 89
      },
      {
        "name": "speed",
        "baseStat": 97
      }
    ]
  },
  {
    "id": 792,
    "name": "lunala",
    "order": 969,
    "height": 40,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "abilities": [
      "shadow-shield"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 137
      },
      {
        "name": "attack",
        "baseStat": 113
      },
      {
        "name": "defense",
        "baseStat": 89
      },
      {
        "name": "special-attack",
        "baseStat": 137
      },
      {
        "name": "special-defense",
        "baseStat": 107
      },
      {
        "name": "speed",
        "baseStat": 97
      }
    ]
  },
  {
    "id": 793,
    "name": "nihilego",
    "order": 970,
    "height": 12,
    "weight": 555,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png",
    "types": [
      "rock",
      "poison"
    ],
    "abilities": [
      "beast-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 109
      },
      {
        "name": "attack",
        "baseStat": 53
      },
      {
        "name": "defense",
        "baseStat": 47
      },
      {
        "name": "special-attack",
        "baseStat": 127
      },
      {
        "name": "special-defense",
        "baseStat": 131
      },
      {
        "name": "speed",
        "baseStat": 103
      }
    ]
  },
  {
    "id": 794,
    "name": "buzzwole",
    "order": 971,
    "height": 24,
    "weight": 3336,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png",
    "types": [
      "bug",
      "fighting"
    ],
    "abilities": [
      "beast-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 107
      },
      {
        "name": "attack",
        "baseStat": 139
      },
      {
        "name": "defense",
        "baseStat": 139
      },
      {
        "name": "special-attack",
        "baseStat": 53
      },
      {
        "name": "special-defense",
        "baseStat": 53
      },
      {
        "name": "speed",
        "baseStat": 79
      }
    ]
  },
  {
    "id": 795,
    "name": "pheromosa",
    "order": 972,
    "height": 18,
    "weight": 250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png",
    "types": [
      "bug",
      "fighting"
    ],
    "abilities": [
      "beast-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 71
      },
      {
        "name": "attack",
        "baseStat": 137
      },
      {
        "name": "defense",
        "baseStat": 37
      },
      {
        "name": "special-attack",
        "baseStat": 137
      },
      {
        "name": "special-defense",
        "baseStat": 37
      },
      {
        "name": "speed",
        "baseStat": 151
      }
    ]
  },
  {
    "id": 796,
    "name": "xurkitree",
    "order": 973,
    "height": 38,
    "weight": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "beast-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 83
      },
      {
        "name": "attack",
        "baseStat": 89
      },
      {
        "name": "defense",
        "baseStat": 71
      },
      {
        "name": "special-attack",
        "baseStat": 173
      },
      {
        "name": "special-defense",
        "baseStat": 71
      },
      {
        "name": "speed",
        "baseStat": 83
      }
    ]
  },
  {
    "id": 797,
    "name": "celesteela",
    "order": 974,
    "height": 92,
    "weight": 9999,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png",
    "types": [
      "steel",
      "flying"
    ],
    "abilities": [
      "beast-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 97
      },
      {
        "name": "attack",
        "baseStat": 101
      },
      {
        "name": "defense",
        "baseStat": 103
      },
      {
        "name": "special-attack",
        "baseStat": 107
      },
      {
        "name": "special-defense",
        "baseStat": 101
      },
      {
        "name": "speed",
        "baseStat": 61
      }
    ]
  },
  {
    "id": 798,
    "name": "kartana",
    "order": 975,
    "height": 3,
    "weight": 1,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png",
    "types": [
      "grass",
      "steel"
    ],
    "abilities": [
      "beast-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 59
      },
      {
        "name": "attack",
        "baseStat": 181
      },
      {
        "name": "defense",
        "baseStat": 131
      },
      {
        "name": "special-attack",
        "baseStat": 59
      },
      {
        "name": "special-defense",
        "baseStat": 31
      },
      {
        "name": "speed",
        "baseStat": 109
      }
    ]
  },
  {
    "id": 799,
    "name": "guzzlord",
    "order": 976,
    "height": 55,
    "weight": 8880,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png",
    "types": [
      "dark",
      "dragon"
    ],
    "abilities": [
      "beast-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 223
      },
      {
        "name": "attack",
        "baseStat": 101
      },
      {
        "name": "defense",
        "baseStat": 53
      },
      {
        "name": "special-attack",
        "baseStat": 97
      },
      {
        "name": "special-defense",
        "baseStat": 53
      },
      {
        "name": "speed",
        "baseStat": 43
      }
    ]
  },
  {
    "id": 800,
    "name": "necrozma",
    "order": 977,
    "height": 24,
    "weight": 2300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "prism-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 97
      },
      {
        "name": "attack",
        "baseStat": 107
      },
      {
        "name": "defense",
        "baseStat": 101
      },
      {
        "name": "special-attack",
        "baseStat": 127
      },
      {
        "name": "special-defense",
        "baseStat": 89
      },
      {
        "name": "speed",
        "baseStat": 79
      }
    ]
  },
  {
    "id": 801,
    "name": "magearna",
    "order": 981,
    "height": 10,
    "weight": 805,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png",
    "types": [
      "steel",
      "fairy"
    ],
    "abilities": [
      "soul-heart"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 802,
    "name": "marshadow",
    "order": 983,
    "height": 7,
    "weight": 222,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png",
    "types": [
      "fighting",
      "ghost"
    ],
    "abilities": [
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 125
      }
    ]
  },
  {
    "id": 803,
    "name": "poipole",
    "order": 984,
    "height": 6,
    "weight": 18,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/803.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "beast-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 67
      },
      {
        "name": "attack",
        "baseStat": 73
      },
      {
        "name": "defense",
        "baseStat": 67
      },
      {
        "name": "special-attack",
        "baseStat": 73
      },
      {
        "name": "special-defense",
        "baseStat": 67
      },
      {
        "name": "speed",
        "baseStat": 73
      }
    ]
  },
  {
    "id": 804,
    "name": "naganadel",
    "order": 985,
    "height": 36,
    "weight": 1500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/804.png",
    "types": [
      "poison",
      "dragon"
    ],
    "abilities": [
      "beast-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 73
      },
      {
        "name": "attack",
        "baseStat": 73
      },
      {
        "name": "defense",
        "baseStat": 73
      },
      {
        "name": "special-attack",
        "baseStat": 127
      },
      {
        "name": "special-defense",
        "baseStat": 73
      },
      {
        "name": "speed",
        "baseStat": 121
      }
    ]
  },
  {
    "id": 805,
    "name": "stakataka",
    "order": 986,
    "height": 55,
    "weight": 8200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png",
    "types": [
      "rock",
      "steel"
    ],
    "abilities": [
      "beast-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 61
      },
      {
        "name": "attack",
        "baseStat": 131
      },
      {
        "name": "defense",
        "baseStat": 211
      },
      {
        "name": "special-attack",
        "baseStat": 53
      },
      {
        "name": "special-defense",
        "baseStat": 101
      },
      {
        "name": "speed",
        "baseStat": 13
      }
    ]
  },
  {
    "id": 806,
    "name": "blacephalon",
    "order": 987,
    "height": 18,
    "weight": 130,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/806.png",
    "types": [
      "fire",
      "ghost"
    ],
    "abilities": [
      "beast-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 53
      },
      {
        "name": "attack",
        "baseStat": 127
      },
      {
        "name": "defense",
        "baseStat": 53
      },
      {
        "name": "special-attack",
        "baseStat": 151
      },
      {
        "name": "special-defense",
        "baseStat": 79
      },
      {
        "name": "speed",
        "baseStat": 107
      }
    ]
  },
  {
    "id": 807,
    "name": "zeraora",
    "order": 988,
    "height": 15,
    "weight": 445,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/807.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "volt-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 88
      },
      {
        "name": "attack",
        "baseStat": 112
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 102
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 143
      }
    ]
  },
  {
    "id": 808,
    "name": "meltan",
    "order": 989,
    "height": 2,
    "weight": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/808.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "magnet-pull"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 46
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 34
      }
    ]
  },
  {
    "id": 809,
    "name": "melmetal",
    "order": 990,
    "height": 25,
    "weight": 8000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/809.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "iron-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 135
      },
      {
        "name": "attack",
        "baseStat": 143
      },
      {
        "name": "defense",
        "baseStat": 143
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 34
      }
    ]
  },
  {
    "id": 810,
    "name": "grookey",
    "order": 991,
    "height": 3,
    "weight": 50,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "grassy-surge"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 811,
    "name": "thwackey",
    "order": 992,
    "height": 7,
    "weight": 140,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/811.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "grassy-surge"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 812,
    "name": "rillaboom",
    "order": 993,
    "height": 21,
    "weight": 900,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/812.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "grassy-surge"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 813,
    "name": "scorbunny",
    "order": 994,
    "height": 3,
    "weight": 45,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/813.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "libero"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 71
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 69
      }
    ]
  },
  {
    "id": 814,
    "name": "raboot",
    "order": 995,
    "height": 6,
    "weight": 90,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/814.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "libero"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 86
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 94
      }
    ]
  },
  {
    "id": 815,
    "name": "cinderace",
    "order": 996,
    "height": 14,
    "weight": 330,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/815.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "libero"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 116
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 119
      }
    ]
  },
  {
    "id": 816,
    "name": "sobble",
    "order": 997,
    "height": 3,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "sniper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 817,
    "name": "drizzile",
    "order": 998,
    "height": 7,
    "weight": 115,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/817.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "sniper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 818,
    "name": "inteleon",
    "order": 999,
    "height": 19,
    "weight": 452,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/818.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "sniper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 819,
    "name": "skwovet",
    "order": 1000,
    "height": 3,
    "weight": 25,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/819.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "cheek-pouch",
      "gluttony"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 25
      }
    ]
  },
  {
    "id": 820,
    "name": "greedent",
    "order": 1001,
    "height": 6,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/820.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "cheek-pouch",
      "gluttony"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 120
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 821,
    "name": "rookidee",
    "order": 1002,
    "height": 2,
    "weight": 18,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/821.png",
    "types": [
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "unnerve",
      "big-pecks"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 38
      },
      {
        "name": "attack",
        "baseStat": 47
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 33
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 57
      }
    ]
  },
  {
    "id": 822,
    "name": "corvisquire",
    "order": 1003,
    "height": 8,
    "weight": 160,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/822.png",
    "types": [
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "unnerve",
      "big-pecks"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 67
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 43
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 77
      }
    ]
  },
  {
    "id": 823,
    "name": "corviknight",
    "order": 1004,
    "height": 22,
    "weight": 750,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png",
    "types": [
      "flying",
      "steel"
    ],
    "abilities": [
      "pressure",
      "unnerve",
      "mirror-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 98
      },
      {
        "name": "attack",
        "baseStat": 87
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 53
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 67
      }
    ]
  },
  {
    "id": 824,
    "name": "blipbug",
    "order": 1005,
    "height": 4,
    "weight": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/824.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "swarm",
      "compound-eyes",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 25
      },
      {
        "name": "attack",
        "baseStat": 20
      },
      {
        "name": "defense",
        "baseStat": 20
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 825,
    "name": "dottler",
    "order": 1006,
    "height": 4,
    "weight": 195,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/825.png",
    "types": [
      "bug",
      "psychic"
    ],
    "abilities": [
      "swarm",
      "compound-eyes",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 826,
    "name": "orbeetle",
    "order": 1007,
    "height": 4,
    "weight": 408,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/826.png",
    "types": [
      "bug",
      "psychic"
    ],
    "abilities": [
      "swarm",
      "frisk",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 827,
    "name": "nickit",
    "order": 1008,
    "height": 6,
    "weight": 89,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/827.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "run-away",
      "unburden",
      "stakeout"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 28
      },
      {
        "name": "defense",
        "baseStat": 28
      },
      {
        "name": "special-attack",
        "baseStat": 47
      },
      {
        "name": "special-defense",
        "baseStat": 52
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 828,
    "name": "thievul",
    "order": 1009,
    "height": 12,
    "weight": 199,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/828.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "run-away",
      "unburden",
      "stakeout"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 58
      },
      {
        "name": "defense",
        "baseStat": 58
      },
      {
        "name": "special-attack",
        "baseStat": 87
      },
      {
        "name": "special-defense",
        "baseStat": 92
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 829,
    "name": "gossifleur",
    "order": 1010,
    "height": 4,
    "weight": 22,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/829.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "cotton-down",
      "regenerator",
      "effect-spore"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 10
      }
    ]
  },
  {
    "id": 830,
    "name": "eldegoss",
    "order": 1011,
    "height": 5,
    "weight": 25,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/830.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "cotton-down",
      "regenerator",
      "effect-spore"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 831,
    "name": "wooloo",
    "order": 1012,
    "height": 6,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/831.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "fluffy",
      "run-away",
      "bulletproof"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 42
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 48
      }
    ]
  },
  {
    "id": 832,
    "name": "dubwool",
    "order": 1013,
    "height": 13,
    "weight": 430,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/832.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "fluffy",
      "steadfast",
      "bulletproof"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 72
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 88
      }
    ]
  },
  {
    "id": 833,
    "name": "chewtle",
    "order": 1014,
    "height": 3,
    "weight": 85,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/833.png",
    "types": [
      "water"
    ],
    "abilities": [
      "strong-jaw",
      "shell-armor",
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 64
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 38
      },
      {
        "name": "special-defense",
        "baseStat": 38
      },
      {
        "name": "speed",
        "baseStat": 44
      }
    ]
  },
  {
    "id": 834,
    "name": "drednaw",
    "order": 1015,
    "height": 10,
    "weight": 1155,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/834.png",
    "types": [
      "water",
      "rock"
    ],
    "abilities": [
      "strong-jaw",
      "shell-armor",
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 48
      },
      {
        "name": "special-defense",
        "baseStat": 68
      },
      {
        "name": "speed",
        "baseStat": 74
      }
    ]
  },
  {
    "id": 835,
    "name": "yamper",
    "order": 1016,
    "height": 3,
    "weight": 135,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/835.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "ball-fetch",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 59
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 26
      }
    ]
  },
  {
    "id": 836,
    "name": "boltund",
    "order": 1017,
    "height": 10,
    "weight": 340,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/836.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "strong-jaw",
      "competitive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 69
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 121
      }
    ]
  },
  {
    "id": 837,
    "name": "rolycoly",
    "order": 1018,
    "height": 3,
    "weight": 120,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/837.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "steam-engine",
      "heatproof",
      "flash-fire"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 838,
    "name": "carkol",
    "order": 1019,
    "height": 11,
    "weight": 780,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/838.png",
    "types": [
      "rock",
      "fire"
    ],
    "abilities": [
      "steam-engine",
      "flame-body",
      "flash-fire"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 839,
    "name": "coalossal",
    "order": 1020,
    "height": 28,
    "weight": 3105,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/839.png",
    "types": [
      "rock",
      "fire"
    ],
    "abilities": [
      "steam-engine",
      "flame-body",
      "flash-fire"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 840,
    "name": "applin",
    "order": 1021,
    "height": 2,
    "weight": 5,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/840.png",
    "types": [
      "grass",
      "dragon"
    ],
    "abilities": [
      "ripen",
      "gluttony",
      "bulletproof"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 841,
    "name": "flapple",
    "order": 1022,
    "height": 3,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/841.png",
    "types": [
      "grass",
      "dragon"
    ],
    "abilities": [
      "ripen",
      "gluttony",
      "hustle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 842,
    "name": "appletun",
    "order": 1023,
    "height": 4,
    "weight": 130,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/842.png",
    "types": [
      "grass",
      "dragon"
    ],
    "abilities": [
      "ripen",
      "gluttony",
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 843,
    "name": "silicobra",
    "order": 1024,
    "height": 22,
    "weight": 76,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/843.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "sand-spit",
      "shed-skin",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 52
      },
      {
        "name": "attack",
        "baseStat": 57
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 46
      }
    ]
  },
  {
    "id": 844,
    "name": "sandaconda",
    "order": 1025,
    "height": 38,
    "weight": 655,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/844.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "sand-spit",
      "shed-skin",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 72
      },
      {
        "name": "attack",
        "baseStat": 107
      },
      {
        "name": "defense",
        "baseStat": 125
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 71
      }
    ]
  },
  {
    "id": 845,
    "name": "cramorant",
    "order": 1026,
    "height": 8,
    "weight": 180,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/845.png",
    "types": [
      "flying",
      "water"
    ],
    "abilities": [
      "gulp-missile"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 846,
    "name": "arrokuda",
    "order": 1029,
    "height": 5,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/846.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "propeller-tail"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 41
      },
      {
        "name": "attack",
        "baseStat": 63
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 66
      }
    ]
  },
  {
    "id": 847,
    "name": "barraskewda",
    "order": 1030,
    "height": 13,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/847.png",
    "types": [
      "water"
    ],
    "abilities": [
      "swift-swim",
      "propeller-tail"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 61
      },
      {
        "name": "attack",
        "baseStat": 123
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 136
      }
    ]
  },
  {
    "id": 848,
    "name": "toxel",
    "order": 1031,
    "height": 4,
    "weight": 110,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/848.png",
    "types": [
      "electric",
      "poison"
    ],
    "abilities": [
      "rattled",
      "static",
      "klutz"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 38
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 54
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 849,
    "name": "toxtricity-amped",
    "order": 1032,
    "height": 16,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/849.png",
    "types": [
      "electric",
      "poison"
    ],
    "abilities": [
      "punk-rock",
      "plus",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 98
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 114
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 850,
    "name": "sizzlipede",
    "order": 1034,
    "height": 7,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/850.png",
    "types": [
      "fire",
      "bug"
    ],
    "abilities": [
      "flash-fire",
      "white-smoke",
      "flame-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 851,
    "name": "centiskorch",
    "order": 1035,
    "height": 30,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/851.png",
    "types": [
      "fire",
      "bug"
    ],
    "abilities": [
      "flash-fire",
      "white-smoke",
      "flame-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 852,
    "name": "clobbopus",
    "order": 1036,
    "height": 6,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/852.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "limber",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 68
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 32
      }
    ]
  },
  {
    "id": 853,
    "name": "grapploct",
    "order": 1037,
    "height": 16,
    "weight": 390,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/853.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "limber",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 118
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 42
      }
    ]
  },
  {
    "id": 854,
    "name": "sinistea",
    "order": 1038,
    "height": 1,
    "weight": 2,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/854.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "weak-armor",
      "cursed-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 74
      },
      {
        "name": "special-defense",
        "baseStat": 54
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 855,
    "name": "polteageist",
    "order": 1039,
    "height": 2,
    "weight": 4,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/855.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "weak-armor",
      "cursed-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 134
      },
      {
        "name": "special-defense",
        "baseStat": 114
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 856,
    "name": "hatenna",
    "order": 1040,
    "height": 4,
    "weight": 34,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/856.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "healer",
      "anticipation",
      "magic-bounce"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 42
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 56
      },
      {
        "name": "special-defense",
        "baseStat": 53
      },
      {
        "name": "speed",
        "baseStat": 39
      }
    ]
  },
  {
    "id": 857,
    "name": "hattrem",
    "order": 1041,
    "height": 6,
    "weight": 48,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/857.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "healer",
      "anticipation",
      "magic-bounce"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 57
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 86
      },
      {
        "name": "special-defense",
        "baseStat": 73
      },
      {
        "name": "speed",
        "baseStat": 49
      }
    ]
  },
  {
    "id": 858,
    "name": "hatterene",
    "order": 1042,
    "height": 21,
    "weight": 51,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "abilities": [
      "healer",
      "anticipation",
      "magic-bounce"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 57
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 136
      },
      {
        "name": "special-defense",
        "baseStat": 103
      },
      {
        "name": "speed",
        "baseStat": 29
      }
    ]
  },
  {
    "id": 859,
    "name": "impidimp",
    "order": 1043,
    "height": 4,
    "weight": 55,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/859.png",
    "types": [
      "dark",
      "fairy"
    ],
    "abilities": [
      "prankster",
      "frisk",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 860,
    "name": "morgrem",
    "order": 1044,
    "height": 8,
    "weight": 125,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/860.png",
    "types": [
      "dark",
      "fairy"
    ],
    "abilities": [
      "prankster",
      "frisk",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 861,
    "name": "grimmsnarl",
    "order": 1045,
    "height": 15,
    "weight": 610,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png",
    "types": [
      "dark",
      "fairy"
    ],
    "abilities": [
      "prankster",
      "frisk",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 862,
    "name": "obstagoon",
    "order": 1046,
    "height": 16,
    "weight": 460,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/862.png",
    "types": [
      "dark",
      "normal"
    ],
    "abilities": [
      "reckless",
      "guts",
      "defiant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 93
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 101
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 81
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 863,
    "name": "perrserker",
    "order": 1047,
    "height": 8,
    "weight": 280,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/863.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "battle-armor",
      "tough-claws",
      "steely-spirit"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 864,
    "name": "cursola",
    "order": 1048,
    "height": 10,
    "weight": 4,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/864.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "weak-armor",
      "perish-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 145
      },
      {
        "name": "special-defense",
        "baseStat": 130
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 865,
    "name": "sirfetchd",
    "order": 1049,
    "height": 8,
    "weight": 1170,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/865.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "steadfast",
      "scrappy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 62
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 68
      },
      {
        "name": "special-defense",
        "baseStat": 82
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 866,
    "name": "mr-rime",
    "order": 1050,
    "height": 15,
    "weight": 582,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/866.png",
    "types": [
      "ice",
      "psychic"
    ],
    "abilities": [
      "tangled-feet",
      "screen-cleaner",
      "ice-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 867,
    "name": "runerigus",
    "order": 1051,
    "height": 16,
    "weight": 666,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/867.png",
    "types": [
      "ground",
      "ghost"
    ],
    "abilities": [
      "wandering-spirit"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 58
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 145
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 868,
    "name": "milcery",
    "order": 1052,
    "height": 2,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/868.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "sweet-veil",
      "aroma-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 61
      },
      {
        "name": "speed",
        "baseStat": 34
      }
    ]
  },
  {
    "id": 869,
    "name": "alcremie",
    "order": 1053,
    "height": 3,
    "weight": 5,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "sweet-veil",
      "aroma-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 121
      },
      {
        "name": "speed",
        "baseStat": 64
      }
    ]
  },
  {
    "id": 870,
    "name": "falinks",
    "order": 1054,
    "height": 30,
    "weight": 620,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/870.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "battle-armor",
      "defiant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 871,
    "name": "pincurchin",
    "order": 1055,
    "height": 3,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/871.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "lightning-rod",
      "electric-surge"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 48
      },
      {
        "name": "attack",
        "baseStat": 101
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 91
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 872,
    "name": "snom",
    "order": 1056,
    "height": 3,
    "weight": 38,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/872.png",
    "types": [
      "ice",
      "bug"
    ],
    "abilities": [
      "shield-dust",
      "ice-scales"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 25
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 873,
    "name": "frosmoth",
    "order": 1057,
    "height": 13,
    "weight": 420,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/873.png",
    "types": [
      "ice",
      "bug"
    ],
    "abilities": [
      "shield-dust",
      "ice-scales"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 874,
    "name": "stonjourner",
    "order": 1058,
    "height": 25,
    "weight": 5200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/874.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "power-spot"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 135
      },
      {
        "name": "special-attack",
        "baseStat": 20
      },
      {
        "name": "special-defense",
        "baseStat": 20
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 875,
    "name": "eiscue-ice",
    "order": 1059,
    "height": 14,
    "weight": 890,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/875.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "ice-face"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 876,
    "name": "indeedee-male",
    "order": 1061,
    "height": 9,
    "weight": 280,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/876.png",
    "types": [
      "psychic",
      "normal"
    ],
    "abilities": [
      "inner-focus",
      "synchronize",
      "psychic-surge"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 877,
    "name": "morpeko-full-belly",
    "order": 1063,
    "height": 3,
    "weight": 30,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/877.png",
    "types": [
      "electric",
      "dark"
    ],
    "abilities": [
      "hunger-switch"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 58
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 58
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 58
      },
      {
        "name": "speed",
        "baseStat": 97
      }
    ]
  },
  {
    "id": 878,
    "name": "cufant",
    "order": 1065,
    "height": 12,
    "weight": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/878.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "sheer-force",
      "heavy-metal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 72
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 49
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 49
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 879,
    "name": "copperajah",
    "order": 1066,
    "height": 30,
    "weight": 6500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/879.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "sheer-force",
      "heavy-metal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 122
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 69
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 69
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 880,
    "name": "dracozolt",
    "order": 1067,
    "height": 18,
    "weight": 1900,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/880.png",
    "types": [
      "electric",
      "dragon"
    ],
    "abilities": [
      "volt-absorb",
      "hustle",
      "sand-rush"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 881,
    "name": "arctozolt",
    "order": 1068,
    "height": 23,
    "weight": 1500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/881.png",
    "types": [
      "electric",
      "ice"
    ],
    "abilities": [
      "volt-absorb",
      "static",
      "slush-rush"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 882,
    "name": "dracovish",
    "order": 1069,
    "height": 23,
    "weight": 2150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/882.png",
    "types": [
      "water",
      "dragon"
    ],
    "abilities": [
      "water-absorb",
      "strong-jaw",
      "sand-rush"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 883,
    "name": "arctovish",
    "order": 1070,
    "height": 20,
    "weight": 1750,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/883.png",
    "types": [
      "water",
      "ice"
    ],
    "abilities": [
      "water-absorb",
      "ice-body",
      "slush-rush"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 884,
    "name": "duraludon",
    "order": 1071,
    "height": 18,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/884.png",
    "types": [
      "steel",
      "dragon"
    ],
    "abilities": [
      "light-metal",
      "heavy-metal",
      "stalwart"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 885,
    "name": "dreepy",
    "order": 1072,
    "height": 5,
    "weight": 20,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/885.png",
    "types": [
      "dragon",
      "ghost"
    ],
    "abilities": [
      "clear-body",
      "infiltrator",
      "cursed-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 28
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 82
      }
    ]
  },
  {
    "id": 886,
    "name": "drakloak",
    "order": 1073,
    "height": 14,
    "weight": 110,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/886.png",
    "types": [
      "dragon",
      "ghost"
    ],
    "abilities": [
      "clear-body",
      "infiltrator",
      "cursed-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 102
      }
    ]
  },
  {
    "id": 887,
    "name": "dragapult",
    "order": 1074,
    "height": 30,
    "weight": 500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png",
    "types": [
      "dragon",
      "ghost"
    ],
    "abilities": [
      "clear-body",
      "infiltrator",
      "cursed-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 88
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 142
      }
    ]
  },
  {
    "id": 888,
    "name": "zacian",
    "order": 1075,
    "height": 28,
    "weight": 1100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "intrepid-sword"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 92
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 138
      }
    ]
  },
  {
    "id": 889,
    "name": "zamazenta",
    "order": 1077,
    "height": 29,
    "weight": 2100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "dauntless-shield"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 92
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 138
      }
    ]
  },
  {
    "id": 890,
    "name": "eternatus",
    "order": 1079,
    "height": 200,
    "weight": 9500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/890.png",
    "types": [
      "poison",
      "dragon"
    ],
    "abilities": [
      "pressure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 140
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 145
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 130
      }
    ]
  },
  {
    "id": 891,
    "name": "kubfu",
    "order": 1081,
    "height": 6,
    "weight": 120,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/891.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 53
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 72
      }
    ]
  },
  {
    "id": 892,
    "name": "urshifu-single-strike",
    "order": 1082,
    "height": 19,
    "weight": 1050,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/892.png",
    "types": [
      "fighting",
      "dark"
    ],
    "abilities": [
      "unseen-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 63
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 97
      }
    ]
  },
  {
    "id": 893,
    "name": "zarude",
    "order": 1084,
    "height": 18,
    "weight": 700,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/893.png",
    "types": [
      "dark",
      "grass"
    ],
    "abilities": [
      "leaf-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 894,
    "name": "regieleki",
    "order": 1086,
    "height": 12,
    "weight": 1450,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/894.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "transistor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 200
      }
    ]
  },
  {
    "id": 895,
    "name": "regidrago",
    "order": 1087,
    "height": 21,
    "weight": 2000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/895.png",
    "types": [
      "dragon"
    ],
    "abilities": [
      "dragons-maw"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 200
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 896,
    "name": "glastrier",
    "order": 1088,
    "height": 22,
    "weight": 8000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/896.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "chilling-neigh"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 145
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 897,
    "name": "spectrier",
    "order": 1089,
    "height": 20,
    "weight": 445,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/897.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "grim-neigh"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 145
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 130
      }
    ]
  },
  {
    "id": 898,
    "name": "calyrex",
    "order": 1090,
    "height": 11,
    "weight": 77,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png",
    "types": [
      "psychic",
      "grass"
    ],
    "abilities": [
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 899,
    "name": "wyrdeer",
    "order": -1,
    "height": 18,
    "weight": 951,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/899.png",
    "types": [
      "normal",
      "psychic"
    ],
    "abilities": [
      "intimidate",
      "frisk",
      "sap-sipper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 103
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 72
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 900,
    "name": "kleavor",
    "order": -1,
    "height": 18,
    "weight": 890,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/900.png",
    "types": [
      "bug",
      "rock"
    ],
    "abilities": [
      "swarm",
      "sheer-force",
      "sharpness"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 901,
    "name": "ursaluna",
    "order": -1,
    "height": 24,
    "weight": 2900,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/901.png",
    "types": [
      "ground",
      "normal"
    ],
    "abilities": [
      "guts",
      "bulletproof",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 130
      },
      {
        "name": "attack",
        "baseStat": 140
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 902,
    "name": "basculegion-male",
    "order": -1,
    "height": 30,
    "weight": 1100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/902.png",
    "types": [
      "water",
      "ghost"
    ],
    "abilities": [
      "swift-swim",
      "adaptability",
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 120
      },
      {
        "name": "attack",
        "baseStat": 112
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 78
      }
    ]
  },
  {
    "id": 903,
    "name": "sneasler",
    "order": -1,
    "height": 13,
    "weight": 430,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/903.png",
    "types": [
      "fighting",
      "poison"
    ],
    "abilities": [
      "pressure",
      "unburden",
      "poison-touch"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 904,
    "name": "overqwil",
    "order": -1,
    "height": 25,
    "weight": 605,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/904.png",
    "types": [
      "dark",
      "poison"
    ],
    "abilities": [
      "poison-point",
      "swift-swim",
      "intimidate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 905,
    "name": "enamorus-incarnate",
    "order": -1,
    "height": 16,
    "weight": 480,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/905.png",
    "types": [
      "fairy",
      "flying"
    ],
    "abilities": [
      "cute-charm",
      "contrary"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 74
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 106
      }
    ]
  },
  {
    "id": 906,
    "name": "sprigatito",
    "order": 906,
    "height": 4,
    "weight": 41,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "protean"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 61
      },
      {
        "name": "defense",
        "baseStat": 54
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 907,
    "name": "floragato",
    "order": 907,
    "height": 9,
    "weight": 122,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/907.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "protean"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 61
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 63
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 63
      },
      {
        "name": "speed",
        "baseStat": 83
      }
    ]
  },
  {
    "id": 908,
    "name": "meowscarada",
    "order": 908,
    "height": 15,
    "weight": 312,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/908.png",
    "types": [
      "grass",
      "dark"
    ],
    "abilities": [
      "overgrow",
      "protean"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 76
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 81
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 123
      }
    ]
  },
  {
    "id": 909,
    "name": "fuecoco",
    "order": 909,
    "height": 4,
    "weight": 98,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "unaware"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 67
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 59
      },
      {
        "name": "special-attack",
        "baseStat": 63
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 36
      }
    ]
  },
  {
    "id": 910,
    "name": "crocalor",
    "order": 910,
    "height": 10,
    "weight": 307,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/910.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "unaware"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 81
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 78
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 58
      },
      {
        "name": "speed",
        "baseStat": 49
      }
    ]
  },
  {
    "id": 911,
    "name": "skeledirge",
    "order": 911,
    "height": 16,
    "weight": 3265,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/911.png",
    "types": [
      "fire",
      "ghost"
    ],
    "abilities": [
      "blaze",
      "unaware"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 104
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 66
      }
    ]
  },
  {
    "id": 912,
    "name": "quaxly",
    "order": 912,
    "height": 5,
    "weight": 61,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "moxie"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 913,
    "name": "quaxwell",
    "order": 913,
    "height": 12,
    "weight": 215,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/913.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "moxie"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 914,
    "name": "quaquaval",
    "order": 914,
    "height": 18,
    "weight": 619,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/914.png",
    "types": [
      "water",
      "fighting"
    ],
    "abilities": [
      "torrent",
      "moxie"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 915,
    "name": "lechonk",
    "order": 915,
    "height": 5,
    "weight": 102,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/915.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "aroma-veil",
      "gluttony",
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 54
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 916,
    "name": "oinkologne",
    "order": 916,
    "height": 10,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/916.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "lingering-aroma",
      "gluttony",
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 59
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 917,
    "name": "tarountula",
    "order": 918,
    "height": 3,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/917.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "insomnia",
      "stakeout"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 41
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 29
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 918,
    "name": "spidops",
    "order": 919,
    "height": 10,
    "weight": 165,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/918.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "insomnia",
      "stakeout"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 79
      },
      {
        "name": "defense",
        "baseStat": 92
      },
      {
        "name": "special-attack",
        "baseStat": 52
      },
      {
        "name": "special-defense",
        "baseStat": 86
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 919,
    "name": "nymble",
    "order": 920,
    "height": 2,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/919.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "swarm",
      "tinted-lens"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 33
      },
      {
        "name": "attack",
        "baseStat": 46
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 21
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 920,
    "name": "lokix",
    "order": 921,
    "height": 10,
    "weight": 175,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/920.png",
    "types": [
      "bug",
      "dark"
    ],
    "abilities": [
      "swarm",
      "tinted-lens"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 71
      },
      {
        "name": "attack",
        "baseStat": 102
      },
      {
        "name": "defense",
        "baseStat": 78
      },
      {
        "name": "special-attack",
        "baseStat": 52
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 92
      }
    ]
  },
  {
    "id": 921,
    "name": "pawmi",
    "order": 954,
    "height": 3,
    "weight": 25,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/921.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "natural-cure",
      "iron-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 20
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 922,
    "name": "pawmo",
    "order": 955,
    "height": 4,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/922.png",
    "types": [
      "electric",
      "fighting"
    ],
    "abilities": [
      "volt-absorb",
      "natural-cure",
      "iron-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 923,
    "name": "pawmot",
    "order": 956,
    "height": 9,
    "weight": 410,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/923.png",
    "types": [
      "electric",
      "fighting"
    ],
    "abilities": [
      "volt-absorb",
      "natural-cure",
      "iron-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 924,
    "name": "tandemaus",
    "order": 945,
    "height": 3,
    "weight": 18,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/924.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "run-away",
      "pickup",
      "own-tempo"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 925,
    "name": "maushold",
    "order": 946,
    "height": 3,
    "weight": 23,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/925.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "friend-guard",
      "cheek-pouch",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 74
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 111
      }
    ]
  },
  {
    "id": 926,
    "name": "fidough",
    "order": 970,
    "height": 3,
    "weight": 109,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/926.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "own-tempo",
      "klutz"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 37
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 927,
    "name": "dachsbun",
    "order": 971,
    "height": 5,
    "weight": 149,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/927.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "well-baked-body",
      "aroma-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 57
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 928,
    "name": "smoliv",
    "order": 935,
    "height": 3,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/928.png",
    "types": [
      "grass",
      "normal"
    ],
    "abilities": [
      "early-bird",
      "harvest"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 41
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 58
      },
      {
        "name": "special-defense",
        "baseStat": 51
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 929,
    "name": "dolliv",
    "order": 936,
    "height": 6,
    "weight": 119,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/929.png",
    "types": [
      "grass",
      "normal"
    ],
    "abilities": [
      "early-bird",
      "harvest"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 52
      },
      {
        "name": "attack",
        "baseStat": 53
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 78
      },
      {
        "name": "special-defense",
        "baseStat": 78
      },
      {
        "name": "speed",
        "baseStat": 33
      }
    ]
  },
  {
    "id": 930,
    "name": "arboliva",
    "order": 937,
    "height": 14,
    "weight": 482,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/930.png",
    "types": [
      "grass",
      "normal"
    ],
    "abilities": [
      "seed-sower",
      "harvest"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 69
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 109
      },
      {
        "name": "speed",
        "baseStat": 39
      }
    ]
  },
  {
    "id": 931,
    "name": "squawkabilly",
    "order": 960,
    "height": 6,
    "weight": 24,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/931.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "intimidate",
      "hustle",
      "guts"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 82
      },
      {
        "name": "attack",
        "baseStat": 96
      },
      {
        "name": "defense",
        "baseStat": 51
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 51
      },
      {
        "name": "speed",
        "baseStat": 92
      }
    ]
  },
  {
    "id": 932,
    "name": "nacli",
    "order": 963,
    "height": 4,
    "weight": 160,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/932.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "purifying-salt",
      "sturdy",
      "clear-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 25
      }
    ]
  },
  {
    "id": 933,
    "name": "naclstack",
    "order": 964,
    "height": 6,
    "weight": 1050,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/933.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "purifying-salt",
      "sturdy",
      "clear-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 934,
    "name": "garganacl",
    "order": 965,
    "height": 23,
    "weight": 2400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/934.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "purifying-salt",
      "sturdy",
      "clear-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 935,
    "name": "charcadet",
    "order": 1003,
    "height": 6,
    "weight": 105,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/935.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "flash-fire",
      "flame-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 936,
    "name": "armarouge",
    "order": 1004,
    "height": 15,
    "weight": 850,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/936.png",
    "types": [
      "fire",
      "psychic"
    ],
    "abilities": [
      "flash-fire",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 937,
    "name": "ceruledge",
    "order": 1005,
    "height": 16,
    "weight": 620,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/937.png",
    "types": [
      "fire",
      "ghost"
    ],
    "abilities": [
      "flash-fire",
      "weak-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 938,
    "name": "tadbulb",
    "order": 940,
    "height": 3,
    "weight": 4,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/938.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "own-tempo",
      "static",
      "damp"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 61
      },
      {
        "name": "attack",
        "baseStat": 31
      },
      {
        "name": "defense",
        "baseStat": 41
      },
      {
        "name": "special-attack",
        "baseStat": 59
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 939,
    "name": "bellibolt",
    "order": 941,
    "height": 12,
    "weight": 1130,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/939.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "electromorphosis",
      "static",
      "damp"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 109
      },
      {
        "name": "attack",
        "baseStat": 64
      },
      {
        "name": "defense",
        "baseStat": 91
      },
      {
        "name": "special-attack",
        "baseStat": 103
      },
      {
        "name": "special-defense",
        "baseStat": 83
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 940,
    "name": "wattrel",
    "order": 957,
    "height": 4,
    "weight": 36,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/940.png",
    "types": [
      "electric",
      "flying"
    ],
    "abilities": [
      "wind-power",
      "volt-absorb",
      "competitive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 941,
    "name": "kilowattrel",
    "order": 958,
    "height": 14,
    "weight": 386,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/941.png",
    "types": [
      "electric",
      "flying"
    ],
    "abilities": [
      "wind-power",
      "volt-absorb",
      "competitive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 125
      }
    ]
  },
  {
    "id": 942,
    "name": "maschiff",
    "order": 972,
    "height": 5,
    "weight": 160,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/942.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "intimidate",
      "run-away",
      "stakeout"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 78
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 51
      },
      {
        "name": "speed",
        "baseStat": 51
      }
    ]
  },
  {
    "id": 943,
    "name": "mabosstiff",
    "order": 973,
    "height": 11,
    "weight": 610,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/943.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "intimidate",
      "guard-dog",
      "stakeout"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 944,
    "name": "shroodle",
    "order": 968,
    "height": 2,
    "weight": 7,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/944.png",
    "types": [
      "poison",
      "normal"
    ],
    "abilities": [
      "unburden",
      "pickpocket",
      "prankster"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 945,
    "name": "grafaiai",
    "order": 969,
    "height": 7,
    "weight": 272,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/945.png",
    "types": [
      "poison",
      "normal"
    ],
    "abilities": [
      "unburden",
      "poison-touch",
      "prankster"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 63
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 72
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 946,
    "name": "bramblin",
    "order": 974,
    "height": 6,
    "weight": 6,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/946.png",
    "types": [
      "grass",
      "ghost"
    ],
    "abilities": [
      "wind-rider",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 947,
    "name": "brambleghast",
    "order": 975,
    "height": 12,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/947.png",
    "types": [
      "grass",
      "ghost"
    ],
    "abilities": [
      "wind-rider",
      "infiltrator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 948,
    "name": "toedscool",
    "order": 1006,
    "height": 9,
    "weight": 330,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/948.png",
    "types": [
      "ground",
      "grass"
    ],
    "abilities": [
      "mycelium-might",
      "mycelium-might"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 40
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 949,
    "name": "toedscruel",
    "order": 1007,
    "height": 19,
    "weight": 580,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/949.png",
    "types": [
      "ground",
      "grass"
    ],
    "abilities": [
      "mycelium-might",
      "mycelium-might"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 950,
    "name": "klawf",
    "order": 962,
    "height": 13,
    "weight": 790,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/950.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "anger-shell",
      "shell-armor",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 951,
    "name": "capsakid",
    "order": 938,
    "height": 3,
    "weight": 30,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/951.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "chlorophyll",
      "insomnia",
      "klutz"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 62
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 62
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 952,
    "name": "scovillain",
    "order": 939,
    "height": 9,
    "weight": 150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/952.png",
    "types": [
      "grass",
      "fire"
    ],
    "abilities": [
      "chlorophyll",
      "insomnia",
      "moody"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 108
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 108
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 953,
    "name": "rellor",
    "order": 922,
    "height": 2,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/953.png",
    "types": [
      "bug"
    ],
    "abilities": [
      "compound-eyes",
      "shed-skin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 41
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 31
      },
      {
        "name": "special-defense",
        "baseStat": 58
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 954,
    "name": "rabsca",
    "order": 923,
    "height": 3,
    "weight": 35,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/954.png",
    "types": [
      "bug",
      "psychic"
    ],
    "abilities": [
      "synchronize",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 115
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 955,
    "name": "flittle",
    "order": 926,
    "height": 2,
    "weight": 15,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/955.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "anticipation",
      "frisk",
      "speed-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 956,
    "name": "espathra",
    "order": 927,
    "height": 19,
    "weight": 900,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/956.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "opportunist",
      "frisk",
      "speed-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 101
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 957,
    "name": "tinkatink",
    "order": 1000,
    "height": 4,
    "weight": 89,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/957.png",
    "types": [
      "fairy",
      "steel"
    ],
    "abilities": [
      "mold-breaker",
      "own-tempo",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 64
      },
      {
        "name": "speed",
        "baseStat": 58
      }
    ]
  },
  {
    "id": 958,
    "name": "tinkatuff",
    "order": 1001,
    "height": 7,
    "weight": 591,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/958.png",
    "types": [
      "fairy",
      "steel"
    ],
    "abilities": [
      "mold-breaker",
      "own-tempo",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 82
      },
      {
        "name": "speed",
        "baseStat": 78
      }
    ]
  },
  {
    "id": 959,
    "name": "tinkaton",
    "order": 1002,
    "height": 7,
    "weight": 1128,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/959.png",
    "types": [
      "fairy",
      "steel"
    ],
    "abilities": [
      "mold-breaker",
      "own-tempo",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 77
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 94
      }
    ]
  },
  {
    "id": 960,
    "name": "wiglett",
    "order": 929,
    "height": 12,
    "weight": 18,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/960.png",
    "types": [
      "water"
    ],
    "abilities": [
      "gooey",
      "rattled",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 10
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 25
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 961,
    "name": "wugtrio",
    "order": 930,
    "height": 12,
    "weight": 54,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/961.png",
    "types": [
      "water"
    ],
    "abilities": [
      "gooey",
      "rattled",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 962,
    "name": "bombirdier",
    "order": 959,
    "height": 15,
    "weight": 429,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/962.png",
    "types": [
      "flying",
      "dark"
    ],
    "abilities": [
      "big-pecks",
      "keen-eye",
      "rocky-payload"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 103
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 82
      }
    ]
  },
  {
    "id": 963,
    "name": "finizen",
    "order": 933,
    "height": 13,
    "weight": 602,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/963.png",
    "types": [
      "water"
    ],
    "abilities": [
      "water-veil",
      "water-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 964,
    "name": "palafin",
    "order": 934,
    "height": 13,
    "weight": 602,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/964.png",
    "types": [
      "water"
    ],
    "abilities": [
      "zero-to-hero",
      "zero-to-hero"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 72
      },
      {
        "name": "special-attack",
        "baseStat": 53
      },
      {
        "name": "special-defense",
        "baseStat": 62
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 965,
    "name": "varoom",
    "order": 942,
    "height": 10,
    "weight": 350,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/965.png",
    "types": [
      "steel",
      "poison"
    ],
    "abilities": [
      "overcoat",
      "slow-start"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 63
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 47
      }
    ]
  },
  {
    "id": 966,
    "name": "revavroom",
    "order": 943,
    "height": 18,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/966.png",
    "types": [
      "steel",
      "poison"
    ],
    "abilities": [
      "overcoat",
      "filter"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 119
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 54
      },
      {
        "name": "special-defense",
        "baseStat": 67
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 967,
    "name": "cyclizar",
    "order": 953,
    "height": 16,
    "weight": 630,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/967.png",
    "types": [
      "dragon",
      "normal"
    ],
    "abilities": [
      "shed-skin",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 121
      }
    ]
  },
  {
    "id": 968,
    "name": "orthworm",
    "order": 944,
    "height": 25,
    "weight": 3100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/968.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "earth-eater",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 145
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 969,
    "name": "glimmet",
    "order": 966,
    "height": 7,
    "weight": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/969.png",
    "types": [
      "rock",
      "poison"
    ],
    "abilities": [
      "toxic-debris",
      "corrosion"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 48
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 42
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 970,
    "name": "glimmora",
    "order": 967,
    "height": 15,
    "weight": 450,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png",
    "types": [
      "rock",
      "poison"
    ],
    "abilities": [
      "toxic-debris",
      "corrosion"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 83
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 81
      },
      {
        "name": "speed",
        "baseStat": 86
      }
    ]
  },
  {
    "id": 971,
    "name": "greavard",
    "order": 924,
    "height": 6,
    "weight": 350,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/971.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "pickup",
      "fluffy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 61
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 34
      }
    ]
  },
  {
    "id": 972,
    "name": "houndstone",
    "order": 925,
    "height": 20,
    "weight": 150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/972.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "sand-rush",
      "fluffy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 72
      },
      {
        "name": "attack",
        "baseStat": 101
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 97
      },
      {
        "name": "speed",
        "baseStat": 68
      }
    ]
  },
  {
    "id": 973,
    "name": "flamigo",
    "order": 961,
    "height": 16,
    "weight": 370,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/973.png",
    "types": [
      "flying",
      "fighting"
    ],
    "abilities": [
      "scrappy",
      "tangled-feet",
      "costar"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 82
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 74
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 64
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 974,
    "name": "cetoddle",
    "order": 947,
    "height": 12,
    "weight": 450,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/974.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "thick-fat",
      "snow-cloak",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 108
      },
      {
        "name": "attack",
        "baseStat": 68
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 43
      }
    ]
  },
  {
    "id": 975,
    "name": "cetitan",
    "order": 948,
    "height": 45,
    "weight": 7000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/975.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "thick-fat",
      "slush-rush",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 170
      },
      {
        "name": "attack",
        "baseStat": 113
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 73
      }
    ]
  },
  {
    "id": 976,
    "name": "veluza",
    "order": 932,
    "height": 25,
    "weight": 900,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/976.png",
    "types": [
      "water",
      "psychic"
    ],
    "abilities": [
      "mold-breaker",
      "sharpness"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 102
      },
      {
        "name": "defense",
        "baseStat": 73
      },
      {
        "name": "special-attack",
        "baseStat": 78
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 977,
    "name": "dondozo",
    "order": 931,
    "height": 120,
    "weight": 2200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/977.png",
    "types": [
      "water"
    ],
    "abilities": [
      "unaware",
      "oblivious",
      "water-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 150
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 978,
    "name": "tatsugiri",
    "order": 952,
    "height": 3,
    "weight": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/978.png",
    "types": [
      "dragon",
      "water"
    ],
    "abilities": [
      "commander",
      "storm-drain"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 82
      }
    ]
  },
  {
    "id": 979,
    "name": "annihilape",
    "order": 1010,
    "height": 12,
    "weight": 560,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/979.png",
    "types": [
      "fighting",
      "ghost"
    ],
    "abilities": [
      "vital-spirit",
      "inner-focus",
      "defiant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 980,
    "name": "clodsire",
    "order": 1009,
    "height": 18,
    "weight": 2230,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/980.png",
    "types": [
      "poison",
      "ground"
    ],
    "abilities": [
      "poison-point",
      "water-absorb",
      "unaware"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 130
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 981,
    "name": "farigiraf",
    "order": 928,
    "height": 32,
    "weight": 1600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/981.png",
    "types": [
      "normal",
      "psychic"
    ],
    "abilities": [
      "cud-chew",
      "armor-tail",
      "sap-sipper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 120
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 982,
    "name": "dudunsparce",
    "order": 917,
    "height": 36,
    "weight": 392,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/982.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "serene-grace",
      "run-away",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 125
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 983,
    "name": "kingambit",
    "order": 1008,
    "height": 20,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/983.png",
    "types": [
      "dark",
      "steel"
    ],
    "abilities": [
      "defiant",
      "supreme-overlord",
      "pressure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 984,
    "name": "great-tusk",
    "order": 978,
    "height": 22,
    "weight": 3200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/984.png",
    "types": [
      "ground",
      "fighting"
    ],
    "abilities": [
      "protosynthesis",
      "protosynthesis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 115
      },
      {
        "name": "attack",
        "baseStat": 131
      },
      {
        "name": "defense",
        "baseStat": 131
      },
      {
        "name": "special-attack",
        "baseStat": 53
      },
      {
        "name": "special-defense",
        "baseStat": 53
      },
      {
        "name": "speed",
        "baseStat": 87
      }
    ]
  },
  {
    "id": 985,
    "name": "scream-tail",
    "order": 982,
    "height": 12,
    "weight": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/985.png",
    "types": [
      "fairy",
      "psychic"
    ],
    "abilities": [
      "protosynthesis",
      "protosynthesis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 115
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 99
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 111
      }
    ]
  },
  {
    "id": 986,
    "name": "brute-bonnet",
    "order": 979,
    "height": 12,
    "weight": 210,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/986.png",
    "types": [
      "grass",
      "dark"
    ],
    "abilities": [
      "protosynthesis",
      "protosynthesis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 111
      },
      {
        "name": "attack",
        "baseStat": 127
      },
      {
        "name": "defense",
        "baseStat": 99
      },
      {
        "name": "special-attack",
        "baseStat": 79
      },
      {
        "name": "special-defense",
        "baseStat": 99
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 987,
    "name": "flutter-mane",
    "order": 983,
    "height": 14,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/987.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "abilities": [
      "protosynthesis",
      "protosynthesis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 135
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 988,
    "name": "slither-wing",
    "order": 984,
    "height": 32,
    "weight": 920,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/988.png",
    "types": [
      "bug",
      "fighting"
    ],
    "abilities": [
      "protosynthesis",
      "protosynthesis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 79
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 81
      }
    ]
  },
  {
    "id": 989,
    "name": "sandy-shocks",
    "order": 981,
    "height": 23,
    "weight": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/989.png",
    "types": [
      "electric",
      "ground"
    ],
    "abilities": [
      "protosynthesis",
      "protosynthesis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 81
      },
      {
        "name": "defense",
        "baseStat": 97
      },
      {
        "name": "special-attack",
        "baseStat": 121
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 101
      }
    ]
  },
  {
    "id": 990,
    "name": "iron-treads",
    "order": 986,
    "height": 9,
    "weight": 2400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/990.png",
    "types": [
      "ground",
      "steel"
    ],
    "abilities": [
      "quark-drive",
      "quark-drive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 112
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 72
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 106
      }
    ]
  },
  {
    "id": 991,
    "name": "iron-bundle",
    "order": 992,
    "height": 6,
    "weight": 110,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/991.png",
    "types": [
      "ice",
      "water"
    ],
    "abilities": [
      "quark-drive",
      "quark-drive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 56
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 114
      },
      {
        "name": "special-attack",
        "baseStat": 124
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 136
      }
    ]
  },
  {
    "id": 992,
    "name": "iron-hands",
    "order": 989,
    "height": 18,
    "weight": 3807,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/992.png",
    "types": [
      "fighting",
      "electric"
    ],
    "abilities": [
      "quark-drive",
      "quark-drive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 154
      },
      {
        "name": "attack",
        "baseStat": 140
      },
      {
        "name": "defense",
        "baseStat": 108
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 68
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 993,
    "name": "iron-jugulis",
    "order": 990,
    "height": 13,
    "weight": 1110,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/993.png",
    "types": [
      "dark",
      "flying"
    ],
    "abilities": [
      "quark-drive",
      "quark-drive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 94
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 86
      },
      {
        "name": "special-attack",
        "baseStat": 122
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 108
      }
    ]
  },
  {
    "id": 994,
    "name": "iron-moth",
    "order": 988,
    "height": 12,
    "weight": 360,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/994.png",
    "types": [
      "fire",
      "poison"
    ],
    "abilities": [
      "quark-drive",
      "quark-drive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 140
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 995,
    "name": "iron-thorns",
    "order": 991,
    "height": 16,
    "weight": 3030,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/995.png",
    "types": [
      "rock",
      "electric"
    ],
    "abilities": [
      "quark-drive",
      "quark-drive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 134
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 84
      },
      {
        "name": "speed",
        "baseStat": 72
      }
    ]
  },
  {
    "id": 996,
    "name": "frigibax",
    "order": 949,
    "height": 5,
    "weight": 170,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/996.png",
    "types": [
      "dragon",
      "ice"
    ],
    "abilities": [
      "thermal-exchange",
      "ice-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 997,
    "name": "arctibax",
    "order": 950,
    "height": 8,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/997.png",
    "types": [
      "dragon",
      "ice"
    ],
    "abilities": [
      "thermal-exchange",
      "ice-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 66
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 62
      }
    ]
  },
  {
    "id": 998,
    "name": "baxcalibur",
    "order": 951,
    "height": 21,
    "weight": 2100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/998.png",
    "types": [
      "dragon",
      "ice"
    ],
    "abilities": [
      "thermal-exchange",
      "ice-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 115
      },
      {
        "name": "attack",
        "baseStat": 145
      },
      {
        "name": "defense",
        "baseStat": 92
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 86
      },
      {
        "name": "speed",
        "baseStat": 87
      }
    ]
  },
  {
    "id": 999,
    "name": "gimmighoul",
    "order": 976,
    "height": 3,
    "weight": 50,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/999.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "rattled",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 10
      }
    ]
  },
  {
    "id": 1000,
    "name": "gholdengo",
    "order": 977,
    "height": 12,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png",
    "types": [
      "steel",
      "ghost"
    ],
    "abilities": [
      "good-as-gold",
      "good-as-gold"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 87
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 133
      },
      {
        "name": "special-defense",
        "baseStat": 91
      },
      {
        "name": "speed",
        "baseStat": 84
      }
    ]
  },
  {
    "id": 1001,
    "name": "wo-chien",
    "order": 996,
    "height": 15,
    "weight": 742,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1001.png",
    "types": [
      "dark",
      "grass"
    ],
    "abilities": [
      "tablets-of-ruin",
      "tablets-of-ruin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 135
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 1002,
    "name": "chien-pao",
    "order": 995,
    "height": 19,
    "weight": 1522,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1002.png",
    "types": [
      "dark",
      "ice"
    ],
    "abilities": [
      "sword-of-ruin",
      "sword-of-ruin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 1003,
    "name": "ting-lu",
    "order": 994,
    "height": 27,
    "weight": 6997,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1003.png",
    "types": [
      "dark",
      "ground"
    ],
    "abilities": [
      "vessel-of-ruin",
      "vessel-of-ruin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 155
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 125
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 1004,
    "name": "chi-yu",
    "order": 997,
    "height": 4,
    "weight": 49,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1004.png",
    "types": [
      "dark",
      "fire"
    ],
    "abilities": [
      "beads-of-ruin",
      "beads-of-ruin"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 1005,
    "name": "roaring-moon",
    "order": 985,
    "height": 20,
    "weight": 3800,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1005.png",
    "types": [
      "dragon",
      "dark"
    ],
    "abilities": [
      "protosynthesis",
      "protosynthesis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 139
      },
      {
        "name": "defense",
        "baseStat": 71
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 101
      },
      {
        "name": "speed",
        "baseStat": 119
      }
    ]
  },
  {
    "id": 1006,
    "name": "iron-valiant",
    "order": 993,
    "height": 14,
    "weight": 350,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1006.png",
    "types": [
      "fairy",
      "fighting"
    ],
    "abilities": [
      "quark-drive",
      "quark-drive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 74
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 116
      }
    ]
  },
  {
    "id": 1007,
    "name": "koraidon",
    "order": 998,
    "height": 25,
    "weight": 3030,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png",
    "types": [
      "fighting",
      "dragon"
    ],
    "abilities": [
      "orichalcum-pulse",
      "orichalcum-pulse"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 1008,
    "name": "miraidon",
    "order": 999,
    "height": 35,
    "weight": 2400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png",
    "types": [
      "electric",
      "dragon"
    ],
    "abilities": [
      "hadron-engine",
      "hadron-engine"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 1009,
    "name": "walking-wake",
    "order": 1093,
    "height": 35,
    "weight": 2800,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1009.png",
    "types": [
      "water",
      "dragon"
    ],
    "abilities": [
      "protosynthesis",
      "protosynthesis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 99
      },
      {
        "name": "attack",
        "baseStat": 83
      },
      {
        "name": "defense",
        "baseStat": 91
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 83
      },
      {
        "name": "speed",
        "baseStat": 109
      }
    ]
  },
  {
    "id": 1010,
    "name": "iron-leaves",
    "order": 1094,
    "height": 15,
    "weight": 1250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1010.png",
    "types": [
      "grass",
      "psychic"
    ],
    "abilities": [
      "quark-drive",
      "quark-drive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 88
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 108
      },
      {
        "name": "speed",
        "baseStat": 104
      }
    ]
  },
  {
    "id": 1011,
    "name": "dipplin",
    "order": 1095,
    "height": 4,
    "weight": 97,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1011.png",
    "types": [
      "grass",
      "dragon"
    ],
    "abilities": [
      "supersweet-syrup",
      "gluttony",
      "sticky-hold"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 1012,
    "name": "poltchageist",
    "order": 1096,
    "height": 1,
    "weight": 11,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1012.png",
    "types": [
      "grass",
      "ghost"
    ],
    "abilities": [
      "hospitality",
      "heatproof"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 74
      },
      {
        "name": "special-defense",
        "baseStat": 54
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 1013,
    "name": "sinistcha",
    "order": 1097,
    "height": 2,
    "weight": 22,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1013.png",
    "types": [
      "grass",
      "ghost"
    ],
    "abilities": [
      "hospitality",
      "heatproof"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 71
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 106
      },
      {
        "name": "special-attack",
        "baseStat": 121
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 1014,
    "name": "okidogi",
    "order": 1098,
    "height": 18,
    "weight": 922,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1014.png",
    "types": [
      "poison",
      "fighting"
    ],
    "abilities": [
      "toxic-chain",
      "guard-dog"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 88
      },
      {
        "name": "attack",
        "baseStat": 128
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 58
      },
      {
        "name": "special-defense",
        "baseStat": 86
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 1015,
    "name": "munkidori",
    "order": 1099,
    "height": 10,
    "weight": 122,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1015.png",
    "types": [
      "poison",
      "psychic"
    ],
    "abilities": [
      "toxic-chain",
      "frisk"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 88
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 66
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 106
      }
    ]
  },
  {
    "id": 1016,
    "name": "fezandipiti",
    "order": 1100,
    "height": 14,
    "weight": 301,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1016.png",
    "types": [
      "poison",
      "fairy"
    ],
    "abilities": [
      "toxic-chain",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 88
      },
      {
        "name": "attack",
        "baseStat": 91
      },
      {
        "name": "defense",
        "baseStat": 82
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 125
      },
      {
        "name": "speed",
        "baseStat": 99
      }
    ]
  },
  {
    "id": 1017,
    "name": "ogerpon",
    "order": 1101,
    "height": 12,
    "weight": 398,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1017.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "defiant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 84
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 96
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 1018,
    "name": "archaludon",
    "order": 1102,
    "height": 20,
    "weight": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1018.png",
    "types": [
      "steel",
      "dragon"
    ],
    "abilities": [
      "stamina",
      "sturdy",
      "stalwart"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 1019,
    "name": "hydrapple",
    "order": 1103,
    "height": 18,
    "weight": 930,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1019.png",
    "types": [
      "grass",
      "dragon"
    ],
    "abilities": [
      "supersweet-syrup",
      "regenerator",
      "sticky-hold"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 106
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 44
      }
    ]
  },
  {
    "id": 1020,
    "name": "gouging-fire",
    "order": 1104,
    "height": 35,
    "weight": 5900,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1020.png",
    "types": [
      "fire",
      "dragon"
    ],
    "abilities": [
      "protosynthesis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 121
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 93
      },
      {
        "name": "speed",
        "baseStat": 91
      }
    ]
  },
  {
    "id": 1021,
    "name": "raging-bolt",
    "order": 1105,
    "height": 52,
    "weight": 4800,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1021.png",
    "types": [
      "electric",
      "dragon"
    ],
    "abilities": [
      "protosynthesis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 125
      },
      {
        "name": "attack",
        "baseStat": 73
      },
      {
        "name": "defense",
        "baseStat": 91
      },
      {
        "name": "special-attack",
        "baseStat": 137
      },
      {
        "name": "special-defense",
        "baseStat": 89
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 1022,
    "name": "iron-boulder",
    "order": 1106,
    "height": 15,
    "weight": 1625,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1022.png",
    "types": [
      "rock",
      "psychic"
    ],
    "abilities": [
      "quark-drive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 68
      },
      {
        "name": "special-defense",
        "baseStat": 108
      },
      {
        "name": "speed",
        "baseStat": 124
      }
    ]
  },
  {
    "id": 1023,
    "name": "iron-crown",
    "order": 1107,
    "height": 16,
    "weight": 1560,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1023.png",
    "types": [
      "steel",
      "psychic"
    ],
    "abilities": [
      "quark-drive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 72
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 122
      },
      {
        "name": "special-defense",
        "baseStat": 108
      },
      {
        "name": "speed",
        "baseStat": 98
      }
    ]
  },
  {
    "id": 1024,
    "name": "terapagos",
    "order": 1108,
    "height": 2,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1024.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "tera-shift"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 1025,
    "name": "pecharunt",
    "order": 1109,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1025.png",
    "types": [
      "poison",
      "ghost"
    ],
    "abilities": [
      "poison-puppeteer"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 88
      },
      {
        "name": "attack",
        "baseStat": 88
      },
      {
        "name": "defense",
        "baseStat": 160
      },
      {
        "name": "special-attack",
        "baseStat": 88
      },
      {
        "name": "special-defense",
        "baseStat": 88
      },
      {
        "name": "speed",
        "baseStat": 88
      }
    ]
  },
  {
    "id": 10001,
    "name": "deoxys-attack",
    "order": 515,
    "height": 17,
    "weight": 608,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10001.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "pressure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 180
      },
      {
        "name": "defense",
        "baseStat": 20
      },
      {
        "name": "special-attack",
        "baseStat": 180
      },
      {
        "name": "special-defense",
        "baseStat": 20
      },
      {
        "name": "speed",
        "baseStat": 150
      }
    ]
  },
  {
    "id": 10002,
    "name": "deoxys-defense",
    "order": 516,
    "height": 17,
    "weight": 608,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10002.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "pressure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 160
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 160
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10003,
    "name": "deoxys-speed",
    "order": 517,
    "height": 17,
    "weight": 608,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10003.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "pressure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 180
      }
    ]
  },
  {
    "id": 10004,
    "name": "wormadam-sandy",
    "order": 543,
    "height": 5,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10004.png",
    "types": [
      "bug",
      "ground"
    ],
    "abilities": [
      "anticipation",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 79
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 59
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 36
      }
    ]
  },
  {
    "id": 10005,
    "name": "wormadam-trash",
    "order": 544,
    "height": 5,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10005.png",
    "types": [
      "bug",
      "steel"
    ],
    "abilities": [
      "anticipation",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 69
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 69
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 36
      }
    ]
  },
  {
    "id": 10006,
    "name": "shaymin-sky",
    "order": 607,
    "height": 4,
    "weight": 52,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10006.png",
    "types": [
      "grass",
      "flying"
    ],
    "abilities": [
      "serene-grace"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 103
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 127
      }
    ]
  },
  {
    "id": 10007,
    "name": "giratina-origin",
    "order": 601,
    "height": 69,
    "weight": 6500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10007.png",
    "types": [
      "ghost",
      "dragon"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 150
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10008,
    "name": "rotom-heat",
    "order": 588,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10008.png",
    "types": [
      "electric",
      "fire"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 107
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 107
      },
      {
        "name": "speed",
        "baseStat": 86
      }
    ]
  },
  {
    "id": 10009,
    "name": "rotom-wash",
    "order": 589,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10009.png",
    "types": [
      "electric",
      "water"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 107
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 107
      },
      {
        "name": "speed",
        "baseStat": 86
      }
    ]
  },
  {
    "id": 10010,
    "name": "rotom-frost",
    "order": 590,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10010.png",
    "types": [
      "electric",
      "ice"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 107
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 107
      },
      {
        "name": "speed",
        "baseStat": 86
      }
    ]
  },
  {
    "id": 10011,
    "name": "rotom-fan",
    "order": 591,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10011.png",
    "types": [
      "electric",
      "flying"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 107
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 107
      },
      {
        "name": "speed",
        "baseStat": 86
      }
    ]
  },
  {
    "id": 10012,
    "name": "rotom-mow",
    "order": 592,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10012.png",
    "types": [
      "electric",
      "grass"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 107
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 107
      },
      {
        "name": "speed",
        "baseStat": 86
      }
    ]
  },
  {
    "id": 10013,
    "name": "castform-sunny",
    "order": 465,
    "height": 3,
    "weight": 8,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10013.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "forecast"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 10014,
    "name": "castform-rainy",
    "order": 466,
    "height": 3,
    "weight": 8,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10014.png",
    "types": [
      "water"
    ],
    "abilities": [
      "forecast"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 10015,
    "name": "castform-snowy",
    "order": 467,
    "height": 3,
    "weight": 8,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10015.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "forecast"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 10016,
    "name": "basculin-blue-striped",
    "order": 667,
    "height": 10,
    "weight": 180,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10016.png",
    "types": [
      "water"
    ],
    "abilities": [
      "rock-head",
      "adaptability",
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 92
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 98
      }
    ]
  },
  {
    "id": 10017,
    "name": "darmanitan-zen",
    "order": 674,
    "height": 13,
    "weight": 929,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10017.png",
    "types": [
      "fire",
      "psychic"
    ],
    "abilities": [
      "sheer-force",
      "zen-mode"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 140
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 10018,
    "name": "meloetta-pirouette",
    "order": 778,
    "height": 6,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10018.png",
    "types": [
      "normal",
      "fighting"
    ],
    "abilities": [
      "serene-grace"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 128
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 77
      },
      {
        "name": "special-defense",
        "baseStat": 77
      },
      {
        "name": "speed",
        "baseStat": 128
      }
    ]
  },
  {
    "id": 10019,
    "name": "tornadus-therian",
    "order": 765,
    "height": 14,
    "weight": 630,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10019.png",
    "types": [
      "flying"
    ],
    "abilities": [
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 79
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 121
      }
    ]
  },
  {
    "id": 10020,
    "name": "thundurus-therian",
    "order": 767,
    "height": 30,
    "weight": 610,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10020.png",
    "types": [
      "electric",
      "flying"
    ],
    "abilities": [
      "volt-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 79
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 145
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 101
      }
    ]
  },
  {
    "id": 10021,
    "name": "landorus-therian",
    "order": 771,
    "height": 13,
    "weight": 680,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10021.png",
    "types": [
      "ground",
      "flying"
    ],
    "abilities": [
      "intimidate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 89
      },
      {
        "name": "attack",
        "baseStat": 145
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 91
      }
    ]
  },
  {
    "id": 10022,
    "name": "kyurem-black",
    "order": 774,
    "height": 33,
    "weight": 3250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10022.png",
    "types": [
      "dragon",
      "ice"
    ],
    "abilities": [
      "teravolt"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 125
      },
      {
        "name": "attack",
        "baseStat": 170
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 10023,
    "name": "kyurem-white",
    "order": 773,
    "height": 36,
    "weight": 3250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10023.png",
    "types": [
      "dragon",
      "ice"
    ],
    "abilities": [
      "turboblaze"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 125
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 170
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 10024,
    "name": "keldeo-resolute",
    "order": 776,
    "height": 14,
    "weight": 485,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10024.png",
    "types": [
      "water",
      "fighting"
    ],
    "abilities": [
      "justified"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 91
      },
      {
        "name": "attack",
        "baseStat": 72
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 129
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 108
      }
    ]
  },
  {
    "id": 10025,
    "name": "meowstic-female",
    "order": 812,
    "height": 6,
    "weight": 85,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10025.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "keen-eye",
      "infiltrator",
      "competitive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 74
      },
      {
        "name": "attack",
        "baseStat": 48
      },
      {
        "name": "defense",
        "baseStat": 76
      },
      {
        "name": "special-attack",
        "baseStat": 83
      },
      {
        "name": "special-defense",
        "baseStat": 81
      },
      {
        "name": "speed",
        "baseStat": 104
      }
    ]
  },
  {
    "id": 10026,
    "name": "aegislash-blade",
    "order": 816,
    "height": 17,
    "weight": 530,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10026.png",
    "types": [
      "steel",
      "ghost"
    ],
    "abilities": [
      "stance-change"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 140
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 140
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10027,
    "name": "pumpkaboo-small",
    "order": 845,
    "height": 3,
    "weight": 35,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10027.png",
    "types": [
      "ghost",
      "grass"
    ],
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 44
      },
      {
        "name": "attack",
        "baseStat": 66
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 44
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 56
      }
    ]
  },
  {
    "id": 10028,
    "name": "pumpkaboo-large",
    "order": 846,
    "height": 5,
    "weight": 75,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10028.png",
    "types": [
      "ghost",
      "grass"
    ],
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 54
      },
      {
        "name": "attack",
        "baseStat": 66
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 44
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 46
      }
    ]
  },
  {
    "id": 10029,
    "name": "pumpkaboo-super",
    "order": 847,
    "height": 8,
    "weight": 150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10029.png",
    "types": [
      "ghost",
      "grass"
    ],
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 59
      },
      {
        "name": "attack",
        "baseStat": 66
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 44
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 41
      }
    ]
  },
  {
    "id": 10030,
    "name": "gourgeist-small",
    "order": 849,
    "height": 7,
    "weight": 95,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10030.png",
    "types": [
      "ghost",
      "grass"
    ],
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 122
      },
      {
        "name": "special-attack",
        "baseStat": 58
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 99
      }
    ]
  },
  {
    "id": 10031,
    "name": "gourgeist-large",
    "order": 850,
    "height": 11,
    "weight": 140,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10031.png",
    "types": [
      "ghost",
      "grass"
    ],
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 122
      },
      {
        "name": "special-attack",
        "baseStat": 58
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 69
      }
    ]
  },
  {
    "id": 10032,
    "name": "gourgeist-super",
    "order": 851,
    "height": 17,
    "weight": 390,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10032.png",
    "types": [
      "ghost",
      "grass"
    ],
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 122
      },
      {
        "name": "special-attack",
        "baseStat": 58
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 54
      }
    ]
  },
  {
    "id": 10033,
    "name": "venusaur-mega",
    "order": 4,
    "height": 24,
    "weight": 1555,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10033.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 123
      },
      {
        "name": "special-attack",
        "baseStat": 122
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 10034,
    "name": "charizard-mega-x",
    "order": 8,
    "height": 17,
    "weight": 1105,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png",
    "types": [
      "fire",
      "dragon"
    ],
    "abilities": [
      "tough-claws"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 111
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10035,
    "name": "charizard-mega-y",
    "order": 9,
    "height": 17,
    "weight": 1005,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png",
    "types": [
      "fire",
      "flying"
    ],
    "abilities": [
      "drought"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 104
      },
      {
        "name": "defense",
        "baseStat": 78
      },
      {
        "name": "special-attack",
        "baseStat": 159
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10036,
    "name": "blastoise-mega",
    "order": 13,
    "height": 16,
    "weight": 1011,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10036.png",
    "types": [
      "water"
    ],
    "abilities": [
      "mega-launcher"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 79
      },
      {
        "name": "attack",
        "baseStat": 103
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 78
      }
    ]
  },
  {
    "id": 10037,
    "name": "alakazam-mega",
    "order": 106,
    "height": 12,
    "weight": 480,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10037.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "trace"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 175
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 150
      }
    ]
  },
  {
    "id": 10038,
    "name": "gengar-mega",
    "order": 150,
    "height": 14,
    "weight": 405,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10038.png",
    "types": [
      "ghost",
      "poison"
    ],
    "abilities": [
      "shadow-tag"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 170
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 130
      }
    ]
  },
  {
    "id": 10039,
    "name": "kangaskhan-mega",
    "order": 185,
    "height": 22,
    "weight": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10039.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "parental-bond"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10040,
    "name": "pinsir-mega",
    "order": 208,
    "height": 17,
    "weight": 590,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10040.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "aerilate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 155
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 10041,
    "name": "gyarados-mega",
    "order": 212,
    "height": 65,
    "weight": 3050,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10041.png",
    "types": [
      "water",
      "dark"
    ],
    "abilities": [
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 155
      },
      {
        "name": "defense",
        "baseStat": 109
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 130
      },
      {
        "name": "speed",
        "baseStat": 81
      }
    ]
  },
  {
    "id": 10042,
    "name": "aerodactyl-mega",
    "order": 233,
    "height": 21,
    "weight": 790,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10042.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "tough-claws"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 150
      }
    ]
  },
  {
    "id": 10043,
    "name": "mewtwo-mega-x",
    "order": 246,
    "height": 23,
    "weight": 1270,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10043.png",
    "types": [
      "psychic",
      "fighting"
    ],
    "abilities": [
      "steadfast"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 106
      },
      {
        "name": "attack",
        "baseStat": 190
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 154
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 130
      }
    ]
  },
  {
    "id": 10044,
    "name": "mewtwo-mega-y",
    "order": 247,
    "height": 15,
    "weight": 330,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10044.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "insomnia"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 106
      },
      {
        "name": "attack",
        "baseStat": 150
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 194
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 140
      }
    ]
  },
  {
    "id": 10045,
    "name": "ampharos-mega",
    "order": 276,
    "height": 14,
    "weight": 615,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10045.png",
    "types": [
      "electric",
      "dragon"
    ],
    "abilities": [
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 165
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 10046,
    "name": "scizor-mega",
    "order": 198,
    "height": 20,
    "weight": 1250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10046.png",
    "types": [
      "bug",
      "steel"
    ],
    "abilities": [
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 150
      },
      {
        "name": "defense",
        "baseStat": 140
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 10047,
    "name": "heracross-mega",
    "order": 311,
    "height": 17,
    "weight": 625,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10047.png",
    "types": [
      "bug",
      "fighting"
    ],
    "abilities": [
      "skill-link"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 185
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 10048,
    "name": "houndoom-mega",
    "order": 331,
    "height": 19,
    "weight": 495,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10048.png",
    "types": [
      "dark",
      "fire"
    ],
    "abilities": [
      "solar-power"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 140
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 10049,
    "name": "tyranitar-mega",
    "order": 343,
    "height": 25,
    "weight": 2550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10049.png",
    "types": [
      "rock",
      "dark"
    ],
    "abilities": [
      "sand-stream"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 164
      },
      {
        "name": "defense",
        "baseStat": 150
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 71
      }
    ]
  },
  {
    "id": 10050,
    "name": "blaziken-mega",
    "order": 354,
    "height": 19,
    "weight": 520,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10050.png",
    "types": [
      "fire",
      "fighting"
    ],
    "abilities": [
      "speed-boost"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 160
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10051,
    "name": "gardevoir-mega",
    "order": 383,
    "height": 16,
    "weight": 484,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10051.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "abilities": [
      "pixilate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 165
      },
      {
        "name": "special-defense",
        "baseStat": 135
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10052,
    "name": "mawile-mega",
    "order": 408,
    "height": 10,
    "weight": 235,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10052.png",
    "types": [
      "steel",
      "fairy"
    ],
    "abilities": [
      "huge-power"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 125
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 10053,
    "name": "aggron-mega",
    "order": 412,
    "height": 22,
    "weight": 3950,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10053.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "filter"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 140
      },
      {
        "name": "defense",
        "baseStat": 230
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 10054,
    "name": "medicham-mega",
    "order": 415,
    "height": 13,
    "weight": 315,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10054.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "abilities": [
      "pure-power"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10055,
    "name": "manectric-mega",
    "order": 418,
    "height": 18,
    "weight": 440,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10055.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "intimidate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 10056,
    "name": "banette-mega",
    "order": 471,
    "height": 12,
    "weight": 130,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10056.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "prankster"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 64
      },
      {
        "name": "attack",
        "baseStat": 165
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 93
      },
      {
        "name": "special-defense",
        "baseStat": 83
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 10057,
    "name": "absol-mega",
    "order": 479,
    "height": 12,
    "weight": 490,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10057.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "magic-bounce"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 150
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 115
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 10058,
    "name": "garchomp-mega",
    "order": 571,
    "height": 19,
    "weight": 950,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10058.png",
    "types": [
      "dragon",
      "ground"
    ],
    "abilities": [
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 108
      },
      {
        "name": "attack",
        "baseStat": 170
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 92
      }
    ]
  },
  {
    "id": 10059,
    "name": "lucario-mega",
    "order": 574,
    "height": 13,
    "weight": 575,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10059.png",
    "types": [
      "fighting",
      "steel"
    ],
    "abilities": [
      "adaptability"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 145
      },
      {
        "name": "defense",
        "baseStat": 88
      },
      {
        "name": "special-attack",
        "baseStat": 140
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 112
      }
    ]
  },
  {
    "id": 10060,
    "name": "abomasnow-mega",
    "order": 586,
    "height": 27,
    "weight": 1850,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10060.png",
    "types": [
      "grass",
      "ice"
    ],
    "abilities": [
      "snow-warning"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 132
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 132
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 10061,
    "name": "floette-eternal",
    "order": 803,
    "height": 2,
    "weight": 9,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10061.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "flower-veil",
      "symbiosis"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 74
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 67
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 128
      },
      {
        "name": "speed",
        "baseStat": 92
      }
    ]
  },
  {
    "id": 10062,
    "name": "latias-mega",
    "order": 504,
    "height": 18,
    "weight": 520,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10062.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 140
      },
      {
        "name": "special-defense",
        "baseStat": 150
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 10063,
    "name": "latios-mega",
    "order": 506,
    "height": 23,
    "weight": 700,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10063.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 160
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 10064,
    "name": "swampert-mega",
    "order": 358,
    "height": 19,
    "weight": 1020,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10064.png",
    "types": [
      "water",
      "ground"
    ],
    "abilities": [
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 150
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 10065,
    "name": "sceptile-mega",
    "order": 350,
    "height": 19,
    "weight": 552,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10065.png",
    "types": [
      "grass",
      "dragon"
    ],
    "abilities": [
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 145
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 145
      }
    ]
  },
  {
    "id": 10066,
    "name": "sableye-mega",
    "order": 406,
    "height": 5,
    "weight": 1610,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10066.png",
    "types": [
      "dark",
      "ghost"
    ],
    "abilities": [
      "magic-bounce"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 125
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 10067,
    "name": "altaria-mega",
    "order": 447,
    "height": 15,
    "weight": 206,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10067.png",
    "types": [
      "dragon",
      "fairy"
    ],
    "abilities": [
      "pixilate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 10068,
    "name": "gallade-mega",
    "order": 385,
    "height": 16,
    "weight": 564,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10068.png",
    "types": [
      "psychic",
      "fighting"
    ],
    "abilities": [
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 165
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 10069,
    "name": "audino-mega",
    "order": 647,
    "height": 15,
    "weight": 320,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10069.png",
    "types": [
      "normal",
      "fairy"
    ],
    "abilities": [
      "healer"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 103
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 126
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 126
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 10070,
    "name": "sharpedo-mega",
    "order": 430,
    "height": 25,
    "weight": 1303,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10070.png",
    "types": [
      "water",
      "dark"
    ],
    "abilities": [
      "strong-jaw"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 140
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 10071,
    "name": "slowbro-mega",
    "order": 128,
    "height": 20,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10071.png",
    "types": [
      "water",
      "psychic"
    ],
    "abilities": [
      "shell-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 180
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 10072,
    "name": "steelix-mega",
    "order": 153,
    "height": 105,
    "weight": 7400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10072.png",
    "types": [
      "steel",
      "ground"
    ],
    "abilities": [
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 230
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 10073,
    "name": "pidgeot-mega",
    "order": 24,
    "height": 22,
    "weight": 505,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10073.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "no-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 83
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 121
      }
    ]
  },
  {
    "id": 10074,
    "name": "glalie-mega",
    "order": 482,
    "height": 21,
    "weight": 3502,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10074.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "refrigerate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10075,
    "name": "diancie-mega",
    "order": 864,
    "height": 11,
    "weight": 278,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10075.png",
    "types": [
      "rock",
      "fairy"
    ],
    "abilities": [
      "magic-bounce"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 160
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 160
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 10076,
    "name": "metagross-mega",
    "order": 499,
    "height": 25,
    "weight": 9429,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10076.png",
    "types": [
      "steel",
      "psychic"
    ],
    "abilities": [
      "tough-claws"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 145
      },
      {
        "name": "defense",
        "baseStat": 150
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 10077,
    "name": "kyogre-primal",
    "order": 508,
    "height": 98,
    "weight": 4300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10077.png",
    "types": [
      "water"
    ],
    "abilities": [
      "primordial-sea"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 150
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 180
      },
      {
        "name": "special-defense",
        "baseStat": 160
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10078,
    "name": "groudon-primal",
    "order": 510,
    "height": 50,
    "weight": 9997,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10078.png",
    "types": [
      "ground",
      "fire"
    ],
    "abilities": [
      "desolate-land"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 180
      },
      {
        "name": "defense",
        "baseStat": 160
      },
      {
        "name": "special-attack",
        "baseStat": 150
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10079,
    "name": "rayquaza-mega",
    "order": 512,
    "height": 108,
    "weight": 3920,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10079.png",
    "types": [
      "dragon",
      "flying"
    ],
    "abilities": [
      "delta-stream"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 180
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 180
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 10080,
    "name": "pikachu-rock-star",
    "order": 37,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10080.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10081,
    "name": "pikachu-belle",
    "order": 38,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10081.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10082,
    "name": "pikachu-pop-star",
    "order": 39,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10082.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10083,
    "name": "pikachu-phd",
    "order": 40,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10083.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10084,
    "name": "pikachu-libre",
    "order": 41,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10084.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10085,
    "name": "pikachu-cosplay",
    "order": 36,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10085.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10086,
    "name": "hoopa-unbound",
    "order": 866,
    "height": 65,
    "weight": 4900,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10086.png",
    "types": [
      "psychic",
      "dark"
    ],
    "abilities": [
      "magician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 160
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 170
      },
      {
        "name": "special-defense",
        "baseStat": 130
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 10087,
    "name": "camerupt-mega",
    "order": 435,
    "height": 25,
    "weight": 3205,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10087.png",
    "types": [
      "fire",
      "ground"
    ],
    "abilities": [
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 145
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 10088,
    "name": "lopunny-mega",
    "order": 559,
    "height": 13,
    "weight": 283,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10088.png",
    "types": [
      "normal",
      "fighting"
    ],
    "abilities": [
      "scrappy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 136
      },
      {
        "name": "defense",
        "baseStat": 94
      },
      {
        "name": "special-attack",
        "baseStat": 54
      },
      {
        "name": "special-defense",
        "baseStat": 96
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 10089,
    "name": "salamence-mega",
    "order": 495,
    "height": 18,
    "weight": 1126,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10089.png",
    "types": [
      "dragon",
      "flying"
    ],
    "abilities": [
      "aerilate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 145
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 10090,
    "name": "beedrill-mega",
    "order": 20,
    "height": 14,
    "weight": 405,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10090.png",
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "adaptability"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 150
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 15
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 145
      }
    ]
  },
  {
    "id": 10091,
    "name": "rattata-alola",
    "order": 26,
    "height": 3,
    "weight": 38,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10091.png",
    "types": [
      "dark",
      "normal"
    ],
    "abilities": [
      "gluttony",
      "hustle",
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 30
      },
      {
        "name": "attack",
        "baseStat": 56
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 72
      }
    ]
  },
  {
    "id": 10092,
    "name": "raticate-alola",
    "order": 28,
    "height": 7,
    "weight": 255,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10092.png",
    "types": [
      "dark",
      "normal"
    ],
    "abilities": [
      "gluttony",
      "hustle",
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 71
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 77
      }
    ]
  },
  {
    "id": 10093,
    "name": "raticate-totem-alola",
    "order": 29,
    "height": 14,
    "weight": 1050,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10093.png",
    "types": [
      "dark",
      "normal"
    ],
    "abilities": [
      "gluttony",
      "hustle",
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 71
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 77
      }
    ]
  },
  {
    "id": 10094,
    "name": "pikachu-original-cap",
    "order": 42,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10094.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10095,
    "name": "pikachu-hoenn-cap",
    "order": 43,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10095.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10096,
    "name": "pikachu-sinnoh-cap",
    "order": 44,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10096.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10097,
    "name": "pikachu-unova-cap",
    "order": 45,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10097.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10098,
    "name": "pikachu-kalos-cap",
    "order": 46,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10098.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10099,
    "name": "pikachu-alola-cap",
    "order": 47,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10099.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10100,
    "name": "raichu-alola",
    "order": 52,
    "height": 7,
    "weight": 210,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10100.png",
    "types": [
      "electric",
      "psychic"
    ],
    "abilities": [
      "surge-surfer"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 10101,
    "name": "sandshrew-alola",
    "order": 54,
    "height": 7,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10101.png",
    "types": [
      "ice",
      "steel"
    ],
    "abilities": [
      "snow-cloak",
      "slush-rush"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 10
      },
      {
        "name": "special-defense",
        "baseStat": 35
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 10102,
    "name": "sandslash-alola",
    "order": 56,
    "height": 12,
    "weight": 550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10102.png",
    "types": [
      "ice",
      "steel"
    ],
    "abilities": [
      "snow-cloak",
      "slush-rush"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 10103,
    "name": "vulpix-alola",
    "order": 67,
    "height": 6,
    "weight": 99,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10103.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "snow-cloak",
      "snow-warning"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 38
      },
      {
        "name": "attack",
        "baseStat": 41
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 10104,
    "name": "ninetales-alola",
    "order": 69,
    "height": 11,
    "weight": 199,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10104.png",
    "types": [
      "ice",
      "fairy"
    ],
    "abilities": [
      "snow-cloak",
      "snow-warning"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 73
      },
      {
        "name": "attack",
        "baseStat": 67
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 81
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 109
      }
    ]
  },
  {
    "id": 10105,
    "name": "diglett-alola",
    "order": 85,
    "height": 2,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10105.png",
    "types": [
      "ground",
      "steel"
    ],
    "abilities": [
      "sand-veil",
      "tangling-hair",
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 10
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 30
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10106,
    "name": "dugtrio-alola",
    "order": 87,
    "height": 7,
    "weight": 666,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10106.png",
    "types": [
      "ground",
      "steel"
    ],
    "abilities": [
      "sand-veil",
      "tangling-hair",
      "sand-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 10107,
    "name": "meowth-alola",
    "order": 89,
    "height": 4,
    "weight": 42,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10107.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "pickup",
      "technician",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 35
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10108,
    "name": "persian-alola",
    "order": 92,
    "height": 11,
    "weight": 330,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10108.png",
    "types": [
      "dark"
    ],
    "abilities": [
      "fur-coat",
      "technician",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 10109,
    "name": "geodude-alola",
    "order": 116,
    "height": 4,
    "weight": 203,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10109.png",
    "types": [
      "rock",
      "electric"
    ],
    "abilities": [
      "magnet-pull",
      "sturdy",
      "galvanize"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 30
      },
      {
        "name": "speed",
        "baseStat": 20
      }
    ]
  },
  {
    "id": 10110,
    "name": "graveler-alola",
    "order": 118,
    "height": 10,
    "weight": 1100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10110.png",
    "types": [
      "rock",
      "electric"
    ],
    "abilities": [
      "magnet-pull",
      "sturdy",
      "galvanize"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 35
      }
    ]
  },
  {
    "id": 10111,
    "name": "golem-alola",
    "order": 120,
    "height": 17,
    "weight": 3160,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10111.png",
    "types": [
      "rock",
      "electric"
    ],
    "abilities": [
      "magnet-pull",
      "sturdy",
      "galvanize"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 10112,
    "name": "grimer-alola",
    "order": 142,
    "height": 7,
    "weight": 420,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10112.png",
    "types": [
      "poison",
      "dark"
    ],
    "abilities": [
      "poison-touch",
      "gluttony",
      "power-of-alchemy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 25
      }
    ]
  },
  {
    "id": 10113,
    "name": "muk-alola",
    "order": 144,
    "height": 10,
    "weight": 520,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10113.png",
    "types": [
      "poison",
      "dark"
    ],
    "abilities": [
      "poison-touch",
      "gluttony",
      "power-of-alchemy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 10114,
    "name": "exeggutor-alola",
    "order": 162,
    "height": 109,
    "weight": 4156,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10114.png",
    "types": [
      "grass",
      "dragon"
    ],
    "abilities": [
      "frisk",
      "harvest"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 10115,
    "name": "marowak-alola",
    "order": 165,
    "height": 10,
    "weight": 340,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10115.png",
    "types": [
      "fire",
      "ghost"
    ],
    "abilities": [
      "cursed-body",
      "lightning-rod",
      "rock-head"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 10116,
    "name": "greninja-battle-bond",
    "order": 789,
    "height": 15,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10116.png",
    "types": [
      "water",
      "dark"
    ],
    "abilities": [
      "battle-bond"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 72
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 67
      },
      {
        "name": "special-attack",
        "baseStat": 103
      },
      {
        "name": "special-defense",
        "baseStat": 71
      },
      {
        "name": "speed",
        "baseStat": 122
      }
    ]
  },
  {
    "id": 10117,
    "name": "greninja-ash",
    "order": 790,
    "height": 15,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10117.png",
    "types": [
      "water",
      "dark"
    ],
    "abilities": [
      "battle-bond"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 72
      },
      {
        "name": "attack",
        "baseStat": 145
      },
      {
        "name": "defense",
        "baseStat": 67
      },
      {
        "name": "special-attack",
        "baseStat": 153
      },
      {
        "name": "special-defense",
        "baseStat": 71
      },
      {
        "name": "speed",
        "baseStat": 132
      }
    ]
  },
  {
    "id": 10118,
    "name": "zygarde-10-power-construct",
    "order": 860,
    "height": 12,
    "weight": 335,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10118.png",
    "types": [
      "dragon",
      "ground"
    ],
    "abilities": [
      "power-construct"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 54
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 71
      },
      {
        "name": "special-attack",
        "baseStat": 61
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 10119,
    "name": "zygarde-50-power-construct",
    "order": 861,
    "height": 50,
    "weight": 3050,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10119.png",
    "types": [
      "dragon",
      "ground"
    ],
    "abilities": [
      "power-construct"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 108
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 121
      },
      {
        "name": "special-attack",
        "baseStat": 81
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 10120,
    "name": "zygarde-complete",
    "order": 862,
    "height": 45,
    "weight": 6100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10120.png",
    "types": [
      "dragon",
      "ground"
    ],
    "abilities": [
      "power-construct"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 216
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 121
      },
      {
        "name": "special-attack",
        "baseStat": 91
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 10121,
    "name": "gumshoos-totem",
    "order": 882,
    "height": 14,
    "weight": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10121.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "stakeout",
      "strong-jaw",
      "adaptability"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 88
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 10122,
    "name": "vikavolt-totem",
    "order": 886,
    "height": 26,
    "weight": 1475,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10122.png",
    "types": [
      "bug",
      "electric"
    ],
    "abilities": [
      "levitate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 77
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 145
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 43
      }
    ]
  },
  {
    "id": 10123,
    "name": "oricorio-pom-pom",
    "order": 890,
    "height": 6,
    "weight": 34,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10123.png",
    "types": [
      "electric",
      "flying"
    ],
    "abilities": [
      "dancer"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 98
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 93
      }
    ]
  },
  {
    "id": 10124,
    "name": "oricorio-pau",
    "order": 891,
    "height": 6,
    "weight": 34,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10124.png",
    "types": [
      "psychic",
      "flying"
    ],
    "abilities": [
      "dancer"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 98
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 93
      }
    ]
  },
  {
    "id": 10125,
    "name": "oricorio-sensu",
    "order": 892,
    "height": 6,
    "weight": 34,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10125.png",
    "types": [
      "ghost",
      "flying"
    ],
    "abilities": [
      "dancer"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 98
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 93
      }
    ]
  },
  {
    "id": 10126,
    "name": "lycanroc-midnight",
    "order": 899,
    "height": 11,
    "weight": 250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10126.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "keen-eye",
      "vital-spirit",
      "no-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 85
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 82
      }
    ]
  },
  {
    "id": 10127,
    "name": "wishiwashi-school",
    "order": 902,
    "height": 82,
    "weight": 786,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10127.png",
    "types": [
      "water"
    ],
    "abilities": [
      "schooling"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 140
      },
      {
        "name": "defense",
        "baseStat": 130
      },
      {
        "name": "special-attack",
        "baseStat": 140
      },
      {
        "name": "special-defense",
        "baseStat": 135
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 10128,
    "name": "lurantis-totem",
    "order": 912,
    "height": 15,
    "weight": 580,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10128.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "leaf-guard",
      "contrary"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 10129,
    "name": "salazzle-totem",
    "order": 917,
    "height": 21,
    "weight": 810,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10129.png",
    "types": [
      "poison",
      "fire"
    ],
    "abilities": [
      "corrosion",
      "oblivious"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 64
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 111
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 117
      }
    ]
  },
  {
    "id": 10130,
    "name": "minior-orange-meteor",
    "order": 934,
    "height": 3,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10130.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10131,
    "name": "minior-yellow-meteor",
    "order": 935,
    "height": 3,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10131.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10132,
    "name": "minior-green-meteor",
    "order": 936,
    "height": 3,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10132.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10133,
    "name": "minior-blue-meteor",
    "order": 937,
    "height": 3,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10133.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10134,
    "name": "minior-indigo-meteor",
    "order": 938,
    "height": 3,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10134.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10135,
    "name": "minior-violet-meteor",
    "order": 939,
    "height": 3,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10135.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10136,
    "name": "minior-red",
    "order": 940,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10136.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 10137,
    "name": "minior-orange",
    "order": 941,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10137.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 10138,
    "name": "minior-yellow",
    "order": 942,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10138.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 10139,
    "name": "minior-green",
    "order": 943,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10139.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 10140,
    "name": "minior-blue",
    "order": 944,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10140.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 10141,
    "name": "minior-indigo",
    "order": 945,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10141.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 10142,
    "name": "minior-violet",
    "order": 946,
    "height": 3,
    "weight": 3,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10142.png",
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "shields-down"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 10143,
    "name": "mimikyu-busted",
    "order": 952,
    "height": 2,
    "weight": 7,
    "image": null,
    "types": [
      "ghost",
      "fairy"
    ],
    "abilities": [
      "disguise"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 96
      }
    ]
  },
  {
    "id": 10144,
    "name": "mimikyu-totem-disguised",
    "order": 953,
    "height": 4,
    "weight": 28,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10144.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "abilities": [
      "disguise"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 96
      }
    ]
  },
  {
    "id": 10145,
    "name": "mimikyu-totem-busted",
    "order": 954,
    "height": 4,
    "weight": 28,
    "image": null,
    "types": [
      "ghost",
      "fairy"
    ],
    "abilities": [
      "disguise"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 96
      }
    ]
  },
  {
    "id": 10146,
    "name": "kommo-o-totem",
    "order": 961,
    "height": 24,
    "weight": 2075,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10146.png",
    "types": [
      "dragon",
      "fighting"
    ],
    "abilities": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 125
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 10147,
    "name": "magearna-original",
    "order": 982,
    "height": 10,
    "weight": 805,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10147.png",
    "types": [
      "steel",
      "fairy"
    ],
    "abilities": [
      "soul-heart"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 10148,
    "name": "pikachu-partner-cap",
    "order": 48,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10148.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10149,
    "name": "marowak-totem",
    "order": 166,
    "height": 17,
    "weight": 980,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10149.png",
    "types": [
      "fire",
      "ghost"
    ],
    "abilities": [
      "cursed-body",
      "lightning-rod",
      "rock-head"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 45
      }
    ]
  },
  {
    "id": 10150,
    "name": "ribombee-totem",
    "order": 895,
    "height": 4,
    "weight": 20,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10150.png",
    "types": [
      "bug",
      "fairy"
    ],
    "abilities": [
      "honey-gather",
      "shield-dust",
      "sweet-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 124
      }
    ]
  },
  {
    "id": 10151,
    "name": "rockruff-own-tempo",
    "order": 897,
    "height": 5,
    "weight": 92,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10151.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "own-tempo"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10152,
    "name": "lycanroc-dusk",
    "order": 900,
    "height": 8,
    "weight": 250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10152.png",
    "types": [
      "rock"
    ],
    "abilities": [
      "tough-claws"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 117
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 10153,
    "name": "araquanid-totem",
    "order": 909,
    "height": 31,
    "weight": 2175,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10153.png",
    "types": [
      "water",
      "bug"
    ],
    "abilities": [
      "water-bubble",
      "water-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 92
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 132
      },
      {
        "name": "speed",
        "baseStat": 42
      }
    ]
  },
  {
    "id": 10154,
    "name": "togedemaru-totem",
    "order": 950,
    "height": 6,
    "weight": 130,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10154.png",
    "types": [
      "electric",
      "steel"
    ],
    "abilities": [
      "iron-barbs",
      "lightning-rod",
      "sturdy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 98
      },
      {
        "name": "defense",
        "baseStat": 63
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 73
      },
      {
        "name": "speed",
        "baseStat": 96
      }
    ]
  },
  {
    "id": 10155,
    "name": "necrozma-dusk",
    "order": 978,
    "height": 38,
    "weight": 4600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10155.png",
    "types": [
      "psychic",
      "steel"
    ],
    "abilities": [
      "prism-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 97
      },
      {
        "name": "attack",
        "baseStat": 157
      },
      {
        "name": "defense",
        "baseStat": 127
      },
      {
        "name": "special-attack",
        "baseStat": 113
      },
      {
        "name": "special-defense",
        "baseStat": 109
      },
      {
        "name": "speed",
        "baseStat": 77
      }
    ]
  },
  {
    "id": 10156,
    "name": "necrozma-dawn",
    "order": 979,
    "height": 42,
    "weight": 3500,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10156.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "abilities": [
      "prism-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 97
      },
      {
        "name": "attack",
        "baseStat": 113
      },
      {
        "name": "defense",
        "baseStat": 109
      },
      {
        "name": "special-attack",
        "baseStat": 157
      },
      {
        "name": "special-defense",
        "baseStat": 127
      },
      {
        "name": "speed",
        "baseStat": 77
      }
    ]
  },
  {
    "id": 10157,
    "name": "necrozma-ultra",
    "order": 980,
    "height": 75,
    "weight": 2300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10157.png",
    "types": [
      "psychic",
      "dragon"
    ],
    "abilities": [
      "neuroforce"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 97
      },
      {
        "name": "attack",
        "baseStat": 167
      },
      {
        "name": "defense",
        "baseStat": 97
      },
      {
        "name": "special-attack",
        "baseStat": 167
      },
      {
        "name": "special-defense",
        "baseStat": 97
      },
      {
        "name": "speed",
        "baseStat": 129
      }
    ]
  },
  {
    "id": 10158,
    "name": "pikachu-starter",
    "order": 49,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10158.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 10159,
    "name": "eevee-starter",
    "order": 216,
    "height": 3,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10159.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "run-away",
      "adaptability",
      "anticipation"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 10160,
    "name": "pikachu-world-cap",
    "order": 50,
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10160.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10161,
    "name": "meowth-galar",
    "order": 90,
    "height": 4,
    "weight": 75,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10161.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "pickup",
      "tough-claws",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 10162,
    "name": "ponyta-galar",
    "order": 122,
    "height": 8,
    "weight": 240,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10162.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "run-away",
      "pastel-veil",
      "anticipation"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10163,
    "name": "rapidash-galar",
    "order": 124,
    "height": 17,
    "weight": 800,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10163.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "abilities": [
      "run-away",
      "pastel-veil",
      "anticipation"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 10164,
    "name": "slowpoke-galar",
    "order": 126,
    "height": 12,
    "weight": 360,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10164.png",
    "types": [
      "psychic"
    ],
    "abilities": [
      "gluttony",
      "own-tempo",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 10165,
    "name": "slowbro-galar",
    "order": 129,
    "height": 16,
    "weight": 705,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10165.png",
    "types": [
      "poison",
      "psychic"
    ],
    "abilities": [
      "quick-draw",
      "own-tempo",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 10166,
    "name": "farfetchd-galar",
    "order": 136,
    "height": 8,
    "weight": 420,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10166.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "steadfast",
      "scrappy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 52
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 58
      },
      {
        "name": "special-defense",
        "baseStat": 62
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 10167,
    "name": "weezing-galar",
    "order": 175,
    "height": 30,
    "weight": 160,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10167.png",
    "types": [
      "poison",
      "fairy"
    ],
    "abilities": [
      "levitate",
      "neutralizing-gas",
      "misty-surge"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10168,
    "name": "mr-mime-galar",
    "order": 195,
    "height": 14,
    "weight": 568,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10168.png",
    "types": [
      "ice",
      "psychic"
    ],
    "abilities": [
      "vital-spirit",
      "screen-cleaner",
      "ice-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 50
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10169,
    "name": "articuno-galar",
    "order": 237,
    "height": 17,
    "weight": 509,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10169.png",
    "types": [
      "psychic",
      "flying"
    ],
    "abilities": [
      "competitive"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 10170,
    "name": "zapdos-galar",
    "order": 239,
    "height": 16,
    "weight": 582,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10170.png",
    "types": [
      "fighting",
      "flying"
    ],
    "abilities": [
      "defiant"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10171,
    "name": "moltres-galar",
    "order": 241,
    "height": 20,
    "weight": 660,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10171.png",
    "types": [
      "dark",
      "flying"
    ],
    "abilities": [
      "berserk"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 125
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10172,
    "name": "slowking-galar",
    "order": 131,
    "height": 18,
    "weight": 795,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10172.png",
    "types": [
      "poison",
      "psychic"
    ],
    "abilities": [
      "curious-medicine",
      "own-tempo",
      "regenerator"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 10173,
    "name": "corsola-galar",
    "order": 322,
    "height": 6,
    "weight": 5,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10173.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "weak-armor",
      "cursed-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 10174,
    "name": "zigzagoon-galar",
    "order": 362,
    "height": 4,
    "weight": 175,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10174.png",
    "types": [
      "dark",
      "normal"
    ],
    "abilities": [
      "pickup",
      "gluttony",
      "quick-feet"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 38
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 41
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 41
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10175,
    "name": "linoone-galar",
    "order": 364,
    "height": 5,
    "weight": 325,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10175.png",
    "types": [
      "dark",
      "normal"
    ],
    "abilities": [
      "pickup",
      "gluttony",
      "quick-feet"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 61
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 61
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10176,
    "name": "darumaka-galar",
    "order": 672,
    "height": 7,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10176.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "hustle",
      "inner-focus"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 15
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 10177,
    "name": "darmanitan-galar-standard",
    "order": 675,
    "height": 17,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10177.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "gorilla-tactics",
      "zen-mode"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 140
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 10178,
    "name": "darmanitan-galar-zen",
    "order": 676,
    "height": 17,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10178.png",
    "types": [
      "ice",
      "fire"
    ],
    "abilities": [
      "gorilla-tactics",
      "zen-mode"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 160
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 10179,
    "name": "yamask-galar",
    "order": 684,
    "height": 5,
    "weight": 15,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10179.png",
    "types": [
      "ground",
      "ghost"
    ],
    "abilities": [
      "wandering-spirit"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 38
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 10180,
    "name": "stunfisk-galar",
    "order": 741,
    "height": 7,
    "weight": 205,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10180.png",
    "types": [
      "ground",
      "steel"
    ],
    "abilities": [
      "mimicry"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 109
      },
      {
        "name": "attack",
        "baseStat": 81
      },
      {
        "name": "defense",
        "baseStat": 99
      },
      {
        "name": "special-attack",
        "baseStat": 66
      },
      {
        "name": "special-defense",
        "baseStat": 84
      },
      {
        "name": "speed",
        "baseStat": 32
      }
    ]
  },
  {
    "id": 10181,
    "name": "zygarde-10",
    "order": 859,
    "height": 12,
    "weight": 335,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10181.png",
    "types": [
      "dragon",
      "ground"
    ],
    "abilities": [
      "aura-break"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 54
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 71
      },
      {
        "name": "special-attack",
        "baseStat": 61
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 10182,
    "name": "cramorant-gulping",
    "order": 1027,
    "height": 8,
    "weight": 180,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10182.png",
    "types": [
      "flying",
      "water"
    ],
    "abilities": [
      "gulp-missile"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 10183,
    "name": "cramorant-gorging",
    "order": 1028,
    "height": 8,
    "weight": 180,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10183.png",
    "types": [
      "flying",
      "water"
    ],
    "abilities": [
      "gulp-missile"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 10184,
    "name": "toxtricity-low-key",
    "order": 1033,
    "height": 16,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10184.png",
    "types": [
      "electric",
      "poison"
    ],
    "abilities": [
      "punk-rock",
      "minus",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 98
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 114
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 10185,
    "name": "eiscue-noice",
    "order": 1060,
    "height": 14,
    "weight": 890,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10185.png",
    "types": [
      "ice"
    ],
    "abilities": [
      "ice-face"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 130
      }
    ]
  },
  {
    "id": 10186,
    "name": "indeedee-female",
    "order": 1062,
    "height": 9,
    "weight": 280,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10186.png",
    "types": [
      "psychic",
      "normal"
    ],
    "abilities": [
      "own-tempo",
      "synchronize",
      "psychic-surge"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 10187,
    "name": "morpeko-hangry",
    "order": 1064,
    "height": 3,
    "weight": 30,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10187.png",
    "types": [
      "electric",
      "dark"
    ],
    "abilities": [
      "hunger-switch"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 58
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 58
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 58
      },
      {
        "name": "speed",
        "baseStat": 97
      }
    ]
  },
  {
    "id": 10188,
    "name": "zacian-crowned",
    "order": 1076,
    "height": 28,
    "weight": 3550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10188.png",
    "types": [
      "fairy",
      "steel"
    ],
    "abilities": [
      "intrepid-sword"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 92
      },
      {
        "name": "attack",
        "baseStat": 150
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 148
      }
    ]
  },
  {
    "id": 10189,
    "name": "zamazenta-crowned",
    "order": 1078,
    "height": 29,
    "weight": 7850,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10189.png",
    "types": [
      "fighting",
      "steel"
    ],
    "abilities": [
      "dauntless-shield"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 92
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 140
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 140
      },
      {
        "name": "speed",
        "baseStat": 128
      }
    ]
  },
  {
    "id": 10190,
    "name": "eternatus-eternamax",
    "order": 1080,
    "height": 1000,
    "weight": 0,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10190.png",
    "types": [
      "poison",
      "dragon"
    ],
    "abilities": [
      "pressure"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 255
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 250
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 250
      },
      {
        "name": "speed",
        "baseStat": 130
      }
    ]
  },
  {
    "id": 10191,
    "name": "urshifu-rapid-strike",
    "order": 1083,
    "height": 19,
    "weight": 1050,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10191.png",
    "types": [
      "fighting",
      "water"
    ],
    "abilities": [
      "unseen-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 63
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 97
      }
    ]
  },
  {
    "id": 10192,
    "name": "zarude-dada",
    "order": 1085,
    "height": 18,
    "weight": 700,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10192.png",
    "types": [
      "dark",
      "grass"
    ],
    "abilities": [
      "leaf-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 105
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 70
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 10193,
    "name": "calyrex-ice",
    "order": 1091,
    "height": 24,
    "weight": 8091,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10193.png",
    "types": [
      "psychic",
      "ice"
    ],
    "abilities": [
      "as-one-glastrier"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 165
      },
      {
        "name": "defense",
        "baseStat": 150
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 130
      },
      {
        "name": "speed",
        "baseStat": 50
      }
    ]
  },
  {
    "id": 10194,
    "name": "calyrex-shadow",
    "order": 1092,
    "height": 24,
    "weight": 536,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10194.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "abilities": [
      "as-one-spectrier"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 165
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 150
      }
    ]
  },
  {
    "id": 10195,
    "name": "venusaur-gmax",
    "order": -1,
    "height": 240,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10195.png",
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "overgrow",
      "chlorophyll"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 82
      },
      {
        "name": "defense",
        "baseStat": 83
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 10196,
    "name": "charizard-gmax",
    "order": -1,
    "height": 280,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10196.png",
    "types": [
      "fire",
      "flying"
    ],
    "abilities": [
      "blaze",
      "solar-power"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 78
      },
      {
        "name": "attack",
        "baseStat": 84
      },
      {
        "name": "defense",
        "baseStat": 78
      },
      {
        "name": "special-attack",
        "baseStat": 109
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10197,
    "name": "blastoise-gmax",
    "order": -1,
    "height": 250,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10197.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "rain-dish"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 79
      },
      {
        "name": "attack",
        "baseStat": 83
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 105
      },
      {
        "name": "speed",
        "baseStat": 78
      }
    ]
  },
  {
    "id": 10198,
    "name": "butterfree-gmax",
    "order": -1,
    "height": 170,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10198.png",
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "compound-eyes",
      "tinted-lens"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 10199,
    "name": "pikachu-gmax",
    "order": -1,
    "height": 210,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10199.png",
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10200,
    "name": "meowth-gmax",
    "order": -1,
    "height": 330,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10200.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "pickup",
      "technician",
      "unnerve"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 35
      },
      {
        "name": "special-attack",
        "baseStat": 40
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10201,
    "name": "machamp-gmax",
    "order": -1,
    "height": 250,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10201.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "guts",
      "no-guard",
      "steadfast"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 10202,
    "name": "gengar-gmax",
    "order": -1,
    "height": 200,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10202.png",
    "types": [
      "ghost",
      "poison"
    ],
    "abilities": [
      "cursed-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 65
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 130
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 10203,
    "name": "kingler-gmax",
    "order": -1,
    "height": 190,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10203.png",
    "types": [
      "water"
    ],
    "abilities": [
      "hyper-cutter",
      "shell-armor",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 10204,
    "name": "lapras-gmax",
    "order": -1,
    "height": 240,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10204.png",
    "types": [
      "water",
      "ice"
    ],
    "abilities": [
      "water-absorb",
      "shell-armor",
      "hydration"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 130
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10205,
    "name": "eevee-gmax",
    "order": -1,
    "height": 180,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10205.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "run-away",
      "adaptability",
      "anticipation"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 55
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 10206,
    "name": "snorlax-gmax",
    "order": -1,
    "height": 350,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10206.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "immunity",
      "thick-fat",
      "gluttony"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 160
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 10207,
    "name": "garbodor-gmax",
    "order": -1,
    "height": 210,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10207.png",
    "types": [
      "poison"
    ],
    "abilities": [
      "stench",
      "weak-armor",
      "aftermath"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 82
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 82
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 10208,
    "name": "melmetal-gmax",
    "order": -1,
    "height": 250,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10208.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "iron-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 135
      },
      {
        "name": "attack",
        "baseStat": 143
      },
      {
        "name": "defense",
        "baseStat": 143
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 34
      }
    ]
  },
  {
    "id": 10209,
    "name": "rillaboom-gmax",
    "order": -1,
    "height": 280,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10209.png",
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow",
      "grassy-surge"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 125
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 10210,
    "name": "cinderace-gmax",
    "order": -1,
    "height": 270,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10210.png",
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze",
      "libero"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 116
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 119
      }
    ]
  },
  {
    "id": 10211,
    "name": "inteleon-gmax",
    "order": -1,
    "height": 400,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10211.png",
    "types": [
      "water"
    ],
    "abilities": [
      "torrent",
      "sniper"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 10212,
    "name": "corviknight-gmax",
    "order": -1,
    "height": 140,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10212.png",
    "types": [
      "flying",
      "steel"
    ],
    "abilities": [
      "pressure",
      "unnerve",
      "mirror-armor"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 98
      },
      {
        "name": "attack",
        "baseStat": 87
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 53
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 67
      }
    ]
  },
  {
    "id": 10213,
    "name": "orbeetle-gmax",
    "order": -1,
    "height": 140,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10213.png",
    "types": [
      "bug",
      "psychic"
    ],
    "abilities": [
      "swarm",
      "frisk",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10214,
    "name": "drednaw-gmax",
    "order": -1,
    "height": 240,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10214.png",
    "types": [
      "water",
      "rock"
    ],
    "abilities": [
      "strong-jaw",
      "shell-armor",
      "swift-swim"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 90
      },
      {
        "name": "special-attack",
        "baseStat": 48
      },
      {
        "name": "special-defense",
        "baseStat": 68
      },
      {
        "name": "speed",
        "baseStat": 74
      }
    ]
  },
  {
    "id": 10215,
    "name": "coalossal-gmax",
    "order": -1,
    "height": 420,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10215.png",
    "types": [
      "rock",
      "fire"
    ],
    "abilities": [
      "steam-engine",
      "flame-body",
      "flash-fire"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 80
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 10216,
    "name": "flapple-gmax",
    "order": -1,
    "height": 240,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10216.png",
    "types": [
      "grass",
      "dragon"
    ],
    "abilities": [
      "ripen",
      "gluttony",
      "hustle"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 10217,
    "name": "appletun-gmax",
    "order": -1,
    "height": 240,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10217.png",
    "types": [
      "grass",
      "dragon"
    ],
    "abilities": [
      "ripen",
      "gluttony",
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 10218,
    "name": "sandaconda-gmax",
    "order": -1,
    "height": 220,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10218.png",
    "types": [
      "ground"
    ],
    "abilities": [
      "sand-spit",
      "shed-skin",
      "sand-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 72
      },
      {
        "name": "attack",
        "baseStat": 107
      },
      {
        "name": "defense",
        "baseStat": 125
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 71
      }
    ]
  },
  {
    "id": 10219,
    "name": "toxtricity-amped-gmax",
    "order": -1,
    "height": 240,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10219.png",
    "types": [
      "electric",
      "poison"
    ],
    "abilities": [
      "punk-rock",
      "plus",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 98
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 114
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 10220,
    "name": "centiskorch-gmax",
    "order": -1,
    "height": 750,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10220.png",
    "types": [
      "fire",
      "bug"
    ],
    "abilities": [
      "flash-fire",
      "white-smoke",
      "flame-body"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 90
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 10221,
    "name": "hatterene-gmax",
    "order": -1,
    "height": 260,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10221.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "abilities": [
      "healer",
      "anticipation",
      "magic-bounce"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 57
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 95
      },
      {
        "name": "special-attack",
        "baseStat": 136
      },
      {
        "name": "special-defense",
        "baseStat": 103
      },
      {
        "name": "speed",
        "baseStat": 29
      }
    ]
  },
  {
    "id": 10222,
    "name": "grimmsnarl-gmax",
    "order": -1,
    "height": 320,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10222.png",
    "types": [
      "dark",
      "fairy"
    ],
    "abilities": [
      "prankster",
      "frisk",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10223,
    "name": "alcremie-gmax",
    "order": -1,
    "height": 300,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10223.png",
    "types": [
      "fairy"
    ],
    "abilities": [
      "sweet-veil",
      "aroma-veil"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 121
      },
      {
        "name": "speed",
        "baseStat": 64
      }
    ]
  },
  {
    "id": 10224,
    "name": "copperajah-gmax",
    "order": -1,
    "height": 230,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10224.png",
    "types": [
      "steel"
    ],
    "abilities": [
      "sheer-force",
      "heavy-metal"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 122
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 69
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 69
      },
      {
        "name": "speed",
        "baseStat": 30
      }
    ]
  },
  {
    "id": 10225,
    "name": "duraludon-gmax",
    "order": -1,
    "height": 430,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10225.png",
    "types": [
      "steel",
      "dragon"
    ],
    "abilities": [
      "light-metal",
      "heavy-metal",
      "stalwart"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 10226,
    "name": "urshifu-single-strike-gmax",
    "order": -1,
    "height": 290,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10226.png",
    "types": [
      "fighting",
      "dark"
    ],
    "abilities": [
      "unseen-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 63
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 97
      }
    ]
  },
  {
    "id": 10227,
    "name": "urshifu-rapid-strike-gmax",
    "order": -1,
    "height": 260,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10227.png",
    "types": [
      "fighting",
      "water"
    ],
    "abilities": [
      "unseen-fist"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 130
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 63
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 97
      }
    ]
  },
  {
    "id": 10228,
    "name": "toxtricity-low-key-gmax",
    "order": -1,
    "height": 240,
    "weight": 10000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10228.png",
    "types": [
      "electric",
      "poison"
    ],
    "abilities": [
      "punk-rock",
      "minus",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 98
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 114
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 75
      }
    ]
  },
  {
    "id": 10229,
    "name": "growlithe-hisui",
    "order": -1,
    "height": 8,
    "weight": 227,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10229.png",
    "types": [
      "fire",
      "rock"
    ],
    "abilities": [
      "intimidate",
      "flash-fire",
      "rock-head"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 50
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 10230,
    "name": "arcanine-hisui",
    "order": -1,
    "height": 20,
    "weight": 1680,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10230.png",
    "types": [
      "fire",
      "rock"
    ],
    "abilities": [
      "intimidate",
      "flash-fire",
      "rock-head"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10231,
    "name": "voltorb-hisui",
    "order": -1,
    "height": 5,
    "weight": 130,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10231.png",
    "types": [
      "electric",
      "grass"
    ],
    "abilities": [
      "soundproof",
      "static",
      "aftermath"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 40
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 50
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10232,
    "name": "electrode-hisui",
    "order": -1,
    "height": 12,
    "weight": 710,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10232.png",
    "types": [
      "electric",
      "grass"
    ],
    "abilities": [
      "soundproof",
      "static",
      "aftermath"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 60
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 80
      },
      {
        "name": "speed",
        "baseStat": 150
      }
    ]
  },
  {
    "id": 10233,
    "name": "typhlosion-hisui",
    "order": -1,
    "height": 16,
    "weight": 698,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10233.png",
    "types": [
      "fire",
      "ghost"
    ],
    "abilities": [
      "blaze",
      "frisk"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 73
      },
      {
        "name": "attack",
        "baseStat": 84
      },
      {
        "name": "defense",
        "baseStat": 78
      },
      {
        "name": "special-attack",
        "baseStat": 119
      },
      {
        "name": "special-defense",
        "baseStat": 85
      },
      {
        "name": "speed",
        "baseStat": 95
      }
    ]
  },
  {
    "id": 10234,
    "name": "qwilfish-hisui",
    "order": -1,
    "height": 5,
    "weight": 39,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10234.png",
    "types": [
      "dark",
      "poison"
    ],
    "abilities": [
      "poison-point",
      "swift-swim",
      "intimidate"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 65
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 85
      },
      {
        "name": "special-attack",
        "baseStat": 55
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 10235,
    "name": "sneasel-hisui",
    "order": -1,
    "height": 9,
    "weight": 270,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10235.png",
    "types": [
      "fighting",
      "poison"
    ],
    "abilities": [
      "inner-focus",
      "keen-eye",
      "pickpocket"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 55
      },
      {
        "name": "special-attack",
        "baseStat": 35
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 115
      }
    ]
  },
  {
    "id": 10236,
    "name": "samurott-hisui",
    "order": -1,
    "height": 15,
    "weight": 582,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10236.png",
    "types": [
      "water",
      "dark"
    ],
    "abilities": [
      "torrent",
      "sharpness"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 108
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 10237,
    "name": "lilligant-hisui",
    "order": -1,
    "height": 12,
    "weight": 192,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10237.png",
    "types": [
      "grass",
      "fighting"
    ],
    "abilities": [
      "chlorophyll",
      "hustle",
      "leaf-guard"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 105
      },
      {
        "name": "defense",
        "baseStat": 75
      },
      {
        "name": "special-attack",
        "baseStat": 50
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 105
      }
    ]
  },
  {
    "id": 10238,
    "name": "zorua-hisui",
    "order": -1,
    "height": 7,
    "weight": 125,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10238.png",
    "types": [
      "normal",
      "ghost"
    ],
    "abilities": [
      "illusion"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 35
      },
      {
        "name": "attack",
        "baseStat": 60
      },
      {
        "name": "defense",
        "baseStat": 40
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 40
      },
      {
        "name": "speed",
        "baseStat": 70
      }
    ]
  },
  {
    "id": 10239,
    "name": "zoroark-hisui",
    "order": -1,
    "height": 16,
    "weight": 730,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10239.png",
    "types": [
      "normal",
      "ghost"
    ],
    "abilities": [
      "illusion"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 125
      },
      {
        "name": "special-defense",
        "baseStat": 60
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 10240,
    "name": "braviary-hisui",
    "order": -1,
    "height": 17,
    "weight": 434,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10240.png",
    "types": [
      "psychic",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "sheer-force",
      "tinted-lens"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 110
      },
      {
        "name": "attack",
        "baseStat": 83
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 112
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 10241,
    "name": "sliggoo-hisui",
    "order": -1,
    "height": 7,
    "weight": 685,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10241.png",
    "types": [
      "steel",
      "dragon"
    ],
    "abilities": [
      "sap-sipper",
      "shell-armor",
      "gooey"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 58
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 83
      },
      {
        "name": "special-attack",
        "baseStat": 83
      },
      {
        "name": "special-defense",
        "baseStat": 113
      },
      {
        "name": "speed",
        "baseStat": 40
      }
    ]
  },
  {
    "id": 10242,
    "name": "goodra-hisui",
    "order": -1,
    "height": 17,
    "weight": 3341,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10242.png",
    "types": [
      "steel",
      "dragon"
    ],
    "abilities": [
      "sap-sipper",
      "shell-armor",
      "gooey"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 110
      },
      {
        "name": "special-defense",
        "baseStat": 150
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10243,
    "name": "avalugg-hisui",
    "order": -1,
    "height": 14,
    "weight": 2624,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10243.png",
    "types": [
      "ice",
      "rock"
    ],
    "abilities": [
      "strong-jaw",
      "ice-body",
      "sturdy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 127
      },
      {
        "name": "defense",
        "baseStat": 184
      },
      {
        "name": "special-attack",
        "baseStat": 34
      },
      {
        "name": "special-defense",
        "baseStat": 36
      },
      {
        "name": "speed",
        "baseStat": 38
      }
    ]
  },
  {
    "id": 10244,
    "name": "decidueye-hisui",
    "order": -1,
    "height": 16,
    "weight": 370,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10244.png",
    "types": [
      "grass",
      "fighting"
    ],
    "abilities": [
      "overgrow",
      "scrappy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 88
      },
      {
        "name": "attack",
        "baseStat": 112
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 95
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 60
      }
    ]
  },
  {
    "id": 10245,
    "name": "dialga-origin",
    "order": -1,
    "height": 70,
    "weight": 8487,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10245.png",
    "types": [
      "steel",
      "dragon"
    ],
    "abilities": [
      "pressure",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 150
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 90
      }
    ]
  },
  {
    "id": 10246,
    "name": "palkia-origin",
    "order": -1,
    "height": 63,
    "weight": 6590,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10246.png",
    "types": [
      "water",
      "dragon"
    ],
    "abilities": [
      "pressure",
      "telepathy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 90
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 150
      },
      {
        "name": "special-defense",
        "baseStat": 120
      },
      {
        "name": "speed",
        "baseStat": 120
      }
    ]
  },
  {
    "id": 10247,
    "name": "basculin-white-striped",
    "order": -1,
    "height": 10,
    "weight": 180,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10247.png",
    "types": [
      "water"
    ],
    "abilities": [
      "rattled",
      "adaptability",
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 70
      },
      {
        "name": "attack",
        "baseStat": 92
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 80
      },
      {
        "name": "special-defense",
        "baseStat": 55
      },
      {
        "name": "speed",
        "baseStat": 98
      }
    ]
  },
  {
    "id": 10248,
    "name": "basculegion-female",
    "order": -1,
    "height": 30,
    "weight": 1100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10248.png",
    "types": [
      "water",
      "ghost"
    ],
    "abilities": [
      "swift-swim",
      "adaptability",
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 120
      },
      {
        "name": "attack",
        "baseStat": 92
      },
      {
        "name": "defense",
        "baseStat": 65
      },
      {
        "name": "special-attack",
        "baseStat": 100
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 78
      }
    ]
  },
  {
    "id": 10249,
    "name": "enamorus-therian",
    "order": -1,
    "height": 16,
    "weight": 480,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10249.png",
    "types": [
      "fairy",
      "flying"
    ],
    "abilities": [
      "overcoat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 74
      },
      {
        "name": "attack",
        "baseStat": 115
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 46
      }
    ]
  },
  {
    "id": 10250,
    "name": "tauros-paldea-combat-breed",
    "order": -1,
    "height": 14,
    "weight": 1150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10250.png",
    "types": [
      "fighting"
    ],
    "abilities": [
      "intimidate",
      "anger-point",
      "cud-chew"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10251,
    "name": "tauros-paldea-blaze-breed",
    "order": -1,
    "height": 14,
    "weight": 850,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10251.png",
    "types": [
      "fighting",
      "fire"
    ],
    "abilities": [
      "intimidate",
      "anger-point",
      "cud-chew"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10252,
    "name": "tauros-paldea-aqua-breed",
    "order": -1,
    "height": 14,
    "weight": 1100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10252.png",
    "types": [
      "fighting",
      "water"
    ],
    "abilities": [
      "intimidate",
      "anger-point",
      "cud-chew"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 75
      },
      {
        "name": "attack",
        "baseStat": 110
      },
      {
        "name": "defense",
        "baseStat": 105
      },
      {
        "name": "special-attack",
        "baseStat": 30
      },
      {
        "name": "special-defense",
        "baseStat": 70
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10253,
    "name": "wooper-paldea",
    "order": -1,
    "height": 4,
    "weight": 110,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10253.png",
    "types": [
      "poison",
      "ground"
    ],
    "abilities": [
      "poison-point",
      "water-absorb",
      "unaware"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 55
      },
      {
        "name": "attack",
        "baseStat": 45
      },
      {
        "name": "defense",
        "baseStat": 45
      },
      {
        "name": "special-attack",
        "baseStat": 25
      },
      {
        "name": "special-defense",
        "baseStat": 25
      },
      {
        "name": "speed",
        "baseStat": 15
      }
    ]
  },
  {
    "id": 10254,
    "name": "oinkologne-female",
    "order": -1,
    "height": 10,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10254.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "aroma-veil",
      "gluttony",
      "thick-fat"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 115
      },
      {
        "name": "attack",
        "baseStat": 90
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 59
      },
      {
        "name": "special-defense",
        "baseStat": 90
      },
      {
        "name": "speed",
        "baseStat": 65
      }
    ]
  },
  {
    "id": 10255,
    "name": "dudunsparce-three-segment",
    "order": -1,
    "height": 45,
    "weight": 474,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10255.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "serene-grace",
      "run-away",
      "rattled"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 125
      },
      {
        "name": "attack",
        "baseStat": 100
      },
      {
        "name": "defense",
        "baseStat": 80
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 55
      }
    ]
  },
  {
    "id": 10256,
    "name": "palafin-hero",
    "order": -1,
    "height": 18,
    "weight": 974,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10256.png",
    "types": [
      "water"
    ],
    "abilities": [
      "zero-to-hero",
      "zero-to-hero"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 160
      },
      {
        "name": "defense",
        "baseStat": 97
      },
      {
        "name": "special-attack",
        "baseStat": 106
      },
      {
        "name": "special-defense",
        "baseStat": 87
      },
      {
        "name": "speed",
        "baseStat": 100
      }
    ]
  },
  {
    "id": 10257,
    "name": "maushold-family-of-three",
    "order": -1,
    "height": 3,
    "weight": 28,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10257.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "friend-guard",
      "cheek-pouch",
      "technician"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 74
      },
      {
        "name": "attack",
        "baseStat": 75
      },
      {
        "name": "defense",
        "baseStat": 70
      },
      {
        "name": "special-attack",
        "baseStat": 65
      },
      {
        "name": "special-defense",
        "baseStat": 75
      },
      {
        "name": "speed",
        "baseStat": 111
      }
    ]
  },
  {
    "id": 10258,
    "name": "tatsugiri-droopy",
    "order": -1,
    "height": 3,
    "weight": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10258.png",
    "types": [
      "dragon",
      "water"
    ],
    "abilities": [
      "commander",
      "storm-drain"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 82
      }
    ]
  },
  {
    "id": 10259,
    "name": "tatsugiri-stretchy",
    "order": -1,
    "height": 3,
    "weight": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10259.png",
    "types": [
      "dragon",
      "water"
    ],
    "abilities": [
      "commander",
      "storm-drain"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 68
      },
      {
        "name": "attack",
        "baseStat": 50
      },
      {
        "name": "defense",
        "baseStat": 60
      },
      {
        "name": "special-attack",
        "baseStat": 120
      },
      {
        "name": "special-defense",
        "baseStat": 95
      },
      {
        "name": "speed",
        "baseStat": 82
      }
    ]
  },
  {
    "id": 10260,
    "name": "squawkabilly-blue-plumage",
    "order": -1,
    "height": 6,
    "weight": 24,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10260.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "intimidate",
      "hustle",
      "guts"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 82
      },
      {
        "name": "attack",
        "baseStat": 96
      },
      {
        "name": "defense",
        "baseStat": 51
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 51
      },
      {
        "name": "speed",
        "baseStat": 92
      }
    ]
  },
  {
    "id": 10261,
    "name": "squawkabilly-yellow-plumage",
    "order": -1,
    "height": 6,
    "weight": 24,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10261.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "intimidate",
      "hustle",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 82
      },
      {
        "name": "attack",
        "baseStat": 96
      },
      {
        "name": "defense",
        "baseStat": 51
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 51
      },
      {
        "name": "speed",
        "baseStat": 92
      }
    ]
  },
  {
    "id": 10262,
    "name": "squawkabilly-white-plumage",
    "order": -1,
    "height": 6,
    "weight": 24,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10262.png",
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "intimidate",
      "hustle",
      "sheer-force"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 82
      },
      {
        "name": "attack",
        "baseStat": 96
      },
      {
        "name": "defense",
        "baseStat": 51
      },
      {
        "name": "special-attack",
        "baseStat": 45
      },
      {
        "name": "special-defense",
        "baseStat": 51
      },
      {
        "name": "speed",
        "baseStat": 92
      }
    ]
  },
  {
    "id": 10263,
    "name": "gimmighoul-roaming",
    "order": -1,
    "height": 1,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10263.png",
    "types": [
      "ghost"
    ],
    "abilities": [
      "run-away",
      "run-away"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 45
      },
      {
        "name": "attack",
        "baseStat": 30
      },
      {
        "name": "defense",
        "baseStat": 25
      },
      {
        "name": "special-attack",
        "baseStat": 75
      },
      {
        "name": "special-defense",
        "baseStat": 45
      },
      {
        "name": "speed",
        "baseStat": 80
      }
    ]
  },
  {
    "id": 10264,
    "name": "koraidon-limited-build",
    "order": -1,
    "height": 35,
    "weight": 3030,
    "image": null,
    "types": [
      "fighting",
      "dragon"
    ],
    "abilities": [
      "orichalcum-pulse",
      "orichalcum-pulse"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 10265,
    "name": "koraidon-sprinting-build",
    "order": -1,
    "height": 35,
    "weight": 3030,
    "image": null,
    "types": [
      "fighting",
      "dragon"
    ],
    "abilities": [
      "orichalcum-pulse",
      "orichalcum-pulse"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 10266,
    "name": "koraidon-swimming-build",
    "order": -1,
    "height": 35,
    "weight": 3030,
    "image": null,
    "types": [
      "fighting",
      "dragon"
    ],
    "abilities": [
      "orichalcum-pulse",
      "orichalcum-pulse"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 10267,
    "name": "koraidon-gliding-build",
    "order": -1,
    "height": 35,
    "weight": 3030,
    "image": null,
    "types": [
      "fighting",
      "dragon"
    ],
    "abilities": [
      "orichalcum-pulse",
      "orichalcum-pulse"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 135
      },
      {
        "name": "defense",
        "baseStat": 115
      },
      {
        "name": "special-attack",
        "baseStat": 85
      },
      {
        "name": "special-defense",
        "baseStat": 100
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 10268,
    "name": "miraidon-low-power-mode",
    "order": -1,
    "height": 28,
    "weight": 2400,
    "image": null,
    "types": [
      "electric",
      "dragon"
    ],
    "abilities": [
      "hadron-engine",
      "hadron-engine"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 10269,
    "name": "miraidon-drive-mode",
    "order": -1,
    "height": 28,
    "weight": 2400,
    "image": null,
    "types": [
      "electric",
      "dragon"
    ],
    "abilities": [
      "hadron-engine",
      "hadron-engine"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 10270,
    "name": "miraidon-aquatic-mode",
    "order": -1,
    "height": 28,
    "weight": 2400,
    "image": null,
    "types": [
      "electric",
      "dragon"
    ],
    "abilities": [
      "hadron-engine",
      "hadron-engine"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 10271,
    "name": "miraidon-glide-mode",
    "order": -1,
    "height": 28,
    "weight": 2400,
    "image": null,
    "types": [
      "electric",
      "dragon"
    ],
    "abilities": [
      "hadron-engine",
      "hadron-engine"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 100
      },
      {
        "name": "attack",
        "baseStat": 85
      },
      {
        "name": "defense",
        "baseStat": 100
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 115
      },
      {
        "name": "speed",
        "baseStat": 135
      }
    ]
  },
  {
    "id": 10272,
    "name": "ursaluna-bloodmoon",
    "order": -1,
    "height": 24,
    "weight": 2900,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10272.png",
    "types": [
      "ground",
      "normal"
    ],
    "abilities": [
      "minds-eye"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 113
      },
      {
        "name": "attack",
        "baseStat": 70
      },
      {
        "name": "defense",
        "baseStat": 120
      },
      {
        "name": "special-attack",
        "baseStat": 135
      },
      {
        "name": "special-defense",
        "baseStat": 65
      },
      {
        "name": "speed",
        "baseStat": 52
      }
    ]
  },
  {
    "id": 10273,
    "name": "ogerpon-wellspring-mask",
    "order": -1,
    "height": 12,
    "weight": 398,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10273.png",
    "types": [
      "grass",
      "water"
    ],
    "abilities": [
      "water-absorb"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 84
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 96
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 10274,
    "name": "ogerpon-hearthflame-mask",
    "order": -1,
    "height": 12,
    "weight": 398,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10274.png",
    "types": [
      "grass",
      "fire"
    ],
    "abilities": [
      "mold-breaker"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 84
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 96
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 10275,
    "name": "ogerpon-cornerstone-mask",
    "order": -1,
    "height": 12,
    "weight": 398,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10275.png",
    "types": [
      "grass",
      "rock"
    ],
    "abilities": [
      "sturdy"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 80
      },
      {
        "name": "attack",
        "baseStat": 120
      },
      {
        "name": "defense",
        "baseStat": 84
      },
      {
        "name": "special-attack",
        "baseStat": 60
      },
      {
        "name": "special-defense",
        "baseStat": 96
      },
      {
        "name": "speed",
        "baseStat": 110
      }
    ]
  },
  {
    "id": 10276,
    "name": "terapagos-terastal",
    "order": -1,
    "height": 3,
    "weight": 160,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10276.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "tera-shell"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  },
  {
    "id": 10277,
    "name": "terapagos-stellar",
    "order": -1,
    "height": 17,
    "weight": 770,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10277.png",
    "types": [
      "normal"
    ],
    "abilities": [
      "teraform-zero"
    ],
    "stats": [
      {
        "name": "hp",
        "baseStat": 95
      },
      {
        "name": "attack",
        "baseStat": 95
      },
      {
        "name": "defense",
        "baseStat": 110
      },
      {
        "name": "special-attack",
        "baseStat": 105
      },
      {
        "name": "special-defense",
        "baseStat": 110
      },
      {
        "name": "speed",
        "baseStat": 85
      }
    ]
  }
]