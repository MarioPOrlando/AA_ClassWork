class Employee

  attr_reader :name, :salary

    def initialize(name, title, salary, boss = nil)
        @name = name
        @title = title
        @salary = salary
        @boss = boss 
        @boss.add_employee(self) if boss != nil
    end

    def bonus(multiplyer)
      employ_bonus =  @salary * multiplyer
    end

    def inspect
        "Name = #{self.name} "
    end

end

class Manager < Employee

    attr_reader :employee_list, :name, :salary
    
    def initialize(name, title, salary, boss = nil)
        super(name, title, salary, boss)
        @employee_list = []
        # @boss.add_employee if boss != nil
    end
    
    def inspect
        "Name = #{self.name} Employee List = #{self.employee_list} "
    end

    def add_employee(employee)
        @employee_list << employee
    end

    def bonus(multiplyer)
      manager_bonus = self.all_employees_salaries * multiplyer
    end

    def all_employees_salaries 
        queue = [self]
        total_salary = 0
        until queue.empty?
            current_employee = queue.shift
           total_salary += current_employee.salary if current_employee != self
           @employee_list.each do |employee|
            queue << employee
           end
        end
        total_salary   
    end
end

 ned = Manager.new("Ned", "Founder", 1000000)

 darren = Manager.new("Darren", "TA Manager", 78000, ned)
 shawna = Employee.new("Shawna", "TA", 12000, darren)
 david = Employee.new("David", "TA", 10000, darren)
 p darren.bonus(4)
# p ned.employee_list