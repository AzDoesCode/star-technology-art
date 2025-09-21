ServerEvents.recipes(event => {
    const id = global.id;

    // Controller

    event.recipes.gtceu.assembly_line(id('cryostate_quantum_chiller'))
        .itemInputs(
            'gtceu:isovol_frame', '12x #gtceu:circuits/uev', '32x kubejs:uhv_high_strength_panel', '8x gtceu:neutronium_huge_fluid_pipe', '32x gtceu:uhv_field_generator',
            '24x gtceu:uhv_electric_pump', '4x gtceu:isovol_rotor', '32x gtceu:calamatium_screw'
        )
        .inputFluids(
            'gtceu:liquid_helium 1000000',
            'gtceu:utopian_akreyrium 60000'
        )
        .itemOutputs('gtceu:cryostate_quantum_chiller')
        .duration(1800)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:mega_vacuum_freezer'))
                .EUt(GTValues.VA[GTValues.UHV])
                .CWUt(192)
            )
        .EUt(GTValues.VA[GTValues.UEV]);

    //Quantum Cooling
    event.recipes.gtceu.quantum_cooling(id('bec_og'))
        .inputFluids('gtceu:oganesson 500')
        .inputFluids('gtceu:superstate_helium_3 7500')
        .outputFluids('gtceu:bec_og 500')
        .outputFluids('gtceu:helium_3 5000')
        .duration(320)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.quantum_cooling(id('superstate_helium_3'))
        .inputFluids('gtceu:helium_3 5000')
        .inputFluids('gtceu:liquid_helium 5000')
        .outputFluids('gtceu:superstate_helium_3 5000')
        .outputFluids('gtceu:helium 2500')
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM]);
    
    // Bulk Recipes
    event.forEachRecipe({type:'gtceu:vacuum_freezer'}, VacParse => {
        let BulkVac = JSON.parse(VacParse.json);
            let Duration = BulkVac.duration;
            let EUt = BulkVac.tickInputs.eu[0].content;
            let InItem = false;
            let InFluid1 = false;
            let InFluid2 = false;
            let OutFluid = false;
            let OutItem = false;
            if (BulkVac.inputs.item?.length == 1) {InItem = BulkVac.inputs.item[0].content;}
            if (BulkVac.inputs.fluid?.length >= 1) {InFluid1 = BulkVac.inputs.fluid[0].content;}
            if (BulkVac.inputs.fluid?.length == 2) {InFluid2 = BulkVac.inputs.fluid[1].content;}
            if (BulkVac.outputs.fluid?.length == 1) {OutFluid = BulkVac.outputs.fluid[0].content;}
            if (BulkVac.outputs.item?.length == 1) {OutItem = BulkVac.outputs.item[0].content;}

    // Fluid => Cooled Fluid
    if (InItem == false) {
        let adjFluidIn = (InFluid1.value[0].tag == `forge:water`) ? Fluid.of(`minecraft:water`, InFluid1.amount * 256) : Fluid.of(`gtceu:${InFluid1.value[0].tag.slice(6)}`, InFluid1.amount * 256);  
    event.recipes.gtceu.bulk_vacuum_cooling(id(`${OutFluid.value[0].fluid.slice(6)}`))
        .inputFluids(adjFluidIn)
        .outputFluids(Fluid.of(OutFluid.value[0].fluid, OutFluid.amount * 256))
        .duration(Duration * 192)
        .EUt(EUt);
    }
    if (InItem !== false) {
    // Cooling Hot Ingots
    if (InItem.ingredient.item !== 'gtceu:ingot_casting_mold') {
        // Cooled Without Fluid
        if (InFluid1 == false) {
    event.recipes.gtceu.bulk_vacuum_cooling(id(`cool_hot_${InItem.ingredient.tag.slice(17)}_ingot`))
        .itemInputs(`256x gtceu:hot_${InItem.ingredient.tag.slice(17)}_ingot`)
        .itemOutputs(`256x ${OutItem.ingredient.item}`)
        .duration(Duration * 192)
        .EUt(EUt);
        } 
        // Cooled With Fluid
        if (InFluid1 !== false) {
    event.recipes.gtceu.bulk_vacuum_cooling(id(`cool_hot_${InItem.ingredient.tag.slice(17)}_ingot`))
        .itemInputs(`256x gtceu:hot_${InItem.ingredient.tag.slice(17)}_ingot`)
        .inputFluids(Fluid.of(`gtceu:${InFluid1.value[0].tag.slice(6)}`, InFluid1.amount * 256))
        .itemOutputs(`256x ${OutItem.ingredient.item}`)
        .outputFluids(Fluid.of(OutFluid.value[0].fluid, OutFluid.amount * 256))
        .duration(Duration * 192)
        .EUt(EUt);   
        }
    }
    // Cooling Molten
    if (InItem.ingredient.item == 'gtceu:ingot_casting_mold') {
        // Cooled Without Fluid
        if (InFluid2 == false) {
    event.recipes.gtceu.bulk_vacuum_cooling(id(`${InFluid1.value[0].tag.slice(6)}`))
        .notConsumable('gtceu:ingot_casting_mold')
        .inputFluids(Fluid.of(`gtceu:${InFluid1.value[0].tag.slice(6)}`, InFluid1.amount * 256))
        .itemOutputs(`256x ${OutItem.ingredient.item}`)
        .duration(Duration * 192)
        .EUt(EUt);
        } 
        // Cooled With Fluid
        if (InFluid2 !== false) {
    event.recipes.gtceu.bulk_vacuum_cooling(id(`${InFluid1.value[0].tag.slice(6)}`))
        .notConsumable('gtceu:ingot_casting_mold')
        .inputFluids(Fluid.of(`gtceu:${InFluid1.value[0].tag.slice(6)}`, InFluid1.amount * 256))
        .inputFluids(Fluid.of(`gtceu:${InFluid2.value[0].tag.slice(6)}`, InFluid2.amount * 256))
        .itemOutputs(`256x ${OutItem.ingredient.item}`)
        .outputFluids(Fluid.of(OutFluid.value[0].fluid, OutFluid.amount * 256))
        .duration(Duration * 192)
        .EUt(EUt);
        }
    }
    }
        
    }); 
        
    // >15000K Cooling
    const Material15000PlusAlloy = (type,dur) => {    
        
        event.remove({id: `gtceu:vacuum_freezer/${type}`});
        event.recipes.gtceu.vacuum_freezer(id(`${type}_from_molten`))
            .inputFluids(`gtceu:molten_${type} 144`)
            .inputFluids('gtceu:superstate_helium_3 500')
            .notConsumable('gtceu:ingot_casting_mold')
            .itemOutputs(`gtceu:${type}_ingot`)
            .outputFluids('gtceu:helium_3 250')
            .duration(dur * 20 )
            .EUt(GTValues.VA[GTValues.UV]);    
        event.recipes.gtceu.bulk_vacuum_cooling(id(`${type}_from_molten`))
            .inputFluids(`gtceu:molten_${type} 36864`)
            .inputFluids('gtceu:superstate_helium_3 128000')
            .notConsumable('gtceu:ingot_casting_mold')
            .itemOutputs(`256x gtceu:${type}_ingot`)
            .outputFluids('gtceu:helium_3 64000')
            .duration(dur * 20 * 192)
            .EUt(GTValues.VA[GTValues.UV]);    
        };

    Material15000PlusAlloy('mythrolic_alloy', 36.75);
    Material15000PlusAlloy('magmada_alloy', 49.05);
    Material15000PlusAlloy('starium_alloy', 24.75);
    Material15000PlusAlloy('seaborgium_palladium_enriched_estalt_flerovium_alloy', 31.2);
    Material15000PlusAlloy('nyanium', 24.9);
    Material15000PlusAlloy('rhenium_super_composite_alloy', 18.6);
    Material15000PlusAlloy('abyssal_alloy', 53.4);
    Material15000PlusAlloy('chaotixic_alloy', 30.75);
    Material15000PlusAlloy('ohmderblux_alloy', 25.35);
    Material15000PlusAlloy('draconyallium', 14.55);
    Material15000PlusAlloy('draco_abyssal', 35.85);
    Material15000PlusAlloy('expetidalloy_d_17', 12.30);

});