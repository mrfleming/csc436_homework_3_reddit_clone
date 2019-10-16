export class Article {
    title: string;
    link: string;
    votes: number;
    role: string;

    constructor(title: string, link: string, votes: number, role: string) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
        this.role = role || 'user';
    }

    isAdmin(): boolean {
        return this.role.toLowerCase() == 'admin';
    }

    voteUp(): void {
        this.votes +=1;
    }

    voteDown(): void {
        this.votes -=1;
    }

    getVotes(): number {
        return this.votes;
    }

    setVote(v: number): void {
        this.votes = v;
    }

    hyperVoteDown(): void {
        //this.votes = Number.MIN_SAFE_INTEGER;
        this.votes = -9000;
    }

    domain(): string {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}