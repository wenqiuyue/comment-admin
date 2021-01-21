import SvgIcon from './svgIcon.vue';
import NoDataTips from './no-data-tips.vue';
import Rate from './rate.vue';

export default {
	install: Vue => {
		Vue.component(SvgIcon.name, SvgIcon);
    Vue.component(NoDataTips.name, NoDataTips);
    Vue.component(Rate.name, Rate);
	}
};
