FROM rails:latest

RUN apt-get update -qq && apt-get install -y build-essential

RUN apt-get install -y libqtwebkit-dev qt4-qmake g++

RUN apt-get install wget && wget https://github.com/GCorbel/dotfiles/raw/master/development_docker_install.sh -O - | sh

RUN mkdir /api
WORKDIR /api

ADD ./Gemfile* /api/

ENV BUNDLE_PATH /bundle
RUN bundle config build.nokogiri --use-system-libraries

RUN gem install bundler

ADD . /api

EXPOSE "3000"
