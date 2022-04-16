<template>
	<div id="prices">
		<h2 class="main-title">Выезд нарколога на дом: цена</h2>
		<h3>Для расчёта точной стоимости услуги, пожалуйста, свяжитесь с нами</h3>
		<div class="article prices">
			<div class="prices__card prices__card-first">
				<h3 class="prices__title">Стандарт</h3>
				<div class="prices__price-wrapper">
					<div class="prices__label">
						<span class="prices__from cd">от</span>
						<span class="prices__price cd">3500</span>
					</div>
				</div>
				<div class="prices__actions">
					<div class="prices__actions-wrapper">
						<span class="cd">выезд нарколога на дом</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd">детоксикация (капельница)</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd">консультация и рекомендации врача</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd">снотворное</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd">витаминный комплекс</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd">седативные препараты</span>
					</div>
				</div>
				<a href="tel:+74951250828" class="prices__button">Консультация</a>
			</div>
			<div class="prices__card prices__card-second">
				<h3 class="prices__title">Двойное очищение</h3>
				<div class="prices__price-wrapper">
					<div class="prices__label">
						<span class="prices__from">от</span>
						<span class="prices__price">5000</span>
					</div>
				</div>
				<div class="prices__actions">
					<div class="prices__actions-wrapper">
						<span class="cd">выезд нарколога на дом</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd">детоксикация (капельница)</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd">консультация и рекомендации врача</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd"><strong>расширенный</strong> витаминный комплекс</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd">снотворное</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd">седативные препараты <strong>на несколько дней</strong></span>
					</div>
				</div>
				<a href="tel:+74951250828" class="prices__button">Консультация</a>
			</div>
			<div class="prices__card prices__card-third">
				<h3 class="prices__title">Премиум</h3>
				<div class="prices__price-wrapper">
					<div class="prices__label">
						<span class="prices__from">от</span>
						<span class="prices__price">7000</span>
					</div>
				</div>
				<div class="prices__actions">
					<div class="prices__actions-wrapper">
						<span class="cd">выезд нарколога на дом</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd">детоксикация (капельница)</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd">консультация и рекомендации врача</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd">снотворное</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd"><strong>усиленный</strong> витаминный комплекс</span>
					</div>
					<div class="prices__actions-wrapper">
						<span class="cd"><strong>расширенный комплекс</strong> седативных препаратов <strong>на несколько дней вперед</strong></span>
					</div>
				</div>
				<a href="tel:+74951250828" class="prices__button">Консультация</a>
			</div>
		</div>

	</div>
</template>

<script>
export default {
    name: 'Prices'
}
</script>

<style lang="less">
.prices {
	display: flex;
	justify-content: center;
	&__title {
		position: absolute;
		left:50%;
		transform:translate(-50%, 0);
		color: #112847;
		font-size: 22px;
		font-weight: 700;
		text-align: center;
	}
	&__card {
		position: relative;
		width: 100%;
		max-width: 280px;
		border: 1px solid grey;
		border-radius: 10px;
		margin: 15px;
		padding-top: 50px;
		padding-left: 5%;
		background-color: white;
	}
	&__card:hover {
		.prices__button {
			color: #ffffff;
			background-color: #247ffb;
			border-color: #247ffb;
			box-shadow: 8px 8px 30px 0px rgba(0, 0, 0, 10%);
		}
	}
	&__card-first {
		height: 560px;
	}
	&__card-second {
		height: 595px;
		.prices__title {
			top: 35px;
		}
	}
	&__card-third {
		height: 630px;
	}
	&__actions-wrapper {
		display: flex;
		align-items: center;
		padding: 5px 0;
		// padding-right: 10px;
		span {
			line-height: 20px;
			margin-left: 10px;
		}
		i {
			font-weight: 900;
			font-size: 22px;
			color: #008FD5;
		}
	}
	&__actions {
		margin-left: -10px;
		padding-right: 10px;
	}
	&__price-wrapper {
		margin-top: 70px;
		margin-bottom: 30px;
	}
	&__label {
		display: flex;
		height: 88px;
		background-color: #2575fc;
		border-radius: 48px 0 0 48px;
		box-shadow: 20px 20px 38px 0px rgba(0, 0, 0, 10%);
		padding-top: 25px;
		padding-left: 50px;
		color: white;
	}
	&__from {
		font-size: 18px;
	}
	&__price {
		font-size: 44px;
    	font-weight: 700;
		line-height: 50px;
		margin-left: 10px;
	}
	&__button {
		position: absolute;
		bottom: 20px;
		left: 20%;
		font-size: 13px;
		font-weight: 800;
		text-transform: uppercase;
		color: #112847;
		background-color: rgba(37,117,252,0);
		padding: 14px 30px 14px 30px;
		border-style: solid;
		border-width: 1px 1px 1px 1px;
		border-color: #112847;
		border-radius: 999px 999px 999px 999px;
	}
}
@media screen and (max-width: 950px) {
    .prices {
        // &__wrapper {
            flex-wrap: wrap;
        // }
    }
}
</style>