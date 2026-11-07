namespace :style do
    source = 'styles/curriculum.scss'
    output = 'public/curriculum.css'

    file output => FileList['styles/*.scss'] do
        sh 'sass', '--embed-sources', source, output
    end

    task build: output
end

task :start, [:port] => 'style:build' do |task, arguments|
    port = arguments.fetch(:port, '4567')

    ruby 'app.rb', '-p', port
end

task default: 'style:build'
