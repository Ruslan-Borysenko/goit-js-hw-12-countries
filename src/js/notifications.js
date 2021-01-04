import { notice, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';

defaultModules.set(PNotifyMobile, {});

defaults.animateSpeed = 1000;
defaults.delay = 1000;
