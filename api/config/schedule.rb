every :friday, at: '8am' do
  MemberMailer.notify_looser(Member.all.sample).deliver
end
