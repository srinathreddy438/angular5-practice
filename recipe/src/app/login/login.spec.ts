import { LoginComponent } from './login.component';
import { AuthService } from '../auth/auth.service';

describe('Component Login with service', () => {
    let loginComp: LoginComponent;
    let service: AuthService;
    let spy: any;
    beforeEach(() => {
        service = new AuthService();
        loginComp = new LoginComponent(service);
    });
    afterEach(() => {
        localStorage.removeItem('token');
        service = null;
        loginComp = null;
    });
    it('Session Exists to be False', () => {
        // spy is a feature we can controle retun value of a function what should be return value
        // fix return value of spy then this function will return always set value
        spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
        expect(loginComp.sessionExists()).toBeFalsy();
        // when u call loginComp.sessionExists() in calls service.isAuthenticated method in component
        expect(service.isAuthenticated).toHaveBeenCalled();
    });
    it('Session Exists to be True', () => {
        localStorage.setItem('token', '123');
        expect(loginComp.sessionExists()).toBeTruthy();
    });
    it('Spy check method should be called', () => {
        spy = spyOn(loginComp, 'returnFinalValueFun').and.returnValue('sri123');
        expect(loginComp.returnFinalValueFun('sri')).toBe('sri123');
        expect(loginComp.returnFinalValueFun).toHaveBeenCalled();
    });
    it('Spy check method called be called with arguments', () => {
        spy = spyOn(loginComp, 'returnFinalValueFun').and.returnValue('sri123');
        expect(loginComp.returnFinalValueFun('sri')).toBe('sri123');
        expect(loginComp.returnFinalValueFun).toHaveBeenCalledWith('sri');
    });
});
