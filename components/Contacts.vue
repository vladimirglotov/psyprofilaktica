<template>
    <div class="contacts">
        <div class="contacts__card card-first">
            <!-- <div>
                <img src="data:image/png;base64,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"/>
            </div> -->
            <span class="contacts__title cd">Работаем 24/7</span><br>
            <!-- <div> -->
                <span class="cd">Без выходных</span>
                <span class="cd">Без перерывов</span>
                <span class="cd">Без праздников</span>
            <!-- </div> -->
        </div>
        <div class="contacts__card card-second">
            <!-- <div>
                <img src="../static/icons/phone.png" alt="">
            </div> -->
            <span class="contacts__title cd">Позвоните нам!</span><br>
            <!-- <div> -->
            <a href="tel:+78007074061">+7 (800) 707 40 61</a><br>
            <a href="tel:+74951250828">+7 (495) 125 08 28</a>
            <!-- </div> -->
        </div>
        <div class="contacts__card card-third">
            <!-- <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAADR0lEQVR4nO3bT2gTQRTH8W/aWktVLFRsDwURRBQF0UO9VPAgiqAFEaHgVfTSY8Gr9CA9CV4EeyziQfRQ9CIeKhYFKf4BFdGDUhBREf9A/VOtjYd5S3Zjt8lkZjeT+D4QbLK7M29ekl83mwpKKaWUUkoppZRSKj+FlMeLuVbROP7pV0s9qmgmbRW2p71C/zep70h9BTrSBjrSBjrSBjqq1MBzQEcehQSqA9MDa8XY7Rmwy2NRjWI78IhkL6oWHfBc/p0HTgOtfmsMUitmrfMke1BTAzuAMeCP3L8HbPJYbGg2ALcxa10ELgKrcGhgZB/wRh77Cpz0UGxojgGfMGt8BxyKbXNuIEAXcCm27RqwrsZiQ9IFXKa0rqtAd9k+XhoYiT9T74HDNgMHZj/VvbO8NfAuMI3JiilKWXEB6LSZoM46MTUvYtYwhVlTtL5y3ho4DdyRn1uAEeCn7PsC6LeZpE76MbUWMbWPUDofjq8vzutbuNw24KHs/xvzW3uFzWQ5aSN5evIU2FnlsZk2EEzDzgALctx9YLPNhBnbiHl1RZFzHlhpcbz3DEyzF5iVY+eAU9T3mmJBapiTmmYxNabJNQPTrAUmYmPcAHptJvekV+aO6piQ2pZTlwxMcxT4KON8AI44jmfjIPBW5v4MHHccry4NBOgBrsfGu4I5cc3KGszHr2i+W0Cfh3Fzy8ClFIBh4LuM+QoYsByjGgMydlHmGsY+f4PIwDRbgBkZdwE4C7TXOFZcu4wVnQHMyFy1CCoDlxKdi/2S8Z8AOxzG2wo8oPSkjOHnSSkXTAMju4GXMscPTFNtvl4oYD63fpMxXgN7PNcYV9cMTLMaGMc+8Ptk3+i4cRnLh6AzMM0g5qpOEXOVZ2iZfYdIXgka9FxL8BmYZj0wGZv3JuZSU7fcDshj0fZJOSYvwTcwcgJzXa6Ycvsi++QtyAxM0wOMAo8xn2HnMN+Ojcq2LDVkBoakYTMwdKn90D/tcGTbwDwysJ6s12fbwOhLmGblbX2agUmagVnRDEzSDHSkGZgRzcCsaAYmaQY60gzMiGZgVlwzsNnvV+Sagc1+v2aagUmagVnRBjrSBjqq9D/WNQcr0FegUkoppZRSSimlrPwFl5x9PLMWNBMAAAAASUVORK5CYII="/>
            </div> -->
            <span class="contacts__title cd">Или напишите</span>
            <!-- <div> -->
                <a href="mailto:info@psyprofilaktica.ru">info@psyprofilaktica.ru</a>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contatcs'
}
</script>

<style lang="less">
.contacts {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 36px;
    span, a {
        color: white;
    }
    &__card {
        width: 33.33%;
        padding: 45px 45px 30px 65px;
    }
    &__card.card-first {
        background-color: #4f5fcd;
    }
    &__card.card-second {
        background-color: #4d89e3;
    }
    &__card.card-third {
        background-color: #4aa8d9;
    }
    &__title {
        font-size: 24px;
        font-weight: 700;
    }
}
@media screen and (max-width: 950px) {
    .contacts {
        // &__wrapper {
            flex-wrap: wrap;
        // }
        a {
            font-size: 20px;
        }
        &__card {
            width: 100%;
            padding-bottom: 45px;
        }
    }
}
</style>