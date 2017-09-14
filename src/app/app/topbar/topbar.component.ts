import { Component, NgZone, OnInit } from "@angular/core";
import { User } from '../../shared/models/user.model';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

    public profile: User;

    constructor(
        private zone: NgZone,
        private authService: AuthenticationService,
        private profileService: ProfileService
    ) { }

    ngOnInit() {
        this.loadProfile();
    }

    public logout(): void {
        this.authService.logout();
    }

    private loadProfile(): void {
        this.profileService.getProfile().subscribe((profile: User) => {
            this.zone.run(() => {
                this.profile = profile;
            });
        });
    }

}
