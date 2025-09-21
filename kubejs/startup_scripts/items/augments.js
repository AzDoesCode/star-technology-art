
StartupEvents.registry('item', event => {

    /*
    definitions:
    arc = auxiliary reaction
    mci = multi-cycle injector
    fls = fluid storage
    rfc = redstone flux coil
    rfs = redstone flux storage
    rft = redstone flux transfer
    */

    //all items => upgrade kits
    const upgrade_kit = (tier) => {
        event.create(`${tier}_upgraade_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_upgraade_kit.tooltip`))
            .texture(`kubejs:item/kits/upgrade_kits/${tier}_kit`);
    };

    //dynamo's => auxiliary reaction kits
    const arc_kit = (tier) => {
        event.create(`${tier}_arc_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_arc_kit.tooltip`))
            .texture(`kubejs:item/kits/arc_kits/${tier}_arc_kit`);
    };

    //dynamo's => multi-cycle injectors kits
    const mci_kit = (tier) => {
        event.create(`${tier}_mci_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_mci_kit.tooltip`))
            .texture(`kubejs:item/kits/mci_kits/${tier}_mci_kit`);
    };

    ['lv', 'mv', 'hv', 'ev'].forEach(tier => {
        upgrade_kit(tier);
        arc_kit(tier);
        mci_kit(tier);
    });

    //fluid cells => storage upgrade kits
    const fls_kit = (tier) => {
        event.create(`${tier}_fls_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_fls_kit.tooltip`))
            .texture(`kubejs:item/kits/fls_kits/${tier}_fls_kit`);
    };

    //rf cells => general upgrade kits
    const rfc_kit = (tier) => {
        event.create(`${tier}_rfc_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_rfc_kit.tooltip`))
            .texture(`kubejs:item/kits/rfc_kits/${tier}_rfc_kit`);
    };

    //rf cells => storage upgrade kits
    const rfs_kit = (tier) => {
        event.create(`${tier}_rfs_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_rfs_kit.tooltip`))
            .texture(`kubejs:item/kits/rfs_kits/${tier}_rfs_kit`);
    };

    //rf cells => transfer upgrade kits
    const rft_kit = (tier) => {
        event.create(`${tier}_rft_kit`)
            .tooltip(Text.translate(`item.kubejs.${tier}_rft_kit.tooltip`))
            .texture(`kubejs:item/kits/rft_kits/${tier}_rft_kit`);
    };

    ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv'].forEach(tier => {
        fls_kit(tier);
        rfc_kit(tier);
        rfs_kit(tier);
        rft_kit(tier);
    });

});