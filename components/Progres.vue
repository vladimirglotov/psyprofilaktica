<template>
    <div class="progres">
		<h2 class="main-title cd">Вернем вам радость жизни!</h2>
        <div class="progres__wrapper">
            <img class="progres__background" src="../static/writnings.jpeg" loading="lazy" alt="Надписи на стене">
            <div class="darken"></div>
            <div class="progres__content">
                <div class="progres__item">
                    <img class="progres__image" src="data:image/png;base64,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" loading="lazy" alt="Иконка группы людей"/>
                    <span class="progres__number cd">707 +</span>
                    <span class="progres__text cd">Людей поправились с нашей помощью</span>
                </div>
                <div class="progres__item">
                    <img class="progres__image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAEgElEQVR4nO2cP4wUVRzHv8+YCwoEUO/801gRES8xhEKNMWi0sEATAhWVaGElkUS0MRIwklhbWWhPcxqjRqOnhaExBhVWMVgohTSH3nnkLDjuPhbzG252b2d3Z96b3dm590k2uzPzm+/7zXffvN++2Z2VIpFIJBKJRCIbEVdmJ2BK0iuS9kvaKWlzyKSGwJKkS5I+lfSec26urFBhA4FDkj6UtLVsozVjUdIR59xM5S0Bh4BVEj4C9gG17X3AAWClM197PAl8bNtWgANVJzMFLFqDxyttLADAJLDQL1/gDYtZAO6qMqG303eyskYCApwaNF/gE4s9WWVCP1kj+yprJCBF8gWesthzVSZ0zRrZUlkjASmSL7DVYherTAiAyhoITNF8yx7fLUV3iLQTDfTk1qI7jNNpPAxiD/Rk4B7onOs57Ut7Zr+4phF7oCfRQE+igZ5EAz2JBnoyNAOBs8B3dVkOxTB74KokarRcL8btYkMn8WLCiIgGehKLiCexiNSFWEQipYgGehKLiCexiNSFWEQipYgGehKLiCexiNSFWEQipYgGelLbIjKAniP5ee5le7wODP1XEYV/XOSB1yAPTEja7Jybt1WnJL2ZCXlX0hZJb1n8DklLzrnr/qkPgSqLCPAS8I818RcwQ3K3wDLwvD2Wbd0McMVi/waOjDr/gagqAeAh1m5V+Jd2jmXijnVsS2NvAA+OKv+BqdDAoyb9gS1Pm1knusSesG3Ttvy+7Xu0qvyHNgYCZyWtOuee6Lbcgzvt+bIkOedaklrdAp1znbcpXOnQCE6dZiJtAJuAw5IO2qprJdpM9zkIHAY2ldAYDiFPYRv3fs+MZ0vA/hI6zwH/ZXQu5Y2HjRoDgW9N7hzwMrDNQ2ubafxsml/nxDXKwPQet6kQeqY5aZpXc7aXyr+uU7nv7fnVgJrpR54fAmqGI3APfIzks98ysCeA3h7TWgEezYlpzilsel+a5JkAWmdM64seMc0xEHiEZAaxDOwNoPcwcN164OM5MY0y8CuTOx1CzzRP9+qFTTMwrcLbQ+iZ5h0bqQqnNz5/Q6DPgZJmbdWP3tlVQeAeuJtk1pASciayKye2OT3QOferpGckLdiq25X8P01Rdkq6zV7PS3raOfebf4Zr1NJAkhnIZ5K2a+2CQ5n/qUn3QdIOSZ8TcHYj1dBAO8BZSdOSfpGUVuL7bfvA1wMl3WfP7yi5BDYtaTa0iUEgPC2S/6rZTfL5bQWY64jpdUV6zva5AewyrQv9Gm2KgRfI9BLgRZLvNyApKCnpdyLP2ms6Yq4CL2R0+po4Gvc86TiwNvMyMRPAAyQ9E2C+y/Gn61oWO1GmrbFi0AOyuFY2DjgO/An8AbwG3J3RavXRGn8TSa7Rne93OllcesAXgXsG1LwI3JvZlkdb3FjQz7zUwC6G5JqXo33TnF5tjaWJeWQOqrB5GY11JmbfmEaTMdBrnGL9WLfhDCzc87porRsqQuZaS0KZl9FrMzFEjrUmpHkZzZsmhtKsLaHNy+hOAudD69aOMgVjVNr/A6ZeUq09+0NxAAAAAElFTkSuQmCC" loading="lazy" alt="Иконка лицензии"/>
                    <span class="progres__number cd">100 %</span>
                    <span class="progres__text cd">Безопасные и эфективные методики</span>
                </div>
                <div class="progres__item">
                    <img class="progres__image" src="data:image/png;base64,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" loading="lazy" alt="Иконка группы людей"/>
                    <span class="progres__number cd">10</span>
                    <span class="progres__text cd">Бригад по Москве</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Progres'
}
</script>

<style lang="less">

.progres {
    // height: 90px;
    margin-bottom: 36px;
    &__wrapper {
        position: relative;
        max-width: 900px;
        border-radius: 20px;
        margin: 0 auto;
        overflow: hidden;
        height: 400px;
    }
    &__background {
        margin-top: -12%;
    }
    &__content {
        position: absolute;
        display: flex;
        // justify-content: ;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    &__item {
        width: 33.3%;
        // height: 230px;
        padding-top: 6%;
        display: flex;
        align-items: center;
        // justify-content: center;
        flex-direction: column;
    }
    &__image {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        margin-bottom: 12%;
    }
    &__number {
        color: white;
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 2%;
    }
    &__text {
        color: white;
        font-size: 24px;
        font-weight: 500;
        text-align: center;
    }
}
@media screen and (max-width: 950px) {
	.progres {
        &__wrapper {
            height: auto;
            max-height: 460px;
        }
        &__background {
            margin-top: 0;
        }
        &__content {
            padding-right: 10px;
            padding-left: 10px;
        }
    }
}
@media screen and (max-width: 600px) {
	.progres {
        &__image {
            height: 40px;
            width: 40px;
        }
        &__number {
            font-size: 30px;
        }
        &__text {
            font-size: 13px;
        }
    }
}
</style>