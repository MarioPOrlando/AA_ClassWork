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

def transpose(matrix)
    matrix.transpose
end

def stock_picker(arr)
    largest_value = 0
    largest_pair = nil
    arr.each_with_index do |ele1, i|
        arr.each_with_index do |ele2, j|
            if i < j
                dif = ele2 - ele1
                if largest_value < dif
                    largest_value = dif
                    largest_pair = [i, j]
                end
            end
        end
    end
    largest_pair
end

