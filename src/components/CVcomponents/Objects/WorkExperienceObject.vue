<template>
  <div class="work-obj">
    <p class="companyName">{{ companyName }}</p>
    <p class="position">{{ position }}</p>
    <p class="period">{{ startDate }} - {{ finish }}</p>
  </div>
</template>

<script>
export default {
  props: ["companyName", "position", "startDate", "endDate"],
  computed: {
    finish() {
      if (this.endDate == null) return "present";
      else return this.endDate;
    },
  },
};
</script>
