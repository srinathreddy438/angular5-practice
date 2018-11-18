// in this we are learning x(disabled), f(focused) test caeses
import { AuthService } from './auth.service';

describe('Service: Auth', () => {

    let service: AuthService;

    beforeEach(() => {
        service = new AuthService();
    });

    afterEach(() => {
        service = null;
        localStorage.removeItem('token');
    });

    it('should return true from isAuthenticated when there is a token', () => {
        localStorage.setItem('token', '1234');
        expect(service.isAuthenticated()).toBeTruthy();
    });
    // we can focus test case using f before describe or it
    // focused test case will move to the top in results
    it('should return false from isAuthenticated when there is no token', () => {
        expect(service.isAuthenticated()).toBeFalsy();
    });
    // we can disabled test case using x before describe or it
    // disabled test case will won't execure when we run ng test
    xit('4==4 should give true', () => {
        expect(4 === 4).toBeTruthy();
    });

});
