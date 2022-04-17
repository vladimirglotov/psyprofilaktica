<template>
    <article>
        <br>
        <h3>Эффективное лечение всех видов зависимого поведения в том числе в реабилитационном
            центре “Клиника на Дубровке” признано соответствующими учреждениями: УФСКН, Министерством здравоохранения 
            и Министерством социальной защиты населения, о чем свидетельствуют сертификаты, многочисленные грамоты, благодарности и свидетельства.
        </h3>
        <br>
        <h3>Стационарное лечение в клинике с программой детоксикации лекарственного и аппаратного характера включает 
            комплекс физиотерапевтических процедур и психотерапевтическое воздействие.
        </h3>
        <h1 class="main-title">Немного фото нашего стационара</h1>
        <p>В очень тяжёлых случаях зависимостей мы рекомендуем госпитализацию в стационар нашей клинике. 
            Здесь к Вашим услугам всё необходимое для комфортного пребывания, безопасного и эффективного лечения 
            под наблюдением профильных врачей.  Высокая квалификация специалистов, проверенные методики, 
            одобренные Минздравом,  оснащение клиники современным оборудованием — всё это гарантирует высокие, 
            а главное стабильные результаты. 
        </p>
        <VueSlickCarousel class="last-p" v-bind="settings">
            <div v-for="i in counter" :key="i">
                <img :src="require('../static/photos/' + i + '.jpeg')" alt="Фото клиники">
            </div>
        </VueSlickCarousel>
        <h2 class="main-title">Видео тур по стационару</h2>
        <div class="video-wrapper">
            <iframe width="560%" height="auto" src="https://www.youtube.com/embed/1IwpTvkZRtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <licenses />
    </article>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    const Licenses = () => ({
        component: import('../components/Licenses.vue')
    })
export default {
    name: 'about-us',
    components: { 
        VueSlickCarousel,
        Licenses 
    },
    data: () => ({
            settings: {
            "dots": true,
            "arrows": false,
            "autoplay": true,
            "lazyLoad": 'progessive',
            "infinite": false,
            "speed": 500,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "centerMode": true,
            "swipeToSlide": true
        }
    }),
    	head() {
		let title = 'Клиника на Дубровке | Фото и видео нашего стационара';
		let description = 'Здесь к Вашим услугам всё необходимое для комфортного, безопасного и эффективного лечения под наблюдением профильных врачей.'
		return {
			title,

			link: [
				{rel: 'canonical', href: 'https://psyprofilaktica.ru/about-us'},
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
					content: 'https://psyprofilaktica.ru/about-us'
				},
				{
					hid: 'og:site_name',
					name: 'og:site_name',
					content: 'Вызов нарколога на дом | Клиника на Дубровке'
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
					content: 'Клиника на Дубровке | Фото и видео нашего стационара'
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: 'Здесь к Вашим услугам всё необходимое для комфортного, безопасного и эффективного лечения под наблюдением профильных врачей.'
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
    computed: {
        counter() {
            return 23
        }
    }
}
</script>

<style lang="less">
.slick-slide img {
    margin: 0 auto;
}
.video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* задаёт высоту контейнера для 16:9 (если 4:3 — поставьте 75%) */
    height: 0;
    overflow: hidden;
    & iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-width: 0;
        outline-width: 0;
    }
}

@media screen and (max-width: 950px) {
    .slick-dots {
        bottom: -80px;
    }
    .slick-slider {
        margin-bottom: 80px;
    }
}
</style>