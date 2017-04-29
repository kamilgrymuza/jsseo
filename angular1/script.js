angular.module('jsSeoTest', [])
  .controller('jsSeoController', function() {
    var contents = this;
    contents.header = "Few Reasons to visit London and learn Angular v1";
    contents.p1 = "Are you an American who's intrigued in traveling abroad? If so, have you decided on a location yet? Despite the fact that you've a number of great locations to select from, the one that you need to carefully analyze is that of London, England. As good as it is to learn that London, England is the ideal spot to go on your next international trip, you may be wondering why. What it's that sets London apart from the rest? Continue reading on to figure out. Many people mechanically make the error of considering that international holidays are best left for the adults.";
    contents.p2 = "Yes, this may be true in some cases, but not in London. In London, you'll find that people of all ages are welcomed and may have a unforgettable trip. Even when you're the parent of the pre schooler or an adolescent, or maybe you are a senior citizen enjoying the retirement, a journey to London is not from the reach. Not only is London ideal for people of all ages, but it's also perfect for all kinds of travel. Numerous reasons for travel to London include intimate getaways, family holidays, solo explorations, honeymoons, anniversaries, as well as business trips. Irrespective of why you're traveling to London or what you expect to get from the trip, you'll have time of your life.";
    contents.p3 = "As for why London is ideal for people of all ages and all kinds of travel, it's to do with attractions. In London, you've hundreds of significant attractions to select from. There are must visits that most are urged to see, including Buckingham Palace, Tower Bridge, the London Eye as well as St. Paul's Cathedral. Then there are attractions which appeal to those with special interests as well as particular age groups. Families are urged to visit the Imperial War Museum as well as the London Aquarium and possibly among the numerous Royal Parks or possibly if you are seeking adventure with a little horror you must visit the London Dudgeon.";
    contents.p4 = "<a href='/angular1/test/'>Adults may indulge themselves with a journey</a> to one among London's several theaters or possibly a visit to a pub. It can't be stressed enough that there's something for everybody in London. Additionally to visit the attractions already mentioned, there are numerous activities that you could participate in while visiting London. These activities contain dining, shopping and sightseeing. The largest cost of traveling to London may be your airline tickets. As for your hotel, you'll find hundreds of hotels near as well as in London. If traveling on a spending budget, you don't have to stay in a top quality hotel.";
    contents.link = '<a href="/angular1/test/">Crawl me if you can!</a>';
  })
.filter('trusted',
   function($sce) {
     return function(ss) {
       return $sce.trustAsHtml(ss)
     };
   }
);
