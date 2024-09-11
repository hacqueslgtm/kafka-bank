const loadLangMsg = async (locale: string) => {
  const modules = await import.meta.glob('../**/**.json')
  let messages: any = {}

  for (const path in modules) {
    if (path.includes(locale)) {
      const mod: any = await modules[path]()
      messages = { ...messages, ...mod.default }
    }
  }
  return messages
}

export default loadLangMsg

