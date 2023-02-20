import { Global, Module } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';


export const PROVIDER_TOKEN={
    UUID:'UUID'

}
@Global()
@Module({
    providers: [
        {
            provide: PROVIDER_TOKEN.UUID,
            useValue: uuidv4,
        },
    ],
    exports: [PROVIDER_TOKEN.UUID],



})
export class CommonModule {}
