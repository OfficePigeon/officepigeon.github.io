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


export default {
	components: {DownloadIcon, Swiper, SwiperSlide, },
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
		<h1 id="GameMods">Game Mods</h1>
		<div class="showcase-group">
			<div class="showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
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
					<h2 style="font-size:23px">Minecraft:<br>Mob Pouches</h2>
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
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Minecraft:<br>Zombie Villager Variants</h2>
					<p class="showcase-description">
						A mod adding extra variants to Minecraft's Zombie Villager monster to match the Drowned and Husk
						versions of the zombie.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/zombie-villager-variants" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/zombie-villager-variants" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
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
					<h2 style="font-size:23px">Minecraft:<br>Entity Item Tooltips</h2>
					<p class="showcase-description">
						A fully client-side mod that adds extra information to the user interface tooltips for items that can be
						used to create new entities in the world.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/entity-item-tooltips" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/entity-item-tooltips" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Entity Item Tooltips -->
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
					<h2 style="font-size:23px">Minecraft:<br>Barter With Babies</h2>
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
					</p>
				</div>
			</div> <!-- Minecraft Barter With Babies -->
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
					<h2 style="font-size:23px">Minecraft:<br>Chiseled Bookshelf Enchanting</h2>
					<p class="showcase-description">
						Allows chiseled bookshelves to act as a source of enchanting power with in-game configurations to control
						the number of books necessary for each bookshelf to power the enchanting table.
					</p>
					<p class="showcase-description">
						<a href="https://modrinth.com/mod/chiseled-bookshelf-enchanting" target="_blank">Available on Modrinth</a>
						<a href="https://modrinth.com/mod/chiseled-bookshelf-enchanting" target="_blank" title="Download on Modrinth">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Minecraft Chiseled Bookshelf Enchanting -->
		</div>
	</div>
</template>
