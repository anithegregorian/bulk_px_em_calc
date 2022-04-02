/**
 *  Package Name: Bulk PX Em Calc
 *  Package URI: https://www.ravendevelopers.com
 *  Subpackage: bulk_px_em_calc
 *  Author: anithegregorian
 *  Created: 31/03/22
 *  Author URI: https://www.ravendevelopers.com
 *  Description: Enter description.
 *  Version: 1.0
 *  License: Creative Commons 3.0 Attribution
 *  License URI: https://creativecommons.org/licenses/by/3.0/us/
 *  Tags: js
 */

document.addEventListener('DOMContentLoaded', () => {
	//Alpine.start();
});

function generateGrid() {
	const base = Math.abs(Alpine.store('settings').base);
	const grid_base = Math.abs(Alpine.store('settings').grid_base);
	const iterations = Math.abs(Alpine.store('settings').iterations);
	let grids = [];

	for (let i = 1; i <= iterations; i++) {
		const valPixels = grid_base * i;
		const valEms = valPixels / base;
		const valRems = valPixels / base;

		grids.push({p: valPixels + 'px', e: valEms + 'em', r: valRems + 'rem'});
	}

	Alpine.store('settings').grids = grids;
}
