const lib = require("lib");
const free = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(free, 5));
        this.super$load();
    }
}, "free", Planets.sun, 1);
const sS = require("sectorSize");
sS.planetGrid(free, 3.3);
free.generator = new SerpuloPlanetGenerator();
free.atmosphereColor = Color.valueOf("F75000");
free.atmosphereRadIn = 0.05;
free.atmosphereRadOut = 0.5;
free.localizedName = "free-campaign";;
free.visible = true;
free.bloom = false;
free.accessible = true;
free.alwaysUnlocked = true;
free.startSector = 1;
free.orbitRadius = 22;
const yiluo2 = new SectorPreset("wo-de-tu", free, 1);
yiluo2.alwaysUnlocked = true;
yiluo2.captureWave = 1;
yiluo2.difficulty = 5;
yiluo2.localizedName = "start";
exports.yiluo2 = yiluo2;

