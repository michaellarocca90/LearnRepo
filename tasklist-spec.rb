require 'rspec'
require_relative 'tasklist'

# Story: As a developer, I can create a Task.
describe Task do
  #we want our task to be an object factory
  it "has to be real" do
    expect {Task.new}.to_not raise_error
  end
  # Story: As a developer, I can give a Task a title and retrieve it.
  it "has to have a title that I can access" do
    a_task = Task.new
    expect(a_task.grab_title).to be_a String
  end

  # Story: As a developer, I can give a Task a description and retrieve it.
  it "has a description for each task that I can access" do
    a_task = Task.new
    expect(a_task.grab_description).to be_a String
  end

  #Story: As a developer, I can mark a Task done.
  it "has a default status of false and todo" do
    a_task = Task.new
    expect(a_task.grab_status).to eq false
  end

  it "status has been marked true and completed" do
    a_task = Task.new
    expect(a_task.change_status).to eq true
  end

end

describe Tasklist do

  it "needs to hold a task" do
    a_task = Task.new
    a_tasklist = Tasklist.new
    a_tasklist.addtask(a_task)
    expect(a_tasklist.list_tasks).to include(a_task)
  end

  # Story: As a developer with a TaskList, I can get the completed items.
  it "pull completed tasks from the list" do
    task1 = Task.new
    task2 = Task.new
    task3 = Task.new
    task2.change_status
    a_tasklist = Tasklist.new
    a_tasklist.addtask(task1, task2, task3)
    a_tasklist.grab_done
    expect(a_tasklist.donetasks.length).to eq 1
  end

  it "pull incomplete tasks from the list" do
    task1 = Task.new
    task2 = Task.new
    task3 = Task.new
    task2.change_status
    a_tasklist = Tasklist.new
    a_tasklist.addtask(task1, task2, task3)
    a_tasklist.grab_incomplete
    expect(a_tasklist.incomplete.length).to eq 2
  end

  it "returns a list of tasks that have due dates" do
    duedate = DueDateTask.new
    duedate1 = DueDateTask.new
    a_tasklist = Tasklist.new
    a_tasklist.add_due_task(duedate, duedate1)
    expect(a_tasklist.duelist.length).to eq 2
  end

end

describe DueDateTask do

  it "inherits task elements from Tast" do
    expect(DueDateTask).to be < Task
  end

  it "has a date property" do
    duedate = DueDateTask.new
    expect{duedate.taskdate}.to_not raise_error
  end

  # Story: As a developer, I can print an item with a due date with labels and values.
  it "prints all info it contains" do
    duedate = DueDateTask.new
    duedate.add_title('grocery shopping')
    duedate.add_description('buy only healthy shit')
    expect(duedate.printinfo).to be_a String
  end

end
