ServerEvents.recipes(event => {
    const id = global.id;

    // === Controller Blocks === 
        event.recipes.gtceu.assembly_line(id('component_nexus'))
            .itemInputs('4x gtceu:assembly_line','6x #gtceu:circuits/uev','4x gtceu:uhv_robot_arm','2x gtceu:uhv_conveyor_module',
                '32x gtceu:energy_cluster','6x kubejs:uhv_voltage_coil','16x gtceu:europium_single_cable','24x gtceu:iron_selenide_over_strontium_titanium_oxide_bolt',
                '64x gtceu:uhpic_chip','64x gtceu:uhpic_chip','32x gtceu:uhpic_chip')
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 25056', 'gtceu:lubricant 16000', 'gtceu:utopian_akreyrium 1000')
            .itemOutputs('gtceu:component_nexus')
            .duration(1800)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('gtceu:component_part_assembly'))
                    .EUt(GTValues.VHA[GTValues.UHV])
                    .CWUt(144)
                )
            .EUt(GTValues.VHA[GTValues.UEV]);

    // === Bulk Components ===
        const BulkScaler = 32; //variant of 4n, not larger than 48
        const assemblyMaterials = (scale,Tier,Tier1,Tier2,Primary,Secondary,MechanicalWire,Cable,Pipe,SuperConductor,Catalyst,SenMat,SenFoil,Frame,eut) => {
        const componentTypesAssemblyLine = (type,inputs,fluids,circuit) => {
            if (Tier == 'uv'){
            event.recipes.gtceu.component_nexus(id(`${Tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .inputFluids(`gtceu:naquadria ${BulkScaler*576}`)
                .itemOutputs(`${BulkScaler}x gtceu:${Tier}_${type}`)
                .duration(450 * BulkScaler / 2)
                .circuit(circuit)
                .cleanroom(CleanroomType.getByName('stabilized'))
                .EUt(eut * 2);
            } else {
            event.recipes.gtceu.component_nexus(id(`${Tier}_${type}`))
                .itemInputs(inputs)
                .inputFluids(fluids)
                .itemOutputs(`${BulkScaler}x gtceu:${Tier}_${type}`)
                .duration(450 * BulkScaler / 2)
                .circuit(circuit)
                .cleanroom(CleanroomType.getByName('stabilized'))
                .EUt(eut * 2);
            }
        }
        componentTypesAssemblyLine('electric_motor',[`${BulkScaler}x gtceu:long_magnetic_samarium_rod`,`${4 * BulkScaler}x gtceu:long_${Primary}_rod`,`${4 * BulkScaler}x gtceu:${Primary}_ring`,`${8 * BulkScaler}x gtceu:${Primary}_round`,`${16 * BulkScaler}x gtceu:fine_${MechanicalWire}_wire`,`${16 * BulkScaler}x gtceu:fine_${MechanicalWire}_wire`,`${16 * BulkScaler}x gtceu:fine_${MechanicalWire}_wire`,`${16 * BulkScaler}x gtceu:fine_${MechanicalWire}_wire`,`${2 * BulkScaler}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${BulkScaler*72*(2**scale)}`,`gtceu:lubricant ${BulkScaler*125*(2**scale)}`],0);

        componentTypesAssemblyLine('electric_pump',[`${BulkScaler}x gtceu:${Tier}_electric_motor`,`${BulkScaler}x gtceu:${Pipe}_normal_fluid_pipe`,`${2 * BulkScaler}x gtceu:${Primary}_plate`,`${8 * BulkScaler}x gtceu:${Primary}_screw`,`${BulkScaler * 2*(scale+1)}x gtceu:silicone_rubber_ring`,`${BulkScaler}x gtceu:${Secondary}_rotor`,`${2 * BulkScaler}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${BulkScaler*72*(2**scale)}`,`gtceu:lubricant ${BulkScaler*125*(2**scale)}`],1);

        componentTypesAssemblyLine('conveyor_module',[`${2 * BulkScaler}x gtceu:${Tier}_electric_motor`,`${2 * BulkScaler}x gtceu:${Primary}_plate`,`${4 * BulkScaler}x gtceu:${Primary}_ring`,`${16 * BulkScaler}x gtceu:${Primary}_round`,`${4 * BulkScaler}x gtceu:${Primary}_screw`,`${2 * BulkScaler}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${BulkScaler*72*(2**scale)}`,`gtceu:lubricant ${BulkScaler*125*(2**scale)}`,`gtceu:styrene_butadiene_rubber ${BulkScaler*scale*1152}`],2);

        componentTypesAssemblyLine('electric_piston',[`${BulkScaler}x gtceu:${Tier}_electric_motor`,`${4 * BulkScaler}x gtceu:${Primary}_plate`,`${4 * BulkScaler}x gtceu:${Primary}_ring`,`${16 * BulkScaler}x gtceu:${Primary}_round`,`${4 * BulkScaler}x gtceu:${Primary}_rod`,`${BulkScaler}x gtceu:${Secondary}_gear`,`${2 * BulkScaler}x gtceu:small_${Secondary}_gear`,`${2 * BulkScaler}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${BulkScaler*72*(2**scale)}`,`gtceu:lubricant ${BulkScaler*125*(2**scale)}`],3);

        componentTypesAssemblyLine('robot_arm',[`${4 * BulkScaler}x gtceu:long_${Primary}_rod`,`${BulkScaler}x gtceu:${Primary}_gear`,`${3 * BulkScaler}x gtceu:small_${Primary}_gear`,`${2 * BulkScaler}x gtceu:${Tier}_electric_motor`,`${BulkScaler}x gtceu:${Tier}_electric_piston`,`${BulkScaler}x #gtceu:circuits/${Tier}`,`${2 * BulkScaler}x #gtceu:circuits/${Tier1}`,`${4 * BulkScaler}x #gtceu:circuits/${Tier2}`,`${4 * BulkScaler}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${BulkScaler*576*scale}`,`gtceu:lubricant ${BulkScaler*125*(2**scale)}`],4);

        componentTypesAssemblyLine('field_generator',[`${BulkScaler}x gtceu:${Frame}_frame`,`${6 * BulkScaler}x gtceu:${Primary}_plate`,`${BulkScaler}x gtceu:${Catalyst}`,`${2 * BulkScaler}x gtceu:${Tier}_emitter`,`${2 * BulkScaler}x #gtceu:circuits/${Tier}`,`${16 *  BulkScaler}x gtceu:fine_${SuperConductor}_wire`,`${16 *  BulkScaler}x gtceu:fine_${SuperConductor}_wire`,`${16 *  BulkScaler}x gtceu:fine_${SuperConductor}_wire`,`${16 *  BulkScaler}x gtceu:fine_${SuperConductor}_wire`,`${16 *  BulkScaler}x gtceu:fine_${SuperConductor}_wire`,`${16 *  BulkScaler}x gtceu:fine_${SuperConductor}_wire`,`${16 *  BulkScaler}x gtceu:fine_${SuperConductor}_wire`,`${16 *  BulkScaler}x gtceu:fine_${SuperConductor}_wire`,`${4 * BulkScaler}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${BulkScaler*576*scale}`],5);

        componentTypesAssemblyLine('emitter',[`${BulkScaler}x gtceu:${Frame}_frame`,`${BulkScaler}x gtceu:${Tier}_electric_motor`,`${4 * BulkScaler}x gtceu:long_${SenMat}_rod`,`${BulkScaler}x gtceu:${Catalyst}`,`${2 * BulkScaler}x #gtceu:circuits/${Tier}`,`${16 * BulkScaler}x gtceu:${SenFoil}_foil`,`${16 * BulkScaler}x gtceu:${SenFoil}_foil`,`${16 * BulkScaler}x gtceu:${SenFoil}_foil`,`${16 * BulkScaler}x gtceu:${SenFoil}_foil`,`${16 * BulkScaler}x gtceu:${SenFoil}_foil`,`${16 * BulkScaler}x gtceu:${SenFoil}_foil`,`${4 * BulkScaler}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${BulkScaler*144*(2**scale)}`],6);

        componentTypesAssemblyLine('sensor',[`${BulkScaler}x gtceu:${Frame}_frame`,`${BulkScaler}x gtceu:${Tier}_electric_motor`,`${4 * BulkScaler}x gtceu:${SenMat}_plate`,`${BulkScaler}x gtceu:${Catalyst}`,`${2 * BulkScaler}x #gtceu:circuits/${Tier}`,`${16 * BulkScaler}x gtceu:${SenFoil}_foil`,`${16 * BulkScaler}x gtceu:${SenFoil}_foil`,`${16 * BulkScaler}x gtceu:${SenFoil}_foil`,`${16 * BulkScaler}x gtceu:${SenFoil}_foil`,`${16 * BulkScaler}x gtceu:${SenFoil}_foil`,`${16 * BulkScaler}x gtceu:${SenFoil}_foil`,`${4 * BulkScaler}x gtceu:${Cable}_single_cable`],
            [`gtceu:soldering_alloy ${BulkScaler*144*(2**scale)}`],7);

        }

        assemblyMaterials(1,'luv','iv','ev','hsss','hsss','ruridit','niobium_titanium','niobium_titanium','indium_tin_barium_titanium_cuprate','quantum_star','ruridit','palladium','hsss',6000);
        assemblyMaterials(2,'zpm','luv','iv','osmiridium','osmiridium','europium','vanadium_gallium','polybenzimidazole','uranium_rhodium_dinaquadide','quantum_star','osmiridium','trinium','naquadah_alloy',24000);
        assemblyMaterials(3,'uv','zpm','luv','tritanium','naquadah_alloy','americium','yttrium_barium_cuprate','naquadah','enriched_naquadah_trinium_europium_duranide','gravi_star','tritanium','naquadria','tritanium',100000);

});