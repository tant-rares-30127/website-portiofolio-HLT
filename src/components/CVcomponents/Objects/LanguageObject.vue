<template>
  <div class="lang-obj">
    <table>
      <thead>
        <tr>
          <th>{{ name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Understanding</td>
          <td>{{ understandingGrade }}</td>
        </tr>
        <tr>
          <td>Speaking</td>
          <td>{{ speakingGrade }}</td>
        </tr>
        <tr>
          <td>Writing</td>
          <td>{{ writingGrade }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["name", "understanding", "speaking", "writing"],
  methods: {
    level(grade) {
      if (grade == 1) return "A1";
      if (grade == 2) return "A2";
      if (grade == 3) return "B1";
      if (grade == 4) return "B2";
      if (grade == 5) return "C1";
      return "C2";
    },
  },
  computed: {
    understandingGrade() {
      return this.level(this.understanding);
    },
    speakingGrade() {
      return this.level(this.speaking);
    },
    writingGrade() {
      return this.level(this.writing);
    },
  },
};
</script>
