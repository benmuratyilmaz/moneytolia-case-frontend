import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly email = 'test@mail.com';
    private readonly password = '12345678';
    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    login(email: string, password: string): boolean {
        if (email === this.email && password === this.password) {
            if (this.isBrowser) {
                localStorage.setItem('isLoggin', 'true');
                localStorage.setItem('isLogginName', 'Test Kullanıcısı');
            }
            return true;
        }
        return false;
    }

    logout(): void {
        if (this.isBrowser) {
            localStorage.removeItem('isLoggin');
            localStorage.removeItem('isLogginName');
        }
    }

    isLoggedIn(): boolean {
        return this.isBrowser && localStorage.getItem('isLoggin') === 'true';
    }
}