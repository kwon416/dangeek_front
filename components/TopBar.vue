<template>
  <!-- Top navigation bar -->
  <div
    style="position: fixed; top: 0px; left: 0px; width: 100%; z-index: 99999999"
  >
    <v-app-bar app :elevation="0">
      <v-btn icon :to="backPath">
        <IconBackBtn />
      </v-btn>
      <v-app-bar-title class="flex text-center mx-0">
        {{ title }}
      </v-app-bar-title>
      <template v-slot:extension v-if="tabList">
        <v-tabs
          v-model="tab"
          fixed-tabs
          class="w-100 tab-off"
          selected-class="tab-on"
        >
          <v-tab
            v-for="item in tabList"
            :key="item"
            @click="selectTab"
            :value="item"
            class="border-b no-effect"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
      <v-btn icon disabled />
    </v-app-bar>
  </div>
</template>
<script setup>
const props = defineProps(["title", "backPath", "tabList", "callBack"]);
const model = defineModel();
const tab = ref();
function selectTab() {
  //console.log(tab.value)
  model.value = tab.value;
  props.callBack();
}
</script>
<style scoped>
.tab-off {
  color: rgba(38, 38, 38, 0.6);
}
.tab-on {
  position: relative;
  color: #000;
  font-weight: 700;
}
</style>
