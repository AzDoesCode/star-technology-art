
StartupEvents.registry('block', event => {

    function naq_casing(id, texture){
        event.create(id)
            .hardness(5)
            .resistance(10)
            .lightLevel(0)
            .soundType('metal')
            .requiresTool(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .textureAll(`kubejs:block/casings/naquadah/${texture}`);
        };

    naq_casing('enriched_naquadah_machine_casing', 'casing');
    naq_casing('enriched_naquadah_pipe_casing', 'pipe_casing');
    naq_casing('enriched_naquadah_gearbox', 'gearbox');

});