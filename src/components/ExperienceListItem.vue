<template>
    <div class="experience">
        <div class="experience__image">
            <img :src="`${item.image}`" alt="Experience" />
        </div>
        <div class="experience__content">
            <div class="experience__text">
                <div class="experience__name">
                    {{ item.company }} - {{ item.position }}
                </div>
                <div class="experience__value">{{ item.from }} - {{ item.to }}</div>
            </div>
            <div class="experience__description">
                {{ item.description }}
            </div>
        </div>
    </div>
</template>

<script setup>
const item = defineProps({
    image: String,
    position: String,
    company: String,
    from: String,
    to: String,
    description: String,
});
</script>

<style scoped lang="scss">
.experience {
    display: flex;
    flex-direction: row;
    gap: 24px;

    .experience__image {
        width: 80px;
        min-height: 80px;
        flex-grow: 1;
        flex-shrink: 0;

        img {
            border-radius: 8px;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .experience__text {
        display: flex;
        align-content: center;
        justify-content: space-between;
        flex-grow: 0;
        flex-shrink: 1;
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 8px;
        }
    }

    .experience__name {
        font-size: 22px;
        font-weight: 600;
    }

    .experience__value {
        font-size: 18px;
        font-weight: 400;
    }

    .experience__description {
        font-size: 16px;
        font-weight: 400;
        text-align: justify;
    }
}
</style>