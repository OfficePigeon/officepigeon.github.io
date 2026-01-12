<script>

// Import CSS
import '@/assets/css/minecraft.css';

// Import Swiper Vue.js (Gallery)
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import DownloadIcon from "@/components/icons/DownloadIcon.vue";
import GitHubLogoIcon from "@/components/icons/logos/GitHubLogoIcon.vue";


export default {
	components: {GitHubLogoIcon, DownloadIcon, Swiper, SwiperSlide, },
	setup() {
		return {
			pagination: { clickable: true },
			modules: [Navigation, Pagination],
		};
	},
};
</script>

<template>
	<div style="min-width:700px;margin:auto">
		<h1 id="MinecraftMods" class="minecraft-font">Minecraft Mods</h1>
		<div class="showcase-group">
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of a custom pouch item for Minecraft with the text Mob Pouches" class="slide" src="../assets/img/mods/minecraftpouchesmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft player holding a modded pouch item while looking at a chicken" class="slide" src="../assets/img/mods/minecraftpouchesmod/screenshot_0.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft player holding a modded pouch item while looking at a chicken" class="slide" src="../assets/img/mods/minecraftpouchesmod/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft player holding a modded filled pouch item labeled Pouch of Chicken" class="slide" src="../assets/img/mods/minecraftpouchesmod/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft inventory screen showing a modded filled pouch item labeled Pouch of Chicken" class="slide" src="../assets/img/mods/minecraftpouchesmod/screenshot_3.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Mob Pouches</h2>
					<p class="showcase-description">
						A simple mod enabling players to pick up and carry creatures similar to the equivalent mechanic in the base
						game for the transport of fish. The mod can be flexibly configured to support any subset of the game's
						creatures.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/mob-pouches" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/mob-pouches" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Pouches-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Mob Pouches -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A pair of minecraft zombie villagers modified to look like the drowned and husk monsters with the text Zombie Villager Variants" class="slide" src="../assets/img/mods/minecraftzombievillagervariantsmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pair of minecraft zombie villagers modified to look like the drowned and husk monsters" class="slide" src="../assets/img/mods/minecraftzombievillagervariantsmod/screenshot_0.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft zombie villager modified to look like the drowned monster" class="slide" src="../assets/img/mods/minecraftzombievillagervariantsmod/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft zombie villager modified to look like the husk monster" class="slide" src="../assets/img/mods/minecraftzombievillagervariantsmod/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A set of minecraft zombies and corresponding villagers" class="slide" src="../assets/img/mods/minecraftzombievillagervariantsmod/screenshot_3.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A set of minecraft zombies and corresponding villagers" class="slide" src="../assets/img/mods/minecraftzombievillagervariantsmod/screenshot_4.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A set of minecraft zombies and corresponding villagers" class="slide" src="../assets/img/mods/minecraftzombievillagervariantsmod/screenshot_5.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A set of minecraft zombies and corresponding villagers" class="slide" src="../assets/img/mods/minecraftzombievillagervariantsmod/screenshot_6.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A set of minecraft zombies and corresponding villagers" class="slide" src="../assets/img/mods/minecraftzombievillagervariantsmod/screenshot_7.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Zombie Villager Variants</h2>
					<p class="showcase-description">
						A mod adding extra variants to Minecraft's Zombie Villager monster to match the Drowned and Husk
						versions of the zombie.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/zombie-villager-variants" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/zombie-villager-variants" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Zombie-Villager-Variants-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Zombie Villager Variants -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A bucket of axolotl marked as leucistic with a chat message from the axolotl saying That's me!" class="slide" src="../assets/img/mods/minecraftentitytooltipsmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft player examining a bucket of axolotl marked as leucistic in their inventory" class="slide" src="../assets/img/mods/minecraftentitytooltipsmod/screenshot_0.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft player examining an invisible item frame in their inventory" class="slide" src="../assets/img/mods/minecraftentitytooltipsmod/screenshot_1.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Entity Item Tooltips</h2>
					<p class="showcase-description">
						A fully client-side mod that adds extra information to the user interface tooltips for items that can be
						used to create new entities in the world.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/entity-item-tooltips" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/entity-item-tooltips" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Entity-Tooltips-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Entity Item Tooltips -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of two mushroom chickens and the text Cluckshrooms" class="slide" src="../assets/img/mods/minecraftcluckshroomsmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="Two minecraft mushroom chickens standing in a mushroom field" class="slide" src="../assets/img/mods/minecraftcluckshroomsmod/screenshot_0.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Cluckshrooms</h2>
					<p class="showcase-description">
						Implements the Cluckshroom creature from the Minecraft Earth and Minecraft Dungeons spin-offs in Minecraft.
						These mushroom chickens behave like a balanced blend of the chicken and mooshroom creatures from the base
						game.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/cluckshrooms" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/cluckshrooms" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Cluckshroom-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Cluckshrooms -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of a minecraft chiseled bookshelf with the top decorations and book of an enchanting table and the text Chiseled Bookshelf Enchanting on the side" class="slide" src="../assets/img/mods/minecraftchiseledenchantingmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="An active minecraft enchanting table surrounded by filled chiseled bookshelves" class="slide" src="../assets/img/mods/minecraftchiseledenchantingmod/screenshot_0.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Chiseled Bookshelf Enchanting</h2>
					<p class="showcase-description">
						Allows chiseled bookshelves to act as a source of enchanting power with in-game configurations to control
						the number of books necessary for each bookshelf to power the enchanting table.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/chiseled-bookshelf-enchanting" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/chiseled-bookshelf-enchanting" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Chiseled-Bookshelf-Enchanting-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Chiseled Bookshelf Enchanting -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of three minecraft skeleton skulls with coral growing out of them and the text Sunken Skeletons" class="slide" src="../assets/img/mods/minecraftsunkenskeletonsmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="Three minecraft skeletons with coral growing out of them in a coral reef" class="slide" src="../assets/img/mods/minecraftsunkenskeletonsmod/screenshot_0.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="Two minecraft skeletons with coral growing out of them in a coral reef" class="slide" src="../assets/img/mods/minecraftsunkenskeletonsmod/screenshot_1.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Sunken Skeletons</h2>
					<p class="showcase-description">
						Implements the Sunken Skeleton monsters from the Minecraft Dungeons spin-off in Minecraft. These skeletons
						have configurable spawning conditions and multiple variants.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/sunken-skeletons" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/sunken-skeletons" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Sunken-Skeleton-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Sunken Skeletons -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A close image of a baby piglin inspecting gold with the text Barter With Babies" class="slide" src="../assets/img/mods/minecraftbabybarteringmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft player with gold looking at a baby piglin" class="slide" src="../assets/img/mods/minecraftbabybarteringmod/screenshot_0.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft player holding a gold ingot item while looking at a baby piglin" class="slide" src="../assets/img/mods/minecraftbabybarteringmod/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft player with gold looking at a baby piglin inspecting gold" class="slide" src="../assets/img/mods/minecraftbabybarteringmod/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft player with gold and an iron ingot dropped by a baby piglin running away" class="slide" src="../assets/img/mods/minecraftbabybarteringmod/screenshot_3.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft player with gold looking at string dropped by a baby piglin after bartering" class="slide" src="../assets/img/mods/minecraftbabybarteringmod/screenshot_4.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Barter With Babies</h2>
					<p class="showcase-description">
						Let baby piglins barter a little, just like the grown ups! Baby piglins' bartering is controlled by using a
						configurable loot table system in line with the game's base implementation and bartering behavior for adult
						piglins.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/barter-with-babies" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/barter-with-babies" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Baby-Bartering-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Barter With Babies -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of a minecraft pig covered in mud with a tulip on its head and the text Muddy Pigs" class="slide" src="../assets/img/mods/minecraftmuddypigsmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pen full of minecraft pigs covered in mud" class="slide" src="../assets/img/mods/minecraftmuddypigsmod/screenshot_0.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pink minecraft pig covered in mud with a red tulip on its head" class="slide" src="../assets/img/mods/minecraftmuddypigsmod/pig_temperate.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A brown minecraft pig covered in mud with a pink tulip on its head" class="slide" src="../assets/img/mods/minecraftmuddypigsmod/pig_warm.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A beige minecraft pig covered in mud with an orange tulip on its head" class="slide" src="../assets/img/mods/minecraftmuddypigsmod/pig_cold.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Muddy Pigs</h2>
					<p class="showcase-description">
						Inspired by the Muddy Pig variant from the Minecraft Earth spin-off, this mod extends Minecraft's standard
						pigs with new mechanics for bathing in mud and making a mess.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/muddy-pigs-mod" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/muddy-pigs-mod" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Muddy-Pigs-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Muddy Pigs -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A close image of a honey slime with the text Honey Slimes" class="slide" src="../assets/img/mods/minecrafthoneyslimesmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A set of honey slimes and crystallized honey blocks arranged neatly" class="slide" src="../assets/img/mods/minecrafthoneyslimesmod/screenshot_0.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Honey Slimes</h2>
					<p class="showcase-description">
						Adds a new Honey Slime monster to Minecraft. These slimes behave like a neutral version of those from the
						base game, only targeting poisoned entities and dropping new crystallized honey.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/honey-slimes" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/honey-slimes" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Honey-Slime-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Bouldering Zombies -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An image of a bouldering zombie with the text Bouldering Zombies" class="slide" src="../assets/img/mods/minecraftboulderingzombiesmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A bouldering zombie standing in a field at night" class="slide" src="../assets/img/mods/minecraftboulderingzombiesmod/screenshot_0.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Bouldering Zombies</h2>
					<p class="showcase-description">
						Implements the Bouldering Zombie monster from the Minecraft Earth spin-off game in Minecraft. These zombies
						can climb walls like the spider monsters from the base game.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/bouldering-zombies" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/bouldering-zombies" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Bouldering-Zombie-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Bouldering Zombies -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A close image of a frozen zombie with the text Frozen Zombies" class="slide" src="../assets/img/mods/minecraftfrozenzombiesmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A frozen zombie standing in the snow at night" class="slide" src="../assets/img/mods/minecraftfrozenzombiesmod/screenshot_0.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A frozen zombie standing in the snow at night" class="slide" src="../assets/img/mods/minecraftfrozenzombiesmod/screenshot_1.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Frozen Zombies</h2>
					<p class="showcase-description">
						Implements the Frozen Zombie monster from the Minecraft Dungeons spin-off game in Minecraft. These zombies
						throw snowballs with a slowing effect at players before chasing them down.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/frozen-zombies" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/frozen-zombies" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Frozen-Zombie-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Frozen Zombies -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A close image of a jungle zombie with the text Jungle Zombies" class="slide" src="../assets/img/mods/minecraftjunglezombiesmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A jungle jungle standing in a jungle" class="slide" src="../assets/img/mods/minecraftjunglezombiesmod/screenshot_0.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Jungle Zombies</h2>
					<p class="showcase-description">
						Implements the Jungle Zombie monster from the Minecraft Dungeons spin-off game in Minecraft. These zombies
						have a poisonous attack but they can be trimmed back to the zombies from the base game with a set of shears.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/jungle-zombies" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/jungle-zombies" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Jungle-Zombie-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Jungle Zombies -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An image of a lobber zombie with the text Lobber Zombies" class="slide" src="../assets/img/mods/minecraftlobberzombiesmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A lobber zombie standing in a field at night" class="slide" src="../assets/img/mods/minecraftlobberzombiesmod/screenshot_0.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Lobber Zombies</h2>
					<p class="showcase-description">
						Implements the Lobber Zombie monster from the Minecraft Earth spin-off game in Minecraft. These zombies can
						throw rotten flesh as a ranged attack.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/lobber-zombies" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/lobber-zombies" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Lobber-Zombie-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Lobber Zombies -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of Minecraft's Alex character being struck by lightning with the text Lightning Rod Copper Armor over head" class="slide" src="../assets/img/mods/minecraftlightningrodcopperarmormod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of Minecraft's Steve character and two lightning rods sparkling before a thunder storm" class="slide" src="../assets/img/mods/minecraftlightningrodcopperarmormod/screenshot_0.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Lightning Rod Copper Armor</h2>
					<p class="showcase-description">
						A silly mod increasing the likelihood of entities wearing copper armor of being struck by lightning.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/lightning-rod-copper-armor" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/lightning-rod-copper-armor" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Lightning-Rod-Armor" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Lightning Rod Copper Armor -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A close icon of a Minecraft llama covered in moss with the text Mossy Llamas" class="slide" src="../assets/img/mods/minecraftmossyllamasmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of two Minecraft llamas covered in moss and pale moss respectively" class="slide" src="../assets/img/mods/minecraftmossyllamasmod/screenshot_0.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Mossy Llamas</h2>
					<p class="showcase-description">
						A mod enabling tamed llamas to equip and wear moss and pale moss carpets in addition to wool carpets.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/mossy-llamas" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/mossy-llamas" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://modrinth.com/mod/mossy-llamas" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Mossy Llamas -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of a Minecraft netherite upgrade template glowing with the text Reusable Smithing" class="slide" src="../assets/img/mods/minecraftreusablemithingmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of the Minecraft smithing screen upgrading a diamond chestplate to a netherite chestplate" class="slide" src="../assets/img/mods/minecraftreusablemithingmod/screenshot_0.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of the Minecraft smithing screen after upgrading a diamond chestplate to a netherite chestplate where the template has not been consumed" class="slide" src="../assets/img/mods/minecraftreusablemithingmod/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of the Minecraft smithing screen applying an armor trim to a netherite chestplate" class="slide" src="../assets/img/mods/minecraftreusablemithingmod/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of the Minecraft smithing screen after applying an armor trim to a netherite chestplate where the template has not been consumed" class="slide" src="../assets/img/mods/minecraftreusablemithingmod/screenshot_3.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Reusable Smithing</h2>
					<p class="showcase-description">
						A utility mod adjusting the game's smithing system so that armor trimming and upgrade recipes no longer
						consume the smithing template items as part of the recipe.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/data-driven-locator-bar-hiding" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/data-driven-locator-bar-hiding" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Data-Driven-Locator-Bar-Hiding-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Reusable Smithing -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of Minecraft's Steve character with his head on fire and an open console window with the text /ignite Steve" class="slide" src="../assets/img/mods/minecraftcommandignitemod/cover.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Commands: Ignite & Extinguish</h2>
					<p class="showcase-description">
						A minimalistic mod adding new /ignite and /extinguish console commands to set entities on fire and put them
						out.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/command-ignite" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/command-ignite" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Command-Ignite-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Command: Ignite -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of a glowing Minecraft Chorus Fruit and an open console window with the text /chorus" class="slide" src="../assets/img/mods/minecraftcommandchorusmod/cover.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Command: Chorus</h2>
					<p class="showcase-description">
						A whimsical mod adding a new /chorus console command to randomly teleport entities a short distance.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/command-chorus" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/command-chorus" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Command-Chorus-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Command: Chorus -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of a split screenshot between Minecraft's Steve character on a locator bar and Steve hidden from the bar wearing a carved pumpkin on his head" class="slide" src="../assets/img/mods/minecraftdatadrivenlocatorbarhidingmod/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A split screenshot between Minecraft's Steve character on a locator bar and Steve hidden from the bar wearing a carved pumpkin on his head" class="slide" src="../assets/img/mods/minecraftdatadrivenlocatorbarhidingmod/screenshot_0.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Data Driven Locator Bar Hiding</h2>
					<p class="showcase-description">
						A utility mod enabling the set of items worn by players to hide from the locator bar to be modified by data
						packs, bundled with an example pack removing carved pumpkins from the set.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/data-driven-locator-bar-hiding" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/data-driven-locator-bar-hiding" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Data-Driven-Locator-Bar-Hiding-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Data Driven Locator Bar Hiding -->
		</div>
		<h1 id="Minecraft" class="minecraft-font">Minecraft Data Packs</h1>
		<p style="text-align:center">Data packs are Minecraft mods that do not require changes to the game code.</p>
		<div class="showcase-group">
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A diagram of a minecraft sapling going into a furnace and a dead bush coming out" class="slide" src="../assets/img/mods/minecraftdatapacks/saplingstodeadbushes/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft smelting screen showing a sapling as the input and a dead bush as the output" class="slide" src="../assets/img/mods/minecraftdatapacks/saplingstodeadbushes/screenshot_0.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Saplings to Dead Bushes</h2>
					<p class="showcase-description">
						A simple data pack creating a recipe to make Dead Bushes renewable by smelting Saplings.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/datapack/saplings-to-dead-bushes" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/datapack/saplings-to-dead-bushes" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Saplings-To-Dead-Bushes-Datapack" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Data Pack: Saplings to Dead Bushes -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A diagram of minecraft bones being crafted into a bone block" class="slide" src="../assets/img/mods/minecraftdatapacks/boneblockshortcut/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft crafting screen showing three bones as input and a bone block as the output" class="slide" src="../assets/img/mods/minecraftdatapacks/boneblockshortcut/screenshot_0.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Bone Block Shortcut</h2>
					<p class="showcase-description">
						A simple data pack creating a recipe to make crafting bone blocks from bones faster by skipping the step of
						converting them to bone meal.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/datapack/bone-block-shortcut" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/datapack/bone-block-shortcut" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Bone-Block-Shortcut-Datapack" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Data Pack: Bone Block Shortcut -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of a custom pouch item for Minecraft with a Villager sticking out and the text Pouchable Villagers" class="slide" src="../assets/img/mods/minecraftdatapacks/mobpouchespouchablevillagers/cover.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Mob Pouches: Pouchable Villagers</h2>
					<p class="showcase-description">
						An example data pack for the Mob Pouches mod that enables Villagers to be transported with pouches.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/datapack/mob-pouches-pouchable-villagers" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/datapack/mob-pouches-pouchable-villagers" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://github.com/OfficePigeon/Pouches-Mod" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Data Pack: Mob Pouches - Pouchable Villagers -->
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of a Minecraft's Steve character on a locator bar wearing a carved pumpkin on his head" class="slide" src="../assets/img/mods/minecraftdatapacks/datadrivenlocatorbarhidingshowcarvedpumpkins/cover.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Data Driven Locator Bar Hiding: Show Carved Pumpkins</h2>
					<p class="showcase-description">
						An example data pack for the Data Driven Locator Bar Hiding mod that excludes Carved Pumpkins from the mod's
						tag, enabling players wearing Carved Pumpkins to show up on the locator bar.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/datapack/data-driven-locator-bar-hiding-show-carved-pumpkins" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/datapack/data-driven-locator-bar-hiding-show-carved-pumpkins" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
						and open source
						<a href="https://modrinth.com/datapack/data-driven-locator-bar-hiding-show-carved-pumpkins" target="_blank" title="GitHub">
							<GitHubLogoIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Data Pack: Data Driven Locator Bar Hiding - Show Carved Pumpkins -->
		</div>
	</div>
</template>
