
StartupEvents.registry('item', event => {

    const partTiers = (tier) => {
        
        event.create(`${tier}_computational_matrix`)
            .texture(`kubejs:item/component_part/${tier}_computational_matrix`);
            
        event.create(`${tier}_transmission_assembly`)
            .texture(`kubejs:item/component_part/${tier}_transmission_assembly`);
            
        event.create(`${tier}_precision_drive_mechanism`)
            .texture(`kubejs:item/component_part/${tier}_precision_drive_mechanism`);
            
        event.create(`${tier}_microfluidic_flow_valve`)
            .texture(`kubejs:item/component_part/${tier}_microfluidic_flow_valve`);

        event.create(`${tier}_super_magnetic_core`)
            .texture(`kubejs:item/component_part/${tier}_super_magnetic_core`);
            
        event.create(`${tier}_catalyst_core`)
            .texture(`kubejs:item/component_part/${tier}_catalyst_core`);
            
        event.create(`${tier}_high_strength_panel`)
            .texture(`kubejs:item/component_part/${tier}_high_strength_panel`);
            
        event.create(`${tier}_micropower_router`)
            .texture(`kubejs:item/component_part/${tier}_micropower_router`);
    
    }
        
    partTiers('ruined');
    partTiers('uhv');
    partTiers('uev');
    partTiers('uiv');
    // partTiers('uxv','e','UXV');
    // partTiers('opv','9§l','OpV');

});
