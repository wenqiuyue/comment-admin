import SvgIcon from './svgIcon.vue';
import NoDataTips from './no-data-tips.vue';

export default {
	install: Vue => {
		Vue.component(SvgIcon.name, SvgIcon);
		Vue.component(NoDataTips.name, NoDataTips);
	}
};
