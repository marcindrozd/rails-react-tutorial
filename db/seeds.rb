1.upto(10) do |i|
  Event.create(
    name: "Event #{i}",
    description: "Sample event with number #{i}",
    event_date: Date.today + rand(3).months,
    place: "Random place no. #{i}"
  )
end
