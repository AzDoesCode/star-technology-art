StartupEvents.registry('mob_effect', event => {
    // Abydos
    event.create('sand_erosion')
        .color(0x00FF00)
        .category('harmful')

    // Nether
    event.create('radiation_poisoning')
        .color(0x00FF00)
        .category('harmful')

    event.create('toxic_atmosphere')
        .color(0x8B4513)
        .category('harmful')

    // End
    event.create('abyssal_drain')
        .color(0x8B4513)
        .category('harmful')
});