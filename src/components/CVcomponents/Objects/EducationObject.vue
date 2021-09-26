<template>
  <div class="ed-obj">
    <p class="institution">{{ institutionName }}</p>
    <p class="description">{{ description }}</p>
    <p class="period">{{ startDate }} - {{ finish }}</p>
  </div>
</template>

<script>
export default {
  props: ["institutionName", "description", "startDate", "endDate"],
  computed: {
    finish() {
      if (this.endDate == null) return "present";
      else return this.endDate;
    },
  },
};
</script>

<style>
.ed-obj {
  color: var(--blue);
  text-align: center;
}
</style>
