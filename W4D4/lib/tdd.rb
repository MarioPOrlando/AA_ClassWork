def my_uniq(arr)
    uniq = []
    arr.each { |ele| uniq << ele if !uniq.include?(ele)}
    uniq
end

p my_uniq([1,1,2,2,3,4])