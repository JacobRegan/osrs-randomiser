import { TaskEnum, TypeEnum } from "./enums";
import { Task } from "./tasks";

const baseRequirements = [
  TaskEnum.attack_level_30,
  TaskEnum.hitpoints_level_30,
  TaskEnum.mining_level_30,
  TaskEnum.strength_level_30,
  TaskEnum.agility_level_30,
  TaskEnum.smithing_level_30,
  TaskEnum.defence_level_30,
  TaskEnum.herblore_level_30,
  TaskEnum.fishing_level_30,
  TaskEnum.ranged_level_30,
  TaskEnum.thieving_level_30,
  TaskEnum.cooking_level_30,
  TaskEnum.prayer_level_30,
  TaskEnum.crafting_level_30,
  TaskEnum.firemaking_level_30,
  TaskEnum.magic_level_30,
  TaskEnum.fletching_level_30,
  TaskEnum.woodcutting_level_30,
  TaskEnum.runecraft_level_30,
  TaskEnum.slayer_level_30,
  TaskEnum.farming_level_30,
  TaskEnum.construction_level_30,
  TaskEnum.hunter_level_30,
  TaskEnum.sailing_level_30,
]

export const collectionLogTasks: Task[] = [
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.abyssal_sire_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_90,
      TaskEnum.strength_level_90,
      TaskEnum.defence_level_90,
      TaskEnum.hitpoints_level_90,
      TaskEnum.ranged_level_90,
      TaskEnum.magic_level_90,
      TaskEnum.prayer_level_72
    ],
    repeatable: 6
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.aerial_fishing_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.fishing_level_44,
      TaskEnum.hunter_level_35
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.alchemical_hydra_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_90,
      TaskEnum.strength_level_90,
      TaskEnum.defence_level_90,
      TaskEnum.hitpoints_level_90,
      TaskEnum.ranged_level_90,
      TaskEnum.magic_level_90,
      TaskEnum.prayer_level_72,
      TaskEnum.slayer_level_95
    ],
    repeatable: 8
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.amoxliatl_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_60,
      TaskEnum.strength_level_60,
      TaskEnum.defence_level_60,
      TaskEnum.hitpoints_level_60,
      TaskEnum.ranged_level_60,
      TaskEnum.magic_level_60,
      TaskEnum.prayer_level_44,
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.araxxor_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_85,
      TaskEnum.strength_level_85,
      TaskEnum.defence_level_85,
      TaskEnum.hitpoints_level_85,
      TaskEnum.prayer_level_72,
      TaskEnum.slayer_level_92
    ],
    repeatable: 7
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.barbarian_assault_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.defence_level_60,
      TaskEnum.hitpoints_level_69,
      TaskEnum.ranged_level_69
    ],
    repeatable: 8
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.barrows_chests_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_52,
      TaskEnum.strength_level_52,
      TaskEnum.defence_level_52,
      TaskEnum.hitpoints_level_52,
      TaskEnum.ranged_level_52,
      TaskEnum.magic_level_52,
      TaskEnum.prayer_level_44,
    ],
    repeatable: 18
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.beginner_treasure_trails_collection_log,
    requirements: [
      ...baseRequirements
    ],
    repeatable: 12
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.brimhaven_agility_arena_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.agility_level_52
    ],
    repeatable: 6
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.castle_wars_collection_log,
    requirements: [
      ...baseRequirements
    ],
    repeatable: 29
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.cerberus_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_81,
      TaskEnum.strength_level_81,
      TaskEnum.defence_level_81,
      TaskEnum.hitpoints_level_81,
      TaskEnum.ranged_level_81,
      TaskEnum.magic_level_81,
      TaskEnum.prayer_level_72,
      TaskEnum.slayer_level_91
    ],
    repeatable: 5
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.chambers_of_xeric_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_81,
      TaskEnum.strength_level_81,
      TaskEnum.defence_level_81,
      TaskEnum.hitpoints_level_81,
      TaskEnum.ranged_level_81,
      TaskEnum.magic_level_81,
      TaskEnum.prayer_level_77,
      TaskEnum.farming_level_56,
      TaskEnum.herblore_level_79,
      TaskEnum.construction_level_30,
      TaskEnum.mining_level_60,
      TaskEnum.woodcutting_level_60,
      TaskEnum.thieving_level_60
    ],
    repeatable: 17
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.chaos_fanatic_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.defence_level_72,
      TaskEnum.hitpoints_level_72,
      TaskEnum.ranged_level_75,
      TaskEnum.prayer_level_44
    ],
    repeatable: 2
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.chompy_bird_hunting_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.big_chompy_bird_hunting,
      TaskEnum.zogre_flesh_eaters
    ],
    repeatable: 13
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.colossal_wyrm_agility_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.agility_level_63
    ],
    repeatable: 6
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.commander_zilyana_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_72,
      TaskEnum.strength_level_72,
      TaskEnum.defence_level_72,
      TaskEnum.hitpoints_level_72,
      TaskEnum.ranged_level_72,
      TaskEnum.magic_level_72,
      TaskEnum.prayer_level_72,
      TaskEnum.troll_stronghold,
      TaskEnum.death_plateau,
      TaskEnum.agility_level_72
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.corporeal_beast_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_95,
      TaskEnum.strength_level_95,
      TaskEnum.defence_level_95,
      TaskEnum.hitpoints_level_90,
      TaskEnum.prayer_level_72,
    ],
    repeatable: 5
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.crazy_archaeologist_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_52,
      TaskEnum.hitpoints_level_60,
      TaskEnum.magic_level_75,
      TaskEnum.prayer_level_44
    ],
    repeatable: 2
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.creature_creation_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_52,
      TaskEnum.strength_level_52,
      TaskEnum.defence_level_52,
      TaskEnum.hitpoints_level_52,
      TaskEnum.ranged_level_52,
      TaskEnum.magic_level_52,
      TaskEnum.prayer_level_44,
      TaskEnum.tower_of_life
    ],
    repeatable: 5
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.cyclopes_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_66,
      TaskEnum.strength_level_66,
      TaskEnum.defence_level_66
    ],
    repeatable: 6
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.dagannoth_kings_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_72,
      TaskEnum.strength_level_72,
      TaskEnum.defence_level_72,
      TaskEnum.hitpoints_level_72,
      TaskEnum.ranged_level_72,
      TaskEnum.magic_level_75,
      TaskEnum.prayer_level_72,
      TaskEnum.the_fremennik_trials
    ],
    repeatable: 7
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.deranged_archaeologist_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_52,
      TaskEnum.hitpoints_level_60,
      TaskEnum.magic_level_75,
      TaskEnum.prayer_level_44
    ],
    repeatable: 1
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.doom_of_mokhaiotl_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.hitpoints_level_90,
      TaskEnum.ranged_level_90,
      TaskEnum.defence_level_90,
      TaskEnum.prayer_level_75,
      TaskEnum.agility_level_75,
      TaskEnum.while_guthix_sleeps,
      TaskEnum.a_kingdom_divided,
      TaskEnum.western_hard,
      TaskEnum.final_dawn
    ],
    repeatable: 4
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.duke_sucellus_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_75,
      TaskEnum.strength_level_75,
      TaskEnum.defence_level_75,
      TaskEnum.hitpoints_level_75,
      TaskEnum.magic_level_77,
      TaskEnum.prayer_level_72,
      TaskEnum.agility_level_72,
      TaskEnum.mining_level_72,
      TaskEnum.desert_treasure_ii_the_fallen_empire
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.easy_treasure_trails_collection_log,
    requirements: [
      ...baseRequirements
    ],
    repeatable: 99
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.elder_chaos_druids_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_52,
      TaskEnum.strength_level_52,
      TaskEnum.defence_level_52,
      TaskEnum.hitpoints_level_52,
      TaskEnum.ranged_level_52,
      TaskEnum.magic_level_52,
      TaskEnum.prayer_level_44,
    ],
    repeatable: 2
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.elite_treasure_trails_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_72,
      TaskEnum.strength_level_72,
      TaskEnum.defence_level_72,
      TaskEnum.hitpoints_level_72,
      TaskEnum.ranged_level_72,
      TaskEnum.magic_level_72,
      TaskEnum.prayer_level_44,
    ],
    repeatable: 43
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.fishing_trawler_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.fishing_level_30
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.forestry_collection_log,
    requirements: [
      ...baseRequirements
    ],
    repeatable: 17
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.fortis_colosseum_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_95,
      TaskEnum.strength_level_95,
      TaskEnum.defence_level_95,
      TaskEnum.hitpoints_level_95,
      TaskEnum.ranged_level_95,
      TaskEnum.magic_level_95,
      TaskEnum.prayer_level_85
    ],
    repeatable: 6
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.general_graardor_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_72,
      TaskEnum.strength_level_72,
      TaskEnum.defence_level_72,
      TaskEnum.hitpoints_level_72,
      TaskEnum.prayer_level_44,
      TaskEnum.death_plateau,
      TaskEnum.troll_stronghold
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.giant_mole_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_60,
      TaskEnum.strength_level_60,
      TaskEnum.defence_level_60,
      TaskEnum.hitpoints_level_60,
      TaskEnum.ranged_level_60,
      TaskEnum.magic_level_60,
      TaskEnum.prayer_level_44,
    ],
    repeatable: 2
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.giants_foundry_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.sleeping_giants
    ],
    repeatable: 6
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.gloughs_experiments_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_81,
      TaskEnum.strength_level_81,
      TaskEnum.defence_level_81,
      TaskEnum.hitpoints_level_81,
      TaskEnum.ranged_level_85,
      TaskEnum.magic_level_72,
      TaskEnum.prayer_level_72,
      TaskEnum.monkey_madness_ii
    ],
    repeatable: 4
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.gnome_restaurant_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.the_grand_tree,
      TaskEnum.cooking_level_52
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.grotesque_guardians_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_81,
      TaskEnum.strength_level_81,
      TaskEnum.defence_level_81,
      TaskEnum.hitpoints_level_81,
      TaskEnum.ranged_level_85,
      TaskEnum.prayer_level_72,
      TaskEnum.slayer_level_75
    ],
    repeatable: 5
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.guardians_of_the_rift_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.temple_of_the_eye,
      TaskEnum.runecraft_level_30
    ],
    repeatable: 12
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.hallowed_sepulchre_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.sins_of_the_father,
      TaskEnum.agility_level_72,
      TaskEnum.hitpoints_level_72,
      TaskEnum.thieving_level_66,
      TaskEnum.construction_level_56,
      TaskEnum.prayer_level_56,
      TaskEnum.magic_level_10,
      TaskEnum.ranged_level_63
    ],
    repeatable: 12
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.hard_treasure_trails_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_60,
      TaskEnum.strength_level_60,
      TaskEnum.defence_level_60,
      TaskEnum.hitpoints_level_60,
      TaskEnum.ranged_level_60,
      TaskEnum.magic_level_60,
      TaskEnum.prayer_level_44,
    ],
    repeatable: 100
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.hunter_guild_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.hunter_level_48,
      TaskEnum.children_of_the_sun
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.kril_tsutsaroth_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_72,
      TaskEnum.strength_level_72,
      TaskEnum.defence_level_72,
      TaskEnum.hitpoints_level_72,
      TaskEnum.prayer_level_44,
      TaskEnum.death_plateau,
      TaskEnum.troll_stronghold
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.kalphite_queen_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_90,
      TaskEnum.strength_level_90,
      TaskEnum.defence_level_90,
      TaskEnum.ranged_level_90,
      TaskEnum.hitpoints_level_90,
      TaskEnum.prayer_level_81
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.king_black_dragon_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_81,
      TaskEnum.strength_level_81,
      TaskEnum.defence_level_81,
      TaskEnum.ranged_level_81,
      TaskEnum.hitpoints_level_81,
      TaskEnum.prayer_level_72,
      TaskEnum.dragon_slayer_i
    ],
    repeatable: 1
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.kraken_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.magic_level_75,
      TaskEnum.defence_level_72,
      TaskEnum.hitpoints_level_75,
      TaskEnum.prayer_level_48,
      TaskEnum.slayer_level_87
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.kreearra_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.defence_level_81,
      TaskEnum.ranged_level_81,
      TaskEnum.magic_level_81,
      TaskEnum.hitpoints_level_81,
      TaskEnum.prayer_level_48,
      TaskEnum.death_plateau,
      TaskEnum.troll_stronghold
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.magic_training_arena_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.magic_level_87
    ],
    repeatable: 8
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.mahogany_homes_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.construction_level_52
    ],
    repeatable: 6
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.mastering_mixology_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.herblore_level_60,
      TaskEnum.children_of_the_sun
    ],
    repeatable: 5
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.medium_treasure_trails_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_52,
      TaskEnum.strength_level_52,
      TaskEnum.defence_level_52,
      TaskEnum.ranged_level_52,
      TaskEnum.magic_level_52,
      TaskEnum.hitpoints_level_52,
      TaskEnum.prayer_level_44,
    ],
    repeatable: 86
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.monkey_backpacks_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.agility_level_48,
      TaskEnum.monkey_madness_i
    ],
    repeatable: 4
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.moons_of_peril_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_72,
      TaskEnum.strength_level_72,
      TaskEnum.defence_level_72,
      TaskEnum.hitpoints_level_75,
      TaskEnum.prayer_level_44,
      TaskEnum.cooking_level_52,
      TaskEnum.fishing_level_52,
      TaskEnum.hunter_level_52,
      TaskEnum.herblore_level_52,
      TaskEnum.perilous_moons
    ],
    repeatable: 9
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.motherlode_mine_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.mining_level_60
    ],
    repeatable: 4
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.nex_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_90,
      TaskEnum.strength_level_90,
      TaskEnum.defence_level_90,
      TaskEnum.hitpoints_level_90,
      TaskEnum.ranged_level_90,
      TaskEnum.magic_level_90,
      TaskEnum.prayer_level_72,
      TaskEnum.the_frozen_door
    ],
    repeatable: 6
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.pest_control_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_60,
      TaskEnum.strength_level_60,
      TaskEnum.defence_level_60,
      TaskEnum.hitpoints_level_60,
      TaskEnum.ranged_level_60,
      TaskEnum.magic_level_60,
      TaskEnum.prayer_level_44
    ],
    repeatable: 7
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.phantom_muspah_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.defence_level_75,
      TaskEnum.hitpoints_level_85,
      TaskEnum.ranged_level_85,
      TaskEnum.magic_level_85,
      TaskEnum.prayer_level_75
    ],
    repeatable: 4
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.revenants_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_72,
      TaskEnum.strength_level_72,
      TaskEnum.defence_level_40,
      TaskEnum.hitpoints_level_72,
      TaskEnum.ranged_level_72,
      TaskEnum.prayer_level_44
    ],
    repeatable: 10
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.rogues_den_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.agility_level_52,
      TaskEnum.thieving_level_52
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.rooftop_agility_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.agility_level_52
    ],
    repeatable: 5
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.royal_titans_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_72,
      TaskEnum.strength_level_72,
      TaskEnum.defence_level_72,
      TaskEnum.hitpoints_level_72,
      TaskEnum.ranged_level_72,
      TaskEnum.magic_level_75,
      TaskEnum.prayer_level_44
    ],
    repeatable: 5
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.sarachnis_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_72,
      TaskEnum.strength_level_72,
      TaskEnum.defence_level_72,
      TaskEnum.hitpoints_level_72,
      TaskEnum.ranged_level_72,
      TaskEnum.magic_level_60,
      TaskEnum.prayer_level_44,
      TaskEnum.client_of_kourend
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.scorpia_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.magic_level_81,
      TaskEnum.prayer_level_44
    ],
    repeatable: 2
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.scurrius_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_60,
      TaskEnum.strength_level_60,
      TaskEnum.defence_level_60,
      TaskEnum.hitpoints_level_60,
      TaskEnum.ranged_level_60,
      TaskEnum.magic_level_60,
      TaskEnum.prayer_level_44,
    ],
    repeatable: 1
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.shared_treasure_trails_rewards_collection_log,
    requirements: [
      ...baseRequirements
    ],
    repeatable: 36
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.shayzien_armour_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_60,
      TaskEnum.strength_level_60,
      TaskEnum.defence_level_60,
      TaskEnum.hitpoints_level_60,
      TaskEnum.ranged_level_60,
      TaskEnum.magic_level_60,
      TaskEnum.prayer_level_44,
      TaskEnum.client_of_kourend
    ],
    repeatable: 18
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.shooting_stars_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.mining_level_60
    ],
    repeatable: 1
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.soul_wars_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_60,
      TaskEnum.strength_level_60,
      TaskEnum.defence_level_60,
      TaskEnum.hitpoints_level_60,
      TaskEnum.ranged_level_60,
      TaskEnum.magic_level_60,
      TaskEnum.prayer_level_44,
    ],
    repeatable: 2
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.tempoross_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.fishing_level_40
    ],
    repeatable: 9
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.the_gauntlet_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_85,
      TaskEnum.strength_level_85,
      TaskEnum.defence_level_85,
      TaskEnum.hitpoints_level_85,
      TaskEnum.ranged_level_85,
      TaskEnum.magic_level_85,
      TaskEnum.prayer_level_79,
      TaskEnum.song_of_the_elves
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.the_hueycoatl_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_63,
      TaskEnum.strength_level_63,
      TaskEnum.defence_level_63,
      TaskEnum.hitpoints_level_63,
      TaskEnum.prayer_level_44,
      TaskEnum.children_of_the_sun
    ],
    repeatable: 4
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.the_leviathan_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.defence_level_75,
      TaskEnum.ranged_level_75,
      TaskEnum.hitpoints_level_81,
      TaskEnum.prayer_level_44,
      TaskEnum.desert_treasure_ii_the_fallen_empire
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.the_nightmare_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_85,
      TaskEnum.strength_level_85,
      TaskEnum.defence_level_85,
      TaskEnum.hitpoints_level_85,
      TaskEnum.magic_level_85,
      TaskEnum.prayer_level_72,
      TaskEnum.a_taste_of_hope,
      TaskEnum.priest_in_peril
    ],
    repeatable: 9
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.the_whisperer_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.defence_level_75,
      TaskEnum.magic_level_75,
      TaskEnum.hitpoints_level_81,
      TaskEnum.prayer_level_44,
      TaskEnum.desert_treasure_ii_the_fallen_empire
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.theatre_of_blood_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_92,
      TaskEnum.strength_level_92,
      TaskEnum.defence_level_92,
      TaskEnum.hitpoints_level_92,
      TaskEnum.magic_level_92,
      TaskEnum.ranged_level_92,
      TaskEnum.prayer_level_77,
      TaskEnum.agility_level_72,
      TaskEnum.a_night_at_the_theatre
    ],
    repeatable: 12
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.thermonuclear_smoke_devil_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_90,
      TaskEnum.strength_level_90,
      TaskEnum.defence_level_90,
      TaskEnum.hitpoints_level_90,
      TaskEnum.prayer_level_77,
      TaskEnum.slayer_level_93,
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.tithe_farm_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.farming_level_56,
      TaskEnum.client_of_kourend
    ],
    repeatable: 5
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.tombs_of_amascut_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_92,
      TaskEnum.strength_level_92,
      TaskEnum.defence_level_92,
      TaskEnum.hitpoints_level_92,
      TaskEnum.magic_level_92,
      TaskEnum.ranged_level_92,
      TaskEnum.prayer_level_77,
      TaskEnum.mining_level_44,
      TaskEnum.into_the_tombs,
      TaskEnum.beneath_cursed_sands
    ],
    repeatable: 20
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.tormented_demons_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_75,
      TaskEnum.strength_level_75,
      TaskEnum.defence_level_72,
      TaskEnum.hitpoints_level_75,
      TaskEnum.magic_level_83,
      TaskEnum.prayer_level_77,
      TaskEnum.while_guthix_sleeps,
      TaskEnum.shadow_of_the_storm,
      TaskEnum.a_kingdom_divided
    ],
    repeatable: 2
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.tzhaar_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_63,
      TaskEnum.strength_level_63,
      TaskEnum.defence_level_63,
      TaskEnum.hitpoints_level_63,
      TaskEnum.ranged_level_63,
      TaskEnum.magic_level_63,
      TaskEnum.prayer_level_44,
    ],
    repeatable: 7
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.vale_totems_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.vale_totems,
      TaskEnum.woodcutting_level_52,
      TaskEnum.fletching_level_52
    ],
    repeatable: 1
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.vardorvis_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_81,
      TaskEnum.strength_level_81,
      TaskEnum.defence_level_81,
      TaskEnum.hitpoints_level_81,
      TaskEnum.magic_level_77,
      TaskEnum.prayer_level_72,
      TaskEnum.desert_treasure_ii_the_fallen_empire
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.volcanic_mine_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.mining_level_72
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.vorkath_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.defence_level_81,
      TaskEnum.hitpoints_level_81,
      TaskEnum.ranged_level_85,
      TaskEnum.prayer_level_72,
      TaskEnum.dragon_slayer_ii
    ],
    repeatable: 3
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.wintertodt_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.client_of_kourend,
      TaskEnum.firemaking_level_52
    ],
    repeatable: 6
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.yama_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.attack_level_85,
      TaskEnum.strength_level_85,
      TaskEnum.defence_level_85,
      TaskEnum.hitpoints_level_85,
      TaskEnum.magic_level_85,
      TaskEnum.prayer_level_72,
      TaskEnum.a_kingdom_divided
    ],
    repeatable: 8
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.zalcano_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.song_of_the_elves
    ],
    repeatable: 2
  } as Task,
  {
    type: TypeEnum.collection_log,
    task: TaskEnum.zulrah_collection_log,
    requirements: [
      ...baseRequirements,
      TaskEnum.hitpoints_level_81,
      TaskEnum.magic_level_81,
      TaskEnum.ranged_level_81,
      TaskEnum.prayer_level_48,
      TaskEnum.regicide
    ],
    repeatable: 6
  } as Task,


] as Task[]
