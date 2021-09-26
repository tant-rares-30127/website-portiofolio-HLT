<template>
  <table>
    <thead>
      <tr>
        <img src="" alt="projects photo" />
      </tr>
      <tr>
        <th>Short project description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  prop: ["name"],
};
</script>
