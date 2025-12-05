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
import CopyIcon from "@/components/icons/CopyIcon.vue";
import EmailIcon from "@/components/icons/EmailIcon.vue";
import PresentationIcon from "@/components/icons/PresentationIcon.vue";
import FileIcon from "@/components/icons/FileIcon.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import ComputerIcon from "@/components/icons/ComputerIcon.vue";
import GitHubLogoIcon from "@/components/icons/logos/GitHubLogoIcon.vue";

export default {
	components: {
		GitHubLogoIcon,
		ComputerIcon, FileIcon, PhoneIcon, EmailIcon, CopyIcon, DownloadIcon, PresentationIcon, Swiper, SwiperSlide, },
	methods: {
		ToggleReadMore(baseId, startIndex, endIndex) {
			let item = document.getElementById(baseId + startIndex.toString());
			if (item) {
				let none = item.style.display === 'none';
				for (let i = startIndex; i <= endIndex; i++) {
					item = document.getElementById(baseId + i.toString());
					if (item) item.style.display = none ? 'block' : 'none'
				}
				item = document.getElementById(baseId);
				if (item) item.innerText = none ? 'Read Less' : 'Read More';
			}
		}
	},
	setup() {
		const removeById = (id) => {
			let e = document.getElementById(id);
			if (e) {
				e.remove();
				return true;
			}
			return false;
		}
		const refactorHeaderFooter = () => {
			//removeById("site-header");
			removeById("site-header-home");
			removeById("site-header-directory");
			removeById("site-header-commission");
			removeById("site-header-mods");
			removeById("site-header-nav");

			removeById("site-footer-icons");
			let e = document.getElementById("site-footer-copyright");
			if (e) e.innerHTML = "Copyright &copy" +  new Date().getFullYear().toString() + " Aidan Buffum"
		}
		refactorHeaderFooter();
		setInterval(refactorHeaderFooter, 1000);
		return {
			pagination: { clickable: true },
			modules: [Navigation, Pagination],
		};
	},
};
</script>
<style scoped>
main {
	padding: 0;
}
</style>
<template>
	<div style="min-width:700px;">
		<h1>Portfolio - Aidan Buffum</h1>
		<div style="display: flex;align-items:center;justify-content:center;flex-wrap:wrap;height:36px;line-height:36px;vertical-align:center;">
			<a href="mailto:aabuffum@gmail.com" target="_blank" title="Email">
				<EmailIcon class="social-icon hover-filtered" style="height:36px;width:36px;padding-right:10px;"/>
			</a>
			<a href="mailto:aabuffum@gmail.com" target="_blank" title="Email">aabuffum@gmail.com</a>
			<a href="/pdf/portfolio/Resume.pdf" target="_blank" title="Resume">
				<FileIcon class="social-icon hover-filtered" style="height:36px;width:36px;padding-left:10px;"/>
			</a>
			<a href="/pdf/portfolio/Resume.pdf" target="_blank" title="Resume">Resume</a>
			<a href="tel:+14018718494" target="_blank" title="Phone">
				<PhoneIcon class="social-icon hover-filtered" style="height:36px;width:36px;padding:0 10px;"/>
			</a>
			<a href="tel:+14018718494" target="_blank" title="Phone">+1(401)871-8494 </a>
		</div>
		<h1 id="SeriousGames">Serious Games</h1>
		<div class="showcase-group">
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screenshot of the Now We're Talking! game" class="slide" src="@/assets/img/portfolio/NWT/NowWereTalking_0.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of a Now We're Talking! level introduction screen" class="slide" src="@/assets/img/portfolio/NWT/NowWereTalking_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of the Now We're Talking! episode selection screen" class="slide" src="@/assets/img/portfolio/NWT/NowWereTalking_2.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of the Now We're Talking! character customization screen" class="slide" src="@/assets/img/portfolio/NWT/NowWereTalking_3.png">
						</swiper-slide>
					</swiper>
					<p class="showcase-description showcase-little-text">
						Presented at the <a href="https://seriousplayconf.com/" target="_blank">Serious Play Conference</a>
						<span title="Serious Play Conference Presentation (2021)">
							<a href="/pdf/portfolio/SeriousPlayConf2021.pdf" target="_blank">
								<PresentationIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span>
						and the <a href="https://www.thenarrativesociety.org/" target="_blank">International Conference on Narrative</a>
						and <a href="https://www.mitre.org/news-insights/impact-story/mitres-latest-serious-game-works-level-personal-relationships" target="_blank">featured</a>
						<span title="Article - MITRE’s Latest Serious Game Works to Level Up Personal Relationships (2022)">
							<a href="/pdf/portfolio/MITRE-Article-2022-01-12.pdf" target="_blank">
								<FileIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span>
						by <a href="https://www.mitre.org/" target="_blank">The MITRE Corporation</a>
					</p>
				</div>
				<div class="showcase-description-section">
					<h2>Now We're Talking!</h2>
					<p class="showcase-description">
						A game simulating a two-person interaction with a virtual character representing the player's partner whom
						players interact with across a series of episodes. Each episode features branching dialogues that introduce
						new learning objectives and build upon those from previous episodes.
					</p>
				</div>
			</div> <!-- Now We're Talking! -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screenshot of the Keeping Up With The Smiths game" class="slide" src="@/assets/img/portfolio/KeepingUpWithTheSmiths.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Keeping Up With The Smiths</h2>
					<p class="showcase-description">
						A life-simulation game where the players make financial choices over several in-game years to have the best
						home on their street. Players are presented with typical or file-free options for their taxes. The
						experiment aims to measure whether typical players are more likely to report their taxes accurately with a
						particular option.
					</p>
				</div>
			</div> <!-- Keeping Up With The Smiths -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screenshot of the Loki's Marauders game" class="slide" src="@/assets/img/portfolio/NWT/LokisMarauders_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of a Loki's Marauders tutorial screen" class="slide" src="@/assets/img/portfolio/NWT/LokisMarauders_4.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of a Loki's Marauders tutorial screen" class="slide" src="@/assets/img/portfolio/NWT/LokisMarauders_8.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of a Loki's Marauders event screen" class="slide" src="@/assets/img/portfolio/NWT/LokisMarauders_9.png">
						</swiper-slide>
					</swiper>
					<p class="showcase-description showcase-little-text">
						Presented at the <a href="https://seriousplayconf.com/" target="_blank">Serious Play Conference</a>
						<span title="Serious Play Conference Presentation (2023)">
							<a href="/pdf/portfolio/SeriousPlayConf2023.pdf" target="_blank">
								<PresentationIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span>
					</p>
				</div>
				<div class="showcase-description-section">
					<h2>Loki's Marauders</h2>
					<p class="showcase-description">
						An educational game where players take on the role of one of four monster viking captains. Players learn to
						identify different fallacies and tactics for manipulation as they attempt to sway the other captains while
						staying wary of their fellow monsters' attempts to trick them.
					</p>
				</div>
			</div> <!-- Loki's Marauders -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screenshot of the TimeQuake Escape! game" class="slide" src="@/assets/img/portfolio/nwt/TimeQuake_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of the TimeQuake Escape! introduction screen" class="slide" src="@/assets/img/portfolio/NWT/TimeQuake_2.png">
						</swiper-slide>
					</swiper>
					<p class="showcase-description showcase-little-text">
						Presented at the <a href="https://seriousplayconf.com/" target="_blank">Serious Play Conference</a>
						<span title="Serious Play Conference Presentation (2024)">
							<a href="/pdf/portfolio/SeriousPlayConf2024.pdf" target="_blank">
								<PresentationIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span> and part of
						research submitted for publication in the
						<a href="http://ijpor.oxfordjournals.org/" target="_blank">International Journal of Public Opinion Research</a>
					</p>
				</div>
				<div class="showcase-description-section">
					<h2>TimeQuake Escape!</h2>
					<p class="showcase-description">
						A guided census survey experiment aimed to identify whether a gamified experience with ongoing feedback can
						increase response rates and reporting accuracy from underrepresented populations.
					</p>
					<p class="showcase-description showcase-little-text">
						* This game includes art assets created with Generative Artificial Intelligence systems. I do not and have
						never endorsed the use of AI as a total replacement for human artists and creatives.
					</p>
				</div>
			</div> <!-- TimeQuake Escape! -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screenshot of the workplace violence scenarios game" class="slide" src="@/assets/img/portfolio/NWT/WorkplaceViolence.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Workplace Violence Scenarios</h2>
					<p class="showcase-description">
						A set of interactive simulations for behavioral experimentation. Players are tasked with identifying warning signs
						of potential workplace violence incidents in an experimental environment that aims to measure the user's
						responses and reactivity to different scenarios and behaviors.
					</p>
				</div>
			</div> <!-- Workplace Violence Scenarios -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screenshot of the interview simulation exercise" class="slide" src="@/assets/img/portfolio/NWT/InterviewSimulationExercise.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Interview Simulation Exercise</h2>
					<p class="showcase-description">
						Players interview several candidates for a position and enter into a guided dialogue with their
						colleagues to discuss the candidates, wherein they must identify inappropriate questions to ask candidates
						and educate their colleagues on appropriate interviewing procedures.
					</p>
				</div>
			</div> <!-- Interview Simulation Exercise -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screenshot of the Agile Tactics game" class="slide" src="@/assets/img/portfolio/NWT/AgileTactics.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Agile Tactics</h2>
					<p class="showcase-description">
						A multi-episode interactive training story game allowing users to test their knowledge of DevOps and Agile
						methodologies. Users are given multiple choices in an ongoing dialogue with their boss and colleagues in
						which they must choose the correct responses in order to win their team's trust and deliver the project on
						time.
					</p>
				</div>
			</div> <!-- Agile Tactics -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="The cover design for the Dollar Domination game" class="slide" src="@/assets/img/portfolio/dollardomination/coverSquare.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A photo of the components for the Dollar Domination game" class="slide" src="@/assets/img/portfolio/dollardomination/dollarDomination.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A showcase of the industries in the Dollar Domination game" class="slide" src="@/assets/img/portfolio/dollardomination/industries.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A photo showing games being presented to Games for Change attendees" class="slide" src="@/assets/img/portfolio/dollardomination/gamesforchange.png">
						</swiper-slide>
					</swiper>
					<p class="showcase-description showcase-little-text">
						Presented at the <a href="https://festival.gamesforchange.org/" target="_blank">Games for Change Festival</a>
						and <a href="https://www.wpi.edu/news/imgd-creates-games-change" target="_blank">featured</a>
						<span title="Article - IMGD Creates Games for Change (2017)">
							<a href="/pdf/portfolio/WPI-Article-2017-08-23.pdf" target="_blank">
								<FileIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span>
						by <a href="https://www.wpi.edu/" target="_blank">Worcester Polytechnic Institute</a>
					</p>
				</div>
				<div class="showcase-description-section">
					<h2>Dollar Domination</h2>
					<p class="showcase-description">
						A Monopoly-style board game designed to acknowledge the original theme of Elizabeth Magie's
						<i>The Landlord's Game</i> and draw attention to the dangers of unregulated capitalism. 3-6 players fight
						to control the economy and bankrupt the competition, facing economic inequality throughout the game.
					</p>
				</div>
			</div> <!-- Dollar Domination -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="The cover design for the Robo Race game" class="slide" src="@/assets/img/portfolio/roborace/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A photo of the components for the Robo Race game" class="slide" src="@/assets/img/portfolio/roborace/componentsSpread.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A photo of the Robo Race game board during play" class="slide" src="@/assets/img/portfolio/roborace/robotrace1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A photo of an adult playing the Robo Race game with a young child" class="slide" src="@/assets/img/portfolio/roborace/playSession.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A photo of several adults playing the Robo Race game" class="slide" src="@/assets/img/portfolio/roborace/robotrace2.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Robo Race</h2>
					<p class="showcase-description">
						An educational strategy game designed to teach and reinforce logical and critical thinking
						skills in children aged 5-14. 2-4 players control four robots with secret goal positions, playing cards
						from their hands to advance their robots while setting their opponents back. The game's rules vary by age
						group to keep the game engaging and educational.
					</p>
				</div>
			</div> <!-- Robo Race -->
		</div>
		<h1 id="OtherTechnicalProjects">Other Technical Projects</h1>
		<div class="showcase-group">
			<div class="showcase" style="width:868px">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screenshot of a quilt editor interface with a vibrant pattern on screen" class="slide" src="@/assets/img/portfolio/quiltgen/javascriptEditorInterface.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of a quilt generator with a colorful random pattern on screen" class="slide" src="@/assets/img/portfolio/quiltgen/javaEvolutionInterface.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A generated quilt with bright cool colors" class="slide" src="@/assets/img/portfolio/quiltgen/Cool10.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A generated quilt with bright warm colors" class="slide" src="@/assets/img/portfolio/quiltgen/Warm1000.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Quilt Generation for<br>Computer Science Education</h2>
					<p class="showcase-description">
						As part of the <a href="https://www.code-crafters.org/" target="_blank">Code Crafters</a> project
					</p>
					<p class="showcase-description">
						Two prototype quilt generators and editors aimed to teach computer science to users who are familiar with
						traditional textile crafts but not programming.
					</p>
					<p class="showcase-description">
						The first is an evolution-based generator using Java and
						<a href="https://processing.org/" target="_blank">Processing</a>. This prototype generates a number of quilts as
						parameterized by the user and after a configured number of generations, presents the most fit patterns to
						the user.
					</p>
					<p class="showcase-description">
						The second is a web-based editor using JavaScript and <a href="https://p5js.org/" target="_blank">p5.js</a>. With a more
						code-like interface, this prototype encourages users to edit and define patterns with text in the editor.
						Fabric colors are used analogously to computer variables in a way that may be easier to understand.
					</p>
				</div>
			</div> <!-- Quilt Generation for Computer Science Education -->
			<div class="showcase" style="width:868px">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A split-image comparison between a sparse virtual forest and a colored segmentation map classifying the parts of the forest with different colors" class="slide" src="@/assets/img/portfolio/synthdataforcars/cover.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Synthetic Training Data Generation for Autonomous Vehicle Recognition Systems</h2>
					<p class="showcase-description">
						A framework built on top of the <a href="https://microsoft.github.io/AirSim/" target="_blank">AirSim</a>
						tool for generating broad sets of variable synthetic data for the training of autonomous vehicle systems.
						Data is generated with real-world visual fidelity with automatic variation in environmental weather, camera
						conditions, and uncertain environments in a perfect-information simulation space. All data is automatically
						annotated with temperature, distance, and semantic segmentation information to ease the burden of manual
						labeling and expedite the training of systems relying on camera, radar, and lidar systems for autonomous
						ground navigation.
					</p>
				</div>
			</div> <!-- Synthetic Data Generation for Autonomous Vehicles -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A complex quilt pattern based on a mario level" class="slide" src="@/assets/img/portfolio/marioquilts/standard_quilt_output.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A mario level segmented by each tile with a bright grid" class="slide" src="@/assets/img/portfolio/marioquilts/standard_quilt_reference.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A top and bottom comparison between a generated quilt pattern and a reference mario level" class="slide" src="@/assets/img/portfolio/marioquilts/17.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A top and bottom comparison between a generated quilt pattern and a reference mario level" class="slide" src="@/assets/img/portfolio/marioquilts/13.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A top and bottom comparison between a generated quilt pattern and a reference mario level" class="slide" src="@/assets/img/portfolio/marioquilts/07.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A top and bottom comparison between a generated quilt pattern and a reference mario level" class="slide" src="@/assets/img/portfolio/marioquilts/06.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Mario Level Generator and Quilt Renderer</h2>
					<p class="showcase-description">
						A system for generating playable Mario levels, evaluating their playability and platforming challenge,
						and rendering levels in the standard graphics of Super Mario world and as a semi-optimized quilting
						pattern.
					</p>
				</div>
			</div> <!-- Mario Level Generator and Quilt Renderer -->
			<div class="showcase" style="width:252px">
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Digital Twins for<br>Collision Avoidance</h2>
					<p class="showcase-description">
						A digital twin architecture built on top of the
						<a href="https://microsoft.github.io/AirSim/" target="_blank">AirSim</a> tool for simulating large sets of
						small UAS in real time alongside physical platforms to facilitate training and efficacy evaluation of
						autonomous collision avoidance systems.
					</p>
				</div>
			</div> <!-- Digital Twins for Collision Avoidance -->
			<div class="showcase" style="width:868px">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A photo of a puzzle box with a keypad, control dials, status lights, and a switch" class="slide" src="../assets/img/portfolio/puzzlebox/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A photo of a puzzle box with a keypad, control dials, status lights, and a switch" class="slide" src="@/assets/img/portfolio/puzzlebox/photo_0.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A photo of an open puzzle box with a keypad, control dials, status lights, and a switch" class="slide" src="@/assets/img/portfolio/puzzlebox/photo_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A photo of an open puzzle box with a keypad, control dials, status lights, and a switch" class="slide" src="@/assets/img/portfolio/puzzlebox/photo_2.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Reprogrammable Puzzle Box</h2>
					<p class="showcase-description">
						A prototype tool for <a href="https://www.wpi.edu/" target="_blank">Worcester Polytechnic Institute</a>'s
						annual escape rooms, the reprogrammable puzzle box is built to be solved after receiving a combination of
						keypad inputs and dial turns. Puzzles on the box are designed in multiple stages, the progress of which are
						displayed on lights embedded in the box. Programmers can define the number of puzzle stages required by the
						box before unlocking with over 19,000 possible input combinations, including support for randomized
						combinations for each stage at runtime. The box can be manually locked and unlocked remotely and cheat
						protection is built into the box such that resetting the box will reset progress but will not unlock the
						box.
					</p>
				</div>
			</div> <!-- Reprogrammable Puzzle Box -->
		</div>
		<h1 id="EntertainmentGames">Entertainment Games</h1>
		<div class="showcase-group">
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="The Umbra title screen featuring a dark ball on the ground" class="slide" src="/static_games/umbra/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of one of the puzzles in Umbra" class="slide" src="@/assets/img/portfolio/umbra/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of one of the puzzles in Umbra" class="slide" src="@/assets/img/portfolio/umbra/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of one of the puzzles in Umbra" class="slide" src="@/assets/img/portfolio/umbra/screenshot_3.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of one of the puzzles in Umbra" class="slide" src="@/assets/img/portfolio/umbra/screenshot_4.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Umbra</h2>
					<p class="showcase-description">
						An abstract puzzle game where the player carefully navigates a ball to the goal while avoiding an
						encroaching darkness. Umbra is played only with the arrow keys.
					</p>
					<p class="showcase-description">
						<a href="/static_games/umbra/cover.html" target="_blank">Play in browser</a>
						<a href="/static_games/umbra/cover.html" target="_blank" title="Play in browser">
							<ComputerIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Umbra -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="The Contrast Bounce title screen featuring black and white balls bouncing around" class="slide" src="/static_games/contrastbounce/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of one of the puzzles in Contrast Bounce" class="slide" src="@/assets/img/portfolio/contrastbounce/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of one of the puzzles in Contrast Bounce" class="slide" src="@/assets/img/portfolio/contrastbounce/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of one of the puzzles in Contrast Bounce" class="slide" src="@/assets/img/portfolio/contrastbounce/screenshot_3.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of one of the puzzles in Contrast Bounce" class="slide" src="@/assets/img/portfolio/contrastbounce/screenshot_4.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Contrast Bounce</h2>
					<p class="showcase-description">
						An abstract puzzle game where the player inverts the colors of the map to fire a ball at the goal. Contrast
						Bounce is played only with the space bar and the mouse.
					</p>
					<p class="showcase-description">
						<a href="/static_games/contrastbounce/cover.html" target="_blank">Play in browser</a>
						<a href="/static_games/contrastbounce/cover.html" target="_blank" title="Play in browser">
							<ComputerIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Contrast Bounce -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An abstract screen with the title Batastrophe surrounded by small bats" class="slide" src="@/assets/img/portfolio/batastrophe/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of a bat flying through a house with a score marker for damage caused" class="slide" src="@/assets/img/portfolio/batastrophe/01.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of a hastily armored human character chasing a bat through a house" class="slide" src="@/assets/img/portfolio/batastrophe/02.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A split-screen view of asymmetric gameplay between three human characters and a bat character" class="slide" src="@/assets/img/portfolio/batastrophe/03.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A split-screen view of asymmetric gameplay between three human characters and a bat character" class="slide" src="@/assets/img/portfolio/batastrophe/04.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A split-screen view of asymmetric gameplay between a human character and a bat character who has been stunned" class="slide" src="@/assets/img/portfolio/batastrophe/05.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Batastrophe</h2>
					<p class="showcase-description">
						A split-screen asymmetrical party game. Three players try to remove a rambunctious bat from their home while
						the bat causes mayhem and breaks everything in its wake. Players take turns controlling the bat, competing
						to do the most damage across four rounds.
					</p>

					<p class="showcase-description showcase-little-text">
						Created as a
						<a href="https://www.wpi.edu/project-based-learning/project-based-education/major-qualifying-project" target="_blank">Major Qualifying Project</a>
						<span title="Batastrophe Paper (2020)">
							<a href="/pdf/portfolio/Batastrophe.pdf" target="_blank">
								<FileIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span>
						at <a href="https://www.wpi.edu/" target="_blank">Worcester Polytechnic Institute</a>
					</p>
				</div>
			</div> <!-- Batastrophe -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="The cover of House Party. Several people are standing around a house while one of them spills a drink" class="slide" src="@/assets/img/portfolio/houseparty/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="The game bord of House Party with a timeline and a map of the house" class="slide" src="@/assets/img/portfolio/houseparty/board.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="Several people playing the House Party board game" class="slide" src="@/assets/img/portfolio/houseparty/playSession.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="Several people playing the House Party board game" class="slide" src="@/assets/img/portfolio/houseparty/playSession2.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>House Party</h2>
					<p class="showcase-description">
						A cooperative game where 3-6 players are throwing a house party but it could get very
						dangerous very fast. Players must navigate the house, escort guests, help them sober up, and send the
						rowdy ones home to keep the party under control.
					</p>
					<p class="showcase-description">
						<a href="https://www.thegamecrafter.com/games/house-party2" target="_blank">Available on The Game Crafter</a>
					</p>
					<p class="showcase-description showcase-little-text">
						* This game depicts consumption of alcoholic beneverages.
					</p>
				</div>
			</div> <!-- House Party -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="The cover graphic for ExChange The World by Aidan Buffum and Kyle Trottier" class="slide" src="@/assets/img/portfolio/exchangetheworld/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A gameplay screenshot of a soccer [football] ball highlighted while swinging in a tire swing" class="slide" src="@/assets/img/portfolio/exchangetheworld/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A gameplay screenshot of miscellaneous objects floating in a pool" class="slide" src="@/assets/img/portfolio/exchangetheworld/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A gameplay screenshot of a highlighted dog teleported into a tree by the player" class="slide" src="@/assets/img/portfolio/exchangetheworld/screenshot_3.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A gameplay screenshot of a highlighted squirrel in a tree with a picnic table precariously stuck on another branch" class="slide" src="@/assets/img/portfolio/exchangetheworld/screenshot_4.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>ExChange The World</h2>
					<p class="showcase-description">
						A physics-based puzzle game in which the player must solve a variety of everyday problems by swapping the
						locations of objects in the world with a special gun. Though some objects may only be swapped with others of
						the same kind, every object dynamically influences its surroundings when swapped.
					</p>
				</div>
			</div> <!-- ExChange The World -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A title graphic of earth being orbited by the moon, a billiards ball, and a soccer [football] ball" class="slide" src="@/assets/img/portfolio/littleworlds/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A gameplay screenshot of earth rolling through a small debris field in space with household objects in orbit" class="slide" src="@/assets/img/portfolio/littleworlds/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A gameplay screenshot of mars rolling through a small debris field in space with household objects in orbit" class="slide" src="@/assets/img/portfolio/littleworlds/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A gameplay screenshot of pluto rolling through a small debris field in space with household objects in orbit" class="slide" src="@/assets/img/portfolio/littleworlds/screenshot_3.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Little Worlds</h2>
					<p class="showcase-description">
						A competitive party game where 2-4 players race to build the largest celestial body they can. With
						Katamari-inspired rolling, players grow and shrink by pulling space rubble into their planets and stealing
						moons from their opponents' orbits.
					</p>
					<p class="showcase-description">
						<a href="https://aidanbuffum.itch.io/little-worlds" target="_blank">Available on itch.io</a>
						<a href="https://aidanbuffum.itch.io/little-worlds" target="_blank" title="Download on itch.io">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Little Worlds -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="The I Dig It title screen" class="slide" src="@/assets/img/portfolio/idigit/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="The main menu for I Dig It with play instructions" class="slide" src="@/assets/img/portfolio/idigit/screenshot_title.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="Two simple blob game characters digging holes in a blocky field" class="slide" src="@/assets/img/portfolio/idigit/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="An end screen announcing a red blob character as the winner" class="slide" src="@/assets/img/portfolio/idigit/screenshot_winner.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A photo of two people playing I Dig It on a large screen with a smiling bystander" class="slide" src="@/assets/img/portfolio/idigit/WPIShowfest_Spring2019.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>I Dig It</h2>
					<p class="showcase-description">
						A fast-paced, local multiplayer, competitive digging game. 2-4 Players must quickly dig holes to drop their
						opponents into the abyss and be the last one standing.
					</p>
					<p class="showcase-description">
						<a href="https://aidanbuffum.itch.io/i-dig-it" target="_blank">Available on itch.io</a>
						<a href="https://aidanbuffum.itch.io/i-dig-it" target="_blank" title="Download on itch.io">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
					<p class="showcase-description showcase-little-text">
						* Controllers are required to play this game.
					</p>
				</div>
			</div> <!-- I Dig It -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A pixelated wizard sitting in grass with the text Wizards vs Robots" class="slide" src="@/assets/img/portfolio/wizardsvsrobots/titleSquare.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pixelated wizard shooting a fire ball at a robot" class="slide" src="@/assets/img/portfolio/wizardsvsrobots/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pixelated wizard in an icy cave with a red orb" class="slide" src="@/assets/img/portfolio/wizardsvsrobots/screenshot_4.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pixelated wizard in the clouds surrounded by a ring of lightning" class="slide" src="@/assets/img/portfolio/wizardsvsrobots/screenshot_5.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pixelated wizard fighting many robots in a volcano" class="slide" src="@/assets/img/portfolio/wizardsvsrobots/screenshot_8.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Wizards vs. Robots</h2>
					<p class="showcase-description">
						An action platformer game about a wizard destroying robots. The player can switch between 3 different
						spells, unlocking different spells based on the path they take, each with their own effects and advantages
						to fight the evil robots in their way.
					</p>
					<p class="showcase-description">
						<a href="https://aidanbuffum.itch.io/wizards-vs-robots" target="_blank">Available on itch.io</a>
						<a href="https://aidanbuffum.itch.io/wizards-vs-robots" target="_blank" title="Download on itch.io">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Wizards vs. Robots -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A title screen with a smiling barista and the text Joe By Aidan Buffum" class="slide" src="@/assets/img/portfolio/joe/titleSquare.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A gameplay screenshot of a character standing on grass" class="slide" src="@/assets/img/portfolio/joe/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="An awkward dialogue screen with only the letter K." class="slide" src="@/assets/img/portfolio/joe/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pithy dialogue screen about coffee preferences" class="slide" src="@/assets/img/portfolio/joe/screenshot_3.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A dialogue screen about a fountain and town planning" class="slide" src="@/assets/img/portfolio/joe/screenshot_4.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Joe</h2>
					<p class="showcase-description">
						A short comedy role playing game with nothing out of the ordinary. You play as Joe A. Verage. Outside your
						day-job as a barista, you're just an average joe. Everybody in town knows you. Your boss likes your hard
						work. You have a face. Grab some coffee. Have some fun!
					</p>
					<p class="showcase-description">
						<a href="https://aidanbuffum.itch.io/joe" target="_blank">Available on itch.io</a>
						<a href="https://aidanbuffum.itch.io/joe" target="_blank" title="Download on itch.io">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Joe -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screaming cartoon shark and the text Take A Breather By Aidan Buffum" class="slide" src="@/assets/img/portfolio/takeabreather/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A shark flopping down a hill with water bottles raining down around it" class="slide" src="@/assets/img/portfolio/takeabreather/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A stingray in a top hat on a crosswalk" class="slide" src="@/assets/img/portfolio/takeabreather/screenshot_2.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Take A Breather</h2>
					<p class="showcase-description">
						A slapstick puzzle game in which the player controls escaped animals from the aquarium trying to get back to
						the ocean. With QWOP-style gameplay, players control each bone of the animal independently. As a true fish
						out of water, players will have to seek out puddles and other sources of hydration to stop and Take a Breather.
					</p>
					<p class="showcase-description showcase-little-text">
						<a href="https://aidanbuffum.itch.io/take-a-breather" target="_blank">Early demo build available on itch.io</a>
						<a href="https://aidanbuffum.itch.io/take-a-breather" target="_blank" title="Download on itch.io">
							<DownloadIcon class="filtered showcase-little-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Take A Breather -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A title screen with the text Murder Bee Wrote" class="slide" src="@/assets/img/portfolio/murderbeewrote/titleSquare.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="An angry bee running on two legs over grass" class="slide" src="@/assets/img/portfolio/murderbeewrote/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="An angry bee running on two legs over grass" class="slide" src="@/assets/img/portfolio/murderbeewrote/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="An angry bee running on two legs over grass" class="slide" src="@/assets/img/portfolio/murderbeewrote/screenshot_3.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A Game Over screen with the text you done been stung" class="slide" src="@/assets/img/portfolio/murderbeewrote/screenshot_4.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Murder Bee Wrote</h2>
					<p class="showcase-description">
						An infinite platform running game where the player controls a murderer who has switched places with a
						bumblebee. The player must sate their bloodlust by destroying the bees all around them. Punch bees! Impale
						them with the stingers of their fallen! Kill as many bees as possible to earn the ultimate high score!
					</p>
					<p class="showcase-description">
						<a href="https://erikcerini.itch.io/murder-bee-wrote" target="_blank">Available on itch.io</a>
						<a href="https://erikcerini.itch.io/murder-bee-wrote" target="_blank" title="Download on itch.io">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Murder Bee Wrote -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A title screen with a crab and bright text hyping its dancing ability" class="slide" src="@/assets/img/portfolio/crabdabrevolution/titleSquare.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A crab-themed rhythm game" class="slide" src="@/assets/img/portfolio/crabdabrevolution/gameplay.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A loss screen with a distraught crab and bright messages shaming the player" class="slide" src="@/assets/img/portfolio/crabdabrevolution/loss_screen.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2>Crab-Dab Revolution</h2>
					<p class="showcase-description">
						A nonsensical parody rhythm game about crabs dabbing and dancing to absurd beats. The game features
						hand-animated dancing crabs, a fearsome lobster boss, and a single meme song manually and lovingly
						calibrated for an almost-completable game.
					</p>
				</div>
			</div> <!-- Crab-Dab Revolution -->
		</div>
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
					<h2 style="font-size:23px">Minecraft:<br>Cluckshrooms</h2>
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
					<h2 style="font-size:23px">Minecraft:<br>Sunken Skeletons</h2>
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
					<h2 style="font-size:23px">Minecraft:<br>Muddy Pigs</h2>
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
					<h2 style="font-size:23px">Minecraft:<br>Honey Slimes</h2>
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
					<h2 style="font-size:23px">Minecraft:<br>Bouldering Zombies</h2>
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
					<h2 style="font-size:23px">Minecraft:<br>Frozen Zombies</h2>
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
					<h2 style="font-size:23px">Minecraft:<br>Jungle Zombies</h2>
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
					<h2 style="font-size:23px">Minecraft:<br>Lobber Zombies</h2>
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
							<img alt="An icon of Minecraft's Steve character with his head on fire and an open console window with the text /ignite Steve" class="slide" src="../assets/img/mods/minecraftcommandignitemod/cover.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Minecraft:<br>Commands: Ignite & Extinguish</h2>
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
					<h2 style="font-size:23px">Minecraft:<br>Command: Chorus</h2>
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
							<img alt="A diagram of a minecraft sapling going into a furnace and a dead bush coming out" class="slide" src="../assets/img/mods/minecraftdatapacks/saplingstodeadbushes/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A minecraft smelting screen showing a sapling as the input and a dead bush as the output" class="slide" src="../assets/img/mods/minecraftdatapacks/saplingstodeadbushes/screenshot_0.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="showcase-description-section">
					<h2 style="font-size:23px">Minecraft:<br>Saplings to Dead Bushes</h2>
					<p class="showcase-description">
						A simple data pack creating a recipe to make Dead Bushes renewable by smelting Saplings.
					</p>
					<p class="showcase-description showcase-little-text">
						* Data packs are Minecraft mods that do not require changes to the game code.
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
		</div>
		<h1 id="Artwork">Artwork</h1>
		<div class="showcase-group">
			<div class="art-showcase">
				<h2>Content-Creator Social Media Emotes</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Illustration</div>
					<div class="showcase-tag">Animation</div>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/emote/showcase_dovewich.webp">
								<source type="image/gif" srcset="@/assets/img/art/emote/showcase_dovewich.gif">
								<img alt="A grid of cartoon emotes of the dovewich vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/showcase_dovewich.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/emote/showcase_Venrir.webp">
								<source type="image/gif" srcset="@/assets/img/art/emote/showcase_Venrir.gif">
								<img alt="A pair of cartoon emotes of the Venrir vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/showcase_Venrir.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/emote/showcase_SinnaVT.webp">
								<source type="image/gif" srcset="@/assets/img/art/emote/showcase_SinnaVT.gif">
								<img alt="A pair of cartoon emotes of the SinnaVT vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/showcase_SinnaVT.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<img alt="A cartoon emote of the AngelHunnyBunn vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/laugh_AngelHunnyBunn.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A cartoon emote of the Kriber vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/bleh_Kriber.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A cartoon emote of the SintheticSkull vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/smash_SintheticSkull.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A cartoon emote of the DajzaDj vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/wifeless_DajzaDj.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A cartoon emote of the Beanie_Birrd vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/dead_Beanie_Birrd.png">
						</swiper-slide>
					</swiper>
				</div>
			</div> <!-- Content-Creator Social Media Emotes -->
			<div class="art-showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<h2 style="font-size:20px">Minecraft-Inspired<br>3D Creature Models</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">3D Modeling</div>
					<div class="showcase-tag">Pixel Art</div>
					<div class="showcase-tag">Media-Inspired</div>
				</div>
				<div class="showcase-gallery">
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
														src="/3d/minecraft_model/model_xstraycat_posed.gltf"
														poster="/3d/minecraft_model/render_xstraycat.png"
														alt="A 3D model of a black cat with gold earrings and a large bow in the Minecraft style"
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
			</div> <!-- Minecraft-Inspired 3D Creature Models -->
			<div class="art-showcase">
				<h2>Helltaker-Inspired Dancing Sprites</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Illustration</div>
					<div class="showcase-tag">Animation</div>
					<div class="showcase-tag">Media-Inspired</div>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/helltaker/helltaker_dovewich.webp">
								<source type="image/gif" srcset="@/assets/img/art/helltaker/helltaker_dovewich.gif">
								<img alt="A helltaker dancing animation of the dovewich vtuber character" class="slide no-save-img" src="@/assets/img/art/helltaker/helltaker_dovewich.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/helltaker/helltaker_RinaPumpkin.webp">
								<source type="image/gif" srcset="@/assets/img/art/helltaker/helltaker_RinaPumpkin.gif">
								<img alt="A helltaker dancing animation of the RinaPumpkin vtuber character" class="slide no-save-img" src="@/assets/img/art/helltaker/helltaker_RinaPumpkin.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/helltaker/helltaker_Cwstal.webp">
								<source type="image/gif" srcset="@/assets/img/art/helltaker/helltaker_Cwstal.gif">
								<img alt="A helltaker dancing animation of the Cwstal vtuber character" class="slide no-save-img" src="@/assets/img/art/helltaker/helltaker_Cwstal.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/helltaker/helltaker_LilineraCh.webp">
								<source type="image/gif" srcset="@/assets/img/art/helltaker/helltaker_LilineraCh.gif">
								<img alt="A helltaker dancing animation of the LilineraCh vtuber character" class="slide no-save-img" src="@/assets/img/art/helltaker/helltaker_LilineraCh.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/helltaker/helltaker_Beanie_Birrd.webp">
								<source type="image/gif" srcset="@/assets/img/art/helltaker/helltaker_Beanie_Birrd.gif">
								<img alt="A helltaker dancing animation of the Beanie_Birrd vtuber character" class="slide no-save-img" src="@/assets/img/art/helltaker/helltaker_Beanie_Birrd.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/helltaker/helltaker_ArchieBird.webp">
								<source type="image/gif" srcset="@/assets/img/art/helltaker/helltaker_ArchieBird.gif">
								<img alt="A helltaker dancing animation of the ArchieBird vtuber character" class="slide no-save-img" src="@/assets/img/art/helltaker/helltaker_ArchieBird.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/helltaker/helltaker_ych.webp">
								<source type="image/gif" srcset="@/assets/img/art/helltaker/helltaker_ych.gif">
								<img alt="A helltaker dancing animation of a generic gray character" class="slide no-save-img" src="@/assets/img/art/helltaker/helltaker_ych.png">
							</picture>
						</swiper-slide>
					</swiper>
				</div>
			</div> <!-- Helltaker-Inspired Dancing Sprites -->
			<div class="art-showcase minecraft-font" style="background-image:var(--minecraft-bg);background-size:64px;image-rendering:pixelated;">
				<h2>Minecraft Skins</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Pixel Art</div>
					<div class="showcase-tag">Media-Inspired</div>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<model-viewer class="slide"
														alt="A minecraft skin of the dovewich vtuber character"
														src="/3d/minecraft_skin/model_dovewich.gltf"
														poster="/3d/minecraft_skin/render_dovewich.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														alt="A minecraft skin of the mousewich vtuber character"
														src="/3d/minecraft_skin/model_mousewich.gltf"
														poster="/3d/minecraft_skin/render_mousewich.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														alt="A minecraft skin of a cow girl with a chocolate milk theme"
														src="/3d/minecraft_skin/model_beanie_birrd_chocolate_milk.gltf"
														poster="/3d/minecraft_skin/render_beanie_birrd_chocolate_milk.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														alt="A minecraft skin of a cow girl with a strawberry milk theme"
														src="/3d/minecraft_skin/model_beanie_birrd_strawberry_milk.gltf"
														poster="/3d/minecraft_skin/render_beanie_birrd_strawberry_milk.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														alt="A minecraft skin of a girl with purple hair in a torn dark cloak"
														src="/3d/minecraft_skin/model_xstraycat.gltf"
														poster="/3d/minecraft_skin/render_xstraycat.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														alt="A minecraft skin of the TyranoMaximum vtuber character"
														src="/3d/minecraft_skin/model_tyranomaximum.gltf"
														poster="/3d/minecraft_skin/render_tyranomaximum.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														alt="A minecraft skin of a blue character with hair buns and a dotted outfit"
														src="/3d/minecraft_skin/model_haven_smp_soleil.gltf"
														poster="/3d/minecraft_skin/render_haven_smp_soleil.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														alt="A minecraft skin of a scarred red character in circus attire"
														src="/3d/minecraft_skin/model_haven_smp_ferris.gltf"
														poster="/3d/minecraft_skin/render_haven_smp_ferris.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														alt="A minecraft skin of a humanoid warden character"
														src="/3d/minecraft_skin/model_ryft_smp_gubby.gltf"
														poster="/3d/minecraft_skin/render_ryft_smp_gubby.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														alt="A minecraft skin of a humanoid ancient guardian character"
														src="/3d/minecraft_skin/model_ryft_smp_eldora.gltf"
														poster="/3d/minecraft_skin/render_ryft_smp_eldora.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
					</swiper>
				</div>
			</div> <!-- Minecraft Skins -->
			<div class="art-showcase">
				<h2 style="font-size:20px">3D Character Models</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">3D Modeling</div>
					<div class="showcase-tag">Media-Inspired</div>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/misc_model/model_prince.gltf"
														poster="/3d/misc_model/model_prince.png"
														alt="A 3D model of the Prince character from the Katamari series"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
					</swiper>
				</div>
			</div> <!-- 3D Character Models -->
			<div class="art-showcase">
				<h2 style="font-size:20px">Animal Crossing-Inspired<br>Villager Model</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">3D Modeling</div>
					<div class="showcase-tag">Media-Inspired</div>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/misc_model/model_animal_crossing_pigeon.glb"
														poster="/3d/misc_model/model_animal_crossing_pigeon.png"
														alt="A 3D model of a pigeon villager in the Animal Crossing style"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
					</swiper>
				</div>
			</div> <!-- Animal Crossing-Inspired Villager Model -->
			<div class="art-showcase">
				<h2>Character Talk Sprites</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Illustration</div>
					<div class="showcase-tag">Animation</div>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/huggin/huggin_dovewich.webp">
								<source type="image/gif" srcset="@/assets/img/art/huggin/huggin_dovewich.gif">
								<img alt="A cartoon drawing of the dovewich vtuber character hugging a pigeon" class="slide no-save-img" src="@/assets/img/art/huggin/huggin_dovewich.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/huggin/huggin_AngelHunnyBunn.webp">
								<source type="image/gif" srcset="@/assets/img/art/huggin/huggin_AngelHunnyBunn.gif">
								<img alt="A cartoon drawing of the AngelHunnyBunn vtuber character hugging a pink bat" class="slide no-save-img" src="@/assets/img/art/huggin/huggin_AngelHunnyBunn.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/huggin/huggin_SintheticSkull.webp">
								<source type="image/gif" srcset="@/assets/img/art/huggin/huggin_SintheticSkull.gif">
								<img alt="A cartoon drawing of the SintheticSkull vtuber character hugging a wolf" class="slide no-save-img" src="@/assets/img/art/huggin/huggin_SintheticSkull.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/huggin/huggin_Beanie_Birrd2.webp">
								<source type="image/gif" srcset="@/assets/img/art/huggin/huggin_Beanie_Birrd2.gif">
								<img alt="A cartoon drawing of the BeanieAviyum vtuber character hugging a cow" class="slide no-save-img" src="@/assets/img/art/huggin/huggin_Beanie_Birrd2.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/huggin/huggin_Beanie_Birrd.webp">
								<source type="image/gif" srcset="@/assets/img/art/huggin/huggin_Beanie_Birrd.gif">
								<img alt="A cartoon drawing of the Beanie_Birrd vtuber character hugging a duck" class="slide no-save-img" src="@/assets/img/art/huggin/huggin_Beanie_Birrd.png">
							</picture>
						</swiper-slide>
					</swiper>
				</div>
			</div> <!-- Huggin' Reactives -->
			<div class="art-showcase">
				<h2>Character Animation</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Illustration</div>
					<div class="showcase-tag">Animation</div>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/artfight/kriber_flux.webp">
								<source type="image/gif" srcset="@/assets/img/art/artfight/kriber_flux.gif">
								<img alt="A happy elf swaying back and forth in a bubbling cauldron" class="slide no-save-img" src="@/assets/img/art/artfight/kriber_flux.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/artfight/kriber_cathode.webp">
								<source type="image/gif" srcset="@/assets/img/art/artfight/kriber_cathode.gif">
								<img alt="A tv static character stimming with its hands" class="slide no-save-img" src="@/assets/img/art/artfight/kriber_cathode.png">
							</picture>
						</swiper-slide>
					</swiper>
				</div>
			</div> <!-- Character Animation -->
		</div>
	</div>
</template>