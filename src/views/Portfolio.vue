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

export default {
	components: {ComputerIcon, FileIcon, PhoneIcon, EmailIcon, CopyIcon, DownloadIcon, PresentationIcon, Swiper, SwiperSlide, },
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
			<a href="mailto:aabuffum@gmail.com" title="Email">
				<EmailIcon class="social-icon hover-filtered" style="height:36px;width:36px;padding-right:10px;"/>
			</a>
			<a href="mailto:aabuffum@gmail.com" title="Email"> aabuffum@gmail.com </a>
			<a href="/pdf/portfolio/Resume.pdf" title="Resume">
				<FileIcon class="social-icon hover-filtered" style="height:36px;width:36px;padding-left:10px;"/>
			</a>
			<a href="/pdf/portfolio/Resume.pdf" title="Resume"> Resume </a>
			<a href="tel:+14018718494" title="Phone">
				<PhoneIcon class="social-icon hover-filtered" style="height:36px;width:36px;padding:0 10px;"/>
			</a>
			<a href="tel:+14018718494" title="Phone">+1(401)871-8494 </a>
		</div>
		<h1 id="SeriousGames">Serious Games</h1>
		<div class="showcase-group">
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/NWT/NowWereTalking_0.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/NWT/NowWereTalking_1.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/NWT/NowWereTalking_2.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/NWT/NowWereTalking_3.png">
						</swiper-slide>
					</swiper>
					<p class="showcase-description showcase-little-text">
						Presented at the <a href="https://seriousplayconf.com/">Serious Play Conference</a>
						<span title="Serious Play Conference Presentation (2021)">
							<a href="/pdf/portfolio/SeriousPlayConf2021.pdf">
								<PresentationIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span>
						and the <a href="https://www.thenarrativesociety.org/">International Conference on Narrative</a>
						and <a href="https://www.mitre.org/news-insights/impact-story/mitres-latest-serious-game-works-level-personal-relationships">featured</a>
						<span title="Article - MITRE’s Latest Serious Game Works to Level Up Personal Relationships (2022)">
							<a href="/pdf/portfolio/MITRE-Article-2022-01-12.pdf">
								<FileIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span>
						by <a href="https://www.mitre.org/">The MITRE Corporation</a>
					</p>
				</div>
				<div class="commission-description">
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
							<img class="slide" src="@/assets/img/portfolio/KeepingUpWithTheSmiths.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Keeping Up With The Smiths</h2>
					<p class="showcase-description">
						A life-simulation game where the players make financial choices over several in-game years to have the best
						home on their street. Players are presented with typical or file-free options for their taxes. The
						experiment aims to measure whether typical players are more likely to report their taxes accurately with a
						particular options.
					</p>
				</div>
			</div> <!-- Keeping Up With The Smiths -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/NWT/LokisMarauders_1.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/NWT/LokisMarauders_4.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/NWT/LokisMarauders_8.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/NWT/LokisMarauders_9.png">
						</swiper-slide>
					</swiper>
					<p class="showcase-description showcase-little-text">
						Presented at the <a href="https://seriousplayconf.com/">Serious Play Conference</a>
						<span title="Serious Play Conference Presentation (2023)">
							<a href="/pdf/portfolio/SeriousPlayConf2023.pdf">
								<PresentationIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span>
					</p>
				</div>
				<div class="commission-description">
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
							<img class="slide" src="@/assets/img/portfolio/nwt/TimeQuake_1.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/NWT/TimeQuake_2.png">
						</swiper-slide>
					</swiper>
					<p class="showcase-description showcase-little-text">
						Presented at the <a href="https://seriousplayconf.com/">Serious Play Conference</a>
						<span title="Serious Play Conference Presentation (2024)">
							<a href="/pdf/portfolio/SeriousPlayConf2024.pdf">
								<PresentationIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span> and part of
						research submitted for publication in the
						<a href="http://ijpor.oxfordjournals.org/">International Journal of Public Opinion Research</a>
					</p>
				</div>
				<div class="commission-description">
					<h2>TimeQuake Escape!</h2>
					<p class="showcase-description">
						A guided census survey experiment aimed to identify whether a gamified experience with ongoing feedback can
						increase response rates and reporting accuracy from underrepresented populations.
					</p>
					<p class="showcase-description showcase-little-text">
						* This game includes art assets created with Generative Artificial Intelligence systems. I do not and have
						never endorsed the use of AI as a replacement for human artists and creatives.
					</p>
				</div>
			</div> <!-- TimeQuake Escape! -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/NWT/WorkplaceViolence.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
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
							<img class="slide" src="@/assets/img/portfolio/NWT/InterviewSimulationExercise.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
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
							<img class="slide" src="@/assets/img/portfolio/NWT/AgileTactics.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Agile Tactics</h2>
					<p class="showcase-description">
						A multi-episode interactive training story game allowing users to test their knowledge of DevOps and Agile
						methodologies. Users are given multiple choices in an ongoing dialogues with their boss and colleagues in
						which they must choose the correct responses in order to win their team's trust and deliver the project on
						time.
					</p>
				</div>
			</div> <!-- Agile Tactics -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/dollardomination/coverSquare.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/dollardomination/dollarDomination.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/dollardomination/industries.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/dollardomination/gamesforchange.png">
						</swiper-slide>
					</swiper>
					<p class="showcase-description showcase-little-text">
						Presented at the <a href="https://festival.gamesforchange.org/">Games for Change Festival</a>
						and <a href="https://www.wpi.edu/news/imgd-creates-games-change">featured</a>
						<span title="Article - IMGD Creates Games for Change (2017)">
							<a href="/pdf/portfolio/WPI-Article-2017-08-23.pdf">
								<FileIcon class="filtered showcase-little-text-icon"/>
							</a>
						</span>
						by <a href="https://www.wpi.edu/">Worcester Polytechnic Institute</a>
					</p>
				</div>
				<div class="commission-description">
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
							<img class="slide" src="@/assets/img/portfolio/roborace/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/roborace/componentsSpread.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/roborace/robotrace1.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/roborace/playSession.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/roborace/robotrace2.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
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
		<h1 id="EntertainmentGames">Entertainment Games</h1>
		<div class="showcase-group">
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide" src="/static_games/umbra/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/umbra/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/umbra/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/umbra/screenshot_3.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/umbra/screenshot_4.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Umbra</h2>
					<p class="showcase-description">
						An abstract puzzle game where the player carefully navigates a ball to the goal while avoiding an
						encroaching darkness. Umbra is played only with the arrow keys.
					</p>
					<p class="showcase-description">
						<a href="/static_games/umbra/cover.html">Play in browser</a>
						<a href="/static_games/umbra/cover.html" title="Play in browser">
							<ComputerIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Umbra -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide" src="/static_games/contrastbounce/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/contrastbounce/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/contrastbounce/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/contrastbounce/screenshot_3.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/contrastbounce/screenshot_4.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Contrast Bounce</h2>
					<p class="showcase-description">
						An abstract puzzle game where the player inverts the colors of the map to fire a ball at the goal. Contrast
						Bounce is played only with the space bar and the mouse.
					</p>
					<p class="showcase-description">
						<a href="/static_games/contrastbounce/cover.html">Play in browser</a>
						<a href="/static_games/contrastbounce/cover.html" title="Play in browser">
							<ComputerIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Contrast Bounce -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/exchangetheworld/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/exchangetheworld/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/exchangetheworld/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/exchangetheworld/screenshot_3.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/exchangetheworld/screenshot_4.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
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
							<img class="slide" src="@/assets/img/portfolio/littleworlds/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/littleworlds/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/littleworlds/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/littleworlds/screenshot_3.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Little Worlds</h2>
					<p class="showcase-description">
						A competitive party game where 2-4 players race to build the largest celestial body they can. With
						Katamari-inspired rolling, players grow and shrink by pulling space rubble into their planets and stealing
						moons from their opponents' orbits.
					</p>
					<p class="showcase-description">
						<a href="https://aidanbuffum.itch.io/little-worlds">Available on itch.io</a>
						<a href="https://aidanbuffum.itch.io/little-worlds" title="Download on itch.io">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Little Worlds -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/houseparty/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/houseparty/board.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/houseparty/playSession.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/houseparty/playSession2.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>House Party</h2>
					<p class="showcase-description">
						A cooperative game where 3-6 players are throwing a house party but it could get very
						dangerous very fast. Players must navigate the house, escort guests, help them sober up, and send the
						rowdy ones home to keep the party under control.
					</p>
					<p class="showcase-description">
						<a href="https://www.thegamecrafter.com/games/house-party2">Available on The Game Crafter</a>
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
							<img class="slide" src="@/assets/img/portfolio/idigit/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/idigit/screenshot_title.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/idigit/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/idigit/screenshot_winner.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/idigit/WPIShowfest_Spring2019.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>I Dig It</h2>
					<p class="showcase-description">
						A fast-paced, local muliplayer, competitive digging game. 2-4 Players must quickly dig holes to drop their
						opponents into the abyss and be the last one standing.
					</p>
					<p class="showcase-description">
						<a href="https://aidanbuffum.itch.io/i-dig-it">Available on itch.io</a>
						<a href="https://aidanbuffum.itch.io/i-dig-it" title="Download on itch.io">
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
							<img class="slide" src="@/assets/img/portfolio/wizardsvsrobots/titleSquare.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/wizardsvsrobots/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/wizardsvsrobots/screenshot_4.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/wizardsvsrobots/screenshot_5.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/wizardsvsrobots/screenshot_8.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Wizards vs. Robots</h2>
					<p class="showcase-description">
						An action platformer game about a wizard destroying robots. The player can switch between 3 different
						spells, unlocking different spells based on the path they take, each with their own effects and advantages
						to fight the evil robots in their way.
					</p>
					<p class="showcase-description">
						<a href="https://aidanbuffum.itch.io/wizards-vs-robots">Available on itch.io</a>
						<a href="https://aidanbuffum.itch.io/wizards-vs-robots" title="Download on itch.io">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Wizards vs. Robots -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/joe/titleSquare.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/joe/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/joe/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/joe/screenshot_3.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/joe/screenshot_4.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Joe</h2>
					<p class="showcase-description">
						A short comedy role playing game with nothing out of the ordinary. You play as Joe A. Verage. Outside your
						day-job as a barista, you're just an average joe. Everybody in town knows you. Your boss likes your hard
						work. You have a face. Grab some coffee. Have some fun!
					</p>
					<p class="showcase-description">
						<a href="https://aidanbuffum.itch.io/joe">Available on itch.io</a>
						<a href="https://aidanbuffum.itch.io/joe" title="Download on itch.io">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Joe -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/murderbeewrote/titleSquare.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/murderbeewrote/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/murderbeewrote/screenshot_2.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/murderbeewrote/screenshot_3.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/murderbeewrote/screenshot_4.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Murder Bee Wrote</h2>
					<p class="showcase-description">
						An infinite platform running game where the player controls a murderer who has switched places with a
						bumblebee. The player must sate their bloodlust by destroying the bees all around them. Punch bees! Impale
						them with the stingers of their fallen! Kill as many bees as possible to earn the ultimate high score!
					</p>
					<p class="showcase-description">
						<a href="https://erikcerini.itch.io/murder-bee-wrote">Available on itch.io</a>
						<a href="https://erikcerini.itch.io/murder-bee-wrote" title="Download on itch.io">
							<DownloadIcon class="filtered showcase-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Murder Bee Wrote -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/takeabreather/cover.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/takeabreather/screenshot_1.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/takeabreather/screenshot_2.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Take A Breather</h2>
					<p class="showcase-description">
						A slapstick puzzle game in which the player controls escaped animals from the aquarium trying to get back to
						the ocean. With QWOP-style gameplay, players control each bone of the animal independently. As a true fish
						out of water, players will have to seek out puddles and other sources of hydration to stop and Take a Breather.
					</p>
					<p class="showcase-description showcase-little-text">
						<a href="https://aidanbuffum.itch.io/take-a-breather">Early demo build available on itch.io</a>
						<a href="https://aidanbuffum.itch.io/take-a-breather" title="Download on itch.io">
							<DownloadIcon class="filtered showcase-little-text-icon"/>
						</a>
					</p>
				</div>
			</div> <!-- Take A Breather -->
		</div>
		<h1 id="NonGameProjects">Non-Game Projects</h1>
		<div class="showcase-group">
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/quiltgen/javascriptEditorInterface.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/quiltgen/javaEvolutionInterface.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/quiltgen/Cool10.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/quiltgen/Warm1000.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Quilt Generation for Computer Science Education</h2>
					<p class="showcase-description">
						As part of the <a href="https://www.code-crafters.org/">Code Crafters</a> project
					</p>
					<p class="showcase-description">
						Two prototype quilt generators and editors aimed to teach computer science to users who are familiar with
						traditional textile crafts but not programming.
					</p>
					<p class="showcase-description" id="readMore-QGfCSE1" style="display:none">
						The first prototype was an evolution-based generator using Java and
						<a href="https://processing.org/">Processing</a>. This prototype generates a number of quilts as
						parameterized by the user and after a configured number of generations, presents the most fit patterns to
						the user.
					</p>
					<p class="showcase-description" id="readMore-QGfCSE2" style="display:none">
						The second prototype was a live web-based editor using JavaScript and <a href="https://p5js.org/">p5.js</a>.
						This prototype provides the user a more code-like interface to begin editing or define patterns entirely
						within the text fields of the editor. The structure of the editor encourages user manipulation of the text
						data. Fabric colors are used as a mechanism to represent computer variables while doing so in a way that
						many experienced quilters may already understand.
					</p>
					<div class="showcase-read-more">
						<button id="readMore-QGfCSE" v-on:click="ToggleReadMore('readMore-QGfCSE', 1, 2)">Read More</button>
					</div>
				</div>
			</div> <!-- Quilt Generation for Computer Science Education -->
			<div class="showcase">
				<div class="showcase-gallery">
					<swiper :cssMode="true" :loop="true" :navigation="true" :pagination="pagination" :modules="modules" class="mySwiper">
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/marioquilts/standard_quilt_output.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/marioquilts/standard_quilt_reference.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/marioquilts/17.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/marioquilts/13.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/marioquilts/07.png">
						</swiper-slide>
						<swiper-slide>
							<img class="slide" src="@/assets/img/portfolio/marioquilts/06.png">
						</swiper-slide>
					</swiper>
				</div>
				<div class="commission-description">
					<h2>Mario Level Generator<br>and Quilt Renderer</h2>
					<p class="showcase-description">
						A system for generating playable Mario levels, evaluating their playability and platforming challenge,
						and rendering levels in the standard graphics of Super Mario world and as a semi-optimized quilting
						pattern.
					</p>
				</div>
			</div> <!-- Mario Level Generator and Quilt Renderer -->
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
								<source type="image/webp" srcset="@/assets/img/commission/emote/showcase_dovewich.webp">
								<source type="image/gif" srcset="@/assets/img/commission/emote/showcase_dovewich.gif">
								<img class="slide no-save-img" src="@/assets/img/commission/emote/showcase_dovewich.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/commission/emote/showcase_Venrir.webp">
								<source type="image/gif" srcset="@/assets/img/commission/emote/showcase_Venrir.gif">
								<img class="slide no-save-img" src="@/assets/img/commission/emote/showcase_Venrir.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/commission/emote/showcase_SinnaVT.webp">
								<source type="image/gif" srcset="@/assets/img/commission/emote/showcase_SinnaVT.gif">
								<img class="slide no-save-img" src="@/assets/img/commission/emote/showcase_SinnaVT.png">
							</picture>
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
								<source type="image/webp" srcset="@/assets/img/commission/helltaker/helltaker_dovewich.webp">
								<source type="image/gif" srcset="@/assets/img/commission/helltaker/helltaker_dovewich.gif">
								<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_dovewich.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/commission/helltaker/helltaker_RinaPumpkin.webp">
								<source type="image/gif" srcset="@/assets/img/commission/helltaker/helltaker_RinaPumpkin.gif">
								<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_RinaPumpkin.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/commission/helltaker/helltaker_Cwstal.webp">
								<source type="image/gif" srcset="@/assets/img/commission/helltaker/helltaker_Cwstal.gif">
								<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_Cwstal.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/commission/helltaker/helltaker_LilineraCh.webp">
								<source type="image/gif" srcset="@/assets/img/commission/helltaker/helltaker_LilineraCh.gif">
								<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_LilineraCh.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/commission/helltaker/helltaker_Beanie_Birrd.webp">
								<source type="image/gif" srcset="@/assets/img/commission/helltaker/helltaker_Beanie_Birrd.gif">
								<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_Beanie_Birrd.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/commission/helltaker/helltaker_ArchieBird.webp">
								<source type="image/gif" srcset="@/assets/img/commission/helltaker/helltaker_ArchieBird.gif">
								<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_ArchieBird.png">
							</picture>
						</swiper-slide>
						<swiper-slide>
							<picture>
								<source type="image/webp" srcset="@/assets/img/commission/helltaker/helltaker_ych.webp">
								<source type="image/gif" srcset="@/assets/img/commission/helltaker/helltaker_ych.gif">
								<img class="slide no-save-img" src="@/assets/img/commission/helltaker/helltaker_ych.png">
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
														src="/3d/minecraft_skin/model_beanie_birrd_chocolate_milk.gltf"
														poster="/3d/minecraft_skin/render_beanie_birrd_chocolate_milk.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_skin/model_beanie_birrd_strawberry_milk.gltf"
														poster="/3d/minecraft_skin/render_beanie_birrd_strawberry_milk.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_skin/model_xstraycat.gltf"
														poster="/3d/minecraft_skin/render_xstraycat.gif"
														camera-controls touch-action="pan-y"/>
						</swiper-slide>
						<swiper-slide>
							<model-viewer class="slide"
														src="/3d/minecraft_skin/model_tyranomaximum.gltf"
														poster="/3d/minecraft_skin/render_tyranomaximum.gif"
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
			</div> <!-- Minecraft Skins -->
		</div>
	</div>
</template>