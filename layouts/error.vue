<template>
    <div class="error">
        <span class="error__title">Кажется, что-то пошло не так.&nbsp;</span>
        <span class="error__text">Попробуйте перейти&nbsp;на <nuxt-link class="error__link" to="/">Главную&nbsp;страницу</nuxt-link></span>
    </div>
</template>

<script>

export default {
    name: 'error'
    
}
</script>

<style lang="less">
.error {
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &__text {
        font-size: 24px;
    }
    &__link {
        color: rgb(226, 92, 92);
    }
}
</style>