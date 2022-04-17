<template>
	<main class="">
		<h1 class="main-title">Нарколог на дом в&nbsp;Москве</h1>
		<div class="navigation">
				<div class="navigation__block">
					<div @click="scroll('#how')" class="navigation__link mobile-only-flex" >Как все происходит?</div>
					<div @click="openForm" class="navigation__link" >Бесплатная консультация</div>
					<div @click="scroll('#doctors')" class="navigation__link" >Наши врачи</div>
					<div @click="scroll('#clinic')" class="navigation__link" >Наш стационар</div>
					<div @click="scroll('#prices')" class="navigation__link mobile-only-flex" href="#prices">Цены</div>
					<div @click="scroll('#reviews')" class="navigation__link" >Отзывы</div>
				</div>
				<!-- <div class="navigation__block"> -->
				<!-- </div> -->
			<!-- </div> -->
		</div>
		<div class="cards">
			<div class="cards__item-wrapper">
				<div class="cards__item">
					<img class="cards__image" src="/cards/kapelnica.jpg" loading="eager" alt="Капельницы">
					<h2>Вывод из запоя&nbsp;на дому быстро</h2>
					<p>Прерывание запоя на дому. Эффективно и безопасно. Подбор самой наилучшей индивидуальной методики.</p>
				</div>
				<div class="cards__button">
					<nuxt-link to="#">Подробнее</nuxt-link>
				</div>
			</div>
			<div class="cards__item-wrapper">
				<div class="cards__item">
					<img class="cards__image" src="/cards/shpritz.jpg" loading="eager" alt="Шприц">
					<h2>Кодирование от алкоголя на дому</h2>
					<p>Избавление от тяги к спиртному. Высокая эффективность, проверенные методики. </p>
				</div>
				<div class="cards__button">
					<nuxt-link to="#">Подробнее</nuxt-link>
				</div>			</div>
			<div class="cards__item-wrapper">
				<div class="cards__item">
					<img class="cards__image" src="/cards/doctor.jpeg" loading="eager" alt="Доктор">
					<h2>Снять похмельный синдром быстро</h2>
					<p>Быстрое избавления даже от самого тяжелого похмелья. Позволяет быстро "прийти в чувства".</p>
				</div>
				<div class="cards__button">
					<nuxt-link to="#">Подробнее</nuxt-link>
				</div>			</div>
			<div class="cards__item-wrapper">
				<div class="cards__item">
					<img class="cards__image" src="/cards/kapelnica2.jpg" loading="eager" alt="Капельница">
					<h2>Снять ломку на&nbsp;дому анонимно</h2>
					<p>Снятие наркотической абстиненции на дому. Сделаем синдром отмены незаметным!</p>
				</div>
				<div class="cards__button">
					<nuxt-link to="#">Подробнее</nuxt-link>
				</div>
			</div>
		</div>
		<article class="article">
			<p class="cd">
				Вызов нарколога на дом – это экстренная помощь для больного алкоголизмом или наркотической 
				зависимостью на стадии обострения. Включает в себя диагностику общего состояния здоровья, 
				снятие интоксикации организма с использованием капельниц, психологическую мотивацию и последующие 
				консультации. Это одна из самых востребованных услуг нашего центра. Медик приезжает по указанному 
				адресу в течение часа ( зачастую это случается быстрее — в течении получаса), выезд анонимный и никто 
				не узнает, что вы обращались к нам! Чтобы заказать услуги нарколога на дом, достаточно написать с помощью 
				формы обратной связи, позвонить нам или заказать обратный вызов. Не затягивайте с принятием решения. 
				Состояния, вызванные длительным употреблением наркотиков и алкоголя, несут в себе негативные последствия 
				для организма.
			</p>
		</article>
		<tiles />
		<article class="article">
			<p class="cd"> Алкоголизм и наркомания стали настоящей проблемой современного общества, бьющей по здоровью, 
				семейному бюджету и отношениям с близкими. Заболевание протекает в несколько стадий, которые
				 различаются степенью опасности для здоровья и жизни. Запущенная болезнь требует соответствующего 
				 лечения, которое проводится амбулаторно или в стационаре.  Наша наркологическая служба клиники на 
				 Дубровке, вот уже много лет помогает зависимым людям избавиться от пагубного пристрастия к алкоголю и 
				 наркотикам. Все специалисты, работающие в нашей службе, имеют богатый опыт работы. Для лечения используются 
				 передовые методики, которые уже ни раз продемонстрировали свою результативность. Всё это, в сочетании с 
				 эффективным медикаментозным сопровождением, существенно увеличивает шансы на полное выздоровление.
			</p>	
			<p class="cd"> Но часто бывает, что человек не признает себя наркоманом или алкоголиком и наотрез отказывается обращаться к врачу, 
				даже в анонимной форме. Но, отказываясь от посещения клиники, такие люди при наступлении обострений обычно соглашаются,
				чтобы нарколог приехал к ним домой, если им гарантируют, что их звонок будет анонимный. Существует возможность вызова
				доктора и без согласия больного, если он находится в невменяемом состоянии и представляет опасность для окружающих.
			</p>
		</article>
		<div class="situations article">
			<h2 class="cd">В каких случаях рекомендуется вызывать доктора:</h2>
			<ul class="cd">
				<li class="cd">длительный запой, из которого больной не может выйти самостоятельно;</li>
				<li class="cd">похмельный синдром;</li>
				<li class="cd">наркотическая ломка;</li>
				<li class="cd">отравление некачественным алкоголем;</li>
				<li class="cd">белая горячка и пр.</li>
			</ul>
			<p class="cd">Нужно помнить, что промедление в таких ситуациях, особенно на запущенных стадиях заболевания, 
				грозит необратимыми последствиями для здоровья больного и может нанести непоправимый вред больному и, 
				порой, даже стоить ему жизни. При сильной интоксикации все органы начинают работать на износ, и 
				попытка отлежаться или заняться самолечением грозит летальным исходом.
			</p>
		</div>
		<h2 id="how" class="main-title">Вызов нарколога нашей клиники на дом</h2>
		<article class="article service">
			<p class="cd">Наша клиника в Москве предоставляет возможность анонимного обращения – чтобы не привлекать внимания соседей. 
				Нарколог прибудет на автомобиле без медицинских атрибутов и поднимется в квартиру, предварительно сняв белый 
				халат. Дипломированные специалисты помогут при ломке или запое, снимут интоксикацию и сопутствующие неприятные 
				симптомы – головную боль, тошноту, рвоту, аллергии, нарушения стула и нервные перевозбуждения.
			</p>
			<h2 class="cd">Услуга вызова нарколога на дом включает в себя:</h2>
			<ul>
				<li class="cd">осмотр пациента, сбор анамнеза;</li>
				<li class="cd">анализы и аппаратную диагностику;</li>
				<li class="cd">купирование острых состояний, вывод из запоя;</li>
				<li class="cd">детоксикацию посредством инфузионной терапии;</li>
				<li class="cd">нормализацию психоэмоционального состояния (медикаментозная терапия и психологическая поддержка);</li>
				<li class="cd">мотивационную беседу на предмет дальнейшего лечения в условиях стационара (при необходимости);</li>
				<li class="cd">консультации родственников и близких больного, как следует вести себя с ним в периоды обострений;</li>
				<li class="cd">содействие в госпитализации – при согласии страдающего алкоголизмом.</li>
			</ul>
			<p  class="cd">Перед началом медицинских манипуляций нарколог в обязательном порядке опрашивает пациента на предмет 
				наличия патологий и хронических болезней, делает анализы и ЭКГ, определяет уровень глюкозы в крови. 
				Практикуется индивидуальный подход к каждому пациенту, на основе проведенной диагностики подбираются 
				необходимые препараты.  Капельница включает в себя растворы для защиты от обезвоживания, витамины и 
				препараты, нормализующие кислотно-щелочной баланс крови и улучшающие сердечно-сосудистую деятельность. 
				В зависимости от показаний, в капельницу могут входить противорвотные, противоаллергические, мочегонные 
				и другие средства, направленные на стабилизацию работы внутренних органов.
			</p>
			<h3 class="cd">Все препараты, используемые при вызове, сертифицированы и соответствуют требованиям российского Минздрава. Наш территориальный охват – Москва и область. Мы работаем круглосуточно и без выходных.</h3>
		</article>
		<!-- <br> -->
		<prices v-if="canLoad" />
		<our-clinic v-if="canLoad" />
		<reviews v-if="canLoad" />
		<contacts v-if="canLoad" />
		<progres v-if="canLoad" />
		<our-doctors v-if="canLoad" />
		<licenses v-if="canLoad" />
		<questions  v-if="canLoad" />
	</main>
