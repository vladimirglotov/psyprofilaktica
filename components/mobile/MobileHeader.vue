<template>
	<mobile-header class="mobile-header">
		<div class="mobile-header-wrapper">
			<div class="mobile-header__info">
				<img src="../static/narco-logo.png" loading="lazy" alt="Логотип клиники">
				<span class="cd">Услуги нарколога на дому.<br> Быстро.&nbsp; Анонимно.&nbsp; Круглосуточно.</span>
			</div>
			<div class="mobile-header__info">
				<div class="mobile-header__contacts">
					<div class="mobile-header__text">
						<span class="cd">Свяжитесь с нами</span>
						<span class="cd">Или оставьте заявку и мы перезвоним</span>
					</div>
					<!-- <div> -->
						<div class="mobile-header__phones">
							<a href="tel:+78007074061">+7 (800) 707 40 61</a>
							<a href="tel:+74951250828">+7 (495) 125 08 28</a>
							<a class="mobile-header__button whatsapp" href="#">Whats'app</a>
							<a class="mobile-header__button telegram" href="#">Telegram</a>
							<div class="mobile-header__call">
								<a href="#">Заказать звонок</a>
							</div>
						<!-- </div> -->
					</div>
				</div>
			</div>
		</div>
		<nav class="mobile-header__navigation">
			<nuxt-link to="/">Главная</nuxt-link>
			<nuxt-link to="/alcohol-free">Лечение алкоголизма</nuxt-link>
			<nuxt-link to="/narcotic-free">Лечение наркомании</nuxt-link>
			<a href="#licenses">Лицензии</a>
			<a href="#prices">Цены</a>
			<nuxt-link to="/about-us">О нас</nuxt-link>
		</nav>
	</mobile-header>
</template>

<script>
export default {
	name: 'Mobile-header'
}
</script>

<style lang="less">
i {
	color: #E00505;
}
.mobile-header-wrapper {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 140px;
	padding-right: 30px;
	padding-left: 80px;
	max-width: 1100px;
	margin: 0 auto;
}
.mobile-header {
	height: 200px;
	padding-top: 10px;
	box-shadow: 0px 5px 10px lightgrey;
	border-bottom: 1px solid lightgray;
	// background-color: rgb(204, 242, 255);
	&__info {
		width: 33.3%;
		height: 100%;
		display: flex;
		align-items: center;
		// justify-content: center;
		flex-direction: column;
		&:first-child {
			font-size: 17px;
		}
		&:first-child, &:last-child {
			width: 280px;
		}

		img {
			height: 80px;
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
		& a:last-child {
			font-size: 24px;
			// color: rgba(0, 0, 0, 0.7);

			color: #00c261;
			// color:#25d366;

		}
	}
	&__call {
		margin-left: -32px;
		position: relative;
		a::before {
			content: '';
			position: absolute;
			background-image: url('../../static/icons/phone.png');
			background-repeat: no-repeat;
			background-position: center;
			background-size: 50%;
			background-color: rgb(156, 240, 156);
			// background-color: #18e880;
			border: 1px solid white;
			// box-shadow: 0px 0px 15px rgb(156, 240, 156);
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
		// justify-content: center;
		width: 135px;
		height: 24px;
		border: 1px dashed #008FD5;
		// border: 1px dashed rgb(250, 171, 171);
		// box-shadow: 0px 2px 2px lightgrey;
		border-radius: 10px;
		font-size: 14px;
		position: relative;
		transition: all 0.3s;
		&.telegram::before {
			content: '';
			position: absolute;
			background-image: url('../../static/icons/telegram.png');
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
			background-image: url('../../static/icons/whatsapp.png');
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
		// justify-content: space-between;
		text-align: right;
		margin-right: 10px;
		font-size: 14px;
	}
	&__contacts {
		display: flex;
		height: 90%;
		margin: 0 -40%;
	}
	&__navigation {
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1000px;
		margin: 0 auto;
		a {
			font-size: 20px;
			font-weight: 500;
			color: rgba(0, 0, 0, 0.6);
			// color: #E00505;
			letter-spacing: 1px;
			// margin: 0 4%;
			&:hover {
				color: mediumvioletred;
			}
		}
		a.nuxt-link-active {
			color: rgba(0, 0, 0, 0.8);
			// color: #E00505;
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
	.mobile-header-wrapper {
		padding-left: 10px;
		padding-right: 0px;
	}
	.mobile-header__navigation {
		justify-content: space-around;
	}

}

</style>