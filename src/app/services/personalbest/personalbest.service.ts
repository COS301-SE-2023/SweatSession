import { Injectable } from "@angular/core";
import { IPersonalBest } from "src/app/models";
import { PersonalbestRepository } from "src/app/repository/personalbest.repository";


@Injectable({
    providedIn: 'root'
  })

export class PersonalbestService {
  
    constructor(private repository: PersonalbestRepository) { }

    addPersonalbest(personalbest: IPersonalBest)
    {
        return this.repository.addPersonalBest(personalbest);
    }

}