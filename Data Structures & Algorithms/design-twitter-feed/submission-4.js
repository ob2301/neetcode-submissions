class Twitter {
    constructor() {
        this.twitter = new Map();
        this.tweets = []; //[user, id]
        this.followers = new Map(); //user - following
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(!this.twitter.has(userId)) this.twitter.set(userId, [tweetId]);
        else{
            this.twitter.get(userId).push(tweetId);
        }

        this.tweets.push([userId, tweetId]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let news = [];

        let i = 0;

        while(news.length < 10 && i < this.tweets.length){
            if(!this.followers.has(userId)){
                if(this.tweets[this.tweets.length - 1 - i][0] === userId){
                    news.push(this.tweets[this.tweets.length - 1 - i][1]);
                }
            }
            else if(this.tweets[this.tweets.length - 1 - i][0] === userId || this.followers.get(userId).has(this.tweets[this.tweets.length - 1 - i][0])){
                news.push(this.tweets[this.tweets.length - 1 - i][1]);
            }
            i++;
        }

        return news;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        this.followers.set(followerId, (this.followers.get(followerId) || new Set()).add(followeeId));
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followers.get(followerId).has(followeeId)) this.followers.get(followerId).delete(followeeId);
    }
}
