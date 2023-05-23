# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# filter_letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
# filter_letter_t = 't'
# # Expected output: ['tea', 'water', 'soda water']

# def filtered_words (array, letter)
#     array.select { |word| word.include?(letter) }
# end

# p filtered_words(beverages_array, filter_letter_o)
# # ["coffee", "soda water"]
# p filtered_words(beverages_array, filter_letter_t)
# # ["tea", "water", "soda water"]



# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# def all_us_states hash
#     hash.values.flatten(2).sort
# end

# p all_us_states(us_states)



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


# class Bike 
#     attr_accessor :model, :wheels, :current_speed 
#     def initialize(model, wheels = 2)
#         @model = model
#         @wheels = wheels
#         @current_speed = 0
#     end
#     def bike_info
#         "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
#     end    
# end


# newbike = Bike.new ('Trek')

# puts newbike.bike_info







# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0


class Bike 
    attr_accessor :model, :wheels, :current_speed
    def initialize(model, wheels = 2)
        @model = model
        @wheels = wheels
        @current_speed = 0
    end
    def pedal_faster(speed_change)
        @current_speed += speed_change
    end
    def brake (speed_change)
        @current_speed = [@current_speed - speed_change, 0].max
    end    

    def bike_info
        "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
    end    
end

mongoose = Bike.new ('Mongoose')

p mongoose.pedal_faster(5)
#5
p mongoose.pedal_faster(20)
#25
p mongoose.brake(8)
#17
p mongoose.brake(25)
#0