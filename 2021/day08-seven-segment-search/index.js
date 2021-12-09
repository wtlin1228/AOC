const data = require("./input-puzzle.json");
const { getAll1478 } = require("./part1");
const { sumAllDisplays } = require("./part2");

const exampleInput = [
  {
    samples: [
      "be",
      "cfbegad",
      "cbdgef",
      "fgaecd",
      "cgeb",
      "fdcge",
      "agebfd",
      "fecdb",
      "fabcd",
      "edb",
    ],
    displays: ["fdgacbe", "cefdb", "cefbgd", "gcbe"],
  },
  {
    samples: [
      "edbfga",
      "begcd",
      "cbg",
      "gc",
      "gcadebf",
      "fbgde",
      "acbgfd",
      "abcde",
      "gfcbed",
      "gfec",
    ],
    displays: ["fcgedb", "cgb", "dgebacf", "gc"],
  },
  {
    samples: [
      "fgaebd",
      "cg",
      "bdaec",
      "gdafb",
      "agbcfd",
      "gdcbef",
      "bgcad",
      "gfac",
      "gcb",
      "cdgabef",
    ],
    displays: ["cg", "cg", "fdcagb", "cbg"],
  },
  {
    samples: [
      "fbegcd",
      "cbd",
      "adcefb",
      "dageb",
      "afcb",
      "bc",
      "aefdc",
      "ecdab",
      "fgdeca",
      "fcdbega",
    ],
    displays: ["efabcd", "cedba", "gadfec", "cb"],
  },
  {
    samples: [
      "aecbfdg",
      "fbg",
      "gf",
      "bafeg",
      "dbefa",
      "fcge",
      "gcbea",
      "fcaegb",
      "dgceab",
      "fcbdga",
    ],
    displays: ["gecf", "egdcabf", "bgf", "bfgea"],
  },
  {
    samples: [
      "fgeab",
      "ca",
      "afcebg",
      "bdacfeg",
      "cfaedg",
      "gcfdb",
      "baec",
      "bfadeg",
      "bafgc",
      "acf",
    ],
    displays: ["gebdcfa", "ecba", "ca", "fadegcb"],
  },
  {
    samples: [
      "dbcfg",
      "fgd",
      "bdegcaf",
      "fgec",
      "aegbdf",
      "ecdfab",
      "fbedc",
      "dacgb",
      "gdcebf",
      "gf",
    ],
    displays: ["cefg", "dcbef", "fcge", "gbcadfe"],
  },
  {
    samples: [
      "bdfegc",
      "cbegaf",
      "gecbf",
      "dfcage",
      "bdacg",
      "ed",
      "bedf",
      "ced",
      "adcbefg",
      "gebcd",
    ],
    displays: ["ed", "bcgafe", "cdgba", "cbgef"],
  },
  {
    samples: [
      "egadfb",
      "cdbfeg",
      "cegd",
      "fecab",
      "cgb",
      "gbdefca",
      "cg",
      "fgcdab",
      "egfdb",
      "bfceg",
    ],
    displays: ["gbdfcae", "bgc", "cg", "cgb"],
  },
  {
    samples: [
      "gcafb",
      "gcf",
      "dcaebfg",
      "ecagb",
      "gf",
      "abcdeg",
      "gaef",
      "cafbge",
      "fdbac",
      "fegbdc",
    ],
    displays: ["fgae", "cfgab", "fg", "bagce"],
  },
];

console.log(getAll1478(exampleInput)); // 26
console.log(getAll1478(data)); // 261

console.log(sumAllDisplays(exampleInput)); // 61229
console.log(sumAllDisplays(data)); // 987553
