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


describe "transpose" do

    let(:matrix) {
       [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]
    }

    it "transposes a matrix" do
        expect(transpose(matrix)).to eq([
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
        ])
    end
end


describe "stock_picker" do
    let(:array) { [4, 3, 2, 0, 1] }
    let(:array_2) { [4, 3, 7, 2, 8] }
    let(:array_3) { [3, 2 ,1]}

    it "finds best most profitable pair of days" do 
        expect(stock_picker(array)).to eq([3, 4])
        expect(stock_picker(array_2)).to eq([3, 4])
        expect(stock_picker(array_3)).to be_nil
    end
end