<script>

/*
function LoadGalleries() {
	MakeGallery("pngtuber-", [
		{
			src: "@/assets/img/commission/pngtuber/pngtuber_Beanie_Birrd.gif",
			alt: ""
		}
	]);
}
*/
// Import CSS
import '@/assets/css/minecraft.css';

// Import Swiper Vue.js (Gallery)
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


export default {
	components: { Swiper, SwiperSlide, },
	setup() {
		return {
			pagination: { clickable: true },
			modules: [Navigation, Pagination],
		};
	},
};
</script>

<template>
	<div style="min-width:700px">
		<h1 id="howto">Commission Me!</h1>
		<ul>
			<li>Read and accept my <a href="#tos">Terms of Service</a> (outlined below)</li>
			<li>Send your inquiry to me by email or via direct messages in the social media of your choice</li>
			<li>
				<span style="vertical-align:middle">Commissions are also available through </span>
				<a style="vertical-align:middle" href="/vgen"><img style="vertical-align:middle;height:30px" src="@/assets/img/commission/VGen%20Logo.png" alt="VGen Logo"></a>
			</li>
			<li>DO NOT send payment prior to acceptance of the commission and a formal invoice</li>
		</ul>
		<hr>
		<h1>YCH Commissions</h1>
		<div class="showcase-group">
			<div class="showcase">
				<div class="commission-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/emote/showcase_dovewich.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/emote/laugh_AngelHunnyBunn.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/emote/bleh_Kriber.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/emote/smash_SintheticSkull.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/emote/wifeless_DajzaDj.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/emote/dead_Beanie_Birrd.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/commission/emote/Emote%20Bases%20by%20Loumon.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Emotes</h2>
					<ul>
						<li>Base price: $25 USD
							<ul>
								<li>+$5-10 USD for animated emotes</li>
								<li>Reduced price available for batch orders</li>
							</ul>
						</li>
						<li>Static emotes delivered as .png files</li>
						<li>Animated emotes delivered as .png and .gif files</li>
						<li>Canvas Size 1200 x 1200px</li>
						<li>Using bases by <a href="https://ko-fi.com/takiimikiku">Loumon (@takiimikiku)</a></li>
					</ul>
				</div>
			</div>
			<div class="showcase">
				<div class="commission-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_dovewich.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_RinaPumpkin.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_Cwstal.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_LilineraCh.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_Beanie_Birrd.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_ArchieBird.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_ych.gif">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Helltaker-Inspired Sprite</h2>
					<ul>
						<li>Base price: $40 USD</li>
						<li>Delivered as
							<ul>
								<li>1 .png file</li>
								<li>1 animated .gif file</li>
							</ul>
						</li>
						<li>Canvas Size 300 x 300px</li>
					</ul>
				</div>
			</div>
			<div class="showcase">
				<div class="commission-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/huggin/huggin_dovewich.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/huggin/huggin_AngelHunnyBunn.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/huggin/huggin_SintheticSkull.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/huggin/huggin_Beanie_Birrd2.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/huggin/huggin_Beanie_Birrd.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/commission/huggin/Huggin%20Duckin%20Base%20by%20mr-cactus.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Huggin' Reactive</h2>
					<ul>
						<li>Base price: $25 USD</li>
						<li>Delivered as
							<ul>
								<li>2 .png files (mouth open/closed)</li>
								<li>1 animated .gif file</li>
							</ul>
						</li>
						<li>Canvas Size 1200 x 1200px</li>
						<li>Using base by <a href="https://ko-fi.com/mrcactus3">Mr-cactus</a></li>
					</ul>
				</div>
			</div>
			<div class="showcase">
				<div class="commission-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/floofy/floofy_dovewich.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/floofy/floofy_mousewich.gif">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/commission/floofy/Floofy%20Bases%20by%20mr-cactus.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Floofy Reactive</h2>
					<ul>
						<li>Base price: $15 USD</li>
						<li>Delivered as
							<ul>
								<li>2 .png files (mouth open/closed)</li>
								<li>1 animated .gif file</li>
							</ul>
						</li>
						<li>Canvas Size 1200 x 1200px</li>
						<li>Using bases by <a href="https://ko-fi.com/mrcactus3">Mr-cactus</a></li>
					</ul>
				</div>
			</div>
		</div>
		<h1>Minecraft Commissions</h1>
		<div class="showcase-group">
			<div class="showcase" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="commission-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_skin/model_dovewich.gltf"
														poster="/3d/minecraft_skin/render_dovewich.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_skin/model_mousewich.gltf"
														poster="/3d/minecraft_skin/render_mousewich.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_skin/model_haven_smp_soleil.gltf"
														poster="/3d/minecraft_skin/render_haven_smp_soleil.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_skin/model_haven_smp_ferris.gltf"
														poster="/3d/minecraft_skin/render_haven_smp_ferris.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_skin/model_ryft_smp_gubby.gltf"
														poster="/3d/minecraft_skin/render_ryft_smp_gubby.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_skin/model_ryft_smp_eldora.gltf"
														poster="/3d/minecraft_skin/render_ryft_smp_eldora.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description minecraft-font">
					<h2>Minecraft Skins</h2>
					<ul>
						<li>Base Price: $20 USD
							<ul>
								<li>+$5 for custom Cape / Elytra</li>
								<li>+$5 for <a href="https://ears.y2k.my/">Ears Mod</a> features</li>
							</ul>
						</li>
						<li>Delivered as .png file</li>
						<li>Canvas Size 64 x 64</li>
						<li>Meant for Minecraft Java Edition*</li>
					</ul>
					<div style="font-size:8pt">
						* Custom Skins in Minecraft Bedrock Edition or Minecraft Education Edition require the "Only Allow Trusted Skins" setting disabled for other players to see them in Multiplayer.
					</div>
				</div>
			</div>
			<div class="showcase" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<div class="commission-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_model/model_pigeon.gltf"
														poster="/3d/minecraft_model/render_pigeon.png"
														alt="A 3D model of a pigeon in the Minecraft style"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_model/model_piranha.gltf"
														poster="/3d/minecraft_model/render_piranha.png"
														alt="A 3D model of a piranha in the Minecraft style"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_model/model_manul.gltf"
														poster="/3d/minecraft_model/render_manul.png"
														alt="A 3D model of a pallas's cat in the Minecraft style"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_model/model_vexune_miku.gltf"
														poster="/3d/minecraft_model/render_vexune_miku.png"
														alt="A 3D model of a vex from Minecraft dressed like Hatsune Miku"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description minecraft-font">
					<h2>Minecraft-Inspired Creature Models</h2>
					<ul>
						<li>Base Price: $20 USD
							<ul>
								<li>+$5-10 USD per animation</li>
								<li>Additional price for higher complexity</li>
							</ul>
						</li>
						<li>Delivered as
							<ul>
								<li>1 .bbmodel file for <a href="https://www.blockbench.net/">Blockbench</a></li>
								<li>1 .png texture file</li>
							</ul>
						</li>
						<li>Canvas and Model Sizes vary</li>
					</ul>
				</div>
			</div>
		</div>
		<h1>Other Commissions</h1>
		<div class="showcase-group">
			<div class="showcase">
				<div class="commission-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide no-save-img" src="@/assets/img/commission/pngtuber/pngtuber_Beanie_Birrd.gif">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>PNGTuber / Reactive Images</h2>
					<ul>
						<li>Price depends on complexity
							<ul>
								<li>Please reach out for a custom quote</li>
							</ul>
						</li>
						<li>Delivered as .png files</li>
						<li>Canvas Size varies</li>
					</ul>
				</div>
			</div>
			<div class="showcase">
				<div class="commission-description">
					<h2>Literally Anything Else</h2>
					<ul>
						<li>Price depends on complexity
							<ul>
								<li>Please reach out for a custom quote</li>
							</ul>
						</li>
						<li>Some examples of my many skills
							<ul>
								<li>Programming</li>
								<li>Game Modding</li>
								<li>Illustration</li>
								<li>3D Modelling</li>
								<li>Video Editing</li>
								<li>Sound Design</li>
								<li>Animation</li>
							</ul>
						</li>
						<li>I might also be able to do work not listed here
							<ul>
								<li>Just ask :)</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<hr id="tos">
		<h1>Terms of Service</h1>
		<p style="text-align:center">Last Revised May 9, 2025</p>
		By commissioning me for any work, you are agreeing to the terms of service outlined below.
		<h2>General</h2>
		<ul>
			<li>I have the right to decline any commission request for any reason.</li>
			<li>Usage of my work with any NFT, AI system, or related future technology is strictly prohibited.</li>
			<li>Requests made with AI-generated references will be strictly denied.</li>
			<li>I will not accept work for clients younger than 18 years of age.</li>
			<li>The terms outlined here may vary for certain commissions, in which case the adjusted terms will be negotiated directly with the client.</li>
		</ul>
		<h2>Payment</h2>
		<ul>
			<li>Payment will be handled through a PayPal invoice in USD or the VGen platform.</li>
			<li>Payment is required in full after discussion and acceptance of the price of the work. Work will not begin prior to payment.</li>
			<li>Pricing examples provided on this website and elsewhere are estimates and the exact price of each commission will be dependent on the complexity of the work and quoted independently.</li>
		</ul>
		<h2>Communication and Delivery</h2>
		<ul>
			<li>Communication will take place primarily through email or the VGen platform.</li>
			<li>Failure to communicate by myself or the client for 7 days will result in a cancellation of the commission.</li>
			<li>Deadlines must be agreed upon prior to the start of a commission. Rush fees may be negotiated for work to be delivered on a strict deadline.</li>
			<li>I will communicate any anticipated delays and negotiate refunds or other applicable remedies with the client in a timely matter.</li>
			<li>The delivery of work will depend on the nature of the commission. Digital files will primarily be delivered through email or the VGen platform.</li>
		</ul>
		<h2>Revisions</h2>
		<ul>
			<li>Revisions to the work may be made at any time throughout the commission process prior to the acceptance of the final product by the client.</li>
			<li>Minor revisions or revisions made due to my own negligence are free of charge. Otherwise, major revisions to the work may incur an additional charge.</li>
			<li>Revision charges will be negotiated with the client prior to the revision(s) being made.</li>
			<li>The distinction between major and minor revisions is made solely at my discretion.</li>
		</ul>
		<h2>Copyright and Usage</h2>
		<ul>
			<li>I retain all rights over any commissioned works.</li>
			<li>Unless otherwise agreed upon, all commissioned work is for personal use only.</li>
			<li>Commercial licenses will require additional payment on top of the price of the commission.</li>
			<li>I reserve the right to present the commissioned work on social media or elsewhere as an example of my work or portfolio piece.</li>
			<li>Clients may inquire about Non-Disclosure Agreements which will require additional payment.</li>
			<li>Clients must provide clear credit to me as the creator of any commissioned work.</li>
			<li>Clients may not resell or redistribute commissioned work without prior authorization.</li>
		</ul>
		<h2>Cancellation and Refunds</h2>
		<ul>
			<li>Once the final product is approved by the client, the work will not be refunded.</li>
			<li>The client may choose to cancel the commission at any time. If work has not begun on the commission, a refund will be issued for the full amount paid by the client.</li>
			<li>I do not issue cancellation refunds for work that has already begun except as outlined in some individual commission agreements.</li>
			<li>I reserve the right to cancel any commission at my own discretion, at which point a partial refund may be issued based on the commission and work completed.</li>
		</ul>
		<h2>Retention of Digital Files</h2>
		<ul>
			<li>Clients may make copies and maintain backups of files. I encourage clients to maintain backups of any files delivered as part of a commission.</li>
			<li>For as long as I have backups of files, I will send them to clients free of charge.</li>
			<li>I will retain backups of all intermediate and delivered files for a minimum period of 6 months, after which I have no obligation to maintain backups or provide new copies to the client.</li>
		</ul>
	</div>
</template>
<style scoped>
.slide {
	width:300px;
	height:300px;
}
</style>
<style>
.swiper {
	width: 100%;
	height: 100%;
}
.swiper-slide {
	justify-content: center;
	align-items: center;
}
.swiper-button-next, .swiper-button-prev {
	color:var(--gray);
}
.swiper-pagination, .swiper-pagination-bullets, .swiper-pagination-horizontal {
	bottom:0!important;
}
.carousel-indicators {
	position: absolute;
	bottom: -48px;
	left: 50%;
	z-index: 15;
	width: 60%;
	padding-left: 0;
	margin-left: -30%;
	text-align: center;
	list-style: none;
}
.swiper-pagination-bullet, .swiper-pagination-bullet-active {
	display: inline-block;
	width: 10px;
	height: 10px;
	margin: 1px;
	text-indent: -999px;
	cursor: pointer;
	background-color: var(--background-color);
	border: 1px solid;
	border-radius: 10px;
	border-color: var(--gray);
	opacity:100%;
}
.swiper-pagination-bullet-active {
	width: 12px;
	height: 12px;
	margin: 0;
	background-color: var(--gray);
}
</style>
