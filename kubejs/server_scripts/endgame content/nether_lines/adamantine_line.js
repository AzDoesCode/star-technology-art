
ServerEvents.recipes(event => {

    event.recipes.gtceu.molten_destabilizing('molten_adamantamite_mixture')
        .inputFluids('gtceu:molten_adamantamite_mixture 300000')
        .outputFluids('gtceu:adamantamite 200000')
        .outputFluids('gtceu:highly_unstable_nether_magma 25000')
        .outputFluids('gtceu:molten_ore_mixture 75000')
        .itemOutputs('32x gtceu:netherrack_dust')
        .duration(3600)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.electrolyzer('adamantamite_dust')
        .inputFluids('gtceu:adamantamite 1000')
        .outputFluids('gtceu:mystical_nether_magma 250')
        .itemOutputs('gtceu:adamantamite_dust','gtceu:small_adamantamite_dust')

    event.recipes.gtceu.heat_chamber('adamantamite_metaltide')
        .itemInputs('gtceu:adamantamite_dust')
        .itemInputs('6x gtceu:carbon_dust')
        .itemOutputs('gtceu:adamantamite_metaltide_dust')
        .outputFluids('gtceu:carbon_dioxide 12000')

    event.recipes.gtceu.large_chemical_reactor('adamantamite_magnide')
        .itemInputs('gtceu:adamantamite_metaltide_dust')
        .itemInputs('2x gtceu:sodium_dust')
        .itemOutputs('gtceu:adamantamite_magnide_dust')
        .itemOutputs('8x gtceu:sodium_azide_dust')

    event.recipes.gtceu.large_chemical_reactor('adamantamite_titite')
        .itemInputs('gtceu:adamantamite_magnide_dust')
        .inputFluids('gtceu:hydrochloric_acid 4000')
        .itemOutputs('gtceu:adamantamite_titite_dust')
        .outputFluids('gtceu:hydrogen 4000')
        .outputFluids('gtceu:iron_ii_chloride 2000')

    event.recipes.gtceu.electric_blast_furnace('adamantine_5')
        .itemInputs('gtceu:adamantamite_titite_dust')
        .itemInputs('8x gtceu:magnesium_dust')
        .inputFluids('gtceu:oxygen 8000')
        .itemOutputs('4x gtceu:hot_titanium_ingot')
        .itemOutputs('8x gtceu:magnesia_dust')
        .itemOutputs('5x gtceu:adamantine_5_dust')

    event.recipes.gtceu.large_chemical_reactor('adamantine_hydroxide')
        .itemInputs('1x gtceu:adamantine_5_dust')
        .inputFluids('gtceu:nitric_acid 3000')
        .itemOutputs('1x gtceu:adamantine_hydroxide_dust')
        .outputFluids('gtceu:nitrogen_dioxide 3000')

    event.recipes.gtceu.chemical_plant('adamantine')
        .itemInputs('gtceu:adamantine_hydroxide_dust')
        .itemInputs('3x gtceu:sodium_dust')
        .itemOutputs('gtceu:adamantine_dust')
        .itemOutputs('3x gtceu:sodium_hydroxide_dust')

    event.replaceInput({id: 'gtceu:electric_blast_furnace/blast_adamantine_gas'},
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );

});