import { Component } from '@angular/core';
import { NameGeneratorService, SimpleNameGeneratorService } from './name-generator/name-generator.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
       { provide: NameGeneratorService, useClass: SimpleNameGeneratorService }
    ]
})
export class AppComponent implements OnInit {
    constructor(private nameGeneratorService: NameGeneratorService) {}
    
    idan: string;
    shachar: string;

    togglePicture() {
        var x = document.getElementById("image");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    showNext() {
        this.idan = this.nameGeneratorService.getIdanNext();
        this.shachar = this.nameGeneratorService.getShacharNext();
    }

    ngOnInit() {
        this.nameGeneratorService.init();
    }
}

