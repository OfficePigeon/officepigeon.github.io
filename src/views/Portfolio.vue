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
import YouTubeLogoIcon from "@/components/icons/logos/YouTubeLogoIcon.vue";
import VideoIcon from "@/components/icons/VideoIcon.vue";
import ModrinthLogoIcon from "@/components/icons/logos/ModrinthLogoIcon.vue";
import ItchIOLogoIcon from "@/components/icons/logos/ItchIOLogoIcon.vue";

export default {
	components: {
		ItchIOLogoIcon,
		ModrinthLogoIcon,
		VideoIcon,
		YouTubeLogoIcon,
		GitHubLogoIcon,
		ComputerIcon, FileIcon, PhoneIcon, EmailIcon, CopyIcon, DownloadIcon, PresentationIcon, Swiper, SwiperSlide
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
			if (e) e.innerHTML = "Copyright &copy2016-" +  new Date().getFullYear().toString() + " Aidan Buffum"
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
	<div style="min-width:700px">
		<h1>Portfolio - Aidan Buffum</h1>
		<div style="display: flex;align-items:center;justify-content:center;flex-wrap:wrap;height:36px;line-height:36px;vertical-align:center">
			<a href="mailto:aabuffum@gmail.com" target="_blank" title="Email">
				<EmailIcon class="social-icon hover-filtered" style="height:36px;width:36px;padding-right:10px"/>
			</a>
			<a href="mailto:aabuffum@gmail.com" target="_blank" title="Email">aabuffum@gmail.com</a>
			<a href="/pdf/portfolio/Resume.pdf" target="_blank" title="Resume">
				<FileIcon class="social-icon hover-filtered" style="height:36px;width:36px;padding-left:10px"/>
			</a>
			<a href="/pdf/portfolio/Resume.pdf" target="_blank" title="Resume">Resume</a>
			<a href="tel:+14018718494" target="_blank" title="Phone">
				<PhoneIcon class="social-icon hover-filtered" style="height:36px;width:36px;padding:0 10px"/>
			</a>
			<a href="tel:+14018718494" target="_blank" title="Phone">+1(401)871-8494 </a>
		</div>
		<h1 id="SeriousGames">Serious Games</h1>
		<div class="showcase-group">
			<div class="tall-showcase">
				<h2>Now We're Talking!</h2>
				<div class="showcase-gallery" style="height:200px;min-height:200px;max-height:200px">
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
				</div>
				<p class="showcase-description">
					An emotional intelligence game simulating interactions with a virtual stand-in for the player's partner. Each
					episode features branching dialogues and new learning objectives building upon those from previous episodes.
				</p>
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
			</div> <!-- Now We're Talking! -->
			<div class="tall-showcase">
				<h2 style="font-size:18px">Keeping Up With The Smiths</h2>
				<div class="showcase-gallery" style="height:200px;min-height:200px;max-height:200px">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screenshot of the Keeping Up With The Smiths game" class="slide" src="@/assets/img/portfolio/KeepingUpWithTheSmiths.png">
						</swiper-slide>
					</swiper>
				</div>
				<p class="showcase-description">
					An experimental game analyzing tax reporting accuracy with a file-free system. In the life-simulation game,
					the player makes financial choices over several in-game years with the goal of having the best home on their
					street. Each year, players have varying choices between typical or file-free options for their taxes.
				</p>
			</div> <!-- Keeping Up With The Smiths -->
			<div class="tall-showcase">
				<h2>Loki's Marauders</h2>
				<div class="showcase-gallery" style="height:200px;min-height:200px;max-height:200px">
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
				</div>
				<p class="showcase-description">
					An educational game where players take on the role of one of four monster viking captains. Players learn to
					identify different fallacies and tactics for manipulation as they attempt to sway the other captains while
					staying wary of their fellow monsters' attempts to trick them.
				</p>
				<p class="showcase-description showcase-little-text">
					Presented at the <a href="https://seriousplayconf.com/" target="_blank">Serious Play Conference</a>
					<span title="Serious Play Conference Presentation (2023)">
							<a href="/pdf/portfolio/SeriousPlayConf2023.pdf" target="_blank">
								<PresentationIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span>
					<span title="Serious Play Conference Presentation (2023) - Recording (YouTube)">
							<a href="https://www.youtube.com/watch?v=GwzRHcKO9iE" target="_blank">
								<YouTubeLogoIcon class="hover-filtered showcase-little-text-icon"/>
							</a>
						</span>
					<span title="Serious Play Conference Presentation (2023) - Recording (Archive)">
							<a href="/video/portfolio/SeriousPlayConf2023.mkv" target="_blank">
								<VideoIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span>
				</p>
			</div> <!-- Loki's Marauders -->
			<div class="tall-showcase">
				<h2>TimeQuake Escape!</h2>
				<div class="showcase-gallery" style="height:180px;min-height:180px;max-height:180px">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screenshot of the TimeQuake Escape! game" class="slide" src="@/assets/img/portfolio/nwt/TimeQuake_1.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A screenshot of the TimeQuake Escape! introduction screen" class="slide" src="@/assets/img/portfolio/NWT/TimeQuake_2.png">
						</swiper-slide>
					</swiper>
				</div>
				<p class="showcase-description">
					A guided census survey experiment aimed to identify whether a gamified experience with ongoing feedback can
					increase response rates and reporting accuracy from underrepresented populations.
				</p>
				<p class="showcase-description showcase-little-text">
					* This game includes art assets created with Generative Artificial Intelligence systems. I do not and have
					never endorsed the use of AI as a total replacement for human artists and creatives.
				</p>
				<p class="showcase-description showcase-little-text">
					Presented at the <a href="https://seriousplayconf.com/" target="_blank">Serious Play Conference</a>
					<span title="Serious Play Conference Presentation (2024) - Presentation">
							<a href="/pdf/portfolio/SeriousPlayConf2024.pdf" target="_blank">
								<PresentationIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span>
					<span title="Serious Play Conference Presentation (2024) - Recording (YouTube)">
							<a href="https://www.youtube.com/watch?v=25o488NXUWk" target="_blank">
								<YouTubeLogoIcon class="hover-filtered showcase-little-text-icon"/>
							</a>
						</span>
					<span title="Serious Play Conference Presentation (2024) - Recording (Archive)">
							<a href="/video/portfolio/SeriousPlayConf2024.mp4" target="_blank">
								<VideoIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span>
					and part of research submitted for publication in the
					<a href="https://ijpor.oxfordjournals.org/" target="_blank">International Journal of Public Opinion Research</a>
				</p>
			</div> <!-- TimeQuake Escape! -->
			<div class="tall-showcase">
				<h2 style="font-size:16px">Workplace Violence Scenarios</h2>
				<div class="showcase-gallery" style="height:200px;min-height:200px;max-height:200px">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screenshot of the workplace violence scenarios game" class="slide" src="@/assets/img/portfolio/NWT/WorkplaceViolence.png">
						</swiper-slide>
					</swiper>
				</div>
				<p class="showcase-description">
					A set of interactive simulations for behavioral experimentation. Players are tasked with identifying warning signs
					of potential workplace violence incidents in an experimental environment that aims to measure the user's
					responses and reactivity to different scenarios and behaviors.
				</p>
			</div> <!-- Workplace Violence Scenarios -->
			<div class="tall-showcase">
				<h2>Interview Simulation Exercise</h2>
				<div class="showcase-gallery" style="height:200px;min-height:200px;max-height:200px">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screenshot of the interview simulation exercise" class="slide" src="@/assets/img/portfolio/NWT/InterviewSimulationExercise.png">
						</swiper-slide>
					</swiper>
				</div>
				<p class="showcase-description">
					An interview training game where the player interviews several candidates for a position and discusses the
					candidates in a guided dialogue with their colleagues. The player must identify inappropriate questions and
					educate their colleagues on proper interviewing procedures.
				</p>
			</div> <!-- Interview Simulation Exercise -->
			<div class="tall-showcase">
				<h2>Agile Tactics</h2>
				<div class="showcase-gallery" style="height:200px;min-height:200px;max-height:200px">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A screenshot of the Agile Tactics game" class="slide" src="@/assets/img/portfolio/NWT/AgileTactics.png">
						</swiper-slide>
					</swiper>
				</div>
				<p class="showcase-description">
					A multi-episode interactive training game allowing users to test their knowledge of DevOps and Agile
					methodologies. Users are given multiple choices in an ongoing dialogue with their boss and colleagues in
					which they must choose the correct responses in order to win their team's trust and deliver the project on
					time.
				</p>
			</div> <!-- Agile Tactics -->
			<div class="tall-showcase">
				<h2>Dollar Domination</h2>
				<div class="showcase-gallery" style="height:260px;min-height:260px;max-height:260px">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="The cover design for the Dollar Domination game" class="slide" src="@/assets/img/portfolio/dollardomination/cover.png">
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
				</div>
				<p class="showcase-description">
					A Monopoly-style board game about unregulated capitalism where players try to gain control of the economy
					while facing increasing economic inequality.
				</p>
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
			</div> <!-- Dollar Domination -->
			<div class="tall-showcase">
				<h2>Robo Race</h2>
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
				<p class="showcase-description">
					A game teaching logical and critical thinking skills for ages 5-14+ with varied rules by age group. Players
					use cards to move robots to their secret goals and set others back.
				</p>
			</div> <!-- Robo Race -->
		</div>
		<h1 id="OtherTechnicalProjects">Other Technical Projects</h1>
		<div class="showcase-group">
			<div class="wide-showcase" style="width:868px">
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
			<div class="wide-showcase" style="width:868px">
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
			<div class="wide-showcase" style="width:560px">
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
			<div class="wide-showcase" style="width:252px">
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
			<div class="wide-showcase" style="width:868px">
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
			<div class="tall-showcase">
				<h2>Umbra</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Puzzle</div>
					<div class="showcase-tag">JavaScript</div>
					<a href="/static_games/umbra/cover.html" target="_blank" title="Play in Browser">
						<ComputerIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					An abstract puzzle game where the player carefully navigates a ball to the goal while avoiding an encroaching darkness.
				</p>
			</div> <!-- Umbra -->
			<div class="tall-showcase">
				<h2>Contrast Bounce</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Physics</div>
					<div class="showcase-tag">Puzzle</div>
					<div class="showcase-tag">JavaScript</div>
					<a href="/static_games/contrastbounce/cover.html" target="_blank" title="Play in Browser">
						<ComputerIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					An abstract puzzle game where the player inverts the colors of the map to bounce a ball into the goal.
				</p>
			</div> <!-- Contrast Bounce -->
			<div class="tall-showcase">
				<h2>Batastrophe</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Asymmetric</div>
					<div class="showcase-tag">Multiplayer</div>
					<div class="showcase-tag">Party</div>
					<div class="showcase-tag">C#</div>
					<div class="showcase-tag">Unity</div>
				</div>
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
					<p class="showcase-description">
						A split-screen party game where players take turns breaking everything in their house as a bat and running
						damage control.
					</p>
					<p class="showcase-description showcase-little-text" style="margin-top:0">
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
			<div class="tall-showcase">
				<h2>House Party</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Cooperative</div>
					<div class="showcase-tag">Board Game</div>
					<div class="showcase-tag">3-6 Players</div>
					<a href="https://www.thegamecrafter.com/games/house-party2" target="_blank"
						 title="Available on The Game Crafter" style="text-decoration:none;margin-left:4px">$</a>
				</div>
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
					<p class="showcase-description">
						Keep your house party safe by escorting guests, sobering them up, and getting the rowdy ones home before anyone gets hurt.
					</p>
					<p class="showcase-description showcase-little-text" style="margin-top:4px">
						* This game depicts consumption of alcoholic beneverages.
					</p>
				</div>
			</div> <!-- House Party -->
			<div class="tall-showcase">
				<h2>ExChange The World</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Physics</div>
					<div class="showcase-tag">Puzzle</div>
					<div class="showcase-tag">C#</div>
					<div class="showcase-tag">Unity</div>
				</div>
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
				<p class="showcase-description">
					Solve a variety of everyday problems with a special swap gun. Not every pair of objects swaps but every swap
					matters. ExChange The World carefully!
				</p>
			</div> <!-- ExChange The World -->
			<div class="tall-showcase">
				<h2>Little Worlds</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Physics</div>
					<div class="showcase-tag">Multiplayer</div>
					<div class="showcase-tag">C#</div>
					<div class="showcase-tag">Unity</div>
					<a href="https://aidanbuffum.itch.io/little-worlds" target="_blank" title="itch.io">
						<ItchIOLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					Players race to build the largest planet they can. With Katamari-inspired rolling, planets grow and real
					orbits and pilfered moons.
				</p>
			</div> <!-- Little Worlds -->
			<div class="tall-showcase">
				<h2>I Dig It</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Multiplayer</div>
					<div class="showcase-tag">C#</div>
					<div class="showcase-tag">Unity</div>
					<a href="https://aidanbuffum.itch.io/i-dig-it" target="_blank" title="itch.io">
						<ItchIOLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					In a fast-paced frenzy, players must dig the ground out from under their opponents until they are the last one standing.
				</p>
				<p class="showcase-description showcase-little-text">
					* Controllers are required to play this game.
				</p>
			</div> <!-- I Dig It -->
			<div class="tall-showcase">
				<h2>Wizards vs. Robots</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Action</div>
					<div class="showcase-tag">Platformer</div>
					<div class="showcase-tag">GameMaker</div>
					<a href="https://aidanbuffum.itch.io/wizards-vs-robots" target="_blank" title="itch.io">
						<ItchIOLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					It's a wizard's job to destroy robots! Follow a branching path and switch between spells to fight the evil
					robots in the way of victory.
				</p>
			</div> <!-- Wizards vs. Robots -->
			<div class="tall-showcase">
				<h2>Joe</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Comedy</div>
					<div class="showcase-tag">RPG</div>
					<div class="showcase-tag">GameMaker</div>
					<a href="https://aidanbuffum.itch.io/joe" target="_blank" title="itch.io">
						<ItchIOLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					There's nothing out of the ordinary about Joe A. Verage. Outside his barista day-job, he's just an
					average joe. Grab a coffee and have some fun!
				</p>
			</div> <!-- Joe -->
			<div class="tall-showcase">
				<h2>Take A Breather</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Comedy</div>
					<div class="showcase-tag">Physics</div>
					<div class="showcase-tag">C#</div>
					<div class="showcase-tag">Unity</div>
					<a href="https://aidanbuffum.itch.io/take-a-breather" target="_blank" title="itch.io">
						<ItchIOLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					A QWOP-style slapstick game about a shark out of water. Seek out hydration and stop to Take a Breather.
				</p>
			</div> <!-- Take A Breather -->
			<div class="tall-showcase">
				<h2>Murder Bee Wrote</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Platformer</div>
					<div class="showcase-tag">Runner</div>
					<div class="showcase-tag">C#</div>
					<div class="showcase-tag">Unity</div>
					<a href="https://erikcerini.itch.io/murder-bee-wrote" target="_blank" title="itch.io">
						<ItchIOLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					A murderer has switched places with a bumblebee but their bloodlust cannot be sated. Punch bees and impale
					them with the stingers of the fallen!
				</p>
			</div> <!-- Murder Bee Wrote -->
			<div class="tall-showcase">
				<h2>Crab-Dab Revolution</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Parody</div>
					<div class="showcase-tag">Rhythm</div>
					<div class="showcase-tag">GameMaker</div>
				</div>
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
				<p class="showcase-description">
					Crabs dabbing to absurd beats with hand-animated dance moves, a fearsome lobster boss, and loving calibration
					for an almost-completable game.
				</p>
			</div> <!-- Crab-Dab Revolution -->
		</div>
		<h1 id="GameMods">Game Mods</h1>
		<div class="showcase-group">
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Mob Pouches</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/mob-pouches" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Pouches-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					Pouches to pick up and carry mobs like bucketed fish. Generally compatibile with most base-game and modded mobs.
				</p>
			</div> <!-- Mob Pouches -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Zombie Villager Variants</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/zombie-villager-variants" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Zombie-Villager-Variants-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					Extra Zombie Villager variants to match the Drowned, Husk, and some modded zombie types.
				</p>
			</div> <!-- Minecraft Zombie Villager Variants -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Entity Item Tooltips</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/entity-item-tooltips" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Entity-Tooltips-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					A client-side mod that adds extra tooltip information for entity-creating items like spawn eggs and buckets.
				</p>
			</div> <!-- Minecraft Entity Item Tooltips -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Cluckshrooms</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/cluckshrooms" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Cluckshroom-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					Implements the Cluckshroom from Minecraft Earth, creating a mob that balances the best of chickens and mooshrooms.
				</p>
			</div> <!-- Minecraft Cluckshrooms -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Chiseled Bookshelf Enchanting</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/chiseled-bookshelf-enchanting" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Chiseled-Bookshelf-Enchanting-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					A configuration mod that allows chiseled bookshelves to be used for enchanting.
				</p>
			</div> <!-- Minecraft Chiseled Bookshelf Enchanting -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Sunken Skeletons</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/sunken-skeletons" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Sunken-Skeleton-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					Implements the Sunken Skeleton from Minecraft Dungeons, adding a new underwater threat with multiple variants.
				</p>
			</div> <!-- Minecraft Sunken Skeletons -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Barter With Babies</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/barter-with-babies" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Baby-Bartering-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					A configuration mod that lets baby piglins barter like adults with a balanced new loot table.
				</p>
			</div> <!-- Minecraft Barter With Babies -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Muddy Pigs</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/muddy-pigs-mod" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Muddy-Pigs-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					Inspired by Muddy Pigs from Minecraft Earth, extends pigs with new mechanics for bathing in mud and making a mess.
				</p>
			</div> <!-- Minecraft Muddy Pigs -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Honey Slimes</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/honey-slimes" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Honey-Slime-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					Adds a new neutral Honey Slime mob and honey block set to expand on flowering biomes.
				</p>
			</div> <!-- Minecraft Bouldering Zombies -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Bouldering Zombies</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/bouldering-zombies" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Bouldering-Zombie-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					Implements the Bouldering Zombie from Minecraft Earth, adding a new undead climbing threat to rival spiders.
				</p>
			</div> <!-- Minecraft Bouldering Zombies -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Frozen Zombies</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/frozen-zombies" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Frozen-Zombie-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					Implements the Frozen Zombie monster from Minecraft Dungeons, initiating deadly snowball fights in the night.
				</p>
			</div> <!-- Minecraft Frozen Zombies -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Jungle Zombies</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/jungle-zombies" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Jungle-Zombie-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					Implements the Jungle Zombie from Minecraft Dungeons, adding a toxic threat to jungles and a source of vines.
				</p>
			</div> <!-- Minecraft Jungle Zombies -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Lobber Zombies</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/lobber-zombies" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Lobber-Zombie-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					Implements the Lobber Zombie from Minecraft Earth, introducing a zombie that doesn't need to be close to be dangerous.
				</p>
			</div> <!-- Minecraft Lobber Zombies -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Lightning Rod Copper Armor</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/lightning-rod-copper-armor" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Lightning-Rod-Armor" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					A silly mod making copper armor a whole lot riskier to wear in a thunderstorm.
				</p>
			</div> <!-- Minecraft Lightning Rod Copper Armor -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Mossy Llamas</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/mossy-llamas" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Mossy-Llamas-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					A mod enabling tamed llamas to equip and wear moss and pale moss carpets in addition to wool carpets.
				</p>
			</div> <!-- Minecraft Mossy Llamas -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Reusable Smithing</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/reusable-smithing" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Reusable-Smithing-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					A utility mod adjusting smithing so that armor trimming and upgrade recipes no longer consume template items
					as part of the recipe.
				</p>
			</div> <!-- Minecraft Reusable Smithing -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Commands: Ignite & Extinguish</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/command-ignite" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Command-Ignite-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of Minecraft's Steve character with his head on fire and an open console window with the text /ignite Steve" class="slide" src="../assets/img/mods/minecraftcommandignitemod/cover.png">
						</swiper-slide>
					</swiper>
				</div>
				<p class="showcase-description">
					/ignite and /extinguish console commands to ignite entities and put them out.
				</p>
			</div> <!-- Minecraft Command: Ignite -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Command: Chorus</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/command-chorus" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Command-Chorus-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of a glowing Minecraft Chorus Fruit and an open console window with the text /chorus" class="slide" src="../assets/img/mods/minecraftcommandchorusmod/cover.png">
						</swiper-slide>
					</swiper>
				</div>
				<p class="showcase-description">
					A whimsical new /chorus console command to randomly teleport entities a short distance.
				</p>
			</div> <!-- Minecraft Command: Chorus -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Data Driven Locator Bar Hiding</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Fabric</div>
					<a href="https://modrinth.com/mod/data-driven-locator-bar-hiding" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Data-Driven-Locator-Bar-Hiding-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					A utility mod for data packs to configure the items that hide players from the locator bar.
				</p>
			</div> <!-- Minecraft Data Driven Locator Bar Hiding -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Saplings to Dead Bushes</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Data Pack</div>
					<a href="https://modrinth.com/datapack/saplings-to-dead-bushes" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Saplings-To-Dead-Bushes-Datapack" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					A recipe data pack for smelting Saplings into Dead Bushes.
				</p>
			</div> <!-- Minecraft Data Pack: Saplings to Dead Bushes -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Bone Block Shortcut</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Data Pack</div>
					<a href="https://modrinth.com/datapack/bone-block-shortcut" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Bone-Block-Shortcut-Datapack" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
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
				<p class="showcase-description">
					A shortcut recipe data pack for crafting bone blocks directly from bones, skipping the bone meal step.
				</p>
			</div> <!-- Minecraft Data Pack: Bone Block Shortcut -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2>Mob Pouches: Pouchable Villagers</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Data Pack</div>
					<a href="https://modrinth.com/datapack/mob-pouches-pouchable-villagers" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Pouches-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of a custom pouch item for Minecraft with a Villager sticking out and the text Pouchable Villagers" class="slide" src="../assets/img/mods/minecraftdatapacks/mobpouchespouchablevillagers/cover.png">
						</swiper-slide>
					</swiper>
				</div>
				<p class="showcase-description">
					An example data pack for the Mob Pouches mod letting Villagers be pouched.
				</p>
			</div> <!-- Minecraft Data Pack: Mob Pouches - Pouchable Villagers -->
			<div class="tall-showcase minecraft-font minecraft-background">
				<h2 style="font-size:14px">Data Driven Locator Bar Hiding: Show Carved Pumpkins</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Minecraft</div>
					<div class="showcase-tag">Data Pack</div>
					<a href="https://modrinth.com/datapack/data-driven-locator-bar-hiding-show-carved-pumpkins" target="_blank" title="Modrinth">
						<ModrinthLogoIcon class="hover-filtered showcase-text-icon"/>
					</a>
					<a href="https://github.com/OfficePigeon/Data-Driven-Locator-Bar-Hiding-Mod" target="_blank" title="GitHub">
						<GitHubLogoIcon class="filtered showcase-text-icon"/>
					</a>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="An icon of a Minecraft's Steve character on a locator bar wearing a carved pumpkin on his head" class="slide" src="../assets/img/mods/minecraftdatapacks/datadrivenlocatorbarhidingshowcarvedpumpkins/cover.png">
						</swiper-slide>
					</swiper>
				</div>
				<p class="showcase-description">
					An example data pack for the Data Driven Locator Bar Hiding mod making players wearing pumpkins show up on the bar.
				</p>
			</div> <!-- Minecraft Data Pack: Data Driven Locator Bar Hiding - Show Carved Pumpkins -->
		</div>
		<h1 id="Artwork">Artwork</h1>
		<div class="showcase-group">
			<div class="short-showcase">
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
								<source type="image/webp" srcset="../assets/img/art/emote/showcase_Venrir.webp">
								<source type="image/gif" srcset="../assets/img/art/emote/showcase_Venrir.gif">
								<img alt="A pair of cartoon emotes of the Venrir vtuber character" class="slide no-save-img" src="../assets/img/art/emote/showcase_Venrir.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<img alt="A pair of cartoon emotes of the AngelHunnyBunn vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/showcase_AngelHunnyBunn.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A set of cartoon emotes of the eyesofpucci vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/showcase_eyesofpucci.png">
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/emote/wave_eyesofpucci.gif">
								<source type="image/gif" srcset="@/assets/img/art/emote/wave_eyesofpucci.gif">
								<img alt="A cartoon emote of the eyesofpucci vtuber mascot" class="slide no-save-img" src="@/assets/img/art/emote/wave_eyesofpucci.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<img alt="A cartoon emote of the Kriber vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/bleh_Kriber.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A cartoon emote of the SintheticSkull vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/smash_SintheticSkull.png">
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/emote/showcase_SinnaVT.webp">
								<source type="image/gif" srcset="@/assets/img/art/emote/showcase_SinnaVT.gif">
								<img alt="A pair of cartoon emotes of the SinnaVT vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/showcase_SinnaVT.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<img alt="A cartoon emote of the DajzaDj vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/wifeless_DajzaDj.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A cartoon emote of the Beanie_Aviyum vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/drinked_Beanie_Aviyum.png">
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/emote/fine_eri_nostalgae.webp">
								<source type="image/gif" srcset="@/assets/img/art/emote/fine_eri_nostalgae.gif">
								<img alt="A cartoon emote of the eri_nostalgae vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/fine_eri_nostalgae.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<img alt="A cartoon emote of the Beanie_Birrd vtuber character" class="slide no-save-img" src="@/assets/img/art/emote/dead_Beanie_Birrd.png">
						</swiper-slide>
					</swiper>
				</div>
			</div> <!-- Content-Creator Social Media Emotes -->
			<div class="short-showcase minecraft-font minecraft-background">
				<h2>Minecraft-Inspired<br>3D Creature Models</h2>
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
														src="/3d/minecraft_model/model_salarymander_winston.gltf"
														poster="/3d/minecraft_model/render_salarymander_winston.png"
														alt="A 3D model of a corgi with a saddle on its back and a slinky for a leg in the Minecraft style"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_model/model_xstraycat.gltf"
														poster="/3d/minecraft_model/render_xstraycat.png"
														alt="A 3D model of a black cat with gold earrings and a large bow in the Minecraft style"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_model/model_salarymander_blocko.gltf"
														poster="/3d/minecraft_model/render_salarymander_blocko.png"
														alt="A 3D model of an abstract blue character with a scarf in the Minecraft style"
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
			<div class="short-showcase">
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
			<div class="short-showcase minecraft-font minecraft-background">
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
							              alt="A minecraft skin of a boy in a long blue and gold coat"
							              src="/3d/minecraft_skin/model_sapphirenoble.gltf"
							              poster="/3d/minecraft_skin/render_sapphirenoble.gif"
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
							              alt="A minecraft skin of a girl with purple hair in a torn dark cloak"
							              src="/3d/minecraft_skin/model_xstraycat.gltf"
							              poster="/3d/minecraft_skin/render_xstraycat.gif"
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
			<div class="short-showcase">
				<h2>Babbling Character Talk Sprites</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Illustration</div>
					<div class="showcase-tag">Animation</div>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/awawa/awawa_dovewich.webp">
								<source type="image/gif" srcset="@/assets/img/art/awawa/awawa_dovewich.gif">
								<img alt="A cartoon animation of the dovewich vtuber babbling" class="slide no-save-img" src="@/assets/img/art/awawa/awawa_dovewich.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/awawa/awawa_kerriri.webp">
								<source type="image/gif" srcset="@/assets/img/art/awawa/awawa_kerriri.gif">
								<img alt="A cartoon animation of the kerriri vtuber babbling" class="slide no-save-img" src="@/assets/img/art/awawa/awawa_kerriri.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/awawa/awawa_Venrir.webp">
								<source type="image/gif" srcset="@/assets/img/art/awawa/awawa_Venrir.gif">
								<img alt="A cartoon animation of the Venrir vtuber babbling" class="slide no-save-img" src="@/assets/img/art/awawa/awawa_Venrir.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/awawa/awawa_Sinner_Sister.webp">
								<source type="image/gif" srcset="@/assets/img/art/awawa/awawa_Sinner_Sister.gif">
								<img alt="A cartoon animation of the Sinner_Sister vtuber babbling" class="slide no-save-img" src="@/assets/img/art/awawa/awawa_Sinner_Sister.png">
							</picture>
						</swiper-slide>
					</swiper>
				</div>
			</div> <!-- Awawa Reactives -->
			<div class="short-showcase">
				<h2>Pokemon-Inspired Sprites</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Pixel Art</div>
					<div class="showcase-tag">Media-Inspired</div>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img alt="A pixel art rendition of the dovewich vtuber character in the pokemon style" class="slide no-save-img" src="@/assets/img/art/pokemon/pokemon_dovewich.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pixel art rendition of a character in a vintage dress in the pokemon style" class="slide no-save-img" src="@/assets/img/art/pokemon/pokemon_cheri_cerise.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pixel art rendition of a brown cat wearing a sporty outfit in the pokemon style" class="slide no-save-img" src="@/assets/img/art/pokemon/pokemon_madkiska.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pixel art rendition of an energetic character in the pokemon style" class="slide no-save-img" src="@/assets/img/art/pokemon/pokemon_sapphirenoble.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pixel art rendition of a character in a nurse uniform in the pokemon style" class="slide no-save-img" src="@/assets/img/art/pokemon/pokemon_hazelch98.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pixel art rendition of a cool young man in the pokemon style" class="slide no-save-img" src="@/assets/img/art/pokemon/pokemon_miloupshur.png">
						</swiper-slide>
						<swiper-slide>
							<img alt="A pixel art rendition of the SintheticSkull vtuber character in the pokemon style" class="slide no-save-img" src="@/assets/img/art/pokemon/pokemon_sintheticskull.png">
						</swiper-slide>
					</swiper>
				</div>
			</div> <!-- Pokemon Sprites -->
			<div class="short-showcase">
				<h2>Katamari-Inspired Character Model</h2>
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
			</div> <!-- Katamari-Inspired Character Model -->
			<div class="short-showcase">
				<h2 style="font-size:18px">Lethal Company-Inspired Dancing Sprites</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Illustration</div>
					<div class="showcase-tag">Animation</div>
					<div class="showcase-tag">Media-Inspired</div>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/lethalcompany/lethalcompany_dovewich.webp">
								<source type="image/gif" srcset="@/assets/img/art/lethalcompany/lethalcompany_dovewich.gif">
								<img alt="A lethal company dancing animation of the dovewich vtuber character" class="slide no-save-img" src="@/assets/img/art/lethalcompany/lethalcompany_dovewich.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/lethalcompany/lethalcompany_dahliastarbright.webp">
								<source type="image/gif" srcset="@/assets/img/art/lethalcompany/lethalcompany_dahliastarbright.gif">
								<img alt="A lethal company dancing animation of the DahliaStarbright vtuber character" class="slide no-save-img" src="@/assets/img/art/lethalcompany/lethalcompany_dahliastarbright.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/lethalcompany/lethalcompany_qrissybugg.webp">
								<source type="image/gif" srcset="@/assets/img/art/lethalcompany/lethalcompany_qrissybugg.gif">
								<img alt="A lethal company dancing animation of the QrissyBugg vtuber character" class="slide no-save-img" src="@/assets/img/art/lethalcompany/lethalcompany_qrissybugg.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/lethalcompany/lethalcompanY_atlasaureus.webp">
								<source type="image/gif" srcset="@/assets/img/art/lethalcompany/lethalcompanY_atlasaureus.gif">
								<img alt="A lethal company dancing animation of the Atlas Aureus vtuber character" class="slide no-save-img" src="@/assets/img/art/lethalcompany/lethalcompanY_atlasaureus.png">
							</picture>
						</swiper-slide>
					</swiper>
				</div>
			</div> <!-- Lethal Company-Inspired Dancing Sprites -->
			<div class="short-showcase">
				<h2 style="font-size:18px">Animal Crossing-Inspired<br>Villager Model</h2>
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
			<div class="short-showcase">
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
			<div class="short-showcase">
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
			<div class="short-showcase">
				<h2
				>Fluffy Talk Sprites</h2>
				<div class="showcase-tags">
					<div class="showcase-tag">Illustration</div>
					<div class="showcase-tag">Animation</div>
				</div>
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/floofy/floofy_dovewich.webp">
								<source type="image/gif" srcset="@/assets/img/art/floofy/floofy_dovewich.gif">
								<img alt="A cartoon drawing of the dovewich vtuber character in a fluffy pigeon outfit" class="slide no-save-img" src="@/assets/img/art/floofy/floofy_dovewich.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/floofy/floofy_maofall.webp">
								<source type="image/gif" srcset="@/assets/img/art/floofy/floofy_maofall.gif">
								<img alt="A cartoon drawing of the maofall vtuber character in a fluffy bunny outfit" class="slide no-save-img" src="@/assets/img/art/floofy/floofy_maofall.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/art/floofy/floofy_amorettie.webp">
								<source type="image/gif" srcset="@/assets/img/art/floofy/floofy_amorettie.gif">
								<img alt="A cartoon drawing of the amoretti vtuber character in a fluffy bunny outfit" class="slide no-save-img" src="@/assets/img/art/floofy/floofy_amorettie.png">
							</picture>
						</swiper-slide>
					</swiper>
				</div>
			</div> <!-- Floofy Reactives -->
		</div>
	</div>
</template>