<template>
    <div class="tiles">
        <div class="tiles__item">
            <div class="tiles__round">
                <img src="data:image/png;base64,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" loading="lazy" alt="Часы"/>
            </div>
            <div class="tiles__info">
                <h3 class="tiles__title">Наркологическая помощь 24/7</h3>
                <p class="tiles__text">Работаем без выходных и праздников!</p>
            </div>
        </div>
        <div class="tiles__item">
            <div class="tiles__round">
                <img src="data:image/png;base64,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" loading="lazy" alt="Сертификат" />
            </div>
            <div class="tiles__info">
                <h3 class="tiles__title">Сертификаты</h3>
                <p class="tiles__text">Наша деятельность лицензирована министерством здравоохранения</p>
            </div>
        </div>
        <div class="tiles__item">		
            <div class="tiles__round">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAFuUlEQVR4nO2bW2gcVRjHf9vU2DZtWhXUpqCgFrV4AfES0SrFtgj2wQut1xSEWuvtQWgrFUVBHxStDyJeKwr6IOKDFzSWprbJtlKlNGjFW72kaqWWaE2aaBKTjA/fOczsZCY7uztzzo6eHwzLzjc73/98e87M950zAw6Hw+FwOByODGkAdqrNUQUrAQ/40raQPNIAfI0EcKVlLblE9759wFTLWnKH63014npfDbjeVyO6931L9r2vAHQCH2fsxwjzgIeBg5jrfa3K148GfGVGM/AE8BfSGA/Yi5lr30blb6MBX5lwLvAd0oh/gNeA81I6906gOIm9AOxXvltT8mmUVuAw0oBPgQUpn78IdAW+hwOqh+9+JJi54mTgENKAt4BpBnyGA5rb4TsF+AQRvxk7eV6uh+8aRPjPwGxLGvTw9YArLGmoiqPxh+51lrXcq3S8bVlHRdyAiN5jWwhwHDAO9CPVT10yH3gMCdjvwCgSwDU2RQXQKdQptoWEOQp4FD9gwW0ASZ7rgb2IpjNsCwnSALyDCBsBXgIWAs+rfZvsSSuhATiCDONjLGsp4WkkUL/hpwiN6rsHXGhJV5iLET3f2BYS5HpE1BBwUWD/CrW/24aoGOoukZ4P9CGi7gzZOmL2T0YTsJuJ19C0ty+Au5EUyxrTkN7lAW+EbKch15kBKkuc9aXA1NYNtFSgL1VewJ8EnRWyPa5sL1dwvsuBMWAYmbHJilnA1fgz4N3I9dooNynnfzOxscGbR9Kaswk/P3soJY3lmIMfxHsM+QTgdCQV8IDVEfblyvZZBefUQ7cbySdNca3yu8uUw+nA58rp6zHHbFH2uxKeUw/dEbIdulE04yf6RtikHH4FzIywn4rcPAaRIVKOmcD3mB26QWZjMIBtytkgcFaEvQlZ6fKAVxKeU1cqezA7dDV6CGe+QrcA+Zc84NYIeyMyUapXu+YlOOeVSG8dIvoPyZo5SEXiATdn5eREYAPwi3L0asQxDcCbyn4QyQHLcSxwQP1mXSpKk9OM9DwdvE5kxjw1pgBLkXWLEfykcxcyTIMUgBeV/TDJbwI64EXSER9ePAp/7yQ6ke5gYg5bEwUkUNrBCBLIpUQ3VCfMg8AlCX3crn7zJ+nNyYUXj8LftzMxeKvIaGVuN/KAzwZkCMdxnxIyjFzPknAp/mL68ho0VkO4AilicVb6NuQGMIbMxiRhBX7wnslIVxKCFcgqWyL05Gk/pVNYURyP3Hz00HkW++sROn3ZYUtAI3Jt1EG8MeKYs4En8dOfQZJXJ1mjK5A+myKmIs+16J51ACnjtgG/UnrBfhepoesFXYH02hZSQHpVDxPvcoeQ4Xq+NXXx6CHcaVtIkDOBxcAi5DmYeiVYgbRZ1pIrwhXINtyz2JEkqUK2UMWy5v8l2uNIkDReyN4DXIPBOcD/AuEqZDM5fMCyHghWIe51iiqpyxQmT+gq5I9Kf5jqpGGOma4+xyv9oQugsEh9uveRq+AE/FVAdxOpgEakbPsBCd5W6jAvXoYIG0Au0O3IQ5aay4APkbWTWu1HlK+rYrSEq5F2/CqknTp7uBLk0d6oRZtRZA3kDmT2Om27BzwSoSe8JvIU/vTVjFRanCLLEHFDwFpgrtrWqX2jasvK7hHfEzUF/AngB2tuccp8hAhbG2Fbj99TsrRvTaDzHHXsvgTHGqUfETY3wtaCH4As7f0JdM7AHyl1hW5gHNuRubc4upj8FdViGXs5/5oL1HE9CY41StIG2Pb/Hv6qYF1RrgGdSC+Mo6uMfQfV98BGpOfp4PUBJ01yrlQoBkRVstm8BibZ+pA1m6rJuha+JWJfm0F7FGPAT8BzyDp1R5njrbAY/+62HukVLcizM8OU5nFZ2MfJ2fu/UTxAfCWyGnlTM+olxFrt48D9BtpnhCXIWkMvUsu+jzyNpVkIfKBstdp7la8lGbTD4XA4HA6Hw+Eo4V9rEGA2bxqs8AAAAABJRU5ErkJggg==" loading="lazy" alt="Руки" />
            </div>
            <div class="tiles__info">
                <h3 class="tiles__title">Мотивация</h3>
                <p class="tiles__text">Психологическая мотивация убедит больного в необходимости лечения!</p>
            </div>
        </div>
        <div class="tiles__item">
            <div class="tiles__round">
                <img src="data:image/png;base64,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" loading="lazy" alt="Больница" />
            </div>
            <div class="tiles__info">
                <h3 class="tiles__title">Собственный стационар</h3>
                <p class="tiles__text">При психиатрических патологиях, тяжелых состояниях, при обострениях</p>
            </div>
        </div>
        <div class="tiles__item">
            <div class="tiles__round">
                <img src="data:image/png;base64,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" loading="lazy" alt="Очки" />
            </div>
            <div class="tiles__info">
                <h3 class="tiles__title">Полная анонимность</h3>
                <p class="tiles__text">Гарантия абсолютной анонимности и защиты от постановки на учет.</p>
            </div>
        </div>
        <div class="tiles__item">
            <div class="tiles__round">
                <img src="data:image/png;base64,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" loading="lazy" alt="Скорая помощь" />
            </div>
            <div class="tiles__info">
                <h3 class="tiles__title">Быстрое реагирование</h3>
                <p class="tiles__text">Приедем в течении часа или вернём деньги! Проверьте и убедитесь!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tiles'
}
</script>

