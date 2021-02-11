def my_uniq(arr)
    uniq = []
    arr.each { |ele| uniq << ele if !uniq.include?(ele)}
    uniq
end