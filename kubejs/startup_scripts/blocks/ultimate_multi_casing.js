StartupEvents.registry('block', event => {
    event.create('noble_mixing_casing')
        .displayName('Noble Mixing Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/ultimate_multis/noble_mixing_casing');

    event.create('quake_proof_casing')
        .displayName('Quake Proof Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/ultimate_multis/quake_proof_casing');

    event.create('extreme_temperature_smelting_casing')
        .displayName('Extreme Temperature Smelting Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/extreme_temperature_smelting_casing');

    event.create('subzero_casing')
        .displayName('Subzero Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/subzero_casing');

    event.create('reinforced_cryostone_casing')
        .displayName('Reinforced Cryostone Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/reinforced_cryostone_casing');

    event.create('reinforced_brimstone_casing')
        .displayName('Reinforced Brimstone Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/reinforced_brimstone_casing');

    event.create('draneko_casing')
        .displayName('Draneko Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/draneko_casing');

    event.create('abyssal_drill_1')
        .displayName('Mythrolic Drill Casing')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/abyssal_drill_casing');

    event.create('abyssal_drill_2')
        .displayName('Starium Drill Casing')
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