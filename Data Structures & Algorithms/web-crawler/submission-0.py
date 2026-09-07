# """
# This is HtmlParser's API interface.
# You should not implement it, or speculate about its implementation
# """
#class HtmlParser(object):
#    def getUrls(self, url):
#        """
#        :type url: str
#        :rtype List[str]
#        """

class Solution:
    def crawl(self, startUrl: str, htmlParser: 'HtmlParser') -> List[str]:
        seen = set()

        i = 0
        while startUrl[i] != '/':
            i += 1
        
        i += 2
        hostname = ""
        while i < len(startUrl) and startUrl[i] != '/':
            hostname += startUrl[i]
            i += 1

        def dfs(start):
            if start in seen:
                return
            
            seen.add(start)

            for url in htmlParser.getUrls(start):
                if not url in seen and hostname in url:
                    dfs(url)
        
        dfs(startUrl)
        return list(seen)