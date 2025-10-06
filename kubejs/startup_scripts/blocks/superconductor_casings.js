
StartupEvents.registry('block', event => {

    const casing = (material, emmits_light) => {

        event.create(`${material}_casing`)
            .hardness(10)
            .resistance(1)
            .lightLevel((emmits_light) ? 2 : 0)
            .soundType('metal')
            .requiresTool(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .textureAll(`kubejs:block/casings/superconductors/${'casing-' + material.replace('_', '-')}`);

    }

    casing('soul_infused', false);
    casing('signalum', true);
    casing('lumium', true);
    casing('enderium', false);
    casing('shellite', false);
    casing('twinite', false);
    casing('dragonsteel', false);
    casing('prismalium', true);
    casing('melodium', true);
    casing('stellarium', true);
    casing('ancient_runicalium', true);


});