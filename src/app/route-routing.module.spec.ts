import { RouteRoutingModule } from './route-routing.module';

describe('RouteRoutingModule', () => {
  let routeRoutingModule: RouteRoutingModule;

  beforeEach(() => {
    routeRoutingModule = new RouteRoutingModule();
  });

  it('should create an instance', () => {
    expect(routeRoutingModule).toBeTruthy();
  });
});
