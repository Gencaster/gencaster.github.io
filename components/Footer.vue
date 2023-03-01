<template>
    <footer>
        <a href="/imprint">Imprint</a>
        <p>2022 – 2023</p>
    </footer>
</template>

<style lang="scss" scoped>
    footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
        margin-bottom: 2rem;

        a,
        p {
            @include padding-h(1ch);
        }

        p {
            margin-bottom: 0.25rem;
        }
    }
</style>