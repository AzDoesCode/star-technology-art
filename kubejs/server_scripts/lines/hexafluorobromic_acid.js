ServerEvents.recipes(event => {

const CRtype = [event.recipes.gtceu.large_chemical_reactor, event.recipes.gtceu.chemical_reactor]
CRtype.forEach(CR=>{

    CR('bromine_pentafluoride')
        .inputFluids('gtceu:bromine 2000', 'gtceu:fluorine 10000')
        .notConsumable('1x gtceu:nickel_fluoride_dust')
        .outputFluids('gtceu:bromine_pentafluoride 2000')

    CR('caesium_hexafluorobromine')
        .inputFluids('gtceu:bromine_pentafluoride 1000')
        .itemInputs('1x gtceu:caesium_fluoride_dust')
        .outputFluids('gtceu:caesium_hexafluorobromine 1000')

    CR('hexafluorobromic_acid')
        .inputFluids('gtceu:caesium_hexafluorobromine 1000', 'gtceu:hydrofluoric_acid 1000')
        .outputFluids('gtceu:hexafluorobromic_acid 1000')
        .itemOutputs('1x gtceu:caesium_fluoride_dust')

    CR('nickel_fluoride')
        .itemInputs('1x gtceu:nickel_dust')
        .inputFluids('gtceu:fluorine 2000')
        .itemOutputs('1x gtceu:nickel_fluoride_dust')

    CR('caesium_fluoride')
        .itemInputs('1x gtceu:caesium_dust')
        .inputFluids('gtceu:fluorine 1000')
        .itemOutputs('1x gtceu:caesium_fluoride_dust')

})});