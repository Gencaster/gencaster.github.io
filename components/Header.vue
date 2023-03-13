<script setup>
const props = defineProps({
    logo_src: String,
})

const menu_items = [
    {
        name: "Contact",
        href: "mailto:contact@gencaster.org",
        external: false
    },
    {
        name: "Github",
        href: "https://github.com/GenCaster/gencaster.github.io",
        external: true
    },
    {
        name: "About",
        href: "/about/",
        external: false
    },
    {
        name: "News",
        href: "/news/",
        external: false
    },
]

let isOpen = false;
function toggleOpen(ev) {
    // somehow the :class binding doesn't work ¯\_(ツ)_/¯
    // isOpen = !isOpen;
    ev.target.classList.toggle('open');
}
</script>


<template>
    <div class="header-container">
        <a href="/" class="site-title">
            <div class="logo-container">
                <img :src="logo_src" alt="Gencaster Logo">
            </div>
            <p class="site-title-name">
                Gencaster
            </p>
        </a>
        <nav role="navigation">
            <div id="menuToggle">
                <!--
                    A fake / hidden checkbox is used as click reciever,
                    so you can use the :checked selector on it.
                    -->
                <input type="checkbox" />

                <button @click="toggleOpen" id="hamburger" class="hamburger" :class="{ open: isOpen }">
                    <span class="line" :class="{ open: isOpen }"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>

                <h1 v-if="isOpen">TEST v-if binding</h1>

                <ul id="menu">
                    <li v-for="item in menu_items">
                        <a :href="item.href" :target="item.external ? '_blank' : '_self'">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.header-container {
    @include fontStyle('largeBodyText');
    @include padding-h($bodyPadding_H);
    @include padding-v($bodyPadding_V);


    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    z-index: 1;

    @include onScreen('tablet-portrait-up') {
        @include padding-h($bodyPaddingM_H);
        @include padding-v($bodyPaddingM_V);
    }

    @include onScreen('tablet-landscape-up') {}

    @include onScreen('macbook-up') {
        @include padding-h($bodyPaddingL_H);
        @include padding-v($bodyPaddingL_V);
    }
}

.logo-container {
    display: flex;
    gap: 0.5ch;
    align-items: center;
    margin-top: -7px;

    img {
        height: 36px;
        width: 36px;
    }

}


.site-title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
    text-decoration: none;
    
    p.site-title-name {
        position: relative;
        top: -2px;
        margin-bottom: 0;
    }
}


nav a {
    text-decoration: none;

    &::after {
        display: none;
    }

    &:hover {
        text-decoration: underline;
    }
}

ul {
    list-style: none;
    display: flex;
    flex-flow: column nowrap;

    @include onScreen('tablet-landscape-up') {
        flex-direction: row;
    }

    li {
        @include onScreen('tablet-landscape-up') {
            @include margin-h(1ch);
            
            &:last-of-type {
                margin-right: 0;
            }
        }
    }

}

input, .hamburger {
    display: none;
}

@include onScreen('phone-and-tablet-landscape-only') {
    $burgerTransition : 200ms ease-in-out;

    #menuToggle {
        display: block;
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
        .no-js input {
            display: block;
            width: 40px;
            height: 32px;
            position: absolute;
            top: -7px;
            left: -5px;

            cursor: pointer;

            opacity: 0;
            /* hide this */
            z-index: 11;
            /* and place it over the hamburger, as a no-js fallback */

            -webkit-touch-callout: none;
        }

        .hamburger {
            @include padding-v(1rem);
            @include padding-h(1rem);
            @include margin-v(-1rem);
            @include margin-h(-1rem);

            display: block;
            border: 0;
            background-color: transparent;
            cursor: pointer;
            position: relative;
            z-index: 10;
        }

        .hamburger .line {
            background-color: $black;
            display: block;
            margin: 5px 0;
            height: 2px;
            width: 30px;
        }

        input:checked~.hamburger .line:nth-child(1),
        .hamburger.open .line:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
        }

        input:checked~.hamburger .line:nth-child(2),
        .hamburger.open .line:nth-child(2) {
            opacity: 0;
        }

        input:checked~.hamburger .line:nth-child(3),
        .hamburger.open .line:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
        }
    }

    #menu {
        @include padding-h($bodyPadding_H);
        @include padding-v(3.5rem);

        position: absolute;
        top: -$bodyPadding_V;
        right: -$bodyPadding_H;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        background: $grey;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        /* to stop flickering of text in safari */

        transform-origin: 0% 0%;
        transform: translate(105%, 0);

        transition: transform $burgerTransition;

        @include onScreen('tablet-portrait-up') {
            @include padding-h($bodyPaddingM_H);

            top: -$bodyPaddingM_V;
            right: -$bodyPaddingM_H;
        }

        li {
            padding: 10px 0;
            font-size: 22px;
        }
    }

    #menuToggle input:checked~ul, 
    .hamburger.open~#menu {
        transform: none;
    }
}
</style>
