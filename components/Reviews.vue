<template>
    <div id="reviews" class="reviews">
		<h2  class="main-title">Отзывы наших клиентов</h2>
        <div class="reviews__wrapper">
            <div class="reviews__card">
                <div class="reviews__icon">
                    <img src="../static/icons/review.png" loading="lazy" alt="Человек">
                </div>
                <span class="reviews__name cd">Ирина</span>
                <p class="reviews__text cd">Вызывала нарколога на дом из клиники на Дубровке для супруга. Доктор приехал за полчаса. 
                    Обходительный и хороший. Поставил капельницу, даже несмотря на то, что собственно у супруга трудности с венами. 
                    Дал нам исчерпывающую информацию, проконсультировал по всем вопросам, ответил в полной мере на все мои вопросы, 
                    оставил рекомендации. Спасибо, вам за работу!
                </p>
                <div class="reviews__class"></div>
            </div>
            <div class="reviews__card">
                <div class="reviews__icon">
                    <img src="../static/icons/review.png" loading="lazy" alt="Человек">
                </div>
                <span class="reviews__name cd">Светлана Николаевна</span>
                <p class="reviews__text cd">Хочу выразить благодарность лично Дмитрию Александровичу и бригаде, сопровождающей его. 
                    Они оказали настоящую поддержку мне и моему мужу, который в очередной раз ушел в запой. Я обралась в клинику 
                    на Дубровке, не смотря на категоричный отказ мужа кодироваться. Приехавшая бригада убедила супруга в 
                    необходимости процедуры. Не пьет уже неделю. Это, конечно, не большой срок, но надеюсь, что алкоголизм мужа 
                    остался в прошлом.
                </p>
                <div class="reviews__class"></div>
            </div>
             <div class="reviews__card">
                <div class="reviews__icon">
                    <img src="../static/icons/review.png" loading="lazy" alt="Человек">
                </div>
                <span class="reviews__name cd">Виктория</span>
                <p class="reviews__text cd">В новогодние праздники супруг ушёл в запой почти на 2 недели, а когда пришло время, он 
                    не смог вернутся к прежней жизни. Муж согласился на лечение на дому. Из клиники к нам приехал Александр, 
                    который не только провёл все необходимые процедуры, но и после продолжительного разговора с мужем и убедил 
                    пройти его лечение в клинике. Чего не удалось сделать ни мне, ни нашей дочери. После кодировки и лечения в 
                    стационаре муж не пьёт уже почти год.
                </p>
                <div class="reviews__class"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Reviews'
}
</script>

<style lang="less">
.reviews {
margin-bottom: 36px;
    &__wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 0 10px 0;
    }
    &__card {
        display: flex;
        align-items: center;
        flex-direction: column;
        // width: 33.3%;
        min-width: 160px;
        // height: 450px;
        margin: 20px;
        max-width: 300px;
        border-radius: 10px;
        padding: 55px 25px 55px 25px;
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 10%);
        position: relative;
        overflow: hidden;
    }
    &__name {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 20px;
    }
    &__icon {
        border-radius: 50%;
        height: 70px;
        width: 70px;
        box-shadow: 0px 10px 40px 5px rgba(0, 0, 0, 10%);
        margin-bottom: 24px;
        padding: 15px;
    }
    &__text {
        color: #8c8c8c;
    }
    &__class {
        position: absolute;
        height: 200px;
        width: 200px;
        border-radius: 50%;
        right: -115px;
        top: -115px;
        background-color: #2575fc;
        background-image: url('../static/icons/finger.png');
        background-size: 20%;
        background-position: 20% 80%;
        background-repeat: no-repeat;

;
    }
}
</style>