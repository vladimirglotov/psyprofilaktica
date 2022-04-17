<template>
	<footer class="footer">
		<!-- <div class="footer-wrapper"> -->
			<div class="footer__info">
				<img src="/narcology-logo.png" loading="lazy" alt="Логотип клиники">
				<!-- <span>Услуги нарколога на дому.<br> Быстро.&nbsp; Анонимно.&nbsp;Круглосуточно.</span> -->
			</div>
			<div class="footer__info">
				<div class="footer__contacts">
					<div class="footer__phones">
						<a href="tel:+78007074061">+7 (800) 707 40 61</a>
						<a href="tel:+74951250828">+7 (495) 125 08 28</a>
						<a class="footer__button whatsapp" href="#">Whats'app</a>
						<a class="footer__button telegram" href="#">Telegram</a>
               			<a href="mailto:info@psyprofilaktica.ru">info@psyprofilaktica.ru</a>

					</div>
				</div>
			</div>
			<div class="footer__info">
				<div class="footer__adresses">
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
			<div class="footer__info">
				<strong>Лицензия № ЛО-77-01-018664
Оказанаие медицинских услуг — ООО НКЦ «Профилактика»</strong>
				<nuxt-link to="/agreement">Политика конфиденциальности</nuxt-link>
				<strong>©2022. Все права защищены</strong>
				<div class="no-display">
					<a target="_blank" href="https://icons8.com/icon/16733/whatsapp">WhatsApp</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
					<a target="_blank" href="https://icons8.com/icon/63306/телеграмма-app">Телеграмма App</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

					<a target="_blank" href="https://icons8.com/icon/53438/громкость-звонка">Громкость звонка</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

					<a href="https://icons8.com/icon/58590/последние-24-часов">Последние 24 часов icon by Icons8</a>
					<a href="https://icons8.com/icon/43345/диплом-1">Диплом 1 icon by Icons8</a>
					<a href="https://icons8.com/icon/90DtQDwQICcZ/handshake">Handshake icon by Icons8</a>
					<a href="https://icons8.com/icon/xFxdQJa5faG7/больница-3">Больница 3 icon by Icons8</a>
					<a href="https://icons8.com/icon/86898/солнечные-очки">Солнечные очки icon by Icons8</a>
					<a href="https://icons8.com/icon/XmeZGSP5GYSR/скорая-помощь">Скорая помощь icon by Icons8</a>



					<a href="https://icons8.com/icon/QPT8HzHFQ3v4/мужской-разговор">Мужской разговор icon by Icons8</a>
					<a href="https://icons8.com/icon/96384/палец-вверх">Палец вверх icon by Icons8</a>
					<a href="https://icons8.com/icon/42414/сообщение">Сообщение icon by Icons8</a>
					<a href="https://icons8.com/icon/99329/диплом-2">Диплом 2 icon by Icons8</a>
					<a href="https://icons8.com/icon/96494/спикер-женщина-на-конференции">Спикер-женщина на конференции icon by Icons8</a>
					<a href="https://icons8.com/icon/42331/группы-пользователей">Группы пользователей icon by Icons8</a>
				</div>
			</div>
		<!-- </div> -->
	</footer>
</template>

<script>
export default {
    name: 'MyFooter'
}
</script>

<style lang="less">
i {
	color: #E00505;
}
.footer-wrapper {
	display: flex;
	justify-content: space-between;
	width: 100%;
	// height: 140px;
	// padding-right: 30px;
	// padding-left: 80px;
}
.footer {
	margin: 0 auto;
	max-width: 1100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px dashed red;
	strong {
		text-align: center;
		padding: 3px 0;
	}
	// height: 200px;
	padding: 20px 0;
	&__info {
		width: 25%;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		min-width: 200px;
		&:first-child {
			font-size: 17px;
		}
		&:first-child, &:last-child {
			width: 280px;
		}

		img {
			height: 270px;
			width: 264px;
			border-radius: 50%;
			// margin-bottom: 10px;
			// border: 1px solid lightgray;
			// box-shadow: 0px 0px 15px lightgray;
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
			margin: -1px 0;
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

}

// @keyframes rotate {
//   from {
//     // transform: scale(.85);
// 	transform: rotate(0deg);
//   }
//   70% {
// 	transform: rotate(20deg);
//     // transform: scale(1);
//   }
//   to {
//     // transform: scale(.85);
// 	transform: rotate(0deg);
//   }
// }
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
	.footer__info img {
		height: 230px;
	}
	
}
@media screen and (max-width: 950px) {
	.footer {
		flex-wrap: wrap;
		justify-content: center;
		&__info {
			margin-bottom: 15px;
			min-width: 240px;
			text-align: center;
		}
		&__contacts {
			width: 100%;
		}
		&__phones {
			margin: 0 auto;
			align-items: center;
		}
		a {
			font-size: 20px;
			text-align: center;
			margin: 5px;
		}
		strong:last-child {
			font-size: 14px;
		}
		&__button {
			height: 30px;
			width: 145px;
		}
		&__adresses > div {
			height: 25px;
			margin: 6px;
		}
		&__adresses a {
			display: inline-block;
			padding: 6px 0;
			// margin: 10px;
		}
		&__adresses a::before {
			left: -15px;
			top: 5px;
		}
	} 
}
</style>