import { Component }            from '@angular/core';

@Component ({
    moduleId: module.id,
    selector: 'iot-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title: string = 'Asset Manager';

    loggedIn():boolean {
        if (localStorage.getItem('token')) {
            return true;
        }

        return false;
    }


}