
exports.seed = function(knex, Promise) {
  return knex('messages').del()
    .then(function () {
      return knex('rooms').del();
    })
    .then(function () {
      return knex('subtopics').del();
    })
    .then(function () {
      return knex('topics').del();
    })
    .then(function () {
      return knex('users').del();
    })
    .then(function () {
      return knex('users').insert([
        {name: 'a', email: 'a@a.com', username: 'Bob3452', password: 0000, avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'},
        {name: 'b', email: 'b@b.com', username: 'Karl4563452', password: 0000, avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'},
        {name: 'c', email: 'c@c.com', username: 'Sarah45345', password: 0000, avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'},
        {name: 'd', email: 'd@d.com', username: 'Jrodan111', password: 0000, avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'},
        {name: 'e', email: 'e@e.com', username: 'Bob3452', password: 0000, avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'},
        {name: 'f', email: 'f@f.com', username: 'hjd', password: 0000, avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'}
      ]);
    })
    .then(function() {
      return knex('topics').insert([
        {name: 'Tech'},
        {name: 'Sports'},
        {name: 'Finance'},
        {name: 'Politics'}
      ]);
    })
    .then(function() {
      return knex('subtopics').insert([
        {name: 'Big 5', topic_id: 1},
        {name: 'Big Data', topic_id: 1},
        {name: 'Startups', topic_id: 1},
        {name: 'Gadgets', topic_id: 1},
        {name: 'Software', topic_id: 1},
        {name: 'Hardware', topic_id: 1},
        {name: 'Ideas', topic_id: 1},
        {name: 'Science', topic_id: 1},
        {name: 'Security', topic_id: 1},
        {name: 'Transportation', topic_id: 1},
        {name: 'Culture', topic_id: 1},
        {name: 'NBA', topic_id: 2},
        {name: 'NFL', topic_id: 2},
        {name: 'NHL', topic_id: 2},
        {name: 'MLB', topic_id: 2},
        {name: 'FIFA', topic_id: 2},
        {name: 'Tennis', topic_id: 2},
        {name: 'Rugby', topic_id: 2},
        {name: 'World Cup', topic_id: 2},
        {name: 'General Market News', topic_id: 3},
        {name: 'Stocks', topic_id: 3},
        {name: 'Rates & Bonds', topic_id: 3},
        {name: 'Currencies', topic_id: 3},
        {name: 'Futures', topic_id: 3},
        {name: 'ETFs', topic_id: 3},
        {name: 'Commodities', topic_id: 3},
        {name: 'International', topic_id: 4},
        {name: 'US', topic_id: 4},
        {name: 'China', topic_id: 4},
        {name: 'Europe', topic_id: 4},
        {name: 'Canada', topic_id: 4},
        {name: 'England', topic_id: 4},
        {name: 'Russia', topic_id: 4},
        {name: 'Middle East', topic_id: 4}
      ]);
    })
    .then(function() {
      return knex('rooms').insert([
        {name: 'Sports Central', image: 'https://i.ytimg.com/vi/YBi6-UoXxZw/maxresdefault.jpg', description: 'hahaha', user_id: 1, subtopic_id: 2},
        {name: 'Politics Now', image: 'https://static.makeuseof.com/wp-content/uploads/2017/08/twitch-change-video-gaming-670x335.jpg', description: 'hahaha', user_id: 2, subtopic_id: 2},
        {name: 'eSports eSports', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO', description: 'hahaha', user_id: 3, subtopic_id: 3},
        {name: 'FoodCentral', image: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg', description: 'hahaha', user_id: 4, subtopic_id: 5},
        {name: 'Gordon Ramsay', image: 'https://i.ytimg.com/vi/YBi6-UoXxZw/maxresdefault.jpg', description: 'hahaha', user_id: 5, subtopic_id: 8},
        {name: 'The Young Turks', image: 'https://static.makeuseof.com/wp-content/uploads/2017/08/twitch-change-video-gaming-670x335.jpg', description: 'hahaha', user_id: 1, subtopic_id: 9},
        {name: 'Russia Today', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO', description: 'hahaha', user_id: 2, subtopic_id: 11},
        {name: 'Hot Wings', image: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg', description: 'hahaha', user_id: 3, subtopic_id: 13},
        {name: 'Starcraft Player', image: 'https://i.ytimg.com/vi/YBi6-UoXxZw/maxresdefault.jpg', description: 'hahaha', user_id: 4, subtopic_id: 15},
        {name: 'Global News', image: 'https://static.makeuseof.com/wp-content/uploads/2017/08/twitch-change-video-gaming-670x335.jpg', description: 'hahaha', user_id: 5, subtopic_id: 17},
        {name: 'Global News', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO', description: 'hahaha', user_id: 1, subtopic_id: 19},
        {name: 'Global News', image: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg', description: 'hahaha', user_id: 2, subtopic_id: 13},
        {name: 'Global News', image: 'https://i.ytimg.com/vi/YBi6-UoXxZw/maxresdefault.jpg', description: 'hahaha', user_id: 3, subtopic_id: 4},
        {name: 'Global News', image: 'https://static.makeuseof.com/wp-content/uploads/2017/08/twitch-change-video-gaming-670x335.jpg', description: 'hahaha', user_id: 4, subtopic_id: 7},
        {name: 'International News', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO', description: 'hahaha', user_id: 5, subtopic_id: 9},
        {name: 'US News', image: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg', description: 'hahaha', user_id: 1, subtopic_id: 16},
        {name: 'China News', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczL8wU1EYEbH9eFpSVoM7UwKeQDAsNtqEhL0S155TUcN_bdUO', description: 'hahaha', user_id: 2, subtopic_id: 13},
        {name: 'Europe News', image: 'https://ptzoptics.com/wp-content/uploads/2017/10/live-streaming-cameras-on-gary.jpg', description: 'hahaha', user_id: 3, subtopic_id: 17}
      ]);
    })
    .then(function() {
      return knex('messages').insert([
        {content: 'Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated.', user_id: 1, room_id: 1},
        {content: 'Polite askajsdf', user_id: 1, room_id: 1},
        {content: 'Polite in of in oh needed itself silent course.', user_id: 1, room_id: 1},
        {content: 'Polite in of in oh nee', user_id: 1, room_id: 1},
        {content: 'Polahwa soidjfg wflaksjdlkfn!!!', user_id: 1, room_id: 1},
        {content: 'Polite askajsdf', user_id: 1, room_id: 1},
        {content: 'Polahwa soidjfg wflaksjdlkfn!!!', user_id: 1, room_id: 1}
      ]);
    })
};
