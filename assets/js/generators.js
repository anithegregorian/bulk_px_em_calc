/**
 *  Package Name: Bulk PX Em Calc
 *  Package URI: https://www.ravendevelopers.com
 *  Subpackage: bulk_px_em_calc
 *  Author: anithegregorian
 *  Created: 08/04/22
 *  Author URI: https://www.ravendevelopers.com
 *  Description: Enter description.
 *  Version: 1.0
 *  License: Creative Commons 3.0 Attribution
 *  License URI: https://creativecommons.org/licenses/by/3.0/us/
 *  Tags: js
 */

generateUtils = () => {
	const grids = Alpine.store('settings').grids;
	const what = Alpine.store('settings').util_generate;
	let template = '';
	let prefix = '';
	let property = '';

	Raven.elements.util_code.classList.remove('language-css');
	Raven.elements.util_code.classList.remove('language-json');

	switch (what){
		case 'class':
			prefix = Alpine.store('settings').util_class_prefix;
			property = Alpine.store('settings').util_css_property;

			for (let i = 0; i <= grids.length - 1; i++) {
				const grid = grids[i];
				template += `.${prefix}${grid.p} { ${property}: ${grid.r}rem }` + "\r\n\n";
			}
			Raven.elements.util_code.classList.add('language-css');
			break;

		case 'vars':
			prefix = Alpine.store('settings').util_var_prefix;
			template = ':root {' + "\r\n";
			for (let i = 0; i <= grids.length - 1; i++) {
				const grid = grids[i];
				template += "\t" + `--${prefix}${grid.p}: ${grid.r}rem;` + "\r\n";
			}
			template += '}';
			Raven.elements.util_code.classList.add('language-css');
			break;

		case 'bootstrap':
			prefix = Alpine.store('settings').util_var_prefix;
			template = '$spacers: (' + "\r\n";
			for (let i = 0; i <= grids.length - 1; i++) {
				const grid = grids[i];
				template += "\t" + `${grid.p}: ${grid.r}rem,` + "\r\n";
			}
			template += ');';
			Raven.elements.util_code.classList.add('language-scss');
			break;

		case 'tw_config':
			template = 'module.exports = {' + "\r\n";
			template += "\t" + 'theme: {' + "\r\n";
			template += "\t\t" + 'spacing: {' + "\r\n";
			for (let i = 0; i <= grids.length - 1; i++) {
				const grid = grids[i];
				template += "\t\t\t" + `${grid.p}: '${grid.r * 4}rem',` + "\r\n";
			}
			template += "\t\t" + '}' + "\r\n";
			template += "\t" + '}' + "\r\n";
			template += '}';
			Raven.elements.util_code.classList.add('language-json');
			break;
	}

	Raven.elements.util_code.innerText = template;
	Raven.elements.code_wrapper.style.display = 'inherit';
	hljs.highlightElement(Raven.elements.util_code);
}
