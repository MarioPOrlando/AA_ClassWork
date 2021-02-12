require "hanoi.rb"

describe TowersOfHanoi do
  let(:tower) {TowersOfHanoi.new}

  describe "#move" do
    it "allows user to move piece to empty subarray" do
      expect{tower.move(0, 1)}.to be true
    end

    it "allows user to move piece to a subarray whose last value is larger than the piece" do
      tower.move(0, 1)
      tower.move(0, 2)
      expect{tower.move(1,2)}.to be true
    end

    it "does not allow user to move piece to a subarray whose last value is smaller than the piece" do
      tower.move(0, 1)
      tower.move(0, 2)
      expect{tower.move(2,1)}.to be false
    end

    it "does not move from empty sub array" do
      expect{tower.move(2,1)}.to be false
    end
  end


end


#move allows user to move piece to empty subarray
#move allows user to move piece to a subarray whose last value is larger than the piece
#move does not allow user to move piece to a subarray whose last value is smaller than the piece