
StartupEvents.registry('item', event => {

    ['nebular', 'zenith', 'hyperion', 'spectral', 'astral'].forEach(singularity => {
        event.create(`singularity_${singularity}`)
            .tooltip(Text.translate(`item.kubejs.singularity_${singularity}.tooltip.1`))
            .tooltip(Text.translate(`item.kubejs.singularity_${singularity}.tooltip.2`))
            .tooltip(Text.translate(`item.kubejs.singularity_${singularity}.tooltip.3`))
            .texture(`kubejs:item/singularities/${singularity}`)
            .rarity('epic');
    });

    // event.create('singularity_base')
    //     .displayName('Singularity Base')
    //     .texture('kubejs:item/singularities/base');


});