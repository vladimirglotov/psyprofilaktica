<template>
	<header class="header">
		<div class="header-wrapper">
			<div class="header__info">
				<img src="/narco-logo.png" loading="lazy" alt="Логотип клиники">
				<span class="cd">Услуги нарколога на дому.<br> Быстро.&nbsp; Анонимно.&nbsp; Круглосуточно.</span>
			</div>
			<div class="header__info">
				<div class="header__contacts">
					<div class="header__text not-mobile">
						<span class="cd">Свяжитесь с нами</span>
						<span class="cd">Или оставьте заявку и мы перезвоним</span>
					</div>
					<!-- <div> -->
						<div class="header__phones">
							<div class="header__phones-wrapper">
								<a class="header__numbers" href="tel:+78007074061">+7 (800) 707 40 61</a>
								<a class="header__numbers" href="tel:+74951250828">+7 (495) 125 08 28</a>
							</div>
							<div class="header__phones-wrapper">
								<a class="header__button whatsapp" href="https://wa.me/79296142328">Whats'app</a>
								<a class="header__button telegram" href="#">Telegram</a>
								<div class="header__call not-mobile">
									<div @click="$emit('openForm')">Заказать звонок</div>
								</div>
							</div>
						<!-- </div> -->
					</div>
				</div>
			</div>
			<div class="header__info not-mobile">
				<div class="header__adresses">
					<div>
						<a href="https://yandex.ru/maps/?pt=37.457789,55.815089&z=16">Габричевского 5</a>	
					</div>
					<div>
						<a href="https://yandex.ru/maps/?pt=37.765776,55.433961&z=16">Каширское шоссе 58</a>	
					</div>
					<div>
						<a href="https://yandex.ru/maps/?pt=37.435762,55.721600&z=16">Можайское шоссе 10</a>	
					</div>
					<div>
						<a href="https://yandex.ru/maps/?pt=37.808590,55.804526&z=16">Сиреневый бульвар 43</a>	
					</div>
					<div>
						<a href="https://yandex.ru/maps/?pt=37.590075,55.891244&z=16">Шенкурский проезд 3б</a>	
					</div>
					<div>
						<a href="https://yandex.ru/maps/?pt=37.696040,55.711204&z=16">3-й Угрешский проезд 8</a>	
					</div>
				</div>
			</div>
		</div>
		<nav class="header__navigation not-mobile">
			<nuxt-link exact class="header__nav-link" to="/">Главная</nuxt-link>
			<div class="header__nav-link alco">
				<div>Лечение алкоголизма</div>
				<transition name="fade">
				<div class="header__menu alco">
					<nuxt-link class="header__menu-link alco" to="/vivod-iz-zapoya">Вывод из запоя на дому</nuxt-link>
					<nuxt-link class="header__menu-link alco" to="/kodirovanie">Кодирование на дому </nuxt-link>
					<nuxt-link class="header__menu-link alco" to="/kapelnica">Капельница от похмелья</nuxt-link>
				</div>
				</transition>
			</div>
			<div class="header__nav-link narco">
				<div>Лечение наркомании</div>
				<transition name="fade">
				<div class="header__menu narco">
					<nuxt-link  class="header__menu-link" to="/snyatie-lomki">Снятие ломки на дому</nuxt-link>
				</div>
				</transition>
			</div>
			<div class="header__nav-link" @click="scroll('#licenses')">Лицензии</div>
			<div @click="scroll('#prices')" class="header__nav-link">Цены</div>
			<nuxt-link class="header__nav-link" to="/about-us">О нас</nuxt-link>
		</nav>
	</header>
</template>

<script>
import { autoScrollToNode } from '../assets/autoScroll'
export default {
	name: 'Header',
	methods: {
		scroll(node) {
            autoScrollToNode(this, node)
        }
	},
}
</script>

<style lang="less">

i {
	color: #E00505;
}

