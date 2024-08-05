import { UUID } from "crypto";
import { ObjectivesData } from "./profile-objectives.model";
import { CollectionData } from "./profile-collection.model";

export type ProfileName = "apple" | "banana" | "blueberry" | "coconut" | "cucumber" | "grapes" | "kiwi" | "lemon" | "lime" | "mango" | "orange" | "papaya" | "peach" | "pear" | "pineapple" | "pomegranate" | "raspberry" | "strawberry" | "tomato" | "watermelon" | "zucchini";
export type PrettyProfileName = "Apple" | "Banana" | "Blueberry" | "Coconut" | "Cucumber" | "Grapes" | "Kiwi" | "Lemon" | "Lime" | "Mango" | "Orange" | "Papaya" | "Peach" | "Pear" | "Pineapple" | "Pomegranate" | "Raspberry" | "Strawberry" | "Tomato" | "Watermelon" | "Zucchini";
export type GameMode = "ironman" | "bingo" | "island" | null;
export type ItemTier = "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY" | "MYTHIC" | "SUPREME" | "SPECIAL" | "VERY_SPECIAL";
export type Power = "itchy";

export type UpgradeState = {
  upgrade: string;
  tier: number;
  started_ms: number;
  started_by: string;
  claimed_ms: number;
  claimed_by: string;
  fasttracked: boolean;
};

export type CommunityUpgrades = {
  upgrade_states: UpgradeState[];
  currently_upgrading: Record<string, never> | null;
};

export type RiftData = {
  village_plaza: any;
  wither_cage: any;
  black_lagoon: any;
  dead_cats: any[];
  wizard_tower: any;
  enigma: any[];
  gallery: any[];
  slayer_quest: any[];
  lifetime_purchased_boundaries: any;
  west_village: any;
  wyld_woods: any;
  castle: any;
  access: any;
  dreadfarm: any;
  inventory: any;
};

export type PlayerData = {
  visited_zones: any;
  last_death: number;
  perks: any;
  active_effects: [];
  paused_effects: [];
  temp_stat_buffs: any;
  death_count: 1873;
  disabled_potion_effects: any[];
  achievement_spawned_island_types: any;
  visited_modes: any;
  unlocked_coll_tiers: any;
  crafted_generators: any;
  fishing_treasure_caught: number;
  experience: any;
};

export type GardenPlayerData = {
  copper: number;
};

export type GlacitePlayerData = {
  fossil_dust: number;
  corpses_looted: any;
  mineshafts_entered: number;
};

export type AccessoryBagStorage = {
  tuning: any;
  selected_power: Power;
  unlocked_powers: any[];
  highest_magical_power: number;
  bag_upgrades_purchased: number;
};

export type LevelingData = {
  experience: number;
  completions: any;
  completed: any;
  migrated_completions: boolean;
  completed_tasks: any;
  last_viewed_tasks: any;
  highest_pet_score: number;
  fishing_festival_sharks_killed: number;
  migrated: boolean;
  migrated_completions_2: boolean;
  mining_fiesta_ores_mined: number;
  emblem_unlocks: any;
  claimed_talisman: boolean; // what talisman ?
  bop_bonus: string; // TODO make type for bops
  selected_symbol: string; // TODO make type for level symbols
};

export type ItemData = {
  soulflow: number;
};

export type JacobContestData = {
  medals_inv: any;
  perks: any;
  contests: any;
  talked: boolean;
  unique_brackets: any;
  migration: true;
  personal_bests: any;
};

export type Currencies = {
  coin_purse: number;
  motes_purse: number;
  essence: any;
};

export type PlayerDungeonData = {
  dungeon_types: any;
  player_classes: any;
  dungeon_journal: any;
  dungeons_blah_blah: any;
  selected_dungeon_class: string; // TODO dungeon class type
  daily_runs: any;
  treasures: any;
  dungeon_hub_race_settings: any;
  last_dungeon_run: string; // TODO add type
  secrets: number;
};

export type ProfileData = {
  first_join: number;
  personal_bank_upgrade: number;
  cookie_buff_active: boolean;
};

export type PetsData = {
  autopet: any;
  pet_care: any;
  pets: any;
};

export type NetherIslandPlayerData = {
  quests: any;
  kuudra_completed_tiers: any; // TODO type this
  dojo: any;
  abiphone: any;
  matriarch: any;
  kuudra_party_finder: any;
  mages_reputation: number;
  selected_faction: string; // TODO type this
  barbarians_reputation: number;
  last_minibosses_killed: any;
};

export type ExperimentationData = {
  pairings: any;
  simon: any;
  numbers: any;
  serums_drank: number;
  claims_resets: number;
  claims_resets_timestamp: number;
};

