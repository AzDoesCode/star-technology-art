GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    
    event.create('composting_factory')
        .category('resource_production')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('composting_factory', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('composting_factory')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(() => Block.getBlock('gtceu:secure_maceration_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' ABA ', ' CDC ', ' CDC ', ' CDC ', ' CBC ') 
            .aisle('AABAA', 'CE EC', 'CE EC', 'CE EC', 'CCBCC') 
            .aisle('BBCBB', 'D F D', 'D F D', 'D F D', 'BBGBB') 
            .aisle('AABAA', 'CE EC', 'CE EC', 'CE EC', 'CCBCC') 
            .aisle(' A@A ', ' CDC ', ' CDC ', ' CDC ', ' CBC ') 
            .where(' ', Predicates.any())
            .where('A', Predicates.blocks('gtceu:tungstensteel_firebox_casing'))
            .where('B', Predicates.blocks('gtceu:secure_maceration_casing'))
            .where('C', Predicates.blocks('gtceu:robust_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
				.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('D', Predicates.blocks('thermal:enderium_glass'))
            .where('E', Predicates.blocks('gtceu:tungstensteel_gearbox'))
            .where('F', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('G', Predicates.blocks('gtceu:extreme_engine_intake_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer('gtceu:block/casings/gcym/secure_maceration_casing',
        'gtceu:block/machines/advanced_composter', false);
        
});