.header-wrapper {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 140px;
	padding-right: 30px;
	padding-left: 80px;
	max-width: 1100px;
	margin: 0 auto;
}
.header {
	height: 200px;
	padding-top: 10px;
	box-shadow: 0px 5px 10px lightgrey;
	border-bottom: 1px solid lightgray;
	&__burger {
		display: none;
	}
	&__info {
		width: 33.3%;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		&:first-child {
			font-size: 17px;
		}
		&:first-child, &:last-child {
			width: 280px;
		}
		img {
			height: 80px;
			width: 111.4px;
			border-radius: 20px;
			margin-bottom: 10px;
			border: 1px solid lightgray;
			box-shadow: 0px 0px 15px lightgray;
		}
		span {
			font-weight: 500;
			text-align: center;
			max-width: 270px;
		}
	}
	&__phones {
		display: flex;
		flex-direction: column;
		font-size: 17px;
		font-weight: 500;
	}
	&__phones-wrapper {
		display: flex;
		flex-direction: column;
	}
	&__call {
		margin-left: -32px;
		position: relative;
		cursor: pointer;
		div {
			font-size: 24px;
			color: #00c261;
		}
		div::before {
			content: '';
			position: absolute;
			background-image: url('../static/icons/phone.png');
			background-repeat: no-repeat;
			background-position: center;
			background-size: 50%;
			background-color: rgb(156, 240, 156);
			border: 1px solid white;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			left: -60px;
			bottom: 5px;
			transform: rotate(90deg);
			animation: pulse 2.5s ease-in-out infinite;
		}
		
	}
	&__button {
		display: flex;
		padding-left: 45px;
		align-items: center;
		margin-bottom: 4px;
		width: 135px;
		height: 24px;
		border: 1px dashed #008FD5;
		border-radius: 10px;
		font-size: 14px;
		position: relative;
		transition: all 0.3s;
		&.telegram::before {
			content: '';
			position: absolute;
			background-image: url('../static/icons/telegram.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			width: 16px;
			height: 16px;
			left: 22px;
		}
		&.whatsapp::before {
			content: '';
			position: absolute;
			background-image: url('../static/icons/whatsapp.png');
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			width: 15px;
			height: 15px;
			left: 22px;
		}
	}
	&__button:hover {
		transform: scale(1.05);
		border: 1px solid #008FD5;
	}
	&__text {
		display: flex;
		align-items: flex-end;
		flex-direction: column;
		text-align: right;
		margin-right: 10px;
		font-size: 14px;
	}
	&__contacts {
		display: flex;
		height: 90%;
		margin: 0 -40%;
	}
	&__adresses {
		a {
			position: relative;
			display: inline-block;
			font-size: 15px;
			line-height: 14px;
			margin: -2px 0;
			padding-left: 6px;
			&::before {
				content: '';
				position: absolute;
				background-image: url('../static/marker.png');
				background-size: contain;
				background-position: center;
				background-repeat: no-repeat;
				height: 14px;
				width: 14px;
				left: -10px;
				top: -1px;
			}
		}
		div {
			height: 22px;
		}
	}
	&__navigation {
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1000px;
		margin: 0 auto;
		.header__nav-link {
			font-size: 20px;
			font-weight: 500;
			color: rgba(0, 0, 0, 0.6);
			letter-spacing: 1px;
			cursor: pointer;
			position: relative;
			&:hover {
				color: mediumvioletred;
			}
		}
		.header__nav-link.nuxt-link-active {
			color: rgba(0, 0, 0, 0.8);
		}
	}
	&__menu {
		position: absolute;
		display: none;
		flex-direction: column;
		top: 25px;
		left: 0;
		right: 0;
		height: max-content;
		font-size: 16px;
		text-align: center;
		background-color: white;
		padding-top: 5px;
		box-shadow:     
		inset 0px 11px 8px -4px #f3f3f3,
        inset 0px 11px 8px -10px #CCC;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		cursor: default;
	}
	&__menu-link {
		margin: 3px 0;
		padding: 3px 0;
	}
	&__menu-link:last-child {
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		// padding-bottom: 0;
		margin-bottom: 0;
	}
	&__menu-link:hover {
		background-color: lightblue;
	}
	// &__menu-link:first-child {
	// 	box-shadow:     
	// 	inset 0px 11px 8px -6px #f3f3f3,
    //     inset 0px 11px 8px -10px #CCC;
	// }
	.header__nav-link.alco:hover {
		.header__menu.alco {
			display: flex;

		}
	}
	.header__nav-link.narco:hover {
		.header__menu.narco {
			display: flex;
		}
	}

}

@keyframes rotate {
  from {
    // transform: scale(.85);
	transform: rotate(0deg);
  }
  70% {
	transform: rotate(20deg);
    // transform: scale(1);
  }
  to {
    // transform: scale(.85);
	transform: rotate(0deg);
  }
}
@keyframes pulse {
  from {
    transform: scale(.85);
	box-shadow: none;
	  background-color: rgb(187, 255, 187);


  }
  70% {
	  transform: scale(1);
	box-shadow: 0px 0px 30px rgb(156, 240, 156);
	  background-color: rgb(156, 240, 156);
  }
  to {
	  box-shadow: none;
	  background-color: rgb(187, 255, 187);
    transform: scale(.85);
  }
}


@media screen and (max-width: 1030px) {
	.header-wrapper {
		padding-left: 10px;
		padding-right: 0px;
	}
	.header__navigation {
		justify-content: space-around;
	}
}
@media screen and (max-width: 950px) {
	.not-mobile {
		display: none;
	}
	.header-wrapper {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: max-content;
		padding: 20px 20px 10px 20px;
	}
	.header {
		height: max-content;
		position: relative;
		// padding-bottom: 10px;
		&__info {
		width: 100%;
		margin-bottom: 10px;
		}
		&__button {
			height: 35px;
			margin: 4px 0;
		}
		&__phones {
			width: 100%;
			max-width: 320px;
			flex-direction: row;
			justify-content: space-between;
		}
		&__phones-wrapper {
			justify-content: space-around;
		}
		&__contacts {
			width: 100%;
			justify-content: center;
		}
		&__numbers {
			font-size: 20px;
		}
	}
	
}

</style>