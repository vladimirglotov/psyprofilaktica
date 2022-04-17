<template>
    <div class="questions">
        <span class="questions__text cd">Остались вопросы? Мы&nbsp;ответим!</span>
        <div @click="openForm" class="questions__button">Свяжитесь со мной</div>
    </div>
</template>

<script>
import { bus } from '../assets/bus'
export default {
    name: 'Questions',
    methods: {
        openForm() {
            bus.$emit('open-Form')
        }
    },
    mounted() {

    }
}
</script>

<style lang="less">
.questions {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 700px;
    height: 300px;
    margin: 40px auto 60px auto;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 28px 40px 0 rgba(0, 0, 0, 10%);
    // margin-top: 40px;
    &__text {
        text-align: center;
        color: #E00505;
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 20px;
    }
    &__button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 60px;
        border: none;
        background-color: #67a1f3;
        box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 30%);
        border-radius: 30px;
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.6px;
        cursor: pointer;
    }

}
@media screen and (max-width: 950px) {
	.questions {
        &__text {
            font-size: 34px;
        }
    }
	
}
</style>