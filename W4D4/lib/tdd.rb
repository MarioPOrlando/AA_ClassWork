def my_uniq(arr)
    uniq = []
    arr.each { |ele| uniq << ele if !uniq.include?(ele)}
    uniq
end

# p my_uniq([1,1,2,2,3,4])



def two_sum(arr)
    new_arr = []

    arr.each_with_index do |ele1, i|
        arr.each_with_index do |ele2, j|
        if i < j 
            if ele1 + ele2 == 0 
                new_arr << [i, j] 
            end
        end
        end
    end
    new_arr
end

# def two_sum(arr)
#     pairs = []

#     arr.each_index do |i|
#         ((i + 1)...arr.length).to_a.each do |j|
#             paris << [i, j] if arr[i] + arr[j] == 0
#         end
#     end
#     pairs
# end