
StartupEvents.registry('item', event => {

    event.create('uhv_voltage_coil')
        .texture('kubejs:item/component_part/uhv_voltage_coil');

    event.create('uev_voltage_coil')
        .texture('kubejs:item/component_part/uev_voltage_coil');

    event.create('uiv_voltage_coil')
        .texture('kubejs:item/component_part/uiv_voltage_coil');

    /*event.create('uxv_voltage_coil')
        .texture('kubejs:item/component_part/uxv_voltage_coil')
        .displayName('Ultra Extreme Voltage Coil')
        .tooltip('Supreme+ Coil');
        
    event.create('opv_voltage_coil')
        .texture('kubejs:item/component_part/opv_voltage_coil')
        .displayName('Overpowered Voltage Coil')
        .tooltip('Godly Coil');*/

});