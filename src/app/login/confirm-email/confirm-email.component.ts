import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ProfileService } from '../../shared/services/profile.service';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-confirm-email',
    templateUrl: './confirm-email.component.html'
})
export class ConfirmEmailComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService,
                private profileService: ProfileService,
                private snack: MdSnackBar) {
    }

    private onSuccess(result: any) {
        let data = result.json();
        if (data && data.token) {
            localStorage.setItem('token', data.token);
            this.profileService.refreshProfile();
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        const me = this;
        const token = this.route.snapshot.queryParams['token'];

        this.authenticationService.confirmEmail(token)
            .subscribe(result => {
                me.snack.open('Email confirmed');
                me.onSuccess(result);
            }, (error) => {
                me.snack.open(error._body);
            })
    }
}
