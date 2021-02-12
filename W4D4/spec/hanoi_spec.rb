require "hanoi.rb"

describe TowersOfHanoi do
  let(:tower) {TowersOfHanoi.new}

  describe "#move" do
    it "allows user to move piece to empty subarray" do
      expect(tower.move(0, 1)).to be true
    end

  end


end


#move allows user to move piece to empty subarray
#move allows user to move piece to a subarray whose last value is larger than the piece
#move does not allow user to move piece to a subarray whose last value is smaller than the piece