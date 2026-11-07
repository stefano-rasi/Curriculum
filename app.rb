require 'yaml'

require 'slim'
require 'sinatra'
require 'asciidoctor'

helpers do
    def asciidoc(text)
        Asciidoctor.convert(text, doctype: :inline)
    end
end

get '/' do
    @curriculum = YAML.load_file('curriculum.yml')

    slim :curriculum
end
