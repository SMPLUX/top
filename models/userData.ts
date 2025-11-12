
import { StrictBuilder } from "builder-pattern";
import { faker } from '@faker-js/faker';

export type UserData = {
    name: string;
    description: string;
    username: string;
    password: string;
}

export abstract class UserDataBuilder {
    static withDefault() {
        return StrictBuilder<UserData>()
            .username('standard_user')
            .password('secret_sauce')
            .name(faker.animal.crocodilia())
            .description(faker.lorem.paragraph())
            
    }
}