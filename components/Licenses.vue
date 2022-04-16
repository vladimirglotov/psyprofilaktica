<template>
    <div id="licenses" class="licenses">
		<h2 class="main-title">Наша медицинская деятельность лицензирована.</h2>
        <div class="licenses__wrapper">
            <img src="../static/licenses/1.jpeg" loading="lazy" alt="Фото лицензии">
            <img src="../static/licenses/2.jpeg" loading="lazy" alt="Фото лицензии">
            <img src="../static/licenses/3.jpeg" loading="lazy" alt="Фото лицензии">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Licenses'
}
</script>

<style lang="less">
.licenses {
    padding: 0 10px;
    margin-bottom: 24px;
    &__wrapper {
        display: flex;
    }
    img {
        width: 33.33%;
        transition: all 0.3s;
    }
    img:hover {
        transform: scale(1.2);
    }
}
</style>