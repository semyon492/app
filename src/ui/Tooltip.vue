<template>
  <component
    :is="isAbbreviation ? 'abbr' : 'span'"
    :data-label="labelText"
    :aria-label="labelText"
    role="tooltip"
    :class="[
      hasPosition,
      hasSize,
      {
        'custom-tooltip': isActive && labelText,
        'is-sticky': isSticky,
        'has-multiline': isMultiline,
        'is-underlined': isUnderlined || isAbbreviation,
      },
    ]"
    :style="[dynamicStyles, { cursor: isAbbreviation ? 'help' : 'pointer' }]"
  >
    <slot name="default"></slot>
  </component>
</template>

<script>
export default {
  props: {
    label: String,
    active: {
      type: Boolean,
      default: true,
    },
    sticky: Boolean, // Always showing
    multiline: Boolean, // Multiple lines
    underlined: Boolean,
    abbreviation: Boolean,
    position: {
      type: String,
      default: 'is-top',
      validator(value) {
        return ['is-top', 'is-bottom', 'is-left', 'is-right'].indexOf(value) > -1
      },
    },
    size: {
      type: String,
      default: 'is-medium',
      validator(value) {
        return ['is-small', 'is-medium', 'is-large'].indexOf(value) > -1
      },
    },
  },
  data() {
    return {
      labelText: this.label || null,
      isActive: this.active || true,
      isSticky: this.sticky || false,
      isMultiline: this.multiline || false,
      isUnderlined: this.underlined || false,
      isAbbreviation: this.abbreviation || false,
      hasPosition: this.position || 'is-top',
      hasSize: this.size || 'is-medium',
      // $Tooltip: any

    }
  },
  computed: {
    dynamicStyles() {
      return {
        // '--custom-tooltip-color':
        //   this.$Tooltip && this.$Tooltip.hasOwnProperty('color')
        //     ? this.$Tooltip.color
        //     : null,
        // '--custom-tooltip-background':
        //   this.$Tooltip && this.$Tooltip.hasOwnProperty('background')
        //     ? this.$Tooltip.background
        //     : null,
        // '--custom-tooltip-border-radius':
        //   this.$Tooltip && this.$Tooltip.hasOwnProperty('borderRadius')
        //     ? this.$Tooltip.borderRadius
        //     : null,
        // '--custom-tooltip-font-weight':
        //   this.$Tooltip && this.$Tooltip.hasOwnProperty('fontWeight')
        //     ? this.$Tooltip.fontWeight
        //     : null,
      }
    },
  },
  watch: {
    label: {
      handler(value) {
        this.labelText = value
      },
      immediate: true,
    },
    active: {
      handler(value) {
        this.isActive = value
      },
      immediate: true,
    },
    sticky: {
      handler(value) {
        this.isSticky = value
      },
      immediate: true,
    },
    multiline: {
      handler(value) {
        this.isMultiline = value
      },
      immediate: true,
    },
    underlined: {
      handler(value) {
        this.isUnderlined = value
      },
      immediate: true,
    },
    abbreviation: {
      handler(value) {
        this.isAbbreviation = value
      },
      immediate: true,
    },
    position: {
      handler(value) {
        this.hasPosition = value
      },
      immediate: true,
    },
    size: {
      handler(value) {
        this.hasSize = value
      },
      immediate: true,
    },
  },
}
</script>

<style>
/* Set defaults */
.custom-tooltip {
  --custom-tooltip-color: #fff;
  --custom-tooltip-background: #000;
  --custom-tooltip-border-radius: 100px;
  --custom-tooltip-font-weight: 400;
}

.custom-tooltip {
  position: relative;
  display: inline-block;
  text-decoration-line: none !important;
}

.custom-tooltip.is-top:before,
.custom-tooltip.is-top:after {
  top: auto;
  right: auto;
  bottom: calc(100% + 5px + 2px);
  left: 50%;
  transform: translateX(-50%);
}

