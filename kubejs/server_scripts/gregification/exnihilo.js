
ServerEvents.recipes(event => {

    event.recipes.gtceu.forge_hammer('cobble_to_sand')
        .itemInputs('minecraft:cobblestone')
        .itemOutputs('minecraft:gravel')
        .duration(10)
        .EUt(16);

    event.recipes.gtceu.forge_hammer('gravel_to_sand')
        .itemInputs('minecraft:gravel')
        .itemOutputs('minecraft:sand')
        .duration(10)
        .EUt(16);

    event.recipes.gtceu.forge_hammer('sand_to_dust')
        .itemInputs('minecraft:sand')
        .itemOutputs('exnihilosequentia:dust')
        .duration(10)
        .EUt(16);

    event.remove({id: 'gtceu:forge_hammer/cobblestone_to_gravel', input: 'minecraft:blackstone'});
    event.recipes.gtceu.forge_hammer('crushed_blackstone')
        .itemInputs('minecraft:blackstone')
        .itemOutputs('exnihilosequentia:crushed_blackstone')
        .duration(10)
        .EUt(16);

    event.recipes.create.crushing('exnihilosequentia:crushed_blackstone', 'minecraft:blackstone');

});