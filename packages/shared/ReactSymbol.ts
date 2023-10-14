/**
 * 为了防止React Element 滥用，要定义一个独一无二的值 React Symbol
 * 1. 判断当前环境是否支持Symbol
 * 2. 如果支持利用Symbol创建一个独一无二的值来表示React.Element类型
 * 3. 如果不支持则返回一个大数字来表示
 */

const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const REACT_ElEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;
