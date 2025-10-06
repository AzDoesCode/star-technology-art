StartupEvents.registry('block', event => {
    event.create('noble_mixing_casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/ultimate_multis/noble_mixing_casing');

    event.create('quake_proof_casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/ultimate_multis/quake_proof_casing');

    event.create('extreme_temperature_smelting_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/extreme_temperature_smelting_casing');

    event.create('subzero_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/subzero_casing');

    event.create('reinforced_cryostone_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/reinforced_cryostone_casing');

    event.create('reinforced_brimstone_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/reinforced_brimstone_casing');

    event.create('draneko_casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/draneko_casing');

    event.create('abyssal_drill_1')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/abyssal_drill_casing');

    event.create('abyssal_drill_2')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/abyssal_drill_casing_2');


    event.create('advanced_assembly_casing')
        .displayName('Advanced Assembly Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/advanced_assembly_casing');

    event.create('superdense_machine_casing')
        .displayName('Superdense Machine Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/superdense_machine_casing');
});