/* @flow */
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component()
export default class HelloWorld extends Vue {

	number:string = 'Welcome to Your PLIB Vue.js App';

	/**/

	data() {

		return {
			msg: this.number,
		};

	}

}
