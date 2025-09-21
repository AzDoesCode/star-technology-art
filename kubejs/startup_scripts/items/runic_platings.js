
StartupEvents.registry('item', event => {

    event.create('runic_engraved_plating')
        .texture('kubejs:item/gate_items/rune_engraved_plating')
        .rarity('epic');

    event.create('runic_pathway_engraved_plating')
        .texture('kubejs:item/gate_items/runic_pathway_engraved_plating')
        .rarity('rare');

    event.create('runic_stabilization_plating')
        .texture('kubejs:item/gate_items/runic_stable_plating')
        .rarity('rare');

    event.create('runic_energized_plating')
        .texture('kubejs:item/gate_items/runic_energized_plating')
        .rarity('rare');

    event.create('runic_transportation_engraved_plating')
        .texture('kubejs:item/gate_items/runic_transport_plating')
        .rarity('epic');

    event.create('runic_wave_generator')
        .texture('kubejs:item/gate_items/drack-ion_runic_wave_generator')
        .rarity('epic');

    event.create('runic_energized_transportation_plating')
        .texture('kubejs:item/gate_items/runic_transport_energized_plating')
        .rarity('uncommon');

    event.create('runic_energized_pathway_plating')
        .texture('kubejs:item/gate_items/runic_pathway_energized_plating')
        .rarity('uncommon');

});