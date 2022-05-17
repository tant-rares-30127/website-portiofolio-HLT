<template>
  <div class="about-whatido">
    <table>
      <thead>
        <tr>
          <th class="title">What I do</th>
          <th class="title">What I use</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="do-use">{{ whatIDo }}</th>
          <th class="do-use">{{ whatIUse }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.title {
  color: white;
  font-size: 24px;
}

.do-use {
  padding-top: 1rem;
  color: var(--blue);
}

.about-whatido {
  display: flex;
  padding-top: 5%;
}
.about-whatido th,
.about-whatido td {
  background-color: var(--dark-gray);
}

.about-whatido table {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  column-gap: 500px;
  text-align: center;
}
</style>

<script>
export default {
  props: ["whatIDo", "whatIUse"],
};
</script>
