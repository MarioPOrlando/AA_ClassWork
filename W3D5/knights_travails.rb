require_relative "poly_node.rb"

class KnightPathFinder
  def initialize
    @position = [0,0]
    @root_node = PolyTreeNode.new(@position)
    @considered_positions = []
  end

  def build_move_tree

  end

    def self.valid_moves(pos)

        x = pos[0]
        y = pos[1]
        valid_moves = []
        possible_moves =[[1, 2], [2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1], [-1, 2], [-2, 1]]
            possible_moves.each do |sub_arr|
            new_x = sub_arr[0] + x
            new_y = sub_arr[1] + y
                if (new_x > -1 && new_x < 8) && (new_y > -1 && new_y < 8)
                    valid_moves << [new_x, new_y]
                end
            end
        valid_moves
    end

end

KnightPathFinder.valid_moves