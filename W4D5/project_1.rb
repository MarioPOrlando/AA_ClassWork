def my_min(arr)
   min = arr[0]

   arr.each do |ele|
        if ele < min
            min = ele
        end
    end
   min
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min(list)  # =>  -5
#Big O: 
