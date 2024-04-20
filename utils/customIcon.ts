import { h } from "vue";
import type { IconSet, IconAliases, IconProps } from "vuetify";
import IconCheckOff from "~~/components/icons/IconCheckOff.vue";
import IconCheck from "~~/components/icons/IconCheck.vue";

const aliases: IconAliases = {
  complete: "ph:check-circle",
  cancel: "ph:x-circle",
  close: "ph:x-circle",
  delete: "ph:trash",
  clear: "ph:x-circle",
  success: "ph:check-circle",
  info: "ph:info",
  warning: "ph:warning",
  error: "ph:x-circle",
  prev: "ph:caret-left",
  next: "ph:caret-right",
  checkboxOn: "ph:check-square-fill",
  checkboxOff: "ph:square",
  checkboxIndeterminate: "ph:square",
  delimiter: "ph:circle",
  sort: "ph:caret-up",
  expand: "ph:caret-down",
  menu: "heroicons:bars-2",
  subgroup: "ph:caret-down",
  dropdown: "ph:caret-down",
  radioOn: "ph:radio-button-fill",
  radioOff: "ph:circle",
  edit: "ph:pencil-simple",
  ratingEmpty: "ph:star",
  ratingFull: "ph:star-fill",
  ratingHalf: "ph:star-half-fill",
  loading: "ph:spinner",
  first: "ph:caret-double-left",
  last: "ph:caret-double-right",
  unfold: "ph:arrows-out",
  file: "ph:file",
  plus: "ph:plus",
  minus: "ph:minus",
};

// 여기에 사용하고 싶은 아이콘 컴포넌트 등록
const customSvgNameToComponent: any = {
  IconCheckOff,
  IconCheck,
};

// 아이콘 이름 자리에 icon="custom:아이콘컴포넌트"로 사용 가능
const custom: IconSet = {
  component: (props: IconProps) =>
    // Return render function
    h(customSvgNameToComponent[props.icon]),
};

// export both aliases and the custom object created
export { aliases, custom };
