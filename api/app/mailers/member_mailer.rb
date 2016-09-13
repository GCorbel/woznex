class MemberMailer < ApplicationMailer
  def notify_looser(member)
    mail to: member.email
  end
end
