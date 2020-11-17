animes = Anime.create([
    {
        name: 'Naruto',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/51m6JmliIaL._AC_.jpg'
    },
    {
        name: 'My Hero Academia',
        image_url: 'https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXs_cjJMWwRV9Z3UKzjzpPTj5QKfZzo7TvL6A5__CYsTd1qL99-1O9reC_lRcZo38pnUedPoJimkypTa2CTpTf_CxIoY.jpg?r=342'
    },
    {
        name: 'Demon Slayer',
        image_url: 'https://financerewind.com/wp-content/uploads/2020/10/Demon-Slayer-Movie-Feature-Image.png'
    },
    {
        name: 'Jujutsu Kaisen',
        image_url: 'https://i1.wp.com/butwhythopodcast.com/wp-content/uploads/2020/10/68D0F955-29C3-4EAB-A8C2-E51792460759.jpeg?fit=800%2C447&ssl=1'
    },
    {
        name: 'Fullmetal Alchemist',
        image_url: 'https://blacknerdproblems.com/wp-content/uploads/2016/05/JPEG-Promo-15.jpg'
    },
    {
        name: 'Attack on Titan',
        image_url: 'https://cdn.vox-cdn.com/thumbor/Jf4iGIcgO910Cxl5Sam1WVdf57M=/0x36:852x515/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/50015235/titan.0.0.jpg'
    },
    {
        name: 'One Piece',
        image_url: 'https://img1.looper.com/img/gallery/every-one-piece-movie-ranked-worst-to-best/intro-1596652585.jpg'
    }
])

reviews = Review.create([
    {
        title: 'Great Anime',
        description: 'Amazing anime, definitely a good watch!', 
        score: 5, 
        anime: animes.first
    },
    { 
        title: 'Boring Anime',
        description: 'Story is repetitive, only watch if you want to be bored', 
        score: 1, 
        anime: animes.first
    }
])

