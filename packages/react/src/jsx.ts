/**
 *  jsx经过babel的转化，会转化成调用crateElement方法来创建元素。jsx是createElement的语法糖
 * 
 * 
// 转译前：
const App = () => <div>你好，世界</div>

//转译后：
var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "你好,世界");
};
*/

import { REACT_ElEMENT_TYPE } from '../../shared/ReactSymbol';
import {
	Type,
	Key,
	Ref,
	Props,
	ReactElementType,
	ElementType
} from '../../shared/ReactTypes';

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ElEMENT_TYPE, // 通过一个独一无二的type值来表明是ReactElement
		type,
		key,
		ref,
		props,
		__mark: 'eliza' // 这个标志来和官方React的方法做区分
	};
	return element;
};

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	let ref: Ref = null;
	const props: Props = {};

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		// 检查config是否本身具有prop属性，而不是原型链上继承过来的
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}
	return ReactElement(type, key, ref, props);
};

// 在React真实版本中，分jsxDEV和jsx，在开发环境会做更多的检查
export const jsxDEV = jsx;
