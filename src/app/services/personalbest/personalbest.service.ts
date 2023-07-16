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

    deletePersonalbest(personalbest: IPersonalBest)
    {
        return this.repository.deletePersonalbest(personalbest);
    }

    getExercisesByName(exexersiceName : string)
    {
        return this.repository.getExercisesByName(exexersiceName);
    }
}