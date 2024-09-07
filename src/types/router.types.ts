// TODO JSDoc
interface RouteMeta {
  title?: string
  requiresAuth: boolean
  highlight?: 'Home' | 'Account' | 'Card' | 'Invest' | 'User'
}

// TODO JSDoc
export interface RouteRecord {
  meta?: RouteMeta
  [key: string]: any
}

