import { app, session } from 'electron';

function parsePolicy(policy: string) {
  const result: Record<string, string[]> = {};

  for (const directive of policy.split(';')) {
    const [directiveKey, ...directiveValue] = directive.trim().split(/\s+/g);

    if (directiveKey && !(directiveKey in result)) {
      result[directiveKey] = directiveValue;
    }
  }

  return result;
}

app.on('ready', () => {
  session.defaultSession.webRequest.onHeadersReceived(({ responseHeaders, resourceType }, cb) => {
    if (!responseHeaders) return;

    if (resourceType === 'mainFrame') {
      const header = Object.keys(responseHeaders).find(h => h.toLowerCase() === 'content-security-policy');
      if (!header) return cb({ cancel: false, responseHeaders });

      const csp = parsePolicy(responseHeaders[header]![0]!);

      for (const directive of ['style-src', 'connect-src', 'img-src', 'font-src', 'media-src', 'worker-src']) {
        csp[directive] ??= [];
        csp[directive]!.push('*', 'blob:', 'data:', 'popcorn:', '\'unsafe-inline\'');
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

  session.defaultSession.webRequest.onHeadersReceived = () => { };
});
