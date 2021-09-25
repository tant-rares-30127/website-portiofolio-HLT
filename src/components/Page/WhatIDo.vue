<template>
  <div class="about-whatido">
    <table>
      <thead>
        <tr>
          <th>What I do</th>
          <th>What I use</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{{ whatIDo }}</th>
          <th>{{ whatIUse }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.about-whatido {
  padding-top: 5%;
}
.about-whatido th,
.about-whatido td {
  padding: 30px;
  background-color: var(--dark-gray);
  color: #ffffff;
}

.about-whatido table {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  column-gap: 500px;
  text-align: center;
}

.about-whatido {
  background-color: var(--dark-gray);
}
</style>

<script>
export default {
  data() {
    return {
      whatIDo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
      whatIUse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
    };
  },
};
</script>
