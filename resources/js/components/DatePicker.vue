<template>
  <input :value="value" ref="input" placeholder="YYYY-MM-DD">
</template>

<script>
import Pikaday from "pikaday"
import "pikaday/css/pikaday.css"

export default {
  props: {
    value: { required: true },
    format: { default: "YYYY-MM-DD" },
  },
  mounted() {
    const picker = new Pikaday({
      field: this.$refs.input,
      format: this.format,
      onSelect: () => {
        this.$emit("input", picker.toString())
      },
    })
  }
}
</script>