require_relative "poly_node.rb"


class KnightPathFinder
attr_reader :considered_positions

  def initialize
    @position = [0,0]
    @root_node = PolyTreeNode.new(@position)
    @considered_positions = []
    build_move_tree 
  end

    def build_move_tree
        nodes = [@root_node]
        until nodes.empty?
        node = nodes.shift
        current_position = node.value
        new_move_positions(current_position).each do |children|
            child = PolyTreeNode.new(children)
            node.add_child(child)
            nodes << child 
        end
        end
    end

    def self.valid_moves(pos)
        valid_moves = []
        x = pos[0]
        y = pos[1]
       
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


    def new_move_positions(pos)
      possible_moves = KnightPathFinder.valid_moves(pos)
      newvar = possible_moves.select {|spot| !@considered_positions.include?(spot)}
      @considered_positions += newvar
      newvar
    end

    def find_path(end_pos)
        @root_node.dfs(end_pos)
    end

    def trace_path_back(@root_node)
    end


end

jeff = KnightPathFinder.new

print jeff.find_path([2, 2])