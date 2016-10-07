'use strict';

import LexiconDropdown from '../src/LexiconDropdown';

let dropdown;

describe('LexiconDropdown', function() {
	afterEach(() => {
		if (dropdown) {
			dropdown.dispose();
		}
	});

	it('should generate the default Lexicon dropdown markup', function() {
		dropdown = new LexiconDropdown();

		assert.strictEqual(dropdown.element.outerHTML, __html__['test/fixture/testDefaultLexiconDropdown.html']);
	});

	it('should generate trigger with label', function() {
		dropdown = new LexiconDropdown({
			trigger: {
				label: 'Dropdown'
			}
		});

		assert.strictEqual(dropdown.element.outerHTML, __html__['test/fixture/testTriggerLabelLexiconDropdown.html']);
	});

	it('should generate trigger as anchor with additional element classes', function() {
		dropdown = new LexiconDropdown({
			trigger: {
				anchor: true,
				elementClasses: 'element-class',
				label: 'Anchor'
			}
		});

		assert.strictEqual(dropdown.element.outerHTML, __html__['test/fixture/testTriggerLexiconDropdown.html']);
	});

	it('should generate item types with correct active and disabled states', function() {
		dropdown = new LexiconDropdown({
			items: [{
				label: 'Dropdown Header',
				type: 'header'
			}, {
				type: 'scroller',
				items: [{
					active: true,
					href: '#',
					label: 'Actions',
					type: 'link'
				}, {
					href: '#',
					label: 'Edit',
					type: 'link'
				}, {
					href: '#',
					label: 'View',
					type: 'link'
				}, {
					href: '#',
					label: 'Permissions',
					type: 'link'
				}, {
					href: '#',
					label: 'Configuration',
					type: 'link'
				}, {
					href: '#',
					label: 'Look & Feel',
					type: 'link'
				}]
			}, {
				disabled: true,
				href: '#',
				label: 'Disabled',
				type: 'link'
			}, {
				type: 'divider'
			}, {
				href: '#',
				label: 'Scope',
				type: 'link'
			}]
		});

		assert.strictEqual(dropdown.element.outerHTML, __html__['test/fixture/testItemTypesLexiconDropdown.html']);
	});
});
