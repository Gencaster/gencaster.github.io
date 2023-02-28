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
        <div class="logo-container">Gencaster</div>
        <nav>
            <ul>
                <li v-for="item in menu_items">
                    <a :href="item.href" :target ="item.external ? '_blank' : '_self'">{{ item.name }}</a>
                </li>
            </ul>
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

    @include onScreen('tablet-landscape-up') {

    }
    
    @include onScreen('macbook-up') {
        @include padding-h($bodyPaddingL_H);
        @include padding-v($bodyPaddingL_V);
    }
    }

    a {
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
</style>
