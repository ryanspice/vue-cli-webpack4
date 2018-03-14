
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component()
export default class HelloWorld extends Vue {

	/**/

	data() {

		return {
			msg: 'Welcome to Your Webpack 4 Vue.js App',
		};

	}

}