.custom-tooltip.is-top:before {
  border-top: 5px solid #000;
  border-top: 5px solid var(--custom-tooltip-background, #000);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  bottom: calc(100% + 2px);
}

.custom-tooltip.is-top.has-multiline.is-small:after {
  width: 140px;
}

.custom-tooltip.is-top.has-multiline.is-medium:after {
  width: 250px;
  padding: 0.6rem 1.25rem 0.65rem;
}

.custom-tooltip.is-top.has-multiline.is-large:after {
  width: 480px;
  padding: 0.6rem 1rem 0.65rem;
}

.custom-tooltip.is-right:before,
.custom-tooltip.is-right:after {
  top: 50%;
  right: auto;
  bottom: auto;
  left: calc(100% + 5px + 2px);
  transform: translateY(-50%);
}

.custom-tooltip.is-right:before {
  border-top: 5px solid transparent;
  border-right: 5px solid #000;
  border-right: 5px solid var(--custom-tooltip-background, #000);
  border-bottom: 5px solid transparent;
  left: calc(100% + 2px);
}

.custom-tooltip.is-right.has-multiline.is-small:after {
  width: 140px;
}

.custom-tooltip.is-right.has-multiline.is-medium:after {
  width: 250px;
  padding: 0.6rem 1.25rem 0.65rem;
}

.custom-tooltip.is-right.has-multiline.is-large:after {
  width: 480px;
  padding: 0.6rem 1rem 0.65rem;
}

.custom-tooltip.is-bottom:before,
.custom-tooltip.is-bottom:after {
  top: calc(100% + 5px + 2px);
  right: auto;
  bottom: auto;
  left: 50%;
  transform: translateX(-50%);
}

.custom-tooltip.is-bottom:before {
  border-right: 5px solid transparent;
  border-bottom: 5px solid #000;
  border-bottom: 5px solid var(--custom-tooltip-background, #000);
  border-left: 5px solid transparent;
  top: calc(100% + 2px);
}

.custom-tooltip.is-bottom.has-multiline.is-small:after {
  width: 140px;
}

.custom-tooltip.is-bottom.has-multiline.is-medium:after {
  width: 250px;
  padding: 0.6rem 1.25rem 0.65rem;
}

.custom-tooltip.is-bottom.has-multiline.is-large:after {
  width: 480px;
  padding: 0.6rem 1rem 0.65rem;
}

.custom-tooltip.is-left:before,
.custom-tooltip.is-left:after {
  top: 50%;
  right: calc(100% + 5px + 2px);
  bottom: auto;
  left: auto;
  transform: translateY(-50%);
}

.custom-tooltip.is-left:before {
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #000;
  border-left: 5px solid var(--custom-tooltip-background, #000);
  right: calc(100% + 2px);
}

.custom-tooltip.is-left.has-multiline.is-small:after {
  width: 140px;
}

.custom-tooltip.is-left.has-multiline.is-medium:after {
  width: 250px;
  padding: 0.6rem 1.25rem 0.65rem;
}

.custom-tooltip.is-left.has-multiline.is-large:after {
  width: 480px;
  padding: 0.6rem 1rem 0.65rem;
}

.custom-tooltip.is-underlined {
  border-bottom: 1px dotted #000;
  border-bottom: 1px dotted var(--custom-tooltip-background, #000);
  line-height: 1.2;
}

.custom-tooltip:before,
.custom-tooltip:after {
  position: absolute;
  content: '';
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 86ms ease-out, visibility 86ms ease-out;
}

.custom-tooltip:before {
  z-index: 889;
}

.custom-tooltip:after {
  content: attr(data-label);
  color: #fff;
  color: var(--custom-tooltip-color, #fff);
  background: #000;
  background: var(--custom-tooltip-background, #000);
  width: auto;
  max-width: 100vw;
  padding: 0.35rem 0.75rem 0.45rem;
  border-radius: 100px;
  border-radius: var(--custom-tooltip-border-radius, 100px);
  font-size: 0.85rem !important;
  font-weight: 400;
  font-weight: var(--custom-tooltip-font-weight, 400);
  line-height: 1.3;
  letter-spacing: normal !important;
  text-transform: none;
  box-shadow: 0px 1px 2px 1px rgba(0, 1, 0, 0.2);
  z-index: 888;
  white-space: nowrap;
}

.custom-tooltip:not([data-label='']):hover:before,
.custom-tooltip:not([data-label='']):hover:after {
  opacity: 1;
  visibility: visible;
}

:disabled .custom-tooltip {
  pointer-events: none;
}

.custom-tooltip:not([data-label='']).is-sticky:before,
.custom-tooltip:not([data-label='']).is-sticky:after {
  opacity: 1;
  visibility: visible;
}

.custom-tooltip.has-multiline:after {
  display: block;
  padding: 0.5rem 0.75rem 0.65rem;
  text-align: center;
  line-height: 1.4;
  white-space: pre-wrap;
}
</style>
