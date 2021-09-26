<template>
  <div class="about-languages">
    <h2>Languages</h2>
    <div class="languages">
      <LanguageObject
        v-for="lang in this.langList"
        :key="lang.id"
        :name="lang.name"
        :understanding="lang.understanding"
        :speaking="lang.speaking"
        :writing="lang.writing"
      ></LanguageObject>
    </div>
  </div>
</template>

<style>
.about-languages {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-languages h2 {
  background-color: var(--dark-gray);
  color: #ffffff;
  font-weight: bold;

  font-style: normal;
  font-size: 24px;
  line-height: 28px;
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

.languages {
  display: flex;
  gap: 3rem;
  padding-top: 1rem;
}
</style>

<script>
import LanguageObject from "./Objects/LanguageObject.vue";
export default {
  components: { LanguageObject },
  props: ["langList"],
};
</script>
