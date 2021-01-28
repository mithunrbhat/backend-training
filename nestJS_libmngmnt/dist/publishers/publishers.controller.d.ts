import { PublishersService } from './publishers.service';
export declare class PublishersController {
    private readonly publishersService;
    constructor(publishersService: PublishersService);
    addPublisher(publisherName: string, publisherEmail: string, publisherContact: string, publisherEstablished: number): Promise<{
        id: string;
    }>;
    getPublishers(): Promise<{
        id: string;
        name: string;
        email: string;
        contact: string;
        established: number;
    }[]>;
    getOnePublisher(pubId: string): Promise<{
        id: string;
        name: string;
        email: string;
        contact: string;
        established: number;
    }>;
    deletePublisher(pubId: string): Promise<any>;
}
