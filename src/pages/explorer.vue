<template>
  <div></div>
</template>

<script>
export default {
  fetch(params) {
    const { redirect } = params;
    redirect(301, 'https://explorer.gravity.tech');
  },
};
</script>
