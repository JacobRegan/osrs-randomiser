import { TaskEnum, TypeEnum } from "./enums";
import { Task } from "./tasks";

export const questTasks: Task[] = [
  {
    type: TypeEnum.quest,
    task: TaskEnum.below_ice_mountain,
    requirements: [],
    questPoints: 1,
    questPointRequirement: 16
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.biohazard,
    requirements: [TaskEnum.plague_city],
    questPoints: 3,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.client_of_kourend,
    requirements: [TaskEnum.x_marks_the_spot],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.clock_tower,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.cooks_assistant,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.current_affairs,
    requirements: [TaskEnum.sailing_level_25, TaskEnum.fishing_level_10, TaskEnum.pandemonium],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.death_plateau,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.demon_slayer,
    requirements: [TaskEnum.hitpoints_level_20],
    questPoints: 3,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.dorics_quest,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.druidic_ritual,
    requirements: [],
    questPoints: 4,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.dwarf_cannon,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.eagles_peak,
    requirements: [TaskEnum.hunter_level_30],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.elemental_workshop_i,
    requirements: [TaskEnum.mining_level_20, TaskEnum.smithing_level_20, TaskEnum.crafting_level_20],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.ernest_the_chicken,
    requirements: [TaskEnum.hitpoints_level_20],
    questPoints: 4,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.fishing_contest,
    requirements: [TaskEnum.fishing_level_10],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.gertrudes_cat,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.goblin_diplomacy,
    requirements: [],
    questPoints: 5,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.hazeel_cult,
    requirements: [TaskEnum.the_dig_site],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.imp_catcher,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.jungle_potion,
    requirements: [TaskEnum.druidic_ritual, TaskEnum.herblore_level_5],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.misthalin_mystery,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.monks_friend,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.murder_mystery,
    requirements: [],
    questPoints: 3,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.pirates_treasure,
    requirements: [],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.plague_city,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.a_porcine_of_interest,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.pandemonium,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.priest_in_peril,
    requirements: [TaskEnum.hitpoints_level_30],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.prince_ali_rescue,
    requirements: [],
    questPoints: 3,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.rag_and_bone_man_i,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.recruitment_drive,
    requirements: [TaskEnum.black_knights_fortress, TaskEnum.druidic_ritual],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_restless_ghost,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_ribbiting_tale_of_a_lily_pad_labour_dispute,
    requirements: [TaskEnum.woodcutting_level_15, TaskEnum.children_of_the_sun],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.romeo_and_juliet,
    requirements: [],
    questPoints: 5,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.rune_mysteries,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.sheep_herder,
    requirements: [],
    questPoints: 4,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.sheep_shearer,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.shield_of_arrav,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.tower_of_life,
    requirements: [TaskEnum.construction_level_10],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.witchs_potion,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.x_marks_the_spot,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.animal_magnetism,
    requirements: [TaskEnum.the_restless_ghost, TaskEnum.ernest_the_chicken, TaskEnum.priest_in_peril, TaskEnum.slayer_level_20, TaskEnum.crafting_level_20, TaskEnum.ranged_level_30, TaskEnum.woodcutting_level_35],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.another_slice_of_ham,
    requirements: [TaskEnum.death_to_the_dorgeshuun, TaskEnum.attack_level_15, TaskEnum.prayer_level_25, TaskEnum.the_giant_dwarf, TaskEnum.the_dig_site],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_ascent_of_arceuus,
    requirements: [TaskEnum.client_of_kourend, TaskEnum.hunter_level_15],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.at_first_light,
    requirements: [TaskEnum.hunter_level_48, TaskEnum.herblore_level_30, TaskEnum.construction_level_30, TaskEnum.children_of_the_sun, TaskEnum.eagles_peak],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.big_chompy_bird_hunting,
    requirements: [TaskEnum.fletching_level_5, TaskEnum.cooking_level_30, TaskEnum.ranged_level_30],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.black_knights_fortress,
    requirements: [],
    questPoints: 3,
    questPointRequirement: 12
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.bone_voyage,
    requirements: [TaskEnum.the_dig_site],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.cold_war,
    requirements: [TaskEnum.hunter_level_10, TaskEnum.agility_level_30, TaskEnum.crafting_level_30, TaskEnum.construction_level_35, TaskEnum.thieving_level_15],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_corsair_curse,
    requirements: [TaskEnum.hitpoints_level_25],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.creature_of_fenkenstrain,
    requirements: [TaskEnum.priest_in_peril, TaskEnum.the_restless_ghost, TaskEnum.crafting_level_20, TaskEnum.thieving_level_25],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.death_on_the_isle,
    requirements: [TaskEnum.thieving_level_35, TaskEnum.agility_level_35, TaskEnum.children_of_the_sun],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.death_to_the_dorgeshuun,
    requirements: [TaskEnum.the_lost_tribe, TaskEnum.agility_level_25, TaskEnum.thieving_level_25],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_depths_of_despair,
    requirements: [TaskEnum.client_of_kourend, TaskEnum.agility_level_20],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_dig_site,
    requirements: [TaskEnum.agility_level_10, TaskEnum.herblore_level_10, TaskEnum.thieving_level_25],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.eadgars_ruse,
    requirements: [TaskEnum.troll_stronghold, TaskEnum.druidic_ritual, TaskEnum.herblore_level_35],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.elemental_workshop_ii,
    requirements: [TaskEnum.elemental_workshop_i, TaskEnum.magic_level_20, TaskEnum.smithing_level_30],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.enlightened_journey,
    requirements: [TaskEnum.firemaking_level_20, TaskEnum.farming_level_30, TaskEnum.crafting_level_40],
    questPoints: 1,
    questPointRequirement: 20
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_eyes_of_glouphrie,
    requirements: [TaskEnum.the_grand_tree, TaskEnum.construction_level_5, TaskEnum.magic_level_48],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.fairytale_i_growing_pains,
    requirements: [TaskEnum.lost_city, TaskEnum.nature_spirit, TaskEnum.hitpoints_level_35],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_feud,
    requirements: [TaskEnum.thieving_level_30],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.fight_arena,
    requirements: [TaskEnum.hazeel_cult],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.forgettable_tale,
    requirements: [TaskEnum.the_giant_dwarf, TaskEnum.cooking_level_25, TaskEnum.farming_level_20],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_forsaken_tower,
    requirements: [TaskEnum.client_of_kourend],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_fremennik_trials,
    requirements: [TaskEnum.hitpoints_level_40],
    questPoints: 3,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_garden_of_death,
    requirements: [TaskEnum.getting_ahead, TaskEnum.farming_level_20],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.garden_of_tranquillity,
    requirements: [TaskEnum.farming_level_25, TaskEnum.creature_of_fenkenstrain],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.getting_ahead,
    requirements: [TaskEnum.crafting_level_30, TaskEnum.construction_level_30],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.ghosts_ahoy,
    requirements: [TaskEnum.priest_in_peril, TaskEnum.the_restless_ghost, TaskEnum.agility_level_25, TaskEnum.cooking_level_20],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_giant_dwarf,
    requirements: [TaskEnum.crafting_level_15, TaskEnum.firemaking_level_20, TaskEnum.magic_level_35, TaskEnum.thieving_level_15],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_golem,
    requirements: [TaskEnum.crafting_level_20, TaskEnum.thieving_level_25],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_grand_tree,
    requirements: [TaskEnum.agility_level_25],
    questPoints: 5,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_hand_in_the_sand,
    requirements: [TaskEnum.thieving_level_20, TaskEnum.crafting_level_52],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.holy_grail,
    requirements: [TaskEnum.merlins_crystal, TaskEnum.attack_level_20],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.horror_from_the_deep,
    requirements: [TaskEnum.agility_level_35, TaskEnum.alfred_grimhands_barcrawl],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.icthlarins_little_helper,
    requirements: [TaskEnum.prince_ali_rescue, TaskEnum.gertrudes_cat],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.in_aid_of_the_myreque,
    requirements: [TaskEnum.in_search_of_the_myreque, TaskEnum.agility_level_25, TaskEnum.crafting_level_25, TaskEnum.mining_level_15, TaskEnum.magic_level_10],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.in_search_of_the_myreque,
    requirements: [TaskEnum.nature_spirit, TaskEnum.agility_level_25],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_knights_sword,
    requirements: [TaskEnum.mining_level_10],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.lost_city,
    requirements: [TaskEnum.crafting_level_35, TaskEnum.woodcutting_level_40, TaskEnum.hitpoints_level_30],
    questPoints: 3,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_lost_tribe,
    requirements: [TaskEnum.goblin_diplomacy, TaskEnum.rune_mysteries, TaskEnum.agility_level_15, TaskEnum.thieving_level_15, TaskEnum.mining_level_20],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.making_history,
    requirements: [TaskEnum.priest_in_peril, TaskEnum.the_restless_ghost],
    questPoints: 3,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.merlins_crystal,
    requirements: [TaskEnum.hitpoints_level_25],
    questPoints: 6,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.mountain_daughter,
    requirements: [TaskEnum.agility_level_20],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.nature_spirit,
    requirements: [TaskEnum.priest_in_peril, TaskEnum.the_restless_ghost],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.observatory_quest,
    requirements: [],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.olafs_quest,
    requirements: [TaskEnum.firemaking_level_40, TaskEnum.the_fremennik_trials, TaskEnum.woodcutting_level_52],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.prying_times,
    requirements: [TaskEnum.smithing_level_30, TaskEnum.sailing_level_15, TaskEnum.pandemonium, TaskEnum.the_knights_sword],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_queen_of_thieves,
    requirements: [TaskEnum.client_of_kourend, TaskEnum.thieving_level_20],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.ratcatchers,
    requirements: [TaskEnum.icthlarins_little_helper, TaskEnum.the_giant_dwarf],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.scorpion_catcher,
    requirements: [TaskEnum.prayer_level_35, TaskEnum.alfred_grimhands_barcrawl],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.sea_slug,
    requirements: [TaskEnum.wanted, TaskEnum.firemaking_level_30],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.shades_of_mortton,
    requirements: [TaskEnum.priest_in_peril, TaskEnum.crafting_level_20, TaskEnum.herblore_level_15, TaskEnum.firemaking_level_5],
    questPoints: 3,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.shadow_of_the_storm,
    requirements: [TaskEnum.demon_slayer, TaskEnum.crafting_level_30, TaskEnum.the_golem, TaskEnum.hitpoints_level_30],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.shilo_village,
    requirements: [TaskEnum.jungle_potion, TaskEnum.crafting_level_20, TaskEnum.agility_level_35, TaskEnum.hitpoints_level_25],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_slug_menace,
    requirements: [TaskEnum.sea_slug, TaskEnum.wanted, TaskEnum.crafting_level_30, TaskEnum.runecraft_level_30, TaskEnum.slayer_level_30, TaskEnum.thieving_level_30],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.a_souls_bane,
    requirements: [TaskEnum.hitpoints_level_30],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.spirits_of_the_elid,
    requirements: [TaskEnum.magic_level_35, TaskEnum.ranged_level_40, TaskEnum.mining_level_40, TaskEnum.thieving_level_40],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.tai_bwo_wannai_trio,
    requirements: [TaskEnum.agility_level_15, TaskEnum.cooking_level_30, TaskEnum.fishing_level_5, TaskEnum.jungle_potion],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.a_tail_of_two_cats,
    requirements: [TaskEnum.dragon_slayer_i, TaskEnum.icthlarins_little_helper],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.tale_of_the_righteous,
    requirements: [TaskEnum.client_of_kourend, TaskEnum.strength_level_20, TaskEnum.mining_level_10],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.tears_of_guthix,
    requirements: [TaskEnum.firemaking_level_52, TaskEnum.crafting_level_20, TaskEnum.mining_level_20],
    questPoints: 1,
    questPointRequirement: 43
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.temple_of_ikov,
    requirements: [TaskEnum.enakhras_lament, TaskEnum.thieving_level_44, TaskEnum.ranged_level_40],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.temple_of_the_eye,
    requirements: [TaskEnum.enter_the_abyss, TaskEnum.runecraft_level_10],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_tourist_trap,
    requirements: [TaskEnum.fletching_level_10, TaskEnum.smithing_level_20],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.tree_gnome_village,
    requirements: [TaskEnum.hitpoints_level_35],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.tribal_totem,
    requirements: [TaskEnum.thieving_level_25],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.troll_romance,
    requirements: [TaskEnum.agility_level_30, TaskEnum.troll_stronghold],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.troll_stronghold,
    requirements: [TaskEnum.death_plateau, TaskEnum.agility_level_15],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.vampyre_slayer,
    requirements: [TaskEnum.hitpoints_level_15],
    questPoints: 3,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.wanted,
    requirements: [TaskEnum.recruitment_drive, TaskEnum.the_lost_tribe, TaskEnum.priest_in_peril, TaskEnum.enter_the_abyss],
    questPoints: 1,
    questPointRequirement: 32
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.watchtower,
    requirements: [TaskEnum.magic_level_15, TaskEnum.thieving_level_15, TaskEnum.agility_level_25, TaskEnum.herblore_level_15, TaskEnum.mining_level_40],
    questPoints: 4,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.waterfall_quest,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.what_lies_below,
    requirements: [TaskEnum.rune_mysteries, TaskEnum.runecraft_level_35],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.witchs_house,
    requirements: [TaskEnum.hitpoints_level_20],
    questPoints: 4,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.zogre_flesh_eaters,
    requirements: [TaskEnum.big_chompy_bird_hunting, TaskEnum.jungle_potion, TaskEnum.smithing_level_5, TaskEnum.herblore_level_10, TaskEnum.ranged_level_30, TaskEnum.hitpoints_level_30],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.between_a_rock,
    requirements: [TaskEnum.dwarf_cannon, TaskEnum.fishing_contest, TaskEnum.defence_level_30, TaskEnum.mining_level_40, TaskEnum.smithing_level_52],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.cabin_fever,
    requirements: [TaskEnum.rum_deal, TaskEnum.pirates_treasure, TaskEnum.agility_level_44, TaskEnum.crafting_level_48, TaskEnum.smithing_level_52, TaskEnum.ranged_level_40],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.contact,
    requirements: [TaskEnum.icthlarins_little_helper, TaskEnum.prince_ali_rescue],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.darkness_of_hallowvale,
    requirements: [
      TaskEnum.in_aid_of_the_myreque, TaskEnum.construction_level_5, TaskEnum.mining_level_20, TaskEnum.thieving_level_25, TaskEnum.agility_level_30, TaskEnum.crafting_level_35,
      TaskEnum.magic_level_35, TaskEnum.strength_level_40
    ],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.devious_minds,
    requirements: [
      TaskEnum.the_curse_of_arrav, TaskEnum.smithing_level_66, TaskEnum.runecraft_level_52, TaskEnum.fletching_level_52, TaskEnum.wanted,
      TaskEnum.troll_stronghold, TaskEnum.dorics_quest
    ],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.dragon_slayer_i,
    requirements: [TaskEnum.hitpoints_level_30],
    questPoints: 2,
    questPointRequirement: 32
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.enakhras_lament,
    requirements: [TaskEnum.fight_arena, TaskEnum.crafting_level_52, TaskEnum.firemaking_level_48, TaskEnum.prayer_level_44, TaskEnum.magic_level_40],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.fairytale_ii_cure_a_queen,
    requirements: [TaskEnum.fairytale_i_growing_pains, TaskEnum.thieving_level_40, TaskEnum.farming_level_52, TaskEnum.herblore_level_60],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.family_crest,
    requirements: [TaskEnum.farming_level_40, TaskEnum.smithing_level_40, TaskEnum.magic_level_60, TaskEnum.crafting_level_40],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_fremennik_isles,
    requirements: [TaskEnum.the_fremennik_trials, TaskEnum.construction_level_20],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_great_brain_robbery,
    requirements: [TaskEnum.cabin_fever, TaskEnum.crafting_level_20, TaskEnum.construction_level_30, TaskEnum.prayer_level_52, TaskEnum.creature_of_fenkenstrain, TaskEnum.cabin_fever, TaskEnum.recipe_for_disaster_pirate_pete],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.haunted_mine,
    requirements: [TaskEnum.priest_in_peril, TaskEnum.crafting_level_35, TaskEnum.hitpoints_level_35],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.heroes_quest,
    requirements: [TaskEnum.cooking_level_56, TaskEnum.fishing_level_56, TaskEnum.herblore_level_25, TaskEnum.mining_level_52, TaskEnum.shield_of_arrav, TaskEnum.lost_city, TaskEnum.merlins_crystal, TaskEnum.dragon_slayer_i],
    questPoints: 1,
    questPointRequirement: 55
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.kings_ransom,
    requirements: [TaskEnum.holy_grail, TaskEnum.magic_level_48, TaskEnum.defence_level_66, TaskEnum.black_knights_fortress, TaskEnum.murder_mystery, TaskEnum.one_small_favour],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.a_kingdom_divided,
    requirements: [
      TaskEnum.tale_of_the_righteous, TaskEnum.the_forsaken_tower, TaskEnum.the_ascent_of_arceuus, TaskEnum.the_depths_of_despair, TaskEnum.the_queen_of_thieves,
      TaskEnum.client_of_kourend, TaskEnum.agility_level_56, TaskEnum.thieving_level_52, TaskEnum.woodcutting_level_52, TaskEnum.herblore_level_52, TaskEnum.mining_level_44, TaskEnum.crafting_level_40,
      TaskEnum.magic_level_35
    ],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.land_of_the_goblins,
    requirements: [TaskEnum.another_slice_of_ham, TaskEnum.fishing_contest, TaskEnum.agility_level_40, TaskEnum.fishing_level_40, TaskEnum.thieving_level_48, TaskEnum.herblore_level_48],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.lunar_diplomacy,
    requirements: [
      TaskEnum.the_fremennik_isles, TaskEnum.the_fremennik_trials, TaskEnum.lost_city, TaskEnum.rune_mysteries, TaskEnum.shilo_village, TaskEnum.herblore_level_5, TaskEnum.crafting_level_63,
      TaskEnum.defence_level_40, TaskEnum.firemaking_level_52, TaskEnum.magic_level_66, TaskEnum.mining_level_60, TaskEnum.woodcutting_level_56
    ],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.my_arms_big_adventure,
    requirements: [TaskEnum.eadgars_ruse, TaskEnum.farming_level_30, TaskEnum.woodcutting_level_10, TaskEnum.the_feud, TaskEnum.jungle_potion],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.one_small_favour,
    requirements: [TaskEnum.rune_mysteries, TaskEnum.shilo_village, TaskEnum.agility_level_40, TaskEnum.crafting_level_25, TaskEnum.herblore_level_20, TaskEnum.smithing_level_30],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_path_of_glouphrie,
    requirements: [
      TaskEnum.the_eyes_of_glouphrie, TaskEnum.waterfall_quest, TaskEnum.tree_gnome_village, TaskEnum.strength_level_60, TaskEnum.slayer_level_56,
      TaskEnum.thieving_level_56, TaskEnum.ranged_level_48, TaskEnum.agility_level_48
    ],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.rag_and_bone_man_ii,
    requirements: [
      TaskEnum.rag_and_bone_man_i, TaskEnum.slayer_level_40, TaskEnum.defence_level_20, TaskEnum.skippy_and_the_mogres, TaskEnum.horror_from_the_deep,
      TaskEnum.creature_of_fenkenstrain, TaskEnum.waterfall_quest, TaskEnum.the_fremennik_trials
    ],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.regicide,
    requirements: [TaskEnum.underground_pass, TaskEnum.crafting_level_10, TaskEnum.agility_level_56],
    questPoints: 3,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.roving_elves,
    requirements: [TaskEnum.regicide, TaskEnum.waterfall_quest, TaskEnum.agility_level_56],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.royal_trouble,
    requirements: [TaskEnum.throne_of_miscellania, TaskEnum.agility_level_40, TaskEnum.slayer_level_40],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.rum_deal,
    requirements: [TaskEnum.zogre_flesh_eaters, TaskEnum.priest_in_peril, TaskEnum.crafting_level_44, TaskEnum.farming_level_40, TaskEnum.prayer_level_48, TaskEnum.slayer_level_44, TaskEnum.fishing_level_52],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.a_taste_of_hope,
    requirements: [TaskEnum.darkness_of_hallowvale, TaskEnum.crafting_level_48, TaskEnum.agility_level_48, TaskEnum.attack_level_40, TaskEnum.herblore_level_40, TaskEnum.slayer_level_40],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.throne_of_miscellania,
    requirements: [TaskEnum.heroes_quest, TaskEnum.the_fremennik_trials],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.troubled_tortugans,
    requirements: [TaskEnum.slayer_level_52, TaskEnum.construction_level_48, TaskEnum.sailing_level_48, TaskEnum.hunter_level_48, TaskEnum.woodcutting_level_40, TaskEnum.crafting_level_35, TaskEnum.pandemonium],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.underground_pass,
    requirements: [TaskEnum.biohazard, TaskEnum.ranged_level_25],
    questPoints: 5,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.beneath_cursed_sands,
    requirements: [TaskEnum.contact, TaskEnum.agility_level_63, TaskEnum.crafting_level_56, TaskEnum.firemaking_level_56],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.desert_treasure_i,
    requirements: [
      TaskEnum.defender_of_varrock, TaskEnum.the_dig_site, TaskEnum.temple_of_ikov, TaskEnum.the_tourist_trap, TaskEnum.troll_stronghold, TaskEnum.priest_in_peril,
      TaskEnum.waterfall_quest, TaskEnum.thieving_level_56, TaskEnum.magic_level_52, TaskEnum.firemaking_level_52, TaskEnum.slayer_level_10
    ],
    questPoints: 3,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.dream_mentor,
    requirements: [TaskEnum.lunar_diplomacy, TaskEnum.eadgars_ruse, TaskEnum.herblore_level_52],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_fremennik_exiles,
    requirements: [
      TaskEnum.lunar_diplomacy, TaskEnum.crafting_level_66, TaskEnum.slayer_level_60, TaskEnum.smithing_level_60, TaskEnum.fishing_level_60, TaskEnum.runecraft_level_56,
      TaskEnum.mining_level_60, TaskEnum.the_fremennik_isles, TaskEnum.mountain_daughter, TaskEnum.heroes_quest
    ],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.grim_tales,
    requirements: [TaskEnum.witchs_house, TaskEnum.farming_level_48, TaskEnum.herblore_level_52, TaskEnum.thieving_level_60, TaskEnum.agility_level_60, TaskEnum.woodcutting_level_72],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.legends_quest,
    requirements: [
      TaskEnum.agility_level_52, TaskEnum.crafting_level_52, TaskEnum.herblore_level_48, TaskEnum.magic_level_56, TaskEnum.mining_level_52, TaskEnum.prayer_level_44,
      TaskEnum.smithing_level_52, TaskEnum.strength_level_52, TaskEnum.thieving_level_52, TaskEnum.woodcutting_level_52, TaskEnum.family_crest, TaskEnum.heroes_quest, TaskEnum.shilo_village,
      TaskEnum.underground_pass, TaskEnum.waterfall_quest
    ],
    questPoints: 4,
    questPointRequirement: 107
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.making_friends_with_my_arm,
    requirements: [
      TaskEnum.my_arms_big_adventure, TaskEnum.firemaking_level_66, TaskEnum.mining_level_72, TaskEnum.construction_level_35, TaskEnum.agility_level_69, TaskEnum.swan_song, TaskEnum.cold_war,
      TaskEnum.romeo_and_juliet
    ],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.monkey_madness_i,
    requirements: [TaskEnum.the_path_of_glouphrie, TaskEnum.the_grand_tree, TaskEnum.tree_gnome_village],
    questPoints: 3,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.mournings_end_part_i,
    requirements: [TaskEnum.roving_elves, TaskEnum.ranged_level_60, TaskEnum.thieving_level_52, TaskEnum.big_chompy_bird_hunting, TaskEnum.sheep_herder],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.mournings_end_part_ii,
    requirements: [TaskEnum.mournings_end_part_i],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.a_night_at_the_theatre,
    requirements: [TaskEnum.a_taste_of_hope, TaskEnum.hitpoints_level_75],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.secrets_of_the_north,
    requirements: [
      TaskEnum.his_faithful_servants, TaskEnum.agility_level_69, TaskEnum.thieving_level_66, TaskEnum.hunter_level_56, TaskEnum.making_friends_with_my_arm, TaskEnum.the_generals_shadow,
      TaskEnum.devious_minds, TaskEnum.hazeel_cult
    ],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.sins_of_the_father,
    requirements: [
      TaskEnum.a_taste_of_hope, TaskEnum.vampyre_slayer, TaskEnum.woodcutting_level_63, TaskEnum.fletching_level_60, TaskEnum.crafting_level_56, TaskEnum.agility_level_52,
      TaskEnum.attack_level_52, TaskEnum.slayer_level_52, TaskEnum.magic_level_52
    ],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.swan_song,
    requirements: [
      TaskEnum.magic_level_66, TaskEnum.cooking_level_63, TaskEnum.fishing_level_63, TaskEnum.smithing_level_48, TaskEnum.firemaking_level_44, TaskEnum.crafting_level_40, TaskEnum.one_small_favour,
      TaskEnum.garden_of_tranquillity
    ],
    questPoints: 2,
    questPointRequirement: 100
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.desert_treasure_ii_the_fallen_empire,
    requirements: [
      TaskEnum.secrets_of_the_north, TaskEnum.firemaking_level_75, TaskEnum.magic_level_75, TaskEnum.thieving_level_72, TaskEnum.herblore_level_63, TaskEnum.runecraft_level_60,
      TaskEnum.construction_level_60, TaskEnum.desert_treasure_i, TaskEnum.enakhras_lament, TaskEnum.temple_of_the_eye, TaskEnum.the_garden_of_death, TaskEnum.below_ice_mountain,
      TaskEnum.his_faithful_servants
    ],
    questPoints: 5,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.dragon_slayer_ii,
    requirements: [
      TaskEnum.a_tail_of_two_cats, TaskEnum.magic_level_75, TaskEnum.smithing_level_72, TaskEnum.mining_level_69, TaskEnum.crafting_level_63, TaskEnum.agility_level_60, TaskEnum.thieving_level_60,
      TaskEnum.construction_level_52, TaskEnum.hitpoints_level_52, TaskEnum.legends_quest, TaskEnum.dream_mentor, TaskEnum.a_tail_of_two_cats, TaskEnum.animal_magnetism, TaskEnum.ghosts_ahoy, TaskEnum.bone_voyage,
      TaskEnum.client_of_kourend, TaskEnum.barbarian_training
    ],
    questPoints: 5,
    questPointRequirement: 200
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.monkey_madness_ii,
    requirements: [
      TaskEnum.monkey_madness_i, TaskEnum.enlightened_journey, TaskEnum.the_eyes_of_glouphrie, TaskEnum.recipe_for_disaster_king_awowogei, TaskEnum.troll_stronghold, TaskEnum.watchtower,
      TaskEnum.slayer_level_69, TaskEnum.crafting_level_72, TaskEnum.hunter_level_60, TaskEnum.agility_level_56, TaskEnum.thieving_level_56, TaskEnum.firemaking_level_60
    ],
    questPoints: 4,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.song_of_the_elves,
    requirements: [
      TaskEnum.mournings_end_part_ii, TaskEnum.making_history, TaskEnum.druidic_ritual, TaskEnum.agility_level_72, TaskEnum.construction_level_72, TaskEnum.farming_level_72, TaskEnum.herblore_level_72,
      TaskEnum.hunter_level_72, TaskEnum.farming_level_72, TaskEnum.smithing_level_72, TaskEnum.woodcutting_level_72
    ],
    questPoints: 4,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.while_guthix_sleeps,
    requirements: [
      TaskEnum.desert_treasure_ii_the_fallen_empire, TaskEnum.thieving_level_72, TaskEnum.magic_level_69, TaskEnum.agility_level_66, TaskEnum.farming_level_66, TaskEnum.hunter_level_63,
      TaskEnum.attack_level_66, TaskEnum.strength_level_66, TaskEnum.defender_of_varrock, TaskEnum.the_path_of_glouphrie, TaskEnum.fight_arena, TaskEnum.dream_mentor, TaskEnum.the_hand_in_the_sand,
      TaskEnum.wanted, TaskEnum.temple_of_the_eye, TaskEnum.tears_of_guthix, TaskEnum.nature_spirit, TaskEnum.a_tail_of_two_cats
    ],
    questPoints: 5,
    questPointRequirement: 180
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.recipe_for_disaster_start,
    requirements: [TaskEnum.cooking_level_10, TaskEnum.cooks_assistant],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.recipe_for_disaster_mountain_dwarf,
    requirements: [TaskEnum.recipe_for_disaster_start, TaskEnum.fishing_contest],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.recipe_for_disaster_goblin_generals,
    requirements: [TaskEnum.recipe_for_disaster_start, TaskEnum.goblin_diplomacy],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.recipe_for_disaster_pirate_pete,
    requirements: [TaskEnum.recipe_for_disaster_start, TaskEnum.cooking_level_35],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.recipe_for_disaster_lumbridge_guide,
    requirements: [
      TaskEnum.cooking_level_40, TaskEnum.recipe_for_disaster_start, TaskEnum.big_chompy_bird_hunting, TaskEnum.biohazard, TaskEnum.demon_slayer,
      TaskEnum.murder_mystery, TaskEnum.nature_spirit, TaskEnum.witchs_house
    ],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.recipe_for_disaster_evil_dave,
    requirements: [TaskEnum.gertrudes_cat, TaskEnum.recipe_for_disaster_start, TaskEnum.shadow_of_the_storm],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.recipe_for_disaster_king_awowogei,
    requirements: [TaskEnum.cooking_level_72, TaskEnum.agility_level_48, TaskEnum.monkey_madness_i, TaskEnum.recipe_for_disaster_start],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.recipe_for_disaster_sir_amik_varze,
    requirements: [TaskEnum.legends_quest, TaskEnum.family_crest, TaskEnum.heroes_quest, TaskEnum.recipe_for_disaster_start, TaskEnum.shilo_village, TaskEnum.underground_pass, TaskEnum.waterfall_quest],
    questPoints: 1,
    questPointRequirement: 107
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.recipe_for_disaster_uglogwee,
    requirements: [TaskEnum.cooking_level_44, TaskEnum.firemaking_level_20, TaskEnum.big_chompy_bird_hunting, TaskEnum.recipe_for_disaster_start],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.recipe_for_disaster_finale,
    requirements: [
      TaskEnum.desert_treasure_i, TaskEnum.horror_from_the_deep, TaskEnum.recipe_for_disaster_evil_dave, TaskEnum.recipe_for_disaster_goblin_generals,
      TaskEnum.recipe_for_disaster_lumbridge_guide, TaskEnum.recipe_for_disaster_mountain_dwarf, TaskEnum.recipe_for_disaster_pirate_pete, TaskEnum.recipe_for_disaster_sir_amik_varze,
      TaskEnum.recipe_for_disaster_uglogwee, TaskEnum.recipe_for_disaster_king_awowogei
    ],
    questPoints: 1,
    questPointRequirement: 175
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.alfred_grimhands_barcrawl,
    requirements: [],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.bear_your_soul,
    requirements: [],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.curse_of_the_empty_lord,
    requirements: [TaskEnum.desert_treasure_i, TaskEnum.the_restless_ghost, TaskEnum.thieving_level_56, TaskEnum.prayer_level_35],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.daddys_home,
    requirements: [],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_enchanted_key,
    requirements: [TaskEnum.making_history],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.enter_the_abyss,
    requirements: [TaskEnum.rune_mysteries],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.family_pest,
    requirements: [TaskEnum.family_crest],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_frozen_door,
    requirements: [TaskEnum.agility_level_72, TaskEnum.hitpoints_level_72, TaskEnum.ranged_level_72, TaskEnum.strength_level_72],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_generals_shadow,
    requirements: [TaskEnum.curse_of_the_empty_lord, TaskEnum.fight_arena],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.his_faithful_servants,
    requirements: [TaskEnum.devious_minds, TaskEnum.priest_in_peril],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.hopespears_will,
    requirements: [TaskEnum.the_restless_ghost, TaskEnum.desert_treasure_i, TaskEnum.fairytale_ii_cure_a_queen, TaskEnum.land_of_the_goblins, TaskEnum.prayer_level_52],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.in_search_of_knowledge,
    requirements: [TaskEnum.hitpoints_level_52],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.into_the_tombs,
    requirements: [TaskEnum.beneath_cursed_sands, TaskEnum.hitpoints_level_85],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.lair_of_tarn_razorlor,
    requirements: [TaskEnum.slayer_level_40, TaskEnum.haunted_mine],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.mage_arena_i,
    requirements: [TaskEnum.magic_level_60],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.mage_arena_ii,
    requirements: [TaskEnum.mage_arena_i, TaskEnum.magic_level_75],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.skippy_and_the_mogres,
    requirements: [TaskEnum.cooking_level_20],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.defender_of_varrock,
    requirements: [
      TaskEnum.temple_of_ikov, TaskEnum.smithing_level_56, TaskEnum.hunter_level_52, TaskEnum.shield_of_arrav, TaskEnum.below_ice_mountain, TaskEnum.family_crest,
      TaskEnum.garden_of_tranquillity, TaskEnum.what_lies_below, TaskEnum.romeo_and_juliet, TaskEnum.demon_slayer
    ],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.perilous_moons,
    requirements: [TaskEnum.slayer_level_48, TaskEnum.hunter_level_20, TaskEnum.fishing_level_20, TaskEnum.runecraft_level_20, TaskEnum.construction_level_10, TaskEnum.twilights_promise],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_heart_of_darkness,
    requirements: [
      TaskEnum.twilights_promise, TaskEnum.mining_level_56, TaskEnum.thieving_level_48, TaskEnum.slayer_level_48, TaskEnum.agility_level_48
    ],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.the_curse_of_arrav,
    requirements: [
      TaskEnum.the_generals_shadow, TaskEnum.mining_level_66, TaskEnum.ranged_level_63, TaskEnum.thieving_level_63, TaskEnum.agility_level_63, TaskEnum.strength_level_60,
      TaskEnum.slayer_level_40, TaskEnum.defender_of_varrock, TaskEnum.troll_romance
    ],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.shadows_of_custodia,
    requirements: [TaskEnum.children_of_the_sun, TaskEnum.slayer_level_56, TaskEnum.fishing_level_48, TaskEnum.construction_level_44, TaskEnum.hunter_level_40],
    questPoints: 2,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.final_dawn,
    requirements: [TaskEnum.the_heart_of_darkness, TaskEnum.thieving_level_66, TaskEnum.runecraft_level_52, TaskEnum.fletching_level_52, TaskEnum.perilous_moons],
    questPoints: 3,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.twilights_promise,
    requirements: [TaskEnum.children_of_the_sun],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.children_of_the_sun,
    requirements: [],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.barbarian_training,
    requirements: [
      TaskEnum.fishing_level_56, TaskEnum.firemaking_level_35, TaskEnum.strength_level_35, TaskEnum.agility_level_15,
      TaskEnum.farming_level_15, TaskEnum.crafting_level_15, TaskEnum.smithing_level_5, TaskEnum.herblore_level_5, TaskEnum.tai_bwo_wannai_trio,
      TaskEnum.hitpoints_level_52
    ],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.vale_totems,
    requirements: [TaskEnum.fletching_level_20, TaskEnum.children_of_the_sun],
    questPoints: 0,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.ethically_acquired_antiquities,
    requirements: [TaskEnum.thieving_level_25, TaskEnum.children_of_the_sun, TaskEnum.shield_of_arrav],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.sleeping_giants,
    requirements: [TaskEnum.smithing_level_15],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.scrambled,
    requirements: [TaskEnum.construction_level_40, TaskEnum.cooking_level_40, TaskEnum.smithing_level_35, TaskEnum.children_of_the_sun],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
  {
    type: TypeEnum.quest,
    task: TaskEnum.meat_and_greet,
    requirements: [TaskEnum.children_of_the_sun],
    questPoints: 1,
    questPointRequirement: undefined
  } as Task,
] as Task[]
