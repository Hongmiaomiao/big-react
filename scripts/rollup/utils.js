import path from 'path';
import fs from 'fs';

import ts from 'rollup-plugin-typescript';
import cjs from '@rollup/plugin-commonjs';

const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');

/**
 * 解析包的路径
 * isDist用来表示打包后的路径/源码路径
 *  */
export function resolvePkgPath(pkgName, isDist) {
	if (isDist) {
		return `${distPath}/${pkgName}`;
	}
	return `${pkgPath}/${pkgName}`;
}

export function getPackageJSON(pkgName) {
	// ...包路径
	const path = `${resolvePkgPath(pkgName)}/package.json`;
	const str = fs.readFileSync(path, { encoding: 'utf-8' });
	return JSON.parse(str);
}

/**
 * 需要的plugins
 * 1. 用于解析commonjs规范的plugin
 * 2. 将ts做转移的plugin
 * @returns
 */
export function getBaseRollupPlugins({ typescript = {} } = {}) {
	return [cjs(), ts(typescript)];
}
