import interfaceWriter = require('./lib/runners/interface-writer');

var dummy: SwaggerObject = require('./temp/dummy.json');
interfaceWriter(dummy, './temp/dummy.ts');

var pets: SwaggerObject = require('./temp/pets.json');
interfaceWriter(pets, './temp/pets.ts');
