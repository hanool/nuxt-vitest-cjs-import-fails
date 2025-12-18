import { Viewer } from "@mescius/activereportsjs-vue";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      _report: new Viewer(),
    },
  };
});
