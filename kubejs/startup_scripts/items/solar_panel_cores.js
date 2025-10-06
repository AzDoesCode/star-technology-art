
StartupEvents.registry('item', event => {

    ['basic', 'regular', 'intermediate', 'advanced', 'elite', 'ultimate'].forEach(tier => {
        event.create(`${tier}_energy_core`)
            .texture(`kubejs:item/energy_cores/${tier}_energy_core`);
    });

});