<style lang="less">
.tiles {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	max-width: 1000px;
	margin: 0 auto;
	padding: 10px;
	height: 490px;
	background-color: #008FD5;
	border-radius: 4px;
	margin-bottom: 32px;
	&__item {
		display: flex;
		flex-basis: 29%;
		flex-shrink: 1;
		box-sizing: border-box;
		width: 29%;
		background-color: white;
		margin: 15px;
		border-radius: 6px;
		transition: all 0.3s;
	}
	&__item:hover {
		.tiles__title {
			transition: all 0.3s;
			color: #247FFB;
		}
		.tiles__round {
			transition: all 0.3s;
			background-color: #c9dfff;;
		}
		img {
			transition: all 0.3s;
			color: white;
		}
	}
	&__round {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 60px;
		height: 60px;
		margin-top: 40px;
		margin-left: 15px;
		border-radius: 50%;
		box-shadow: 0px 4px 15px lightgrey;
		transition: all 0.3s;
	}
	img {
		height: 50px;
		width: 50px;
	}
	&__info {
		width: 60%;
		padding-top: 20px;
		padding-left: 10px;

	}
	&__title {
		font-size: 18px;
		text-align: center;
		cursor: default;
	}
	&__text {
		margin-top: 10px;
		text-align: center;
		padding-right: -10px;
		line-height: 20px;
		cursor: default;
	}
}
@media screen and (max-width: 950px) {

	.tiles {
		max-width: 460px;
		height: auto;
		&__item {
			flex-basis: 100%;
			width: 100%;
			padding-bottom: 15px;
			max-width: 400px;
		}
	}
}
</style>