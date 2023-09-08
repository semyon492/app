<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <router-link to="/" id="home_link" class="navbar-brand">{{ name}}</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link to="/" id="home_link" :class="['nav-link']">Главная</router-link>
            </li>
            <li class="nav-item" v-if="user.is_admin">
                <router-link to="/admin/post" :class="['nav-link']">Poster</router-link>
            </li>
            <li class="nav-item" v-if="user.is_connected">
                <!-- <router-link @click="logout" :class="['nav-link']">Выход</router-link> -->
                <a aria-current="page" href="/" @click="logout" class="nav-link" id="home_link">Выход</a>
            </li>
            <li class="nav-item" v-if="user.is_connected !== true">
                <router-link to="/login" :class="['nav-link']">Вход</router-link>
            </li>
        </ul>
        </div>
    </div>
    </nav>    
</template>

<script>
import config from "/config";

export default {
    name:'Home',
    props: ['user'],
    data() {
        return {
            name: config.title,
        }
    },
    async mounted() {
    },
    methods: {
        logout(){
            localStorage.removeItem('token')
            this.user.is_connected = false;
            this.user.is_admin = false;
        }
    }
}
</script>

<style>

.links a, 
.logout{
    text-decoration: none;
    text-transform: uppercase;
    color: var(--first);
    
    display: flex;
    align-items: center;

    height:100%;
    padding:0 50px;
    
    font-size: 15px;
    font-weight: 600;
}

.navigation .router-link-exact-active, .links a:hover,

