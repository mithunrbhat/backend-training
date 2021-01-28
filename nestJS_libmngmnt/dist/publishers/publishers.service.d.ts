import { Model } from 'mongoose';
import { Publisher } from './publisher.model';
export declare class PublishersService {
    private readonly publisherModel;
    constructor(publisherModel: Model<Publisher>);
    includePublisher(name: string, email: string, contact: string, established: number): Promise<string>;
    provideAllPublishers(): Promise<{
        id: string;
        name: string;
        email: string;
        contact: string;
        established: number;
    }[]>;
    provideOnePublisher(publisherId: string): Promise<{
        id: string;
        name: string;
        email: string;
        contact: string;
        established: number;
    }>;
    removePublisher(publisherId: string): Promise<void>;
    private findPublisher;
}
