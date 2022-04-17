<template>
    <div ref="container" class="container">
        <Header @openForm="isFormVisible = true" />
        <div class="content-wrapper">
            <nuxt />
            <my-footer v-if="canLoad" />
        </div>
        <transition name="fade">
        <div v-if="isBurgerVisible" class="burger-menu">
			<nav @click="toggleBurger" class="burger-menu__wrapper">
				<nuxt-link  class="burger-menu__link" to="/">Главная</nuxt-link>
				<nuxt-link  class="burger-menu__link" to="/kodirovanie">Кодирование на дому </nuxt-link>
				<nuxt-link  class="burger-menu__link" to="/vivod-iz-zapoya">Вывод из запоя на дому</nuxt-link>
				<nuxt-link  class="burger-menu__link" to="/kapelnica">Капельница от похмелья</nuxt-link>
				<nuxt-link  class="burger-menu__link" to="/snyatie-lomki">Снятие ломки на дому</nuxt-link>
				<nuxt-link  class="burger-menu__link" to="/about-us">О нас</nuxt-link>
				<span class="burger-menu__link" @click="goToPrices">Цены</span>
			</nav>
		</div>
        </transition>
        <div @click="toggleBurger" class="burger">
			<div class="burger-sticks" :class="{'active' : isBurgerVisible}">
			<span></span>
			</div>
		</div>
        <div class="up-button mobile-only-flex">&#8679;</div>
        <div @click="openForm" class="call-button">Заказать звонок</div>
        <div @click.self="closeForm" :class="{'visible': isFormVisible}" class="form">
            <div v-if="success" class="form__wrapper">
                <span class="form__success">Ваша заявка успешно отправлена! Скоро мы вам перезвоним.</span>
                <div @click="closeForm" class="form__close"></div>
            </div>
            <div v-else-if="error" class="form__wrapper">
                <span class="form__item">Что-то пошло не так. Попробуйте перезагрузить страницу и повторить.</span>
                <div @click="closeForm" class="form__close"></div>
            </div>
            <div v-else class="form__wrapper">
                <h3 class="form__item">Здравствуйте!<br> Хотите мы вам перезвоним?</h3>
                <div class="form__item">
                    <span>Ваше имя:</span>
                    <input ref="name" v-model="name" type="text">
                </div>
                <div class="form__item">
                    <span>Ваш номер:</span>
                    <input type="text" v-mask="'+7(###)-###-##-##'"  placeholder="+7(000)-000-00-00" v-model="phone">
                </div>
                <button @click="sendContacts" class="form__item">Перезвоните мне!</button>
                <small>Нажимая на кнопку "Позвоните мне", я даю свое согласие на обработку персональных данных и принимаю условия <nuxt-link to="/agreement">соглашения</nuxt-link></small>
                <div @click="closeForm" class="form__close"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import { bus } from '../assets/bus'
import { autoScrollToNode } from '../assets/autoScroll'
const MyFooter = () => ({
	component: import('../components/MyFooter.vue')
})

