GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('cyclonic_crystalline_sieve')
        .category('cyclonic_crystalline_sieve')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
        .setSound(GTSoundEntries.MACERATOR);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('cyclonic_crystalline_sieve', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('cyclonic_crystalline_sieve')
        .tooltips("§a§lAkreyrium §a§lProcessing")
        .tooltips("§7A specialized machine designed to sieve fluids which have been permeated by the harsh climate of Abydos. By passing the material through a fine mesh under controlled cyclonic forces repeatedly, it efficiently purifies the material into a usable form while pulling out fine particles of crystalised material.")
        .tooltips("§8-----------------------------------")
        .tooltips("§6Crystal Sieving:")
        .tooltips("§7The seperated crystal should not be discarded, Many of the useful properties of akreyrium formed from certain minerals that were extracted should be recombined after further processing has occured.")
        .tooltips("§8-----------------------------------")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('   AAA   ', '   CCC   ', '   AAA   ', '    A    ', '         ', '         ', '         ', '         ')
            .aisle('  AADAA  ', '  CEEEC  ', '  A D A  ', '    F    ', '    F    ', '    F    ', '    F    ', '  FFFFF  ')
            .aisle(' AAGDGAA ', ' CE D EC ', ' AA D AA ', '    D    ', '         ', '    F    ', '         ', ' F     F ')
            .aisle('AAGGGGGAA', 'CE     EC', 'A       A', '         ', '         ', '    F    ', '         ', ' F     F ')
            .aisle('ADDGGGDDA', 'CED   DEC', 'ADD   DDA', 'AFD   DFA', ' F     F ', ' FFFFFFF ', ' F     F ', ' F     F ')
            .aisle('AAGGGGGAA', 'CE     EC', 'A       A', '         ', '         ', '    F    ', '         ', ' F     F ')
            .aisle(' AAGDGAA ', ' CE D EC ', ' AA D AA ', '    D    ', '         ', '    F    ', '         ', ' F     F ')
            .aisle('  AADAA  ', '  CEEEC  ', '  A D A  ', '    F    ', '    F    ', '    F    ', '    F    ', '  FFFFF  ')
            .aisle('   AAA   ', '   CHC   ', '   AAA   ', '    A    ', '         ', '         ', '         ', '         ')
            .where('H', Predicates.controller(Predicates.blocks(definition.get())))
            .where(' ', Predicates.any())
            .where('C', Predicates.blocks('gtceu:fusion_glass')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('E', Predicates.blocks('gtceu:high_power_casing'))
            .where('D', Predicates.blocks('gtceu:computer_casing'))
            .where('A', Predicates.blocks('gtceu:robust_machine_casing'))
            .where('F', Predicates.blocks('gtceu:hastelloy_x_frame'))
            .where('G', Predicates.blocks('gtceu:crushing_wheels'))
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/network_switch', false);

});
