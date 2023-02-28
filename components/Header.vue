<script setup>
const menu_items = [
    {
        name: "Home",
        href: "/",
        external: false
    },
    {
        name: "Github",
        href: "/",
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
    <div>
        <div class="logo-container"></div>
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
    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
</style>
