# def my_min(arr)
#    min = arr[0]

#    arr.each do |ele|
#         if ele < min
#             min = ele
#         end
#     end
#    min
# end
#Big O: O(n)

def my_min(arr)
    arr.each_with_index do |ele1, idx1|
     return ele1 if arr.all? {|n| ele1 < n}             
    end
end
#Big O: O(n ^ 2)

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min(list)  # =>  -5

