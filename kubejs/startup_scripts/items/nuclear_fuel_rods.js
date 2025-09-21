
StartupEvents.registry('item', event => {

    event.create('thorium_fuel_rod')
        .texture('kubejs:item/nuclear_rods/thorium_fuel_rod');

    event.create('highly_enriched_uranium_fuel_rod')
        .texture('kubejs:item/nuclear_rods/high_enriched_uranium_fuel_rod');

    event.create('low_enriched_uranium_fuel_rod')
        .texture('kubejs:item/nuclear_rods/low_enriched_uranium_fuel_rod');

    event.create('depleted_thorium_fuel_rod')
        .texture('kubejs:item/nuclear_rods/depleted_thorium_fuel_rod');

    event.create('depleted_highly_enriched_uranium_fuel_rod')
        .texture('kubejs:item/nuclear_rods/depleted_high_enriched_uranium_rod');

    event.create('depleted_low_enriched_uranium_fuel_rod')
        .texture('kubejs:item/nuclear_rods/depleted_low_enriched_uranium_rod');

});