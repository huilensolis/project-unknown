import { MenuCommandType } from '@/types'

export const COMMAND_TYPE_CLASSNAMES: Record<MenuCommandType, string> = {
  heading: 'text-2xl font-bold',
  paragraph: 'text-base font-normal',
  link: '',
  divider: '',
  table: '',
  list: '',
  quote: '',
  embed: '',
  code: '',
  textFormatting: '',
}

export const INPUT_BOX_BASE_CLASSNAME =
  'border-2 border-gray-100 p-2 flex bg-gray-100'
