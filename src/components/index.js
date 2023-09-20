import Ellipsis from '@/components/common/Ellipsis.vue';
import WDialog from '@/components/common/WDialog.vue';
import Tip from '@/components/common/Tip.vue';
import OrgPicker from '@/components/common/OrgPicker.vue';
import FormProcessDesign from '@/views/admin/FormProcessDesign.vue'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/theme.less";
import "@/assets/global.css";
import "@/assets/iconfont/iconfont.css"

export default function install(Vue) {
  // 引入ElementUI
  Vue.use(ElementUI);
  // 注册组件
  Vue.component('Ellipsis', Ellipsis);
  Vue.component('WDialog', WDialog);
  Vue.component('Tip', Tip);
  Vue.component('OrgPicker', OrgPicker);
  Vue.component('FormProcessDesign', FormProcessDesign);
}
