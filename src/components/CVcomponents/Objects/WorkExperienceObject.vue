<template>
  <div class="work-obj">
    <p class="companyName">{{ companyName }}</p>
    <p class="position">{{ position }}</p>
    <p class="period">
      {{ moment(startDate).format("DD MMM YYYY") }} - {{ finish }}
    </p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["companyName", "position", "startDate", "endDate"],
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
.work-obj {
  color: var(--blue);
  text-align: center;
  max-width: 300px;
}

.work-obj .companyName {
  font-size: 28px;
}

.work-obj .position {
  font-size: 16px;
}

.work-obj .period {
  font-size: 20px;
  font-style: italic;
}
</style>
