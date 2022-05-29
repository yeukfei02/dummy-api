import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const appService = new AppService();
    appController = new AppController(appService);
  });

  describe('root', () => {
    it('return success', () => {
      const response = appController.getMain();
      expect(response).toEqual({ message: 'dummy-api' });
    });
  });
});
