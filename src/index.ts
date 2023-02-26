import fs from 'fs-extra'
import chalk from 'chalk'
import { program } from 'commander'
import figlet from 'figlet'
import { create } from './core/index.js'
import type { CreateOptions, PackageJSON } from './types.js'

const packageJSON = fs.readJSONSync('package.json') as PackageJSON

program
  .command('create <name>')
  .description('创建一个系统项目')
  .option('-f, --force', 'overwrite target directory if it exist')
  .action(async (name: string, options: CreateOptions) => {
    await create(name, options)
    // 打印命令行输入的值
  })

program
  // 配置版本号信息
  .version(`v${packageJSON.version}`)
  .usage('<command> [option]')

program.on('--help', () => {
  console.log(
    `\r\n${figlet.textSync('HCCWP', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true,
    })}`,
  )

  console.log(
    `\r\nRun ${chalk.cyan(`hccwp <command> --help`)} show details\r\n`,
  )
})

program.parse()