:root,:root.light,:root .light {
    --falcon-primary: #2c7be5;
    --falcon-colored-link-hover-color-primary: #2362b7;
    --falcon-secondary: #748194;
    --falcon-colored-link-hover-color-secondary: #5d6776;
    --falcon-success: #00d27a;
    --falcon-colored-link-hover-color-success: #00a862;
    --falcon-info: #27bcfd;
    --falcon-colored-link-hover-color-info: #1f96ca;
    --falcon-warning: #f5803e;
    --falcon-colored-link-hover-color-warning: #c46632;
    --falcon-danger: #e63757;
    --falcon-colored-link-hover-color-danger: #b82c46;
    --falcon-light: #f9fafd;
    --falcon-colored-link-hover-color-light: #fafbfd;
    --falcon-dark: #0b1727;
    --falcon-colored-link-hover-color-dark: #09121f;
    --falcon-gray-black: #000;
    --falcon-colored-link-hover-color-black: black;
    --falcon-gray-100: #f9fafd;
    --falcon-colored-link-hover-color-100: #fafbfd;
    --falcon-gray-200: #edf2f9;
    --falcon-colored-link-hover-color-200: #f1f5fa;
    --falcon-gray-300: #d8e2ef;
    --falcon-colored-link-hover-color-300: #e0e8f2;
    --falcon-gray-400: #b6c1d2;
    --falcon-colored-link-hover-color-400: #c5cddb;
    --falcon-gray-500: #9da9bb;
    --falcon-colored-link-hover-color-500: #7e8796;
    --falcon-gray-600: #748194;
    --falcon-colored-link-hover-color-600: #5d6776;
    --falcon-gray-700: #5e6e82;
    --falcon-colored-link-hover-color-700: #4b5868;
    --falcon-gray-800: #4d5969;
    --falcon-colored-link-hover-color-800: #3e4754;
    --falcon-gray-900: #344050;
    --falcon-colored-link-hover-color-900: #2a3340;
    --falcon-gray-1000: #232e3c;
    --falcon-colored-link-hover-color-1000: #1c2530;
    --falcon-gray-1100: #0b1727;
    --falcon-colored-link-hover-color-1100: #09121f;
    --falcon-gray-white: #fff;
    --falcon-colored-link-hover-color-white: white;
    --falcon-facebook: #3c5a99;
    --falcon-google-plus: #dd4b39;
    --falcon-twitter: #1da1f2;
    --falcon-linkedin: #0077b5;
    --falcon-youtube: #ff0001;
    --falcon-github: #333333;
    --falcon-soft-primary: #e6effc;
    --falcon-soft-secondary: #eef0f2;
    --falcon-soft-success: #e0faef;
    --falcon-soft-info: #e5f7ff;
    --falcon-soft-warning: #fef0e8;
    --falcon-soft-danger: #fce7eb;
    --falcon-soft-light: #fefeff;
    --falcon-soft-dark: #e2e3e5;
    --falcon-gray-black-rgb: 0, 0, 0;
    --falcon-gray-100-rgb: 249, 250, 253;
    --falcon-gray-200-rgb: 237, 242, 249;
    --falcon-gray-300-rgb: 216, 226, 239;
    --falcon-gray-400-rgb: 182, 193, 210;
    --falcon-gray-500-rgb: 157, 169, 187;
    --falcon-gray-600-rgb: 116, 129, 148;
    --falcon-gray-700-rgb: 94, 110, 130;
    --falcon-gray-800-rgb: 77, 89, 105;
    --falcon-gray-900-rgb: 52, 64, 80;
    --falcon-gray-1000-rgb: 35, 46, 60;
    --falcon-gray-1100-rgb: 11, 23, 39;
    --falcon-gray-white-rgb: 255, 255, 255;
    --falcon-facebook-rgb: 60, 90, 153;
    --falcon-google-plus-rgb: 221, 75, 57;
    --falcon-twitter-rgb: 29, 161, 242;
    --falcon-linkedin-rgb: 0, 119, 181;
    --falcon-youtube-rgb: 255, 0, 1;
    --falcon-github-rgb: 51, 51, 51;
    --falcon-dark-rgb: 11, 23, 39;
    --falcon-light-rgb: 249, 250, 253;
    --falcon-global-border-style: solid;
    --falcon-border-color: #d8e2ef;
    --falcon-btn-disabled-border-color: transparent;
    --falcon-btn-reveal-color: dark;
    --falcon-btn-reveal-bg: #e6e6e6;
    --falcon-btn-reveal-border-color: #dfdfdf;
    --falcon-btn-hover-border-color: transparent;
    --falcon-btn-falcon-background: #fff;
    --falcon-btn-disabled-color: #4d5969;
    --falcon-btn-falcon-box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1), 0 2px 5px 0 rgba(43, 45, 80, 0.08), 0 1px 1.5px 0 rgba(0, 0, 0, 0.07), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    --falcon-btn-falcon-hover-box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1), 0 2px 5px 0 rgba(43, 45, 80, 0.1), 0 3px 9px 0 rgba(43, 45, 80, 0.08), 0 1px 1.5px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    --falcon-btn-falcon-default-color: #4d5969;
    --falcon-btn-falcon-default-hover-color: #404a57;
    --falcon-btn-falcon-default-active-background: #e6e6e6;
    --falcon-btn-falcon-default-active-border: #404a57;
    --falcon-btn-active-border-color: transparent;
    --falcon-btn-falcon-primary-color: var(--falcon-primary);
    --falcon-btn-falcon-primary-hover-color: #2566be;
    --falcon-btn-falcon-primary-active-background: #d5e5fa;
    --falcon-btn-falcon-primary-active-color: #2566be;
    --falcon-list-group-item-background-primary: #d5e5fa;
    --falcon-list-group-item-color-primary: #1a4a89;
    --falcon-badge-soft-primary-background-color: #d5e5fa;
    --falcon-badge-soft-primary-color: #1c4f93;
    --falcon-btn-falcon-secondary-color: var(--falcon-secondary);
    --falcon-btn-falcon-secondary-hover-color: #606b7b;
    --falcon-btn-falcon-secondary-active-background: #e3e6ea;
    --falcon-btn-falcon-secondary-active-color: #606b7b;
    --falcon-list-group-item-background-secondary: #e3e6ea;
    --falcon-list-group-item-color-secondary: #464d59;
    --falcon-badge-soft-secondary-background-color: #e3e6ea;
    --falcon-badge-soft-secondary-color: #7d899b;
    --falcon-btn-falcon-success-color: var(--falcon-success);
    --falcon-btn-falcon-success-hover-color: #00ae65;
    --falcon-btn-falcon-success-active-background: #ccf6e4;
    --falcon-btn-falcon-success-active-color: #00ae65;
    --falcon-list-group-item-background-success: #ccf6e4;
    --falcon-list-group-item-color-success: #007e49;
    --falcon-badge-soft-success-background-color: #ccf6e4;
    --falcon-badge-soft-success-color: #00864e;
    --falcon-btn-falcon-info-color: var(--falcon-info);
    --falcon-btn-falcon-info-hover-color: #209cd2;
    --falcon-btn-falcon-info-active-background: #d4f2ff;
    --falcon-btn-falcon-info-active-color: #209cd2;
    --falcon-list-group-item-background-info: #d4f2ff;
    --falcon-list-group-item-color-info: #177198;
    --falcon-badge-soft-info-background-color: #d4f2ff;
    --falcon-badge-soft-info-color: #1978a2;
    --falcon-btn-falcon-warning-color: var(--falcon-warning);
    --falcon-btn-falcon-warning-hover-color: #cb6a33;
    --falcon-btn-falcon-warning-active-background: #fde6d8;
    --falcon-btn-falcon-warning-active-color: #cb6a33;
    --falcon-list-group-item-background-warning: #fde6d8;
    --falcon-list-group-item-color-warning: #934d25;
    --falcon-badge-soft-warning-background-color: #fde6d8;
    --falcon-badge-soft-warning-color: #9d5228;
    --falcon-btn-falcon-danger-color: var(--falcon-danger);
    --falcon-btn-falcon-danger-hover-color: #bf2e48;
    --falcon-btn-falcon-danger-active-background: #fad7dd;
    --falcon-btn-falcon-danger-active-color: #bf2e48;
    --falcon-list-group-item-background-danger: #fad7dd;
    --falcon-list-group-item-color-danger: #8a2134;
    --falcon-badge-soft-danger-background-color: #fad7dd;
    --falcon-badge-soft-danger-color: #932338;
    --falcon-btn-falcon-light-color: var(--falcon-light);
    --falcon-btn-falcon-light-hover-color: #cfd0d2;
    --falcon-btn-falcon-light-active-background: #fefeff;
    --falcon-btn-falcon-light-active-color: #cfd0d2;
    --falcon-list-group-item-background-light: #fefeff;
    --falcon-list-group-item-color-light: #959698;
    --falcon-badge-soft-light-background-color: #fefeff;
    --falcon-badge-soft-light-color: #9fa0a2;
    --falcon-btn-falcon-dark-color: var(--falcon-dark);
    --falcon-btn-falcon-dark-hover-color: #091320;
    --falcon-btn-falcon-dark-active-background: #ced1d4;
    --falcon-btn-falcon-dark-active-color: #091320;
    --falcon-list-group-item-background-dark: #ced1d4;
    --falcon-list-group-item-color-dark: #070e17;
    --falcon-badge-soft-dark-background-color: #ced1d4;
    --falcon-badge-soft-dark-color: #070f19;
    --falcon-transparent-50: rgba(255, 255, 255, 0.5);
    --falcon-box-shadow: 0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07);
    --falcon-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    --falcon-box-shadow-lg: 0 1rem 4rem rgba(0, 0, 0, 0.175);
    --falcon-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
    --falcon-component-active-color: ;
    --falcon-component-active-bg: #2c7be5;
    --falcon-text-muted: #748194;
    --falcon-blockquote-footer-color: #748194;
    --falcon-hr-opacity: 0.25;
    --falcon-mark-bg: #fcf8e3;
    --falcon-input-btn-focus-color: rgba(44, 123, 229, 0.25);
    --falcon-btn-link-color: var(--falcon-link-color);
    --falcon-btn-link-hover-color: #2362b7;
    --falcon-btn-disabled-color: #748194;
    --falcon-heading-color: #344050;
    --falcon-input-bg: #fff;
    --falcon-input-color: #344050;
    --falcon-input-border-color: #d8e2ef;
    --falcon-input-focus-border-color: #96bdf2;
    --falcon-input-focus-color: var(--falcon-input-color);
    --falcon-input-placeholder-color: #b6c1d2;
    --falcon-input-plaintext-color: #5e6e82;
    --falcon-form-check-label-color: ;
    --falcon-form-check-input-bg: transparent;
    --falcon-form-check-input-border: 1px solid var(--falcon-form-check-input-border-color);
    --falcon-form-check-input-border-color: #b6c1d2;
    --falcon-form-check-input-checked-color: #fff;
    --falcon-form-check-input-checked-bg-color: #2c7be5;
    --falcon-form-check-input-checked-border-color: #2c7be5;
    --falcon-form-check-input-indeterminate-color: #fff;
    --falcon-form-check-input-indeterminate-bg-color: #2c7be5;
    --falcon-form-check-input-indeterminate-border-color: #2c7be5;
    --falcon-form-switch-color: rgba(0, 0, 0, .25);
    --falcon-form-switch-focus-color: var(--falcon-input-focus-border-color);
    --falcon-form-switch-checked-color: #fff;
    --falcon-input-group-addon-color: var(--falcon-input-border-color);
    --falcon-input-group-addon-bg: #edf2f9;
    --falcon-input-group-addon-border-color: var(--falcon-input-border-color);
    --falcon-form-select-color: var(--falcon-input-color);
    --falcon-form-select-disabled-color: #748194;
    --falcon-form-select-bg: var(--falcon-input-bg);
    --falcon-form-select-disabled-bg: #edf2f9;
    --falcon-form-select-indicator-color: #4d5969;
    --falcon-form-select-focus-box-shadow: 0 0 0 0.25rem rgba(44, 123, 229, 0.25);
    --falcon-form-select-border-color: var(--falcon-input-border-color);
    --falcon-form-select-focus-border-color: var(--falcon-input-focus-border-color);
    --falcon-form-range-track-bg: #d8e2ef;
    --falcon-form-range-track-box-shadow: var(--falcon-box-shadow-inset);
    --falcon-form-range-thumb-bg: #2c7be5;
    --falcon-form-range-thumb-box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
    --falcon-form-range-thumb-focus-box-shadow: 0 0 0 1px #edf2f9, 0 0 0 0.25rem rgba(44, 123, 229, 0.25);
    --falcon-form-range-thumb-active-bg: #cbdef9;
    --falcon-form-range-thumb-disabled-bg: #9da9bb;
    --falcon-form-file-focus-border-color: var(--falcon-input-focus-border-color);
    --falcon-form-file-focus-box-shadow: 0 0 0 0.25rem rgba(44, 123, 229, 0.25);
    --falcon-form-file-disabled-bg: var(--falcon-gray-200);
    --falcon-form-file-disabled-border-color: ;
    --falcon-form-file-color: var(--falcon-input-color);
    --falcon-form-file-bg: var(--falcon-input-bg);
    --falcon-form-file-border-color: var(--falcon-input-border-color);
    --falcon-form-file-box-shadow: var(--falcon-box-shadow-inset);
    --falcon-form-file-button-bg: var(--falcon-gray-200);
    --falcon-form-feedback-valid-color: #00d27a;
    --falcon-form-feedback-invalid-color: #e63757;
    --falcon-form-feedback-icon-valid-color: var(--falcon-form-feedback-valid-color);
    --falcon-form-feedback-icon-invalid-color: var(--falcon-form-feedback-invalid-color);
    --falcon-bg-navbar-glass: rgba(237, 242, 249, 0.96);
    --falcon-navbar-dark-color: rgba(255, 255, 255, 0.55);
    --falcon-navbar-dark-hover-color: rgba(255, 255, 255, 0.75);
    --falcon-navbar-dark-active-color: #fff;
    --falcon-navbar-dark-disabled-color: rgba(255, 255, 255, 0.25);
    --falcon-navbar-dark-toggler-border-color: rgba(255, 255, 255, 0.1);
    --falcon-navbar-light-color: rgba(0, 0, 0, 0.55);
    --falcon-navbar-light-hover-color: rgba(0, 0, 0, 0.7);
    --falcon-navbar-light-active-color: rgba(0, 0, 0, 0.9);
    --falcon-navbar-light-disabled-color: rgba(0, 0, 0, 0.3);
    --falcon-navbar-light-toggler-border-color: rgba(0, 0, 0, 0.1);
    --falcon-navbar-light-brand-color: #2c7be5;
    --falcon-navbar-dark-brand-color: #2c7be5;
    --falcon-nav-dropdown-link-hover-bg: #edf2f9;
    --falcon-navbar-card-hr-color: rgba(0, 0, 0, 0.08);
    --falcon-navbar-vertical-collapsed-hover-shadow-color: rgba(0, 0, 0, 0.2);
    --falcon-navbar-vertical-bg-color: var(--falcon-bg-navbar-glass);
    --falcon-navbar-vertical-link-color: #5e6e82;
    --falcon-navbar-vertical-link-hover-color: #232e3c;
    --falcon-navbar-vertical-link-active-color: #2c7be5;
    --falcon-navbar-vertical-link-disable-color: #b6c1d2;
    --falcon-navbar-vertical-hr-color: rgba(0, 0, 0, 0.08);
    --falcon-navbar-vertical-scrollbar-color: rgba(116, 129, 148, 0.3);
    --falcon-navbar-card-bg-color: #fff;
    --falcon-dropdown-dark-color: #d8e2ef;
    --falcon-dropdown-dark-bg: #4d5969;
    --falcon-dropdown-dark-border-color: var(--falcon-border-color);
    --falcon-dropdown-dark-divider-bg: var(--falcon-border-color);
    --falcon-dropdown-dark-box-shadow: null;
    --falcon-dropdown-dark-link-color: #d8e2ef;
    --falcon-dropdown-dark-link-hover-color: #fff;
    --falcon-dropdown-dark-link-hover-bg: rgba(255, 255, 255, 0.15);
    --falcon-dropdown-dark-link-active-color: #fff;
    --falcon-dropdown-dark-link-active-bg: #2c7be5;
    --falcon-dropdown-dark-link-disabled-color: #9da9bb;
    --falcon-dropdown-dark-header-color: #9da9bb;
    --falcon-avatar-status-border-color: #fff;
    --falcon-avatar-name-bg: #344050;
    --falcon-avatar-button-bg: #b6c1d2;
    --falcon-avatar-button-hover-bg: #9da9bb;
    --falcon-notification-bg: #fff;
    --falcon-notification-title-bg: #f9fafd;
    --falcon-notification-unread-bg: #edf2f9;
    --falcon-notification-unread-hover-bg: #dae4f3;
    --falcon-notification-indicator-border-color: #edf2f9;
    --falcon-kanban-bg: #f9fafd;
    --falcon-kanban-header-bg: var(--falcon-kanban-bg);
    --falcon-kanban-item-bg: #fff;
    --falcon-kanban-item-color: #344050;
    --falcon-kanban-btn-add-hover-bg: #edf2f9;
    --falcon-kanban-draggable-source-dragging-bg: #edf2f9;
    --falcon-kanban-bg-attachment-bg: #d8e2ef;
    --falcon-kanban-footer-color: #748194;
    --falcon-kanban-nav-link-card-details-color: #5e6e82;
    --falcon-kanban-nav-link-card-details-hover-bg: #edf2f9;
    --falcon-bg-shape-bg: #4695ff;
    --falcon-bg-shape-bg-ltd: linear-gradient(-45deg, #4695ff, #1970e2);
    --falcon-bg-shape-bg-dtl: linear-gradient(-45deg, #1970e2, #4695ff);
    --falcon-line-chart-gradient: linear-gradient(-45deg, #014ba7, #0183d0);
    --falcon-card-gradient: linear-gradient(-45deg, #1970e2, #4695ff);
    --falcon-progress-gradient: linear-gradient(-45deg, #1970e2, #4695ff);
    --falcon-bg-circle-shape: none;
    --falcon-bg-circle-shape-bg: #4695ff;
    --falcon-modal-shape-header: linear-gradient(-45deg, #1970e2, #4695ff);
    --falcon-modal-shape-header-bg: #4494ff;
    --fc-button-bg-color: #344050;
    --fc-button-border-color: #344050;
    --fc-button-hover-bg-color: #0b1727;
    --fc-button-hover-border-color: #0b1727;
    --fc-button-active-bg-color: #0b1727;
    --fc-button-active-border-color: #0b1727;
    --fc-button-list-day-cushion: #fff;
    --falcon-flatpickr-calendar-bg: #fff;
    --falcon-leaflet-bar-bg: #fff;
    --falcon-leaflet-popup-content-wrapper-bg: #fff;
    --falcon-choices-item-selectable-highlighted-bg: #fff;
    --falcon-choices-item-has-no-choices-bg: #fff;
    --falcon-bg-choices-close-button: #edf2f9;
    --falcon-thumbnail-bg: #fff;
    --falcon-chat-contact-bg: #fff;
    --falcon-tinymce-bg: #fff;
    --falcon-swiper-nav-bg: rgba(255, 255, 255, 0.8);
    --falcon-star-rating-bg-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFdElEQVR4nO2aXWxURRTH/2dut58Imho1SgStuit+vBo0BkgkRjDog+VBiJEXqJhKK21x+7EdUu5u2W1Uqi8Qo4YQY6gQDQlRn9RENGoMD0a7RCzGRCJGBLRF9mOOD+waKHe7e2f23mt0f4/zceY/Z2fmzJm7QI0aNWr8j6EgBu3sHG9oXHC2gxQvJ/CUhbpUPD5wMggtwv8hmZrmn3mHmF8G4XEm6s5R/kinlPP91xKAA7YN2A8CeHRW8eLmrOjwWwsQgAMYqs+xnLGls3O8wW89vjqgp1/eDWC1YyXhxqYFvz/ppx7AZwcIsnrmbMDUK6X0V5NfA/VJuRDgdWWa3Tmds1b5IqiAf97OUReAunLNCOx4RniFL/eALimvrs+KnwDMq6yHWJq0Bz/3VFRxJD8GabgY4iqcPABWvd6puRzPV4CUsnEmK6YA3OCiG1tKRRIJecwrXUU8XwHTGbEe7iYPAJQXYqsXeq4YyEvjUkoxkxXfAbhDo/uFOrYWxeMDv1Rb16V4ugJmctYa6E0eABpyItdZTT1OeLwFDEMa02YpZeWHpwaeOaBncOQhMJYamrnmvMdJUtXOgI0bd4daW0+25S0rAoV7iLiHgWqkuDkChjik9ibl8EmAuAo2/8G1A7ZKea24IMJkcQRAmJkiBIQBtAGwqiluNgScU4w0EU2CkWZSk8ycnleP76WUf2nadCYajbfmrfwDxIWJgiMAhQG06k7AQxSAEwAmiTnNRJMEMWkxpePx/lNzrRpHB7wwOLJcMR+Cm9vbv5cZAK81h1S3lFLNrnQ8BBVjF/4bkweAZgDPnc+IJ5wqS0QBDnsoKBAYdLtTubMDCF95qiYAhMUfOpY7FSqlOgCc9lSRjzDR86MjsS+d6hwdMBaX3zCrlQDOeKrMBwiIpnYMvVSqvuRNMBWXXwPiYQB/eKLMBxgY3mnHRudqM+dVOGkPfsEKjwCYrqoyHyAgnrKHRipoV57CveAwgCZjZT7AwFjKHuqr5Npc8VW4r3/7ShAdAuD7xwuXjCftoa5KcwZXuUDv4MgqYn4XQEhLmscw8+5UPPaMm4TJVTqc2jF0GERrAeRcq/MceqOlnje7zRa10uHege3tBHobgXxdvhIm7DuRjjw9MbE277av1gRS9vAEwE8BqGpurgVhf0ud2qAz+YvdDegb3L4BTK+b2DCBgffO/np9+549m7K6NoweMD795KOj9y9bcRsB95rY0SRTp+qW7drV/aeJEeM9TMzvm9rQg48mEv2/mVoxP8RYLDa2oYWor4oVYwuEu6qgQwOOtLfvN36DrEIY4yXmNrRobGv79hZTI0YOKPwCEVMRurBFxqvPyAGLw+lbEWBuoBCwAwhB7f/i+GS8/YwcwBzY/i8S7AoILgIUMY8EZluAzZegIY2Fc0gbbQdc9DwHFgGKCFZGP4K2AwoxuFGz+xkCehFSNxHzKoCO6uowjQRl/7dXCs0YnCXmVwWH7Evu8T9LKT+Yzoj1BNggLHRl0fAc0ncAiyVuHl8INKEI0aQdOz67rvDRcm9394sToabpLhBHAVxVkV02c4D2e0DfwMi+Cv76CoCPKEU9Y4nYZ5Xa7pHyOpEVwwA2oXzKfmHqWKRF90FEewVUkAMcZ/C2lB076PadbkzKUwCejUblK3kSO0FYM0fzhkXh9M0AptyMUcQkDJY6AE8D2NIcUktS9vABk7+0JBJyMhmPPcYKywEu9cGWQ3nrnO4Y2g5gYN+sogyIU5mQakvasXEpZUbX9mxSidjHzSG+jxjrAPx4eS29afIwor0FWkJq9HzOOsvMq5n5B0vx2OioPKFrrxyFg/ItKeXBmazoAGMFQEea6/MlP3zWqFGjRo0y/A3lxcMNXfCjjAAAAABJRU5ErkJggg==");
    --falcon-toast-background-color: rgba(255, 255, 255, 0.85);
    --falcon-theme-wizard-nav-item-circle-bg: #fff;
    --falcon-card-span-img-bg: #fff;
    --falcon-card-span-img-box-shadow: var(--falcon-box-shadow-sm);
    --falcon-card-span-img-hover-box-shadow: var(--falcon-box-shadow-lg);
    --falcon-setting-toggle-shadow: 0 -7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07);
    --falcon-scrollbar-bg: rgba(var(--falcon-gray-400-rgb), 0.55);
    --falcon-simplebar-bg: rgba(var(--falcon-gray-400-rgb), 1);
    --falcon-nav-pills-falcon-active-bg-color: #fff;
    --falcon-hover-bg-grayblack: #000;
    --falcon-hover-bg-gray100: #f9fafd;
    --falcon-hover-bg-gray200: #edf2f9;
    --falcon-hover-bg-gray300: #d8e2ef;
    --falcon-hover-bg-gray400: #b6c1d2;
    --falcon-hover-bg-gray500: #9da9bb;
    --falcon-hover-bg-gray600: #748194;
    --falcon-hover-bg-gray700: #5e6e82;
    --falcon-hover-bg-gray800: #4d5969;
    --falcon-hover-bg-gray900: #344050;
    --falcon-hover-bg-gray1000: #232e3c;
    --falcon-hover-bg-gray1100: #0b1727;
    --falcon-hover-bg-graywhite: #fff;
    --falcon-btn-disabled-custom-background: rgba(var(--falcon-light-rgb), 0.55);
    --falcon-btn-disabled-custom-color: rgba(var(--falcon-dark-rgb), 0.3);
    --falcon-dropdown-caret-bg: #fff;
    --falcon-divider-content-bg: #fff;
    --falcon-card-bg: #fff;
    --falcon-progressbar-width: 100%
}

</style>