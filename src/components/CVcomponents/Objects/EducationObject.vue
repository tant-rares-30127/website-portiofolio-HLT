<template>
  <div class="ed-obj">
    <p class="institution">{{ institutionName }}</p>
    <p class="description">{{ description }}</p>
    <p class="period">
      {{ moment(startDate).format("DD MMM YYYY") }} - {{ finish }}
    </p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["institutionName", "description", "startDate", "endDate"],
  computed: {
    finish() {
      if (this.endDate == null) return "Present";
      else return moment(this.endDate).format("DD MMM YYYY");
    },
  },
  methods: {
    moment: moment,
  },
};
</script>

<style>
.ed-obj {
  color: var(--blue);
  text-align: center;
}

.ed-obj .institution {
  font-size: 28px;
}

.ed-obj .description {
  font-size: 16px;
}

.ed-obj .period {
  font-size: 20px;
  font-style: italic;
}
</style>
