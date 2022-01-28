export const getExtension = (language: string) => {
  switch(language) {
    case "python" :
      return "py"
    case "javascript" :
      return "js"
    default :
      return "py"
  }
}