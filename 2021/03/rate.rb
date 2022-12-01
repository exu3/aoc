#!/usr/bin/env ruby

# miserably failed attempt
File.open("example.txt", "r") do |file|

    # for line in file.readlines()
    #     puts line.chomp()
    # end
    
    for line in file.readlines()
        line.split("\n") 
        puts line
    end


end


# file = File.open("example.txt", "r")

# puts file.readlines()

# file.close()