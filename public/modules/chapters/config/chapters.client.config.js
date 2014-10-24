'use strict';

// Configuring the Articles module
angular.module('chapters').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Chapters', 'chapters', 'dropdown', '/chapters(/create)?');
		Menus.addSubMenuItem('topbar', 'chapters', 'New Story', 'create');
    Menus.addSubMenuItem('topbar', 'chapters', 'Chapter One', localStorage.getItem('chapterId') + '/ch1');
    Menus.addSubMenuItem('topbar', 'chapters', 'Chapter Two', localStorage.getItem('chapterId') + '/ch2');
    Menus.addSubMenuItem('topbar', 'chapters', 'Chapter Three', localStorage.getItem('chapterId') + '/ch3');
    Menus.addSubMenuItem('topbar', 'chapters', 'Chapter Four', localStorage.getItem('chapterId') + '/ch4');
    Menus.addSubMenuItem('topbar', 'chapters', 'Chapter Five', localStorage.getItem('chapterId') + '/ch5');
    Menus.addSubMenuItem('topbar', 'chapters', 'End', localStorage.getItem('chapterId') + '/final');
	}
]);