</template>

<script>

const Prices = () => ({
	component: import('../components/Prices.vue')
})
const OurClinic = () => ({
	component: import('../components/OurClinic.vue')
})
const Reviews = () => ({
	component: import('../components/Reviews.vue')
})
const Contacts = () => ({
	component: import('../components/Contacts.vue')
})
const Progres = () => ({
	component: import('../components/Progres.vue')
})
const OurDoctors = () => ({
	component: import('../components/OurDoctors.vue')
})
const Licenses = () => ({
	component: import('../components/Licenses.vue')
})
const Questions = () => ({
	component: import('../components/Questions.vue')
})
const Tiles = () => ({
	component: import('../components/Tiles.vue')
})


import Vue from 'vue'
import { autoScrollToNode } from '../assets/autoScroll'
import { bus } from '../assets/bus'
export default Vue.extend({
	name: 'IndexPage',
	components: {
		Prices,
		OurClinic,
		Reviews,
		Contacts,
		Progres,
		OurDoctors,
		Licenses,
		Questions,
		Tiles,
	},
	data: () => ({
		canLoad: false
	}),
	head() {
		let title = 'Вызов нарколога на дом в Москве и Подмосковье - круглосуточно, анонимно, недорого.';
		let description = 'Вывод из запоя | Снятие ломки | Лечение алкоголизма и наркомании | Поможем быстро, безопасно и эффективно, собственный стационар.';

		return {
			title,

			link: [
				{rel: 'canonical', href: 'https://psyprofilaktica.ru/'},
			],

			meta: [
				{
					hid: 'description',
					name: 'description',
					content: description
				},
				{
					hid: 'Document-state',
					name: 'Document-state',
					content: 'Dynamic'
				},
				{
					hid: 'Revisit',
					name: 'Revisit',
					content: '7 days'
				},
				{
					hid: 'Author',
					name: 'Author',
					content: 'glotov.vladimir@mail.ru'
				},
				{
					hid: 'og:url',
					name: 'og:url',
					content: 'https://psyprofilaktica.ru/'
				},
				{
					hid: 'og:site_name',
					name: 'og:site_name',
					content: 'Вызов нарколога на дом | Клиника на Дубровке.'
				},
				{
					hid: 'og:locale',
					name: 'og:locale',
					content: 'ru_RU'
				},
				{
					hid: 'og:type',
					name: 'og:type',
					content: 'website'
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: 'Вызов нарколога на дом в Москве - круглосуточно, анонимно, недорого.'
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: 'Нарколог на дом в Москве и Подмосковье: лицензия, полный спектр услуг, быстро, безопасно, эффективно, доступно, собственный стационар.'
				},
				{
					hid: 'og:image',
					name: 'og:image',
					content: 'https://psyprofilaktica.ru/narcology-logo.png'
				},
				{
					hid: 'og:image:width',
					name: 'og:image:width',
					content: '500'
				},
				{
					hid: 'og:image:height',
					name: 'og:image:height',
					content: '500'
				},
				{
					hid: 'robots',
					name: 'robots',
					content: 'index, follow'
				},
			],
		}
	},
	methods: {
		scroll(node) {
            autoScrollToNode(this, node)
        },
		openForm() {
            bus.$emit('open-Form')
        }
	},
	mounted() {
		this.canLoad = true
		console.log(this.$route.query)
		if (this.$route.query.goToPrices) {
			this.$nextTick(() => {
				this.scroll('#prices')
			})
		}
	},
	beforeDestroy() {
		// this.$route.query = {}
	}
})
</script>

