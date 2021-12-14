function template(strings: any, ...keys: any) {
  return function (...values: any) {
    const dict = values[values.length - 1] || {}
    const result = [strings[0]]
    keys.forEach(function (key: any, i: number) {
      const value = Number.isInteger(key) ? values[key] : dict[key]
      result.push(value, strings[i + 1])
    })
    return result.join('')
  }
}

export const buildSteps = template`cd $(mktemp -d); cp -Rp /app/* .; /usr/lib/dart/bin/pub get; /usr/lib/dart/bin/dart compile exe ${'libPath'}/${'script'}.dart -o bootstrap; mv bootstrap /target/${'script'};`
