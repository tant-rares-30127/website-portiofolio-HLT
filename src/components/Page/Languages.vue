<template>
  <div class="about-languages">
    <h2>Languages</h2>
    <table>
      <thead>
        <tr>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Understanding</td>
          <td>{{ grade }}</td>
        </tr>
        <tr>
          <td>Speaking</td>
          <td>{{ grade }}</td>
        </tr>
        <tr>
          <td>Writing</td>
          <td>{{ grade }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.about-languages h2 {
  background-color: var(--dark-gray);
  color: #ffffff;
  font-weight: bold;

  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  padding-left: 4.7%;
  padding-top: 3%;
}

.about-languages table {
  color: var(--dark-gray);
  background-color: #eeeeee;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1.2em;
  overflow: hidden;
  border-collapse: collapse;
}

.about-languages td,
.about-languages th {
  background-color: #eeeeee;
  padding: 10px;
}

.about-languages tr {
  text-align: center;
  padding-left: 22%;
}

.about-languages {
  background-color: var(--dark-gray);
}
</style>

<script>
export default {
  data() {
    return {
      grade: "A",
    };
  },
};
</script>
