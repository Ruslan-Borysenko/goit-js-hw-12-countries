import { error } from '@pnotify/core/dist/PNotify.js';
import { defaults } from '@pnotify/core';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

export function myError(message) {
  error({
    text: message,
  });
}

// change defaults
defaults.width = '230px';
defaults.delay = 1000;
defaults.closerHover = true;
defaults.sticker = false;
