import React from 'react';
import { Link } from 'react-router-dom';
import part from '../../Assets/part.jpeg';

const Story = ({ story }) => {

    const editDate = (createdAt) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date(createdAt);
        var datestring = d.getDate() + " " +monthNames[d.getMonth()] + " ," + d.getFullYear() 
        return datestring
    }

    const truncateContent = (content) => {
        const trimmedString = content.substr(0, 25);
        return trimmedString
    }
    const truncateTitle= (title) => {
        const trimmedString = title.substr(0, 69);
        return trimmedString
    }
    
    return (

        <div className="story-card">
            <Link to={`/story/${story.slug}`} className="story-link">

                <img className=" story-image" src={part} alt={story.title} />
                <div className="story-content-wrapper">

                    <div className="story-title">
                        
                    {story.title.length > 76 ? truncateTitle(story.title)+"..." : story.title
                    
                    }
                    </div>

                    <p className="story-text">{story.content}</p>
                    <p className="story-texts">{story.receiver}</p>

                </div>
            </Link>
        </div>

    )
}

export default Story;
