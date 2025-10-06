
StartupEvents.registry('block', event => {

    // reference casings
    event.create('laser_casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/laser_casing');

    event.create('inscribe_casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/inscribe_casing');
    
    event.create('core_casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/core_casing');

    // Extras
    event.create('meshblock')
        .hardness(2)
        .resistance(2)
        .soundType('wood')
        .transparent(true)
        .defaultTranslucent() 
        .requiresTool(false)
        .tagBlock('mineable/axe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/multiblock/meshblock');

    // Draco Tier
    event.create('draco_ware_casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(3)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/draco_ware_casing');

    event.create('abyssal_inductor_hull')
        .hardness(5)
        .resistance(10)
        .lightLevel(3)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/abyssal_inductor');

    event.create('draco_assembly_grating')
        .hardness(5)
        .resistance(10)
        .lightLevel(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/draco_assembly_grating');

    event.create('draco_resilient_fusion_glass')
        .hardness(2)
        .resistance(2)
        .soundType('glass')
        .transparent(true)
        .defaultTranslucent() 
        .requiresTool(false)
        .textureAll('kubejs:block/multiblock/draco_resilient_fusion_glass');

    event.create('heart_of_the_flame')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/multiblock/heart_of_the_flame');

    event.create('husk_of_the_flame')
        .hardness(5)
        .resistance(10)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/husk_of_the_flame');

    event.create('husk_brick')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/husk_brick');

    event.create('cryostone')
        .hardness(2)
        .resistance(2)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/cryostone');

    event.create('brimstone')
        .hardness(2)
        .resistance(2)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/brimstone');

    event.create('void_saturation_sponge')
        .hardness(1)
        .resistance(1)
        .soundType('froglight')
        .textureAll('kubejs:block/void_saturation_sponge');

});