const fs = require("fs/promises");
const uniqid = require("uniqid");

let data = {};

/*
  "asdsf1234": {
    "Name": "string",
    "Description": "string",
    "Image URL": "string",
    "Difficulty": "Level"
  }
 */
async function init() {
  try {
    data = JSON.parse(await fs.readFile("./models/data.json"));
  } catch (err) {
    console.error("Error reading database");
  }

  return (req, res, next) => {
    req.storage = {
      getAll,
      getById,
      create,
      edit,
    };
    next();
  };
}

async function getAll(query) {
  let cubes = Object.entries(data).map(([id, v]) =>
    Object.assign({}, { id }, v)
  );
  //filter cubes
  if (query.search) {
    cubes = cubes.filter((c) =>
      c.name.toLowerCase().includes(query.search.toLowerCase())
    );
  }

  if (query.from) {
    cubes = cubes.filter((c) => c.difficulty >= Number(query.from));
  }

  if (query.to) {
    cubes = cubes.filter((c) => c.difficulty <= Number(query.to));
  }

  return cubes;
}

async function getById(id) {
  const cube = data[id];
  if (cube) {
    return Object.assign({}, { id }, cube);
  } else {
    return undefined;
  }
}

async function create(cube) {
  const id = uniqid();
  data[id] = cube;

  await persist();
}

async function edit(id, cube) {
  if (!data[id]) {
    throw new ReferenceError("No such ID in database");
  } 
  data[id] = cube;
  await persist();
}

async function persist() {
  try {
    fs.writeFile("./models/data.json", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error write database");
  }
}
module.exports = {
  init,
  getAll,
  getById,
  create,
  edit,
};
