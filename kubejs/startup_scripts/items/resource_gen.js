StartupEvents.registry('item', event => {

    // Mycelium Leather
    event.create('compressed_mycelium');
    event.create('smoked_mycelium');
    event.create('mycelium_growth');

    //Akreyrium
    event.create('crystalline_akreyrium')
        .texture('kubejs:item/akreyrium/crystalline_akreyrium');
    
    event.create('amorphous_akreyrium')
        .texture('kubejs:item/akreyrium/amorphous_akreyrium');
    
    event.create('blank_injection_catalyst')
        .texture('kubejs:item/akreyrium/blank_injection_catalyst');

    event.create('electron_injection_catalyst')
        .texture('kubejs:item/akreyrium/electron_injection_catalyst');

    event.create('tau_injection_catalyst')
        .texture('kubejs:item/akreyrium/tau_injection_catalyst');

    event.create('aspect_of_weight')
        .texture('kubejs:item/akreyrium/aspect_of_weight');

    event.create('muon_injection_catalyst')
        .texture('kubejs:item/akreyrium/muon_injection_catalyst');

    event.create('damaged_injection_catalyst')
        .texture('kubejs:item/akreyrium/damaged_injection_catalyst');

    event.create('netherite_reinforced_mesh')
        .texture('kubejs:item/netherite_reinforced_mesh');

    event.create('leptonic_akreyrium_catalyst')
        .texture('kubejs:item/akreyrium/leptonic_akreyrium_catalyst');

    //Nether Stars
    [{type: 'Fire', color: 'c'}, {type: 'Ice', color: 'b'}, {type: 'Earth', color: '8'}, {type: 'Lightning', color: 'e'}].forEach(shard => {
        const { type, color } = shard;
        event.create(`${type.toLowerCase()}_infused_shard`)
            .tooltip(`§${color}?§e✧§${color}?`)
            .texture(`kubejs:item/lines/netherstar/${type.toLowerCase()}_infused_shard`)
            .glow(true);
    });

    event.create('star_casting_mold')
        .texture('kubejs:item/lines/netherstar/star_casting_mold');
    
    event.create('impure_nether_star')
        .tooltip('§e✧-')
        .texture('kubejs:item/lines/netherstar/impure_nether_star');

    event.create('nether_star_shard')
        .tooltip('§e✧')
        .texture('kubejs:item/lines/netherstar/nether_star_shard');
        
    event.create('energized_nether_star_shard')
        .tooltip('"§e✧+')
        .texture('kubejs:item/lines/netherstar/energized_nether_star_shard')
        .glow(true);

    event.create('nether_tempered_shard')
        .tooltip('§e✧++')
        .texture('kubejs:item/lines/netherstar/nether_tempered_shard')
        .glow(true);
    
    //Mystical Magmas
    event.create('ancient_netherite_reinforced_mesh')
        .texture('kubejs:item/ancient_netherite_reinforced_mesh');

    // Purpur
    event.create('true_absolute_chorus')
        .texture('kubejs:item/true_absolute_chorus')
        .glow(true);

    // Abyss Harvesting
    event.create('voidic_reinforced_mesh')
        .texture('kubejs:item/voidic_reinforced_mesh');

    event.create('saturation_core_1')
        .texture('kubejs:item/saturation_core_1');

    event.create('saturation_core_2')
        .texture('kubejs:item/saturation_core_2');

    event.create('saturation_core_3')
        .texture('kubejs:item/saturation_core_3');

    // Fishery
    event.create('dried_silkworm_dough')
        .texture('kubejs:item/resource_gen/dried_silkworm_dough');

    event.create('silkworm_oil_pellet')
        .texture('kubejs:item/resource_gen/silkworm_oil_pellet');

});