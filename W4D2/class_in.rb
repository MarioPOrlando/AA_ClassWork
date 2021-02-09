class Employee
 
    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss 
    end

    def bonus(multiplyer)
      employ_bonus =  @salary * multiplyer
    end


end

class Manager < Employee

    
    def initialize(name, title, salary, boss)
        super(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss 
        @employee_list = []
    end

    def add_employee
        @employee_list << Employee
    end

    def bonus(multiplyer)
      manager_bonus = self.all_employees_salaries * multiplyer
    end

    def all_employees_salaries 
        queue = [self]
        total_salary = 0
        until queue.empty?
            current_employee = queue.shift
           total_salary += node.salary if node != self
           @employee_list.each do |employee|
            queue << employee
           end
        end
        total_salary   
    end


end

 