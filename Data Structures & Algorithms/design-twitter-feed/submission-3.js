class Twitter {
    constructor() {
        this.map = new Map(), this.followers = new Map(), this.stack = [];
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(this.map.has(userId)) this.map.get(userId).push(tweetId);
        else{
            this.map.set(userId, [tweetId]);
        }
        this.stack.push([userId, tweetId]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let res = [];

        for(let i = this.stack.length - 1; i >= 0; i--){
            const user = this.stack[i][0];

            if(user === userId || (this.followers.has(userId) && this.followers.get(userId).has(user))) res.push(this.stack[i][1]);
            if(res.length === 10) break;
        }

        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(this.followers.has(followerId)) this.followers.get(followerId).add(followeeId);
        else{
            this.followers.set(followerId, new Set());
            this.followers.get(followerId).add(followeeId);
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followers.has(followerId) && this.followers.get(followerId).has(followeeId))
            this.followers.get(followerId).delete(followeeId);
        }
}
