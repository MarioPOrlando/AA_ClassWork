require "tdd.rb"

describe "my_uniq" do 

    let(:array){[1,1,2,2,3,4]}
    let(:uniq_array){my_uniq(array)}

    it "removes duplicates" do 
        array.each do |ele| 
            expect(uniq_array.count(ele)).to eq(1)
        end
    end

    it "dosnt modify the original array" do 
        expect{my_uniq(array)}.to_not change{array}
    end 

end


describe "two_sum" do
    let(:array) { [1, 5, -2, -1] }
    let(:multi_pair) { [1, -1, 2, -2] }
    let(:no_pair) {[1, 2, 3, 4]}

    it "finds a zero sum pair" do
        expect(two_sum(array)).to eq([[0,3]])
        expect(two_sum(multi_pair)).to eq([[0, 1], [2, 3]])
        expect(two_sum(no_pair)).to eq([])
    end

end
