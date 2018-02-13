=begin
here is a set of arithmetic operators
=end

1 + 2
2 - 1
5 * 10
10 / 2

9 % 3

10 % 3

=begin
10/0 - Error

0/0 - Error
=end

=begin
Variables Challenge
=end

my_favorite_number = 21

my_favorite_number / 2.0

someones_favorite = 13

someones_favorite = 7

someones_favorite - my_favorite_number

my_favorite_number = my_favorite_number * 26

=begin
strings manipulation/Challenge
=end
my_string = "whats up"

my_string.upcase
my_string.reverse
my_string.include?("w")
my_string.capitalize

puts "Enter your name"
new_string = gets.chomp

puts "Your name is #{new_string}."

=begin
Arrays Challenge
=end

movies = ["Braveheart", "Finding Nemo", "Fight Club", "The Departed", "Gone in 60 Seconds"]

favorite_movies = [movies[0], movies[2], movies[3]]

movies.length

movies.reverse

movies[0] + ", " + movies[3]

movies.slice(0, 3)

movies.slice!(0)

movies.rotate(2)

movies.sample

movies.sample(3)

=begin
Decision Structures Challenge
=end

i = 21
20.times do
  puts i -= 1
end

# a=[]
# i=0
# 20.times do
#   a << a[i] +1
# end

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

numbers.each do |element|
  puts element
end

numbers.reverse.each do |element|
  puts element
end

puts 'give me a number please!'
num = gets.chomp.to_i
if num <= 10
  puts 'Valid'
else
  puts 'Invalid'
end

# Write a program that prints the numbers from 1 to 100. But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz

i = 0
a = 'Fizz'
b = 'Buzz'
100.times do
  i += 1
  if i % 3 == 0 && i % 5 == 0
    puts a+b

  elsif i % 3 == 0
    puts a

  elsif i % 5 == 0
    puts b

else
  puts i
end
end


#Methods to sum numbers & find even/odd

def sum_these_numbers (a, b)
  puts a + b
end

def is_even (a)
  if a % 2 == 0
    puts 'True'
  else
    puts 'False'
  end
end

# Create an array of words. Iterate through the array using .each and a block, then print each of those words in all capitals.

a = ['Hey', 'there', 'tuesday', 'sunday', 'tomorrow']

a.each do |element|
  puts element.upcase
end

# Write a method which calls another method, then uses its return value.

# def method_a (num)
#   num * 2
# end
#
# def method_b
#   puts method_a + 7
# end

def method_a
  puts "What is your name?"
  name = gets.chomp
end

def method_b
  puts "Welcome, #{method_a}!"
end

# Write a function called valid_date that prompts the user for a date with a month, date, and year (all numerically expressed) and returns 'true' if this date exists and 'false' if it does not (for example: 7 28 2014 exists, but 22 34 1999 does not). Make sure to account for leap years. This program is easiest if you prompt for the month, date, and year separately.

def valid_date

  array_30 = [4, 6, 9, 11]
  array_31 = [1, 3, 5, 7, 8, 10, 12]

  puts "Enter a month"
  month = gets.chomp.to_i

  puts "Enter a day"
  day = gets.chomp.to_i

  puts "Enter a year"
  year = gets.chomp.to_i

  if month < 1 || month > 12
    puts "Invalid Month"
  elsif month == 2 && (day < 1 || day > 29)
    puts "Invalid Day"
  elsif month == 2 && day == 29 && (year % 4 != 0 && year % 400 != 0)
    puts "Invalid Day"
  elsif array_30.include?(month) && (day < 1 || day > 30)
    puts "Invalid Day"
  elsif array_31.include?(month) && (day < 1 || day > 31)
    puts "Invalid Day"
  elsif year > 2018 || year < 1000
    puts "Invalid Year"
  else
    puts "This is a valid date!"
  end

end

valid_date


#use if elsif and else blocks to screen moves in Rock Paper Scissors rps_game

def rps_game
  puts 'Enter a move Player 1: Rock, Paper, or Scissors'
  p1_move = gets.chomp
  puts 'Enter a move Player 2: Rock, Paper, or Scissors'
  p2_move = gets.chomp
  if p1_move == p2_move
    puts "Draw"
  elsif (p1_move == "Rock" && p2_move == "Scissors") || (p1_move == "Paper" && p2_move == "Rock") ||
    (p1_move == "Scissors" && p2_move == "Paper")
    puts "Player 1 Wins!!"
  elsif (p2_move == "Rock" && p1_move == "Scissors") || (p2_move == "Paper" && p1_move == "Rock") ||
    (p2_move == "Scissors" && p1_move == "Paper")
    puts "Player 2 Wins!!"
  end
end
rps_game

#Password Checker Challenge
def pass_check

  puts "Please enter a Username"
  user_name = gets.chomp
  puts "Please enter a Password"
  password = gets.chomp

  numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  password_array = password.chars
  comparison = numbers & password_array


  if user_name == password
    puts "Invalid: Username can't match Password"
  elsif user_name.length < 6 || user_name.include?("!") || user_name.include?("#") || user_name.include?("$") || user_name.include?(" ")
    puts "Invalid: Username"
  elsif password.length < 6 || password == "PASSWORD"
    puts "Invalid: Password"
  elsif password.include?("#") == false && password.include?("!") == false && password.include?("$") == false
    puts "Invalid: Password needs to include one of the following characters #, $, !"
  elsif comparison.any? == false
    puts "Invalid: Password must contain a number"
  elsif /[[:upper:]]/.match(password) == nil || /[[:lower:]]/.match(password) == nil
    puts "Invalid: Password must contain a capital letter or lowercase letter."
  else
    puts "Credentials Accepted!"
  end
end

pass_check
