/**
 * 用来表示fiber是什么类型的节点
 */

export type WorkTag =
	| typeof FunctionComponent
	| typeof HostRoot
	| typeof HostComponent
	| typeof HostText;

export const FunctionComponent = 0;

// 项目挂载的根节点 如ReactDom.render挂载的根节点
export const HostRoot = 1;

export const HostComponent = 5;

// <div>123</div>
export const HostText = 6;
