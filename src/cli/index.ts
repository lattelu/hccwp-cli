#! /usr/bin/env ts-node

// Import * as p from '@clack/prompts'
import { program } from "commander";
import { CreateOptions } from "./types";
import figlet from "figlet";
import chalk from "chalk";
import packageJSON from "../../package.json";

import create from './create'
// import(`${cwdUrl}/package.json`);
// 用于检查入口文件是否正常执行
console.log("my-node-cli working~");

program
	.version("0.1.0")
	.command("create <name>")
	.description("创建一个系统项目")
	.option("-f, --force", "overwrite target directory if it exist")
	.action((name, options: CreateOptions) => {
		console.log("name:", name, "options:", options);
		create(name,options)
		// 打印命令行输入的值
	});

program
	// 配置版本号信息
	.version(`v${packageJSON.version}`)
	.usage("<command> [option]");

program.on('--help', () => {


	console.log(
		"\r\n" +
			figlet.textSync("HCCWP", {
				font: "Ghost",
				horizontalLayout: "default",
				verticalLayout: "default",
				width: 80,
				whitespaceBreak: true,
			})
	);

	    console.log(
				`\r\nRun ${chalk.cyan(`hccwp <command> --help`)} show details\r\n`
			);

	})

program.parse();
