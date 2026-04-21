function solution(command) {
    const commands = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            const upvotes = this.upvotes;
            const downvotes = this.downvotes;
            const totalVotes = upvotes + downvotes;
            const score = upvotes - downvotes;

            let reportedUpvotes = upvotes;
            let reportedDownvotes = downvotes;

            if (totalVotes > 50) {
                const inflation = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
                reportedUpvotes += inflation;
                reportedDownvotes += inflation;
            }

            let rating = "new";

            if (totalVotes < 10) {
                rating = "new";
            } else if (upvotes > totalVotes * 0.66) {
                rating = "hot";
            } else if (score >= 0 && totalVotes > 100) {
                rating = "controversial";
            } else if (score < 0) {
                rating = "unpopular";
            }

            return [reportedUpvotes, reportedDownvotes, score, rating];
        }
    };

    return commands[command]();
}
