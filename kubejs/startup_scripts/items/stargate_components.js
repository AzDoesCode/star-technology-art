
StartupEvents.registry('item', event => {

    event.create('crude_stargate_rod')
        .rarity('rare');

    event.create('stargate_rod')
        .texture('kubejs:item/gate_items/stargate_rod')
        .rarity('epic');

    event.create('untreated_infernal_stargate_rod')
        .texture('kubejs:item/gate_items/untreated_infernal_stargate_rod');

    event.create('infernal_stargate_rod')
        .texture('kubejs:item/gate_items/infernal_stargate_rod');

    event.create('untreated_abyssal_stargate_rod')
        .texture('kubejs:item/gate_items/untreated_abyssal_stargate_rod');

    event.create('abyssal_stargate_rod')
        .texture('kubejs:item/gate_items/abyssal_stargate_rod');

    event.create('computational_super_matrix')
        .texture('kubejs:item/gate_items/computation-super-matrix')
        .rarity('rare');

    event.create('classic_stargate_computer_core')
        .rarity('uncommon')
        .texture('kubejs:item/gate_items/classic_computational_core');

    event.create('classic_chevron_disk')
        .rarity('rare')
        .texture('kubejs:item/gate_items/classic_chevron_disk');

    event.create('ancient_stargate_computer_core')
        .rarity('uncommon')
        .texture('kubejs:item/gate_items/ancient_stargate_computer_core');

    event.create('ancient_chevron_disk')
        .rarity('rare')
        .texture('kubejs:item/gate_items/ancient_chevron_disk');

    event.create('classic_chevron_assembly')
        .rarity('rare')
        .texture('kubejs:item/gate_items/classic_chevron_assembly');
    
    event.create('empty_coordinate_core')
        .texture('kubejs:item/gate_items/empty_coordinate_core');

    event.create('draconic_coordinate_core')
        .texture('kubejs:item/gate_items/draconic_core');

    event.create('inferno_fragment')
        .texture('kubejs:item/gate_items/inferno_fragment');

    event.create('abyss_fragment')
        .texture('kubejs:item/gate_items/abyss_fragment');

    event.create('hell_core')
        .texture('kubejs:item/gate_items/hell_core');

    event.create('void_core')
        .texture('kubejs:item/gate_items/void_core');

    ['1', '2', '3', '4', '5', '6', 'complete'].forEach(piece => {
        event.create(`runic_tablet_${piece}`)
            .rarity('uncommon')
            .texture(`kubejs:item/gate_items/rune_tablet_${piece}`);
    });

});