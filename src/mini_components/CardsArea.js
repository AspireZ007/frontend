import React from 'react';
import FriendProfileCards from './FriendProfileCards.js';
import ExploreProfileCards from './ExploreProfileCards.js';
import '../CSS/cardsArea.css';
function cardsArea({toggleState}) {
    const profiles = [
        {
            "name" : 'Virat Kohli',
            "img-url" : "/assets/uploads/male_profile_picture.jpg",
            "cover-img-url" : "/assets/uploads/cover_picture.jpg"
        },
        {
            "name" : 'Virat Kohli',
            "img-url" : "/assets/uploads/female_profile_picture.jpg",
            "cover-img-url" : "/assets/uploads/cover_picture.jpg"
        },
        {
            "name" : 'Virat Kohli',
            "img-url" : "/assets/uploads/kid_profile_picture.jpg",
            "cover-img-url" : "/assets/uploads/cover_picture.jpg"
        },
        {
            "name" : 'Virat Kohli',
            "img-url" : "/assets/uploads/kid_profile_picture.jpg",
            "cover-img-url" : "/assets/uploads/cover_picture.jpg"
        }
        ,
        {
            "name" : 'Virat Kohli',
            "img-url" : "/assets/uploads/male_profile_picture.jpg",
            "cover-img-url" : "/assets/uploads/cover_picture.jpg"
        },
        {
            "name" : 'Virat Kohli',
            "img-url" : "/assets/uploads/female_profile_picture.jpg",
            "cover-img-url" : "/assets/uploads/cover_picture.jpg"
        },
        {
            "name" : 'Virat Kohli',
            "img-url" : "/assets/uploads/kid_profile_picture.jpg",
            "cover-img-url" : "/assets/uploads/cover_picture.jpg"
        },
        {
            "name" : 'Virat Kohli',
            "img-url" : "/assets/uploads/kid_profile_picture.jpg",
            "cover-img-url" : "/assets/uploads/cover_picture.jpg"
        },
        {
            "name" : 'Virat Kohli',
            "img-url" : "/assets/uploads/male_profile_picture.jpg",
            "cover-img-url" : "/assets/uploads/cover_picture.jpg"
        },
        {
            "name" : 'Virat Kohli',
            "img-url" : "/assets/uploads/female_profile_picture.jpg",
            "cover-img-url" : "/assets/uploads/cover_picture.jpg"
        },
        {
            "name" : 'Virat Kohli',
            "img-url" : "/assets/uploads/kid_profile_picture.jpg",
            "cover-img-url" : "/assets/uploads/cover_picture.jpg"
        },
        {
            "name" : 'Virat Kohli',
            "img-url" : "/assets/uploads/kid_profile_picture.jpg",
            "cover-img-url" : "/assets/uploads/cover_picture.jpg"
        }
    ];
    return ( 
        <div className = 'card-area'>
            {
                profiles.map((profile , i) => ((toggleState === 0) ? <FriendProfileCards profile={profile}/> : <ExploreProfileCards profile={profile}/>))
            }
        </div>
     );
}

export default cardsArea;