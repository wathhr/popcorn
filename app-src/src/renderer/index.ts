function replaceText(selector: string, text: string) {
  const element = document.getElementById(selector);
  if (element) element.textContent = text;
}

for (const dependency of ['chrome', 'node', 'electron']) {
  replaceText(`${dependency}-version`, window.electron.process.versions[dependency]!);
}
