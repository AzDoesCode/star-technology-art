// packmode: hard

ServerEvents.recipes(event => {

	// Create Recipes
	event.recipes.shaped(Item.of('create:item_vault'), [
		'SFS',
		'FBF',
		'SFS'
	], {
		S: 'gtceu:iron_screw',
		B: 'minecraft:barrel',
		F: 'gtceu:iron_foil'
	});

	event.recipes.create.mechanical_crafting('create:mechanical_arm', [
		'HAR',
		' R ',
		'RN ',
		'BPB',
		'GCG'
	], {
		G: 'create:cogwheel',
		B: 'gtceu:brass_plate',
		H: 'create:brass_hand',
		R: 'gtceu:brass_rod',
		N: 'gtceu:brass_ring',
		A: 'create:andesite_alloy',
		P: 'create:precision_mechanism',
		C: 'create:brass_casing'
	});

	event.recipes.shaped(Item.of('create:spout'), [
		'PPP',
		'GCG',
		'RIR'
	], {
		G: 'minecraft:glass_pane',
		C: 'create:copper_casing',
		P: 'gtceu:copper_plate',
		R: 'gtceu:rubber_ring',
		I: 'gtceu:copper_normal_fluid_pipe'
	});

	event.shapeless('create:shaft', ['#forge:tools/files', '2x create:andesite_alloy']);

	event.recipes.shaped(Item.of('create:encased_chain_drive', 2), [
		'SN ',
		'NCN',
		' NS'
	], {
		S: 'create:shaft',
		C: 'create:andesite_casing',
		N: 'minecraft:chain'
	});

	event.recipes.shaped(Item.of('create:adjustable_chain_gearshift', 2), [
		'SNT',
		'NCN',
		'TNS'
	], {
		S: 'create:shaft',
		C: 'create:andesite_casing',
		N: 'minecraft:chain',
		T: 'create:electron_tube'
	});

	event.recipes.shaped(Item.of('create:gearshift'), [
		'RCG'
	], {
		R: 'minecraft:redstone_torch',
		C: 'create:andesite_casing',
		G: 'create:cogwheel'
	});

	event.recipes.shaped(Item.of('create:sequenced_gearshift'), [
		'RCG'
	], {
		R: 'create:electron_tube',
		C: 'create:brass_casing',
		G: 'create:cogwheel'
	});

	event.recipes.shaped(Item.of('create:depot'), [
		'APA',
		'SCS'
	], {
		P: 'gtceu:iron_plate',
		C: 'create:andesite_casing',
		A: 'create:andesite_alloy',
		S: 'gtceu:iron_screw'
	});

	event.recipes.shaped(Item.of('create:fluid_tank', 2), [
		'PGP',
		'GCG',
		'PGP'
	], {
		G: 'minecraft:glass_pane',
		C: 'create:copper_casing',
		P: 'gtceu:copper_plate',
	});

	event.recipes.shaped(Item.of('create:weighted_ejector'), [
		'DPA',
		'GCS'
	], {
		G: 'create:cogwheel',
		A: 'create:andesite_alloy',
		P: 'minecraft:stone_pressure_plate',
		C: 'create:depot',
		S: 'create:shaft',
		D: 'gtceu:gold_plate'
	});

	event.recipes.create.mechanical_crafting('create:steam_engine', [
		'GSG',
		' A ',
		'PAP',
		'PCP'
	], {
		G: 'gtceu:gold_ring',
		S: 'create:shaft',
		A: 'create:andesite_alloy',
		P: 'gtceu:copper_plate',
		C: 'create:copper_casing'
	});

	event.shaped(Item.of('create:andesite_casing'), [
		'PMP',
		'AFA',
		'PHP'
	], {
		P: 'gtceu:wood_plate',
		M: '#forge:tools/mallets',
		A: 'create:andesite_alloy',
		F: 'gtceu:wood_frame',
		H: '#forge:tools/hammers'
	});

	event.shaped(Item.of('create:copper_casing'), [
		'RMR',
		'PFP',
		'RHR'
	], {
		P: 'gtceu:pig_iron_plate',
		M: '#forge:tools/mallets',
		R: 'gtceu:copper_tiny_fluid_pipe',
		F: 'gtceu:pig_iron_frame',
		H: '#forge:tools/hammers'
	});

	event.shaped(Item.of('create:brass_casing'), [
		'PMP',
		'AFA',
		'PHP'
	], {
		P: 'gtceu:treated_wood_plate',
		M: '#forge:tools/mallets',
		A: 'gtceu:brass_plate',
		F: 'gtceu:treated_wood_frame',
		H: '#forge:tools/hammers'
	});

	event.shaped(Item.of('create:piston_extension_pole', 3), [
		'P',
		'A',
		'P'
	], {
		P: 'gtceu:wood_plate',
		A: 'create:andesite_alloy'
	});

	event.shaped(Item.of('create:hand_crank'), [
		' PA',
		'RPM',
		'GP '
	], {
		P: 'gtceu:wood_plate',
		M: '#forge:tools/mallets',
		A: 'create:andesite_alloy',
		R: 'gtceu:sticky_resin',
		G: 'gtceu:wood_gear'
	});

	event.shaped(Item.of('create:mechanical_press'), [
		'PLP',
		'GCG',
		'AVA'
	], {
		C: 'create:andesite_casing',
		P: 'gtceu:wood_plate',
		A: 'create:andesite_alloy',
		L: 'create:piston_extension_pole',
		G: 'gtceu:wood_gear',
		V: 'minecraft:anvil'
	});

	event.shaped(Item.of('create:mechanical_saw'), [
		'MSW',
		'ACA'
	], {
		M: '#forge:tools/mallets',
		W: '#forge:tools/wrenches',
		S: 'gtceu:iron_buzz_saw_blade',
		C: 'create:andesite_casing',
		A: 'create:andesite_alloy'
	});

	event.shaped(Item.of('create:millstone'), [
		'WCM',
		'GAG',
		'SSS'
	], {
		W: '#forge:tools/wrenches',
		M: '#forge:tools/mallets',
		C: 'create:chute',
		G: 'create:cogwheel',
		A: 'create:andesite_casing',
		S: '#forge:stone'
	});

	event.recipes.create.mechanical_crafting('create:crushing_wheel', [
		' SSS ',
		'SAMAS',
		'SMFMS',
		'SAMAS',
		' SSS '
	], {
		S: '#forge:stone',
		A: 'create:andesite_casing',
		F: 'create:shaft',
		M: 'gtceu:wood_frame'
	});

	event.shaped(Item.of('create:andesite_funnel', 2), [
		'AIA',
		'ARA'
	], {
		R: 'gtceu:rubber_plate',
		A: 'create:andesite_alloy',
		I: 'gtceu:iron_foil'
	});

	event.shaped(Item.of('create:brass_funnel', 2), [
		'PEP',
		'RBR'
	], {
		P: 'gtceu:brass_plate',
		R: 'gtceu:brass_rod',
		E: 'create:electron_tube',
		B: 'gtceu:rubber_plate'
	});

	event.shaped(Item.of('create:andesite_tunnel', 2), [
		' FM',
		'FCF',
		'AF '
	], {
		F: 'create:andesite_funnel',
		C: 'create:andesite_casing',
		A: 'create:andesite_alloy',
		M: '#forge:tools/mallets'
	});

	event.shaped(Item.of('create:brass_tunnel', 2), [
		' FM',
		'FCF',
		'TF '
	], {
		F: 'create:brass_funnel',
		C: 'create:brass_casing',
		T: 'create:electron_tube',
		M: '#forge:tools/mallets'
	});

	let drill = 'gtceu:double_iron_plate'
	event.recipes.create.sequenced_assembly([
		Item.of('thermal:drill_head').withChance(1),
	], drill, [
		event.recipes.createDeploying(drill, [drill, 'create:andesite_alloy']),
		event.recipes.createDeploying(drill, [drill, 'create:andesite_alloy']),
		event.recipes.createPressing(drill, drill),
		event.recipes.createDeploying(drill, [drill, 'gtceu:iron_plate']),
		event.recipes.createCutting(drill, drill),
	]).transitionalItem(drill).loops(2)

	event.shaped(Item.of('create:mechanical_drill'), [
		'MDH',
		'ACA',
		'ASA'
	], {
		M: '#forge:tools/mallets',
		H: '#forge:tools/hammers',
		S: 'create:shaft',
		C: 'create:andesite_casing',
		D: 'thermal:drill_head',
		A: 'create:andesite_alloy'
	});

	event.shaped(Item.of('create:brass_hand'), [
		'BBB',
		'PPP',
		'ARA'
	], {
		B: 'gtceu:brass_bolt',
		P: 'gtceu:brass_plate',
		R: 'gtceu:zinc_ring',
		A: 'create:andesite_alloy'
	});

	event.shaped(Item.of('create:deployer'), [
		'EPE',
		'SCS',
		'AHA'
	], {
		E: 'create:electron_tube',
		P: 'create:piston_extension_pole',
		S: 'create:shaft',
		A: 'create:andesite_alloy',
		C: 'create:andesite_casing',
		H: 'create:brass_hand'
	});

	event.shaped(Item.of('create:fluid_pipe', 3), [
		'PFP',
		'FPF'
	], {
		P: 'gtceu:copper_normal_fluid_pipe',
		F: 'gtceu:copper_foil'
	});

	event.shaped(Item.of('create:chute', 4), [
		'PCP',
		'PHP'
	], {
		P: 'gtceu:iron_plate',
		C: 'minecraft:chest',
		H: 'minecraft:hopper'
	});

	event.shaped(Item.of('create:smart_chute'), [
		'FTF',
		'FCF'
	], {
		F: 'gtceu:brass_foil',
		C: 'create:chute',
		T: 'create:electron_tube'
	});

	event.shaped(Item.of('create:water_wheel'), [
		'PPP',
		'SCS',
		'PPP'
	], {
		S: 'create:shaft',
		C: 'create:andesite_casing',
		P: 'gtceu:wood_plate'
	});

	event.recipes.create.mechanical_crafting('create:large_water_wheel', [
		' PPP ',
		'PSSSP',
		'PSWSP',
		'PSSSP',
		' PPP '
	], {
		S: '#forge:rods/wooden',
		P: 'gtceu:wood_plate',
		W: 'create:water_wheel'
	});

	event.shaped(Item.of('create:whisk'), [
		'NWN',
		'RAR',
		'RPR'
	], {
		W: '#forge:tools/wrenches',
		R: 'gtceu:iron_rod',
		P: 'gtceu:iron_plate',
		A: 'create:andesite_alloy',
		N: 'gtceu:iron_ring'
	});

	event.shaped(Item.of('create:cogwheel', 2), [
		' SM',
		'PGP',
		' S '
	], {
		S: 'create:shaft',
		G: 'gtceu:wood_gear',
		P: 'gtceu:wood_plate',
		M: '#forge:tools/mallets'
	});

	event.shaped(Item.of('create:large_cogwheel', 2), [
		' SM',
		'PGP',
		' S '
	], {
		S: 'create:shaft',
		G: 'create:cogwheel',
		P: 'gtceu:wood_plate',
		M: '#forge:tools/mallets'
	});

	event.shaped(Item.of('create:mechanical_mixer'), [
		'MLW',
		'GCG',
		'AHA'
	], {
		L: 'create:piston_extension_pole',
		M: '#forge:tools/mallets',
		W: '#forge:tools/wrenches',
		G: 'create:cogwheel',
		C: 'create:andesite_casing',
		A: 'create:andesite_alloy',
		H: 'create:whisk'
	});

	event.shaped(Item.of('create:basin'), [
		'A A',
		'ACA',
		'PAP'
	], {
		A: 'create:andesite_alloy',
		C: 'minecraft:cauldron',
		P: 'gtceu:lead_plate'
	});

	event.remove('createlowheated:basic_burner');
	event.shaped('createlowheated:basic_burner', [
		'RRR',
		'R R',
		'PAP'
	], {
		A: 'create:andesite_alloy',
		R: 'gtceu:lead_rod',
		P: 'gtceu:lead_plate'
	});

	event.shaped(Item.of('create:propeller'), [
		'SAR',
		'ZPZ',
		'MAS'
	], {
		P: 'gtceu:pig_iron_rotor',
		A: 'create:andesite_alloy',
		R: '#forge:tools/screwdrivers',
		M: '#forge:tools/mallets',
		Z: 'gtceu:zinc_plate',
		S: 'gtceu:iron_screw'
	});

	event.shaped(Item.of('create:encased_fan'), [
		'RPR',
		'SCF',
		'RPR'
	], {
		P: 'gtceu:wood_plate',
		R: 'gtceu:zinc_rod',
		F: 'create:propeller',
		S: 'create:shaft',
		C: 'create:andesite_casing'
	});

	event.remove({ output: /^create:.*sand_paper/ });
	const sandType = ['sand', 'red_sand'];
	sandType.forEach(sand => {
		event.recipes.create.mixing(Item.of(`1x create:${sand}_paper`).withChance(.8), ['1x farmersdelight:canvas', `1x minecraft:${sand}`, 'gtceu:sticky_resin']);
	});

	event.recipes.create.sandpaper_polishing(Item.of('create:polished_rose_quartz').withChance(.7), 'create:rose_quartz');

	event.shaped(Item.of('create:electron_tube'), [
		'NNN',
		'NQN',
		'BGB'
	], {
		G: 'gtceu:iron_ring',
		B: 'gtceu:copper_bolt',
		N: 'minecraft:glass_pane',
		Q: 'create:polished_rose_quartz'
	});

	let prec = 'gtceu:double_gold_plate'
	event.recipes.create.sequenced_assembly([
		Item.of(`create:precision_mechanism`),
	], `gtceu:double_gold_plate`, [
		event.recipes.createDeploying(prec, [prec, `create:cogwheel`]),
		event.recipes.createDeploying(prec, [prec, `create:large_cogwheel`]),
		event.recipes.createPressing(prec, prec),
		event.recipes.createDeploying(prec, [prec, `gtceu:iron_screw`]),
		event.recipes.createPressing(prec, prec)
	]).transitionalItem(prec).loops(4);

	let mech = 'create:brass_casing'
	event.recipes.create.sequenced_assembly([
		Item.of(`create:mechanical_crafter`).withChance(1),
	], `create:brass_casing`, [
		event.recipes.createDeploying(mech, [mech, `create:cogwheel`]),
		event.recipes.createPressing(mech, mech),
		event.recipes.createDeploying(mech, [mech, `create:precision_mechanism`]),
		event.recipes.createDeploying(mech, [mech, `minecraft:crafting_table`]),
		event.recipes.createPressing(mech, mech)
	]).transitionalItem(mech).loops(1);

	event.recipes.create.mechanical_crafting('create:flywheel', [
		' PPP ',
		'PS SP',
		'P T P',
		'PS SP',
		' PPP '
	], {
		T: 'create:shaft',
		P: 'gtceu:brass_rod',
		S: '#forge:rods/wooden'
	});

	event.remove({ id: 'minecraft:minecart' });

	event.recipes.create.mechanical_crafting('create:sticker', [
		'ASA',
		'DRD'
	], {
		S: 'minecraft:slime_block',
		A: 'create:andesite_alloy',
		D: 'gtceu:double_iron_plate',
		R: 'minecraft:redstone'
	});

	event.shaped(Item.of('create:nozzle'), [
		'ASA',
		'SSS',
		'APA'
	], {
		A: 'create:andesite_alloy',
		S: '#forge:string',
		P: 'gtceu:iron_plate'
	});

	event.shaped(Item.of('create:white_sail', 2), [
		'ASC',
		'SCS',
		'CSA'
	], {
		A: 'create:andesite_alloy',
		S: '#forge:rods/wooden',
		C: 'farmersdelight:canvas'
	});

	event.shaped(Item.of('create:mechanical_bearing'), [
		'RPR',
		'GCG',
		'GSG'
	], {
		R: 'gtceu:sticky_resin',
		G: 'gtceu:wood_gear',
		S: 'create:shaft',
		C: 'create:andesite_casing',
		P: '#minecraft:wooden_slabs'
	});

	event.shaped(Item.of('create:windmill_bearing'), [
		'FRF',
		'XBW',
		'FSF'
	], {
		F: 'create:sail_frame',
		R: 'gtceu:sticky_resin',
		X: '#forge:tools/screwdrivers',
		B: 'create:mechanical_bearing',
		W: '#forge:tools/wrench',
		S: 'create:shaft',
	});

	event.shapeless(Item.of('create:clockwork_bearing'), [
		'create:brass_casing', 'create:mechanical_bearing', 'create:electron_tube'
	]);

	event.recipes.create.mechanical_crafting('create:gantry_carriage', [
		'SPS',
		'GCG'
	], {
		S: 'create:shaft',
		C: 'create:andesite_casing',
		G: 'create:cogwheel',
		P: 'minecraft:sticky_piston'
	});

	event.recipes.create.mechanical_crafting('create:rotation_speed_controller', [
		'RGR',
		'SMS',
		'PCP'
	], {
		R: 'gtceu:brass_ring',
		G: 'create:cogwheel',
		S: 'create:shaft',
		P: 'gtceu:brass_plate',
		C: 'create:brass_casing',
		M: 'create:precision_mechanism'
	});

	event.shaped(Item.of('create:gantry_shaft', 2), [
		' RP',
		'RSR',
		'PR '
	], {
		R: 'gtceu:small_redstone_dust',
		P: 'gtceu:wood_plate',
		S: 'create:shaft'
	});

	event.remove({ output: 'create:super_glue' });
	event.recipes.create.mechanical_crafting('create:super_glue', [
		'  RS',
		'NGRP',
		'  RS'
	], {
		R: 'gtceu:sticky_resin',
		P: 'gtceu:iron_plate',
		N: 'minecraft:iron_nugget',
		S: '#forge:string',
		G: 'gtceu:rubber_ring'
	});

	event.recipes.create.mechanical_crafting(Item.of('create_new_age:carbon_brushes'), [
        'RWPWR',
        'W C W',
        'PUsUP',
		'W C W',
		'RWPWR'
    ], {
        R: 'gtceu:cast_iron_rod',
		W: 'gtceu:fine_copper_wire',
		P: 'gtceu:cast_iron_plate',
		C: '#minecraft:coals',
		U: '#gtceu:circuits/ulv',
		s: 'create:shaft'
    });

	event.recipes.create.mechanical_crafting(Item.of('2x create_new_age:electrical_connector'), [
        'WRW',
		'WDW',
		'RPR'
    ], {
		W: 'gtceu:fine_copper_wire',
        R: 'gtceu:cast_iron_ring',
		D: 'gtceu:cast_iron_rod',
		P: 'gtceu:cast_iron_plate'
    });

	event.recipes.create.mechanical_crafting(Item.of('2x create_new_age:generator_coil'), [
        'RWWRWWR',
        'WCPCPCW',
		'WPWWWPW',
        'WCWSWCW',
        'WPWWWPW',
        'WCPCPCW',
        'RWWRWWR'

    ], {
        R: 'gtceu:cast_iron_ring',
		W: 'gtceu:fine_copper_wire',
		C: 'create_new_age:electrical_connector',
        P: 'gtceu:cast_iron_plate',
		S: 'create:shaft'
    });

	event.recipes.create.compacting('create_new_age:magnetite_block', ['8x gtceu:magnetite_dust','gtceu:stone_dust']);

    event.recipes.create.mechanical_crafting(Item.of('4x create_new_age:redstone_magnet'), [
        'BrB',
        'rRr',
        'BrB'
    ], {
        B: 'create_new_age:magnetite_block',
        R: 'minecraft:redstone',
        r: 'minecraft:redstone_block'
    });

	event.recipes.create.mechanical_crafting(Item.of('3x create_new_age:layered_magnet'), [
        'IGI',
        'GIG',
        'RRR',
		'GIG',
        'IGI'
    ], {
        R: 'create_new_age:redstone_magnet',
		G: 'create_new_age:overcharged_gold',
		I: 'create_new_age:overcharged_iron'
    });

	event.recipes.create.mechanical_crafting(Item.of('4x create_new_age:fluxuated_magnetite'), [
        'DMDMD',
        'MLMLM',
        'DMDMD',
		'MLMLM',
        'DMDMD'
    ], {
        L: 'create_new_age:layered_magnet',
        M: 'gtceu:magnetite_dust',
		D: 'create_new_age:overcharged_diamond'
    });

    event.recipes.gtceu.assembler('netherite_magnet')
        .itemInputs('create_new_age:fluxuated_magnetite')
		.inputFluids('gtceu:neodymium 576')
		.itemOutputs('create_new_age:netherite_magnet')
		.duration(200)
		.EUt(120);

	event.shaped(Item.of('3x create:belt_connector'), [
			'RRR',
			'HSW'
		], {
			R: 'gtceu:rubber_plate',
			H: '#forge:tools/hammers',
			S: '#forge:tools/screwdrivers',
			W: '#forge:tools/wrenches'
		});

	event.recipes.create.mechanical_crafting(Item.of('3x create:belt_connector'), [
			'RRR'
		], {
			R: 'gtceu:rubber_plate'
		});

	const CNA_wire = (material,energy,output) => {
	event.custom({
		'type': 'create_new_age:energising',
		'energy_needed': energy,
		'ingredients': [
			{
			'item': `gtceu:fine_${material}_wire`
			}
		],
		'results': [
			{
			'item': `create_new_age:${output}`
			}
		]
	});
	}
	CNA_wire('copper',500,'copper_wire');
	CNA_wire('iron',1000,'overcharged_iron_wire');
	CNA_wire('gold',2000,'overcharged_golden_wire');

	const Energiser = (tier,material,prior) => {
	event.recipes.create.mechanical_crafting(Item.of(`create_new_age:energiser_${tier}`), [
		'PRP',
		'USU',
		'PGP',
		' N '
	], {
		R: 'gtceu:cast_iron_rod',
		P: 'gtceu:cast_iron_plate',
		S: prior,
		U: '#gtceu:circuits/ulv',
		G: material,
		N: 'create_new_age:electrical_connector'
	});
	}
	Energiser('t1','minecraft:lightning_rod','create:shaft');
	Energiser('t2','create_new_age:overcharged_golden_wire','create_new_age:energiser_t1');
	Energiser('t3','create_new_age:overcharged_diamond','create_new_age:energiser_t2');

	event.recipes.create.mechanical_crafting(Item.of('create_new_age:basic_motor'), [
		'NRN',
		'SMP',
		'NRN'
	], {
		N: 'create_new_age:overcharged_iron_sheet',
		R: 'gtceu:cast_iron_rod',
		S: 'create:shaft',
		M: 'kubejs:ulv_electric_motor',
		P: 'gtceu:cast_iron_plate'
	});

	event.recipes.create.mechanical_crafting(Item.of('create_new_age:advanced_motor'), [
		'NRN',
		'SMP',
		'NRN'
	], {
		N: 'create_new_age:overcharged_golden_sheet',
		R: 'gtceu:cast_iron_rod',
		S: 'gtceu:cast_iron_ring',
		M: 'create_new_age:basic_motor',
		P: 'gtceu:cast_iron_plate'
	});

	event.recipes.create.mechanical_crafting(Item.of('create_new_age:reinforced_motor'), [
		'NRRRN',
		'SSMFP',
		'NRRRN'
	], {
		N: 'gtceu:cast_iron_screw',
		R: 'gtceu:cast_iron_rod',
		S: 'create:shaft',
		F: 'create_new_age:fluxuated_magnetite',
		M: 'create_new_age:basic_motor',
		P: 'gtceu:double_cast_iron_plate'
	});

	// Removals
	const CreateRemoval = ['windmill_bearing', 'spout', 'fluid_pipe', 'chute', 'depot', 'basin', 'mechanical_mixer', 'mechanical_press', 'hand_crank', 'millstone',
		'crushing_wheel', 'smart_chute', 'fluid_tank', 'steam_engine', 'piston_extension_pole', 'mechanical_bearing', 'clockwork_bearing', 'weighted_ejector',
		'encased_fan', 'large_water_wheel', 'encased_chain_drive', 'gearshift', 'gantry_shaft', 'gantry_carriage', 'mechanical_drill', 'sticker', 'mechanical_saw',
		'deployer', 'andesite_casing', 'brass_casing', 'mechanical_crafter', 'copper_casing', 'sequenced_gearshift', 'nozzle', 'adjustable_chain_gearshift', 'water_wheel',
		'andesite_funnel', 'mechanical_arm', 'item_vault', 'flywheel', 'brass_hand', 'whisk', 'propeller', 'electron_tube', 'rotation_speed_controller', 'brass_tunnel',
		'andesite_tunnel', 'brass_funnel', 'white_sail'];
	CreateRemoval.forEach(item => {
		event.remove({ output: `create:${item}` });
	});
	const CNA = ['layered_magnet','fluxuated_magnetite','energiser_t1','energiser_t2','energiser_t3','electrical_connector','generator_coil','basic_motor','advanced_motor','reinforced_motor']
	CNA.forEach(removal=>{
		event.remove({output: `create_new_age:${removal}`})
	});
});