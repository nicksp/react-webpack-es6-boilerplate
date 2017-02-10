const SENTRY_KEY = '488193c1894241789631f5a36188e3a5';
const SENTRY_APP = '96144';
export const SENTRY_URL = `https://${SENTRY_KEY}@sentry.io/${SENTRY_APP}`;

/* global Raven */

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
