const mapping: Record<string, string> = {
  children: 'child',
  companies: 'company',
  posts: 'post',
  'simulator-profiles': 'simulator_profile',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
