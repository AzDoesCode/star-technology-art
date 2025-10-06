StartupEvents.registry('item', event => {
	event.create('flint_shard')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/flint_shard`);

	event.create('plant_fibers')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/plant_fibers`);

	event.create('packed_mud_ball')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/packed_mud_ball`);

	event.create('mud_brick')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/packed_mud_brick`);

	event.create('stone_brick')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/stone_brick`);

	event.create('charcoal_pellet')
		.rarity('common')
		.burnTime(720)
		.texture(`kubejs:item/hm/pre-lv/charcoal_pellet`);

	event.create('water_bowl')
		.rarity('common')
		.unstackable()
		.texture(`kubejs:item/hm/pre-lv/water_bowl`);

	// ================================================================================== //

	[
		{type: 'hematite', composition: 'Fe₂O₃'},
		{type: 'cassiterite', composition: 'SnO₂'},
		{type: 'chalcopyrite', composition: 'CuFeS₂'},
		{type: 'sphalerite', composition: 'ZnS'},
		{type: 'pyrite', composition: 'FeS₂'},
		{type: 'magnetite', composition: 'Fe₃O₄'},
		{type: 'galena', composition: 'PbS'}
	].forEach(ore => {
		const {type, composition} = ore;
		let id = `${type}_crushed_ore_chunk`;

		event.create(id)
			.tooltip(`§e${composition}`)
			.texture(`kubejs:item/hm/pre-lv/${id}`)
	});

	// ================================================================================== //

	['long_rod', 'double_plate', 'gear', 'small_gear', 'rotor', 'spring', 'small_spring',
		'single_wire', 'fine_wire', 'fluid_pipe', 'item_pipe',].forEach(id => {
		event.create(`incomplete_${id}`)
			.maxStackSize(64)
			.texture(`kubejs:item/hm/incomplete_parts/incomplete_${id}`)
	});

	// ================================================================================== //

	event.create('basic_scavenging_rod')
		.rarity('common')
		.maxDamage(256)
		.unstackable()
		.texture(`kubejs:item/hm/pre-lv/basic_scavenging_rod`);

	event.create('scavenging_rod')
		.rarity('common')
		.maxDamage(512)
		.unstackable()
		.texture(`kubejs:item/hm/pre-lv/scavenging_rod`);

	// ================================================================================== //

	// event.create('iron_sand_paper')
	// 	.displayName('Iron Sand Paper')
	// 	.rarity('common')
	// 	.maxDamage(96)
	// 	.unstackable()
	// 	.texture(`kubejs:item/hm/pre-lv/iron_sand_paper`);

	// ================================================================================== //

	['electric_motor', 'electric_pump', 'conveyor_module', 'robot_arm', 'electric_piston', 'emitter'].forEach(type => {
		event.create(`ulv_${type}`)
			.texture(`kubejs:item/hm/pre-lv/ulv_${type}`);
	});

	['ingot', 'ball', 'raw'].forEach(ceramic => {
		event.create(`unfired_${ceramic}_ceramic_casting_mold`)
			.texture(`kubejs:item/hm/pre-lv/unfired_${ceramic}_ceramic_casting_mold`);
		if (ceramic !== 'raw')
		event.create(`${ceramic}_ceramic_casting_mold`)
			.texture(`kubejs:item/hm/pre-lv/${ceramic}_ceramic_casting_mold`);
	});

});

StartupEvents.registry('block', event => {
	event.create('reinforced_stone_bricks')
		.hardness(5)
		.resistance(1)
		.soundType('stone')
		.requiresTool(true)
		.tagBlock("mineable/pickaxe")
		.tagBlock('minecraft:needs_stone_tool')
		.textureAll('kubejs:block/hm/reinforced_stone_bricks');

	// ================================================================================== //

	['1', '2', '3'].forEach(num => {
		event.create(`crucible_stage_${num}`)
			.hardness(1)
			.resistance(2)
			.requiresTool(true)
			.tagBlock("minecraft:mineable/axe")
			.tagBlock("minecraft:needs_stone_tool");

		event.create(`crafting_stage_${num}`)
			.hardness(1)
			.resistance(2)
			.requiresTool(true)
			.tagBlock("minecraft:mineable/axe")
			.tagBlock("minecraft:needs_stone_tool");
	});

	event.create('high_steam_machine_casing')
		.hardness(5)
		.resistance(1)
		.soundType('stone')
		.requiresTool(true)
		.tagBlock("mineable/pickaxe")
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/hm/high_steam_machine_casing');

	event.create('refined_sand', 'falling')
		.hardness(1)
		.resistance(1)
		.soundType('sand')
		.requiresTool(false)
		.tagBlock("mineable/shovel")
		.textureAll('kubejs:block/hm/refined_sand');

	event.create('refined_dust', 'falling')
		.hardness(1)
		.resistance(1)
		.soundType('sand')
		.requiresTool(false)
		.tagBlock("mineable/shovel")
		.textureAll('kubejs:block/hm/refined_dust');
});

ItemEvents.modification(event => {
	event.modify('minecraft:cocoa_beans', item => {
		item.foodProperties = food => {
			food.hunger(1)
			food.saturation(1)
			food.effect('minecraft:slowness', 80, 2, 1)
			food.effect('minecraft:hunger', 80, 1, .1)
			food.effect('minecraft:blindness', 20, 1, .05)
			food.fastToEat(true)
		}
	})
});