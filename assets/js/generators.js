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

generateUtilClasses = () => {
	const grids = Alpine.store('settings').grids;
	const code = document.getElementById('util-class');
	const prefix = Alpine.store('settings').util_class_prefix;
	let template = '';
	//console.log(grids, grids.length);

	for (let i = 0; i <= grids.length - 1; i++) {
		//console.log(grids[i]);
		const grid = grids[i];

		template += `.${prefix}${grid.p} { ${grid.r}rem }` + "\r\n\n";
	}

	//console.log(template);
	Raven.elements.util_class.innerText = template;

	Raven.elements.util_class.style.display = 'inherit';

	hljs.highlightElement(Raven.elements.util_class);
}
