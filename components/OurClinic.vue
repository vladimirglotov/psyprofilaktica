<template>
    <div id="clinic" class="clinic">
		<h2  class="main-title cd">Наш стационар</h2>
		<p class="cd">Для очень тяжёлых случаев зависимостей, мы рекомендуем госпитализацию в стационар нашей клинике. 
			Высокая квалификация специалистов, проверенные методики, одобренные Минздравом,  
			оснащение клиники современным оборудованием — всё это гарантирует высокие, а главное 
			стабильные результаты.
		</p>
		<div class="clinic__photos">
			<div class="clinic__image">
				<img src="../static/clinic/1.jpeg" loading="lazy" alt="Фото стационара">
			</div>
			<div class="clinic__image">
				<img src="../static/clinic/2.jpeg" loading="lazy" alt="Фото стационара">

			</div>
			<div class="clinic__image">
				<img src="../static/clinic/3.jpeg" loading="lazy" alt="Фото стационара">
			</div>
			<div class="clinic__image">
				<img src="../static/clinic/4.jpeg" loading="lazy" alt="Фото стационара">
			</div>
			<div class="clinic__image">
				<img src="../static/clinic/5.jpeg" loading="lazy" alt="Фото стационара">
			</div>
			<div class="clinic__image">
				<img src="../static/clinic/6.jpeg" loading="lazy" alt="Фото стационара">
			</div>

		</div>
    </div>
</template>

<script>
export default {
    name: 'OurClinic'
}
</script>

<style lang="less">
.clinic {
	&__photos {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		padding-top: 24px;
	}
	&__image {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-basis: 300px;
		width: 300px;
		min-width: 350px;
		padding: 20px;
	}
	img {
		border-radius: 20px;
	}

}
</style>