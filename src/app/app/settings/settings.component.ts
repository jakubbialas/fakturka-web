import {Component, OnInit} from '@angular/core';
import {SettingService} from '../../shared/services';
import {Setting} from '../../shared/models';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    protected settings: Array<Setting>;

    constructor(private settingsService: SettingService) {
    }

    ngOnInit() {
        this.loadSettings();
    }

    loadSettings() {
        this.settingsService.getSettings().then(settings => {
            this.settings = settings;
        })
    }
}
