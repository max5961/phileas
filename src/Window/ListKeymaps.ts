import {KeyMap} from './types.js';

export const LIST_CMDS = {
	increment: 'USE_KEYBINDS_INCREMENT',
	decrement: 'USE_KEYBINDS_DECREMENT',
	scrollUp: 'USE_KEYBINDS_SCROLL_UP',
	scrollDown: 'USE_KEYBINDS_SCROLL_DOWN',
	goToTop: 'USE_KEYBINDS_GO_TO_TOP',
	goToBottom: 'USE_KEYBINDS_GO_TO_BOTTOM',
} as const;

const arrowVertical = {
	[LIST_CMDS.increment]: [{key: 'down'}, {key: 'tab'}],
	[LIST_CMDS.decrement]: [{key: 'up'}],
} satisfies KeyMap;

const arrowHorizontal = {
	[LIST_CMDS.increment]: [{key: 'right'}, {key: 'tab'}],
	[LIST_CMDS.decrement]: [{key: 'left'}],
} satisfies KeyMap;

const vimVertical = {
	[LIST_CMDS.increment]: [{input: 'j'}, {key: 'down'}, {key: 'tab'}],
	[LIST_CMDS.decrement]: [{input: 'k'}, {key: 'up'}],
	[LIST_CMDS.scrollUp]: {key: 'ctrl', input: 'u'},
	[LIST_CMDS.scrollDown]: {key: 'ctrl', input: 'd'},
	[LIST_CMDS.goToTop]: {input: 'gg'},
	[LIST_CMDS.goToBottom]: {input: 'G'},
} satisfies KeyMap;

const vimHorizontal = {
	...vimVertical,
	[LIST_CMDS.increment]: [{input: 'l'}, {key: 'right'}, {key: 'tab'}],
	[LIST_CMDS.decrement]: [{input: 'h'}, {key: 'left'}],
} satisfies KeyMap;

export const ListKeymaps = {
	arrowVertical,
	arrowHorizontal,
	vimVertical,
	vimHorizontal,
};
