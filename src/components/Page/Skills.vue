<template>
  <div class="about-skills">
    <h2>Skills</h2>
    <table class="table-skills">
      <thead>
        <tr>
          <th>
            <p>{{ skill }}</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <div class="progress-bar">
              <circle-progress
                :show-percent="true"
                :viewport="true"
                :percent="percent"
                :is-gradient="true"
                :gradient="{
                  angle: 90,
                  startColor: '#00adb5',
                  stopColor: '#003336',
                }"
                show-percent:true
              />
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

export default {
  components: { CircleProgress },
  data() {
    return {
      percent: 80,
      skill: "HTML",
    };
  },
};
</script>

<style>
.table-skills p {
  color: #ffffff;
}

.table-skills {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.progress-bar {
  background-color: var(--dark-gray);
}

.progress-bar p {
  font-weight: 600;
}

.about-skills h2 {
  color: #ffffff;
  padding-right: 87.5%;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
}
</style>
