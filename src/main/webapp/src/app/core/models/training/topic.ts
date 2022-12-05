export class Topic {
    id: number;
    title: string;
    fullname: string;
    theme?: Topic;


    constructor(topic) {
        {
            this.id = topic.id;
            this.title = topic.title;
            this.theme = topic.parent || null;
        }
    }
}
