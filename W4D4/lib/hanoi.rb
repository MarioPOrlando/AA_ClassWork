class TowersOfHanoi

  attr_reader :board

  def initialize
    @board = [[4,3,2,1], [], []]
  end

  def move(pos_start, pos_end) #pos = number representing subarray
    return false if @board[0][pos_start].empty?
    
    if @board[0][pos_start][-1] < @board[0][pos_end][-1]


  end

end

# [[4,3,2,1], [], []] => this is how the board starts. we need a class to initialize this
#  [row, col]
# Game#move to allow user to move last element (pop) to another subarray
# Game#valid_move? Method to check to see if the numbers in subarray are always in decreasing order
# Game#win? Checks to see if ALL numbers are in a subarray in decreasing order
# Game#display Displays the current state of the subarrays