<script setup>
const menu_items = [
    {
        name: "Contact",
        href: "/contact/",
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
</script>


<template>
    <div class="header-container">
        <div class="logo-container">
            <a href="/">
                Gencaster
            </a>
        </div>
        <nav role="navigation">
            <div id="menuToggle">
                <!--
            A fake / hidden checkbox is used as click reciever,
            so you can use the :checked selector on it.
            -->
                <input type="checkbox" />

                <!--
            Some spans to act as a hamburger.
    
            They are acting like a real hamburger,
            not that McDonalds stuff.
            -->
                <span></span>
                <span></span>
                <span></span>


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
    a {
        text-decoration: none;
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
        }
    }
}

input {
    display: none;
}

/*
 * Made by Erik Terwan
 * 24th of November 2015
 * MIT License
 *
 *
 * If you are thinking of using this in
 * production code, beware of the browser
 * prefixes.
 */
@include onScreen('phone-and-tablet-landscape-only') {
    $burgerTransition : 200ms ease-in-out;

    #menuToggle {
        display: block;
        position: relative;
        top: 4px;
        left: 0;

        z-index: 1;

        -webkit-user-select: none;
        user-select: none;

        input {
            display: block;
            width: 40px;
            height: 32px;
            position: absolute;
            top: -7px;
            left: -5px;

            cursor: pointer;

            opacity: 0;
            /* hide this */
            z-index: 2;
            /* and place it over the hamburger */

            -webkit-touch-callout: none;
        }

        /*
 * Just a quick hamburger
 */
        span {
            display: block;
            width: 33px;
            height: 3px;
            margin-bottom: 5px;
            position: relative;

            background: $black;
            border-radius: 3px;

            z-index: 1;

            transform-origin: 3px 0px;

            transition: transform $burgerTransition,
                opacity $burgerTransition;
        }

        span:first-child {
            transform-origin: 0% 0%;
        }

        span:nth-last-child(2) {
            transform-origin: 0% 100%;
        }

        /* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
        input:checked~span {
            opacity: 1;
            transform: rotate(45deg) translate(-2px, -1px);
        }

        /*
 * But let's hide the middle one.
 */
        input:checked~span:nth-last-child(3) {
            opacity: 0;
            transform: rotate(0deg) scale(0.2, 0.2);
        }

        /*
 * Ohyeah and the last one should go the other direction
 */
        input:checked~span:nth-last-child(2) {
            transform: rotate(-45deg) translate(0, -1px);
        }
    }

    /*
 * Make this absolute positioned
 * at the top right of the screen
 */
    #menu {
        @include padding-h($bodyPaddingM_H);

        padding-top: 3.5rem;
        position: absolute;
        top: -$bodyPadding_V;
        right: -$bodyPadding_H;
        right: 0;
        width: 50vw;
        height: 100vh;
        box-sizing: content-box;
        align-items: end;
        
        background: $grey;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        /* to stop flickering of text in safari */
        
        transform-origin: 0% 0%;
        transform: translate(100%, 0);
        
        transition: transform $burgerTransition;
        
        @include onScreen('tablet-portrait-up') {
            @include padding-h($bodyPaddingM_H);

            top: -$bodyPaddingM_V;
            right: -$bodyPaddingM_H;
            width: 33vw;
        }

        li {
            padding: 10px 0;
            font-size: 22px;
        }
    }

    /*
 * And let's slide it in from the left
 */
    #menuToggle input:checked~ul {
        transform: none;
    }
}
</style>
