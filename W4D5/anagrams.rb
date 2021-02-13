# def anagram?(str_1,str_2)
#     str1 = str_1.split('')
#     str2 = str_2.split('')
#     anagram = []
#     anagram = str2.permutation(str1.length).to_a
#     anagram.include?(str1)
#     p anagram.length
# end
#Big: O(n ^ 2)

# p anagram?("gizmo", "sally")    #=> false
# p anagram?("elvis", "lives")    #=> true

def anagram?(str_1, str_2)
    str1 = str_1.split("")
    str2 = str_2.split("")

    str1.each do |ele|
        index = str2.find_index(ele)
        str2.delete(index)
    end

    str2.empty?
end

p anagram?("gizmo", "sally")    #=> false
p anagram?("elvis", "lives") 