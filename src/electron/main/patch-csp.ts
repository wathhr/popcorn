import { app } from 'electron';

// ! https://github.com/Vendicated/Vencord/blob/013c8d061d1c1481badb39189a80d13f7db02ccb/src/main/index.ts#L66-L130
function parsePolicy(policy = '') {
  const result: Record<string, string[]> = {};

  for (const directive of policy.split(';')) {
    const [directiveKey, ...directiveValue] = directive.trim().split(/\s+/g);
    if (!directiveKey) continue;

    result[directiveKey] ??= directiveValue;
  }

  return result;
}

app.on('session-created', (session) => {
  session.webRequest.onHeadersReceived(({ responseHeaders, resourceType }, cb) => {
    if (!responseHeaders) return;

    if (resourceType === 'mainFrame') {
      const header = Object.keys(responseHeaders).find(h => h.toLowerCase() === 'content-security-policy');
      if (!header) return cb({ cancel: false, responseHeaders });

      const csp = parsePolicy(responseHeaders[header]![0]);

      const directives = ['style-src', 'connect-src', 'img-src', 'font-src', 'media-src', 'worker-src'];
      for (const directive of directives) {
        csp[directive] ??= [];
        csp[directive]!.push('*', 'blob:', 'data:', '\'unsafe-inline\'', 'popcorn:');
      }

      csp['script-src'] ??= [];
      csp['script-src'].push('\'unsafe-eval\'', 'popcorn:');
      responseHeaders[header] = [
        Object.entries(csp)
          .filter(([, values]) => values?.length)
          .map(directive => directive.flat().join(' '))
          .join('; '),
      ];
    }

    cb({ cancel: false, responseHeaders });
  });

  // TODO: Add a more sophisticated way of doing this instead of completely overwriting it
  session.webRequest.onHeadersReceived = () => {};
});
