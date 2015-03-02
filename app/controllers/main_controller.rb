class MainController < ApplicationController
  def index
    @members = Member.published.all
    @meetings = Meeting.published.current.all
    @magazines = Magazine.published.all
    @questions = Question.published.all
  end
end