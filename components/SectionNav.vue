<script setup>
    const sections = ["General", "Features", "Editor", "News", "Support"]
</script>

<template>
    <div>
        <ul>
            <li v-for="section in sections">
                <a :href="'#' + section.toLowerCase()">{{ section }}</a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
div {
    @include padding-v(1.5em);
}

ul {
    padding-left: 0;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;
    justify-content: center;
}

li {
    @include margin-h(1ch);

    text-decoration: none;
}

a {
    text-decoration: none;
    color: gray;
    transition: color 200ms ease-in-out;

    &:hover {
        color: black;
    }
}
</style>