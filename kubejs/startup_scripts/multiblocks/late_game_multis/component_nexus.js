GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('component_nexus')
        .category('highly_advanced')
        .setEUIO('in')
        .setMaxIOSize(15, 1, 4, 0)
        .setSound(GTSoundEntries.ASSEMBLER)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setMaxTooltips(5);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('component_nexus', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('component_nexus')
        .recipeModifier(GTRecipeModifiers.OC_NON_PERFECT_SUBTICK)
        .appearanceBlock(() => Block.getBlock('gtceu:large_scale_assembler_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('    BBBBB    ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ') 
            .aisle(' BBBBBBBBBBB ', '             ', '             ', '             ', '             ', '     AAA     ', '    AACAA    ', '    ACCCA    ', '    AACAA    ', '     AAA     ', '             ', '             ', '             ', '             ') 
            .aisle(' BDBBBBBBBDB ', '  D       D  ', '  DDAAAAADD  ', '  D   A   D  ', '  D   A   D  ', '  A   E   A  ', '  A   D   A  ', '  AAEDFDEAA  ', '  A   D   A  ', '  D   E   D  ', '   D  A  D   ', '   D  A  D   ', '    DAAAD    ', '             ') 
            .aisle(' BBB     BBB ', '             ', '  D   A   D  ', '      E      ', '      E      ', '      E      ', '      D      ', '  AEEDFDEEA  ', '      D      ', '      E      ', '  D   E   D  ', '  D   E   D  ', '      A      ', '             ') 
            .aisle('BBB       BBB', '     AAA     ', '  A   E   A  ', '      E      ', '    GGDGG    ', '    GGDGG    ', ' A  GGHGG  A ', ' AEEDHFHDEEA ', ' A  GGHGG  A ', '    GGDGG    ', '    GGDGG    ', '      E      ', '  D   E   D  ', '     AAA     ') 
            .aisle('BBB       BBB', '    AACAA    ', '  A   D   A  ', '      D      ', '    GGHGG    ', ' A  GIHIG  A ', ' A  GIHIG  A ', ' CDDHHFHHDDC ', ' A  GIHIG  A ', ' A  GIHIG  A ', '    GGHGG    ', '      D      ', '  A   D   A  ', '    AACAA    ') 
            .aisle('BBB       BBB', '    ACCCA    ', '  AAEDFDEAA  ', '  AEEDFDEEA  ', '  AEDHFHDEA  ', ' AEEDHFHDEEA ', ' CDDHHFHHDDC ', ' CFFFFFFFFFC ', ' CDDHHFHHDDC ', ' AEEDHFHDEEA ', '  AEDHFHDEA  ', '  AEEDFDEEA  ', '  AAEDFDEAA  ', '    ACCCA    ') 
            .aisle('BBB       BBB', '    AACAA    ', '  A   D   A  ', '      D      ', '    GGHGG    ', ' A  GIHIG  A ', ' A  GIHIG  A ', ' CDDHHFHHDDC ', ' A  GIHIG  A ', ' A  GIHIG  A ', '    GGHGG    ', '      D      ', '  A   D   A  ', '    AACAA    ') 
            .aisle('BBB       BBB', '     AAA     ', '  A   E   A  ', '      E      ', '    GGDGG    ', '    GGDGG    ', ' A  GGHGG  A ', ' AEEDHFHDEEA ', ' A  GGHGG  A ', '    GGDGG    ', '    GGDGG    ', '      E      ', '  D   E   D  ', '     AAA     ') 
            .aisle(' BBB     BBB ', '             ', '  D   A   D  ', '      E      ', '      E      ', '      E      ', '      D      ', '  AEEDFDEEA  ', '      D      ', '      E      ', '  D   E   D  ', '  D   E   D  ', '      A      ', '             ') 
            .aisle(' BDBBBBBBBDB ', '  D       D  ', '  DDAAAAADD  ', '  D   A   D  ', '  D   A   D  ', '  A   E   A  ', '  A   D   A  ', '  AAEDFDEAA  ', '  A   D   A  ', '  D   E   D  ', '   D  A  D   ', '   D  A  D   ', '    DAAAD    ', '             ') 
            .aisle(' BBBBBBBBBBB ', '             ', '             ', '             ', '             ', '     AAA     ', '    AACAA    ', '    AC@CA    ', '    AACAA    ', '     AAA     ', '             ', '             ', '             ', '             ') 
            .aisle('    BBBBB    ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ') 
            .where('A', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
            .where(' ', Predicates.any())
            .where('B', Predicates.blocks('gtceu:large_scale_assembler_casing'))
            .where('C', Predicates.blocks('gtceu:large_scale_assembler_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.blocks('gtceu:uhv_stabilization_module').setExactLimit(1)))
            .where('D', Predicates.blocks('gtceu:hsse_frame'))
            .where('E', Predicates.blocks('gtceu:sturdy_machine_casing'))
            .where('F', Predicates.blocks('gtceu:assembly_line_unit'))
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('H', Predicates.blocks('gtceu:assembly_line_casing'))
            .where('I', Predicates.blocks('gtceu:fusion_coil'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer('gtceu:block/casings/gcym/large_scale_assembling_casing',
        'gtceu:block/machines/assembler', false);

});
