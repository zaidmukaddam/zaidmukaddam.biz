import splitbee from '@splitbee/web';

export enum SBTrack {
  Twitter = 'Twitter External Link',
  GitHub = 'GitHub External Link',
  LinkedIn = 'LinkedIn External Link',
  Margatsni = 'Explore Margatsni Click',
  Nectbox = 'Explore Nectbox Click',
  Montex = 'Explore Montex Click',
  Unitech_Main = 'Unitech Main Click',
  Personal_Space = 'Personal Space V1 Click',
  Unitech_Landing = 'Unitech Landing Click',
  Reddit_Client = 'Reddit Client Click',
}

export type SBTrackEvent = `${SBTrack}`;

if (process.env.NODE_ENV === 'production') {
  splitbee.init({
    token: process.env.NEXT_PUBLIC_SB_TOKEN,
    disableCookie: false,
    scriptUrl: '/bee.js',
    apiUrl: '/_hive',
  });
}


/**
 * Removing custom tracking for now
 * Found out the service has an issue with counting custom events
 */
// splitbee.track(SBTrack.Twitter, { type: 'social' });
// splitbee.track(SBTrack.GitHub, { type: 'social' });
// splitbee.track(SBTrack.LinkedIn, { type: 'social' });
// splitbee.track(SBTrack.Margatsni, { type: 'project' });
// splitbee.track(SBTrack.Nectbox, { type: 'project' });
// splitbee.track(SBTrack.Montex, { type: 'project' });
// splitbee.track(SBTrack.Unitech_Main, { type: 'extra_project' });
// splitbee.track(SBTrack.Personal_Space, { type: 'extra_project' });
// splitbee.track(SBTrack.Unitech_Landing, { type: 'extra_project' });
// splitbee.track(SBTrack.Reddit_Client, { type: 'extra_project' });
