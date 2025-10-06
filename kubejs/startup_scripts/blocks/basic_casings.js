
StartupEvents.registry('block', event => {

    event.create('austenitic_stainless_steel_304_casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-austenitic-stainless-steel-304');

    event.create('inconel_625_casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-inconel-625');

    event.create('wood_casing')
        .hardness(5)
        .resistance(1)
        .soundType('wood')
        .requiresTool(true)
        .tagBlock('mineable/axe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/casings/casing-wood');

    event.create('peek_casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/machine_casing_peek');

    event.create('fluix_steel_casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/fluix_casing');

    event.create('superalloy_casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/superalloy_casing');

});