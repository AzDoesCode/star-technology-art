ServerEvents.recipes(event => {
    
    [
        'ae2:inscriber', 'ae2:vibration_chamber', 'ae2:silicon', 'ae2:charger', 'expatternprovider:ex_inscriber', 'expatternprovider:ex_charger', 'expatternprovider:crystal_fixer',
        'ae2:crystal_resonance_generator', 'ae2:vibration_chamber', 'expatternprovider:circuit_cutter', /megacells:sky_steel.*/, 'ae2:spatial_anchor','expatternprovider:silicon_block'
    ].forEach(element => {
        event.remove({ output: element});
    });

    [
        'ae2:transform/damaged_budding_quartz', 'ae2:transform/chipped_budding_quartz', 'ae2:transform/flawed_budding_quartz', 'ae2:transform/fluix_crystals',
        'ae2:transform/fluix_crystal', 'ae2:transform/certus_quartz_crystals', 'ae2:network/cables/covered_fluix', 'ae2:network/parts/quartz_fiber_part',
        'ae2:network/cables/glass_fluix', 'ae2:network/parts/cable_anchor', /expatternprovider:cutter.*/, 'create:mixing/compat/ae2/fluix_crystal'
    ].forEach(element => {
        event.remove({ id: element});
    });

    [
        'ae2:inscriber', 'ae2:charger'
    ].forEach(element => {
        event.remove({ type: element});
    });

});