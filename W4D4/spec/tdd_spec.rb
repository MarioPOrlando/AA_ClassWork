require "tdd.rb"

describe "my_uniq" do 

    let(:array){[1,1,2,2,3,4]}
    it "removes duplicates" do 
        array.each do |ele| 
            expect{array.count(ele)}.to eq(1)
        end
    end

    it "dosnt modify the original array" do 
        expect{my_uniq(array)}.to_not change(array)
    end

    
end
