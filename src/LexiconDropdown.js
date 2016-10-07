import Component from 'metal-component';
import core from 'metal';
import MetalDropdown from 'metal-dropdown';
import Soy from 'metal-soy';
import templates from './LexiconDropdown.soy';

import LexiconButton from 'lexicon-button'; // jshint ignore:line

/**
 * Implementation of the Lexicon Dropdown Piece
 *
 * @see  {@link http://liferay.github.io/lexicon/content/dropdowns/|Lexicon Definition}
 */
class LexiconDropdown extends MetalDropdown {}

/**
 * State definition.
 * @type {!Object}
 * @static
 */
LexiconDropdown.STATE = {
	/**
	 * @typedef Item
	 * @type {object}
	 * @property {?boolean} active - Whether or not the item will be rendered as active.
	 * @property {?boolean} disabled - Whether or not the item will be rendered as disabled.
	 * @property {?string} href - href for the link.
	 * @property {!string} label - Text to display for the item.
	 * @property {?string} type - determines the type of item.
	 */

	/**
	 * Items to be displayed in dropdown menu.
	 * @default []
	 * @instance
	 * @memberof LexiconDropdown
	 * @type {Array.<Item>}
	 */
	items: {
		validator: core.isArray,
		value: []
	},

	/**
	 * @typedef Trigger
	 * @type {object}
	 * @property {?boolean} anchor - determines if the trigger is rendered as an anchor.
	 * @property {?string} elementClasses - classes that are added to the item element.
	 * @property {?string} label - Text to display for the trigger.
	 */

	/**
	 * Trigger configuration such as anchor, label, and elementClasses.
	 * @default undefined
	 * @instance
	 * @memberof LexiconDropdown
	 * @type {<Trigger>}
	 */
	trigger: {
		validator: core.isObject
	}
};

// Register component
Soy.register(LexiconDropdown, templates);

export default LexiconDropdown;