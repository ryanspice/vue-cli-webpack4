
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component()
export default class HelloWorld extends Vue {

	/**/

	data() {

		return {
			msg: 'Welcome to Your PLIB Vue.js App',
		};

	}

}
