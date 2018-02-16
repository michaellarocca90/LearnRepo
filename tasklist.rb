require 'date'

class Tasklist
  def initialize
    @tasklist = []
    @donetasks = []
    @incomplete = []
    @duelist = []
  end

  def addtask *tasks
    @tasklist.concat tasks
  end

  def add_due_task *tasks
    @duelist.concat tasks
  end

  def list_tasks
    @tasklist
  end

  def duelist
    @duelist
  end

  def donetasks
    @donetasks
  end

  def incomplete
    @incomplete
  end

  def grab_done
    @tasklist.each do |t|
      if t.grab_status
        @donetasks << t
      end
    end

    @donetasks
  end

  def grab_incomplete
    @tasklist.each do |t|
      if t.grab_status == false
        @incomplete << t
      end
    end

    @incomplete
  end

end
#creation of the Task class
class Task

  def initialize
    @title = ''
    @description = ''
    @status = false
  end

  def add_title title
    @title = title
  end

  def add_description description
    @description = description
  end

  def grab_title
    @title
  end

  def grab_description
    @description
  end

  #-----------------------------STATUS-------------------------------

  def grab_status
    @status
  end

  def change_status
      @status = !@status
      @status
  end

    #----------------------------------------------------------------

end

class DueDateTask < Task

  def initialize
    super
    @date = DateTime.now
  end

  def taskdate
    @date
  end

  def printinfo
    p "The task is #{@status}, this is the due date:#{@date}, the task staus is #{@status}, the details are #{@description}"
  end

end