export type MiningData = {
  nodes: any;
  received_free_tier: boolean;
  powder_mithril: number;
  powder_mithril_total: number;
  crystals: any;
  tokens_spent: number;
  experience: number;
  powder_spent_mithril: number;
  retroactive_tier2_token: true;
  selected_pickaxe_ability: string; // TODO type this eg 'mining_speed_boost'
  greater_mines_last_access: number;
  biomes: any;
  powder_gemstone: number;
  powder_gemstone_total: number;
  last_reset: number;
  powder_spent_gemstone: number;
  daily_ores_mined_day_mithril_ore: number;
  daily_ores_mined_mithril_ore: number;
  daily_ores_mined_day_gemstone: number;
  daily_ores_mined_gemstone: number;
  daily_ores_mined_day: number;
  daily_ores_mined: number;
  current_daily_effect: string; // TODO type this eg 'pickaxe_ability_cooldown'
  current_daily_effect_last_changed: number;
  daily_ores_mined_day_glacite: number;
  daily_ores_mined_glacite: number;
  powder_glacite: number;
  powder_glacite_total: number;
};

export type BestiaryData = {
  migrated_stats: boolean;
  migration: boolean;
  kills: any;
  deaths: any;
  milestone: any;
  miscellaneous: any;
};

export type PlayerStats = {
  candy_collected: any;
  races: any;
  pets: any;
  highest_critical_damage: number;
  highest_damage: number;
  kills: any;
  deaths: any;
  items_fished: any;
  sea_creature_kills: number;
  mythos: any;
  gifts: any;
  end_island: any;
  glowing_mushrooms_broken: number;
  rift: any;
  spooky: any;
};

export type ForgeData = {
  forge_processes: any;
};

export type FairySoulData = {
  fairy_exchanges: number;
  total_collected: number;
  unspent_souls: number;
};

export type SlayerData = {
  slayer_quest: any;
  slayer_bosses: any;
};

export type TrophyFishData = {
  rewards: number[];
  total_caught: number;
  lava_horse: number;
  lava_horse_bronze: number;
  gusher: number;
  gusher_bronze: number;
  gusher_silver: number;
  slugfish: number;
  slugfish_bronze: number;
  lava_horse_silver: number;
  blobfish: number;
  blobfish_silver: number;
  blobfish_bronze: number;
  mana_ray: number;
  mana_ray_bronze: number;
  golden_fish: number;
  golden_fish_bronze: number;
  soul_fish: number;
  soul_fish_bronze: number;
  steaming_hot_flounder: number;
  steaming_hot_flounder_bronze: number;
  soul_fish_silver: number;
  lava_horse_gold: number;
  golden_fish_gold: number;
  golden_fish_silver: number;
  skeleton_fish: number;
  skeleton_fish_bronze: number;
  skeleton_fish_silver: number;
  sulphur_skitter: number;
  sulphur_skitter_bronze: number;
  sulphur_skitter_silver: number;
  vanille: number;
  vanille_bronze: number;
  vanille_silver: number;
  mana_ray_silver: number;
  obfuscated_fish_1: number;
  obfuscated_fish_1_bronze: number;
  obfuscated_fish_1_silver: number;
  obfuscated_fish_1_gold: number;
  blobfish_gold: number;
  moldfin: number;
  moldfin_bronze: number;
  steaming_hot_flounder_silver: number;
  flyfish: number;
  flyfish_bronze: number;
  flyfish_silver: number;
  obfuscated_fish_2: number;
  obfuscated_fish_2_bronze: number;
  soul_fish_gold: number;
  mana_ray_gold: number;
  obfuscated_fish_1_diamond: number;
  last_caught: string; // TODO type this eg 'blobfish/silver'
};

export type InventoryData = {
  inv_contents: any;
  ender_chest_contents: any;
  backpack_icons: any;
  bag_contents: any;
  inv_armor: any;
  equipment_contents: any;
  personal_vault_contents: any;
  wardrobe_equipped_slot: number;
  backpack_contents: any;
  sacks_counts: any;
  wardrobe_contents: any;
};

export type SharedInventoryData = {
  candy_inventory_contents: any;
};

export type Member = {
  rift: RiftData;
  player_data: PlayerData;
  events: any;
  garden_player_data: GardenPlayerData;
  glacite_player_data: GlacitePlayerData;
  accessory_bag_storage: AccessoryBagStorage;
  leveling: LevelingData;
  item_data: ItemData;
  jacobs_contest: JacobContestData;
  currencies: Currencies;
  dungeons: PlayerDungeonData;
  profile: ProfileData;
  pets_data: PetsData;
  player_id: UUID;
  nether_island_player_data: NetherIslandPlayerData;
  experimentation: ExperimentationData;
  mining_core: MiningData;
  bestiary: BestiaryData;
  quests: { harp_quest: any; trapper_quest: any };
  player_stats: PlayerStats;
  forge: ForgeData;
  fairy_soul: FairySoulData;
  slayer: SlayerData;
  trophy_fish: TrophyFishData;
  objectives: ObjectivesData;
  inventory: InventoryData;
  shared_inventory: SharedInventoryData;
  collection: CollectionData;
};

export type Transaction = {
  amount: number;
  timestamp: number;
  action: string; // TODO type this eg 'DEPOSIT'
  initiator_name: string; // TODO type this eg "Bank Interest (x2)"
};

export type BankData = {
  balance: number;
  transactions: Transaction[];
};

export type Profile = {
  profile_id: UUID;
  community_upgrades: CommunityUpgrades;
  created_at: number;
  members: Member[];
  game_mode: GameMode;
  banking: BankData;
  cute_name: PrettyProfileName | null;
  selected: boolean | null;
};
