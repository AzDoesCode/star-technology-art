ServerEvents.recipes(event => {
    const id = global.id;

    // Pre - Array

    event.recipes.gtceu.extractor(id('dragon_breath'))
        .itemInputs('minecraft:dragon_breath')
        .outputFluids('gtceu:dragon_breath 250')
        .itemOutputs('minecraft:glass_bottle')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.UEV]);
    
    event.remove({id: 'minecraft:popped_chorus_fruit'});
    event.replaceInput({ input: 'minecraft:popped_chorus_fruit' },'minecraft:popped_chorus_fruit','minecraft:chorus_fruit');
    event.recipes.gtceu.assembly_line(id('true_absolute_chorus'))
        .itemInputs('kubejs:void_core', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', 
        '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', 
        '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', 
        '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit')
        .inputFluids('gtceu:dragon_breath 1500')
        .itemOutputs('kubejs:true_absolute_chorus')
        .duration(12000)
        .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('minecraft:popped_chorus_fruit'))
                    .EUt(GTValues.VHA[GTValues.UHV])
                    .CWUt(192)
                )
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.heat_chamber(id('popped_chorus_fruit'))
        .itemInputs('minecraft:chorus_fruit')
        .inputFluids('gtceu:oganesson 10')
        .itemOutputs('minecraft:popped_chorus_fruit')
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembler(id('core_casing'))
        .itemInputs('6x gtceu:double_aurourium_plate', 'gtceu:void_frame', '2x kubejs:true_absolute_chorus', '2x kubejs:runic_wave_generator', 'gtceu:uev_field_generator', 'gtceu:uev_emitter')
        .itemOutputs('kubejs:core_casing')
        .circuit(7)
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.UEV]);
        

    // Draconic Infusion Array
    
    // Machine recipes
    
    event.recipes.gtceu.assembly_line(id('draco_infusion'))
        .itemInputs(
            'gtceu:void_frame','6x gtceu:uev_robot_arm','2x gtceu:uev_field_generator','6x gtceu:dense_nyanium_plate','1x gtceu:uev_electric_pump',
            '64x kubejs:uepic_chip', '48x gtceu:fine_seaborgium_palladium_enriched_estalt_flerovium_alloy_wire','3x gtceu:echo_shard_lens'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 57600','gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 21600','gtceu:dragon_breath 500')
        .itemOutputs('gtceu:draco_infusion')
        .duration(2400)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('minecraft:dragon_head'))
                .EUt(GTValues.VA[GTValues.UEV])
                .CWUt(216)
            )
        .EUt(GTValues.VA[GTValues.UIV]);

    // Infusion

    //--[1]-[2]--
    //[3]-[0]-[4]
    //--[5]-[6]--

    const Infusion = (RecipeID,Output,Fluid,Center,st1,nd2,rd3,th4,th5,th6,duration,eut) => {
        event.recipes.gtceu.draco_infusion(id(RecipeID))
            .itemInputs(Center,st1,nd2,rd3,th4,th5,th6)
            .inputFluids(Fluid)
            .itemOutputs(Output)
            .duration(duration)
            .EUt(eut);
    };

    Infusion('dragonic_eye','kubejs:dragonic_eye','gtceu:dragon_breath 12500','gtceu:quantum_eye','2x kubejs:draconic_scale_cells',
    '2x kubejs:draconic_scale_cells','2x kubejs:draconic_scale_cells','2x kubejs:draconic_stem_cells', '2x kubejs:draconic_stem_cells', 
    'kubejs:helish_star',400,GTValues.VHA[GTValues.UIV]);

    Infusion('draco_stem_cells','4x kubejs:draconic_stem_cells','gtceu:dragon_breath 125','4x gtceu:stem_cells', 'gtceu:naquadria_foil', 
    'gtceu:nether_star_foil','2x minecraft:popped_chorus_fruit','2x minecraft:popped_chorus_fruit','gtceu:nether_star_foil',
    'gtceu:naquadria_foil',320,GTValues.VHA[GTValues.UV]);

    Infusion('draco_brain_matter_cells','4x kubejs:draconic_brain_matter_cells','thermal:ender 10000','4x kubejs:draconic_stem_cells',
    'gtceu:luv_field_generator','16x gtceu:fine_borosilicate_glass_wire','gtceu:wetware_circuit_board','gtceu:wetware_circuit_board',
    '16x gtceu:fine_borosilicate_glass_wire','gtceu:luv_field_generator',480,GTValues.VHA[GTValues.UHV]);

    Infusion('draco_scale_cells','8x kubejs:draconic_scale_cells','gtceu:neutronium 1000','8x kubejs:draconic_stem_cells','gtceu:dense_naquadah_alloy_plate',
    'gtceu:dense_tungsten_steel_plate','gtceu:dense_ancient_netherite_plate','gtceu:dense_darmstadtium_plate','gtceu:dense_obsidian_plate',
    'gtceu:dense_magnetic_steel_plate',320,GTValues.VHA[GTValues.UHV]);

    Infusion('draco_boule','kubejs:draco_boule','gtceu:pure_dragon_breath 8000','gtceu:neutronium_boule', '2x kubejs:draconic_stem_cells', 
    '1x gtceu:neutronium_block', '32x gtceu:silicon_block', '32x gtceu:silicon_block', '1x gtceu:neutronium_block', '2x kubejs:draconic_stem_cells',
    6000,GTValues.VHA[GTValues.UHV]);

    Infusion('draco_ware_casing','2x kubejs:draco_ware_casing','gtceu:dragon_breath 4000','2x gtceu:high_power_casing', 'gtceu:uev_sensor', 
    '1x #gtceu:circuits/uev', '2x kubejs:draconic_brain_matter_cells','2x kubejs:draconic_brain_matter_cells', '1x #gtceu:circuits/uev', 
    'gtceu:uev_sensor',800,GTValues.VHA[GTValues.UEV]);

    Infusion('draco_resilient_fusion_glass','2x kubejs:draco_resilient_fusion_glass','gtceu:dragon_breath 2000','2x gtceu:fusion_glass', 
    '2x kubejs:draconic_scale_cells', '4x gtceu:neutron_reflector', 'gtceu:uhv_field_generator', 'gtceu:uhv_field_generator', 
    '4x gtceu:neutron_reflector', '2x kubejs:draconic_scale_cells',400,GTValues.VHA[GTValues.UEV]);

    Infusion('draco_assembly_grating','2x kubejs:draco_assembly_grating','gtceu:dragon_breath 3000','2x gtceu:assembly_line_grating', 
    '8x gtceu:void_foil', '8x gtceu:void_foil', '1x gtceu:uev_robot_arm', '1x gtceu:uev_robot_arm', '8x gtceu:void_foil', '8x gtceu:void_foil',
    600, GTValues.VHA[GTValues.UEV]);

    Infusion('dragon_egg','minecraft:dragon_egg','gtceu:draconyallium 1000','3x kubejs:draconic_stem_cells','5x kubejs:draconic_scale_cells',
    '5x kubejs:draconic_scale_cells','5x kubejs:draconic_scale_cells','5x kubejs:draconic_scale_cells','5x kubejs:draconic_scale_cells',
    '5x kubejs:draconic_scale_cells',900,GTValues.VHA[GTValues.UIV]);

    Infusion('abyssal_inductor','kubejs:abyssal_inductor','gtceu:dragon_breath 250','gtceu:blacklight','2x gtceu:draco_abyssal_screw',
    '8x gtceu:polonium_bismide_single_cable','gtceu:lepton_resonant_thallium_antimonide_spring','2x gtceu:draco_abyssal_screw',
    'gtceu:uiv_emitter','gtceu:lepton_resonant_thallium_antimonide_spring',300,GTValues.VHA[GTValues.UIV]);

    Infusion('abyssal_inductor_hull','2x kubejs:abyssal_inductor_hull','gtceu:abyssal_alloy 1000','2x gtceu:sterilizing_filter_casing','kubejs:abyssal_inductor',
    '#gtceu:circuits/uiv','kubejs:voidic_reinforced_mesh','kubejs:abyssal_inductor','kubejs:uiv_microfluidic_flow_valve','kubejs:voidic_reinforced_mesh', 150,
    GTValues.VA[GTValues.UXV]);

    });