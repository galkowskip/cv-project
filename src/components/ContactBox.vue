<template>
    <div class="contact-box">

        <div class="contact-box__title">
            Contact
        </div>

        <div class="contact-box__content ">
            <a href="tel:48736449753" class="contact-box__contact-item contact-item">
                <div class="contact-item__icon">
                    <PhoneIcon />
                </div>
                <div class="contact-item__value">
                    +48 736-449-753
                </div>
            </a>

            <a href="mailto:galkowski.p97@gmail.com" class="contact-box__contact-item contact-item">
                <div class="contact-item__icon">
                    <EmailIcon />
                </div>
                <div class="contact-item__value">
                    galkowski.p97@gmail.com
                </div>
            </a>
        </div>

        <div class="contact-box__social-media">

            <a href="https://github.com/galkowskip">
                <GithubIcon />
            </a>

            <a href="https://www.linkedin.com/in/pawe%C5%82-ga%C5%82kowski-24b891154/">
                <LinkedinIcon />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">

import PhoneIcon from "./icons/PhoneIcon.vue";
import EmailIcon from "./icons/EmailIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import LinkedinIcon from "./icons/LinkedinIcon.vue";
</script>

<style lang="scss">
.contact-box {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    &__title {
        font-size: 24px;
        font-weight: 700;
        color: #000;
    }

    &__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }

    &__social-media {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;

        a {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: #fff;
            border: 2px solid #000;
            transition: box-shadow 0.2s ease-in-out;

            &:hover {
                box-shadow: 0 0 8px 0 var(--main-color);
            }
        }
    
    }
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    color: #000;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: var(--main-color)
    }

    &__icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 100%;
            height: 100%;
        }
    }

    &__value {
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
    }
}
</style>