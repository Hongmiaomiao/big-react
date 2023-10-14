import { Props, Key } from 'shared/ReactTypes';
import { WorkTag } from './workTags';

export class FiberNode {
	type: any;
	tag: any;
	key: any;
	stateNode: any;
	return: any;
	sibling: any;
	index: any;
	child: any;

	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		// 实例
		this.tag = tag;
		this.key = key;

		// stateNode保存对应组件的DOM
		this.stateNode = null;

		// type是FiberNode的类型，比如FunctionComponent来说type是fun本身
		this.type = null;

		// return是指向父fiberNode的
		this.return = null;
		// sibling是指向右边的兄弟节点的
		this.sibling = null;
		// 指向子fiberNode
		this.child = null;
		// index是同级fiberNode有多个的情况，来表示第几个
		this.index = 0;
	}
}
