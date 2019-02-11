class Cryptocompare
    include HTTParty
    def self.TopTen
        base_uri 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key={e9bd39d6c07ec15053aef7dceedd167adbf9fb843862b9179de88ba24bcd21b1}'
        default_params fields: 'CoinInfo'
        format :json
        
        def self.one
            get("")["Data"]
        end

        alltop = String.new
        self.one
        self.one.each do |item|
            alltop.concat(item["CoinInfo"]["Name"]+",")
        end
        
        def self.Prices alltop
            base_uri 'https://min-api.cryptocompare.com/data/pricemulti?fsyms='+alltop+'&tsyms=BRL&api_key={e9bd39d6c07ec15053aef7dceedd167adbf9fb843862b9179de88ba24bcd21b1}'
            format :json
        end

        def self.two
            get(""[""])
        end

        self.Prices(alltop)
        self.two

    end


=begin versão antiga sem parsing mas que funciona
    def self.chama_get
        response = HTTParty.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key={e9bd39d6c07ec15053aef7dceedd167adbf9fb843862b9179de88ba24bcd21b1}')
    end
=end


end