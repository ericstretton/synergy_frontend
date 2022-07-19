<template>
    <div id="footer">
        <h3>Project Synergy</h3>
        <h3>2022 ©</h3>
    </div>
</template>

<script>
    export default {
        name: "PageFooter"
    }
</script>

<style lang="scss" scoped>
    #footer {
        width: 100vw;
        height: 10vh;
        background-color: bisque;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 50%, 50%;
    }

    @media screen and (max-width: 350px) {
        
    }

    @media screen and (min-width: 1100px){
        #footer {
            height: 100%;
            align-items: end;
            h3{
                align-items: end;
                padding-bottom: 0;
            }
        }
    }
</style>