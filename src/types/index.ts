export enum MenuCommandType {
  LINK = 'link',
  DIVIDER = 'divider',
  TABLE = 'table',
  HEADING = 'heading',
  LIST = 'list',
  QUOTE = 'quote',
  EMBED = 'embed',
  CODE = 'code',
  TEXT_FORMATTING = 'textFormatting',
  PARAGRAPH = 'paragraph',
}

export type MenuCommand = {
  type: MenuCommandType
}

export function isCommandType(
  commandType: string | null,
): commandType is MenuCommandType {
  return Object.values(MenuCommandType).includes(
    commandType as unknown as MenuCommandType,
  )
}

export type Box = {
  content: string
  id: string
  type: MenuCommandType
}