export default {
    name: 'Default',
    data: () => ({
        canLoad: false,
        isBurgerVisible: false,
        isFormVisible: false,
        name: '',
        phone: '',
        success: false,
        error: false
    }),
    components: {
        Header,
        MyFooter
    },
    watch: {
        success: {
            handler: function(nv) {
                if (nv) {
                    setTimeout(() => {
                        this.isFormVisible = false
                        this.success = false
                    }, 3000)
                }
            }
        }
    },
    methods: {
        toggleBurger() {
            this.isBurgerVisible = !this.isBurgerVisible

            if (this.isBurgerVisible) {
                this.$refs['container'].style.height = '100vh'
                this.$refs['container'].style.overflow = 'hidden' 
            } else {
                this.$refs['container'].style.height = 'auto'
            }
        },
        async sendContacts() {
            const token = '5229234478:AAFYUDxRZyEJL7i2qlqnOQ2Lf0M9ANu0mRs'
            const chat_id = '565439172'
            // if (this.phone.length === 18) {
                const name = this.name !== '' ? '<i>Имя:</i> ' + '<strong>' + this.name + '</strong>' + '++' : ''
                const phone = '<i>Телефон:</i> ' +  '<strong>%2B' + this.phone.slice(1) + '</strong>'
                const text = name + phone
                const res = await this.$axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${text}`)
                if (res.data && res.data.ok === true) {
                    this.success = true
                }
            // }
        },
        openForm() {
            this.isFormVisible = true
            this.$refs['container'].style.height = '100vh'
            this.$refs['container'].style.overflow = 'hidden'   
        },
        closeForm() {
            this.isFormVisible = false
            this.$refs['container'].style.height = 'auto'
            this.$refs['container'].style.overflow = 'hidden'  
        },
        goToPrices() {
            if (this.$route.path === '/') {
                this.scroll("#prices")
            } else {
                this.$router.push('/?goToPrices=true')
            }
        },
		scroll(node) {
            autoScrollToNode(this, node)
        }
    },
    mounted() {
        bus.$on('open-Form', this.openForm)
        this.canLoad = true
    }
}
</script>

<style lang="less">
    .content-wrapper {
        max-width: 1280px;
        padding: 0 20px 0 20px;
        margin: 0 auto;
    }
    // .burger-menu {
    //     display: none;
    // }
    @media screen and (max-width: 950px) {
        .main-title:first-child {
            margin-bottom: 5px;
        }
        .container .call-button {
            bottom: 20px;
            right: 10px;
            height: 80px;
            width: 80px;
            font-size: 14px;
            line-height: 14px;
        }
        .form {
            padding: 20% 10%;
        }
        .form__wrapper {
            max-width: none !important;
            border-radius: 20px;
        }
        .burger-menu {
            display: block;
            position: absolute;
            z-index: 1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.9);

            &__wrapper {
                padding: 35% 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-between;
                position: relative;
            }
            &__link {
                display: block;
                width: 80%;
                text-align: center;
                font-weight: 500;
                font-size: 24px;
                background-color: white;
                box-shadow: 0px 0px 15px 5px white;
                border-radius: 10px;
            }
		}
        .container {
            // position: relative;
            transition: all 0.3s;
        }
        .burger {
			display: block;
			position: absolute;
			width: 46px;
			height: 43px;
			top: 20px;
			right: 20px;
			z-index: 2;
		}
		.burger-sticks::after, .burger-sticks::before {
			content: '';
			position: absolute;
			background-color: black;
			width: 100%;
			height: 2px;
			left: 0;
            transition: all 0.3s;
			// position: relative;
			// height: 100%;
			// width: 100%;
		}
		.burger-sticks::before {
			top: 0;
		}
		.burger-sticks::after {
			bottom: 0;
		}
		.burger-sticks span {
			position: absolute;
			background-color: black;
			left: 0;
			width: 100%;
			height: 2px;
			top: 21px;
            transition: all 0.3s;
		}
        .burger-sticks.active::before {
            transform: rotate(45deg);
            top: 20px;
        }
        .burger-sticks.active::after {
            transform: rotate(-45deg);
            bottom: 21px;
        }
        .burger-sticks.active span {
            transform: scale(0);
        }
    }
    .up-button {
        position: fixed;
        bottom: 120px;
        // right: 10px;
        right: -60px;
        height: 50px;
        width: 50px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: dodgerblue;
        // background-color: #00c261;
        color: white;
        font-size: 24px;
    }
    .call-button {
        position: fixed;
        display: flex;
        bottom: 40px;
        right: 30px;
        height: 130px;
        width: 130px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        // background-color: dodgerblue;
        background-color: rgba(14,197,11,.8);
        color: black;
        font-size: 22px;
        text-align: center;
        line-height: 18px;
		animation: pulse 2.5s ease-in-out infinite;
        cursor: pointer;
    }
    .form.visible {
        display: flex;
    }
    .form {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: none;
        align-items: flex-start;
        justify-content: flex-end;
        background: rgba(255, 255, 255, 0.7);
        z-index: 3;
        &__wrapper {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            // margin: 0 auto;
            padding: 30px 30px;
            background-color: rgb(167, 223, 243);
            // border-radius: 20px;
            max-width: 350px;
            position: relative;
        }
        &__item {
            display: flex;
            flex-direction: column;
            margin: 15px 0;
            font-weight: 300;
            letter-spacing: 0.5px;
        }
        &__close {
            position: absolute;
            top: 30px;
            right: 20px;
            // font-size: 24px;
            height: 20px;
            width: 20px;
            cursor: pointer;
        }
        &__success {
            text-align: center;
        }
        input {
            border-radius: 10px;
            padding: 2px 15px;
            letter-spacing: 1px;
            text-align: center;
            text-transform: uppercase;
            // width: 100%;
        }
        input, button {
            outline: none;
            border: none;
            height: 40px;
            box-shadow: 2px 2px 29px rgba(0, 0, 0, 17%);
        }
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            background-color: #00c261;
            color: white;
            border-radius: 20px;
            padding: 5px 20px;
            // border: 1px solid white;
        }
        small {
            font-size: 12px;
            font-weight: 200;
            color: rgb(95, 95, 95);
            display: inline-block;
            max-width: 160px;
            line-height: 14px;
            text-align: center;
        }
        // input, input:placeholder {
        // }
        	&__close::after, &__close::before {
			content: '';
			position: absolute;
			background-color: black;
			width: 100%;
			height: 2px;
			left: 0;
            transition: all 0.3s;
			// position: relative;
			// height: 100%;
			// width: 100%;
		}
		&__close::before {
			transform: rotate(45deg);
		}
		&__close::after {
			transform: rotate(-45deg);
		}

    }
</style>