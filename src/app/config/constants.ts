// Angular Modules
import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'https://www.odwb.be/api/explore/v2.1/catalog/datasets/communes_s3/records?limit=20';
    public readonly API_MOCK_ENDPOINT: string = 'https://www.odwb.be/api/explore/v2.1/catalog/datasets/communes_s3/records?limit=20';
}