<style lang="less">
 a.mobile-only-block , a.mobile-only-flex {
    display: none;
  }
  div.mobile-only-block, div.mobile-only-flex {
	  display: none;
  }
h3 {
	text-align: center;
}
h4 {
	margin-top: -20px;
	text-align: center;
	margin-bottom: 16px;
}
.navigation {
	margin-bottom: 36px;
	&__text {
		font-weight: 500;
		display: block;
		text-align: center;
	}
	&__wrapper {
		display: flex;
		// max-width: 1100px;
		// width: 100%;
		margin: 0 auto;
	}
	&__link {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 30px;
		width: 240px;
		// border: 1px dashed lightcoral;
		box-shadow: 0px 0px 5px #008FD5;
		background-color: rgb(242, 242, 242);
		border-radius: 20px;
		min-width: 140px;
		color: black;
		font-size: 16px;
		font-weight: 500;
		letter-spacing: 0.6px;
		transition: all 0.3s;
		cursor: pointer;
		// margin-left: 10%;
		// margin-top: 4px;
	}
	&__link:hover {
			transform: translateY(-1px);
			box-shadow: 0px 0px 7px #008FD5;
		}
	&__block {
		// margin-top: 15px;
		display: flex;
		justify-content: space-between;
		// padding: 0 100px;
		// flex-direction: column;
		width: 100%;
		

		i {
			font-size: 18px;
			font-weight: 700;
			margin-right: 6px;
		}
		// a, i {
		// 	color: #008fd5;
		// }
	}
}
.cards {
	display: flex;
	justify-content: center;
	margin-bottom: 32px;
	&__item-wrapper {
		width: 25%;
		max-width: 235px;
		height: 450px;
		padding: 10px;
		border-radius: 6px;
		position: relative;
		&:hover {
			background-color: dodgerblue;
			transition: all 0.5s;
			a {
				background-color: white;
				color: black;
			}
			img {
				border-radius: 0;
			}
		}
	}
	&__item {
		background-color: #f2f2f0;
		padding-bottom: 5px;
		border-radius: 0px 0px 6px 6px;
	}
	&__image {
		margin-bottom: 6px;
		border-radius: 6px;
		width: 215px;
		height: 215px;
	}
	&__button {
		position: absolute;
		width: 100%;
		bottom: 0;
		padding-bottom: 30px;
		padding-right: 10px;
	}
	h2 {
		text-align: center;
		font-size: 17px;
		font-weight: 400;
		color: #008fd5;
		cursor: default;
	}
	p {
		text-align: center;
		line-height: 18px;
		cursor: default;
		padding: 0 4px 0 4px;
	}
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100px;
		height: 34px;
		margin: 0 auto;
		// padding-top: 20px;
		// position: absolute;
		// left: 70px;
		// bottom: 18px;
		background-color: #008FD5;
		color: white;
		border-radius: 4px;
	}
}
.article {
	// max-width: 1000px;
	margin: 0 auto;
	margin-bottom: 32px;
}

.situations {
	i {
		font-weight: 900;
		color: red;
		margin-right: 5px;
	}
}
.service {
	i {
		font-weight: 900;
		color:#247FFB;
		margin-right: 5px;
	}
}
@media screen and (max-width: 950px) {
	.mobile-only-block {
      display: block !important;
    }
    .mobile-only-flex {
      display: flex !important;
    }
	.navigation {
		&__block {
			padding: 0;
			flex-wrap: wrap;
			justify-content: center;
		}
		&__link {
			margin: 10px 10px;
			width: 250px;
		}
	}
	.cards {
		flex-wrap: wrap;
		justify-content: space-around;
		a {
			left: 20%;
		}
		&__item-wrapper {
			width: 47%;
			box-shadow: 0px 4px 4px lightgrey;
			margin-bottom: 15px;

		}
		p {
			padding: 0;
		}
	}
}

</style>
