
StartupEvents.registry('item', event => {

    event.create('coordinate_crystal')
        .rarity('rare')
        .texture('kubejs:item/coordinate_crystals/blank_coordinate_crystal');

    event.create('abydos_coordinate_crystal')
        .rarity('epic')
        .texture('kubejs:item/coordinate_crystals/abydos_coordinate_crystal');
        
    event.create('nether_coordinate_crystal')
        .rarity('epic')
        .texture('kubejs:item/coordinate_crystals/nether_coordinate_crystal');

    event.create('end_coordinate_crystal')
        .rarity('epic')
        .texture('kubejs:item/coordinate_crystals/end_coordinate_crystal');

    /*event.create('lantea_coordinate_crystal')
        .displayName('Lantea Inscribed Coordinate Crystal')
        .rarity('epic')
        .tooltip('The §1Endless Seas')
        .texture('kubejs:item/coordinate_crystals/lantea_coordinate_crystal');

    event.create('cavum_coordinate_crystal')
        .displayName('Cavum Inscribed Coordinate Crystal')
        .rarity('epic')
        .tooltip('The §8Failing Abyss')
        .texture('kubejs:item/coordinate_crystals/cavum_coordinate_crystal');

    event.create('sea_coordinate_crystal')
        .displayName('Fractured Sea Coordinate Crystal')
        .rarity('epic')
        .tooltip('The final steps...')
        .texture('kubejs:item/coordinate_crystals/sea_coordinate_crystal');

    event.create('void_coordinate_crystal')
        .displayName('Fractured Void Coordinate Crystal')
        .rarity('epic')
        .tooltip('...to get Home')
        .texture('kubejs:item/coordinate_crystals/void_coordinate_crystal');*/

});