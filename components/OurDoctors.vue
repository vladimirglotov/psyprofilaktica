<template>
    <div id="doctors" class="doctors">
		<h2  class="main-title">Наши врачи</h2>
        <div class="doctors__wrapper">
            <div class="doctors__item">
                <div class="doctors__photo">
                    <img src="../static/doctors/boldyrev.jpeg" loading="lazy" alt="Фото врача">
                </div>
                <h3 class="cd">Болдырев Дмитрий Александрович</h3>
                <span class="cd">Нарколог, психиатр, психотерапевт</span>
            </div>
            <div class="doctors__item">
                <div class="doctors__photo">
                    <img src="../static/doctors/chubarov.jpeg" loading="lazy" alt="Фото врача">
                </div>
                <h3 class="cd">Чубаров Илья Дмитриевич</h3>
                <span class="cd">Нарколог</span>
            </div>
            <div class="doctors__item">
                <div class="doctors__photo">
                    <img src="../static/doctors/los.jpeg" loading="lazy" alt="Фото врача">
                </div>
                <h3 class="cd">Лось Дмитрий Павлович</h3>
                <span class="cd">Нарколог, психиатр</span>
            </div>
            <div class="doctors__item">
                <div class="doctors__photo">
                    <img src="../static/doctors/denis.jpeg" loading="lazy" alt="Фото врача">
                </div>
                <h3 class="cd">Новик Денис Русланович</h3>
                <span class="cd">Нарколог</span>
            </div>
            <div class="doctors__item">
                <div class="doctors__photo">
                    <img src="../static/doctors/arashaev.jpeg" loading="lazy" alt="Фото врача">
                </div>
                <h3 class="cd">Арашаев Санжи Очирович</h3>
                <span class="cd">Нарколог, психотерапевт</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurDoctors'
}
</script>

<style lang="less">
.doctors {
    h3 {
        font-size: 20px;
        font-weight: 500;
    }
    span {
        position: absolute;
        text-align: center;
        top: 280px;
        font-size: 14px;
        color: rgb(123, 123, 123);
    }
    &__wrapper {
        display: flex;
        justify-content: center;
    }
    &__item {
        display: flex;
        // justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 10px 28px 10px;
        width: 100%;
        max-width: 200px;
        padding: 20px 20px 20px;
        background-color: #fff;
        box-shadow: 0 28px 40px 0 rgba(0, 0, 0, 10%);
        min-height: 360px;
        position: relative;
        transition: all 0.5s;
        &:hover {
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 50%);
            background-color: #008FD5;
            h3, span {
                color: white;
            }
        }
    }
    &__photo {
        border-radius: 50%;
        width: 125px;
        height: 125px;
        overflow: hidden;
        margin-bottom: 30px;
    }
}
@media screen and (max-width: 950px) {
    .doctors {
        &__wrapper {
            flex-wrap: wrap;
        }
        &__item {
            margin: 5px;
        }
    }
}
</style>