<template>
  <div>
    <MyProfile />
    <MySkill />
  </div>
</template>

<script>
import MyProfile from "../components/MyProfile.vue";
import MySkill from "../components/MySkill.vue";
export default {
  components: {
    MyProfile,
    MySkill,
  },
};
</script>
