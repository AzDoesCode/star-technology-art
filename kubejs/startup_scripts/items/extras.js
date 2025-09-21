StartupEvents.registry('item', event => {

    event.create('naquadic_netherite_fibers')
        .rarity('rare')
        .tooltip('The strongest armor material');

    event.create('coin')
        .rarity('epic')
        .texture('kubejs:item/coin');

    event.create('multiblock_upgrade_kit')
        .texture('kubejs:item/kits/upgrade_kit')

    event.create('draconic_stem_cells')
        .texture('kubejs:item/draconic/draconic_stem_cells');

    event.create('secreting_draconic_cells')
        .texture('kubejs:item/draconic/secreting_draconic_cells');

    event.create('draconic_brain_matter_cells')
        .texture('kubejs:item/draconic/draconic_brain_matter_cells');

    event.create('draconic_scale_cells')
        .texture('kubejs:item/draconic/draconic_scale_cells');

    event.create('draconic_embryo')
        .texture('kubejs:item/draconic/draconic_embryo');

    event.create('dragon_egg_shard')
        .texture('kubejs:item/draconic/dragon_egg_shard');

    event.create('draco_peptide_amino_chain')
        .texture('kubejs:item/draconic/draco_peptide_amino_chain');

    event.create('abyssal_inductor')
        .texture('kubejs:item/abyssal_inductor');

    // Gravi star continuations
    event.create('helish_star')
        .texture('kubejs:item/helish_star');

    event.create('dragonic_eye')
        .texture('kubejs:item/dragon_eye');


});