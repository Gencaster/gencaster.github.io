<template>
    <footer>
        <p>2022 – 2023</p>
        <a href="/imprint">Imprint</a>
    </footer>
</template>

<style lang="scss" scoped>
    footer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
        margin-bottom: 2rem;

        a,
        p {
            @include padding-h(1ch);
        }

        p {
            margin-bottom: 0;
        }
    }
</style>