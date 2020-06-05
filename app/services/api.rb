class Api
    def self.bestsellersRequest
        resp = Typhoeus.get("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=XihJWvP2gaOgCgR3onpTKeXRp5LTVAQQ")
        results = JSON.parse(resp.response_body)
    end

    def self.listsNameRequest
        resp = Typhoeus.get("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=XihJWvP2gaOgCgR3onpTKeXRp5LTVAQQ")
        results = JSON.parse(resp.response_body)
    end

    def self.fetchBestsellersByLists(list_name)
        resp = Typhoeus.get("https://api.nytimes.com/svc/books/v3/lists.json?list=#{list_name}&api-key=XihJWvP2gaOgCgR3onpTKeXRp5LTVAQQ")
        results = JSON.parse(resp.response_body)
    end

    def self.currentBestseller
        resp = Typhoeus.get("https://api.nytimes.com/svc/books/v3/lists/current/family.json?api-key=XihJWvP2gaOgCgR3onpTKeXRp5LTVAQQ")
        results = JSON.parse(resp.response_body)
    end
end