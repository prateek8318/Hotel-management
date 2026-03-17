// App Routes Configuration
export const ROUTES = {
  HOME: '/',
  ROOMS: '/rooms',
  ROOM_DETAILS: '/rooms/:roomId',
  BOOKING: '/booking',
  DINING: '/dining',
  WELLNESS: '/wellness',
  EVENTS: '/events',
  CONTACT: '/contact',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = typeof ROUTES[RouteKey];
