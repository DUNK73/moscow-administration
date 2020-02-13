import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const animationTimeout = 350;

export const slideInAnimation =
  trigger('routeTopTileAnimation', [
    transition('general-top-tile => clients-top-tile', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('clients-top-tile => general-top-tile', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ transform: `translateX(100%)` })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ transform: `translateX(-100%)` }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ transform: `translateX(0%)` }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

export const bottomTileAnimation =
  trigger('routeBottomTileAnimation', [
    transition('general-bottom-tile => clients-bottom-tile', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(-100%)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ transform: 'translateY(100%)' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ transform: 'translateY(0%)' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('clients-bottom-tile => general-bottom-tile', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(100%)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ transform: 'translateY(-100%)' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ transform: 'translateY(0%)' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);

export const rightTileAnimation =
  trigger('routeRightTileAnimation', [
    transition('general-right-tile => clients-right-tile', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        })
      ]),
      query(':enter', [
        style({  transform: `translateX(-100%)` })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({  transform: `translateX(100%)`  }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({  transform: `translateX(0%)`  }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('clients-right-tile => general-right-tile', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        })
      ]),
      query(':enter', [
        style({ transform: `translateX(100%)` })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ transform: `translateX(-100%)` }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ transform: `translateX(0%)` }))
        ])
      ]),
      query(':enter', animateChild()),
    ])

  ]);
