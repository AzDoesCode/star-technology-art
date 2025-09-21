ItemEvents.tooltip(event => {

    event.addAdvanced('gtceu:large_chemical_reactor', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.perfect_oc_subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:implosion_compressor', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:distillation_tower', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:vacuum_freezer', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:assembly_line', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:multi_smelter', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick_coil_parallel.tooltip.1'));
    });

    event.addAdvanced(/gtceu:.*_macerator/, (item, advanced, text) => {
        text.add(1, Text.translate('block.gtceu.macerators.tooltip.1'));
    });

    event.addAdvanced('gtceu:ulv_fluid_input', (item, advanced, text) => {
        text.add(1, Text.translate('block.gtceu.ulv_fluid_input.tooltip.1'))
        text.add(2, Text.translate('block.gtceu.ulv_fluid_input.tooltip.2'));
    });

});