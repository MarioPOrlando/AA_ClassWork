def my_min(arr)
   min = arr[0]

   arr.each do |ele|
        if ele < min
            min = ele
        end
    end
   min
end
#Big O: O(n)

def my_min(arr)
    arr.each_with_index do |ele1, idx1|
     return ele1 if arr.all? {|n| ele1 < n}             
    end
end
#Big O: O(n ^ 2)

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5

# def largest_cont_subsum(list)
#     pairs = []

#     list.each.with_index do |n_1, i_1|
#         (i_1...list.length).each do |i_2|
#             pairs << list[i_1..i_2]
#         end
#     end
#     sums = []
#     pairs.each do |pair|
#         sums << pair.sum
#     end
#     sums.length
# end
# list = [5, 3, -7, 9, 18, 11]
# p largest_cont_subsum(list)
#Big O: 3n^3 = O(2^n)

def largest_cont_subsum(list)
    biggest = list
    current = list[1]

    (0...list.length).each do |i|
        if current <  list[i] + list[i + 1] && i != list.length - 2
            puts current
            current = list[i] + list[i + 1] 
            puts current
        end
    end
    current
end

list = [5, 3, -7,]
p largest_cont_subsum(list)